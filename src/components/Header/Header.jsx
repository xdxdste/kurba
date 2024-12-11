import style from './header.module.scss';
import logo from '../../assets/logokurba.png';

const Header = () => {
  return (
    <header>
      <div className={style.logo_wrapper}>
        <div className={style.logo}>
          <img src={logo} alt="Логотип" />
        </div>
        <div>
          <h1>Курба</h1>
        </div>
      </div>
      <section id="contact">
        <div className={style.contact_info}>
          <div className={style.contact_info_number}>
            <li>Телефон:</li>
            <p>+7 777 777 77 77</p>
          </div>
          <div className={style.contact_info_mail}>
            <li>Email:</li>
            <p>yasya78yarik@gmail.com</p>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
