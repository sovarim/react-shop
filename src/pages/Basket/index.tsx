import { FC } from 'react';
import styled from 'styled-components';
import { Page } from 'components';
import BasketProducts from './components/BasketProducts';

const BasketTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  width: 100%;
  max-width: 250px;
`;

const BasketTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
`;

const BasketTitleAction = styled.button`
  font-size: 1rem;
  font-weight: 600;
  color: #ff2d87;
  cursor: pointer;
`;

const Basket: FC = () => {
  return (
    <Page>
      <BasketTitleWrapper>
        <BasketTitle>Корзина</BasketTitle>
        <BasketTitleAction>Очистить корзину</BasketTitleAction>
      </BasketTitleWrapper>
      <BasketProducts />
    </Page>
  );
};

export default Basket;
