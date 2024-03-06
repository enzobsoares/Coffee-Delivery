import styled from 'styled-components'
import { CartContainer } from '../Header/styles' 

export const BoxCoffee = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.25rem 1.5rem;
    width: 16rem;
    text-align: center;
    background-color: ${(props) => props.theme['base-card']};
    border-radius: 6px 36px 6px 36px;

    p {
        margin: 0.5rem 0 1.5rem 0; 
    }

    img {
        margin-top: -2.5rem;
    }

    h4{
        display: flex;
        font-size: 0.625rem;
        font-weight: bold;
        gap: 0.250rem;
        margin: 1rem 0;

        span {
            padding: 0.25rem 0.5rem;
            background-color: ${(props) => props.theme['yellow-light']};
            color: ${(props) => props.theme['yellow-dark']};
            border-radius: 100px;
        }
    }

    nav {
        width: 100%;
        display: flex;
        
        justify-content: space-between;

        ul {
            display: flex;
            align-items: center;
            justify-content: center;

            p{
                margin: 0 0.2rem 0 0;   
            }

            span {
                font-family: ${(props) => props.theme['baloo']};
                font-size: 1.5rem;
                font-weight: bold;
            }

            button {
                outline: 0;
                border: 0;
            }
        }
    }


`

export const AddToCart = styled(CartContainer)`
    background-color: ${(props) => props.theme['purple-dark']};
    border-color: ${(props) => props.theme['purple-dark']};
`


export const Counter = styled.button`
    width: 4.5rem;
    height: 2.635rem;
    padding: 0.75rem 0.5rem;
    background-color: ${(props) => props.theme['base-button']};
    border-radius: 6px;
    margin-right: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    
    outline: 0;
    border: 0;

    span {
        font-size: 1rem !important;
        font-weight: 400 !important;
        font-family: ${(props) => props.theme['roboto']}  !important; 
        color: ${(props) => props.theme['base-title']}  !important;
    }

    button {
        outline: 0;
        border: 0;
        background-color: ${(props) => props.theme['base-button']};
        display: flex;
    }
`


