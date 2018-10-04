import React from 'react';
import PropTypes from 'prop-types';

class FanClubMain extends React.Component {
  propTypes: {
    updateState: React.PropTypes.func
  }

  componentDidMount() {
    this.props.updateState({
      showNav: true,
      showPlayer: true,
      showBack: false,
      backTo: null,
      title: 'Fan Club',
    });
  }

  render() {
    return (
      <div>
        <ul>
          <li>Purchase Membership (if the current user is not a member)</li>
          <li>Early Ticket Access (if there is a current offer)</li>
          <li>Exclusive Content</li>
          <li>Exclusive Merchandise</li>
          <li>Digital Uniques</li>
        </ul>
      </div>
    );
  }
};

export default FanClubMain;
