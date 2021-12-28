import { Counter } from 'components';
import { DeleteIcon } from 'icons';
import { css } from 'styled-components';

const BasketProductsItem = () => {
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
      `}
    >
      <div
        css={css`
          flex: 1;
          display: flex;

          & > *:not(:first-child) {
            margin-left: 1.25rem;
          }
        `}
      >
        <img
          css={css`
            width: 57px;
            height: 57px;
            object-fit: contain;
          `}
          src="https://avatars.mds.yandex.net/get-mpic/4936002/img_id4217747115231623937.jpeg/orig"
        />
        <p
          css={css`
            font-size: 1rem;
            width: 18.125rem;
          `}
        >
          Смартфон Xiaomi Redmi Note 8 Pro 6/128GB, белый
        </p>
        <Counter />
        <p
          css={css`
            font-weight: 600;
            font-size: 16px;
            padding-top: 0.75rem;
          `}
        >
          от 350 000 ₽
        </p>
      </div>
      <button
        css={css`
          cursor: pointer;
          height: max-content;
          margin-top: 0.75rem;
        `}
      >
        <DeleteIcon />
      </button>
    </div>
  );
};

export default BasketProductsItem;
