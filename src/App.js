import React, { Component } from 'react';
import './App.css';
import Header from './connecter/Header'
import Content from './connecter/Content'


class App extends Component {

  render() {
    return (
           <div>
               <Header />
               <Content />
           </div>
    );
  }
}

export default App;
