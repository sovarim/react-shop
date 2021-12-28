import styled, { css } from 'styled-components';

const BasketProductsRoot = styled.div`
  width: 100%;
  border: 1px solid #aec2ea;
  border-radius: 20px;
`;

const BasketProductsHeader = styled.div`
  display: flex;
`;

const BasketProducts = () => {
  return (
    <BasketProductsRoot>
      <BasketProductsHeader>
        <p
          css={css`
            font-size: 1.25rem;
            font-weight: 600;
          `}
        >
          Xiaomi
        </p>
      </BasketProductsHeader>
    </BasketProductsRoot>
  );
};

export default BasketProducts;
