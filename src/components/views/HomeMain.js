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
      showBack: false,
      backTo: null,
      title: 'Channel Name', 
    });
  }

  render() {
    return (
      <div>
        <ul>
          <li>Fan Level Badge</li>
          <li>Hero Carousel</li>
          <li>Check In (if currently at venue)</li>
          <li>Live Stream (if live stream is currently or imminently available)</li>
          <li>Early Access (if currently available)</li>
          <li>Coming Your Way (if upcoming show in user&apos;s area)</li>
          <li>From the Road (if currently on tour)</li>
          <li>From the Crowd (if currently on tour)</li>
          <li>News</li>
          <li>Exclusives</li>
          <li>New Music</li>
          <li>New Videos</li>
          <li>Trending Playlists</li>
          <li>Top Merchandise</li>
          <li>Artist Profile</li>
        </ul>
      </div>
    );
  }
};

export default HomeMain;
