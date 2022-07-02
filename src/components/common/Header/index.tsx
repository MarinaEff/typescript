import React from 'react';
import style from './Header.module.scss';

const Header = () => (
  <header className={style.header}>
    <img src="./logo.png" alt="Купи самовар" />
    <ul>
      <li>
        <a href="/">Наши самовары</a>
      </li>
      <li>
        <a href="/auth">Авторизация</a>
      </li>
      <li>
        <a href="/about">О нас</a>
      </li>
    </ul>
  </header>
);

export default Header;
