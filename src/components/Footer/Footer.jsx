import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    textAlign: 'right',
    lineHeight: '34px',
    color: '#F0F0F0',
    backgroundColor: '#2EB738',
  },
  content: {
    marginRight: 85,
  },
};

export class Footer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <span className={classes.content}>
          Copyright © 2019 Horse. All rights reserved.
        </span>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
