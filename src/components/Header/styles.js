import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  position: fixed;
  background: #131522;
  width: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  z-index: 10;

  > div.link-container {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: start;

    > a.link {
      display: block;
      color: #fff;
      text-decoration: none;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;