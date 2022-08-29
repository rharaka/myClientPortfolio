import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Menu from './components/Menu';
import Home from './components/Home';
import Education from './components/Education';
import Experience from './components/Experience';
import Other from './components/Other';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Menu />
        </header>
        <div className="container-fluid">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/other" element={<Other />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <footer className="App-header">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
