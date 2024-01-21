import React from 'react';
import { Text } from './text/Text';
import { RxArrowLeft } from 'react-icons/rx';
import { RxArrowRight } from 'react-icons/rx';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import '../../node_modules/swiper/swiper-bundle.css';
import '../../node_modules/swiper/swiper.css';
import { SlideProduct } from './card/slideProduct';
import { Product } from './text/Product';

export const Slide: React.FC = () => {
  return (
    <article className="flex justify-center items-baseline mt-[10%] h-max w-[100wh] gap-[1rem]">
      <section className="text ml-[16%] -mr-[13rem] 2xl:-mr-[5rem] 2xl:ml-[8%] xl:ml-[4%] xl:-mr-[2rem]">
        <Text
          text={[
            'Many have given good testimonials about us.',
            'Our clients have consistently given glowing testimonials about the effectiveness and quality of our fitness programs.',
          ]}
        />
        <div className="flex gap-3 -mt-[1rem]">
          <span className="button-prev btn-slide">
            <RxArrowLeft />
          </span>
          <span className="button-next btn-slide">
            <RxArrowRight />
          </span>
        </div>
      </section>

      <Swiper
        grabCursor={true}
        direction="horizontal"
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        navigation={{
          nextEl: '.button-next',
          prevEl: '.button-prev',
        }}
        slidesPerView={1}
        modules={[Pagination, Navigation]}
        className="w-[34%] 2xl:w-[44%] xl:w-[45%] "
      >
        {Product.map((product) => (
          <SwiperSlide key={product.id}>
            <SlideProduct
              text={product.text}
              img={product.img}
              name={product.name}
              position={product.position}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
};
