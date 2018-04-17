import React from 'react';
import classes from './OrderSummary.scss';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

   const ingredientSummary = Object.keys(props.ingredients)
      .map(igKey =>{
         return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}</li>
      })

   return(
      <div className={classes.OrderSummary} >
         <h1>My Order</h1>
         <ul>
            {ingredientSummary}
         </ul>
         <p>Price: {props.price.toFixed(2)} €</p>
         <Button type='Danger' clicked={props.cancel}>CANCEL</Button>
         <Button type='Valid' clicked={props.continue}>CONTINUE</Button>
      </div>   
   )
}

export default orderSummary;