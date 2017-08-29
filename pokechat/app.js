/*
 * Module dependencies
 */

import React from 'react';
import PokeApp from './components/PokeApp';

const pokemons = [
  { number: 1, name: 'Bulbasaur' },
  { number: 2, name: 'Ivysaur' },
  { number: 3, name: 'Venusaur' }
];

const app = document.getElementById('container');
React.render(<PokeApp pokemons={pokemons} />, app);
