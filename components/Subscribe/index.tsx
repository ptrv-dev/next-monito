import React from 'react';

import style from './Subscribe.module.scss';

const Subscribe: React.FC = () => {
  return (
    <div className={`${style.subscribe}`}>
      <h2>Register now so you don&apos;t miss our programs</h2>
      <form>
        <input type="text" placeholder="Enter your Email" />
        <button type="submit">Subscribe now</button>
      </form>
    </div>
  );
};

export default Subscribe;
