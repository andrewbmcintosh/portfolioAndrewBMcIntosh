import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
    container: {
      display: "grid"},
    //   gridTemplateColumns: "repeat(12, 1fr)",
    //   gridGap: `${theme.spacing.unit * 3}px`},
      root: {
        flexGrow: 1,
      },
      grow: {
        flexGrow: 1,
      },
      menuButton: {
        marginLeft: -12,
        marginRight: 20,
      },
  });

export class TopNavBar extends Component {
  render() {
    const { classes } = this.props;
    return (
<React.Fragment>
<AppBar position="static">
        <Toolbar variant="dense">
            <MenuIcon />
            <Typography variant="h5" >
        sfaf
      </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
</React.Fragment>
    )
  }
}

export default withStyles(styles)(TopNavBar)