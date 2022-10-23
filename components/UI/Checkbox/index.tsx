import React from 'react';

import style from './Checkbox.module.scss';

interface CheckboxProps {
  id: string;
  children: any;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, children }) => {
  return (
    <div className={`${style.checkbox}`}>
      <input type="checkbox" id={id} />
      <label htmlFor={id}>{children}</label>
    </div>
  );
};

export default Checkbox;
