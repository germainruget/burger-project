import React from 'react';
import classes from './NavigationItems.scss';

const navigationItems = (props) => (
   <ul className={classes.NavigationItems}>
      <li><a href="/" >Menu 1</a></li>
      <li><a href="/" >Menu 2</a></li>
      <li><a href="/" >Menu 3</a></li>
   </ul>
);

export default navigationItems;