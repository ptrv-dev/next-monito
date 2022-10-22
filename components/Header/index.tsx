import Link from 'next/link';
import React from 'react';
import Search from '../Search';
import Button from '../UI/Button';

import style from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <div className={`${style.headerContainer} container`}>
        <div className={style.headerColumn}>
          <Link href={'/'}>
            <a className={style.headerLogo}>
              <img src="/static/img/logo.svg" alt="Monito Logo" />
            </a>
          </Link>
          <nav className={style.headerNav}>
            <ul>
              <li>
                <Link href={'/'}>
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <a>Category</a>
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={style.headerColumn}>
          <Search />
          <Button className={`${style.headerButton}`}>
            Join the community
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
