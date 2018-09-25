import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ActionButton from '../ActionButton';

class LinkAccounts extends React.Component {
  propTypes: {
    handleNavButtonClick: React.PropTypes.func,
    updateState: React.PropTypes.func
  }

  componentDidMount() {
    this.props.updateState({
      showNav: false,
      showPlayer: false,
      title: 'Link Accounts'
    });
  }

  render() {
    return (
      <div>
        <div style={{textAlign: "center"}}>
          Jamm requires either a premium Spotify or Apple Music account to play music.
          Sign in to your account below.
        </div>
        <ActionButton 
          handleNavButtonClick = { null }
          text = "LINK SPOTIFY"
        />
        <ActionButton 
          handleNavButtonClick = { null }
          text = "LINK APPLE MUSIC"
        />
        <div style={{textAlign: "center"}}>
          Link your Facebook account to share songs and playlists with friends.
          Jamm will never post anything without your knowledge.
        </div>
        <ActionButton 
          handleNavButtonClick = { null }
          text = "LINK FACEBOOK"
        />
        <ActionButton 
          handleNavButtonClick = { () => this.props.handleNavButtonClick('rate-artists') }
          text = "DONE"
        />
      </div>
    );
  }
};

export default LinkAccounts;
