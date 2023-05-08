import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 100px;

  > div.no-category-container {
    width: 100%;
    height: calc(100vh - 150px);
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(255, 255, 255);
    font-size: 24px;
  }
`;