import React from 'react';
import './header.css'

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src="header_images/logo.png" alt="Логотип"/>
            </div>
            <div className="site-title">
                <h1>Курба</h1>
            </div>
            <div className="header-content">
                <div className="header-text">
                    <nav className="navigation">
                        <ul>
                            <li><a href="#home">Главная</a></li>
                            <li><a href="#about">О нас</a></li>
                            <li><a href="#contact">Контакты</a></li>
                        </ul>
                    </nav>
                    <div className="contact-info">
                        <p>Телефон: +7 777 777 77 77</p>
                        <p>Email: yasya78yarik@gmail.com</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;