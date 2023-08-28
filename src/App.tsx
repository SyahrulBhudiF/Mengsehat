import { Nav } from './component/nav';
import { Home } from './component/home';
import { Belt } from './component/belt';
import './css/index.css';

const App = () => {
  return (
    <body className="h-screen max-w-[100wh]">
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
    </body>
  );
};

export default App;
