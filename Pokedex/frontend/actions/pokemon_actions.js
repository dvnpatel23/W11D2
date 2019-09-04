export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
import * as APIUtil from '../util/api_util';

export const receiveAllPokemon = (monsters) => ({
  type: RECEIVE_ALL_POKEMON,
  monsters
});


export const requestAllPokemon = () => (dispatch) => {
  return APIUtil.fetchAllPokemon()
  .then(pokemon => dispatch(receiveAllPokemon(pokemon)));
};


