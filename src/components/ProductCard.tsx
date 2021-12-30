import { FC } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Swiper from './Swiper';

interface ProducCardProps {
  name: string;
}

const ProductCardRoot = styled.div`
  width: 100%;
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

const ProduCardVariations = styled.div`
  width: 100%;
  position: absolute;
  padding-left: 0.45rem;
  bottom: 1.25rem;
  left: 0;
  z-index: 10;
`;

const ProductCard: FC<ProducCardProps> = ({ name }) => {
  return (
    <ProductCardRoot>
      <ProductCardImageRoot>
        <ProductCardImageWrapper>
          <ProductCardImage src="https://www.amd.com/system/files/2019-11/238593-ryzen-9-pib-left-facing-1260x709_0.png" />
        </ProductCardImageWrapper>
        <ProduCardVariations>
          <Swiper>
            <Button
              color="blue"
              style={{
                padding: '4px 10px',
                fontWeight: 600,
              }}
            >
              Игрушка
            </Button>
            <Button
              style={{
                padding: '4px 10px',
                fontWeight: 600,
                background: '#58CF18',
              }}
            >
              Мартышка
            </Button>
            <Button
              style={{
                padding: '4px 10px',
                fontWeight: 600,
                background: '#FFA601',
              }}
            >
              Мышка
            </Button>
          </Swiper>
        </ProduCardVariations>
      </ProductCardImageRoot>
      <ProducCardName>{name}</ProducCardName>
      <ProducCardPrice>от 350 000 ₽</ProducCardPrice>
      <Button outlined color="blue" fullWidth>
        Добавить в корзину
      </Button>
    </ProductCardRoot>
  );
};

export default ProductCard;
