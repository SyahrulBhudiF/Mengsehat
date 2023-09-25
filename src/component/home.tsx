import women from '../img/women.png';
import { Button } from './button/button';
import anime from '../../node_modules/animejs/lib/anime.es';
import { useEffect } from 'react';

export const Home = () => {
  useEffect(() => {
    anime({
      targets: '.animHome',
      translateX: ['-100%', '0%'],
      duration: 800,
      autoplay: true,
      delay: anime.stagger(100),
      easing: 'easeInOutSine',
    });

    anime({
      targets: '.imgWomen',
      translateX: ['100%', '0%'],
      duration: 800,
      autoplay: true,
      delay: anime.stagger(100),
      easing: 'easeInOutSine',
    });
  }, []);

  return (
    <article className="flex justify-center">
      <section className="flex w-[90%] items-center justify-evenly gap-[5rem]">
        <div className="animHome flex flex-col w-[40%] items-start gap-[2.75rem]">
          <h1 className="font-bebas-neue text-[8.5rem] leading-[94%] tracking-[-0.17rem] xl:text-[5.5rem] 2xl:text-8xl">
            Make Your Body Fit and Healthy With Exercise
          </h1>

          <p className="font-public-sans text-[1.5rem] tracking-[-0.015rem] w-[90%] mt-[-2rem] text-black text-opacity-60">
            Join us with great people. We will create a program that makes you
            healthy and keeps you from getting bored with our program.
          </p>

          <Button text={['Join Member', 'Login']} />
        </div>

        <img
          src={women}
          alt="women.png"
          className="imgWomen w-[43rem] h-[52rem] xl:w-[42rem] xl:h-[49rem] 2xl:h-[46rem] 2xl:w-[40rem] laptop2:h-[39.5rem] laptop2:w-[38rem]"
        />
      </section>
    </article>
  );
};
