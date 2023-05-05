import styled from 'styled-components';

export const Container = styled.div`
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
    margin-top: 30px;
    justify-content: space-between;
    align-items: center;

    button {
      background: rgb(241, 148, 32);
      color: #ffffff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      transition: background 0.2s;

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

  img {
    height: 164px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 14px;
    font-weight: medium;
  }

  div.product-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    div.product {
      width: 100%;
      display: flex;
      justify-content: space-between;

      div.product-detail {
        display: flex;
        flex-direction: row;
        align-items: start;
        justify-content: start;
        width: 100%;
        gap: 10px;

        div.product-info {
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: start;
          gap: 14px;

          div.product-name {
            padding: 0 6px;

            h4 {
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
          }
        }

        div.product-actions {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        div.product-subtotal-small-device {
          display: none;

          @media (max-width: 480px) {
            display: block;
          }
        }
      }

      div.product-subtotal-large-device {
        display: block;

        @media (max-width: 480px) {
          display: none;
        }
      }
    }

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
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
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
