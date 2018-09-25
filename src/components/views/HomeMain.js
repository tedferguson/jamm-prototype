import React from 'react';
import PropTypes from 'prop-types';

class HomeMain extends React.Component {
  propTypes: {
    showNav: React.PropTypes.func
  }

  componentDidMount() {
    this.props.updateState({
      showNav: true,
      showPlayer: true,
      title: 'Channel Name', 
    });
  }

  render() {
    return (
      <div>
        <ul>
          <li>Featured Exclusives</li>
          <li>Choice Selections</li>
          <li>Featured New Releases</li>
          <li>Featured Stations</li>
          <li>Trending Playlists</li>
          <li>Recommended Friends</li>
          <li>Upcoming Concerts</li>
          <li>Merch Specials</li>
        </ul>
      </div>
    );
  }
};

export default HomeMain;
