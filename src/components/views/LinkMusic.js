import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ActionButton from '../ActionButton';

class LinkMusic extends React.Component {
  propTypes: {
    handleNavButtonClick: React.PropTypes.func,
    updateState: React.PropTypes.func
  }

  componentDidMount() {
    this.props.updateState({
      showNav: false,
      showPlayer: false,
      showBack: false,
      backTo: null,
      title: 'Link Music Account'
    });
  }

  render() {
    return (
      <div>
        <div style={{textAlign: "center"}}>
          Jamm requires a paid subscription to either Spotify or Apple Music to play music.
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
        <ActionButton 
          handleNavButtonClick = { () => this.props.handleNavButtonClick({ route: 'link-social' }) }
          text = "DONE"
        />
      </div>
    );
  }
};

export default LinkMusic;
