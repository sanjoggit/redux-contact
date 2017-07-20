import React, { Component } from 'react';
import Header from './header';
import Body from '../containers/body';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <Body/>
      </div>
    );
  }
}
