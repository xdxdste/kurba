import style from './Gallery.module.scss';
import image1 from '../../assets/gallery/gallery_image1.jpg';
import image2 from '../../assets/gallery/gallery_image2.jpg';
import image3 from '../../assets/gallery/gallery_image3.jpg';
import image4 from '../../assets/gallery/gallery_image4.webp';
import image5 from '../../assets/gallery/gallery_image5.jpg';
import image6 from '../../assets/gallery/gallery_image6.jpg';

const Gallery = () => {
  return (
    <section id="gallery">
      <div>
        <div className={style.name_gallery}>
          <h1>Галерея</h1>
        </div>
        <div className={style.gallery}>
          <div className={style.gallery_image}>
            <img src={image1} alt="1" className={style.galleryImage1} />
          </div>
          <div className={style.gallery_image}>
            <img src={image2} alt="2" className={style.galleryImage2} />
          </div>
          <div className={style.gallery_image}>
            <img src={image3} alt="3" className={style.galleryImage3} />
          </div>
          <div className={style.gallery_image}>
            <img src={image4} alt="4" className={style.galleryImage4} />
          </div>
          <div className={style.gallery_image}>
            <img src={image5} alt="5" className={style.galleryImage5} />
          </div>
          <div className={style.gallery_image}>
            <img src={image6} alt="6" className={style.galleryImage6} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
