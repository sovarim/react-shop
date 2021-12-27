import styled from 'styled-components';
import Products from './components/Products';

const HomeRoot = styled.div`
  padding-top: 1.375rem;
  padding-bottom: 3.4375rem;
`;

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
  font-weight: 700px;
`;

const HomeTitleAction = styled.button`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue};
  cursor: pointer;
`;

const Home = () => {
  return (
    <HomeRoot>
      <HomeTitleWrapper>
        <HomeTitle>Категории товаров</HomeTitle>
        <HomeTitleAction>Настройки</HomeTitleAction>
      </HomeTitleWrapper>
      <Products />
    </HomeRoot>
  );
};

export default Home;
