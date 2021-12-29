import styled from 'styled-components';
import { Page } from 'components';
import Products from './components/Products';
import Categories from './components/Categories';
import { FC } from 'react';

const HomeTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  width: 100%;
  max-width: 362px;
`;

const HomeTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
`;

const HomeTitleAction = styled.button`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue};
  cursor: pointer;
`;

const Home: FC = () => {
  return (
    <Page>
      <HomeTitleWrapper>
        <HomeTitle>Категории товаров</HomeTitle>
        <HomeTitleAction>Настройки</HomeTitleAction>
      </HomeTitleWrapper>
      <Categories />
      <Products />
    </Page>
  );
};

export default Home;
