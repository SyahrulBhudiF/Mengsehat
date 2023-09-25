import anime from '../../node_modules/animejs/lib/anime.es';
import { useEffect } from 'react';

export const Belt = () => {
  useEffect(() => {
    anime({
      targets: '.beltAnim',
      translateY: ['100%', '0%'],
      duration: 500,
      autoplay: true,
      delay: anime.stagger(100),
      easing: 'easeInOutSine',
    });
  }, []);

  return (
    <section className="beltAnim flex items-center overflow-hidden bg-black">
      <div
        className="flex items-center justify-center gap-4 w-[100vw] h-[7.8rem] flex-nowrap overflow-hidden"
        id="belt-parenet"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="51"
          viewBox="0 0 50 51"
          fill="none"
        >
          <path
            d="M25.0854 0.80481C25.0854 25.5 49.7806 25.5 49.7806 25.5C49.7806 25.5 25.0854 25.5 25.0854 50.1951C25.0854 25.5 0.390287 25.5 0.390287 25.5C0.390287 25.5 25.0855 25.5 25.0854 0.80481Z"
            fill="white"
          />
        </svg>

        <p className="txtBelt">MAKE YOU HEALHTY</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="51"
          viewBox="0 0 50 51"
          fill="none"
        >
          <path
            d="M25.0854 0.80481C25.0854 25.5 49.7806 25.5 49.7806 25.5C49.7806 25.5 25.0854 25.5 25.0854 50.1951C25.0854 25.5 0.390287 25.5 0.390287 25.5C0.390287 25.5 25.0855 25.5 25.0854 0.80481Z"
            fill="white"
          />
        </svg>

        <p className="txtBelt">MAKE YOU HEALHTY</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="51"
          viewBox="0 0 50 51"
          fill="none"
        >
          <path
            d="M25.0854 0.80481C25.0854 25.5 49.7806 25.5 49.7806 25.5C49.7806 25.5 25.0854 25.5 25.0854 50.1951C25.0854 25.5 0.390287 25.5 0.390287 25.5C0.390287 25.5 25.0855 25.5 25.0854 0.80481Z"
            fill="white"
          />
        </svg>

        <p className="txtBelt">MAKE YOU HEALHTY</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="51"
          viewBox="0 0 50 51"
          fill="none"
        >
          <path
            d="M25.0854 0.80481C25.0854 25.5 49.7806 25.5 49.7806 25.5C49.7806 25.5 25.0854 25.5 25.0854 50.1951C25.0854 25.5 0.390287 25.5 0.390287 25.5C0.390287 25.5 25.0855 25.5 25.0854 0.80481Z"
            fill="white"
          />
        </svg>

        <p className="txtBelt">MAKE YOU HEALHTY</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="51"
          viewBox="0 0 50 51"
          fill="none"
        >
          <path
            d="M25.0854 0.80481C25.0854 25.5 49.7806 25.5 49.7806 25.5C49.7806 25.5 25.0854 25.5 25.0854 50.1951C25.0854 25.5 0.390287 25.5 0.390287 25.5C0.390287 25.5 25.0855 25.5 25.0854 0.80481Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};
