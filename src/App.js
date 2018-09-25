import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import AlbumIcon from '@material-ui/icons/Album';
import MovieIcon from '@material-ui/icons/Movie';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import StoreIcon from '@material-ui/icons/Store';
import PublicIcon from '@material-ui/icons/Public';
import ForumIcon from '@material-ui/icons/Forum';
import AccountIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';

import Player from './components/Player';

import Splash from './components/views/Splash';
import Login from './components/views/Login';
import CreateAccount from './components/views/CreateAccount';
import AccountDetails from './components/views/AccountDetails';
import LinkAccounts from './components/views/LinkAccounts';
import RateArtists from './components/views/RateArtists';
import HomeMain from './components/views/HomeMain';
import SocialMain from './components/views/SocialMain';
import MusicMain from './components/views/MusicMain';
import VideoMain from './components/views/VideoMain';
import LibraryMain from './components/views/LibraryMain';
import NewsMain from './components/views/NewsMain';
import ConcertsMain from './components/views/ConcertsMain';
import StoreMain from './components/views/StoreMain';
import MessagesMain from './components/views/MessagesMain';
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
      anchor: 'left',
      content: 'splash',
      navigate: false,
      showNav: false,
      title: null,
    };
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = (c) => {
    this.setState({ open: false });
    if (c) {
      this.setState({ content: c, navigate: true });
    }
  };

  handleChangeAnchor = event => {
    this.setState({
      anchor: event.target.value,
    });
  };
  
  handleNavButtonClick = (c) => {
    this.setState( { content: c, navigate: true })
  };
  
  updateState = (props) => {
    this.setState(props);
  };
  
  render() {
    const { classes, theme } = this.props;
    const { anchor, open } = this.state;    
    const drawer = (
      <Drawer
        variant="temporary"
        anchor={anchor}
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
        onClose={() => this.handleDrawerClose(false)}
      >
        <div
          tabIndex={0}
        >
          <List
          >
            <div>
              <ListItem button onClick={() => this.handleDrawerClose('home')}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button onClick={() => this.handleDrawerClose('social')}>
                <ListItemIcon>
                  <GroupIcon />
                </ListItemIcon>
                <ListItemText primary="Social" />
                <Badge
                  badgeContent={3}
                  color="secondary"
                >
                </Badge>
              </ListItem>
              <ListItem button onClick={() => this.handleDrawerClose('music')}>
                <ListItemIcon>
                  <AlbumIcon />
                </ListItemIcon>
                <ListItemText primary="Music" />
              </ListItem>
              <ListItem button onClick={() => this.handleDrawerClose('video')}>
                <ListItemIcon>
                  <MovieIcon />
                </ListItemIcon>
                <ListItemText primary="Video" />
              </ListItem>
              <ListItem button onClick={() => this.handleDrawerClose('library')}>
                <ListItemIcon>
                  <SubscriptionsIcon />
                </ListItemIcon>
                <ListItemText primary="My Library" />
              </ListItem>
              <ListItem button onClick={() => this.handleDrawerClose('news')}>
                <ListItemIcon>
                  <PublicIcon />
                </ListItemIcon>
                <ListItemText primary="News" />
                <Badge
                  badgeContent={2}
                  color="secondary"
                >
                </Badge>
              </ListItem>
              <ListItem button onClick={() => this.handleDrawerClose('concerts')}>
                <ListItemIcon>
                  <LocalActivityIcon />
                </ListItemIcon>
                <ListItemText primary="Concerts" />
                <Badge
                  badgeContent={1}
                  color="secondary"
                >
                </Badge>
              </ListItem>
              <ListItem button onClick={() => this.handleDrawerClose('store')}>
                <ListItemIcon>
                  <StoreIcon />
                </ListItemIcon>
                <ListItemText primary="Store" />
              </ListItem>
              <ListItem button onClick={() => this.handleDrawerClose('messages')}>
                <ListItemIcon>
                  <ForumIcon />
                </ListItemIcon>
                <ListItemText primary="Messages" />
                <Badge
                  badgeContent={2}
                  color="secondary"
                >
                </Badge>
              </ListItem>
            </div>
          </List>
          <Divider />
          <List>
            <div>
              <ListItem button onClick={() => this.handleDrawerClose('account')}>
                <ListItemIcon>
                  <AccountIcon />
                </ListItemIcon>
                <ListItemText primary="My Account" />
              </ListItem>
              <ListItem button onClick={() => this.handleDrawerClose('settings')}>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItem>
            </div>
          </List>
        </div>
      </Drawer>
    );

    let before = null;
    let after = null;

    if (anchor === 'left') {
      before = drawer;
    } else {
      after = drawer;
    }

    return (
      <Router>
        <div className={classes.root}>
          { this.state.navigate ? <Redirect to={this.state.content} push={true} /> : null }

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
                    badgeContent={8}
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
            { before }
            <main className={ classNames(classes.content)}>
              <div className={classes.drawerHeader}>
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
              <Route path="/link-accounts" render={(props) => <LinkAccounts updateState={ this.updateState } handleNavButtonClick={ this.handleNavButtonClick } />} />
              <Route path="/rate-artists" render={(props) => <RateArtists updateState={ this.updateState } handleNavButtonClick={ this.handleNavButtonClick } />} />
              <Route path="/home" render={(props) => <HomeMain updateState={ this.updateState } handleNavButtonClick={ this.handleNavButtonClick } />} />
              <Route path="/social" render={(props) => <SocialMain updateState={ this.updateState } handleNavButtonClick={ this.handleNavButtonClick } />} />
              <Route path="/music" render={(props) => <MusicMain updateState={ this.updateState } handleNavButtonClick={ this.handleNavButtonClick } />} />
              <Route path="/video" render={(props) => <VideoMain updateState={ this.updateState } handleNavButtonClick={ this.handleNavButtonClick } />} />
              <Route path="/library" render={(props) => <LibraryMain updateState={ this.updateState } handleNavButtonClick={ this.handleNavButtonClick } />} />
              <Route path="/news" render={(props) => <NewsMain updateState={ this.updateState } handleNavButtonClick={ this.handleNavButtonClick } />} />
              <Route path="/concerts" render={(props) => <ConcertsMain updateState={ this.updateState } handleNavButtonClick={ this.handleNavButtonClick } />} />
              <Route path="/store" render={(props) => <StoreMain updateState={ this.updateState } handleNavButtonClick={ this.handleNavButtonClick } />} />
              <Route path="/messages" render={(props) => <MessagesMain updateState={ this.updateState } handleNavButtonClick={ this.handleNavButtonClick } />} />
              <Route path="/account" render={(props) => <AccountMain updateState={ this.updateState } handleNavButtonClick={ this.handleNavButtonClick } />} />
              <Route path="/settings" render={(props) => <SettingsMain updateState={ this.updateState } handleNavButtonClick={ this.handleNavButtonClick } />} />
            </main>
            { after }
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
