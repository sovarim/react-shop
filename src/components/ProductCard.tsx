import { FC } from 'react';
import styled from 'styled-components';
import Button from './Button';

const ProductCardRoot = styled.div`
  width: 214px;
`;

const ProductCardImageRoot = styled.div`
  width: 100%;
  position: relative;
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 0;
    position: relative;
    padding-top: 64.5%;
  }
`;

const ProductCardImageWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
`;

const ProductCardImage = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: center;
`;

const ProducCardName = styled.p`
  width: 100%;
  font-size: 0.875rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #2d2d2f;
`;

const ProducCardPrice = styled.p`
  color: #2967ff;
  font-weight: 600;
  font-size: 1.25rem;
  margin-top: 5px;
  margin-bottom: 12px;
  font-feature-settings: 'pnum' on, 'lnum' on;
`;

const ProductCard: FC = () => {
  return (
    <ProductCardRoot>
      <ProductCardImageRoot>
        <ProductCardImageWrapper>
          <ProductCardImage src="https://www.amd.com/system/files/2019-11/238593-ryzen-9-pib-left-facing-1260x709_0.png" />
        </ProductCardImageWrapper>
      </ProductCardImageRoot>
      <ProducCardName>Длинное название товара в одну строчку п...</ProducCardName>
      <ProducCardPrice>от 350 000 ₽</ProducCardPrice>
      <Button outlined color="blue">
        Добавить в корзину
      </Button>
    </ProductCardRoot>
  );
};

export default ProductCard;
