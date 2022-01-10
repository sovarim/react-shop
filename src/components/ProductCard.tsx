import { FC } from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';
import Swiper from './Swiper';

interface ProducCardProps {
  name: string;
  imgSrc?: string;
  minPrice?: number;
  variations?: any[];
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
  /* padding-left: 0.45rem; */
  bottom: 1.25rem;
  left: 0;
  z-index: 10;
`;

const colors = ['#2967FF', '#58CF18', '#FFA601'];

const ProductCard: FC<ProducCardProps> = ({ name, imgSrc, minPrice, variations }) => {
  return (
    <ProductCardRoot>
      <ProductCardImageRoot>
        <ProductCardImageWrapper>
          <ProductCardImage src={imgSrc} />
        </ProductCardImageWrapper>
        <ProduCardVariations>
          <Swiper>
            {variations?.map((v) => (
              <Button
                key={v.id}
                color="blue"
                css={css`
                  padding: 4px 10px;
                  font-weight: 600;
                  background: ${colors[+(Math.random() * (3 - 0) + 0).toFixed(0)]};
                `}
              >
                {v.title}
              </Button>
            ))}
          </Swiper>
        </ProduCardVariations>
      </ProductCardImageRoot>
      <ProducCardName>{name}</ProducCardName>
      <ProducCardPrice>от {minPrice} ₽</ProducCardPrice>
      <Button outlined color="blue" fullWidth>
        Добавить в корзину
      </Button>
    </ProductCardRoot>
  );
};

export default ProductCard;
