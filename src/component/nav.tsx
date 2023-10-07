import '../index.css';
import { navInterface } from '../type';
import { animNav } from '../animation/anim';
import { useEffect, useRef } from 'react';

export const Nav: React.FC<navInterface> = ({ navlist }) => {
  const refNav = useRef<HTMLElement>(null);

  useEffect(() => {
    if (refNav.current) {
      animNav(refNav.current);
    }
  }, []);

  return (
    <header ref={refNav}>
      <nav className="flex gap-[38rem] justify-evenly items-center pt-2 xl:gap-[20rem] 2xl:gap-[25rem] overflow-hidden">
        <h1 className="font-bebas-neue text-[1.5rem] cursor-pointer text-[#1B1B1B] tracking-wider">
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
