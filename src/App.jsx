import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NutriGenProductPage from './components/NutriGenProductPage';

function Home() {
  return (
    <main style={{ padding: '20px' }}>
      <h1>Welcome to Senkusha</h1>
      <p>This is your homepage content.</p>
    </main>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<NutriGenProductPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
