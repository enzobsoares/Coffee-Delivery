import Logo from "../../../public/Logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { CartContainer, HeaderContainer, UserLocale } from "./styles";
import { NavLink } from "react-router-dom";
import { LayoutContainer } from "../../layouts/DefaultLayout/styles";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

export function Header() {
  const { CartItems } = useContext(CartContext)
  const totalItemsCart = CartItems.reduce((total, item) => {
    return total + item.amount
  }, 0)

  return (
    <LayoutContainer>
      <HeaderContainer>
        <NavLink to="/">
          <img src={Logo}></img>
        </NavLink>

        <div>
          <UserLocale>
            <MapPin color="#8047F8" size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </UserLocale>

          <NavLink to="/cart">
            <CartContainer>
              <ShoppingCart size={22} color="#C47F17" weight="fill" />
              <span>
                {totalItemsCart}
              </span>
            </CartContainer>
          </NavLink>
        </div>
      </HeaderContainer>
    </LayoutContainer>
  );
}
