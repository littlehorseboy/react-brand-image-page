/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwiperContainer from '../../components/SwiperContainer/SwiperContainer.jsx';
import Footer from '../../components/Footer/Footer.jsx';

const styles = {
  root: {
    minHeight: '100vh',
    backgroundColor: '#F0F0F0',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
};

class MultiplicationChart extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div>
          <SwiperContainer />
        </div>
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
