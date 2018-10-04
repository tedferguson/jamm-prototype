import React from 'react';
import PropTypes from 'prop-types';

class CommunityMain extends React.Component {
  propTypes: {
    updateState: React.PropTypes.func
  }

  componentDidMount() {
    this.props.updateState({
      showNav: true,
      showPlayer: true,
      backTo: null,
      title: 'Community'
    });
  }

  render() {
    return (
      <div>
        <ul>
          <li>Fan Wall</li>
          <li>My Friends</li>
          <li>Friends&apos; Playlists</li>
          <li>Trending Playlists</li>
          <li>Recommended Friends</li>
          <li>Messages</li>
        </ul>
      </div>
    );
  }
};

export default CommunityMain;
