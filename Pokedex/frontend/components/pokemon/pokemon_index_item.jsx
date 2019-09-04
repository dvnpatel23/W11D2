import React from 'react';
import { Link, Router } from "react-router-dom";

export const PokemonIndexItem = (props) => (
  <li >
    
    {/* <Router>  */}
        <Link to={`/pokemon/${props.poke.id}`} > <span>{props.poke.name}</span>
        <img src={props.poke.image_url} width="50px" alt="" />
        </Link> 
    {/* </Router> */}
  </li>
);