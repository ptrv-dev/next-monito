import React from 'react';

import style from './Slider.module.scss';

interface SliderProps {
  images: string[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const onClickPrevButton = () => {
    if (currentSlide > 0) setCurrentSlide((prev) => prev - 1);
  };
  const onClickNextButton = () => {
    if (currentSlide < images.length - 1) setCurrentSlide((prev) => prev + 1);
  };

  const imagesRowRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className={`${style.slider}`}>
      <div className={`${style.rootImage}`}>
        {images.length > 1 && (
          <button onClick={onClickPrevButton}>
            <svg
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.10609 15.5607C7.69187 16.1464 8.64162 16.1464 9.22741 15.5607C9.81319 14.9749 9.81319 14.0251 9.22741 13.4393L7.10609 15.5607ZM1.66675 8L0.606088 6.93934C0.0203014 7.52513 0.0203014 8.47487 0.606088 9.06066L1.66675 8ZM9.22741 2.56066C9.81319 1.97487 9.81319 1.02513 9.22741 0.43934C8.64162 -0.146447 7.69187 -0.146447 7.10609 0.43934L9.22741 2.56066ZM9.22741 13.4393L2.72741 6.93934L0.606088 9.06066L7.10609 15.5607L9.22741 13.4393ZM2.72741 9.06066L9.22741 2.56066L7.10609 0.43934L0.606088 6.93934L2.72741 9.06066Z"
                fill="white"
              />
            </svg>
          </button>
        )}
        <img
          src={'/static/img/catalog/dogs/' + images[currentSlide]}
          alt=""
          className={`${style.rootImage}`}
        />
        {images.length > 1 && (
          <button onClick={onClickNextButton}>
            <svg
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.10609 15.5607C7.69187 16.1464 8.64162 16.1464 9.22741 15.5607C9.81319 14.9749 9.81319 14.0251 9.22741 13.4393L7.10609 15.5607ZM1.66675 8L0.606088 6.93934C0.0203014 7.52513 0.0203014 8.47487 0.606088 9.06066L1.66675 8ZM9.22741 2.56066C9.81319 1.97487 9.81319 1.02513 9.22741 0.43934C8.64162 -0.146447 7.69187 -0.146447 7.10609 0.43934L9.22741 2.56066ZM9.22741 13.4393L2.72741 6.93934L0.606088 9.06066L7.10609 15.5607L9.22741 13.4393ZM2.72741 9.06066L9.22741 2.56066L7.10609 0.43934L0.606088 6.93934L2.72741 9.06066Z"
                fill="white"
              />
            </svg>
          </button>
        )}
      </div>
      {images.length > 1 && (
        <div ref={imagesRowRef} className={`${style.imagesRow}`}>
          {images.map((image, idx) => (
            <div
              key={idx}
              className={`${style.image} ${
                currentSlide === idx ? style.imageActive : ''
              }`}
              onClick={() => {
                setCurrentSlide(idx);
              }}
            >
              <img src={'/static/img/catalog/dogs/' + image} alt="" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;
