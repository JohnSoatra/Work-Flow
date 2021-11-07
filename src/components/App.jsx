import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeStyles, ThemeProvider } from '@material-ui/core';
import theme_day from '../styles/theme_day';
import Header from './Header';
import Homepage from './Homepage';
import Footer from "./Footer";
import AppPage from './AppPage';
import SignIn from "./SignIn";
import NotFound from "./NotFound";
import ownStyle from "../constants/ownStyle";
import { useDispatch } from 'react-redux';
import { setSeletedPage } from '../redux/ducks/selectedPage';
import { useLocation } from 'react-router-dom';

const styles = makeStyles(theme => ({
  App: {
    minHeight: ownStyle.windowHeight - 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  }
}));

const App = () => {
  const [theme, _] = useState(theme_day);
  const classes = styles();
  const location = useLocation();
  let [firstPage, setFirstPage] = useState(null);
  if (firstPage === null) {
    switch(location.pathname) {
      case "/":
      case "/index.html":
        setFirstPage(0);
        break;
      case "/apps":
        setFirstPage(1);
        break;
      case "/signin":
        setFirstPage(2);
        break;
    }
  }
  return (
  <ThemeProvider theme={theme}>
    <div className={classes.App}>
      <Header firstPage={firstPage} />
      <Switch>
        <Route 
          exact path={["/", "/index.html"]}
          component={Homepage} />
        <Route 
          exact path="/apps/:path" 
          component={AppPage} />
        <Route 
          exact path="/apps" 
          component={AppPage}/>
        <Route 
          exact path="/signin" 
          component={SignIn} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </ThemeProvider>
  );
}

export default App;
