import { makeStyles, Typography } from '@material-ui/core';
import { yellow } from '@mui/material/colors';
import React from 'react';
import ownStyle from '../constants/ownStyle';

const styles = makeStyles(theme => ({
  NotFound: {
    ...ownStyle.width(theme),
    margin: ownStyle.margin,
    flex: ownStyle.flex,
    marginTop: 15,
    marginBottom: 15
  },
  status: {
    fontSize: 19,
    color: yellow[600]
  }
}));

const NotFound = () => {
  const classes = styles();
  return (
  <div className={classes.NotFound}>
    <Typography className={classes.status}>
      Sorry! we could not find that page.
    </Typography>
  </div>);
}

export default NotFound;