import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import CityDetail from './pages/CityDetail';
import Home from './pages/Home';
import ListCities from './pages/ListCities';

import GlobalStyle from './styles/global';
import light from './styles/themes/light';

const App: React.FC = () => (
  <BrowserRouter>
    <ThemeProvider theme={light}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/list-cities" component={ListCities} />
        <Route path="/city-detail" component={CityDetail} />
      </Switch>

      <GlobalStyle />
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
