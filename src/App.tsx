import React from 'react';
import { Nav } from './component/Nav';
import { Home } from './component/Home';
import { Belt } from './component/Belt';
import { Program } from './component/Program';
import { Vidio } from './component/Vidio';
import { Slide } from './component/Slide';
import { Entrance } from './component/Entrance';
import { Join } from './component/Join';
import './css/index.css';
import { Footer } from './component/Footer';

const App: React.FC = () => {
  return (
    <article className="h-screen max-w-[100wh]">
      <Nav
        navlist={[
          'Experience',
          'Pricing',
          'Program',
          'About Us',
          'Testimonial',
        ]}
      />
      <Home />
      <Belt />
      <Program text="OUR PROGRAM" />
      <Vidio />
      <Slide />
      <Entrance />
      <Join />
      <Footer />
    </article>
  );
};

export default App;
