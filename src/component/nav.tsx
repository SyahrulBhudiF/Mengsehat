import '../index.css';
import { navInterface } from '../type';
import anime from '../../node_modules/animejs/lib/anime.es';

export const Nav = ({ navlist }: navInterface) => {
  anime({
    targets: 'header',
    translateY: ['-100%', '0%'],
    duration: 800,
    autoplay: true,
    delay: anime.stagger(100),
    easing: 'easeInOutSine',
  });

  return (
    <header>
      <nav className="flex gap-[40rem] justify-evenly items-center pt-2">
        <h1 className="font-bebas-neue text-[1.5rem] cursor-pointer">
          🏋️‍♂️MENGSEHAT
        </h1>

        <ul className="flex items-start gap-[2.75rem] font-public-sans">
          <li className="navLi">{navlist[0]}</li>
          <li className="navLi">{navlist[1]}</li>
          <li className="navLi">{navlist[2]}</li>
          <li className="navLi">{navlist[3]}</li>
          <li className="navLi">{navlist[4]}</li>
        </ul>

      </nav>
    </header>
  );
};
