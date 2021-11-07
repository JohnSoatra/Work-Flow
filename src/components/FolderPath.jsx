import { makeStyles, Typography } from '@material-ui/core';
import { blue } from '@mui/material/colors';
import React from 'react';
import { useLocation } from 'react-router-dom';

const styles = makeStyles(() => ({
  FolderPath: {
    color: blue[400],
    textAlign: "start"
  }
}));

const FolderPath = props => {
  const classes = styles();

  const { path } = props;
  let lastPath = `/${path}`;
  const slices = path.split("/");
  if (slices.length > 3) {
    const lastIndex = slices.length - 1;
    lastPath = `/${slices[lastIndex - 1]}/${slices[lastIndex]}}`;
  }
  return (
    <Typography classesName={classes.FolderPath}>
      {lastPath}
    </Typography>
  );
}
 
export default FolderPath;