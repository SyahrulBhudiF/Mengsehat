import { Cards } from './card/cards';
import { programInterface } from '../type';
import sitUp from '../img/sitUp.png';
import boxing from '../img/boxing.png';
import weight from '../img/weight.png';

export const Program: React.FC<programInterface> = ({ text }) => {
  return (
    <article className="flex flex-col mb-48">
      <section className="flex flex-col items-center justify-center mt-[6.25rem] gap-11 xl:ml-14 xl:mr-14 2xl:mr-[8%] 2xl:ml-[8%]">
        <span className="text-6xl font-bebas-neue text-[#1B1B1B]">{text}</span>
        <div className="flex gap-9">
          <Cards
            text="Sit Up"
            img={sitUp}
            width="25.625rem"
            font="bebas-neue"
            fontSize="text-5xl"
            marginTop="-mt-16"
            popUpText="DETAIL"
            px="px-5"
            py="py-7"
            fontSize2="text-[2rem]"
          />
          <Cards
            text="Boxing"
            img={boxing}
            width="25.625rem"
            font="bebas-neue"
            fontSize="text-5xl"
            marginTop="-mt-16"
            popUpText="DETAIL"
            px="px-5"
            py="py-7"
            fontSize2="text-[2rem]"
          />
          <Cards
            text="weightlifting"
            img={weight}
            width="25.625rem"
            font="bebas-neue"
            fontSize="text-5xl"
            marginTop="-mt-16"
            popUpText="DETAIL"
            px="px-5"
            py="py-7"
            fontSize2="text-[2rem]"
          />
        </div>
      </section>
    </article>
  );
};
