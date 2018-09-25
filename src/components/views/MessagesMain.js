import React from 'react';
import PropTypes from 'prop-types';

class MessagesMain extends React.Component {
  propTypes: {
    updateState: React.PropTypes.func
  }

  componentDidMount() {
    this.props.updateState({
      showNav: true,
      showPlayer: true,
      title: 'Messages',
    });
  }

  render() {
    return (
      <div>
        <ul>
          <li>Message Thread 1</li>
          <li>Message Thread 2</li>
          <li>Message Thread 3</li>
        </ul>
      </div>
    );
  }
};

export default MessagesMain;
