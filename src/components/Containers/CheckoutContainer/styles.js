import styled from "styled-components";

export const CheckoutContainer = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  margin-top: 100px;

  @media (max-width: 480px) {
    padding: 20px;
  }

  > div.no-product-cart-container {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(0, 0, 0);
    font-size: 24px;
  }

  footer {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    @media (max-width: 480px) {
      flex-direction: column-reverse;
      align-items: end;
    }

    button {
      background: rgb(241, 148, 32);
      color: #ffffff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      transition: background 0.2s;
      @media (max-width: 480px) {
        width: 100%;
      }

      &:hover {
        background: rgb(200, 120, 28);
      }
    }
  }
`;

export const CartContainer = styled.div`
  width: 100%;

  h2 {
    margin-bottom: 30px;
  }

  div.product-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    display: block;
    color: #999;
    margin-right: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
