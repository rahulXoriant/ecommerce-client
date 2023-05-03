import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

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

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

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