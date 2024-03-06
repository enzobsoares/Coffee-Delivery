import styled from "styled-components";
import { LayoutContainer } from "../../layouts/DefaultLayout/styles";

export const CartContainer = styled(LayoutContainer)`
  display: flex;
  justify-content: space-between;
  width: 100%;

  aside {
    margin-left: 2rem;
  }

  h3.infoTitle {
    text-align: left;
    margin: 1rem 0;
  }

  @media (max-width: 1190px) {
    flex-wrap: wrap;
    justify-content: center;

    main,
    aside {
      width: 100%;
    }

    padding-bottom: 2rem;
  }

  @media (max-width: 1189px) {
    aside {
      margin-left: 0;
    }
  }
`;

export const AddressHeader = styled.div`
  display: flex;
  gap: 0.5rem;

  h3 {
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  p {
    margin: 0.25rem 0 2rem 0;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const PaymentHeader = styled(AddressHeader)``;

export const AddressInfo = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme["base-card"]};
  width: 40rem;
  border-radius: 6px;
  margin: 0.75rem 0;

  @media (max-width: 1190px) {
    width: 100%;
  }
`;

export const PaymentInfo = styled(AddressInfo)`
  @media (max-width: 1190px) {
    width: 100%;
  }
`;

export const PaymentOptions = styled.div`
  display: flex;
  gap: 0.75rem;

  button {
    padding: 1rem;
    width: 11.12rem;
    background-color: ${(props) => props.theme["base-button"]};
    border: 0;
    font-size: 0.75rem;
    display: flex;
    gap: 0.75rem;
    align-items: center;
    border-radius: 6px;
    cursor: pointer;

    &:focus {
      border: 1px solid ${(props) => props.theme["purple"]};
      background-color: ${(props) => props.theme["purple-light"]};
    }
  }

  @media (max-width: 1190px) {
    justify-content: center;
  }

  @media (max-width: 670px) {
    flex-direction: column;
    align-items: center;

    button {
      width: 100%;
      justify-content: center;
    }
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    padding: 0.75rem;
    background-color: ${(props) => props.theme["base-input"]};
    border: 0;
    width: 34%;
    border: 1px solid #e6e5e5;
    border-radius: 4px;
  }

  div {
    display: flex;
    gap: 1rem;
  }

  .inputRua {
    width: 100%;
  }

  .inputComplemento {
    width: 65%;
  }

  .inputCidade {
    width: 50%;
  }

  .inputUF {
    width: 12%;
  }
`;

export const OrderValue = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme["base-card"]};
  width: 28rem;
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div.values {
    div {
      display: flex;
      justify-content: space-between;
      margin-top: 0.75rem;

      p {
        font-size: 0.875rem;
      }

      span {
        font-size: 1rem;
      }

      &:last-child {
        p,
        span {
          font-size: 1.25rem;
          font-weight: bold;
        }
      }
    }
  }

  input {
    border: 0;
    padding: 0.75rem 0;
    background-color: ${(props) => props.theme["yellow"]};
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 6px;
    margin-top: 1.5rem;
  }

  @media (max-width: 1190px) {
    width: 100%;
  }
`;

export const Coffee = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
  padding: 1rem 0 2rem 0;

  &:first-child {
    padding: 0 0 2rem 0;
  }

  span {
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const IsNotItemInCart = styled.h2`
  height: calc(100vh - 6.75rem);
  display: flex;
  align-items: center;
  justify-content: center;
`
