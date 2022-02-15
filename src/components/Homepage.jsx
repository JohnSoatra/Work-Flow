import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { useHistory } from "react-router-dom";
import clsx from 'clsx';
import React from 'react';
import topImage from "../img/home/top-image.jpg";
import whatImage from "../img/home/what.png";
import whyImage from "../img/home/why.jpg";
import ownStyle from "../constants/ownStyle";

const styles = makeStyles(theme => ({
  home: {
    ...ownStyle.width(theme),
    margin: ownStyle.margin,
    flex: ownStyle.flex,
    marginBottom: 15,
  },
  topImage: {
    ...ownStyle.width(theme),
    margin: ownStyle.margin,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
  },
  divGetStart: {
    width: "fit-content",
    margin: "auto",
    marginTop: 30
  },
  getStart: { 
    fontSize: 16,
    minWidth: 0,
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
      padding: "5px 10px"
    }
  },
  gWhat: {
    marginTop: 30
  },
  titleWhat: {
    fontSize: 25,
    textAlign: "center",
    color: blue[700],
    fontWeight: 400,
    marginBottom: 30,
    paddingTop: 30,
    borderTop: "solid 1px #1e88e5",
    transform: "scale(1 , 0.95)",
  },
  gridWhat: {
    padding: 20,
    backgroundColor: "#7331",
    borderRadius: 20
  },
  textWhat: {
    fontSize: 17,
    color: "#000e",
    lineHeight: 1.7,
  },
  iWhat: {
    borderRadius: 20
  },
  vectorGrid: {
    textAlign: "center"
  },
  vector: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      width: 150
    }
  },
}));

const Hompage = () => {
  const classes = styles();
  const history = useHistory();
  const handleStart = () => {
    history.push("/apps");
  }

  return (
  <>
    <img src={topImage} alt="top-image" width="100%" className={classes.topImage} />
    <div className={classes.home}>
      <div className={classes.divGetStart}>
        <Button size="large" variant="contained" color="secondary" className={classes.getStart} onClick={handleStart}>
          Start
        </Button>
      </div>
      <div className={classes.gWhat}>
        <Typography variant="h3" className={classes.titleWhat}>
          What is Meka ?
        </Typography>
        <Grid container spacing={4} alignItems="center" className={classes.gridWhat}>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" className={classes.textWhat}>
            Meka is a website that lets you to host your websites for free. With Meka you can host your websites without having any domain names.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={whatImage} alt="what-image" width="100%" className={classes.iWhat} />
          </Grid>
        </Grid>
      </div>
      <div className={classes.gWhat}>
        <Typography variant="h3" className={classes.titleWhat}>
          Why is Meka ?
        </Typography>
        <Grid container spacing={4} alignItems="center" className={classes.gridWhat}>
          <Grid item xs={12} md={6}>
            <img src={whyImage} alt="what-image" width="100%" className={classes.iWhat} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" className={classes.textWhat}>
            With Meka you will have convenience, use short time and spend less money.
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div className={clsx(classes.gWhat)}>
        <Typography variant="body2">
          I Love Meka, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </Typography>
      </div>
    </div>
  </>);
}
 
export default Hompage;
