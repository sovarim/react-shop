import { FC } from 'react';
import { css } from 'styled-components';

const Counter: FC = () => {
  return (
    <div
      css={css`
        border: 1px solid #aec2ea;
        border-radius: 35px;
        height: 2.75rem;
        width: 8.4375rem;
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1rem;
      `}
    >
      <button
        css={css`
          color: #aec2ea;
          cursor: pointer;
          font-size: 2rem;
          line-height: 0;
        `}
      >
        -
      </button>
      <span
        css={css`
          font-size: 1rem;
          font-feature-settings: 'pnum' on, 'lnum' on;
        `}
      >
        25
      </span>
      <button
        css={css`
          color: #aec2ea;
          cursor: pointer;
          font-size: 2rem;
        `}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
