import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function BackButton(props) {
  const { classes } = props;
  return (
    <IconButton
      className = {classes.button}
      style = {{ position: 'absolute', left: 5, top: 19 }}
      color = "inherit"
      aria-label = "Back"
      onClick = { props.handleBackClick }
    >
      <ChevronLeftIcon />
    </IconButton>
  );
}

BackButton.propTypes = {
  classes: PropTypes.object.isRequired,
  handleBackClick: PropTypes.func,
};

export default withStyles(styles)(BackButton);
