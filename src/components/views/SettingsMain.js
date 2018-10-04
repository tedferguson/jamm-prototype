import React from 'react';
import PropTypes from 'prop-types';

class SettingsMain extends React.Component {
  propTypes: {
    updateState: React.PropTypes.func
  }

  componentDidMount() {
    this.props.updateState({
      showNav: true,
      showPlayer: false,
      showBack: false,
      backTo: null,
      title: 'Settings',
    });
  }

  render() {
    return (
      <div>
        <ul>
          <li>App Version</li>
          <li>Playback Preferences</li>
          <li>Other Settings</li>
        </ul>
      </div>
    );
  }
};

export default SettingsMain;
