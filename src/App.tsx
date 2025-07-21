import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TrustCredibility from './components/TrustCredibility';
import About from './components/About';
import Programs from './components/Programs';
import StudentLife from './components/StudentLife';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import MidPageCTA from './components/MidPageCTA';
import Events from './components/Events';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <TrustCredibility />
      <Testimonials />
      <Programs />
      <StudentLife />
      <WhyChooseUs />
      <MidPageCTA />
      <Events />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;