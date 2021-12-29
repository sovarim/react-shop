import React, { FC, InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  endAdornment?: React.ReactElement;
  startAdornment?: React.ReactElement;
  small?: boolean;
}

interface TextFieldRootProps {
  fullWidth: boolean;
}

const TextFieldRoot = styled.div.attrs<TextFieldRootProps>((props) => ({
  fullWidth: props.fullWidth,
}))<TextFieldRootProps>`
  border: 1px solid #f0f4fb;
  border-radius: 36px;
  display: flex;
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;

const TextFieldInputWrapper = styled.div<{ small?: boolean }>`
  padding: ${(props) => (!props.small ? '1rem 0 1rem 1.25rem' : '0.625rem 0.875rem')};
  flex: 1;
`;

const TextFieldInput = styled.input<{ small?: boolean }>`
  border: none;
  font-size: ${(props) => (!props.small ? '1rem' : '0.875rem')};
  width: 100%;
`;

const TextFieldAdornmentWrapper = styled.div`
  padding: 0.25rem 0.25rem 0.25rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextField: FC<TextFieldProps> = ({
  fullWidth = false,
  startAdornment,
  endAdornment,
  small,
  className,
  ...props
}) => {
  return (
    <TextFieldRoot fullWidth={fullWidth} className={className}>
      {startAdornment && (
        <TextFieldAdornmentWrapper
          css={css`
            padding: 0 0 0 0.625rem;
          `}
        >
          {startAdornment}
        </TextFieldAdornmentWrapper>
      )}
      <TextFieldInputWrapper small={small}>
        <TextFieldInput small={small} {...props} />
      </TextFieldInputWrapper>
      {endAdornment && <TextFieldAdornmentWrapper>{endAdornment}</TextFieldAdornmentWrapper>}
    </TextFieldRoot>
  );
};

export default TextField;
