import React from 'react';
import PropTypes from 'prop-types';

class VideoMain extends React.Component {
  propTypes: {
    updateState: React.PropTypes.func
  }

  componentDidMount() {
    this.props.updateState({
      showNav: true,
      showPlayer: true,
      showBack: false,
      backTo: null,
      title: 'Video'
    });
  }

  render() {
    return (
      <div>
        <ul>
          <li>Search Video</li>
          <li>Exclusive Videos</li>
          <li>Featured Videos</li>
          <li>Trending Videos</li>
        </ul>
      </div>
    );
  }
};

export default VideoMain;
