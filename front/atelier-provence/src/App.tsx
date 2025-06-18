// @ts-ignore
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Popup from './components/Popup';
import { navItems } from './data/navItems';
import { colors } from './styles/colors';

const App: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 1000);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Georgia, serif', backgroundColor: colors.background, color: colors.text }}>
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
      <Header scrollToSection={scrollToSection} isScrolled={isScrolled} navItems={navItems} />
      <Hero scrollToSection={scrollToSection} />
      <Features />
      <div id="coupons" className="h-20" />
      <div id="personnalisation" className="h-20" />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default App;