import style from './About.module.scss';
import kurba_left from '../../assets/about_kurba_left.jpg';
import kurba_right from '../../assets/about_kurba_right.jpg';

const About = () => {
  return (
    <section id="about">
      <div className={style.about}>
        <div className={style.about_name}>
          <h1>О Курбе</h1>
        </div>
        <div className={style.about_info}>
          <div className={style.about_info_left}>
            <p>
              Издавна было главным селением удела князей Курбских. Жители села занимались торговлей и промыслами. Здесь
              сходилось несколько просёлочных торговых дорог. После бегства Андрея Курбского вотчина была отобрана у
              этого рода и впоследствии не раз меняла хозяев. С 1743 года по середину XIX века селом владели Нарышкины.
              Как пишет один из краеведов, это было одно из «торговых сёл», где многие крестьяне были фактически
              купцами, а уровень благоустройства приближался к небольшим городкам.
            </p>
          </div>
          <div className={style.about_info_right}>
            <p>В 1895 году в Курбе была открыта одна из первых в Ярославской губернии сельских библиотек.</p>
            <p>В 1944—1957 годах Курба была центром одноимённого района</p>
          </div>
        </div>
        <div className={style.about_images}>
          <img src={kurba_left} alt="Логотип" className={style.about_images_left} />
          <img src={kurba_right} alt="Логотип" className={style.about_images_right} />
        </div>
      </div>
    </section>
  );
};

export default About;
