import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import { AddToCart, BoxCoffee, Counter } from "./styles";
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../../contexts/CartContext";

interface Props {
  coffee: {
    id: string,
    imgSrc: string,
    title: string,
    description: string,
    tags: [],
    price: number,
  },
}

export function Card({coffee}: Props) {

  const { onAddToCart } = useContext(CartContext)

  const [amount, setAmount] = useState(1)

  function HandleincrementAmount() {
    setAmount((state) => {
      return state + 1
    })
  }

  function HandledecrementAmount() {
    if (amount <= 1) {
      return
    }else {
      setAmount((state) => {
        return state - 1
      })
    }
  }

  function HandleAddToCart() {
    onAddToCart(coffee, amount)
  }

 
  return (
      <BoxCoffee>
        <img src={coffee.imgSrc} alt=""></img>
        <h4>
          {coffee.tags.map((tag) => {
            return <span>{tag}</span>
          })}
        </h4> 
        <h3>{coffee.title}</h3>
        <p>{coffee.description}</p>

        <nav>
          <ul>
            <p>R$</p>
            <span>{coffee.price.toLocaleString('pt-br', {minimumFractionDigits: 2})}</span>
          </ul>

          <ul>
            <Counter>
              <button onClick={HandledecrementAmount}>
                <Minus
                  weight="bold"
                  color="#8047F8"
                  size={14}
                  style={{ cursor: "pointer" }}
                />
              </button>
              <span>{amount}</span>
              <button onClick={HandleincrementAmount}>  
                <Plus
                  weight="bold"
                  color="#8047F8"
                  size={14}
                  style={{ cursor: "pointer" }}
                />
              </button>
            </Counter>
            <button onClick={HandleAddToCart}>
              <AddToCart>
                <ShoppingCartSimple size={22} color="#FFFF" weight="fill" />
              </AddToCart>
            </button>
            
          </ul>
        </nav>
      </BoxCoffee>
  );
}
