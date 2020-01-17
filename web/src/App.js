import React, { createContext, useReducer } from 'react';

import './App.css';
import Header from './components/Header';

const AppContext = createContext(null);

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export { App, AppContext };
