import React from 'react';
import style from './MainPage.module.scss';
import PageWrapper from '../../common/PageWrapper';
import { data } from '../../../helpers';
import SamovarList from './SamovarList';

const MainPage = () => (
  <PageWrapper>
    <div>
      <div>
        <h1>О нас</h1>
        <p>Реставрацией старинных самоваров мы начали заниматься очень давно...</p>
      </div>
      <h1>Самовары в наличии</h1>
      <SamovarList data={data} />
    </div>
  </PageWrapper>
);

export default MainPage;
