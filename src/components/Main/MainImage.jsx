import React from 'react';
import style from './MainImage.module.css';

const MainImage = () => {
  return (
    <div className={style.main_image}>
      <img src="/src/assets/123.jpg" alt="Курба" className={style.just_image} />
    </div>
  );
};

export default MainImage;
