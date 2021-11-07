import { makeStyles, Typography, Button, IconButton, Link } from '@material-ui/core';
import { blue, green, orange } from "@material-ui/core/colors";
import {React, useEffect} from 'react';
import ownStyle from "../constants/ownStyle";
import { Add, FilePresent, Folder, Remove } from '@mui/icons-material';
import clsx from "clsx";
import { useState } from 'react';
import fileIcon from "../img/signin/file.svg";
import { amber } from '@mui/material/colors';
import FolderPath from './FolderPath';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

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
    flexWrap: "nowrap"
  },
  names: {
    flex: 1,
    maxWidth: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "2px solid #cecece",
    padding: 5
  },
  nameHeader: {
    
  },
  btnOption: {
    color: "#f9f9f9",
    transition: "all ease-in-out 50ms",
    "&:active": {
      transform: "scale(0.9, 0.9)"
    }
  },
  btnAdd: {
    marginRight: 10,
    background: green[300],
    "&:hover": {
      background: green[200],
    }
  },
  btnDelete: {
    marginLeft: 10,
    background: orange[300],
    "&:hover": {
      background: orange[200],
    }
  },
  btnAddDoc: {
    marginRight: 10,
    background: green[300],
    "&:hover": {
      background: green[200],
    }
  },
  btnDeleteDoc: {
    marginLeft: 10,
    background: orange[300],
    "&:hover": {
      background: orange[200],
    }
  },
  btnHide: {
    display: "none"
  },
  nameContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "10px 20px"
  },
  nameText: {
    fontWeight: 500,
    fontSize: 18,
    color: green[400],
    cursor: "default",
    lineHeight: 2,
    "&:hover": {
      opacity: 0.6
    }
  },
  selectedName: {
    color: blue[500]
  },
  documents: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    borderLeft: "2px solid #cecece"
  },
  documentHeader: {
  },

  documentContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: "4px 10px"
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  documentTextWrapper: {
    display: "flex",
    justifyContent: "flex-start",
    alignContent: "center",
    "&:hover": {
      opacity: 0.6
    }
  },
  folder:{
    marginRight: 5,
    fontSize: 20,
    color: amber[400]
  },
  file: {
    marginRight: 5
  },
  documentText: {
    color: blue[600],
    cursor: "default",
  },
  appUrl: {
    alignSelf: "center",
    width: "fit-content",
    color: blue[600],
    textAlign: "center",
    cursor: "pointer",
    marginBottom: 20
  }
}));

const appNames = [
  "Soatra",
  "Engly",
  "Pheak"
];
const nameContent = {
  [appNames[0]]: ["lasla", "test.ext"],
  [appNames[1]]: ["body.jpg", "bou.ff"],
  [appNames[2]]: ["krou.cc", "test.ff", "dfsf.you"]
};

const AppPage = () => {
  const classes = styles();
  const { path } = useParams();
  const history = useHistory();
  const [openedApp, setOpenedApp] = useState(path ? path.split("/")[0] : null);

  const handleNameClick = (name) => {
    setOpenedApp(name);
    history.push(`/apps/${name}`);
  }
  useEffect(() => {
    path ? setOpenedApp(path.split("/")[0]) : setOpenedApp(null);
  }, [path]);
  
  return (
  <div className={classes.AppPage}>
    <div className={classes.names}>
    {
      path &&
      <div className={clsx(classes.nameHeader, classes.header)}>
        <IconButton className={clsx(classes.btnAdd, classes.btnOption)} disableRipple size='small'>
        <Add />
        </IconButton>
        <IconButton className={clsx(classes.btnDelete, classes.btnOption)} disableRipple size='small'>
          <Remove />
        </IconButton>
      </div>
    }
      <div className={classes.nameContent}>
        <div className={classes.wrapper}>
        {
          appNames.map((name, i) => {
            return (
              <Link 
                underline='none'
                className={clsx(classes.nameText, openedApp === name && classes.selectedName)}
                onClick={() => handleNameClick(name)}
                key={i}>
                {name}
              </Link>
            );
          })
        }
        </div>
    </div>
    </div>
    <div className={classes.documents}>
    {
      path &&
      <div className={clsx(classes.documentHeader, classes.header)}>
        <IconButton className={clsx(classes.btnAddDoc, classes.btnOption)} disableRipple size='small'>
            <Add />
        </IconButton>
        <IconButton className={clsx(classes.btnDeleteDoc, classes.btnOption)} disableRipple size='small'>
          <Remove />
        </IconButton>
      </div>
    }
      <div className={classes.documentContent}>
      {
        path && <>
          <Link
            className={classes.appUrl}
            href={`https://meka-apps.soatra.com/${openedApp}`}
            target="_blank">
            {`https://meka-apps.soatra.com/${openedApp}`}
          </Link>
        </>
      }
      {
        path && null/* <FolderPath /> */
      }
      {
        path &&
        <div className={classes.wrapper}>
        {
          nameContent[openedApp].map((v, i) => {
            return (
              <div className={classes.documentTextWrapper} key={i}>
              {
                v.indexOf(".") > -1 ?
                  <img src={fileIcon} alt="file" height={20} className={classes.file} /> :
                  <Folder className={classes.folder} />
              }
                <Link 
                  underline='none'
                  className={classes.documentText}>
                  {v}
                </Link>
              </div>
            );
          })
        }
        </div> 
      }
      </div>
    </div>
  </div>);
}
 
export default AppPage;