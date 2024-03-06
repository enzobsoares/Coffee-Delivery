import { CartItems, CoffeeProps } from "../../contexts/CartContext"

export enum ActionTypes {
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART',
    DECREMENT_ITEM_AMOUNT = 'DECREMENT_ITEM_AMOUNT',
    INCREMENT_ITEM_AMOUNT = 'INCREMENT_ITEM_AMOUNT',
}

export function addToCartAction(coffee: CoffeeProps, amount: number) {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: {
            coffee,
            amount
        },
    }
}

export function removeFromCartAction(coffeeToDelete: CartItems) {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: { coffeeToDelete }
    }
}

export function decrementItemAmountAction(coffeeToDecrement) {
    return {
        type: ActionTypes.DECREMENT_ITEM_AMOUNT,
        payload: { coffeeToDecrement }
    }
}

export function incrementItemAmountAction(coffeeToIncrement) {
    return {
        type: ActionTypes.INCREMENT_ITEM_AMOUNT,
        payload: { coffeeToIncrement }
    }
}