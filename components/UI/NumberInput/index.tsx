import React from 'react';

import style from './Number.module.scss';

interface NumberInputProps {
  placeholder?: string;
}

const NumberInput: React.FC<NumberInputProps> = ({ placeholder }) => {
  return (
    <input
      type="number"
      className={`${style.number}`}
      placeholder={placeholder}
    />
  );
};

export default NumberInput;
