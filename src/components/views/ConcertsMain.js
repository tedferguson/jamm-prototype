import React from 'react';
import PropTypes from 'prop-types';

class ConcertsMain extends React.Component {
  propTypes: {
    handleNavButtonClick: React.PropTypes.func,
    updateState: React.PropTypes.func
  }

  componentDidMount() {
    this.props.updateState({
      showNav: true,
      showPlayer: true,
      showBack: false,
      backTo: null,
      title: 'Concerts'
    });
  }

  render() {
    return (
      <div>
        <ul>
          <li>Live Stream (if there is a current or imminent live performance stream)</li>
          <li>Coming Your Way (if there is an upcoming show within range of that user&apos;s home location)</li>
          <li>From the Road (if there are recent artist posts to Facebook, Instagram, or Twitter from the artist&apos;s current tour with a specific hashtag)</li>
          <li>From the Crowd (if there are recent fan posts to Facebook, Instagram, or Twitter with a specific hashtag)</li>
          <li>Check In (if that user is geo-located within the venue of a current or imminent live performance, or if that user&apos;s home location is within range of that venue)</li>
          <li>Find Friends (upon checking in to a live performance)</li>
          <li>Virtual Lighter (upon checking in to a live performance)</li>
          <li>Tour Schedule (if there is a current or imminent tour)</li>
          <li>Past Highlights</li>
        </ul>
      </div>
    );
  }
};

export default ConcertsMain;
