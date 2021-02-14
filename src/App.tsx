import React from 'react';

import CityDetail from './pages/CityDetail';
import Home from './pages/Home';
import ListCities from './pages/ListCities';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <CityDetail />
    <GlobalStyle />
  </>
);

export default App;
