import { Grid, makeStyles, Typography } from '@material-ui/core';
import { amber, blue } from '@material-ui/core/colors';
import clsx from 'clsx';
import React from 'react';
import ownStyle from "../constants/ownStyle";

const styles = makeStyles(theme => ({
  footer: {
    background: "#fff8e3",
    boxShadow: "0px -4px 5px 0px rgb(0 0 0 / 20%)",
    width: "100%",
  },
  footerWrapper: {
    ...ownStyle.width(theme),
    margin: ownStyle.margin,
  },
  grid: {
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
  },
  div: {
    padding: "15px 0px",
    textAlign: "center"
  },
  title: {
    fontFamily: "nokora-regular",
    textDecoration: "underline",
    textDecorationColor: "#1976d2",
    textTransform: "uppercase",
    color: blue[700],
    fontSize: 17,
    fontWeight: "bold",
    cursor: "default"
  },
  content: {
    padding: "10px 0px",
    textDecoration: "underline",
    color: blue[700],
    textAlign: "center"
  },
  text: {
    fontFamily: "nokora-regular",
    lineHeight: 1.6,
    cursor: "default"
  },
  subText: {
    textDecoration: "none",
    textAlign: "left"
  },
  lastPart: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  lastText: {
    fontFamily: "nokora-regular",
    textDecoration: "underline",
    textDecorationColor: "#1976d2",
    cursor: "default"
  },
  gridCopy: {
    alignSelf: "flex-end",
    textAlign: "center",
  },
  copy: {
    fontSize: 11,
    color: amber[800],
    cursor: "default"
  }
}));

const Footer = () => {
  const classes = styles();
  return (
    <div className={classes.footer}>
      <div className={classes.footerWrapper}>
        <Grid container className={classes.grid} justifyContent='center'>
          <Grid item xs={12} sm={4} className={classes.gridItem}>
            <div className={classes.div}>
              <Typography variant="h6" className={classes.title}>ទំនាក់ទំនង</Typography>
              <div className={classes.content}>
                <Typography variant="body2" className={classes.text}>ទាក់ទង ពួកយើង</Typography>
                <Typography variant="body2" className={classes.text}>ការបង់ប្រាក់</Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm ={4} className={classes.gridItem}>
            <div className={classes.div}>
              <Typography variant="h6" className={classes.title}>ព័ត៌មាន</Typography>
              <div className={classes.content}>
                <Typography variant="body2" className={classes.text}>ការងាររបស់ពួកយើង</Typography>
                <Typography variant="body2" className={classes.text}>គោលការណ៍</Typography>
              </div>
            </div>
          </Grid>
          <Grid item sm={4} className={clsx(classes.gridItem, classes.lastPart)}>
            <div className={classes.div}>
              <Typography variant="h6" className={classes.title}>ការជាវ</Typography>
              <div className={clsx(classes.content, classes.subText)}>
                <Typography variant="body2" className={classes.lastText}>
                  ជ្រើសរើសគម្រោងដែលត្រូវនឹងអ្នក
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} className={classes.gridCopy}>
            <Typography className={classes.copy}>Copyright &copy; 2021 Meka, all right reserved.</Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
 
export default Footer;