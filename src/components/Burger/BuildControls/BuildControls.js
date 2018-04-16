import React from 'react';
import classes from './BuildControls.scss';
import BuildControl from './BuildControl/BuildControl';

const controls = [
   { label: 'Salad', type: 'salad'},
   { label: 'Onions', type: 'onions'},
   { label: 'Cheese', type: 'cheese'},
   { label: 'Meat', type: 'meat'},
   { label: 'Pickles', type: 'pickles'},
   { label: 'Ketchup', type: 'ketchup'}
]

const buildControls = (props) =>{
   return(
      <div className={classes.BuildControls}>
         <div>Current price: <strong>{props.price.toFixed(2)} €</strong></div>
         {controls.map(ctrl =>(
            <BuildControl
               key={ctrl.label}
               label={ctrl.label}
               type={ctrl.type}
               added={() => props.ingredientAdd(ctrl.type)}
               remove={() => props.ingredientRemove(ctrl.type)}
               disabled={props.disabled[ctrl.type]}/>
         ))}
         <button
            onClick={props.ordering}
            className={classes.Order}
            disabled={!props.purchasable} >ORDER NOW</button>
      </div>
   )
}

export default buildControls;