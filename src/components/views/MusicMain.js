import React from 'react';
import PropTypes from 'prop-types';

class MusicMain extends React.Component {
  propTypes: {
    updateState: React.PropTypes.func
  }

  componentDidMount() {
    this.props.updateState({
      showNav: true,
      showPlayer: true,
      showBack: false,
      backTo: null,
      title: 'Music',
    });
  }

  render() {
    return (
      <div>
        <ul>
          <li>Search Music</li>
          <li>Exclusive Songs</li>
          <li>Trending Songs</li>
          <li>Featured Albums</li>
          <li>Artist Playlists</li>
          <li>Featured Playlists</li>
          <li>Fan Playlists</li>
          <li>My Playlists</li>
        </ul>
      </div>
    );
  }
};

export default MusicMain;
