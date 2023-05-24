import styled from "styled-components";

export const CheckoutProductCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid #888888;

  div.product-detail {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: start;
    width: 100%;
    gap: 10px;

    img {
      height: 164px;

      @media (max-width: 480px) {
        height: 72px;
      }
    }

    div.product-info {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: start;
      gap: 14px;

      @media (max-width: 480px) {
        align-items: end;
      }

      div.product-name {
        padding: 0 6px;

        h4 {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
    }

    div.product-actions {
      display: flex;
      align-items: center;
      justify-content: center;

      input {
        border: 1px solid #ddd;
        border-radius: 4px;
        color: #666;
        padding: 6px;
        width: 50px;
      }
    }

    div.product-subtotal-small-device {
      display: none;

      @media (max-width: 480px) {
        display: block;
      }
    }
  }

  div.product-subtotal-large-device {
    display: block;

    @media (max-width: 480px) {
      display: none;
    }
  }
`;
