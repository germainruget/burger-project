import React from 'react';
import classes from './BuildControl.scss';


const buildControl = (props) =>{
   return(
      <div className={classes.BuildControl}>
         <button className={classes.More} onClick={props.added}>+</button>
         <div>{props.label}</div>
         <button className={classes.Less} onClick={props.remove} disabled={props.disabled}>-</button>
      </div>
   )
}

export default buildControl;