import React from 'react';
import PropTypes from 'prop-types';

class FeedMain extends React.Component {
  propTypes: {
    updateState: React.PropTypes.func
  }

  componentDidMount() {
    this.props.updateState({
      showNav: true,
      showPlayer: true,
      showBack: false,
      backTo: null,
      title: 'Feed',
    });
  }

  render() {
    return (
      <div>
        <ul>
          <li>Top Stories</li>
          <li>Aggregated Feed</li>
        </ul>
      </div>
    );
  }
};

export default FeedMain;
