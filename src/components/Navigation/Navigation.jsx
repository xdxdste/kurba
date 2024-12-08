import React from 'react';
import './Navigation.css/'

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul>
                <li><a href="#home">Главная</a></li>
                <li><a href="#about">О Курбе</a></li>
                <li><a href="#contact">Контакты</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;