import women from '../img/women.png';
import { Button } from './button/button';
import React, { useEffect, useRef } from 'react';
import { animHome1, animHome2 } from '../animation/anim';

export const Home: React.FC = () => {
  const refText = useRef<HTMLDivElement>(null);
  const refImg = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (refText.current && refImg.current) {
      animHome1(refText.current);
      animHome2(refImg.current);
    }
  }, []);

  return (
    <article className="flex justify-center overflow-hidden">
      <section className="flex w-[90%] items-center justify-evenly gap-[5rem]">
        <div
          ref={refText}
          className="flex flex-col w-[40%] items-start gap-[2.75rem]"
        >
          <h1 className="font-bebas-neue text-[8.5rem] leading-[94%] tracking-[-0.17rem] xl:text-[5.5rem] 2xl:text-8xl">
            Make Your Body Fit and Healthy With Exercise
          </h1>

          <p className="font-public-sans text-[1.5rem] tracking-[-0.015rem] w-[90%] mt-[-2rem] text-[#1B1B1B] text-opacity-60">
            Join us with great people. We will create a program that makes you
            healthy and keeps you from getting bored with our program.
          </p>

          <Button text={['Join Member', 'Login']} />
        </div>

        <img
          src={women}
          alt="women.png"
          ref={refImg}
          className="w-[43rem] h-[52rem] xl:w-[38rem] xl:h-[49rem] 2xl:h-[46rem] 2xl:w-[40rem] laptop2:h-[39.5rem] laptop2:w-[36rem]"
        />
      </section>
    </article>
  );
};
