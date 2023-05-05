import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 100px;

  > div.no-product-container {
    width: 100%;
    height: calc(100vh - 150px);
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(255, 255, 255);
    font-size: 24px;
  }

  div.filters > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;
    align-items: center;

    > div.filter {
      display: flex;
      flex-direction: row;
      font-size: 20px;
      align-items: center;
      cursor: pointer;
    }
  }
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;

  > div.product-card {
    width: calc(33% - 11px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #fff;
    border-radius: 4px;

    @media (max-width: 768px) {
      width: calc(50% - 11px);
    }

    @media (max-width: 480px) {
      width: 100%;
    }

    > div {
      > img {
        align-self: center;
        width: 100%;
        height: auto;
      }

      > h5 {
        font-size: 16px;
        line-height: 20px;
        color: #333;
        margin-top: 5px;
      }

      > h6 {
        font-size: 12px;
        line-height: 12px;
        color: #333;
        margin-top: 5px;
        text-align: right;
      }

      > span {
        font-size: 21px;
        font-weight: bold;
        margin: 5px 0 20px;
      }

      div.cart-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 48px;

        div.cart-manupulation {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        div.cart-action-button {
          cursor: pointer;
          height: 36px;
        }

        div > input {
          width: 50px;
          height: 34px;
          text-align: center;
        }
      }

      button {
        background: rgb(241, 148, 32);
        width: 100%;
        color: #fff;
        border: 0;
        border-radius: 4px;
        overflow: hidden;
        margin-top: auto;
        display: flex;
        align-items: center;
        transition: background 0.2s;

        &:hover {
          background: rgb(200, 120, 28);
        }

        > div {
          display: flex;
          align-items: center;
          padding: 12px;
          background: rgba(0, 0, 0, 0.1);

          svg {
            margin-right: 5px;
          }
        }

        span {
          flex: 1;
          font-size: 20px;
          text-align: center;
          font-weight: bold;
        }
      }
    }
  }
`;
