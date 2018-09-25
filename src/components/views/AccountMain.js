import React from 'react';
import PropTypes from 'prop-types';

class AccountMain extends React.Component {
  propTypes: {
    handleNavButtonClick: React.PropTypes.func,
    updateState: React.PropTypes.func
  }

  componentDidMount() {
    this.props.updateState({
      showNav: true,
      showPlayer: false,
      title: 'My Account',
    });
  }

  render() {
    return (
      <div>
        <ul>
          <li>My Profile</li>
          <li>Activity</li>
          <li>Link Accounts</li>
          <li>Subscriptions</li>
          <li>Payment Info</li>
          <li>Refill Wallet</li>
          <li>Change Password</li>
          <li>Log Out</li>
        </ul>
      </div>
    );
  }
};

export default AccountMain;
