import styled from 'styled-components';
import { Button, Swiper } from 'components';

const CategoriesRoot = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  z-index: 10;
  overflow: hidden;
`;

const Categories = () => {
  return (
    <CategoriesRoot>
      <Swiper>
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
          Мишка
        </Button>
        <Button
          color="blue"
          style={{
            padding: '4px 10px',
            fontWeight: 600,
          }}
        >
          Подарок
        </Button>
        <Button
          style={{
            padding: '4px 10px',
            fontWeight: 600,
            background: '#58CF18',
          }}
        >
          Смартфоны
        </Button>
        <Button
          style={{
            padding: '4px 10px',
            fontWeight: 600,
            background: '#FFA601',
          }}
        >
          Процессоры
        </Button>
      </Swiper>
    </CategoriesRoot>
  );
};

export default Categories;
