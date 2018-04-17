import React from 'react';
import classes from './BuildControls.scss';
import BuildControl from './BuildControl/BuildControl';
import Button from '../../UI/Button/Button'

const buildControls = (props) =>{

      const controls = Object.keys(props.ingredients)
            .map(igKey =>{
               let igKeyCapitalize = igKey.replace(igKey.charAt(0), igKey.charAt(0).toUpperCase())
               return(
                  <BuildControl
                     key={igKey}
                     label={igKeyCapitalize}
                     type={igKey}
                     added={() => props.ingredientAdd(igKey)}
                     remove={() => props.ingredientRemove(igKey)}
                     disabled={props.disabled[igKey]} />
                  )
            });

      return(
      <div className={classes.BuildControls}>
         <div>Current price: <strong>{props.price.toFixed(2)} €</strong></div>
         {controls}
         <Button
            clicked={props.ordering}
            style={{marginTop: '30px'}}
            isDisable={!props.purchasable} >ORDER NOW</Button>
      </div>
   )
}

export default buildControls;