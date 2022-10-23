import React from 'react';

interface ButtonProps {
  border?: boolean;
  children: any;
  className?: string;
  white?: boolean;
}

import style from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({
  children,
  border,
  className,
  white,
}) => {
  return (
    <button
      className={`${style.button} ${white ? style.buttonWhite : ''} ${
        border ? style.button_o : ''
      }${className ? ' ' + className : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
