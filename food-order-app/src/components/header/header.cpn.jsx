/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Fragment } from 'react';
import classes from './header.module.css';
import sweetymeals from '../../assets/sweety-meals.jpg';
import HeaderButton from '../header-button/header-button.cpn';

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Sweety Meals</h1>
        <HeaderButton />
      </header>
      <div className={classes['main-image']}>
        <img src={sweetymeals} alt='image' />
      </div>
    </Fragment>
  );
};

export default Header;
