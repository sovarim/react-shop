import styled from 'styled-components';
import { Button, ProductCard } from 'components';

const ProductsRoot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductsFlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: -2.5rem;
  margin-left: -1.25rem;
  margin-bottom: 1.875rem;
  & > * {
    margin-left: 1.25rem;
    margin-top: 2.5rem;
  }
`;

const Products = () => {
  return (
    <ProductsRoot>
      <ProductsFlexContainer>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductsFlexContainer>
      <Button
        color="gray"
        style={{ color: '#727280', padding: '16px 44px', fontWeight: 600, fontSize: '1rem' }}
      >
        Показать больше товаров
      </Button>
    </ProductsRoot>
  );
};

export default Products;
