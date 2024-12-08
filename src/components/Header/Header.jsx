import React from 'react';
import './header.css'

const Header = () => {
    return (
        <header>
            <div className="logo-wrapper">
            <div className="logo">
                    <img src="../../../public/logo.png" alt="Логотип"/>
                </div>
                <div className="site-title">
                    <h1>Курба</h1>
                </div>
            </div>
            <div className="header-content">
                <div className="header-text">
                    <div className="contact-info-number">
                        <div>
                        <p>Телефон:</p>
                        <p>+7 777 777 77 77</p>
                        </div>
                    <div className="contact-info-mail">
                        <p>Email:</p>
                        <p>yasya78yarik@gmail.com</p>
                    </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;