import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import BottomNavigation from './components/bottom nav/BottomNavigation';
import PageArea from './components/Page/PageArea';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PageArea/>
        <BottomNavigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
