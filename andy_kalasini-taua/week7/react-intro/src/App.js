import React from 'react'; //import the base React class
import './App.css';

import HelloUser from './HelloUser';

// like Ruby '<', class User < ApplicationRecord

class App extends React.Component {

  // Every component class must have a minimum a render() method, which must return some JSX tags


  render(){
    return (
      <div className="App">
        <h1>Hello World from React!</h1>

        <HelloUser name="Sam" imgWidth="300" imgHeight="200" />
        <HelloUser name="Manda" imgWidth="200" imgHeight="100" />


      </div>
    );
    <p>Hello, Sam</p>
    <p>Hello, Manda</p>

  } //render()

} // App

export default App;
