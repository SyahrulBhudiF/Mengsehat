import { buttonInterface } from '../../type';

export const Button = ({ text }: buttonInterface) => {
  return (
    <div className="flex gap-[1.5rem] items-center">
      <span className="btn bg-black text-white">{text[0]}</span>
      <span className="btn bg-white">{text[1]}</span>
    </div>
  );
};
