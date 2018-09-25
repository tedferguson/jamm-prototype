import React from 'react';
import PropTypes from 'prop-types';

class NewsMain extends React.Component {
  propTypes: {
    updateState: React.PropTypes.func
  }

  componentDidMount() {
    this.props.updateState({
      showNav: true,
      showPlayer: true,
      title: 'News',
    });
  }

  render() {
    return (
      <div>
        <ul>
          <li>Search News</li>
          <li>Featured Stories</li>
          <li>Trending Stories</li>
        </ul>
      </div>
    );
  }
};

export default NewsMain;
