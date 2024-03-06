import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { CounterCoffee, DeleteCoffee, InfosCoffee } from "./styles";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";


export function CoffeeCart({item}: any) {

    const { onRemoveFromCart, onDecrementItemAmount, onIncrementItemAmount } = useContext(CartContext)

    const coffeePrice = item.coffees.price * item.amount
    const coffeeTotal = coffeePrice.toLocaleString('pt-br', {minimumFractionDigits: 2})

    function handleRemoveFromCart() {
      onRemoveFromCart(item)
    }

    function handleDecrementItemAmount() {
      onDecrementItemAmount(item)
    }

    function handleIncrementItemAmount() {
      onIncrementItemAmount(item)
    }

  return (
    <InfosCoffee>
      <img src={item.coffees.imgSrc} alt=""></img>

      <div>
        <p>{item.coffees.title}</p>

        <div>
          <CounterCoffee>
            <Minus
              onClick={handleDecrementItemAmount}
              weight="bold"
              color="#8047F8"
              size={14}
              style={{ cursor: "pointer" }}
            />
            <span>{item.amount}</span>
            <Plus
              onClick={handleIncrementItemAmount}
              weight="bold"
              color="#8047F8"
              size={14}
              style={{ cursor: "pointer" }}
            />
          </CounterCoffee>

          <DeleteCoffee onClick={handleRemoveFromCart}>
            <Trash size={16} color="#8047F8" />
            REMOVER
          </DeleteCoffee>
          
        </div>
        
      </div>
      <span>{coffeeTotal}</span>
    </InfosCoffee>
  );
}                   

