import React from 'react';
import { buttonInterface } from '../../type';

export const Button: React.FC<buttonInterface> = ({ text }) => {
  return (
    <div className="flex gap-[1.5rem] items-center">
      <span className="btn bg-[#1B1B1B] text-white">{text[0]}</span>
      <span className="btn bg-white">{text[1]}</span>
    </div>
  );
};
