import style from './MainImage.module.css';
import MainImage1 from '../../assets/123.jpg';

const MainImage = () => {
  return (
    <div className={style.main_image}>
      <img src={MainImage1} alt="Курба" className={style.just_image} />
    </div>
  );
};

export default MainImage;
