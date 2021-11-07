import { AppBar, Button, makeStyles, TextField, Toolbar, Typography } from '@material-ui/core';
import { amber, blue, orange } from '@material-ui/core/colors';
import { Language, Search } from '@material-ui/icons';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import M from '../img/M.svg';
import { setSeletedPage } from '../redux/ducks/selectedPage';
import ownStyle from "../constants/ownStyle";
import $ from "jquery";
import { useLocation } from 'react-router-dom';

const styles = makeStyles(theme => ({
  appBar: {
    backgroundColor: '#fff8e3',
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
    color: "#202020ef",
    fontSize: 19,
    padding: "10px 10px",
    cursor: "pointer",
    fontWeight: 500,
    borderRadius: 5,
    textTransform: "none",
    transition: "all ease-in-out 200ms",
    [theme.breakpoints.down("xs")]: {
      fontSize: 16
    },
    [theme.breakpoints.up("sm")]: {
      "&:hover": {
        backgroundColor: "#fff4cf"
      },
    }
  },
  apps: {
    fontWeight: 600
  },
  selected: {
    backgroundColor: amber[100]
  },
  language: {
    color: "#111a",
    margin: "0 20px",
    fontSize: 17,
    padding: "4px 10px",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
}));

let pageCount = 1;
const Header = props => {
  const [page, setPage] = useState(null);
  const classes = styles();
  const history = useHistory();
  const location = useLocation();
  const { firstPage } = props;
  const handleHome = () => {
    if (page !== 0) {
      if (firstPage === 0) {
        history.go(-1);
      } else if (pageCount === 1) {
        pageCount = 2;
        history.push("/");
      } else {
        console.log("replace");
        history.replace("/");
      }
    }
  }
  const handleApps = () => {
    if (page !== 1) {
      if (firstPage === 1) {
        history.go(-1);
      } else if (pageCount === 1) {
        pageCount = 2;
        history.push("/apps");
      } else {
        history.replace("/apps");
      }
    }
  }
  const handleSignIn = () => {
    if (page !== 2) {
      if (firstPage === 2) {
        history.go(-1);
      } else if (pageCount === 1) {
        pageCount = 2;
        history.push("/signin");
      } else {
        console.log("replace");
        history.replace("/signin");
      }
    }
  }
  useEffect(() => {
    switch(location.pathname) {
      case "/":
      case "/index.html":
        if (firstPage === 0) {
          pageCount = 1;
        }
        setPage(0);
        break;
      case "/apps":
        if (firstPage === 1) {
          pageCount = 1;
        }
        setPage(1);
        break;
      case "/signin":
        if (firstPage === 2) {
          pageCount = 1;
        }
        setPage(2);
        break;
    }
  }, [location]);
  return (
  <AppBar position="sticky" className={classes.appBar}>
    <Toolbar className={classes.toolbar}>
      <img src={M} alt="M" height={40} className={classes.M}/>
      <div className={classes.items}>
        <Button 
          className={clsx(classes.item, classes.home, page === 0 && classes.selected)} 
          onClick={handleHome}>
          Home
        </Button>
        <Button 
          className={clsx(classes.item, classes.apps, page === 1 && classes.selected)} 
          onClick={handleApps}>
          Apps
        </Button>
        <Button 
          className={clsx(classes.item, classes.signIn, page === 2 && classes.selected)} 
          onClick={handleSignIn}>
          SignIn
        </Button>
      </div>
      <Button 
        endIcon={<Language />} 
        className={classes.language} 
        variant="outlined">
        english
      </Button>
      <div className={classes.search}>
        <Search />
        <TextField
          placeholder="search..."
          type="text"
          InputProps={{disableUnderline: true, classes: {input: classes.textField}}} />
      </div>
    </Toolbar>
  </AppBar>
  );
}
 
export default Header;