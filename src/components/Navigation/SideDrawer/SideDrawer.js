import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxi';
import classes from './SideDrawer.scss';

const sideDrawer = (props) =>{
   let myClass = [classes.SideDrawer, classes.Close];
   if(props.show){
      myClass = [classes.SideDrawer, classes.Open];
   }
   return(
      <Aux>
         <Backdrop show={props.show} clicked={props.close} />
         <div className={myClass.join(' ')}>
            <div>Logo</div>
            <nav>
               <NavigationItems />
            </nav>
         </div>
      </Aux>
   );
}

export default sideDrawer;