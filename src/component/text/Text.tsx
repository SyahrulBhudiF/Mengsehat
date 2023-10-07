import React from 'react';
import { textInterface } from '../../type';

export const Text: React.FC<textInterface> = ({ text, check }) => {
  return (
    <>
      <p
        className={`font-bebas-neue text-[4rem] leading-[4rem] ${
          check === 1 ? 'text-white' : 'text-[#1B1B1B]'
        }`}
      >
        {text[0]}
      </p>
      <p
        className={`font-public-sans text-2xl w-[95%] -mt-6 ${
          check === 1 ? 'text-white' : 'text-[#1B1B1B]'
        } text-opacity-60`}
      >
        {text[1]}
      </p>
    </>
  );
};
