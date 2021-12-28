import { Button } from 'components';
import styled, { css } from 'styled-components';
import BasketImage from 'assets/images/basket-image.svg';
import BasketProductsItem from './BasketProductsItem';

const BasketProductsRoot = styled.div`
  width: 100%;
  border: 1px solid #aec2ea;
  border-radius: 20px;
`;

const BasketProductsHeader = styled.div`
  display: flex;
  padding: 1.5625rem 0;
  position: relative;
  border-bottom: 1px solid #aec2ea;
  border-radius: 20px;
`;

const BasketProductsContainer = styled.div`
  width: 100%;
  padding: 2.25rem 3.75rem;
  & > *:first-child {
    padding-top: 0;
  }
  & > * {
    padding: 1rem 0;
  }
  & > * {
    position: relative;
  }
  & > *:not(:last-child)::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 1px;
    background: #aec2ea;
    bottom: 0;
    left: 0;
  }
`;

const BasketProducts = () => {
  return (
    <BasketProductsRoot>
      <BasketProductsHeader>
        <div
          css={css`
            position: absolute;
            right: 14px;
            top: 0;
            height: 100%;
            width: 165px;
            background: url(${BasketImage});
            z-index: -1;
          `}
        />
        <p
          css={css`
            font-size: 1.25rem;
            font-weight: 600;
            margin-left: 3.75rem;
          `}
        >
          Xiaomi
        </p>
        <div
          css={css`
            padding-left: 6.875rem;
          `}
        >
          <p
            css={css`
              font-size: 1rem;
              margin-bottom: 5px;
            `}
          >
            Стоимость корзины:
          </p>
          <p
            css={css`
              font-size: 1.25rem;
              font-weight: 700;
              font-feature-settings: 'pnum' on, 'lnum' on;
            `}
          >
            1 185 000₽
          </p>
        </div>
        <Button
          color="blue"
          css={css`
            margin-left: 5.875rem;
            padding: 1rem 4.125rem;
            font-size: 1rem;
            font-weight: 600;
          `}
        >
          Оформить
        </Button>
      </BasketProductsHeader>
      <BasketProductsContainer>
        <BasketProductsItem />
        <BasketProductsItem />
        <BasketProductsItem />
        <BasketProductsItem />
        <BasketProductsItem />
      </BasketProductsContainer>
    </BasketProductsRoot>
  );
};

export default BasketProducts;
