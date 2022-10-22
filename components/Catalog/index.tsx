import React from 'react';

import style from './Catalog.module.scss';

interface CatalogProps {
  children: any;
  columnsCount?: number;
  gap?: number;
}

const Catalog: React.FC<CatalogProps> = ({
  children,
  columnsCount = 4,
  gap = 20,
}) => {
  return (
    <div
      className={`${style.catalog}`}
      style={{ gridTemplateColumns: `repeat(${columnsCount}, 1fr)`, gap: gap }}
    >
      {children}
    </div>
  );
};

export default Catalog;
