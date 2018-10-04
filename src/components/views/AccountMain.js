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
      showBack: false,
      backTo: null,
      title: 'My Account',
    });
  }

  render() {
    return (
      <div>
        <ul>
          <li>My Profile</li>
          <li>Activity</li>
          <li>Account Details</li>
          <li>Subscriptions</li>
          <li>Channel Removed</li>
          <li>Membership Cancelled</li>
          <li>Change Password</li>
          <li>Link Accounts</li>
          <li>Payment Info</li>
          <li>Refill Wallet</li>
          <li>About Jamm</li>
          <li>Logout</li>
        </ul>
      </div>
    );
  }
};

export default AccountMain;
