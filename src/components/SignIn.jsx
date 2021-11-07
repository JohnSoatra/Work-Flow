import { Button, makeStyles, TextField, Typography } from '@material-ui/core';
import { amber, blue, green } from '@material-ui/core/colors';
import { Google, Login } from '@mui/icons-material';
import { lightBlue, orange, pink } from '@mui/material/colors';
import clsx from 'clsx';
import React from 'react';
import ownStyle from "../constants/ownStyle";
import google from "../img/signin/google.svg";

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
    border: "1px solid #cecece",
    borderRadius: 5,
    boxShadow: "0px 0px 5px 1px #cecece"
  },
  items: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    flex: 1,
    padding: "0px 20px"
  },
  header: {
    fontWeight: 700,
    width: "fit-content",
    borderBottom: "2px solid #aaa",
    marginTop: 10,
  },
  input: {
    textAlign: "center",
    borderBottom: "1px solid #cecece",
    caretColor: amber[800],
    "&::placeholder": {
      textAlign: "center"
    }
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
  btnGmail: {
    color: "#303030ef",
    background: lightBlue[300],
    textTransform: "none",
    translate: "all ease-in-out 250ms",
    "&:hover": {
      background: lightBlue[200]
    },
    "&:active": {
      transform: "scale(0.9, 0.9)",
      background: lightBlue[100]
    }
  }
}));

const SignIn = () => {
  const classes = styles();

  return (
  <div className={classes.SignIn}>
    <div className={classes.border}>
      <Typography className={classes.header}>SignIn</Typography>
      <div className={classes.items}>
        <TextField
          placeholder='Email:'
          InputProps={{disableUnderline: true, classes: {input: classes.input}}}
          autoComplete='off'
          spellCheck={false} />
        <TextField
          placeholder='Password:'
          InputProps={{disableUnderline: true, classes: {input: classes.input}}}
          autoComplete='off'
          spellCheck={false}
          type={'password'} />
        <Button className={classes.btnSignIn} endIcon={<Login color='success'/>} disableRipple>
          SignIn
        </Button>
        <Button className={classes.btnGmail} endIcon={<img  src={google} height="20px" />} disableRipple>
          With Gmail
        </Button>
      </div>
    </div>
  </div>);
}
 
export default SignIn;