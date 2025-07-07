'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const BannerSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="carouselWrapper relative rounded overflow-hidden dotsCircle">
   
        <Swiper
          modules={[Navigation, Pagination]}
          loop={true}
          speed={500}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation !== 'boolean') {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
        >
          <SwiperSlide>
            <div
              className="w-full bg-skin-thumbnail bg-no-repeat bg-cover flex items-center min-h-[160px] p-7 sm:pb-24 xl:pb-32 sm:pt-16 xl:pt-24 md:min-h-[320px] xl:min-h-[360px] 2xl:min-h-[450px]"
              style={{ backgroundImage: 'url("/img/sliderimage/slideshow1.jpg")' }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="w-full bg-skin-thumbnail bg-no-repeat bg-cover flex items-center min-h-[160px] p-7 sm:pb-24 xl:pb-32 sm:pt-16 xl:pt-24 md:min-h-[320px] xl:min-h-[360px] 2xl:min-h-[450px]"
              style={{ backgroundImage: 'url("/img/sliderimage/slideshow2.jpg")' }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="w-full bg-skin-thumbnail bg-no-repeat bg-cover flex items-center min-h-[160px] p-7 sm:pb-24 xl:pb-32 sm:pt-16 xl:pt-24 md:min-h-[320px] xl:min-h-[360px] 2xl:min-h-[450px]"
              style={{ backgroundImage: 'url("/img/sliderimage/slideshow3.jpg")' }}
            />
          </SwiperSlide>

          {/* Custom arrows */}
          <div ref={prevRef}>
            <div 
  className="swiper-prev top-[50%] left-[2rem]  z-10 w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-base lg:text-lg xl:text-xl cursor-pointer flex items-center justify-center rounded-full bg-white absolute transition duration-300 hover:bg-[#ff9400] hover:text-skin-inverted focus:outline-none transform shadow-navigation 3xl:text-2xl start-3 xl:start-8"
  id="prevActivateId"
>
<svg
  fill="#000000"
  height="1em"
  width="1em"
  version="1.1"
  id="XMLID_54_"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 0.6 0.6"
  xmlSpace="preserve"
>
  <g id="previous">
    <g>
      <path
        points="17.2,23.7 5.4,12 17.2,0.3 18.5,1.7 8.4,12 18.5,22.3 		"
        d="M0.43 0.593L0.135 0.3L0.43 0.007L0.463 0.043L0.21 0.3L0.463 0.557Z"
      />
    </g>
  </g>
</svg>

</div>
          </div>
          <div ref={nextRef}>
             <div 
    className={`swiper-next top-[50%] right-[2rem]  hover:bg-[#ff9400] w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-base lg:text-lg xl:text-xl cursor-pointer flex items-center justify-center rounded-full z-10 bg-white absolute transition duration-300  text-gray-950 hover:text-skin-inverted focus:outline-none transform shadow-navigation 3xl:text-2xl end-3 xl:end-8`}
    id="nextActivateId"
  >
    <svg
  fill="#000000"
  height="1em"
  width="1em"
  version="1.1"
  id="XMLID_287_"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 0.6 0.6"
  xmlSpace="preserve"
>
  <g id="next">
    <g>
      <path
        points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 "
        d="M0.17 0.593L0.135 0.557L0.393 0.3L0.135 0.043L0.17 0.007L0.463 0.3Z"
      />
    </g>
  </g>
</svg>

            </div>
          </div>
        </Swiper>

    </div>
  );
};

export default BannerSlider;
