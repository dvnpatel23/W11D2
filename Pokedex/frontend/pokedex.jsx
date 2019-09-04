import React from 'react';
import ReactDOM from 'react-dom';
import {RECEIVE_ALL_POKEMON, receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions';
import configureStore from './store/store';
import {fetchAllPokemon} from './util/api_util';
import Root from './components/root';

window.receiveAllPokemon = receiveAllPokemon;
window.fetchAllPokemon = fetchAllPokemon;
window.requestAllPokemon = requestAllPokemon;

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.dispatch = store.dispatch;
  // window.getState = store.getState();
  window.store = store;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root)
});