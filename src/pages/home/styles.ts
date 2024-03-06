import styled from 'styled-components'

const BACK_COLORS = {
    yellow: 'yellow',
    yellowDark: 'yellow-dark',
    purple: 'purple',
    gray: 'base-text',
} as const

interface BackColorProps {
    backColor: keyof typeof BACK_COLORS 
}

export const HomeContainer = styled.section`
    display: flex;
    justify-content: space-between;
    //background-image: url('../../../public/Background.png');
    align-items: start;
    max-width: 70rem;
    margin: 5.87rem auto;
    padding: 0 2%;
    gap: 2rem;

    div h1 {
        font-size: 3rem;
        font-family: ${(props) => props.theme['baloo']};
        line-height: 1.3;
        color: ${(props) => props.theme['base-title']};
    }

    div p {
        font-size: 1.25rem;
        margin: 0.5rem 0 4rem 0;
        color: ${(props) => props.theme['base-subtitle']};
    }

    @media (max-width: 1190px) {
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin: 1rem 0 5rem 0;

        div {
            h1 {
                font-size: 2.5rem;
            }

            p{
                font-size: 1.15rem;
            }
            img {
             width: 100%;
            }
        }
            
    }
`

export const BenefitsWrapper = styled.div`
    display: flex;
    gap: 2.5rem;
    margin-top: 2rem;

    div {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        gap: 0.3rem;
        
    }

    div span {
        color: ${(props) => props.theme['base-text']};
        font-size: 1rem;
    }

    &:last-child {
        margin-top: 1.25rem;
    }

    @media (max-width: 1190px) {
        justify-content: center;

        div{
            gap: 0;
            span {
                text-align: left;
            }
        }
    }
`

export const BennefitsIcon = styled.div<BackColorProps>`
    padding: 0.5rem;
    text-align: center;
    width: 2rem;
    height: 2rem;
    background-color: ${(props) => props.theme[BACK_COLORS[props.backColor]]};
    border-radius: 1000px;
    margin-right: 0.75rem;
    position: absolute;
   
`

export const MenuContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3.37rem;

    h1 {
        font-family: ${(props) => props.theme['baloo']};
        font-size: 2rem;
        color: ${(props) => props.theme['base-subtitle']};
    }

    nav ul{
        display: flex;
        gap: 0.5rem;
        text-decoration: none;
        list-style-type: none;

        li {
            padding: 0.375rem 0.75rem;
            font-size: 0.625rem;
            font-weight: bold;
            border: 1px solid ${(props) => props.theme['yellow-dark']};
            color: ${(props) => props.theme['yellow-dark']};
            border-radius: 100px;
            cursor: pointer;
        }
    }

    @media (max-width: 1190px) {
        flex-direction: column;
        gap: 0.5rem;
        
        nav ul {
            flex-wrap: wrap;
            justify-content: center;
        }
    }
`

export const CoffeeContainer = styled.div`
    display: flex;
    justify-content: start;
    gap: 2rem;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;

    @media (max-width: 1190px) {
        justify-content: center;
    }
`