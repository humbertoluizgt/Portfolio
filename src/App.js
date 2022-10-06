import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './components/Layout/Layout.css';
import Home from './routes/Home/Home'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './routes/About/About';
import Portfolio from './routes/Portfolio/Portfolio';
import Contact from './routes/Contact/Contact';

function App() { 
  return (
    <Router>
      <div className='app--content'>      
        <header>
          <Navbar />
        </header>
        <main>        
          <Routes> 
            <Route index element={<Home />}/> 
            <Route exact path="/" element={<Home />}/> 
            <Route path="about" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />          
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>     
      </div> 
    </Router>    
  );
}

export default App;
