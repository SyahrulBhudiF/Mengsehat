import { Card } from './card';
import sitUp from '../../img/sitUp.png';
import { cardsInterface } from '../../type';

export const Cards = ({text}:cardsInterface) => {
  return (
    <section className="flex w-[80%] justify-center items-center">

      <div className="flex flex-col">
        <Card img={sitUp} />
        <span className='w-[25.625rem] bg-black py-[0.5rem] -mt-16 text-white text-center font-bebas-neue text-5xl'>{text}Sit Up</span>
      </div>

    </section>
  );
};
