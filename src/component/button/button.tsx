import React from 'react';

interface Props {
  text: string[];
}

export const Button: React.FC<Props> = ({ text }) => {
  return (
    <div className="flex gap-[0.625rem] items-center">

      <span className="btn bg-black text-white">{text[0]}</span>
      <span className="btn bg-white">{text[1]}</span>

    </div>
  );
};
