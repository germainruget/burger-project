import React, {Component} from 'react';
import Aux from '../../hoc/Auxi';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';

const INGREDIENT_PRICE = {
   salad: 0.5,
   onions: 0.5,
   cheese: 1,
   meat: 2.5,
   pickles: 0.5,
   ketchup: 1 
}
class BurgerBuilder extends Component{
   state = {
      ingredients:{
         salad:0,
         onions: 0,
         cheese: 0,
         meat: 0,
         pickles: 0,
         ketchup: 0
      },
      totalPrice: 4,
      orderControl: [],
      purchasable: false,
      ordering:false
   }

   updatePurchase = (ingredients) =>{

      //On va chercher le clé de ingredients (salad, onions, cheese..) 
      const sum = Object.keys(ingredients)
         .map(igKey => {
            //On map ce tableau et on récupère la valeur de chaques clés
            return ingredients[igKey];
         })
         .reduce((sum, el)=>{
            console.log(sum, el)
            return sum + el;
         }, 0);

      this.setState({purchasable: sum > 0});
   }

   addIngredientHandler = (type) =>{

      //Update ingredients
      const oldCount = this.state.ingredients[type];
      const updateCount = oldCount + 1;

      const updatedIngredients = {
         ...this.state.ingredients
      }
      updatedIngredients[type] = updateCount;
      
      //Update price
      const priceAddition = INGREDIENT_PRICE[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice + priceAddition;

      //Uodate order
      const oldOrder = this.state.orderControl;
      const newOrder = [...oldOrder, type];

      this.setState({totalPrice: newPrice, ingredients: updatedIngredients, orderControl: newOrder});

      this.updatePurchase(updatedIngredients);
   }

   removeIngredientHandler = (type) => {

      //Update ingredient
      const oldCount = this.state.ingredients[type];
      if(oldCount <= 0){
         return
      }
      const updateCount = oldCount - 1;
      const updatedIngredients = {
         ...this.state.ingredients
      }
      updatedIngredients[type] = updateCount;

      //Update price
      const priceDeduction = INGREDIENT_PRICE[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - priceDeduction;

      //Update order
      const newOrder = this.state.orderControl;
      const indexToRemove = [...newOrder].lastIndexOf(type);
      newOrder.splice(indexToRemove, 1);

      this.setState({ totalPrice: newPrice, ingredients: updatedIngredients, orderControl: newOrder });

      this.updatePurchase(updatedIngredients);
   }

   orderingHandler = () =>{
         this.setState({ordering: true});
   }

   cancelOrderingHandler = () =>{
      this.setState({ordering: false});
   }

   render(){
      const disableInfo = {
         ...this.state.ingredients
      };

      for(let key in disableInfo){
         disableInfo[key] = disableInfo[key] <= 0
      }

      return(
         <Aux>
            <Modal show={this.state.ordering} click={this.cancelOrderingHandler}>
               <OrderSummary
                  clicked={this.cancelOrderingHandler}
                  ingredients={this.state.ingredients}      
                  price={this.state.totalPrice} />
            </Modal>
            <Burger
               ingredients={this.state.ingredients}
               order={this.state.orderControl} />
            <BuildControls 
               ordering={this.orderingHandler}
               ingredientAdd={this.addIngredientHandler}
               ingredientRemove={this.removeIngredientHandler}
               disabled={disableInfo}
               price={this.state.totalPrice}
               purchasable={this.state.purchasable}/>
         </Aux>
      );
   }
}

export default BurgerBuilder;