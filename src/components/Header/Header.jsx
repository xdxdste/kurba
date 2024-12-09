import style from './header.module.scss';

const Header = () => {
  return (
    <header>
      <div className={style.logo_wrapper}>
        <div className={style.logo}>
          <img src="../../../public/logo.png" alt="Логотип" />
        </div>
        <div>
          <h1>Курба</h1>
        </div>
      </div>
      <div className="header-content">
        <div className="header-text">
          <div className="contact-info">
            <div className="contact-info-number">
              <li>Телефон:</li>
              <p>+7 777 777 77 77</p>
            </div>
            <div className="contact-info-mail">
              <li>Email:</li>
              <p>yasya78yarik@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
