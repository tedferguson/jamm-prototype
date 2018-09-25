import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

class ActionButton extends React.Component {
  propTypes: {
      handleNavButtonClick: React.PropTypes.func
  }

  render() {
    return (
      <div style={{margin: "20px", textAlign: "center"}}>
        <Button
          variant="extendedFab"
          style = {{ width: 200, textTransform: "uppercase" }}
          onClick = { this.props.handleNavButtonClick }
        >
          { this.props.text }
        </Button>
      </div>
    );
  }
};

export default ActionButton;
