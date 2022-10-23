import React from 'react';

import style from './News.module.scss';

interface NewsProps {
  children: any;
  columnsCount?: number;
  gap?: number;
}

const News: React.FC<NewsProps> = ({
  children,
  columnsCount = 3,
  gap = 30,
}) => {
  return (
    <div
      className={`${style.news}`}
      style={{ gridTemplateColumns: `repeat(${columnsCount}, 1fr)`, gap: gap }}
    >
      {children}
    </div>
  );
};

export default News;
