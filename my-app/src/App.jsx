import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Feedback from './feedback';
import ArchitectPartner from './ArchitectPartner';
import Disclaimer from './Disclaimer';
import EnterpriseSolutions from './EnterpriseSolutions';
import Products from './Products';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="container-fluid mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/ArchitectPartner" element={<ArchitectPartner />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/EnterpriseSolutions" element={<EnterpriseSolutions />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="App-header p-3 bg-light d-flex align-items-center justify-content-between">
      <div className="header-left d-flex align-items-center">
        <div className="brand">
          <h1 className="heading-1">IIQUE</h1>
          <p className="tagline">Enterprise Lighting. Elevated.</p>
        </div>
      </div>
      <nav className="nav d-flex align-items-center">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/products">Products</Link>
        <Link className="nav-link" to="/feedback">Feedback</Link>
        <div className="dropdown" ref={dropdownRef}>
          <button className="dropbtn" onClick={handleDropdownToggle}>
            Partnerships <i className={`fas fa-chevron-down ${isDropdownOpen ? 'rotate' : ''}`}></i>
          </button>
          <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
            <Link className="nav-link" to="/ArchitectPartner">Architect Partner</Link>
            <Link className="nav-link" to="/EnterpriseSolutions">Enterprise Solutions Inquiry</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};


const Home = () => {
  const features = [
    { text: 'High Efficiency' },
    { text: 'Extended Lifespan' },
    { text: 'Eco-Friendly Materials' },
    { text: 'Customizable Solutions' },
  ];

  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prevFeature) => (prevFeature + 1) % features.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <>
      <Helmet>
        <title>IIQUE - Home</title>
        <meta name="description" content="Welcome to IIQUE, offering premium lighting solutions for enterprises. Discover our innovative, sustainable, and high-efficiency lighting products." />
      </Helmet>
      <section className="hero">
        <div className="hero-text"><strong>Light up</strong> your enterprise</div>
      </section>
      <section className="about mt-4">
        <h2 className="heading-2">About Us</h2>
        <p className="about-text">
          At IIQUE, we are passionate about delivering premium lighting solutions tailored to the needs of contemporary enterprises. Our products embody innovation, sustainability, and excellence, providing unparalleled efficiency and reliability. We are committed to elevating your business environment with lighting that is as functional as it is inspiring.
        </p>
        <section className="commitment mt-4">
          <h2 className="heading-2">Our Commitment</h2>
          <p className="commitment-text">
            At IIQUE, our commitment to excellence is reflected in every aspect of our work. We focus on:
          </p>
          <div className="commitment-list">
            <div className="commitment-item">
              <div className="commitment-icon">🚀</div>
              <div className="commitment-description">
                <h3>Innovation</h3>
                <p>We continuously push the boundaries to bring you cutting-edge lighting solutions.</p>
              </div>
            </div>
            <div className="commitment-item">
              <div className="commitment-icon">🌱</div>
              <div className="commitment-description">
                <h3>Sustainability</h3>
                <p>Our products are designed with eco-friendly materials and energy-efficient technology.</p>
              </div>
            </div>
            <div className="commitment-item">
              <div className="commitment-icon">🏆</div>
              <div className="commitment-description">
                <h3>Excellence</h3>
                <p>We are dedicated to delivering the highest quality and reliability in every product we offer.</p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="features mt-4">
        <h2 className="heading-2">Our Features</h2>
        <div className="flashcard p-3 bg-light border rounded">
          <div className="flashcard-content">
            {features[currentFeature].text}
          </div>
        </div>
      </section>
    </>
  );
};

const Footer = () => {
  return (
    <footer className="App-footer bg-light p-3 mt-4">
      <div className="container">
        <p className="text-center mb-0">© 2024 IIQUE. All rights reserved.</p>
        <p className="text-center mb-0 footer-text">Proudly crafted in India ❤️</p>
        <nav className="footer-nav d-flex justify-content-center mt-3">
          <Link className="nav-link" to="/disclaimer">Disclaimer</Link>
        </nav>
      </div>
    </footer>
  );
};

export default App;
