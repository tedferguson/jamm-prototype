import React from 'react';
import PropTypes from 'prop-types';

class StoreMain extends React.Component {
  propTypes: {
    updateState: React.PropTypes.func
  }

  componentDidMount() {
    this.props.updateState({
      showNav: true,
      showPlayer: true,
      title: 'Store',
    });
  }

  render() {
    return (
      <div>
        <ul>
          <li>Search Store</li>
          <li>Merch Specials</li>
          <li>Browse by Category</li>
          <li>Browse by Artist</li>
        </ul>
      </div>
    );
  }
};

export default StoreMain;
