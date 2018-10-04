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
      backTo: null,
      title: 'Merch Store',
    });
  }

  render() {
    return (
      <div>
        <ul>
          <li>Top Merch Items</li>
          <li>Merch Specials</li>
          <li>CDs &amp; Vinyl</li>
          <li>Clothing</li>
          <li>Posters</li>
          <li>Digital Uniques</li>
          <li>Other</li>
        </ul>
      </div>
    );
  }
};

export default StoreMain;
