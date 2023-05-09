import styled from "styled-components";

export const FilterCard = styled.div`
  div.filters > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;
    align-items: center;
    gap: 20px;
    align-items: stretch;
    padding: 16px;

    @media (max-width: 480px) {
      flex-direction: ${(params) => (params.isSearchEnabled ? "column" : "row")};
    }

    > div.filter {
      display: flex;
      flex-direction: row;
      font-size: 20px;
      align-items: center;
      cursor: pointer;
    }
  }
`;
