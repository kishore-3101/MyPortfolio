import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';

import './styles/style.css';
import './styles/contact-form.css';

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
