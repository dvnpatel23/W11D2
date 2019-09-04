import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { HashRouter, Route } from "react-router-dom";

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Route path="/pokemon/:id" component={PokemonIndexContainer} />
      <Route path="/" component={PokemonIndexContainer} />
    </HashRouter>
  <PokemonIndexContainer />
  </Provider>
);

export default Root;
