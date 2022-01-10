import styled from 'styled-components';
import { Button, ProductCard } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useEffect, memo } from 'react';
import { fetchProducts } from 'store/actions/ProductActions';
import { fetchProductImages } from 'store/actions/ProductImageActions';
import { fetchProductVariations } from 'store/actions/ProductVariationActions';
import { fetchProductVariationProperties } from 'store/actions/ProductVariationPropertyActions';
import { fetchProductVariationListValues } from 'store/actions/ProductVariationPropertyListValueActions';
import { fetchProductVarationPropertyValues } from 'store/actions/ProductVariationPropertyValueActions';
import { productsSelector } from 'store/selectors';
import { BASE_URL } from 'api';

const ProductsRoot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: -2.5rem;
  margin-left: -1.25rem;
  margin-bottom: 1.875rem;
`;

const FlexItem = styled.div`
  padding-left: 1.25rem;
  padding-top: 2.5rem;
  flex: 0 0 25%;
  max-width: 25%;

  ${({ theme }) => theme.breakpoints.laptop} {
    flex: 0 0 50%;
    max-width: 50%;
  }
`;

const Products = () => {
  const dispatch = useAppDispatch();
  // @ts-ignore
  const products = useAppSelector(productsSelector);

  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchProductImages());
    dispatch(fetchProductVariations());
    dispatch(fetchProductVariationProperties());
    dispatch(fetchProductVariationListValues());
    dispatch(fetchProductVarationPropertyValues());
  }, []);
  return (
    <ProductsRoot>
      <FlexContainer>
        {products.map((product) => (
          <FlexItem key={product.id}>
            <ProductCard
              name={product.name}
              imgSrc={`${BASE_URL}/${product.images?.[0]?.image_url}`}
              minPrice={product.min_price || 0}
              // variations={product.variation_values}
            />
          </FlexItem>
        ))}
      </FlexContainer>
      <Button
        color="gray"
        style={{ color: '#727280', padding: '16px 44px', fontWeight: 600, fontSize: '1rem' }}
      >
        Показать больше товаров
      </Button>
    </ProductsRoot>
  );
};

export default memo(Products);
