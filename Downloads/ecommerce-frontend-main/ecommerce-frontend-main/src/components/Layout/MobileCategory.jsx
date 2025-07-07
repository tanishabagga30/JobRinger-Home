'use client'
import React from 'react'
import { useState } from 'react';
const MobileCategory = ({mobilecategory,setMobileCategory,toggleMenu}) => {
    const [activeIndex, setActiveIndex] = useState(-1);
    const onItemClick = (index) => {
        if (index === activeIndex) {
          setActiveIndex(-1);
        } else {
          setActiveIndex(index);
        }
      };
  return (
    <div tabIndex={-1} className={`drawer drawer-left ${mobilecategory? 'drawer-open':''}`}>
    <div className="drawer-mask" />
    <div className="drawer-content-wrapper" style={mobilecategory ? { left: 0 }: { left: 0, transform: "translateX(-100%)" }}>
      <div className="drawer-content">
        <div className="flex flex-col justify-between w-full h-full">
          <div className="bg-slate-600 w-full border-b border-skin-base flex justify-between items-center relative ps-5 md:ps-7 flex-shrink-0 py-0.5">
            <div role="button" className="inline-flex">
              <a className="inline-flex focus:outline-none" href="/">
                <div
                  style={{
                    overflow: "hidden",
                    boxSizing: "border-box",
                    display: "inline-block",
                    position: "relative",
                    width: 195,
                    height: 26,
                  }}
                >
                  <img
                    alt="Razor"
                    src="/logo.png"
                    decoding="async"
                    data-nimg="fixed"
                    style={{
                      position: "absolute",
                      inset: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "none",
                      margin: "auto",
                      display: "block",
                      width: 0,
                      height: 0,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                    }}
                  />
                  <noscript />
                </div>
              </a>
            </div>
            <button onClick={toggleMenu}
              className="flex text-2xl items-center justify-center px-4 md:px-5 py-5 lg:py-8 focus:outline-none "
              aria-label="close"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                className="text-white mt-0.5"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
              </svg>
            </button>
          </div>
          <div className="os-host os-host-foreign os-theme-thin menu-scrollbar flex-grow mb-auto os-host-resize-disabled os-host-overflow os-host-overflow-y os-host-transition os-host-scrollbar-horizontal-hidden">
            <div className="os-resize-observer-host observed">
              <div
                className="os-resize-observer"
                style={{ left: 0, right: "auto" }}
              />
            </div>
            <div
              className="os-size-auto-observer observed"
              style={{ height: "calc(100% + 1px)", float: "left" }}
            >
              <div className="os-resize-observer" />
            </div>
            <div
              className="os-content-glue"
              style={{ margin: 0, width: 484, height: 392 }}
            />
            <div className="os-padding">
              <div
                className="os-viewport os-viewport-native-scrollbars-invisible os-viewport-native-scrollbars-overlaid"
                style={{ overflowY: "scroll" }}
              >
                <div
                  className="os-content"
                  style={{ padding: 0, height: "100%", width: "100%" }}
                >
                  <div className="flex flex-col py-1 px-0 text-skin-base">
                    <ul className="mobile-menu">
                      <li onClick={() => onItemClick(0)} className="transition-colors duration-200 ">
                        <div className="flex items-center justify-between relative">
                          <a 
                            className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                            href="/search?category=audio"
                          >
                            <span className="block w-full">
                              Audio Music
                            </span>
                          </a>
                          <div className="cursor-pointer w-full h-8 text-[17px] px-5 flex-shrink-0 flex items-center justify-end text-skin-base text-opacity-80 absolute end-0 top-1/2 transform -translate-y-1/2">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 512 512"
                              className={`transition duration-200 ease-in-out transform ${activeIndex ===0 ? '-rotate-180':'rotate-0'}`}
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
                            </svg>
                          </div>
                        </div>
                        {activeIndex === 0 && (
                         <ul className="mobile-sub-menu">
                         <li className="transition-colors duration-200 ps-4">
                           <div className="flex items-center justify-between relative">
                             <a
                               className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                               href="/search?category=bags-accessories"
                             >
                               <span className="block w-full">Bags &amp; Accessories</span>
                             </a>
                             <div className="cursor-pointer w-full h-8 text-[17px] px-5 flex-shrink-0 flex items-center justify-end text-skin-base text-opacity-80 absolute end-0 top-1/2 transform -translate-y-1/2">
                               <svg
                                 stroke="currentColor"
                                 fill="currentColor"
                                 strokeWidth={0}
                                 viewBox="0 0 512 512"
                                 className="transition duration-200 ease-in-out transform rotate-0"
                                 height="1em"
                                 width="1em"
                                 xmlns="http://www.w3.org/2000/svg"
                               >
                                 <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
                               </svg>
                             </div>
                           </div>
                         </li>
                         <li className="transition-colors duration-200 ps-4">
                           <div className="flex items-center justify-between relative">
                             <a
                               className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                               href="/search?category=electronic-digital"
                             >
                               <span className="block w-full">Electronic &amp; Digital</span>
                             </a>
                             <div className="cursor-pointer w-full h-8 text-[17px] px-5 flex-shrink-0 flex items-center justify-end text-skin-base text-opacity-80 absolute end-0 top-1/2 transform -translate-y-1/2">
                               <svg
                                 stroke="currentColor"
                                 fill="currentColor"
                                 strokeWidth={0}
                                 viewBox="0 0 512 512"
                                 className="transition duration-200 ease-in-out transform rotate-0"
                                 height="1em"
                                 width="1em"
                                 xmlns="http://www.w3.org/2000/svg"
                               >
                                 <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
                               </svg>
                             </div>
                           </div>
                         </li>
                         <li className="transition-colors duration-200 ps-4">
                           <div className="flex items-center justify-between relative">
                             <a
                               className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                               href="/search?category=garden"
                             >
                               <span className="block w-full">Garden &amp; Kitchen</span>
                             </a>
                             <div className="cursor-pointer w-full h-8 text-[17px] px-5 flex-shrink-0 flex items-center justify-end text-skin-base text-opacity-80 absolute end-0 top-1/2 transform -translate-y-1/2">
                               <svg
                                 stroke="currentColor"
                                 fill="currentColor"
                                 strokeWidth={0}
                                 viewBox="0 0 512 512"
                                 className="transition duration-200 ease-in-out transform rotate-0"
                                 height="1em"
                                 width="1em"
                                 xmlns="http://www.w3.org/2000/svg"
                               >
                                 <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
                               </svg>
                             </div>
                           </div>
                         </li>
                         <li className="transition-colors duration-200 ps-4">
                           <div className="flex items-center justify-between relative">
                             <a
                               className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                               href="/search?category=home-kitchen"
                             >
                               <span className="block w-full">Automotive</span>
                             </a>
                             <div className="cursor-pointer w-full h-8 text-[17px] px-5 flex-shrink-0 flex items-center justify-end text-skin-base text-opacity-80 absolute end-0 top-1/2 transform -translate-y-1/2">
                               <svg
                                 stroke="currentColor"
                                 fill="currentColor"
                                 strokeWidth={0}
                                 viewBox="0 0 512 512"
                                 className="transition duration-200 ease-in-out transform rotate-0"
                                 height="1em"
                                 width="1em"
                                 xmlns="http://www.w3.org/2000/svg"
                               >
                                 <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
                               </svg>
                             </div>
                           </div>
                         </li>
                         <li className="transition-colors duration-200 ps-4">
                           <div className="flex items-center justify-between relative">
                             <a
                               className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                               href="/search?category=lighting-lamps"
                             >
                               <span className="block w-full">Lighting &amp; Lamps</span>
                             </a>
                             <div className="cursor-pointer w-full h-8 text-[17px] px-5 flex-shrink-0 flex items-center justify-end text-skin-base text-opacity-80 absolute end-0 top-1/2 transform -translate-y-1/2">
                               <svg
                                 stroke="currentColor"
                                 fill="currentColor"
                                 strokeWidth={0}
                                 viewBox="0 0 512 512"
                                 className="transition duration-200 ease-in-out transform rotate-0"
                                 height="1em"
                                 width="1em"
                                 xmlns="http://www.w3.org/2000/svg"
                               >
                                 <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
                               </svg>
                             </div>
                           </div>
                         </li>
                         <li className="transition-colors duration-200 ps-4">
                           <div className="flex items-center justify-between relative">
                             <a
                               className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                               href="/search?category=accessories"
                             >
                               <span className="block w-full">Home Accessories</span>
                             </a>
                             <div className="cursor-pointer w-full h-8 text-[17px] px-5 flex-shrink-0 flex items-center justify-end text-skin-base text-opacity-80 absolute end-0 top-1/2 transform -translate-y-1/2">
                               <svg
                                 stroke="currentColor"
                                 fill="currentColor"
                                 strokeWidth={0}
                                 viewBox="0 0 512 512"
                                 className="transition duration-200 ease-in-out transform rotate-0"
                                 height="1em"
                                 width="1em"
                                 xmlns="http://www.w3.org/2000/svg"
                               >
                                 <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
                               </svg>
                             </div>
                           </div>
                         </li>
                       </ul>
                       
                        )}
                      </li>
                      <li onClick={() => onItemClick(1)} className="transition-colors duration-200 ">
                        <div className="flex items-center justify-between relative">
                          <a
                            className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                            href="/search?category=phone-tablets"
                          >
                            <span className="block w-full">
                              Phones &amp; Tablets
                            </span>
                          </a>
                          <div className="cursor-pointer w-full h-8 text-[17px] px-5 flex-shrink-0 flex items-center justify-end text-skin-base text-opacity-80 absolute end-0 top-1/2 transform -translate-y-1/2">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 512 512"
                              className={`transition duration-200 ease-in-out transform ${activeIndex ===1? '-rotate-180':'rotate-0'}`}
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
                            </svg>
                          </div>
                        </div>
                        {activeIndex ===1 && (
                          <ul className="mobile-sub-menu">
                          <li className="transition-colors duration-200 ps-4">
                            <div className="flex items-center justify-between relative">
                              <a
                                className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                                href="/search?category=bags-accessories"
                              >
                                <span className="block w-full">Bags &amp; Accessories</span>
                              </a>
                              <div className="cursor-pointer w-full h-8 text-[17px] px-5 flex-shrink-0 flex items-center justify-end text-skin-base text-opacity-80 absolute end-0 top-1/2 transform -translate-y-1/2">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 512 512"
                                  className="transition duration-200 ease-in-out transform rotate-0"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
                                </svg>
                              </div>
                            </div>
                          </li>
                          <li className="transition-colors duration-200 ps-4">
                            <div className="flex items-center justify-between relative">
                              <a
                                className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                                href="/search?category=electronic-digital"
                              >
                                <span className="block w-full">Electronic &amp; Digital</span>
                              </a>
                              <div className="cursor-pointer w-full h-8 text-[17px] px-5 flex-shrink-0 flex items-center justify-end text-skin-base text-opacity-80 absolute end-0 top-1/2 transform -translate-y-1/2">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 512 512"
                                  className="transition duration-200 ease-in-out transform rotate-0"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
                                </svg>
                              </div>
                            </div>
                          </li>
                          <li className="transition-colors duration-200 ps-4">
                            <div className="flex items-center justify-between relative">
                              <a
                                className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                                href="/search?category=garden"
                              >
                                <span className="block w-full">Garden &amp; Kitchen</span>
                              </a>
                              <div className="cursor-pointer w-full h-8 text-[17px] px-5 flex-shrink-0 flex items-center justify-end text-skin-base text-opacity-80 absolute end-0 top-1/2 transform -translate-y-1/2">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 512 512"
                                  className="transition duration-200 ease-in-out transform rotate-0"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
                                </svg>
                              </div>
                            </div>
                          </li>
                        </ul>
                        
                        )}
                      </li>
                      <li onClick={() => onItemClick(2)} className="transition-colors duration-200 ">
                        <div className="flex items-center justify-between relative">
                          <a
                            className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                            href="/search?category=fashion-clothing"
                          >
                            <span className="block w-full">
                              Fashion &amp; Clothing
                            </span>
                          </a>
                          <div className="cursor-pointer w-full h-8 text-[17px] px-5 flex-shrink-0 flex items-center justify-end text-skin-base text-opacity-80 absolute end-0 top-1/2 transform -translate-y-1/2">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 512 512"
                              className={`transition duration-200 ease-in-out transform ${activeIndex ===2 ? '-rotate-180':'rotate-0'}`}
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
                            </svg>
                          </div>
                        </div>
                        {activeIndex ===2 && (
                          <ul className="mobile-sub-menu">
                          <li className="transition-colors duration-200 ps-4">
                            <div className="flex items-center justify-between relative">
                              <a
                                className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                                href="/search?category=bags-accessories"
                              >
                                <span className="block w-full">Bags &amp; Accessories</span>
                              </a>
                              <div className="cursor-pointer w-full h-8 text-[17px] px-5 flex-shrink-0 flex items-center justify-end text-skin-base text-opacity-80 absolute end-0 top-1/2 transform -translate-y-1/2">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 512 512"
                                  className="transition duration-200 ease-in-out transform rotate-0"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
                                </svg>
                              </div>
                            </div>
                          </li>
                          <li className="transition-colors duration-200 ps-4">
                            <div className="flex items-center justify-between relative">
                              <a
                                className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                                href="/search?category=electronic-digital"
                              >
                                <span className="block w-full">Electronic &amp; Digital</span>
                              </a>
                              <div className="cursor-pointer w-full h-8 text-[17px] px-5 flex-shrink-0 flex items-center justify-end text-skin-base text-opacity-80 absolute end-0 top-1/2 transform -translate-y-1/2">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 512 512"
                                  className="transition duration-200 ease-in-out transform rotate-0"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
                                </svg>
                              </div>
                            </div>
                          </li>
                          <li className="transition-colors duration-200 ps-4">
                            <div className="flex items-center justify-between relative">
                              <a
                                className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                                href="/search?category=garden"
                              >
                                <span className="block w-full">Garden &amp; Kitchen</span>
                              </a>
                              <div className="cursor-pointer w-full h-8 text-[17px] px-5 flex-shrink-0 flex items-center justify-end text-skin-base text-opacity-80 absolute end-0 top-1/2 transform -translate-y-1/2">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 512 512"
                                  className="transition duration-200 ease-in-out transform rotate-0"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
                                </svg>
                              </div>
                            </div>
                          </li>
                          <li className="transition-colors duration-200 ps-4">
                            <div className="flex items-center justify-between relative">
                              <a
                                className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                                href="/search?category=home-kitchen"
                              >
                                <span className="block w-full">Automotive</span>
                              </a>
                              <div className="cursor-pointer w-full h-8 text-[17px] px-5 flex-shrink-0 flex items-center justify-end text-skin-base text-opacity-80 absolute end-0 top-1/2 transform -translate-y-1/2">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 512 512"
                                  className="transition duration-200 ease-in-out transform rotate-0"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
                                </svg>
                              </div>
                            </div>
                          </li>
                          <li className="transition-colors duration-200 ps-4">
                            <div className="flex items-center justify-between relative">
                              <a
                                className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                                href="/search?category=lighting-lamps"
                              >
                                <span className="block w-full">Lighting &amp; Lamps</span>
                              </a>
                              <div className="cursor-pointer w-full h-8 text-[17px] px-5 flex-shrink-0 flex items-center justify-end text-skin-base text-opacity-80 absolute end-0 top-1/2 transform -translate-y-1/2">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 512 512"
                                  className="transition duration-200 ease-in-out transform rotate-0"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
                                </svg>
                              </div>
                            </div>
                          </li>
                          <li className="transition-colors duration-200 ps-4">
                            <div className="flex items-center justify-between relative">
                              <a
                                className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                                href="/search?category=accessories"
                              >
                                <span className="block w-full">Home Accessories</span>
                              </a>
                              <div className="cursor-pointer w-full h-8 text-[17px] px-5 flex-shrink-0 flex items-center justify-end text-skin-base text-opacity-80 absolute end-0 top-1/2 transform -translate-y-1/2">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 512 512"
                                  className="transition duration-200 ease-in-out transform rotate-0"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
                                </svg>
                              </div>
                            </div>
                          </li>
                        </ul>
                        
                        )}
                      </li>
                      <li onClick={() => onItemClick(3)} className="transition-colors duration-200 ">
                        <div className="flex items-center justify-between relative">
                          <a
                            className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                            href="/search?category=garden-kitchen"
                          >
                            <span className="block w-full">
                              Garden &amp; Kitchen
                            </span>
                          </a>
                          <div className="cursor-pointer w-full h-8 text-[17px] px-5 flex-shrink-0 flex items-center justify-end text-skin-base text-opacity-80 absolute end-0 top-1/2 transform -translate-y-1/2">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 512 512"
                              className={`transition duration-200 ease-in-out transform ${activeIndex ===3 ?'-rotate-180':'rotate-0'}`}
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
                            </svg>
                          </div>
                        </div>
                        {activeIndex ===3 && (
                          <ul className="mobile-sub-menu">
                          <li className="transition-colors duration-200 ps-4">
                            <div className="flex items-center justify-between relative">
                              <a
                                className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                                href="/search?category=bags-accessories"
                              >
                                <span className="block w-full">Helicopters &amp; Parts</span>
                              </a>
                            </div>
                          </li>
                          <li className="transition-colors duration-200 ps-4">
                            <div className="flex items-center justify-between relative">
                              <a
                                className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                                href="/search?category=electronic-digital"
                              >
                                <span className="block w-full">Toys &amp; Hobbies</span>
                              </a>
                            </div>
                          </li>
                          <li className="transition-colors duration-200 ps-4">
                            <div className="flex items-center justify-between relative">
                              <a
                                className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                                href="/search?category=garden"
                              >
                                <span className="block w-full">Outdoor &amp; Traveling</span>
                              </a>
                            </div>
                          </li>
                          <li className="transition-colors duration-200 ps-4">
                            <div className="flex items-center justify-between relative">
                              <a
                                className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                                href="/search?category=home-kitchen"
                              >
                                <span className="block w-full">Home &amp; Kitchen</span>
                              </a>
                            </div>
                          </li>
                          <li className="transition-colors duration-200 ps-4">
                            <div className="flex items-center justify-between relative">
                              <a
                                className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                                href="/search?category=lighting-lamps"
                              >
                                <span className="block w-full">Lighting &amp; Lamps</span>
                              </a>
                            </div>
                          </li>
                        </ul>
                        
                        )}
                      </li>
                      <li onClick={() => onItemClick(4)} className="transition-colors duration-200 ">
                        <div className="flex items-center justify-between relative">
                          <a
                            className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                            href="/search?category=tv-video"
                          >
                            <span className="block w-full">
                              TV &amp; Video
                            </span>
                          </a>
                          <div className="cursor-pointer w-full h-8 text-[17px] px-5 flex-shrink-0 flex items-center justify-end text-skin-base text-opacity-80 absolute end-0 top-1/2 transform -translate-y-1/2">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 512 512"
                              className={`transition duration-200 ease-in-out transform ${activeIndex ===4 ?'-rotate-180':'rotate-0'}`}
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
                            </svg>
                          </div>
                        </div>
                        {activeIndex ===4 && (
                          <ul className="mobile-sub-menu">
                          <li className="transition-colors duration-200 ps-4">
                            <div className="flex items-center justify-between relative">
                              <a
                                className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                                href="/search?category=apples"
                              >
                                <span className="block w-full">Apples</span>
                              </a>
                            </div>
                          </li>
                          <li className="transition-colors duration-200 ps-4">
                            <div className="flex items-center justify-between relative">
                              <a
                                className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                                href="/search?category=melons"
                              >
                                <span className="block w-full">Melons</span>
                              </a>
                            </div>
                          </li>
                          <li className="transition-colors duration-200 ps-4">
                            <div className="flex items-center justify-between relative">
                              <a
                                className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                                href="/search?category=berries"
                              >
                                <span className="block w-full">Berries</span>
                              </a>
                            </div>
                          </li>
                          <li className="transition-colors duration-200 ps-4">
                            <div className="flex items-center justify-between relative">
                              <a
                                className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                                href="/search?category=lg"
                              >
                                <span className="block w-full">LG</span>
                              </a>
                            </div>
                          </li>
                          <li className="transition-colors duration-200 ps-4">
                            <div className="flex items-center justify-between relative">
                              <a
                                className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                                href="/search?category=sansung"
                              >
                                <span className="block w-full">Samsung</span>
                              </a>
                            </div>
                          </li>
                        </ul>
                        
                        )}
                      </li>
                      <li onClick={() => onItemClick(5)} className="transition-colors duration-200 ">
                        <div className="flex items-center justify-between relative">
                          <a
                            className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                            href="/search?category=beauty-health"
                          >
                            <span className="block w-full">
                              Beauty &amp; Health
                            </span>
                          </a>
                          <div className="cursor-pointer w-full h-8 text-[17px] px-5 flex-shrink-0 flex items-center justify-end text-skin-base text-opacity-80 absolute end-0 top-1/2 transform -translate-y-1/2">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 512 512"
                              className={`transition duration-200 ease-in-out transform ${activeIndex ===5 ? '-rotate-180':'rotate-0'}`}
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
                            </svg>
                          </div>
                        </div>
                        {activeIndex ===5 && (
                          <ul className="mobile-sub-menu">
                          <li className="transition-colors duration-200 ps-4">
                            <div className="flex items-center justify-between relative">
                              <a
                                className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                                href="/search?category=fruit-juice"
                              >
                                <span className="block w-full">Fruit Juice</span>
                              </a>
                            </div>
                          </li>
                          <li className="transition-colors duration-200 ps-4">
                            <div className="flex items-center justify-between relative">
                              <a
                                className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                                href="/search?category=ice-coffee"
                              >
                                <span className="block w-full">Ice Coffee</span>
                              </a>
                            </div>
                          </li>
                          <li className="transition-colors duration-200 ps-4">
                            <div className="flex items-center justify-between relative">
                              <a
                                className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                                href="/search?category=comodianos"
                              >
                                <span className="block w-full">Comodianos</span>
                              </a>
                            </div>
                          </li>
                          <li className="transition-colors duration-200 ps-4">
                            <div className="flex items-center justify-between relative">
                              <a
                                className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                                href="/search?category=punch"
                              >
                                <span className="block w-full">Punch</span>
                              </a>
                            </div>
                          </li>
                          <li className="transition-colors duration-200 ps-4">
                            <div className="flex items-center justify-between relative">
                              <a
                                className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                                href="/search?category=montemous"
                              >
                                <span className="block w-full">Montemous</span>
                              </a>
                            </div>
                          </li>
                        </ul>
                        
                        )}
                      </li>
                      <li className="transition-colors duration-200 ">
                        <div className="flex items-center justify-between relative">
                          <a
                            className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                            href="/search?category=jewelry-watches"
                          >
                            <span className="block w-full">
                              Jewelry &amp; Watches
                            </span>
                          </a>
                        </div>
                      </li>
                      <li onClick={() => onItemClick(6)} className="transition-colors duration-200 ">
                        <div className="flex items-center justify-between relative">
                          <a
                            className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                            href="/search?category=quality-milk"
                          >
                            <span className="block w-full">
                              Top 10 Offers
                            </span>
                          </a>
                          <div className="cursor-pointer w-full h-8 text-[17px] px-5 flex-shrink-0 flex items-center justify-end text-skin-base text-opacity-80 absolute end-0 top-1/2 transform -translate-y-1/2">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 512 512"
                              className={`transition duration-200 ease-in-out transform ${activeIndex ===6 ? '-rotate-180':'rotate-0'}`}
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
                            </svg>
                          </div>
                        </div>
                        {activeIndex ===6 && (
                          <ul className="mobile-sub-menu">
                          <li className="transition-colors duration-200 ps-4">
                            <div className="flex items-center justify-between relative">
                              <a
                                className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                                href="/search?category=boiled-milk"
                              >
                                <span className="block w-full">Boiled Milk</span>
                              </a>
                            </div>
                          </li>
                          <li className="transition-colors duration-200 ps-4">
                            <div className="flex items-center justify-between relative">
                              <a
                                className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                                href="/search?category=mixed-milk"
                              >
                                <span className="block w-full">Mixed Milk</span>
                              </a>
                            </div>
                          </li>
                        </ul>
                        
                        )}
                      </li>
                      <li className="transition-colors duration-200 ">
                        <div className="flex items-center justify-between relative">
                          <a
                            className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                            href="/search?category=accessories"
                          >
                            <span className="block w-full">
                              Accessories
                            </span>
                          </a>
                        </div>
                      </li>
                      <li className="transition-colors duration-200 ">
                        <div className="flex items-center justify-between relative">
                          <a
                            className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                            href="/search?category=beaf-steak"
                          >
                            <span className="block w-full">Beaf Steak</span>
                          </a>
                        </div>
                      </li>
                      <li className="transition-colors duration-200 ">
                        <div className="flex items-center justify-between relative">
                          <a
                            className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                            href="/search?category=vitamin-items"
                          >
                            <span className="block w-full">
                              Vitamin Items
                            </span>
                          </a>
                        </div>
                      </li>
                      <li className="transition-colors duration-200 ">
                        <div className="flex items-center justify-between relative">
                          <a
                            className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                            href="/search?category=raw-chicken"
                          >
                            <span className="block w-full">
                              Raw Chicken mdeo
                            </span>
                          </a>
                        </div>
                      </li>
                      <li className="transition-colors duration-200 ">
                        <div className="flex items-center justify-between relative">
                          <a
                            className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                            href="/search?category=breakfast-item"
                          >
                            <span className="block w-full">
                              Breakfast Item
                            </span>
                          </a>
                        </div>
                      </li>
                      <li className="transition-colors duration-200 ">
                        <div className="flex items-center justify-between relative">
                          <a
                            className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                            href="/search?category=fish-items"
                          >
                            <span className="block w-full">Fish Items</span>
                          </a>
                        </div>
                      </li>
                      <li className="transition-colors duration-200 ">
                        <div className="flex items-center justify-between relative">
                          <a
                            className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out"
                            href="/search?category=green-vegetables"
                          >
                            <span className="block w-full">
                              Green Vegetables
                            </span>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
              <div className="os-scrollbar-track os-scrollbar-track-off">
                <div
                  className="os-scrollbar-handle"
                  style={{
                    width: "100%",
                    transform: "translate(0px, 0px)",
                  }}
                />
              </div>
            </div>
            <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden">
              <div className="os-scrollbar-track os-scrollbar-track-off">
                <div
                  className="os-scrollbar-handle"
                  style={{
                    height: "60.8359%",
                    transform: "translate(0px, 0px)",
                  }}
                />
              </div>
            </div>
            <div className="os-scrollbar-corner" />
          </div>
          <div className="flex items-center justify-center bg-skin-fill border-t border-skin-base px-7 flex-shrink-0 space-x-4 py-3">
            <a
              className="text-heading space-s-6 transition duration-300 ease-in text-skin-base text-opacity-60 hover:text-orange-500 facebook"
              href="https://www.facebook.com/redqinc/"
            >
              <span className="sr-only">text-facebook</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                height={24}
                width={24}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                />
              </svg>
            </a>
            <a
              className="text-heading space-s-6 transition duration-300 ease-in text-skin-base text-opacity-60 hover:text-orange-500 twitter"
              href="https://twitter.com/redqinc"
            >
              <span className="sr-only">text-twitter</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                height={24}
                width={24}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z" />
              </svg>
            </a>
            <a
              className="text-heading space-s-6 transition duration-300 ease-in text-skin-base text-opacity-60 hover:text-orange-500 youtube"
              href="https://www.youtube.com/channel/UCjld1tyVHRNy_pe3ROLiLhw"
            >
              <span className="sr-only">text-youtube</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                height={24}
                width={24}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z" />
              </svg>
            </a>
            <a
              className="text-heading space-s-6 transition duration-300 ease-in text-skin-base text-opacity-60 hover:text-orange-500 instagram"
              href="https://www.instagram.com/redqinc/"
            >
              <span className="sr-only">text-instagram</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                height={24}
                width={24}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
                <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MobileCategory
