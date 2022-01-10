import styled, { css } from 'styled-components';
import { Button, Swiper } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useEffect, memo } from 'react';
import { fetchCategories } from 'store/actions/CategoryActions';
import { categoriesSelector } from 'store/selectors';

const CategoriesRoot = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  z-index: 10;
  overflow: hidden;
`;

const colors = ['#2967FF', '#58CF18', '#FFA601'];

const Categories = () => {
  const dispatch = useAppDispatch();

  // @ts-ignore
  const categories = useAppSelector((state) => categoriesSelector(state));

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <CategoriesRoot>
      <Swiper>
        {categories.map((category) => (
          <Button
            key={category.id}
            color="blue"
            css={css`
              padding: 4px 10px;
              font-weight: 600;
              background: ${colors[+(Math.random() * (3 - 0) + 0).toFixed(0)]};
              white-space: nowrap;
            `}
          >
            {category.name}
          </Button>
        ))}
      </Swiper>
    </CategoriesRoot>
  );
};

export default memo(Categories);
