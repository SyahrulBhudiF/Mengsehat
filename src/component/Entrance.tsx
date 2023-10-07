import React from 'react';
import { Text } from './text/Text';
import pict1 from '../img/pict1.png';
import { Button } from './button/button';

export const Entrance: React.FC = () => {
  return (
    <article className="flex gap-20 mt-[20rem] justify-center items-center 2xl:gap-24">
      <section className="flex justify-center w-[40rem] max-h-[25rem] -mt-[6rem] bg-[#1B1B1B] rounded-sm 2xl:w-[35rem] 2xl:h-[25rem] xl:ml-14 xl:h-[25rem]">
        <img src={pict1} className="-mt-[10rem] w-[24rem] 2xl:w-[24rem] xl:w-[22rem] h-[35rem]" />
      </section>
      <section className="text">
        <Text
          text={[
            "let's start your health here with us",
            "let's be here to grow together with others, don't hesitate to start good habits. Wake yourself up from that bed of laziness, be a good life.",
          ]}
        />
        <Button text={['Join Now', 'Login']} />
      </section>
    </article>
  );
};
