'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { allPrdocuts } from '@/data/allproducts';
import Productcard from '../product/Productcard';
import Nextbutton from './Nextbutton';
import Prevbutton from './Prevbutton';

const FashionProduct = ({ products }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const BestProduct = allPrdocuts.filter(
  (product) => product.category?.toLowerCase() === "best sellers products"
);
  return (
    <>
     
      <div className="relative mb-8 lg:mb-12">
        <div className="mb-3">
          <h2 className="text-gray-800 text-[20px] xl:text-[20px] font-medium xl:leading-8">
            <div>
           Fashion & Clothing Product
            </div>
          </h2>
        </div>

        <div className="relative p-3 border border-black/10 rounded bg-white">
          <Swiper
            modules={[Navigation, Grid]}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom'
            }}
            spaceBetween={10}
            slidesPerView={6}
            grid={{
              rows: 2,
              fill: 'row'
            }}
            breakpoints={{
              1536: {
                slidesPerView: 6,
                grid: { rows: 1 }
              },
              1280: {
                slidesPerView: 6,
                grid: { rows: 1 }
              },
              1024: {
                slidesPerView: 4,
                grid: { rows: 1 }
              },
              640: {
                slidesPerView: 2,
                grid: { rows: 1 }
              },
              360: {
                slidesPerView: 1,
                grid: { rows: 1 }
              }
            }}
            className="swiper-grid"
          >
            {BestProduct.map((product, i) => (
              <SwiperSlide key={i}>
                <Productcard
                  product={product}
                  setShowModal={setShowModal}
                  setSelectedProduct={setSelectedProduct}
                />
              </SwiperSlide>
            ))}
            <div className="swiper-button-prev-custom">
              <Prevbutton topvalue={'50%'} leftvalue={'5px'} />
            </div>
            <div className="swiper-button-next-custom">
              <Nextbutton topvalue={'50%'} rightvalue={'5px'} />
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default FashionProduct;
