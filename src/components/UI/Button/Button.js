import React from 'react';
import classes from './Button.scss';

const button = (props) =>( 
   <button
      className={[classes.Button, classes[props.type]].join(' ')}
      onClick={props.clicked}
      disabled={props.isDisable}>
      {props.children}
   </button>
)

export default button;