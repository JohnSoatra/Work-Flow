import { AppBar, Button, makeStyles, TextField, Toolbar } from '@material-ui/core';
import { Language, Search } from '@material-ui/icons';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import M from '../img/M.svg';
import ownStyle from "../constants/ownStyle";
import { useLocation } from 'react-router-dom';

const styles = makeStyles(theme => ({
  appBar: {
    backgroundColor: '#fff8e3',
    zIndex: 1
  },
  toolbar: {
    ...ownStyle.width(theme),
    margin: ownStyle.margin,
  },
  M: {
    cursor: "pointer"
  },
  search: {
    maxWidth: 200,
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff4",
    padding: "7px 20px",
    border: "solid 0.5px #3333",
    borderRadius: 10,
    color: "#333a",
    transition: "background ease-in-out 250ms",
    "&:hover": {
      backgroundColor: "#6661",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  textField: {
    marginLeft: 16,
    "&::placeholder": {
      fontFamily: "nokora-regular",
      color: "#333a",
      opacity: "100"
    },
    color: "#222b",
  },
  items: {
    flex: 1,
    display: "flex",
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-end"
    }
  },
  item: {
    fontFamily: "nokora-regular",
    color: "#202020ef",
    fontSize: 18,
    transition: "transform ease-in-out 100ms",
    background: "#fff4d4",
    outline: "none",
    border: "none",
    borderRadius: 5,
    padding: "10px 10px",
    fontWeight: 500,
    margin: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      opacity: "0.7",
    },
    "&:active": {
      opacity: "0.5",
      transform: "scale(0.95, 0.95)"
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 17
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 16
    }
  },
  selected: {
    backgroundColor: "#ffe390"
  },
  apps: {
  },
  language: {
    fontFamily: "nokora-regular",
    fontWeight: 600,
    color: "#111a",
    margin: "0 20px",
    fontSize: 16,
    padding: "4px 10px",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
}));

const Header = props => {
  const [page, setPage] = useState(null);
  const classes = styles();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    switch(location.pathname) {
      case "/":
      case "/index.html":
        setPage(0);
        break;
      case "/apps":
        setPage(1);
        break;
      case "/signin":
        setPage(2);
        break;
    }
  }, [location]);

  const handleHome = () => {
    history.replace("/");
  }
  const handleApps = () => {
    history.replace("/apps");
  }
  const handleSignIn = () => {
    history.replace("/signin");
  }

  return (
  <AppBar position="sticky" className={classes.appBar}>
    <Toolbar className={classes.toolbar}>
      <img src={M} alt="M" height={40} className={classes.M} onClick={handleHome} />
      <div className={classes.items}>
        <button 
          className={clsx(classes.item, classes.home, page === 0 && classes.selected)} 
          onClick={handleHome}>
          ទំព័រដើម
        </button>
        <button 
          className={clsx(classes.item, classes.apps, page === 1 && classes.selected)} 
          onClick={handleApps}>
          កម្មវិធី
        </button>
        <button 
          className={clsx(classes.item, classes.signIn, page === 2 && classes.selected)} 
          onClick={handleSignIn}>
          ចុះចូល
        </button>
      </div>
      <Button 
        disableRipple 
        endIcon={<Language />} 
        className={classes.language} 
        variant="outlined">
        ខ្មែរ
      </Button>
      <div className={classes.search}>
        <Search />
        <TextField
          placeholder="ស្វែងរក..."
          type="text"
          InputProps={{disableUnderline: true, classes: {input: classes.textField}}} />
      </div>
    </Toolbar>
  </AppBar>
  );
}
 
export default Header;