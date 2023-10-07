import React from 'react';
import { Nav } from './component/nav';
import { Home } from './component/home';
import { Belt } from './component/belt';
import { Program } from './component/program';
import { Vidio } from './component/vidio';
import { Slide } from './component/slide';
import './css/index.css';

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
    </article>
  );
};

export default App;
