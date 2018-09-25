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
      title: 'Music',
    });
  }

  render() {
    return (
      <div>
        <ul>
          <li>Search Music</li>
          <li>Exclusive Songs</li>
          <li>New Releases</li>
          <li>Recommended Stations</li>
          <li>Trending Tracks</li>
          <li>Browse Artists</li>
        </ul>
      </div>
    );
  }
};

export default MusicMain;
