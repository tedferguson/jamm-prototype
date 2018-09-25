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
      title: 'Concerts'
    });
  }

  render() {
    return (
      <div>
        <ul>
          <li>Search Concerts</li>
          <li>Check In at Venue</li>
          <li>Upcoming Concerts</li>
          <li>My Concert History</li>
        </ul>
      </div>
    );
  }
};

export default ConcertsMain;
