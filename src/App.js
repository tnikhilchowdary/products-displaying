import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <h1></h1>
      <Navbar search={search} setSearch={setSearch} />
      <Home search={search} />
    </div>
  );
}

export default App;

