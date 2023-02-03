import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './myComponents/Header';
import Routes from './myComponents/allRoutes/Routes';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
