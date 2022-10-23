import React from 'react';

import style from './Filter.module.scss';

interface FitlerProps {
  className?: string;
  children: any;
}

const Filter: React.FC<FitlerProps> = ({ className, children }) => {
  return (
    <div className={`${style.filter} ${className ? className : ''}`}>
      <h3>Filter</h3>
      {children}
    </div>
  );
};

export default Filter;
