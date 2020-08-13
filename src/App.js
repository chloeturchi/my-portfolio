import React from 'react';

import Navigation from './shared/components/Navigation/Navigation';
import Home from './sections/home/Home';
import About from './sections/about/About';
import Portfolio from './sections/portfolio/Portfolio';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';

const App = () => {
  return (
    <>
      <Navigation />
      <main>
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;

/* Icons made by <a href="https://www.flaticon.com/authors/freepik/"*/
