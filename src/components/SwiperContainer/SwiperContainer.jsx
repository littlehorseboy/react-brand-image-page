import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Swiper from 'swiper';
import '../../../node_modules/swiper/dist/css/swiper.css';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["componentDidMount"] }] */

const styles = {
  swiperContainer: {
    width: '100%',
  },
  swiperSlide: {
    '& > img': {
      width: '100%',
      objectFit: 'fill',
    },
  },
};

export class SwiperContainer extends React.Component {
  componentDidMount() {
    const { classes } = this.props;

    // eslint-disable-next-line no-new
    new Swiper(`.${classes.swiperContainer}`, {
      loop: true,
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.swiperContainer}>
        <div className="swiper-wrapper">
          <div className={classNames('swiper-slide', classes.swiperSlide)}>
            <img src="https://source.unsplash.com/collection/1/1600x800" />
          </div>
          <div className={classNames('swiper-slide', classes.swiperSlide)}>
            <img src="https://source.unsplash.com/collection/2/1600x800" />
          </div>
          <div className={classNames('swiper-slide', classes.swiperSlide)}>
            <img src="https://source.unsplash.com/collection/3/1600x800" />
          </div>
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    );
  }
}

SwiperContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SwiperContainer);
