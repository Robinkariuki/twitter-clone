import React from 'react';
import './App.css';
import Feed from './components/Feed/Feed';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      
      <Sidebar/>
      <Feed/>
    </div>
  );
}

export default App;
