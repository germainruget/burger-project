import React from 'react';
import classes from './Toolbar.scss';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
   <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.open} />
      <div>Logo</div>
      <nav className={classes.DesktopOnly}>
         <NavigationItems />
      </nav>
   </header>
);

export default toolbar;