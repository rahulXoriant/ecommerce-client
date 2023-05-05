import styled from 'styled-components';

export const CategoryList = styled.div`
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

  a {
    width: calc(33% - 11px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    text-decoration: none;
    @media (max-width: 768px) {
      width: calc(50% - 11px);
    }

    img {
      align-self: center;
      width: 100%;
      height: auto;
    }

    h5 {
      color: #333;
      margin-top: 5px;
      text-align: center;
    }

    button {
      background: rgb(241, 148, 32);
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
      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);
        svg {
          margin-right: 5px;
        }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }
  }
`;