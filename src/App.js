import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import BackButton from './components/BackButton'
import NavDrawerList  from './components/NavDrawerList';
import Player from './components/Player';

import Splash from './components/views/Splash';
import Login from './components/views/Login';
import CreateAccount from './components/views/CreateAccount';
import AccountDetails from './components/views/AccountDetails';
import LinkMusic from './components/views/LinkMusic';
import LinkSocial from './components/views/LinkSocial';
import HomeMain from './components/views/HomeMain';
import FanClubMain from './components/views/FanClubMain';
import ConcertsMain from './components/views/ConcertsMain';
import StoreMain from './components/views/StoreMain';
import CommunityMain from './components/views/CommunityMain';
import MusicMain from './components/views/MusicMain';
import VideoMain from './components/views/VideoMain';
import FeedMain from './components/views/FeedMain';
import AccountMain from './components/views/AccountMain';
import SettingsMain from './components/views/SettingsMain';

import 'typeface-roboto'

const drawerWidth = 200;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    backgroundColor: 'black',
    textAlign: 'center',
  },
  menuButton: {
    marginLeft: 12,
    marginRight: -60,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  'content-left': {
    marginLeft: 0,
  },
  'content-right': {
    marginRight: 0,
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      route: 'splash',
      navigate: false,
      showNav: false,
      showBack: false,
      backTo: 'splash',
      title: null,
    };
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = (props) => {
    props.open = false;
    if ( props.route && this.state.route != props.route ) {
      props.navigate = true;
    }
    this.setState(props);
  };

  handleNavButtonClick = (props) => {
    props.navigate = true;
    this.setState(props)
  };
  
  handleBackClick = (props) => {
    props.route = this.state.backTo;
    props.navigate = true;
    this.setState(props);
  }
  
  updateState = (props) => {
    this.setState(props);
  };
  
  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;    
    const drawer = (
      <Drawer
        variant = "temporary"
        anchor = "left"
        open = { open }
        classes = {{
          paper: classes.drawerPaper,
        }}
        onClose = { () => this.handleDrawerClose() }
      >
        <NavDrawerList handleDrawerClose = { this.handleDrawerClose } /> 
      </Drawer>
    );

    return (
      <Router>
        <div className = { classes.root } >
          { 
            this.state.navigate ? <Redirect to = { this.state.route } push = { true } /> : null
          }

          <div className={classes.appFrame}>
            { this.state.showNav ?
              <AppBar
                className={classNames(classes.appBar)}
              >
                <Toolbar disableGutters={!open}>
                  <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={this.handleDrawerOpen}
                    className={classNames(classes.menuButton, open && classes.hide)}
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
                    { this.state.title }
                  </Typography>
                </Toolbar>
              </AppBar>
            : null }
            { drawer }
            <main className={ classNames(classes.content)}>
              <div className={classes.drawerHeader}>
                { this.state.showBack ? <BackButton handleBackClick = { this.handleBackClick }/> : null }
                { !this.state.showNav && this.state.title ?
                  <div style={{
                    width: "100%",
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "15pt",
                    textTransform: "uppercase",
                  }}>{ this.state.title }</div>
                  : null
                }
              </div>
              <Route exact path="/" render={(props) => <Splash updateState={ this.updateState } handleNavButtonClick={ this.handleNavButtonClick } />} />
              <Route path="/login" render={(props) => <Login updateState={ this.updateState } handleNavButtonClick={ this.handleNavButtonClick } />} />
              <Route path="/create-account" render={(props) => <CreateAccount updateState={ this.updateState } handleNavButtonClick={ this.handleNavButtonClick } />} />
              <Route path="/account-details" render={(props) => <AccountDetails updateState={ this.updateState } handleNavButtonClick={ this.handleNavButtonClick } />} />
              <Route path="/link-music" render={(props) => <LinkMusic updateState={ this.updateState } handleNavButtonClick={ this.handleNavButtonClick } />} />
              <Route path="/link-social" render={(props) => <LinkSocial updateState={ this.updateState } handleNavButtonClick={ this.handleNavButtonClick } />} />
              <Route path="/home" render={(props) => <HomeMain updateState={ this.updateState } />} />
              <Route path="/fan-club" render={(props) => <FanClubMain updateState={ this.updateState } />} />
              <Route path="/concerts" render={(props) => <ConcertsMain updateState={ this.updateState } />} />
              <Route path="/store" render={(props) => <StoreMain updateState={ this.updateState } />} />
              <Route path="/community" render={(props) => <CommunityMain updateState={ this.updateState } />} />
              <Route path="/music" render={(props) => <MusicMain updateState={ this.updateState } />} />
              <Route path="/video" render={(props) => <VideoMain updateState={ this.updateState } />} />
              <Route path="/feed" render={(props) => <FeedMain updateState={ this.updateState } />} />
              <Route path="/account" render={(props) => <AccountMain updateState={ this.updateState } />} />
              <Route path="/settings" render={(props) => <SettingsMain updateState={ this.updateState } />} />
            </main>
          </div>
            { this.state.showPlayer ?
              <Player />
              : null
            }
        </div>
      </Router>
    );
  }
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
