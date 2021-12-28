import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BasketIcon } from 'icons';

interface BasketProps {
  count?: number;
  to?: string;
}

const BasketRoot = styled(Link)`
  position: relative;
  width: 50px;
  height: 50px;
  border: 1px solid #727280;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-shrink: 0;
`;

const BasketCount = styled.span`
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  right: 0;
  top: 0;
  width: 31px;
  height: 31px;
  background: #fff;
  border-radius: 50%;
  transform: translate(30%, -30%);
  color: #2967ff;
  font-weight: 600;
  font-feature-settings: 'pnum' on, 'lnum' on;
  font-size: 0.875rem;
`;

const BasketButton: FC<BasketProps> = ({ count = 0, to = '' }) => {
  return (
    <BasketRoot to={to}>
      <BasketIcon />
      <BasketCount>{count}</BasketCount>
    </BasketRoot>
  );
};

export default BasketButton;
