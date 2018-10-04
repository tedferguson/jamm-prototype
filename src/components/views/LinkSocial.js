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
      showBack: true,
      backTo: 'link-music',
      title: 'Link Social Accounts'
    });
  }

  render() {
    return (
      <div>
        <div style={{textAlign: "center"}}>
          Link your social accounts to share songs and playlists with friends.
          Jamm will never post anything without your knowledge.
        </div>
        <ActionButton 
          handleNavButtonClick = { null }
          text = "LINK FACEBOOK"
        />
        <ActionButton 
          handleNavButtonClick = { null }
          text = "LINK INSTAGRAM"
        />
        <ActionButton 
          handleNavButtonClick = { null }
          text = "LINK TWITTER"
        />
        <ActionButton 
          handleNavButtonClick = { () => this.props.handleNavButtonClick({ route: 'home' }) }
          text = "DONE"
        />
      </div>
    );
  }
};

export default LinkMusic;
