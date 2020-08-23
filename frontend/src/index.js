import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/Store';
import Root from './Root'; // Root.js imports App.js

import './css/index.css';
import './css/game.css';
import './css/nav.css';
import './css/modal.css';
import './css/history.css';
import './css/button.css';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore({});

  const app = document.getElementById('app');
  
  ReactDOM.render(<Root store={store} />, app); 
});