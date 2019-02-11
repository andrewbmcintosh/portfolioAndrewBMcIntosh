import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { TopNavBar } from "./TopNavBar/TopNavBar";

const styles = theme => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridTemplateRows: "repeat(28, 1fr)",
    // gridGap: `${theme.spacing.unit * 3}px`
  },
  navbar:{
    gridColumnStart: "1",
    gridColumnEnd: "13",
    gridRowStart: "1",
    gridRowEnd: "2"
  }, 
  landingSection: {
    gridColumnStart: "1",
    gridColumnEnd: "13",
    gridRowStart: "2",
    gridRowEnd: "14"
  },
  containerB: {
    display: "grid",
    gridTemplateColumns: "(12, 1fr)",
    gridGap: `${theme.spacing.unit * 3}px`
  },
 
  containerC: {
    display: "grid",
    padding: "auto",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: `${theme.spacing.unit * 3}px`,
    alignItems: 'center',
    alignContent: 'center',
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing.unit,
  },
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`
  }
});

export class Main extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.container}>
          <div className={classes.navbar}>
          <TopNavBar />
          </div>
          <div className={classes.landingSection}>
            
          </div>
          <div style={{ gridColumnEnd: "span 12"}}>
          <div className={classes.containerc}>
          <div style={{ gridColumnEnd: "span 2" }}>
            {/* <Paper className={classes.paper}>xs=2d</Paper> */}
          </div>
          <div style={{ gridColumnEnd: "span 4" }}>
            <Paper className={classes.paper}>xs=4A</Paper>
          </div>
          <div style={{ gridColumnEnd: "span 4" }}>
            <Paper className={classes.paper}>xs=4B</Paper>
          </div>
          <div style={{ gridColumnEnd: "span 2" }}>
            {/* <Paper className={classes.paper}>xs=2C</Paper> */}
          </div>
          </div>
          </div>
          <div style={{ gridColumnEnd: "span 8" }}>
            <Paper className={classes.paper}>xs=8</Paper>
          </div>
          <div style={{ gridColumnEnd: "span 4" }}>
            <Paper className={classes.paper}>xs=4</Paper>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Main);
