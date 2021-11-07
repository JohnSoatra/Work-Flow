import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import clsx from 'clsx';
import React from 'react';
import topImage from "../img/home/top-image.jpg";
import whatImage from "../img/home/what.png";
import whyImage from "../img/home/why.jpg";
import tesla from "../img/home/tesla.svg";
import alibaba from "../img/home/alibaba.svg";
import netflix from "../img/home/netflix.svg";
import facebook from "../img/home/facebook.svg";
import cisco from "../img/home/cisco.svg";
import godaday from "../img/home/godady.svg";
import ownStyle from "../constants/ownStyle";

const styles = makeStyles(theme => ({
  home: {
    ...ownStyle.width(theme),
    margin: ownStyle.margin,
    flex: ownStyle.flex,
    marginBottom: 15,
  },
  topImage: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  divGetStart: {
    width: "fit-content",
    margin: "auto",
    marginTop: 30
  },
  getStart: { 
    minWidth: 0,
    [theme.breakpoints.down("xs")]: {
      fontSize: 13,
      padding: "5px 10px"
    }
  },
  gWhat: {
    marginTop: 30
  },
  titleWhat: {
    textAlign: "center",
    color: blue[700],
    fontWeight: 400,
    marginBottom: 30,
    paddingTop: 30,
    borderTop: "solid 1px #1e88e5",
    transform: "scale(1 , 0.95)",
    letterSpacing: -2,
  },
  gridWhat: {
    padding: 20,
    backgroundColor: "#7331",
    borderRadius: 20
  },
  textWhat: {
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
  endP: { }
}));

const Hompage = () => {
  const classes = styles();

  return (
  <div className={classes.home}>
    <img src={topImage} alt="top-image" width="100%" className={classes.topImage}/>
    <div className={classes.divGetStart}>
      <Button size="large" variant="contained" color="secondary" className={classes.getStart}>
        Get Start
      </Button>
    </div>
    <div className={classes.gWhat}>
      <Typography variant="h3" className={classes.titleWhat}>
        What is Meka ?
      </Typography>
      <Grid container spacing={4} alignItems="center" className={classes.gridWhat}>
        <Grid item xs={12} md={6}>
          <Typography variant="body2" className={classes.textWhat}>
            Waltz,bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox
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
            Waltz,bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox
          </Typography>
        </Grid>
      </Grid>
    </div>
    <div className={classes.gWhat}>
      <Typography variant="h3" className={classes.titleWhat}>
        Who are using Meka ?
      </Typography>
      <Grid container spacing={4} alignItems="center" className={classes.gridWhat}>
        <Grid item xs={6} md={4} className={classes.vectorGrid}>
          <img src={tesla} alt="tesla" className={classes.vector} />
        </Grid>
        <Grid item xs={6} md={4} className={classes.vectorGrid}>
          <img src={alibaba} alt="tesla" className={classes.vector} />
        </Grid>
        <Grid item xs={6} md={4} className={classes.vectorGrid}>
          <img src={netflix} alt="tesla" className={classes.vector} />
        </Grid>
        <Grid item xs={6} md={4} className={classes.vectorGrid}>
          <img src={facebook} alt="tesla" className={classes.vector} />
        </Grid>
        <Grid item xs={6} md={4} className={classes.vectorGrid}>
          <img src={cisco} alt="tesla" className={classes.vector} />
        </Grid>
        <Grid item xs={6} md={4} className={classes.vectorGrid}>
          <img src={godaday} alt="tesla" className={classes.vector} />
        </Grid>
      </Grid>
    </div>
    <div className={clsx(classes.gWhat, classes.endP)}>
      <Typography variant="body2">
        I Love Meka, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        Lorem ipsum dolor sit amet, I hope one day I'll be a professonal programmer consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et.
      </Typography>
    </div>
  </div>);
}
 
export default Hompage;