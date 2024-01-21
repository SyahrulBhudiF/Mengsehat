import React from 'react';
import { Nav } from './component/nav';
import { Home } from './component/home';
import { Belt } from './component/belt';
import { Program } from './component/program';
import { Vidio } from './component/vidio';
import { Slide } from './component/slide';
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
