import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import ownStyle from '../constants/ownStyle';

const styles = makeStyles(theme => ({
  NotFound: {
    ...ownStyle.width(theme),
    margin: ownStyle.margin,
    flex: ownStyle.flex,
    marginTop: 15,
    marginBottom: 15,
  }
}));

const NotFound = () => {
  const classes = styles();
  return (
  <div className={classes.NotFound}>
    <Typography variant="body2">
      Sorry! we could not find that page.
    </Typography>
  </div>);
}
 
export default NotFound;