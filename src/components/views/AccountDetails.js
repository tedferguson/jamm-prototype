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

class AccountDetails extends React.Component {
  propTypes: {
    handleNavButtonClick: React.PropTypes.func,
    updateState: React.PropTypes.func
  }

  componentDidMount() {
    this.props.updateState({
      showNav: false,
      showPlayer: false,
      showBack: true,
      backTo: 'create-account',
      title: 'Account Details',
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="outlined-first-name-input"
            label="First Name"
            className={classes.textField}
            autoComplete="firstName"
            margin="normal"
            variant="outlined"
            defaultValue=""
            fullWidth
          />
          <TextField
            id="outlined-last-name-input"
            label="Last Name"
            className={classes.textField}
            autoComplete="lastName"
            margin="normal"
            variant="outlined"
            defaultValue=""
            fullWidth
          />
          <TextField
            id="outlined-user-name-input"
            label="Public User Name"
            className={classes.textField}
            autoComplete="userName"
            margin="normal"
            variant="outlined"
            defaultValue=""
            fullWidth
          />
          <TextField
            id="outlined-birthdate-input"
            label="Birth Date"
            className={classes.textField}
            autoComplete="birthdate"
            margin="normal"
            variant="outlined"
            defaultValue=""
            style={{width: "45%"}}
          />
          <TextField
            id="outlined-zip-code-input"
            label="Postal Code"
            className={classes.textField}
            autoComplete="postalCode"
            margin="normal"
            variant="outlined"
            defaultValue=""
            style={{width: "45%"}}
          />
        </form>
        <div style={{textAlign: "center", marginTop: "20px "}}>
          By selecting &quot;Create Account&quot; I agree to the Jamm Music <u>Terms of Service</u> and <u>Privacy Policy</u>
        </div>
        <ActionButton 
          handleNavButtonClick = { () => this.props.handleNavButtonClick({ route: 'link-music' }) }
          text = "CREATE ACCOUNT"
        />
      </div>
    );
  }
};

AccountDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AccountDetails);
