import styled from 'styled-components';
import { TextField, BasketButton, Avatar, Button } from 'components';
import { GeoIcon, SearchIcon } from 'icons';
import { Link } from 'react-router-dom';

const HeaderRoot = styled.header`
  width: 100%;
  display: flex;
  height: 82px;
  align-items: center;
  background: #fff;
`;

const HeaderTitle = styled(Link)`
  font-size: 2.3125rem;
  color: inherit;
`;

const HeaderGeo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: 1.875rem;
  overflow: hidden;
`;

const HeaderGeoText = styled.p`
  width: 100%;
  font-size: 0.875rem;
  margin-left: 0.5rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const HeaderLeftBox = styled.div`
  flex: 0 0 34%;
  max-width: 34%;
  display: flex;
  padding-right: 1.25rem;
`;

const HeaderRightBox = styled.div`
  flex: 1 1 66%;
  max-width: 66%;
  display: flex;
  justify-content: right;
  & > *:not(:first-child) {
    margin-left: 1.25rem;
  }
`;

const HeaderSearchWrapper = styled.div`
  max-width: 468px;
  width: 100%;
`;

const Header = () => {
  return (
    <HeaderRoot>
      <HeaderLeftBox>
        <HeaderTitle to="/">React</HeaderTitle>
        <HeaderGeo>
          <GeoIcon />
          <HeaderGeoText>Александровск-Саsdsdsd</HeaderGeoText>
        </HeaderGeo>
      </HeaderLeftBox>
      <HeaderRightBox>
        <HeaderSearchWrapper>
          <TextField
            fullWidth
            placeholder="Поиск бренда, товара, категории..."
            endAdornment={
              <Button color="gray" fullHeight>
                <SearchIcon />
              </Button>
            }
          />
        </HeaderSearchWrapper>
        <BasketButton to="/basket" />
        <Avatar src="https://vjoy.cc/wp-content/uploads/2019/06/1-14.jpg" />
      </HeaderRightBox>
    </HeaderRoot>
  );
};

export default Header;
