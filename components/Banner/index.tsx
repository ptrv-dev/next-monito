import React from 'react';

interface BannerProps {
  children: any;
  background: string;
  right?: boolean;
}

import style from './Banner.module.scss';

const Banner: React.FC<BannerProps> = ({ children, background, right }) => {
  return (
    <div className="container">
      <div
        className={`${style.banner} ${right ? style.bannerRight : ''}`}
        style={{
          background: background,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Banner;
