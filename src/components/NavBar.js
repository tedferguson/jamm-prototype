import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';

import content from './data/content';

class NavBar extends React.Component {

  render() {
    const { classes, theme } = this.props;
    return (
      <AppBar
        className={classNames(classes.appBar)}
      >
        <Toolbar disableGutters={!false}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={this.handleDrawerOpen}
            className={classNames(classes.menuButton, false && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Badge
            className={classes.margin}
            badgeContent={6}
            color="secondary"
            style={{position: "absolute", marginLeft: "50px", marginTop: "-10px"}}
          >
          </Badge>
          <Typography
            variant="title"
            color="inherit"
            noWrap
            style={{width: "100%", marginLeft: "-0px", textAlign: "center"}}
          >
            {content[this.state.content].header}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
};

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default NavBar;
