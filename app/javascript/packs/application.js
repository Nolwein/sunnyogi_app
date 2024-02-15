// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
console.log('Hello World from Webpacker')

import React from 'react';
import ReactDOM from 'react-dom';
import Carrousel from '../components/Carrousel'; // Chemin vers votre composant React

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Carrousel/>,
    document.getElementById('root')
  );
});
