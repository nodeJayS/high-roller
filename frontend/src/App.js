import React, { Component } from 'react';

import BetView from './components/BetViewCont';
import BetHistory from './components/BetHistoryCont';
import NavBar from './components/NavBar';
import ChatBox from './components/ChatBox'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <NavBar />
        <BetView />
        <ChatBox />
        <BetHistory />
      </div>
    );
  };
};