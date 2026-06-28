// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loading from './components/Loading';
import BackgroundOrbs from './components/BackgroundOrbs';
import PageTransition from './components/PageTransition';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <Loading />
      ) : (
        <>
          <BackgroundOrbs />
          <Navbar />
          <div className="container">
            <PageTransition />
          </div>
          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;
