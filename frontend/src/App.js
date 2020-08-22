import React, { Component } from 'react';

import BetView from './components/BetViewCont';
import BetHistory from './components/BetHistoryCont';
import NavBar from './components/NavBar';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <NavBar />
        <div>        
          <BetView />
          <BetHistory />
        </div>

      </div>
    );
  };
};