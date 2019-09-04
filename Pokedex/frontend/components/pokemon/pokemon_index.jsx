import React from 'react';
import {PokemonIndexItem} from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }
  render() {
    let list = this.props.pokemon.map(poke => {
     return <PokemonIndexItem key={poke.id} poke={poke} />
    });

    return (

      <div>
        <ul> {list} </ul>
      </div>
    )
  }
}

export default PokemonIndex;