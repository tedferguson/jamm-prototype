import React from 'react';
import PropTypes from 'prop-types';

class LibraryMain extends React.Component {
  propTypes: {
    updateState: React.PropTypes.func
  }

  componentDidMount() {
    this.props.updateState({
      showNav: true,
      showPlayer: true,
      title: 'My Library'
    });
  }

  render() {
    return (
      <div>
        <ul>
          <li>Search Library</li>
          <li>Stations</li>
          <li>Playlists</li>
          <li>Artists</li>
          <li>Albums</li>
          <li>Songs</li>
          <li>Videos</li>
        </ul>
      </div>
    );
  }
};

export default LibraryMain;
