import style from './Navigation.module.css/';

const Navigation = () => {
  return (
    <nav className={style.navigation}>
      <ul>
        <li>
          <a href="#Main">Главная</a>
        </li>
        <li>
          <a href="#about">О Курбе</a>
        </li>
        <li>
          <a href="#contact">Контакты</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
