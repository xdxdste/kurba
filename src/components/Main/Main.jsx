import style from './Main.module.scss';

const Main = () => {
  return (
    <section id="main">
      <div className={style.main}>
        <div className={style.info}>
          <h1>Курбское поселение Ярославского района </h1>
        </div>
        <div className={style.main_content}>
          <h2>
            Курба — село в Ярославском районе Ярославской области России, одно из самых больших и древних сел
            ярославской земли. В XV—XVI веках здесь была вотчина князей Курбских, потомков ярославских удельных князей
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Main;
