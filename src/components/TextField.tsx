import { FC, InputHTMLAttributes } from 'react';
import SearchIcon from 'icons/SearchIcon';
import styled, { css } from 'styled-components';
import Button from './Button';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
}

interface TextFieldRootProps {
  fullWidth: boolean;
}

const TextFieldRoot = styled.div.attrs<TextFieldRootProps>((props) => ({
  fullWidth: props.fullWidth,
}))<TextFieldRootProps>`
  border: 1px solid #f0f4fb;
  border-radius: 2.25rem;
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

const TextFieldButtonWrapper = styled.div`
  padding: 0.25rem 0.25rem 0.25rem 0;
  height: 100%;
`;

const TextField: FC<TextFieldProps> = ({ fullWidth = false, ...props }) => {
  return (
    <TextFieldRoot fullWidth={fullWidth}>
      <TextFieldInputWrapper>
        <TextFieldInput {...props} />
      </TextFieldInputWrapper>
      <TextFieldButtonWrapper>
        <Button color="gray" fullHeight>
          <SearchIcon />
        </Button>
      </TextFieldButtonWrapper>
    </TextFieldRoot>
  );
};

export default TextField;
