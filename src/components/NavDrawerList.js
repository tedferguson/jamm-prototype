import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Badge from '@material-ui/core/Badge';
import HomeIcon from '@material-ui/icons/Home';
import GradeIcon from '@material-ui/icons/Grade';
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

export default class NavDrawerList extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <List>
          <div>
            <ListItem button onClick={() => this.props.handleDrawerClose({ route: 'home' })}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText style={{padding: 0}} primary="Home" />
            </ListItem>
            <ListItem button onClick={() => this.props.handleDrawerClose({ route: 'fan-club' })}>
              <ListItemIcon>
                <GradeIcon />
              </ListItemIcon>
              <ListItemText style={{padding: 0}} primary="Fan Club" />
            </ListItem>
            <ListItem button onClick={() => this.props.handleDrawerClose({ route: 'concerts' })}>
              <ListItemIcon>
                <LocalActivityIcon />
              </ListItemIcon>
              <ListItemText style={{padding: 0 }} primary="Concerts" />
              <Badge
                style={{ marginRight: 11 }}
                badgeContent={1}
                color="secondary"
              >
              </Badge>
            </ListItem>
            <ListItem button onClick={() => this.props.handleDrawerClose({ route: 'store' })}>
              <ListItemIcon>
                <StoreIcon />
              </ListItemIcon>
              <ListItemText style={{padding: 0}} primary="Merch Store" />
            </ListItem>
            <ListItem button onClick={() => this.props.handleDrawerClose({ route: 'community' })}>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText style={{padding: 0}} primary="Community" />
              <Badge
                style={{ marginRight: 11 }}
                badgeContent={3}
                color="secondary"
              >
              </Badge>
            </ListItem>
            <ListItem button onClick={() => this.props.handleDrawerClose({ route: 'music' })}>
              <ListItemIcon>
                <AlbumIcon />
              </ListItemIcon>
              <ListItemText style={{padding: 0}} primary="Music" />
            </ListItem>
            <ListItem button onClick={() => this.props.handleDrawerClose({ route: 'video' })}>
              <ListItemIcon>
                <MovieIcon />
              </ListItemIcon>
              <ListItemText style={{padding: 0}} primary="Video" />
            </ListItem>
            <ListItem button onClick={() => this.props.handleDrawerClose({ route: 'feed' })}>
              <ListItemIcon>
                <PublicIcon />
              </ListItemIcon>
              <ListItemText style={{padding: 0}} primary="Feed" />
              <Badge
                style={{ marginRight: 11 }}
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
            <ListItem button onClick={() => this.props.handleDrawerClose({ route: 'account' })}>
              <ListItemIcon>
                <AccountIcon />
              </ListItemIcon>
              <ListItemText style={{padding: 0}} primary="My Account" />
            </ListItem>
            <ListItem button onClick={() => this.props.handleDrawerClose({ route: 'settings' })}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText style={{padding: 0}} primary="Settings" />
            </ListItem>
          </div>
        </List>
      </div>
    )
  }
}