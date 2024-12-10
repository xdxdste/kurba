import style from './Gallery.module.scss';

const Gallery = () => {
  return (
    <section id="gallery">
      <div>
        <div className={style.name_gallery}>
          <h1>Галерея</h1>
        </div>
        <div className={style.gallery}>
          <div className={style.gallery_image}>
            <img src="../../../public/gallery/gallery_image1.jpg" alt="1" className={style.galleryImage1} />
          </div>
          <div className={style.gallery_image}>
            <img src="../../../public/gallery/gallery_image2.jpg" alt="2" className={style.galleryImage2} />
          </div>
          <div className={style.gallery_image}>
            <img src="../../../public/gallery/gallery_image3.jpg" alt="3" className={style.galleryImage3} />
          </div>
          <div className={style.gallery_image}>
            <img src="../../../public/gallery/gallery_image4.webp" alt="4" className={style.galleryImage4} />
          </div>
          <div className={style.gallery_image}>
            <img src="../../../public/gallery/gallery_image5.jpg" alt="5" className={style.galleryImage5} />
          </div>
          <div className={style.gallery_image}>
            <img src="../../../public/gallery/gallery_image6.jpg" alt="6" className={style.galleryImage6} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
