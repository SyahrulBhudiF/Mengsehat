import React from 'react';
import { cardInterface } from '../../type';

export const Card: React.FC<cardInterface> = ({
  img,
  text,
  Icon,
  px,
  py,
  fontSize,
}) => {
  const classStyle = `rounded-full bg-slate-600 z-0 ${py} ${px} font-bebas-neue ${fontSize} text-white bg-opacity-60 backdrop-blur-sm`;

  return (
    <div className="relative z-[0]">
      <img src={img} alt="" className="rounded-sm filter hover:blur" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-100 ease-in-out">
        <span className={classStyle}>
          {text} {Icon && <Icon />}
        </span>
      </div>
    </div>
  );
};
