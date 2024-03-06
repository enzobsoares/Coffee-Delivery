import { CoffeeProps } from "../../contexts/CartContext";
import { ActionTypes } from "./actions";

export function cartItemsReducer(state, action) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      const existingItem = state.find(
        (item) => item.coffees === action.payload.coffee
      );

      if (existingItem) {
        const a = state.map((item) => {
          if (item.coffees === action.payload.coffee) {
            return {
              ...item,
              amount: item.amount + action.payload.amount,
            };
          }

          return item;
        });

        return a;
      } else {
        return [
          ...state,
          {
            coffees: action.payload.coffee,
            amount: action.payload.amount,
          },
        ];
      }

      break;
    }

    case ActionTypes.REMOVE_FROM_CART: {
      const itemsWithoutDeleteOne = state.filter((item) => {
        return item != action.payload.coffeeToDelete;
      });

      return itemsWithoutDeleteOne;
    }

    case ActionTypes.DECREMENT_ITEM_AMOUNT: {
        const itemsToChange = state.map((item) => {
            if (item == action.payload.coffeeToDecrement) {
                if(item.amount > 1) {
                    return {
                        coffees: action.payload.coffeeToDecrement.coffees,
                        amount: item.amount - 1
                    }
                }
            }

            return item
        })

        return itemsToChange
    }

    case ActionTypes.INCREMENT_ITEM_AMOUNT: {
        const itemsToChange = state.map((item) => {
            if (item == action.payload.coffeeToIncrement) {
                
                return {
                    coffees: action.payload.coffeeToIncrement.coffees,
                    amount: item.amount + 1
                }
                
            }

            return item
        })

        return itemsToChange
    }
  }
}
