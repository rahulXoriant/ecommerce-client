import styled from "styled-components";

export const FilterCard = styled.div`
  position: fixed;
  width: calc(100% - 40px);
  max-width: 977px;
  margin: 0 auto;
  min-width: 300px;
  top: 82px;

  > div.filters {
    max-width: calc(100vw - 40px);

    > div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-size: 24px;
      align-items: center;
      gap: 20px;
      align-items: stretch;
      padding: 16px;
  
      @media (max-width: 480px) {
        flex-direction: ${params => (params.isSearchEnabled ? "column" : "row")};
      }
  
      > .filter {
        display: flex;
        flex-direction: row;
        font-size: 20px;
        align-items: center;
        cursor: pointer;
        margin: 0;
      }
    }
  }
`;
