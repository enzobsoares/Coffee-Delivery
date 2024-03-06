import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";
import { AddressHeader, AddressInfo, CartContainer, InputsContainer, IsNotItemInCart, OrderValue, PaymentHeader, PaymentInfo, PaymentOptions } from "./styles";
import { CoffeeCart } from "../../components/Form/CoffeeCart";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

export function Cart() {
  const { CartItems } = useContext(CartContext)
  if(CartItems.length > 0) {
    const totalItemsCartPrice = CartItems.reduce((total, item) => {
      return total + (item.amount * item.coffees.price)
    }, 0)

    
    const totalItemsCartPriceTranslated = totalItemsCartPrice.toLocaleString('pt-br', {minimumFractionDigits: 2})
    const totalWithDeliverySoma = totalItemsCartPrice + 3.90
    const totalWithDeliverySomaTranslated = totalWithDeliverySoma.toLocaleString('pt-br', {minimumFractionDigits: 2})

    return (
      <CartContainer>
        <main>
          <h3 className="infoTitle">Complete seu pedido</h3>
  
          <form id="order">
            <AddressInfo>
              <AddressHeader>
                <MapPinLine size={22} color="#C47F17" />
                <div>
                  <h3>Endereço de Entrega</h3>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </AddressHeader>
  
              <InputsContainer>
                <input
                  name="CEP"
                  required
                  pattern="\d{5}-\d{3}"
                  placeholder="CEP"
                />
                <input
                  name="rua"
                  className="inputRua"
                  type="text"
                  required
                  placeholder="Rua"
                />
                <div>
                  <input
                    name="numero"
                    type="number"
                    required
                    placeholder="Número"
                  />
                  <input
                    name="complemento"
                    className="inputComplemento"
                    type="text"
                    placeholder="Complemento"
                  />
                </div>
  
                <div>
                  <input name="bairro" type="text" required placeholder="Bairro" />
                  <input
                    name="cidade"
                    className="inputCidade"
                    type="text"
                    required
                    placeholder="Cidade"
                  />
                  <input
                    name="estado"
                    className="inputUF"
                    type="text"
                    required
                    placeholder="UF" 
                  />
                </div>
              </InputsContainer>
            </AddressInfo>
  
            <PaymentInfo>
              <PaymentHeader>
                <CurrencyDollar size={22} color="#8047F8" />
                <div>
                  <h3>Pagamento</h3>
                  <p>
                    O pagamento é feito na entrega. Escolha a forma que deseja pagar
                  </p>
                </div>
              </PaymentHeader>
  
              <PaymentOptions>
                <button>
                  <CreditCard size={16} color="#8047F8" />
                  CARTÃO DE CRÉDITO
                </button>
                <button>
                  <Bank size={16} color="#8047F8" /> CARTÃO DE DÉBITO
                </button>
                <button>
                  <Money size={16} color="#8047F8" /> DINHEIRO
                </button>
              </PaymentOptions>
            </PaymentInfo>
          </form>
        </main>
  
        <aside>
          <h3 className="infoTitle">Cafés selecionados</h3>
  
          <OrderValue>
            {
              CartItems.map((item) => {
                return <CoffeeCart item={item} />
              })
            }
  
            <div className="values">
                <div>
                    <p>Total de itens</p>
                    <span>R$ {totalItemsCartPriceTranslated}</span>
                </div>
                <div>
                    <p>Entrega</p>
                    <span>R$ 3,90</span>
                </div>
                <div>
                    <p>Total</p>
                    <span>R$ {totalWithDeliverySomaTranslated}</span>
                </div>
            </div>
              <input type="submit" form="order" value="CONFIRMAR PEDIDO" />
          </OrderValue>
        </aside>
      </CartContainer>
    );
  } else {
    return (
      <IsNotItemInCart>Adicione items ao seu carrinho para finalizar a compra!</IsNotItemInCart>
    )
  }
  
}
