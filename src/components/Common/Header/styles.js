import { Link } from "react-router-dom";
import styled from "styled-components";

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
      color: #fff;
      text-decoration: none;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background: #131522;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  height: 100vh;
  min-width: 300px;
  text-align: left;
  padding: 4rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  box-shadow: -4px 0px 10px 0px rgba(0, 0, 0, 0.3);

  @media (max-width: 480px) {
    width: 100%;
    padding: 6rem;
  }

  a {
    font-size: 1rem;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.05em;
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #ffffff80;
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
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
