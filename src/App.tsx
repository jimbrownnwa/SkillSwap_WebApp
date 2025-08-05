import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import SkillSearch from './components/SkillSearch';
import FeaturedSkills from './components/FeaturedSkills';
import SkillCategories from './components/SkillCategories';
import Community from './components/Community';
import TrustSafety from './components/TrustSafety';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <HowItWorks />
      <SkillSearch />
      <FeaturedSkills />
      <SkillCategories />
      <Community />
      <TrustSafety />
      <Footer />
    </div>
  );
}

export default App;