"use client";
import * as htmlToImage from "html-to-image";
import { act, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import {
  FaArrowUp,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaUpload,
  FaMagic,
  FaDownload,
} from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useState } from "react";
import ProductZoom from "@/components/product/ProductZoom";
import Nextbutton from "@/components/Home/Nextbutton";
import Prevbutton from "@/components/Home/Prevbutton";

const CustomPaging = ({ gallery }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [logoImage, setLogoImage] = useState(null);
  const [logoRotation, setLogoRotation] = useState(0); // degrees
  const [logoPosition, setLogoPosition] = useState({ x: 20, y: 20 });
  const [logoSize, setLogoSize] = useState(60); // default size in px

  const [open, setOpen] = useState(false);
  const moveLogo = (direction) => {
    const step = 5;
    setLogoPosition((prev) => {
      const newPos = { ...prev };
      if (direction === "up") newPos.y = Math.max(prev.y - step, 0);
      if (direction === "down") newPos.y = Math.min(prev.y + step, 324);
      if (direction === "left") newPos.x = Math.max(prev.x - step, 0);
      if (direction === "right") newPos.x = Math.min(prev.x + step, 364);
      return newPos;
    });
  };

  const previewRef = useRef(null);

  console.log("current slide", activeIndex);
  const handleDownload = () => {
    if (!previewRef.current) return;

    htmlToImage
      .toPng(previewRef.current, {
        backgroundColor: "#ffffff",
        cacheBust: true,
      })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "product-preview.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error("Failed to generate image:", err);
      });
  };

  return (
    <div>
      {/* Main Slider */}
      <Swiper
        modules={[Navigation, Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        onSwiper={(swiper) => {
          swiper.on("slideChange", () => setActiveIndex(swiper.activeIndex));
        }}
        loop
        spaceBetween={10}
        slidesPerView={1}
        className="main-swiper"
      >
        {gallery?.slice(0, 3).map((item, index) => (
          <SwiperSlide key={index}>
            <div ref={index === activeIndex ? previewRef : null}>
              <ProductZoom
                previewRef={previewRef}
                className="h-[384px] w-[424px] mx-auto object-cover"
                image={`${item}`}
                logoImage={logoImage}
                logoPosition={logoPosition}
                logoRotation={logoRotation}
                alt={`slide-${index}`}
                logoSize={logoSize}
              />
            </div>
          </SwiperSlide>
        ))}
        {/* Custom Navigation Buttons */}
        <div className="swiper-prev absolute top-[34%] left-8 z-10">
          <Prevbutton />
        </div>
        <div className="swiper-next absolute top-[34%] right-8 z-10">
          <Nextbutton />
        </div>
      </Swiper>

      {/* Thumbnail Navigation */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={4}
        slidesPerView={3}
        watchSlidesProgress
        modules={[Thumbs]}
        className="thumb-swiper p-2  [&_.swiper-slide]:!w-[100px] 
               [&_.swiper-slide-thumb-active]:border-1 [&_.swiper-slide-thumb-active]:border-black 
               [&_.swiper-wrapper]:flex [&_.swiper-wrapper]:justify-center"
      >
        {gallery?.slice(0, 3).map((item, index) => (
          <SwiperSlide key={index}>
            <img
              className="h-[100px] w-[100px] mx-auto object-cover cursor-pointer"
              src={`${item}`}
              alt={`thumb-${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="space-y-4 text-sm text-gray-700 mt-2">
        {/* Upload Logo */}
        {open ? (
          <>
            <div className="flex items-center justify-center gap-4">
              <div>
                <label className="block font-semibold mb-1">Upload Logo</label>
                <label className="flex items-center gap-2 px-3 py-1.5 bg-orange-500 text-white rounded-sm hover:bg-orange-600 cursor-pointer w-max transition">
                  <FaUpload className="text-sm" />
                  <span className="text-sm">Upload</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = () => {
                          setLogoImage(reader.result);
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Move Buttons */}
              <div className="flex flex-col mt-2">
                <button
                  onClick={() => moveLogo("up")}
                  className="col-span-2 mx-auto bg-gradient-to-b from-white via-gray-100 to-gray-200 p-2 rounded-md flex justify-center items-center hover:from-gray-100 hover:to-gray-300 transition"
                  title="Move Up"
                >
                  <FaArrowUp className="text-lg" />
                </button>
                <div className="col-span-3 flex gap-4">
                <button
                  onClick={() => moveLogo("left")}
                  className="bg-gradient-to-r  from-white via-gray-100 to-gray-200 p-2 rounded-md flex justify-center items-center hover:from-gray-100 hover:to-gray-300 transition"
                  title="Move Left"
                >
                  <FaArrowLeft className="text-lg" />
                </button>

                <div></div>

                <button
                  onClick={() => moveLogo("right")}
                  className="bg-gradient-to-l  from-white via-gray-100 to-gray-200 p-2 rounded-md flex justify-center items-center hover:from-gray-100 hover:to-gray-300 transition"
                  title="Move Right"
                >
                  <FaArrowRight className="text-lg" />
                </button>
                </div>

                <button
                  onClick={() => moveLogo("down")}
                  className="col-span-2 mx-auto bg-gradient-to-t from-white via-gray-100 to-gray-200 p-2 rounded-md flex justify-center items-center hover:from-gray-100 hover:to-gray-300 transition"
                  title="Move Down"
                >
                  <FaArrowDown className="text-lg" />
                </button>
              </div>

              <div className="mt-4">
                <label className="text-sm font-medium text-gray-700">
                  Adjust Logo Size
                </label>
                <input
                  type="range"
                  min={20}
                  max={200}
                  value={logoSize}
                  onChange={(e) => setLogoSize(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="text-xs text-gray-500 mt-1">
                  Size: {logoSize}px
                </div>
              </div>
              <div className="mt-4">
                <label className="text-sm font-medium text-gray-700">
                  Rotate Logo
                </label>
                <input
                  type="range"
                  min={-180}
                  max={180}
                  value={logoRotation}
                  onChange={(e) => setLogoRotation(parseInt(e.target.value))}
                  className="w-full accent-blue-600"
                />
                <div className="text-xs text-gray-500 mt-1">
                  {logoRotation}°
                </div>
              </div>
            </div>
            {logoImage && (
              <div className="flex justify-center mt-4">
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
                >
                  <FaDownload />
                  Download Preview
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="flex justify-center py-4">
            <div
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 via-white to-pink-100 rounded-full shadow text-sm font-semibold text-gray-700 transition-all duration-300 hover:shadow-md hover:scale-105 hover:bg-gradient-to-r hover:from-pink-100 hover:via-white hover:to-blue-100 cursor-pointer"
            >
              <FaMagic className="text-blue-500" />
              <span className="uppercase tracking-wide">Try Your Logo</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomPaging;
