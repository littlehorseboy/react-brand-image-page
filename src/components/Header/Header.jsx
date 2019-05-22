import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {

  },
};

export class Header extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>

      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
