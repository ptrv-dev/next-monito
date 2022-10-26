import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  border?: boolean;
  children: any;
  className?: string;
  white?: boolean;
  href?: string;
}

import style from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({
  children,
  border,
  className,
  white,
  href,
}) => {
  if (href)
    return (
      <Link href={href}>
        <a
          className={`${style.button} ${white ? style.buttonWhite : ''} ${
            border ? style.button_o : ''
          }${className ? ' ' + className : ''}`}
        >
          {children}
        </a>
      </Link>
    );
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
