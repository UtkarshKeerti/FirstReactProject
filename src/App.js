import React from 'react';
import './App.css';
import HeaderComp from './components/Header'
import HeroSection from './components/Hero_section';
import SecNav from './components/SecNav';

function App() {
  return (
    <div className="mother-cont">
      <HeaderComp></HeaderComp>
      <HeroSection></HeroSection>
      <SecNav></SecNav>
    </div>
  );
}

export default App;
