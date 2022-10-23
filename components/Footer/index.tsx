import Link from 'next/link';
import React from 'react';
import Subscribe from '../Subscribe';

import style from './Footer.module.scss';

interface FooterProps {
  withSubscribeForm?: boolean;
}

const Footer: React.FC<FooterProps> = ({ withSubscribeForm = true }) => {
  return (
    <footer className={`${style.footer}`}>
      <div className="container">
        {withSubscribeForm && <Subscribe />}
        <div className={`${style.footerRow}`}>
          <nav className={`${style.footerNav}`}>
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
          <div className={`${style.footerSocial}`}>
            <a href="https://www.facebook.com/">
              <img src="/static/img/icons/fb-icon.svg" alt="Facebook" />
            </a>
            <a href="https://www.twitter.com/">
              <img src="/static/img/icons/tw-icon.svg" alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/">
              <img src="/static/img/icons/inst-icon.svg" alt="Instagram" />
            </a>
            <a href="https://www.youtube.com/">
              <img src="/static/img/icons/yt-icon.svg" alt="YouTube" />
            </a>
          </div>
        </div>
        <hr />
        <div className={`${style.footerRow}`}>
          <p className={`${style.copyright}`}>
            © 2022 Monito. All rights reserved.
          </p>
          <Link href={'/'}>
            <a className={style.logo}>
              <img src="/static/img/logo.svg" alt="Monito Logo" />
            </a>
          </Link>
          <div className={`${style.copyrightLinks}`}>
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
