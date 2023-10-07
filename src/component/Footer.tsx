import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center">
      <div className="flex mt-[4rem] mb-[4rem] justify-between w-[69%] 2xl:w-[87%] xl:w-[92%]">
        <p className="font-bebas-neue text-[1.5rem] text-[#1B1B1B] tracking-wider">
          🏋🏻‍♀️mengsehat
        </p>
        <p className="text-[#222] font-public-sans text-xl tracking-tighter">
          Copyright © 2023 - 2025. All rights reserved
        </p>
        <p className="font-public-sans text-xl text-[#1B1B1B] tracking-tighter">
          Privacy Policy
        </p>
      </div>
    </footer>
  );
};
