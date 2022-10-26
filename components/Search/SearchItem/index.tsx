import Link from 'next/link';
import React from 'react';

import style from './SearchItem.module.scss';

interface SearchItemProps {
  SKU: number;
  image: string;
  title: string;
  description: [string, string][];
  price: number;
}

const SearchItem: React.FC<SearchItemProps> = ({
  SKU,
  image,
  title,
  description,
  price,
}) => {
  return (
    <li className={`${style.dropDownItem}`}>
      <Link href={`/dogs/${SKU}`}>
        <a className={`${style.dropDownLink}`}>
          <img src={`/static/img/catalog/dogs/${image}`} alt={title} />
          <span>
            <h4>{title}</h4>
            <ul className={`${style.description}`}>
              {description.map((item, idx) => (
                <li key={idx}>{`${item[0]}: ${item[1]}`}</li>
              ))}
            </ul>
            <p>{price} VND</p>
          </span>
        </a>
      </Link>
    </li>
  );
};

export default SearchItem;
