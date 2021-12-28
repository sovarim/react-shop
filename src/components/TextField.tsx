import React, { FC, InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  endAdornment?: React.ReactElement;
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

const TextFieldInputWrapper = styled.div`
  padding: 16px 0 16px 20px;
  flex: 1;
`;

const TextFieldInput = styled.input`
  border: none;
  font-size: 1rem;
  width: 100%;
`;

const TextFieldAdornmentWrapper = styled.div`
  padding: 0.25rem 0.25rem 0.25rem 0;
`;

const TextField: FC<TextFieldProps> = ({ fullWidth = false, endAdornment, ...props }) => {
  return (
    <TextFieldRoot fullWidth={fullWidth}>
      <TextFieldInputWrapper>
        <TextFieldInput {...props} />
      </TextFieldInputWrapper>
      {endAdornment && <TextFieldAdornmentWrapper>{endAdornment}</TextFieldAdornmentWrapper>}
    </TextFieldRoot>
  );
};

export default TextField;
