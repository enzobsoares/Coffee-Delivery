import { createContext, ReactNode, useReducer, useState } from "react";
import { addToCartAction, decrementItemAmountAction, incrementItemAmountAction, removeFromCartAction } from "../reducers/CartReducer/actions";
import { cartItemsReducer } from "../reducers/CartReducer/reducer";

export interface CoffeeProps {
    id: string
    imgSrc: string
    title: string
    description: string
    tags: []
    price: number
}

export interface CartItems {
    coffees: CoffeeProps[]
    amount: number
}

interface CartContextType {
    coffeeAmount: number;
    setCoffeeAmount: React.Dispatch<React.SetStateAction<number>>;
    onAddToCart: (coffee: CoffeeProps, amount: number) => void
    onRemoveFromCart: (coffeeToDelete: CartItems) => void
    onDecrementItemAmount: (coffeeToDecrement: CartItems) => void
    onIncrementItemAmount: (coffeeToIncrement: CartItems) => void
    CartItems: {coffees:CoffeeProps[]; amount: number}
}

interface CartContextProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({children,}: CartContextProviderProps) {
  const [coffeeAmount, setCoffeeAmount] = useState(1) //teste

  const [CartItemsState, dispatch] = useReducer(
    cartItemsReducer, [])

    const CartItems = CartItemsState

  function onAddToCart(coffee: CoffeeProps, amount: number) {
    dispatch(addToCartAction(coffee, amount))
  }

  function onRemoveFromCart(coffeeToDelete: CartItems) {
    dispatch(removeFromCartAction(coffeeToDelete))
  }

  function onDecrementItemAmount(coffeeToDecrement: CartItems) {
    dispatch(decrementItemAmountAction(coffeeToDecrement))
  }

  function onIncrementItemAmount(coffeeToIncrement: CartItems) {
    dispatch(incrementItemAmountAction(coffeeToIncrement))
  }

  //console.log(CartItems)
    return (
        <CartContext.Provider value={{
            coffeeAmount,
            setCoffeeAmount,
            onAddToCart,
            onRemoveFromCart,
            CartItems,
            onDecrementItemAmount,
            onIncrementItemAmount
        }}>
            {children}
        </CartContext.Provider>
    )
}

