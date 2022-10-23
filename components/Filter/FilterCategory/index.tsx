import React from 'react';

import style from './FilterCategory.module.scss';

interface FilterCategoryProps {
  children: any;
  title: string;
}

const FilterCategory: React.FC<FilterCategoryProps> = ({ children, title }) => {
  return (
    <div className={`${style.filterCategory}`}>
      <h4>{title}</h4>
      {children}
    </div>
  );
};

export default FilterCategory;
