import logo from './logo.svg';
import './App.css';
import { Login } from './Login';
import { Table } from './Table';
import React, { useState } from 'react';

function App() {
  const [currentForm, setCurrentFrom] = useState('login');
  return (
    <div className="App">
      {
        currentForm === 'login' ? <Login /> : <Table/>
      }
      
    </div>
  );
}

export default App;
