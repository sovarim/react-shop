import styled from 'styled-components';

const BasketRoot = styled.div`
  padding-top: 1.375rem;
  padding-bottom: 3.4375rem;
`;

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

const Basket = () => {
  return (
    <BasketRoot>
      <BasketTitleWrapper>
        <BasketTitle>Корзина</BasketTitle>
        <BasketTitleAction>Очистить корзину</BasketTitleAction>
      </BasketTitleWrapper>
    </BasketRoot>
  );
};

export default Basket;
