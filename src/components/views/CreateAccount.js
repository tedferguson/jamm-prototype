import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import ActionButton from '../ActionButton';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 300,
  },
});

class CreateAccount extends React.Component {
  propTypes: {
    handleNavButtonClick: React.PropTypes.func,
    updateState: React.PropTypes.func
  }

  componentDidMount() {
    this.props.updateState({
      showNav: false,
      showPlayer: false,
      showBack: true,
      backTo: '',
      title: 'Create Account'
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="outlined-email-input"
            label="Email"
            className={classes.textField}
            type="email"
            name="email"
            margin="normal"
            variant="outlined"
            defaultValue=""
            fullWidth
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
            defaultValue=""
            fullWidth
          />
          <TextField
            id="outlined-confirm-password-input"
            label="Confirm Password"
            className={classes.textField}
            type="password"
            autoComplete="confirm-password"
            margin="normal"
            variant="outlined"
            defaultValue=""
            fullWidth
          />
        </form>

        <ActionButton 
          handleNavButtonClick = { () => this.props.handleNavButtonClick({ route: 'account-details' }) }
          text = "NEXT"
        />
      </div>
    );
  }
};

CreateAccount.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateAccount);

