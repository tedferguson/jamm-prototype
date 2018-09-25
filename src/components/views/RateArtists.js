import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ActionButton from '../ActionButton';
import CardWrapper from '../Cards'

const data = ['Artist 1', 'Artist 2', 'Artist 3', 'Artist 4']

class RateArtists extends React.Component {
  propTypes: {
    handleNavButtonClick: React.PropTypes.func,
    updateState: React.PropTypes.func
  }

  componentDidMount() {
    this.props.updateState({
      showNav: false,
      showPlayer: false,
      title: 'Rate Artists',
    });
  }

  render() {
    return (
      <div>
        <div style={{textAlign: "center"}}>
          Swipe right to like artist. Swipe left to dislike.
        </div>
        <div>
      
        <div style={{
          margin: "20px 0px",
          height: "300px",
          background: "#666",
          border: "solid 1px #333",
        }} />

        </div>
        <ActionButton 
          handleNavButtonClick = { () => this.props.handleNavButtonClick('home') }
          text = "DONE"
        />
      </div>
    );
  }
};

export default RateArtists;
