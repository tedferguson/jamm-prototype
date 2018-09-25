import React from 'react';
import PropTypes from 'prop-types';

class SocialMain extends React.Component {
  propTypes: {
    updateState: React.PropTypes.func
  }

  componentDidMount() {
    this.props.updateState({
      showNav: true,
      showPlayer: true,
      title: 'Social'
    });
  }

  render() {
    return (
      <div>
        <ul>
          <li>My Friends</li>
          <li>Friends&apos; Playlists</li>
          <li>Trending Playlists</li>
          <li>Nearby Friends</li>
          <li>Recommended Friends</li>
        </ul>
      </div>
    );
  }
};

export default SocialMain;
