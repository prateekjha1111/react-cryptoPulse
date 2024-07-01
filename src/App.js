import React from 'react';
import './App.css';
import CryptoPrices from './components/CryptoPrices';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Crypto Price Tracker</h1>
        <CryptoPrices />
      </header>
    </div>
  );
}

export default App;
