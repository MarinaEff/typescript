import React from 'react';
import style from './Footer.module.scss';

const Footer = () => (
  <footer className={style.footer}>
    <img src="./logo.png" alt="" />
    <div>
      <p>Мы находимся в Лысково</p>
    </div>
  </footer>
);

export default Footer;
