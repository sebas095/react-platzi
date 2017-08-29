/*
 * Module dependencies
 */

import React from 'react';
import PokeTable from './components/PokeTable';

const pokemons = [
  { number: 1, name: 'Bulbasaur' },
  { number: 2, name: 'Ivysaur' },
  { number: 3, name: 'Venusaur' }
];

const app = document.getElementById('container');

React.render(<PokeTable pokemons={pokemons} />, app);
