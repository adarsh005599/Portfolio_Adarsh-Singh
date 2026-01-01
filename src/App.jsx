import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';

import PrivacyPolicy from "./pages/Privacy";
import TermsAndConditions from "./pages/Terms";
import ScrollToTop from "./components/ScrollToTop"; 

const LandingPage = () => (
  <>
    <Hero />
    <About />
    <Projects />
    <Experiences />
    <Testimonial />
    <Contact />
  </>
);

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="container mx-auto max-w-7xl">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          
          {/* Legal Pages */}
           

          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;