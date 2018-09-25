import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import ActionButton from '../ActionButton';

class Splash extends React.Component {
  propTypes: {
    handleNavButtonClick: React.PropTypes.func,
    updateState: React.PropTypes.func
  }

  componentDidMount() {
    this.props.updateState({
      showNav: false,
      showPlayer: false,
      title: 'Channel Name',
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
      
        <div style={{
          margin: "20px 0px",
          padding: "50px 0px",
          height: "250px",
          background: "#666",
          border: "solid 1px #333",
        }}>
      
          <div style={{textAlign: "center", color: "#fff"}}>Channel Branding</div>
          <div style={{textAlign: "center", color: "#fff"}}>Powered by Jamm</div>
        </div>
        <ActionButton 
          handleNavButtonClick = { () => this.props.handleNavButtonClick('login') }
          text = "Sign in with Jamm"
        />
        <ActionButton 
          handleNavButtonClick = { () => this.props.handleNavButtonClick('create-account') }
          text = "Create Jamm Account"
        />
      </div>
    );
  }
};

export default Splash;
