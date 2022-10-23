import React from 'react';

import style from './Sellers.module.scss';

interface SellersProps {
  count?: number;
}

const Sellers: React.FC<SellersProps> = ({ count = 7 }) => {
  return (
    <div className={`${style.sellers}`}>
      {[...Array(count)].map((_, idx) => (
        <div key={idx} className={`${style.sellersItem}`}>
          <img src={`/static/img/sellers/${idx + 1}.png`} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Sellers;
