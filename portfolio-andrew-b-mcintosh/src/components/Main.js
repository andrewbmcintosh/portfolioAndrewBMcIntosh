import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: `${theme.spacing.unit * 3}px`
  },
  containerB: {
    display: "grid",
    gridTemplateColumns: "(12, 1fr)",
    gridGap: `${theme.spacing.unit * 3}px`
  },
  containerc: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: `${theme.spacing.unit * 3}px`,
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing.unit
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
        <p>this is the MAIN PAGE</p>
        <div className={classes.container}>
          <div style={{ gridColumnEnd: "span 12" }}>
            <Paper className={classes.paper}>xs=12</Paper>
          </div>
          <div style={{ gridColumnEnd: "span 12"}}>
          <div className={classes.containerc}>
          <div style={{ gridColumnEnd: "span 3" }}>
            <Paper className={classes.paper}>xs=3A</Paper>
          </div>
          <div style={{ gridColumnEnd: "span 3" }}>
            <Paper className={classes.paper}>xs=3B</Paper>
          </div>
          <div style={{ gridColumnEnd: "span 3" }}>
            <Paper className={classes.paper}>xs=3C</Paper>
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
