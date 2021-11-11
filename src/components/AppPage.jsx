import { makeStyles } from '@material-ui/core';
import { green, yellow } from '@material-ui/core/colors';
import { Add, ArrowForward, Remove, Warning } from '@mui/icons-material';
import { blue, red } from '@mui/material/colors';
import clsx from 'clsx';
import {React, useEffect, useState} from 'react';
import ownStyle from "../constants/ownStyle";
import fileBlue from "../img/apps/file-blue.svg";
import fileRed from "../img/apps/file-red.svg";
import $ from "jquery";
import { CircularProgress } from '@mui/material';
import { getStorage, ref, uploadBytes, listAll, deleteObject } from "firebase/storage";
import { checkCookie, getCookie } from '../cookies';
import { useHistory } from 'react-router-dom';
import handleDropFiles from "../listFile";

import { initializeApp } from "firebase/app";
let storage;
let strRef;
// const baseUrl = "http://localhost:8080";
const baseUrl = "https://meka-app.soatra.com";
let counter = 0;

const AppPage = () => {
  const classes = styles();
  const history = useHistory();
  const [show, setShow] = useState(null);
  const [openDialogAdd, setOpenDialogAdd] = useState(false);
  const [openDialogRemove, setOpenDialogRemove] = useState(false);
  const [fileString, setFileString] = useState("");
  const [dragEnter, setDragEnter] = useState(false);
  const [name, setName] = useState("");
  const [files, setFiles] = useState([]);
  const [nameWarning, setNameWarning] = useState(false);
  const [fileWarning, setFileWarning] = useState(false);
  const [inAddProgress, setInAddProgress] = useState(false);
  const [inRemoveProgress, setInRemoveProgress] = useState(false);
  const [isSignIn] = useState(checkCookie("email"));
  const [names, setNames] = useState([]);
  const [nameNotAvailable, setNameNotAvailable] = useState(false);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (isSignIn) {
      setInRemoveProgress(true);
      const email = getCookie("email");
      fetch(baseUrl+"/config", {
        method: "post"
      }).then(res => {
        res.json().then(config => {
          fetch(baseUrl+"/docs?email="+email, {
            method: "post"
          }).then(res => {
            res.json().then(res => {
              const app = initializeApp(config);
              storage = getStorage(app, "gs://meka-356bd.appspot.com");
              strRef = url => ref(storage, url);
              setNames(res.names);
              setInRemoveProgress(false);
            });
          });
        });
      });
    }
  }, [isSignIn]);

  const addResetter = () => {
    counter = 0;
    setPercentage(0);
    setOpenDialogAdd(false);
    setNameWarning(false);
    setFileWarning (false);
    setInAddProgress(false);
    setNameNotAvailable(false);
    setName("");
    setFileString("");
    setFiles([]);
    $("#inputFile").val("");
  }
  const removeReseter = () => {
    setShow(null);
    setOpenDialogRemove(false);
    setInRemoveProgress(false);
  }
  const handleClickOutSide = (event) => {
    if (event.target.id === 'out') {
      if (show !== null) {
        setShow(null);
      }
    }
  }
  // files uploader ---------------
  const fileUploader = (file) => {
    counter ++;
    const fileName = name + (file.name.startsWith("/") ? file.name : "/" + file.name);
    uploadBytes(
      strRef(fileName),
      file
    ).then(res => {
      if (counter < files.length) {
        setPercentage(Math.ceil(counter / files.length * 100));
        fileUploader(files[counter]);
      }
      else {
        const email = getCookie("email");
        fetch(baseUrl+`/addname?email=${email}&name=${name}`, {
          method: "post"
        }).then(res => {
          setNames([...names, name]);
          setInAddProgress(false);
          addResetter()
        });
      }
    });
  }
  const handleNameClick = (index) => {
    if (show !== index) {
      setShow(index);
    }
    else {
      setShow(null);
    }
  }
  const handleAddRemove = () => {
    if (show === null) {
      setOpenDialogAdd(true);
    }
    else {
      setOpenDialogRemove(true);
    }
  }
  const handleChoose = () => {
    $("#inputFile").trigger("click");
  }
  const deleteJob = name => {
    listAll(ref(storage, name)).then(res => {
      res.items.forEach(item => {
        deleteObject(ref(storage, `${name}/${item.name}`));
      });
      res.prefixes.forEach(pre => {
        deleteJob(pre.fullPath);
      });
    });
  }
  const handleYes = () => {
    setInRemoveProgress(true);
    deleteJob(names[show]);
    const email = getCookie("email");
    const name = names[show];
    fetch(baseUrl+`/removename?email=${email}&name=${name}`, {
      method: "post"
    }).then(res => {
      names.splice(names.indexOf(name), 1);
      removeReseter();
    });
  }
  const handleNo = () => {
    removeReseter();
  }
  const handleAdd = () => {
    const correctFomart = new RegExp(/^\w+$/);
    if (name === "") {
      setNameWarning(true);
    }
    else if (!correctFomart.test(name)) {
      setNameWarning(true);
    }
    else if (files.length === 0) {
      setFileWarning (true);
    }
    else {
      setInAddProgress(true);
      listAll(ref(storage, name)).then(res => {
        const isAvailable = res.items.length + res.prefixes.length === 0;
        if (isAvailable) {
          fileUploader(files[counter]);
        }
        else {
          setNameNotAvailable(true);
          setInAddProgress(false);
        }
      });
    }
  }
  const handleCancel = () => { 
    addResetter() 
  }
  const handleNameChange = (event) => {
    setName(event.target.value);
    if (name !== "") {
      setNameWarning(false);
    }
  }
  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      setFileString(`${files.length} files`);
      setFiles(files);
      setFileWarning(false);
    }
    else {
      setFiles([]);
      setFileString("");
    }
  }
  const handleDragOver = (event) => { 
    event.preventDefault();
    if (!dragEnter) setDragEnter(true);
  }
  const handleDragLeave = () => { setDragEnter(false); }
  const handleDrop = (event) => {
    handleDropFiles(event).then(fileList => {
      setFileString(`${fileList.length} files`);
      setFiles(fileList);
      if (fileList.length > 0) {
        setFileWarning(false);
      }
    });
  }
  const handleSignIn = () => {
    history.push("/signin");
  }
  return (
  <div className={classes.AppPage} onClick={handleClickOutSide} id='out'> 
    {
      isSignIn ? <>
        <div className={classes.wrapper} id='out'>
          <div className={classes.actions}>
              <button 
                className={clsx(show === null ? classes.btnAdd : classes.btnRemove, classes.btn)}
                onClick={handleAddRemove}>
                {
                  show === null ? <>
                    Add App
                    <Add className={classes.iconAdd} />
                  </> : <>
                    Remove App
                    <Remove className={classes.iconRemove} />
                  </>
                }
              </button>
          </div>
          <div className={classes.nameWrapperOutside}>
            {
              names.map((name, i) => 
              <div className={clsx(classes.nameWrapper, show === i && classes.nameWrapperClick)} key={i}>
                <span className={classes.name} onClick={() => handleNameClick(i)}>{name}</span>
                <a 
                  className={clsx(classes.url, show === i && classes.urlShow)}
                  href={"https://meka-app.soatra.com/" + name} 
                  target='_blank'>
                  {"https://meka-app.soatra.com/" + name}
                </a>
              </div>
              )
            }
          </div>
          <div className={clsx(classes.blackScreen, (openDialogAdd || openDialogRemove || inAddProgress || inRemoveProgress) && classes.showDialog)}></div>
          <div className={clsx(classes.model, classes.modelAddApp, (openDialogAdd && !inAddProgress) && classes.showDialog)}>
            <span className={clsx(classes.modelTitle, classes.drag, (nameWarning || nameNotAvailable) && classes.titleWarning)}>
              {
                nameNotAvailable ? "This name is token" : "Choose App Name"
              }
            </span>
            <input className={clsx(classes.inputName)} placeholder='name:' onChange={handleNameChange} value={name} autoComplete="off" autoCorrect='false'/>
            <span className={clsx(classes.modelTitle, classes.drag, fileWarning && classes.titleWarning)}>
              Drag | Choose Files 
              {
                fileWarning ? <img className={classes.iconFile} src={fileRed} alt="file" /> :
                <img className={classes.iconFile} src={fileBlue} alt="file" />
              }
            </span>
            <span className={clsx(classes.modelContent, classes.modelContentFile, dragEnter && classes.changeBorder)} onDragOver={handleDragOver} onDrop={handleDrop} onDragLeave={handleDragLeave}>
              <input type="file" multiple className={classes.inputFile} id='inputFile' onChange={handleFileChange} />
              <span className={clsx(classes.fileString, fileString !== "" && classes.showDialog)}>{fileString}</span>
              <button className={clsx(classes.btn, classes.btnChoose)} onClick={handleChoose}>Choose</button>
            </span>
            <span className={classes.modelAction}>
              <button className={clsx(classes.btn, classes.btnDaiAdd)} onClick={handleAdd}>Add</button>
              <button className={clsx(classes.btn, classes.btnDaiCencel)} onClick={handleCancel}>Cancel</button>
            </span>
          </div>
          <div className={clsx(classes.model, (openDialogRemove && !inRemoveProgress) && classes.showDialog)}>
            <span className={clsx(classes.modelTitle, classes.warning)}>
              Warning <Warning className={classes.iconWarning} />
            </span>
            <span className={clsx(classes.modelContent, classes.textWarning)}>
              Are you sure to Delete this app ?
            </span>
            <span className={classes.modelAction}>
              <button className={clsx(classes.btn, classes.btnYes)} onClick={handleYes}>Yes</button>
              <button className={clsx(classes.btn, classes.btnNo)} onClick={handleNo}>No</button>
            </span>
          </div>
          <div className={clsx(classes.model, classes.modalProgress, inRemoveProgress && classes.showDialog)}>
            <span className={clsx(classes.modelTitle)}/>
            <span className={clsx(classes.modelContent)}>
              <CircularProgress style={{color: blue[500]}}/>
            </span>
            <span className={classes.modelAction}/>
          </div>
          <div className={clsx(classes.model, classes.modalProgress, inAddProgress && classes.showDialog)}>
            <span className={clsx(classes.modelContent)}>
              <CircularProgress value={percentage} variant='determinate' size={65} style={{color: blue[500]}}/>
              <p className={classes.percentage}>{percentage + "%"}</p>
            </span>
          </div>
        </div>
      </> : <>
        <div className={classes.statusWrapper}>
          <p className={classes.status}>You need to signIn to open the apps.</p>
          <button className={clsx(classes.btn, classes.btnSignIn)} onClick={handleSignIn}>SignIn Page<ArrowForward className={classes.iconNext} /></button>
        </div>
      </>
    }
  </div>
  );
}
const styles = makeStyles(theme => ({
  AppPage: {
    ...ownStyle.width(theme),
    margin: ownStyle.margin,
    flex: ownStyle.flex,
    marginTop: 15,
    marginBottom: 15,
    minHeight: 300,
    boxShadow: "0px 0px 3px 2px #aaa",
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    flexWrap: "nowrap",
  },
  statusWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  status: {
    color: green[400]
  },
  btnSignIn: {
    background: green[400],
    minWidth: 60
  },
  btnDaiAdd: {
    background: green[400],
    marginRight: 5,
    minWidth: 60
  },
  btnDaiCencel: {
    background: red[400],
    marginLeft: 5,
    minWidth: 60
  },
  btnYes: {
    background: red[400],
    marginRight: 5,
    minWidth: 60
  },
  btnNo: {
    background: green[400],
    marginLeft: 5,
    minWidth: 60
  },
  modelAction: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  fileString: {
    color: blue[500],
    marginBottom: 5,
  },
  btnChoose: {
    marginTop: 5,
    background: blue[400]
  },
  inputName: {
    color: green[600],
    outline: "none",
    padding: 6,
    borderRadius: 5,
    border: "1px solid",
    borderColor: green[200],
    "&:focus": {
      borderColor: green[400]
    },
    "&::placeholder": {
      color: "#0008"
    }
  },
  inputFile: {
    display: "none"
  },
  textWarning: {
    marginTop: -20
  },
  modelContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#101010",
    postition: "relative",
    flex: 1,
    marginBottom: 3
  },
  percentage: {
    color: blue[500],
    position: "absolute",
    top: "calc(40% - 3px)",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  modelContentFile: {
    border: "2px dotted",
    borderColor: blue[300],
  },
  changeBorder: {
    borderColor: blue[100],
  },
  drag: {
    color: blue[500],
    margin: "3px 0px"
  },
  warning: {
    color: yellow[800],
  },
  iconFile: {
    height: 23
  },
  modelTitle: {
    fontSize: 17,
    fontWeight: 500,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "default"
  },
  titleWarning: {
    color: red[500]
  },
  model: {
    position: "fixed",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: 250,
    height: 180,
    padding: 10,
    background: "#f9f9f9",
    borderRadius: 5,
    visibility: "hidden",
    zIndex: 1
  },
  modelAddApp: {
    width: 330,
    height: 290,
  },
  modalProgress: {
    width: 120,
    height: 120,
  },
  blackScreen: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "#0008",
    visibility: "hidden",
    zIndex: 1
  },
  showDialog: {
    visibility: "visible"
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10
  },
  actions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5
  },
  btn: {
    transition: "transform ease-in-out 100ms",
    outline: "none",
    border: "none",
    borderRadius: 5,
    padding: "3px 5px",
    color: "#f9f9f9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      opacity: "0.7",
    },
    "&:active": {
      opacity: "0.5",
      transform: "scale(0.95, 0.95)"
    }
  },
  btnAdd: {
    background: green[400],
  },
  btnRemove: {
    background: red[400],
  },
  btnHide: {
    display: "none",
  },
  iconAdd: {
  },
  iconRemove: {
  },
  nameWrapperOutside: {
    padding: 10
  },
  nameWrapper: {
    display: "flex",
    transition: "all ease-in-out 250ms",
    flexDirection: "column",
    padding: 10,
    border: "1px solid #cacaca00",
    "&:hover": {
      borderColor: "#cacacace"
    }
  },
  nameWrapperClick: {
    border: "1px solid #cacaca",
    borderRadius: 5
  },
  name: {
    textAlign: "center",
    fontSize: 18,
    color: green[500],
    cursor: "default",
  },
  url: {
    textAlign: "center",
    transition: "all ease-in-out 250ms",
    fontSize: 15,
    color: blue[300],
    overflow: "hidden",
    height: 0,
    transform: "translate(0, -100%)",
    textDecoration: "none"
  },
  urlShow: {
    height: "fit-content",
    transform: "translate(0, 0)",
  }
}));

export default AppPage;