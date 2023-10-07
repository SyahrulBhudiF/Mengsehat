import React from 'react';
import pict2 from '../img/pict2.png';
import { Text } from './text/Text';

export const Join: React.FC = () => {
  return (
    <article className="flex justify-center items-baseline mt-[8rem]">
      <section className="flex justify-center w-[68%] h-[32rem] bg-[#1b1b1b] gap-[10rem] 2xl:w-[86%] xl:w-[91%]">
        <img src={pict2} />
        <div className="flex flex-col gap-8 items-start w-[38%] mt-auto mb-auto 2xl:w-[40%] xl:w-[41%]">
          <Text
            text={[
              'lets join community and join this program',
              'You are not alone, many have was joined',
            ]}
            check={1}
          />
          <form className="flex flex-col">
            <div className="flex items-center mb-2 rounded-sm bg-white">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Type your email"
                required
                className="flex-grow p-[1rem] text-start w-[26rem] border-none bg-white outline-none"
              />
              <input
                type="submit"
                value="Join Now"
                className="w-[8rem] h-[3rem] bg-[#1B1B1B] text-white mr-1 rounded-sm cursor-pointer "
              />
            </div>
          </form>
        </div>
      </section>
    </article>
  );
};
