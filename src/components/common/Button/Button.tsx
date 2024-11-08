import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import './Button.css';

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type TypeButtonProps = DefaultButtonPropsType & {
  variant?: 'primary' | 'secondary';
};

export const Button: React.FC<TypeButtonProps> = ({
  className,
  disabled,
  variant,
  onClick,
  ...restProps
}) => {
  const finalClassName = `button ${disabled ? 'disabled' : ''} ${className ? className : ''} ${
    variant ? variant : ''
  }
  `.trim();

  return (
    <button disabled={disabled} className={finalClassName} onClick={onClick} {...restProps}>
      {restProps.children}
    </button>
  );
};
