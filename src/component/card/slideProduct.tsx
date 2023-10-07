import { slideInterface } from '../../type';

import React from 'react';

export const SlideProduct: React.FC<slideInterface> = ({
  text,
  img,
  name,
  position,
}) => {
  return (
    <section className="w-[40rem] h-[22rem] p-[2rem] flex justify-center items-start flex-col gap-20 bg-black mt-0 mb-0 mr-auto ml-auto rounded-sm">
      <p className="text-white font-public-sans text-3xl xl:text-2xl w-[30rem]">{text}</p>
      <div className="flex items-center gap-4">
        <div className="p-[0.01rem] bg-slate-200 rounded-full">
          <img src={img} className="rounded-full" />
        </div>
        <div className="flex flex-col">
          <p className="text-white font-public-sans text-2xl">{name}</p>
          <p className="text-white font-public-sans text-xl opacity-80">
            {position}
          </p>
        </div>
      </div>
    </section>
  );
};
