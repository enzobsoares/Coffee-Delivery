import { BenefitsWrapper, BennefitsIcon, CoffeeContainer, HomeContainer, MenuContainer } from "./styles";
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import CafeHome from '../../../public/cafeHome.png'
import { LayoutContainer } from "../../layouts/DefaultLayout/styles";
import { Card } from "../../components/Card";
import CoffeeJSON  from "../../../data.json"
import { CoffeeProps } from "../../contexts/CartContext";

// Transformar Json em Array
const coffeeToString = JSON.stringify(CoffeeJSON)
const coffeesData = [JSON.parse(coffeeToString)]
const coffees = coffeesData[0].coffees


export function Home() {
    
    return (
        <>
            <HomeContainer>
                <div>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

                    <BenefitsWrapper>
                        <div>
                            <BennefitsIcon backColor="yellowDark">
                                <ShoppingCart size={16} color="#FFFF" weight='fill' />
                            </BennefitsIcon>
                            <span>Compra simples e segura</span>
                        </div>

                        <div>
                            <BennefitsIcon backColor="gray">
                                <Package size={16} color="#FFFF" weight='fill' />
                            </BennefitsIcon>
                            <span>Compra simples e segura</span>
                        </div>
                    </BenefitsWrapper>

                    <BenefitsWrapper>
                        <div>
                            <BennefitsIcon backColor="yellow">
                                <Timer size={16} color="#FFFF" weight='fill' />
                            </BennefitsIcon>
                            <span>Compra simples e segura</span>
                        </div>

                        <div>
                            <BennefitsIcon backColor="purple">
                                <Coffee size={16} color="#FFFF" weight='fill' />
                            </BennefitsIcon>
                            <span>Compra simples e segura</span>
                        </div>
                    </BenefitsWrapper>
                </div>

                <div> 
                    <img src={CafeHome} />
                </div>
            </HomeContainer>

            <LayoutContainer>
                <MenuContainer>
                    <h1>Nossos cafés</h1>

                    <nav>
                        <ul>
                            <li>TRADICIONAL</li>
                            <li>ESPECIAL</li>
                            <li>COM LEITE</li>
                            <li>ALCÓLICO</li>
                            <li>GELADO</li>
                        </ul>
                    </nav>
                </MenuContainer>

                <CoffeeContainer>
                    {coffees.map((coffee: CoffeeProps ) => (
                        <Card key={coffee.id} coffee={coffee} />
                    ))}
                </CoffeeContainer>
            </LayoutContainer>
        </>
    )
}