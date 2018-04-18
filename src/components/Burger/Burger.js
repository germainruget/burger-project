import React from 'react';
import classes from './Burger.scss';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';

const burger = (props) =>{


   // On parcours "ingredients" (states)
   let initial = Object.keys(props.ingredients)
   .map((igKey) => {
      return[...Array(props.ingredients[igKey])].map((a, i) =>{
         //On retourne un  tableau avec le type d'ingrédient et la clé unique
         return [igKey, igKey + i]
         });
      })
      .reduce((arr, el) =>{
         return arr.concat(el);
      }, []);

   //On récupère la tableau d'ordre (states)
   let sortingArr = [...props.order];
   
   //On tri le tableau des ingédients avec le tableau d'ordre
   let result = [];
   sortingArr.forEach(key => {
      let found = false;
      initial = initial.filter(item => {
         if (!found && item[0] === key) {
            result.push(item);
            found = true;
            return false;
         } else
            return true;
      });
   });

   //On map result pour créer le tableau contenant le JSX
   let transformedIngredients = result.map(a =>{
      return <BurgerIngredient key={a[1]} type={a[0]} />
   });

   if(transformedIngredients.length === 0){
      transformedIngredients = <p className={classes.InfoMessage}>Please start adding ingredients</p>
   }

   return(
      <div className={classes.Burger}>
         <BurgerIngredient type="bread-top" />
         {transformedIngredients}
         <BurgerIngredient type="bread-bottom" />
      </div>
   );
};

export default burger;








   // let transformedIngredients = Object.keys(props.ingredients)
   // .map((igKey) => {
   //    return[...Array(props.ingredients[igKey])].map((a, i) =>{
   //          return <BurgerIngredient key={igKey + i} type={igKey} />
   //       });
   //    })
   //    .reduce((arr, el) =>{
   //       return arr.concat(el);
   //    }, []);

   // if(transformedIngredients.length === 0){
   //    transformedIngredients = <p>Please start adding ingredients</p>
   // }