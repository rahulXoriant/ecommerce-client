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
`;
