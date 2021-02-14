import React from 'react';

import { ThemeProvider } from 'styled-components';

import CityDetail from './pages/CityDetail';
import Home from './pages/Home';
import ListCities from './pages/ListCities';

import GlobalStyle from './styles/global';
import light from './styles/themes/light';

const App: React.FC = () => (
  <ThemeProvider theme={light}>
    <CityDetail />
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
