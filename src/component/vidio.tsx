import { Cards } from './card/cards';
import vidio1 from '../img/vidio1.png';
import vidio2 from '../img/vidio2.png';
import { AiFillCaretRight } from 'react-icons/ai';
import { Button } from './button/button';
import React from 'react';

export const Vidio: React.FC = () => {
  return (
    <article className="flex justify-center items-center gap-[17%] mt-[15%] xl:gap-[14%] xl:mt-[18%] 2xl:gap-[15%]">
      <section className="relative w-[25rem] duration-300 ease-in-out ml-20">
        <Cards
          text="High Quality Vidio"
          img={vidio1}
          width="25rem"
          font="public-sans"
          fontSize="text-2xl"
          marginTop="-mt-12"
          Icon={AiFillCaretRight}
          IconPopUp={AiFillCaretRight}
          px="px-3"
          py="py-3"
          fontSize2="text-[3rem]"
        />

        <section className="absolute left-[33%] bottom-40 z-[-1] hover:z-[2] duration-300 ease-in-out">
          <Cards
            text="High Quality Vidio"
            img={vidio2}
            width="25rem"
            font="public-sans"
            fontSize="text-2xl"
            marginTop="-mt-12"
            Icon={AiFillCaretRight}
            IconPopUp={AiFillCaretRight}
            px="px-3"
            py="py-3"
            fontSize2="text-[3rem]"
          />
        </section>
      </section>

      <section className="flex flex-col max-w-xl gap-9 items-baseline mt-[-5%]">
        <p className="font-bebas-neue text-6xl">
          WE HAVE PROVIDED LOTS OF VIDEOS FOR YOUR EASE
        </p>
        <p className="font-public-sans text-2xl w-[95%] text-black text-opacity-60">
          This will help you if you want to fitness at home. We hope that with
          this online video you will remain consistent no matter where you are.
        </p>
        <Button text={['Watch Video', 'Try free 7 days']} />
      </section>
    </article>
  );
};
