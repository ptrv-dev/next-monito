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
  category: 'dogs' | 'products';
  present?: string;
}

const CatalogItem: React.FC<CatalogItemProps> = ({
  image,
  title,
  description,
  price,
  SKU,
  category,
  present,
}) => {
  return (
    <Link href={`/${category}/` + SKU}>
      <a className={`${style.catalogItem}`}>
        <img src={`/static/img/catalog/${category}/${image}`} alt={title} />
        <div className={`${style.body}`}>
          <h4>{title}</h4>
          {description && (
            <ul className={`${style.description}`}>
              {description.map(
                (item, index) =>
                  item[1] && (
                    <li key={index}>
                      {item[0]}: <b>{item[1]}</b>
                    </li>
                  )
              )}
            </ul>
          )}
          <p className={`${style.price}`}>
            {price.toLocaleString('ua-UA', {
              style: 'currency',
              currency: 'EUR',
            })}
          </p>
          {present && (
            <div className={`${style.present}`}>
              <img src="/static/img/icons/present.svg" alt="" />
              <span>{present}</span>
            </div>
          )}
        </div>
      </a>
    </Link>
  );
};

export default CatalogItem;
