import { ButtonHTMLAttributes, FC } from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  color?: 'gray' | 'blue' | 'white';
  fullHeight?: boolean;
  fullWidth?: boolean;
  outlined?: boolean;
}

const ButtonRoot = styled.button<Required<Omit<ButtonProps, 'customColor'>>>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: ${({ outlined }) => (outlined ? '11px 39px' : '12px 40px')};
  font-size: 0.875rem;
  border-radius: 25px;
  cursor: pointer;
  background: ${({ outlined, theme, color }) =>
    !outlined ? theme.colors[color] : theme.colors.white};
  ${({ outlined, color, theme }) => css`
    border: ${outlined ? `1px solid ${theme.colors[color]}` : 'none'};
    color: ${outlined ? theme.colors[color] : theme.colors.white};
  `}
  ${(props) =>
    props.fullHeight &&
    css`
      height: 100%;
      padding-top: 0;
      padding-bottom: 0;
    `}
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      padding-left: 0;
      padding-right: 0;
    `}
`;

const Button: FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  color = 'white',
  fullHeight = false,
  fullWidth = false,
  outlined = false,
  ...props
}) => {
  return (
    <ButtonRoot
      color={color}
      fullWidth={fullWidth}
      fullHeight={fullHeight}
      outlined={outlined}
      {...props}
    >
      {children}
    </ButtonRoot>
  );
};

export default Button;
