import React from 'react';
import classes from './Modal.scss';
import Aux from '../../../hoc/Auxi';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
   <Aux>
      <Backdrop show={props.show} clicked={props.click}/>
      <div
         className={classes.Modal}
         style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
         }}>
         {props.children}
      </div>
   </Aux>
);

export default modal;