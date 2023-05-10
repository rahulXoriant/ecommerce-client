import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  position: relative;
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
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 64px;

  @media (max-width: 480px) {
    margin-top: 108px;
  }
`;
