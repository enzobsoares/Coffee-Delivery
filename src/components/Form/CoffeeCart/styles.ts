import styled from "styled-components";
import { Counter } from "../../Card/styles";

export const CoffeeCart = styled.div`
    display: flex;
  justify-content: space-between;
 
  

  &:first-child {
    padding: 0 0 2rem 0;
    
  }

  
`

export const InfosCoffee = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.25rem;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
  padding: 1rem 0 2rem 0;

  &:first-child {
    padding: 0 0 2rem 0;
    
  }

  img {
    width: 4rem;
  }

  div {
    p {
      font-size: 1rem;
    }

    div {
      display: flex;
      gap: 0.5rem;
      margin-top: 0.5rem;
      align-items: center;
    }
  }
  span {
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const DeleteCoffee = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  height: 2rem;

  padding: 0.4rem 0.5rem;
  background-color: ${(props) => props.theme["base-button"]};
  border-radius: 6px;

  cursor: pointer;
  outline: 0;
  border: 0;

  font-size: 0.75rem;
`;

export const CounterCoffee = styled(Counter)`
  padding: 0.4rem 0.5rem;
  width: 5rem;
  height: 2rem;
  margin-right: 0;
`;