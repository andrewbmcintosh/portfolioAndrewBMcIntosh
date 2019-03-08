import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
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

export class LandingSection extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
      <p>Landing Section</p>
      </div>
    )
  }
}

export default withStyles(styles)(LandingSection)
