import { FC, InputHTMLAttributes, FocusEvent } from 'react';
import { css } from 'styled-components';

interface DateTimePickerProps extends InputHTMLAttributes<HTMLInputElement> {
  type: 'date' | 'time';
}

const DateTimePicker: FC<DateTimePickerProps> = ({ type, ...props }) => {
  let isChanged = false;
  const onFocus = (e: FocusEvent<HTMLInputElement>) => {
    if (isChanged) return;
    e.target.type = type;
    isChanged = true;
  };
  return (
    <input
      css={css`
        border: none;
        font-size: 0.875rem;
      `}
      type="text"
      onFocus={onFocus}
      {...props}
    />
  );
};

export default DateTimePicker;
