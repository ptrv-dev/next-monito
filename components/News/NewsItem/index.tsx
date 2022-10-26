import Link from 'next/link';
import React from 'react';

import style from './NewsItem.module.scss';

export interface INewsItem {
  _id: number;
  image: string;
  tags: string[];
  title: string;
  text: string;
}

const NewsItem: React.FC<INewsItem> = ({ _id, image, title, tags, text }) => {
  return (
    <Link href={'/news/' + _id}>
      <div className={`${style.newsItem}`}>
        <img src={`/static/img/news/${image}`} alt={title} />
        <div className={`${style.newsItemBody}`}>
          {tags && (
            <div className={`${style.tags}`}>
              {tags.map((tag, idx) => (
                <span key={idx}>{tag}</span>
              ))}
            </div>
          )}
          <h4>{title}</h4>
          <p>
            {text.substring(0, 160)}
            {text.length > 160 ? '...' : ''}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NewsItem;
