import React from 'react';
import { textInterface } from '../../type';

export const Text: React.FC<textInterface> = ({ text }) => {
  return (
    <>
      <p className="font-bebas-neue text-6xl">{text[0]}</p>
      <p className="font-public-sans text-2xl w-[95%] -mt-6 text-black text-opacity-60">
        {text[1]}
      </p>
    </>
  );
};
