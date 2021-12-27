import styled from 'styled-components';
import { ProductCard } from 'components';

const ProductsRoot = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: -2.5rem;
  margin-left: -1.25rem;
  & > * {
    margin-left: 1.25rem;
    margin-top: 2.5rem;
  }
`;

const Products = () => {
  return (
    <ProductsRoot>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </ProductsRoot>
  );
};

export default Products;
