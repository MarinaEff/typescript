import React from 'react';
import style from './Form.module.scss';

type FormPropsType = {
    title: string;
    children: React.ReactNode;
};

const Form: React.FC<FormPropsType> = ({ title, children }) => (
  <div className={style.form}>
    <h1 className={style.form_title}>{title}</h1>
    <form className={style.form_body}>{children}</form>
  </div>
);

export default Form;
