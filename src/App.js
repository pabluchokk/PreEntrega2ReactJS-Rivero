import './App.css';
import React from 'react';
import Nav from './Components/NavBar/NavBar';
import { ItemListContainer } from './pages/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <Nav /> 
      <ItemListContainer greeting="Are you ready?"/>
    </div>
  );
}

export default App;
