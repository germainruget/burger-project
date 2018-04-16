import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.scss';

class BurgerIngredient extends Component {
   render(){
      let ingredient = null;

      switch (this.props.type) {
         case ('bread-top'):
            ingredient = (
               <div className={classes.BreadTop}>
                  <div className={classes.Seeds + " " + classes.Seeds1}></div>
                  <div className={classes.Seeds + " " + classes.Seeds2}></div>
                  <div className={classes.Seeds + " " + classes.Seeds3}></div>
               </div>
            );
            break;

         case ('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}></div>
            break;

         case ('salad'):
            ingredient = <div className={classes.Salad}></div>
            break;

         case ('onions'):
            ingredient = <div className={classes.Onions}></div>
            break;

         case ('cheese'):
            ingredient = <div className={classes.Cheese}></div>
            break;

         case ('meat'):
            ingredient = <div className={classes.Meat}></div>
            break;

         case ('pickles'):
            ingredient = (
               <div className={classes.Pickles}>
                  <div className={classes.Pickle}></div>
                  <div className={classes.Pickle}></div>
                  <div className={classes.Pickle}></div>
               </div>
            )
            break;

         case ('ketchup'):
            ingredient = <div className={classes.Ketchup}></div>
            break;

         default:
            ingredient = null;
            break;
      }
      return ingredient;
   }
}

BurgerIngredient.propTypes = {
   type: PropTypes.string.isRequired
}

export default BurgerIngredient;