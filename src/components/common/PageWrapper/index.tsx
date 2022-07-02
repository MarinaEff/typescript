import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import style from './PageWrapper.module.scss';

type PageWrapperPropsType = {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperPropsType> = ({ children }) => (
  <div className={style.page_wrapper}>
    <Header />
    {children}
    <Footer />
  </div>
);

export default PageWrapper;
