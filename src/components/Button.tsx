import { FC } from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps extends ButtonRootProps {
  icon?: React.ReactElement;
}

interface ButtonRootProps {
  large?: boolean;
  color?: 'gray' | 'blue' | 'white';
  fullHeight?: boolean;
  fullWidth?: boolean;
  outlined?: boolean;
}

const ButtonRoot = styled.button<Required<ButtonRootProps>>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: ${({ outlined }) => (!outlined ? '12px 40px' : '11px 39px')};
  font-size: ${(props) => (props.large ? '1rem' : '0.875rem')};
  border-radius: 2.5rem;
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
    `}
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;

const Button: FC<ButtonProps> = ({
  large = false,
  children,
  color = 'white',
  fullHeight = false,
  fullWidth = false,
  outlined = false,
}) => {
  return (
    <ButtonRoot
      large={large}
      color={color}
      fullWidth={fullWidth}
      fullHeight={fullHeight}
      outlined={outlined}
    >
      {children}
    </ButtonRoot>
  );
};

export default Button;
