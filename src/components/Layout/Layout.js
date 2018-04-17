import React from 'react';
import Aux from '../../hoc/Auxi';
import classes from './Layout.scss';
import Navigation from '../Navigation/Toolbar/Toolbar'

const layout = ( props ) => (
   <Aux>
      <Navigation />
      <main className={classes.Content}>
         {props.children}
      </main>
   </Aux>
);

export default layout;