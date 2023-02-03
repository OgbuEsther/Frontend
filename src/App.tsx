import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './myComponents/Header';
import Routes from './myComponents/allRoutes/Routes';
import { GlobalStyle } from './GlobalStyles';
import Footer from './myComponents/Footer';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      
      <Header />
      <Routes />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
