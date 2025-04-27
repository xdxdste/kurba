import style from './Footer.module.scss';
import logo from '../../assets/logokurba.png';

const Footer = () => {
  return (
    <div className={style.footer_main}>
      <div className={style.footer_name_logo}>
        <div className={style.footer_logo}>
          <img src={logo} alt="Логотип" className={style.footer_logo_image} />
          <h1>Курба</h1>
        </div>
        <div className={style.footer_name}>
          <p>© 2024 Курбский сайт. Все права защищены.</p>
        </div>
      </div>
      <div className={style.footer_navigation}>
        <ul>
          <li>
            <a href="#main">Главная</a>
          </li>
          <li>
            <a href="#contact">Контакты</a>
          </li>
          <li>
            <a href="#about">О Курбе</a>
          </li>
          <li>
            <a href="#gallery">Галерея</a>
          </li>
        </ul>
      </div>
      <div className={style.additional_button}>
        <ul>
          <li>
            <a href="https://github.com/xdxdste/kurba">Код сайта</a>
          </li>
          <li>
            <a href="//t.me/xdxdste">Написать Автору</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
