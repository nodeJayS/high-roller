import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/Store';
import Root from './Root'; // Root.js imports App.js

import './css/index.css';
import './css/dice.css';
import './css/nav.css';
import './css/modal.css'

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore({});

  const app = document.getElementById('app');
  
  ReactDOM.render(<Root store={store} />, app); 
});