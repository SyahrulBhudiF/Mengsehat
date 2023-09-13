import { Card } from './card';
import { cardsInterface } from '../../type';

export const Cards = ({
  text,
  img,
  width,
  font,
  fontSize,
  marginTop,
  Icon,
  popUpText,
  IconPopUp,
  px,
  py,
  fontSize2
}: cardsInterface) => {
  const variabel = `flex items-center justify-center w-[${width}] bg-black py-[0.5rem] ${marginTop} text-white font-${font} z-[1] `;

  return (
    <section className="flex w-[80%] justify-center items-center">
      <div className="flex flex-col cursor-pointer hover:brightness-90 transition duration-300 ease-in-out">
        <Card img={img} text={popUpText} Icon={IconPopUp} px={px} py={py} fontSize={fontSize2} />
        <span className={variabel}>
          <div className="text-4xl">{Icon && <Icon />}</div>
          <p className={fontSize}>{text}</p>
        </span>
      </div>
    </section>
  );
};
