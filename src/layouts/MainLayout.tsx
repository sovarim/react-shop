import { FC } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router';
import { Header } from 'components';

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const Container = styled.div`
  flex: 1;
  width: 100%;
  max-width: 1366px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 3.0625rem;
  overflow: hidden;
  flex-grow: 1;
`;

const Content = styled.div`
  width: calc(100% - 350px);
  height: 100%;
`;

const Sidebar = styled.div`
  width: 350px;
  height: 100%;
  border: 1px solid #f0f4fb;
  border-bottom: none;
  position: absolute;
  right: 0;
  top: 0;
  padding: 0 1.5rem 0 1rem;

  & > * {
    margin-top: 20px;
  }
`;

const Footer = styled.footer`
  height: 250px;
  background: #f8f8f8;
  width: 100%;
  margin: 0 auto;
`;

const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 168px;
  border-radius: 20px;
  background: url(https://pbs.twimg.com/profile_banners/259755448/1554305901/1500x500) center/cover
    no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
  overflow: hidden;
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.2;
  }
`;

const MainLayout: FC = () => {
  return (
    <Root>
      <Container>
        <Wrapper>
          <Content>
            <Header />
            <Outlet />
          </Content>
          <Sidebar>
            <Banner>
              Новая <br /> коллекция
            </Banner>
            <Banner>
              Новая <br /> коллекция
            </Banner>
            <Banner>
              Новая <br /> коллекция
            </Banner>
          </Sidebar>
        </Wrapper>
        <Footer />
      </Container>
    </Root>
  );
};

export default MainLayout;
