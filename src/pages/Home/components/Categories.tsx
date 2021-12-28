import { Button } from 'components';
import styled from 'styled-components';

const CategoriesRoot = styled.div`
  width: 100%;
  margin-bottom: 20px;
  & > * {
    margin-right: 6px;
  }
`;

const Categories = () => {
  return (
    <CategoriesRoot>
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
    </CategoriesRoot>
  );
};

export default Categories;
