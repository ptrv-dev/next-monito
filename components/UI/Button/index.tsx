import React from 'react';

interface ButtonProps {
  border?: boolean;
  children: any;
  className?: string;
}

import style from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({ children, border, className }) => {
  return (
    <button
      className={`${style.button} ${border ? style.button_o : ''}${
        className ? ' ' + className : ''
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
