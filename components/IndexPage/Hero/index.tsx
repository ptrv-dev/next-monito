import React from 'react';
import Button from '../../UI/Button';

import style from './Hero.module.scss';

const Hero: React.FC = () => {
  return (
    <div className={`${style.hero}`}>
      <div className={`${style.heroContainer} container`}>
        <div className={`${style.heroBody}`}>
          <h1>One more friend</h1>
          <h2>Thousands more fun!</h2>
          <p>
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          <div className={`${style.row}`}>
            <Button className={`${style.heroButton}`} border>
              View Intro{' '}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 9V15L15 12L10 9Z" fill="#003459" />
                <path
                  d="M10 9L10.3859 8.35688C10.1542 8.21786 9.86561 8.21422 9.63048 8.34735C9.39534 8.48048 9.25 8.7298 9.25 9H10ZM10 15H9.25C9.25 15.2702 9.39534 15.5195 9.63048 15.6526C9.86561 15.7858 10.1542 15.7821 10.3859 15.6431L10 15ZM15 12L15.3859 12.6431C15.6118 12.5076 15.75 12.2634 15.75 12C15.75 11.7366 15.6118 11.4924 15.3859 11.3569L15 12ZM12 20.25C7.44365 20.25 3.75 16.5563 3.75 12H2.25C2.25 17.3848 6.61522 21.75 12 21.75V20.25ZM3.75 12C3.75 7.44365 7.44365 3.75 12 3.75V2.25C6.61522 2.25 2.25 6.61522 2.25 12H3.75ZM12 3.75C16.5563 3.75 20.25 7.44365 20.25 12H21.75C21.75 6.61522 17.3848 2.25 12 2.25V3.75ZM20.25 12C20.25 16.5563 16.5563 20.25 12 20.25V21.75C17.3848 21.75 21.75 17.3848 21.75 12H20.25ZM9.25 9V15H10.75V9H9.25ZM10.3859 15.6431L15.3859 12.6431L14.6141 11.3569L9.61413 14.3569L10.3859 15.6431ZM15.3859 11.3569L10.3859 8.35688L9.61413 9.64312L14.6141 12.6431L15.3859 11.3569Z"
                  fill="#003459"
                />
              </svg>
            </Button>
            <Button className={`${style.heroButton}`}>Explore Now</Button>
          </div>
        </div>
        <img
          src="/static/img/hero/hero-image.png"
          alt="Hero"
          className={`${style.heroImage}`}
        />
      </div>
    </div>
  );
};

export default Hero;
