import styled from 'styled-components'

export const HeaderContainer = styled.header`
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;

    div {
        display: flex;
        gap: 0.75rem;
    }
`

export const UserLocale = styled.div`
    background-color: ${(props) => props.theme['purple-light']};
    padding: 0.5rem 0.687rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    gap: 0.25rem;

    span {
        color: ${(props) => props.theme['purple-dark']};
        font-weight: bold;
    }
`

export const CartContainer = styled.button`
    padding: 0.5rem;
    background-color: ${(props) => props.theme['yellow-light']};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: 2px solid;
    border-color: ${(props) => props.theme['yellow-light']};
    position: relative;
    
    cursor: pointer;

    span {
        position: absolute;
        top: -10px;
        right: -10px;
        padding: 2px 6px;
        background-color: ${(props) => props.theme['yellow-dark']};
        border-radius: 50%;
        color: white;
        font-weight: bold;
    }
`