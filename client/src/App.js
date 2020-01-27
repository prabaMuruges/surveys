import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Know what your customers think. Sign in to connect better.
        </p>
        <a href="/auth/google">Sign in via Google</a>
      </header>
    </div>
  );
}

export default App;
