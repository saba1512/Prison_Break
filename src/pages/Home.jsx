import React from 'react';
import Hero from '../components/Hero';
import Prisons from '../components/Prisons';
import Timeline from '../components/Timeline';
import Terminal from '../components/Terminal'; 

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Prisons />
      <Timeline />
      <Terminal /> 
    </div>
  );
}

export default Home;