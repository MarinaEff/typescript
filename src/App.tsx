import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainContainer from './containers/MainContainer';
import AuthContainer from './containers/AuthContainer';
import RegContainer from './containers/RegContainer';
import AboutUsContainer from './containers/AboutUsContainer';

const App = () => (
  <Routes>
    <Route path="/" element={<MainContainer />} />
    <Route path="/auth" element={<AuthContainer />} />
    <Route path="/reg" element={<RegContainer />} />
    <Route path="/about" element={<AboutUsContainer />} />
  </Routes>
);
export default App;
