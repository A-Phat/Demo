import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
        <Header isShowTime='1'></Header>
        {/* <Box2 clock={this.state.date.toLocaleTimeString()}></Box2> */}
        <Header isShowTime='10'></Header>
    </div>
  );
}

export default App;
