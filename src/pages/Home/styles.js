import styled from 'styled-components';

export const CategoryList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;

  & > a {
    width: calc(33% - 11px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    text-decoration: none;

    img {
      align-self: center;
      max-width: 200px;
    }

    h5 {
      color: #333;
      margin-top: 5px;
      text-align: center;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }
  }
`;