import React from 'react';
import classes from './BuildControl.scss';


const buildControl = (props) =>{
   return(
      <div className={classes.BuildControl}>
         <div>{props.label}</div>
         <button onClick={props.added}>+</button>
         <button onClick={props.remove} disabled={props.disabled}>-</button>
      </div>
   )
}

export default buildControl;