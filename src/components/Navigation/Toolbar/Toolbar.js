import React from 'react';
import classes from './Toolbar.scss';
import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = (props) => (
   <header className={classes.Toolbar}>
      <div>Menu</div>
      <div>Logo</div>
      <NavigationItems />
   </header>
);

export default toolbar;