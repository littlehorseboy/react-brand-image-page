/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Footer from '../../components/Footer/Footer.jsx';

const styles = {
  root: {
    width: 1280,
    minHeight: '100vh',
    backgroundColor: '#F0F0F0',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  gridList: {
    marginTop: 80,
    marginBottom: 'calc(80px - 12px)',
  },
};

class MultiplicationChart extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

MultiplicationChart.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MultiplicationChart);
