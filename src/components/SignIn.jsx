import { Button, makeStyles, TextField, Typography } from '@material-ui/core';
import { amber, blue, green } from '@material-ui/core/colors';
import { Login, Logout } from '@mui/icons-material';
import { red } from '@mui/material/colors';
import clsx from 'clsx';
import React, { useState } from 'react';
import ownStyle from "../constants/ownStyle";
import { checkCookie, getCookie, setCookie } from '../cookies';
import { CircularProgress } from '@mui/material';

const styles = makeStyles(theme => ({
  SignIn: {
    ...ownStyle.width(theme),
    margin: ownStyle.margin,
    flex: ownStyle.flex,
    minHeight: 300,
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    marginTop: 15,
    marginBottom: 15,
  },
  border: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #cecece",
    borderRadius: 5,
    boxShadow: "0px 0px 5px 1px #cecece",
    padding: "10px 20px"
  },
  borderSignOut: {
    width: "100%"
  },
  items: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    flex: 1,
  },
  header: {
    fontWeight: 700,
    width: "fit-content",
    borderBottom: "2px solid #aaa",
  },
  inputWrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 10
  },
  input: {
    textAlign: "center",
    borderBottom: "1px solid #cecece",
    caretColor: amber[800],
    "&::placeholder": {
      textAlign: "center"
    }
  },
  invalid: {
    color: red[400],
    fontSize: 13,
    textAlign: 'center',
    visibility: "hidden",
  },
  wrongPassword: {
    fontSize: 15,
    textAlign: "center"
  },
  showInvalid: {
    visibility: "visible"
  },
  btnSignIn: {
    color: "#f9f9f9",
    background: green[300],
    textTransform: "none",
    translate: "all ease-in-out 250ms",
    "&:hover": {
      background: green[200]
    },
    "&:active": {
      transform: "scale(0.9, 0.9)",
      background: green[100]
    }
  },
  status: {
    color: green[500],
    marginBottom: 5,
    textAlign: "center"
  },
  btnSignOut: {
    color: "#f9f9f9",
    background: amber[700],
    textTransform: "none",
    translate: "all ease-in-out 250ms",
    marginTop: 5,
    "&:hover": {
      background: amber[600]
    },
    "&:active": {
      transform: "scale(0.9, 0.9)",
      background: amber[500]
    }
  },
  iconSignOut: {
    color: "#f9f9f9"
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
  model: {
    position: "fixed",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: 250,
    height: 180,
    padding: 10,
    background: "#f9f9f9",
    borderRadius: 5,
    visibility: "hidden",
    zIndex: 1
  },
  modelContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#101010",
  },
  modalProgress: {
    width: 120,
    height: 120
  },
  showDialog: {
    visibility: "visible"
  },
}));

// const baseUrl = "http://localhost:8080";
const baseUrl = "https://meka-app.soatra.com";

const SignIn = () => {
  const classes = styles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [isSignIn, setIsSignIn] = useState(checkCookie("email"));
  const [inProgress, setInProgress] = useState(false);
  const [currentEmail, setCurrentEmail] = useState(getCookie("email"));

  const signInResetter = () => {
    setEmail("");
    setPassword("");
    setInProgress(false);
    setWrongPassword(false);
  }
  const handleNameChange = (event) => {
    const regEmail = new RegExp(/^\w+@\w+(\.\w+)+$/);
    if (!regEmail.test(event.target.value)) {
      setIsEmailInvalid(true);
    } else {
      setIsEmailInvalid(false);
    }
    setEmail(event.target.value);
  }
  const handlePasswordChange = (event) => {
    const regPassword = new RegExp(/^.{8,}$/);
    if (!regPassword.test(event.target.value)) {
      setIsPasswordInvalid(true);
    } else {
      setIsPasswordInvalid(false);
    }
    setPassword(event.target.value);
  }
  const handleSignIn = () => {
    if (!(isEmailInvalid || isPasswordInvalid)) {
      if (email === "") {
        setIsEmailInvalid(true);
      }
      else if (password === "") {
        setIsPasswordInvalid(true);
      }
      else {
        setInProgress(true);
        fetch(`${baseUrl}/signIn?email=${email}&password=${password}`, {
          method: "post"
        }).then(res => {
          res.json().then(json => {
            if (json.status === "success") {
              setIsSignIn(true);
              setCookie("email", email, 24 * 60);
              setCurrentEmail(email);
              signInResetter();
            }
            else {
              setWrongPassword(true);
            }
            setInProgress(false);
          });
        });
      }
    }
  }
  const handleSignOut = () => {
    setIsSignIn(false);
    setCookie("email", "", 0);
  }
  return (
  <div className={classes.SignIn}>
    <div className={clsx(classes.border, isSignIn && classes.borderSignOut)}>
      {
        isSignIn ? <>
          <Typography className={classes.status}>
            You already signIn.
            <br />
            ({currentEmail})
          </Typography>
          <Button 
            className={classes.btnSignOut} 
            endIcon={<Logout className={classes.iconSignOut} />} 
            disableRipple
            size="small"
            onClick={handleSignOut}>
            SignOut
          </Button>
        </> : <>
        <Typography className={classes.header}>SignIn</Typography>
        <div className={classes.items}>
          <div className={classes.inputWrapper}>
            <div>
              <p className={clsx(classes.invalid, isEmailInvalid && classes.showInvalid)}>invalid email.</p>
              <TextField
                onChange={handleNameChange}
                value={email}
                placeholder='Email:'
                InputProps={{disableUnderline: true, classes: {input: classes.input}}}
                autoComplete='off'
                autoSave='off'
                spellCheck={false} />
            </div>
            <div>
              <p className={clsx(classes.invalid, isPasswordInvalid && classes.showInvalid)}>invalid password.</p>
              <TextField
                onChange={handlePasswordChange}
                value={password}
                placeholder='Password:'
                InputProps={{disableUnderline: true, classes: {input: classes.input}}}
                autoComplete='off'
                autoSave='off'
                spellCheck={false}
                type={'password'} />
            </div>
            <p className={clsx(classes.invalid, classes.wrongPassword, wrongPassword && classes.showInvalid)}>inputed password is incorrect.</p>
          </div>
          <Button 
            className={classes.btnSignIn} 
            endIcon={<Login color='success'/>} 
            disableRipple
            onClick={handleSignIn}>
            SignIn
            </Button>
          </div>
          
          <div className={clsx(classes.blackScreen, inProgress && classes.showDialog)}></div>
          <div className={clsx(classes.model, classes.modalProgress, inProgress && classes.showDialog)}>
            <span className={clsx(classes.modelTitle)}/>
            <span className={clsx(classes.modelContent)}>
              <CircularProgress style={{color: blue[500]}}/>
            </span>
            <span className={classes.modelAction}/>
          </div>

        </>
      }
    </div>
  </div>);
}
 
export default SignIn;