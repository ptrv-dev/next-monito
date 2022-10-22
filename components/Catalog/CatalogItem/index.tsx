import Link from 'next/link';
import React from 'react';

import style from './CatalogItem.module.scss';

type DescriptionItem = Array<string>;

interface CatalogItemProps {
  image: string;
  title: string;
  description?: DescriptionItem[];
  price: number;
  SKU: number;
}

const CatalogItem: React.FC<CatalogItemProps> = ({
  image,
  title,
  description,
  price,
  SKU,
}) => {
  return (
    <Link href={'/dogs/' + SKU}>
      <div className={`${style.catalogItem}`}>
        <img src={'/static/img/catalog/dogs/' + image} alt={title} />
        <div className={`${style.body}`}>
          <h4>{title}</h4>
          {description && (
            <ul className={`${style.description}`}>
              {description.map((item) => (
                <li>
                  {item[0]}: <b>{item[1]}</b>
                </li>
              ))}
            </ul>
          )}
          <p className={`${style.price}`}>{price} VND</p>
        </div>
      </div>
    </Link>
  );
};

export default CatalogItem;
