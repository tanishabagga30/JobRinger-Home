import React from 'react';

const Page = () => {
  return (
   <div className="pt-7 lg:pt-8">
      <div className="flex flex-col lg:flex-row products-category max-w-7xl mx-auto px-4 lg:px-6">
        {/* Left Sidebar - Filters */}
        <div className="sticky hidden lg:block h-full shrink-0 ltr:pr-7 rtl:pl-7 w-[300px] top-16 lg:ml-6 lg:mr-4 lg:mt-2">
          <div className="rounded bg-white p-4 shadow-sm">
            <div className="relative flex flex-col pb-8 lg:pb-10 space-y-5">
              {/* Categories Section */}
              <div className="block-title flex items-center justify-between cursor-pointer">
                <h3 className="font-medium text-base lg:text-[17px] text-brand-dark">
                  Categories
                </h3>
                <button
                  className="h-4 w-4 flex items-center justify-center"
                  aria-label="Collapse categories"
                >
                   <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-minus h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                {[
                  { id: 'category-apple', label: 'Apple', count: 1 },
                  { id: 'category-iphone', label: 'iPhone', count: 1 },
                  { id: 'category-laptop-ipad', label: 'Laptop & iPad', count: 10 },
                  { id: 'category-smart-phones-tablets', label: 'Smart Phones & Tablets', count: 8 },
                  { id: 'category-unlocked', label: 'Unlocked', count: 1 },
                ].map((category) => (
                  <div key={category.id} className="space-y-2">
                    <div className="flex items-start justify-center">
                      <div className="flex items-center space-x-2">
                        <div className="relative">
                          <input type="checkbox" className="sr-only" id={category.id} />
                          <div className="h-4 w-4 rounded-sm border border-gray-300 flex items-center justify-center bg-white transition-colors duration-200" />
                        </div>
                      </div>
                      <div className="ps-2.5 flex-1 flex items-center justify-between">
                        <label htmlFor={category.id} className="text-sm leading-none cursor-pointer group">
                          <span className="group-hover:text-primary-500">{category.label}</span>
                          <span className="text-gray-500"> ({category.count})</span>
                        </label>
                        {['category-laptop-ipad', 'category-smart-phones-tablets'].includes(category.id) && (
                          <button className="h-4 w-4 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-chevron-down"
                              aria-hidden="true"
                            >
                              <path d="m6 9 6 6 6-6" />
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Range Section */}
              <div className="relative flex flex-col pb-8 lg:pb-10 space-y-5">
                <div className="block-title flex items-center justify-between cursor-pointer">
                  <h3 className="font-medium text-base lg:text-[17px] text-brand-dark">Price range</h3>
                  <button className="h-4 w-4 flex items-center justify-center" aria-label="Collapse price range">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-minus h-4 w-4"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <label htmlFor="min-price" className="block text-sm text-gray-700 mb-1">
                          Min Price
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 start-0 flex items-center ps-3 text-gray-500">$</span>
                          <input
                            type="text"
                            id="min-price"
                            className="block w-full rounded-md border border-gray-300 ps-7 pe-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
                            defaultValue={0}
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <label htmlFor="max-price" className="block text-sm text-gray-700 mb-1">
                          Max Price
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 start-0 flex items-center ps-3 text-gray-500">$</span>
                          <input
                            type="text"
                            id="max-price"
                            className="block w-full rounded-md border border-gray-300 ps-7 pe-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
                            defaultValue={500}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="ml-2">
                      <div className="rc-slider mx-0 rc-slider-horizontal">
                        <div className="rc-slider-rail" style={{ backgroundColor: '#e5e7eb' }} />
                        <div className="rc-slider-track rc-slider-track-1" style={{ left: '0%', width: '50%', backgroundColor: '#3b82f6' }} />
                        <div className="rc-slider-step" />
                        <div
                          className="rc-slider-handle rc-slider-handle-1"
                          style={{ left: '0%', transform: 'translateX(-50%)', borderColor: '#3b82f6', backgroundColor: '#3b82f6' }}
                          tabIndex={0}
                          role="slider"
                          aria-valuemin={0}
                          aria-valuemax={1000}
                          aria-valuenow={0}
                          aria-disabled="false"
                          aria-orientation="horizontal"
                        />
                        <div
                          className="rc-slider-handle rc-slider-handle-2"
                          style={{ left: '50%', transform: 'translateX(-50%)', borderColor: '#3b82f6', backgroundColor: '#3b82f6' }}
                          tabIndex={0}
                          role="slider"
                          aria-valuemin={0}
                          aria-valuemax={1000}
                          aria-valuenow={500}
                          aria-disabled="false"
                          aria-orientation="horizontal"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Colors Section */}
              <div className="relative flex flex-col pb-8 lg:pb-10 space-y-5">
                <div className="block-title flex items-center justify-between cursor-pointer">
                  <h3 className="font-medium text-base lg:text-[17px] text-brand-dark">Colors</h3>
                  <button className="h-4 w-4 flex items-center justify-center" aria-label="Collapse colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-minus h-4 w-4"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="space-y-3">
                    {[
                      { id: 'color-black', label: 'Black', color: '#000000', count: 15 },
                      { id: 'color-orange', label: 'Orange', color: '#ff7e00', count: 12 },
                      { id: 'color-gray', label: 'Gray', color: '#808080', count: 8 },
                      { id: 'color-red', label: 'Red', color: '#FF0000', count: 6 },
                      { id: 'color-blue', label: 'Blue', color: '#0000FF', count: 9 },
                      { id: 'color-green', label: 'Green', color: '#008000', count: 4 },
                    ].map((color) => (
                      <div key={color.id} className="flex items-center">
                        <div className="flex items-center space-x-2">
                          <div className="relative">
                            <input type="checkbox" className="sr-only" id={color.id} />
                            <div className="h-4 w-4 rounded-sm border border-gray-300 flex items-center justify-center bg-white transition-colors duration-200" />
                          </div>
                        </div>
                        <div className="ps-2.5 flex items-center gap-2 w-full">
                          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: color.color }} />
                          <label htmlFor={color.id} className="text-sm leading-none cursor-pointer group">
                            <span className="group-hover:text-primary-500">{color.label}</span>
                            <span className="text-gray-500"> ({color.count})</span>
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* On Sale Toggle */}
              <div className="pb-8 pr-2">
                <div className="flex justify-between items-center space-x-2">
                  <div>
                    <label className="text-base font-medium text-neutral-900 dark:text-neutral-200">On sale!</label>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm">Products currently on sale</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Mobile Filter Button */}
            <div className="lg:w-[150px] p-2 bg-white mb-[5px] lg:hidden">
              <button
                data-variant="border"
                className="group font-medium text-15px leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body text-center justify-center tracking-[0.2px] rounded-md placeholder-white focus-visible:outline-none focus:outline-none text-base border border-gray-400 tracking-widest px-5 py-4 lg:py-4 hover:border-primary-500 hover:text-primary-500 px-5 !py-2 !rounded leading-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="12px"
                  viewBox="0 0 18 14"
                >
                  <g id="Group_36196" data-name="Group 36196" transform="translate(-925 -1122.489)">
                    <path
                      id="Path_22590"
                      data-name="Path 22590"
                      d="M942.581,1295.564H925.419c-.231,0-.419-.336-.419-.75s.187-.75.419-.75h17.163c.231,0,.419.336.419.75S942.813,1295.564,942.581,1295.564Z"
                      transform="translate(0 -169.575)"
                      fill="currentColor"
                    />
                    <path
                      id="Path_22591"
                      data-name="Path 22591"
                      d="M942.581,1951.5H925.419c-.231,0-.419-.336-.419-.75s.187-.75.419-.75h17.163c.231,0,.419.336.419.75S942.813,1951.5,942.581,1951.5Z"
                      transform="translate(0 -816.512)"
                      fill="currentColor"
                    />
                    <path
                      id="Path_22593"
                      data-name="Path 22593"
                      d="M1163.713,1122.489a2.5,2.5,0,1,0,1.768.732A2.483,2.483,0,0,0,1163.713,1122.489Z"
                      transform="translate(-233.213)"
                      fill="currentColor"
                    />
                    <path
                      id="Path_22594"
                      data-name="Path 22594"
                      d="M2344.886,1779.157a2.5,2.5,0,1,0,.731,1.768A2.488,2.488,0,0,0,2344.886,1779.157Z"
                      transform="translate(-1405.617 -646.936)"
                      fill="currentColor"
                    />
                  </g>
                </svg>
                <span className="text-sm ltr:pl-2.5 rtl:pr-2.5">Filter</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Product Grid */}
          <div className="flex-1 px-4 lg:px-6">
          {/* Filter/Sort Controls */}
          <div className="w-full sm:flex items-center justify-between mb-3 filters-panel bg-white p-2">
            <div className="flex items-center w-full justify-between">
              <div className="list-view">
                <div className="btn btn-gridview text-15px">View as:</div>
                <button type="button" id="grid-5" className="btn btn-view grid active">
                  <div>
                    <div className="icon-bar" />
                    <div className="icon-bar" />
                    <div className="icon-bar" />
                  </div>
                </button>
                <button type="button" id="list-view" className="btn btn-view list">
                  <div>
                    <div className="icon-bar" />
                    <div className="icon-bar" />
                    <div className="icon-bar" />
                  </div>
                </button>
              </div>
              <div className="relative ltr:ml-2 rtl:mr-2 lg:ltr:ml-0 lg:rtl:mr-0 min-w-[160px]" data-headlessui-state>
                <div className="flex items-center justify-center">
                  <div className="shrink-0 text-15px ltr:mr-2 rtl:ml-2 text-opacity-70">Sort by:</div>
                  <button
                    className="min-w-[130px] relative w-full text-sm border border-black/10 hover:border-black/50 rounded cursor-pointer p-1.5 px-3 ltr:pr-7 rtl:pl-7 ltr:text-left rtl:text-right focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-brand focus-visible:ring-offset-2 focus-visible:border-indigo-500"
                    id="headlessui-listbox-button-«R2dqkfeqmdb»"
                    type="button"
                    aria-haspopup="listbox"
                    aria-expanded="false"
                    data-headlessui-state
                  >
                    <span className="block truncate">New arrival</span>
                    <span className="absolute flex items-end pointer-events-none top-2 ltr:right-1 rtl:left-1 ltr:pl-1 rtl:pr-1">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 512 512"
                        className="w-3.5 h-3.5 text-brand-muted"
                        aria-hidden="true"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={48}
                          d="m112 184 144 144 144-144"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {/* Row 1 */}
            {/* Product Card 1 with Sale Badge */}
            <article className="flex flex-col md:gap-2 product-card px-2 md:px-3 h-full relative bg-white card-image--jump block">
              <div className="relative flex-shrink-0 z-1 mt-3">
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-20">
                  SALE
                </div>
                <div className="flex justify-center card-img-container overflow-hidden w-full">
                  <div className="relative md:inline-block">
                    <div className="block w-full box-sizing">
                      <svg className="block max-w-full h-auto" xmlns="http://www.w3.org/2000/svg" width="200" height="200" version="1.1"></svg>
                    </div>
                    <img 
                      alt="Gardener Lightly Dried Cilantro" 
                      loading="eager" 
                      width="0" 
                      height="0" 
                      decoding="async" 
                      className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full w-auto h-auto object-cover" 
                      sizes="100vw" 
                      src="/images/product2.png"  
                      style={{ color: 'transparent' }} 
                    />
                  </div>
                </div>
                <div className="w-full h-full absolute top-1 z-10">
                  <button className="hover:bg-primary-400 buttons--quickview px-4 py-2 bg-brand-light rounded-full hover:text-brand-light" aria-label="Quick View Button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-col mb-1.5 overflow-hidden relative items-center text-center">
                
                <a className="group hover:text-primary-500 transition-all ease-in-out duration-500 leading-5 line-clamp-2 mt-1 mb-2 text-brand-dark text-sm min-h-[40px]" href="/product/gardener-lightly-dried-cilantro">
                  Gardener Lightly Dried Cilantro
                </a>
                <div className="flex text-gray-500 space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 16 16" fill="#F3B81F" className="w-3 h-3 mx-px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.55881 0.641809C7.64165 0.473983 7.81256 0.367737 7.99973 0.367737C8.18691 0.367704 8.35785 0.473951 8.44069 0.641777L10.3586 4.52732C10.539 4.89267 10.8875 5.14597 11.2908 5.20453L15.5789 5.82789C15.7642 5.85483 15.918 5.98455 15.9759 6.16256C16.0337 6.34055 15.9855 6.53597 15.8515 6.66663L12.7488 9.69142C12.457 9.97588 12.3239 10.3856 12.3927 10.7872L13.1248 15.0574C13.1564 15.2419 13.0806 15.4283 12.9292 15.5382C12.7778 15.6483 12.577 15.6627 12.4114 15.5756L8.57586 13.5596C8.21521 13.37 7.78435 13.37 7.42364 13.5597L3.58848 15.5756C3.4228 15.6627 3.22205 15.6481 3.07065 15.5382C2.91922 15.4281 2.84342 15.2417 2.87504 15.0573L3.60747 10.7874C3.67638 10.3857 3.54323 9.97588 3.2514 9.69135L0.148505 6.66666C0.0145037 6.536 -0.0337665 6.34058 0.0240798 6.1626C0.0819262 5.98461 0.235794 5.85489 0.421019 5.82792L4.70905 5.20459C5.11229 5.14597 5.46089 4.8927 5.64125 4.52729L7.55881 0.641809Z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[13px] leading-4">(2 reviews)</span>
                </div>
                <div className="space-s-2 mt-2 mb-4">
                  <span className="text-red-500 inline-block font-medium">$2.64</span>
                  <span className="text-gray-500 line-through text-sm">$2.99</span>
                </div>
                <div className="product-cart-button flex justify-center">
                  <button className="min-w-[150px] px-4 py-2 flex relative leading-6 font-medium text-brand-light rounded-full text-[13px] items-center justify-center transition-all bg-primary-500 hover:bg-primary-400" aria-label="Count Button">
                    Add To Cart
                  </button>
                </div>
              </div>
            </article>

            {/* Product Card 2 with Sale Badge */}
            <article className="flex flex-col md:gap-2 product-card px-2 md:px-3 h-full relative bg-white card-image--jump block">
              <div className="relative flex-shrink-0 z-1 mt-3">
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-20">
                  SALE
                </div>
                <div className="flex justify-center card-img-container overflow-hidden w-full">
                  <div className="relative md:inline-block">
                    <div className="block w-full box-sizing">
                      <svg className="block max-w-full h-auto" xmlns="http://www.w3.org/2000/svg" width="200" height="200" version="1.1"></svg>
                    </div>
                    <img 
                      alt="Nabisco Nilla Wafers" 
                      loading="eager" 
                      width="0" 
                      height="0" 
                      decoding="async" 
                      className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full w-auto h-auto object-cover" 
                      sizes="100vw" 
                      src="/images/product4.png" 
                      style={{ color: 'transparent' }} 
                    />
                  </div>
                </div>
                <div className="w-full h-full absolute top-1 z-10">
                  <button className="hover:bg-primary-400 buttons--quickview px-4 py-2 bg-brand-light rounded-full hover:text-brand-light" aria-label="Quick View Button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-col mb-1.5 overflow-hidden relative items-center text-center">
                
                <a className="group hover:text-primary-500 transition-all ease-in-out duration-500 leading-5 line-clamp-2 mt-1 mb-2 text-brand-dark text-sm min-h-[40px]" href="/product/nabisco-nilla-wafers">
                  Nabisco Nilla Wafers
                </a>
                <div className="flex text-gray-500 space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 16 16" fill="#F3B81F" className="w-3 h-3 mx-px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.55881 0.641809C7.64165 0.473983 7.81256 0.367737 7.99973 0.367737C8.18691 0.367704 8.35785 0.473951 8.44069 0.641777L10.3586 4.52732C10.539 4.89267 10.8875 5.14597 11.2908 5.20453L15.5789 5.82789C15.7642 5.85483 15.918 5.98455 15.9759 6.16256C16.0337 6.34055 15.9855 6.53597 15.8515 6.66663L12.7488 9.69142C12.457 9.97588 12.3239 10.3856 12.3927 10.7872L13.1248 15.0574C13.1564 15.2419 13.0806 15.4283 12.9292 15.5382C12.7778 15.6483 12.577 15.6627 12.4114 15.5756L8.57586 13.5596C8.21521 13.37 7.78435 13.37 7.42364 13.5597L3.58848 15.5756C3.4228 15.6627 3.22205 15.6481 3.07065 15.5382C2.91922 15.4281 2.84342 15.2417 2.87504 15.0573L3.60747 10.7874C3.67638 10.3857 3.54323 9.97588 3.2514 9.69135L0.148505 6.66666C0.0145037 6.536 -0.0337665 6.34058 0.0240798 6.1626C0.0819262 5.98461 0.235794 5.85489 0.421019 5.82792L4.70905 5.20459C5.11229 5.14597 5.46089 4.8927 5.64125 4.52729L7.55881 0.641809Z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[13px] leading-4">(2 reviews)</span>
                </div>
                <div className="space-s-2 mt-2 mb-4">
                  <span className="text-primary-500 inline-block font-medium">$15.00 - $25.00</span>
                </div>
                <div className="product-cart-button flex justify-center">
                  <a className="group inline-block text-center min-w-[150px] flex px-4 py-2 relative leading-6 text-brand-light font-medium rounded-full text-[13px] transition-all bg-primary-500 hover:bg-primary-400" href="/product/nabisco-nilla-wafers">
                    Choose Options
                  </a>
                </div>
              </div>
            </article>

            {/* Product Card 3 */}
            <article className="flex flex-col md:gap-2 product-card px-2 md:px-3 h-full relative bg-white card-image--jump block">
              <div className="relative flex-shrink-0 z-1 mt-3">
                <div className="flex justify-center card-img-container overflow-hidden w-full">
                  <div className="relative md:inline-block">
                    <div className="block w-full box-sizing">
                      <svg className="block max-w-full h-auto" xmlns="http://www.w3.org/2000/svg" width="200" height="200" version="1.1"></svg>
                    </div>
                    <img 
                      alt="Tate's Bake Shop Cookies, Gluten Free" 
                      loading="eager" 
                      width="0" 
                      height="0" 
                      decoding="async" 
                      className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full w-auto h-auto object-cover" 
                      sizes="100vw" 
                      src="/images/product5.png"  
                      style={{ color: 'transparent' }} 
                    />
                  </div>
                </div>
                <div className="w-full h-full absolute top-1 z-10">
                  <button className="hover:bg-primary-400 buttons--quickview px-4 py-2 bg-brand-light rounded-full hover:text-brand-light" aria-label="Quick View Button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-col mb-1.5 overflow-hidden relative items-center text-center">
                <a className="group hover:text-primary-500 transition-all ease-in-out duration-500 leading-5 line-clamp-2 mt-1 mb-2 text-brand-dark text-sm min-h-[40px]" href="/product/tates-bake-shop-cookies-gluten-free">
                  Tate's Bake Shop Cookies, Gluten Free...
                </a>
                <div className="flex text-gray-500 space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 16 16" fill="#F3B81F" className="w-3 h-3 mx-px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.55881 0.641809C7.64165 0.473983 7.81256 0.367737 7.99973 0.367737C8.18691 0.367704 8.35785 0.473951 8.44069 0.641777L10.3586 4.52732C10.539 4.89267 10.8875 5.14597 11.2908 5.20453L15.5789 5.82789C15.7642 5.85483 15.918 5.98455 15.9759 6.16256C16.0337 6.34055 15.9855 6.53597 15.8515 6.66663L12.7488 9.69142C12.457 9.97588 12.3239 10.3856 12.3927 10.7872L13.1248 15.0574C13.1564 15.2419 13.0806 15.4283 12.9292 15.5382C12.7778 15.6483 12.577 15.6627 12.4114 15.5756L8.57586 13.5596C8.21521 13.37 7.78435 13.37 7.42364 13.5597L3.58848 15.5756C3.4228 15.6627 3.22205 15.6481 3.07065 15.5382C2.91922 15.4281 2.84342 15.2417 2.87504 15.0573L3.60747 10.7874C3.67638 10.3857 3.54323 9.97588 3.2514 9.69135L0.148505 6.66666C0.0145037 6.536 -0.0337665 6.34058 0.0240798 6.1626C0.0819262 5.98461 0.235794 5.85489 0.421019 5.82792L4.70905 5.20459C5.11229 5.14597 5.46089 4.8927 5.64125 4.52729L7.55881 0.641809Z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[13px] leading-4">(2 reviews)</span>
                </div>
                <div className="space-s-2 mt-2 mb-4">
                  <span className="text-primary-500 inline-block font-medium">$25.00 - $50.00</span>
                </div>
                <div className="product-cart-button flex justify-center">
                  <a className="group inline-block text-center min-w-[150px] flex px-4 py-2 relative leading-6 text-brand-light font-medium rounded-full text-[13px] transition-all bg-primary-500 hover:bg-primary-400" href="/product/tates-bake-shop-cookies-gluten-free">
                    Choose Options
                  </a>
                </div>
              </div>
            </article>

            {/* Row 2 */}
            {/* Product Card 4 */}
            <article className="flex flex-col md:gap-2 product-card px-2 md:px-3 h-full relative bg-white card-image--jump block">
              <div className="relative flex-shrink-0 z-1 mt-3">
                <div className="flex justify-center card-img-container overflow-hidden w-full">
                  <div className="relative md:inline-block">
                    <div className="block w-full box-sizing">
                      <svg className="block max-w-full h-auto" xmlns="http://www.w3.org/2000/svg" width="200" height="200" version="1.1"></svg>
                    </div>
                    <img 
                      alt="11 Le Parfait Jar" 
                      loading="eager" 
                      width="0" 
                      height="0" 
                      decoding="async" 
                      className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full w-auto h-auto object-cover" 
                      sizes="100vw" 
                      src="/images/product6.png" 
                      style={{ color: 'transparent' }} 
                    />
                  </div>
                </div>
                <div className="w-full h-full absolute top-1 z-10">
                  <button className="hover:bg-primary-400 buttons--quickview px-4 py-2 bg-brand-light rounded-full hover:text-brand-light" aria-label="Quick View Button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-col mb-1.5 overflow-hidden relative items-center text-center">
                
                <a className="group hover:text-primary-500 transition-all ease-in-out duration-500 leading-5 line-clamp-2 mt-1 mb-2 text-brand-dark text-sm min-h-[40px]" href="/product/11-le-parfait-jar">
                  [Sample] 11 Le Parfait Jar consetetur...
                </a>
                <div className="flex text-gray-500 space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 16 16" fill="#F3B81F" className="w-3 h-3 mx-px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.55881 0.641809C7.64165 0.473983 7.81256 0.367737 7.99973 0.367737C8.18691 0.367704 8.35785 0.473951 8.44069 0.641777L10.3586 4.52732C10.539 4.89267 10.8875 5.14597 11.2908 5.20453L15.5789 5.82789C15.7642 5.85483 15.918 5.98455 15.9759 6.16256C16.0337 6.34055 15.9855 6.53597 15.8515 6.66663L12.7488 9.69142C12.457 9.97588 12.3239 10.3856 12.3927 10.7872L13.1248 15.0574C13.1564 15.2419 13.0806 15.4283 12.9292 15.5382C12.7778 15.6483 12.577 15.6627 12.4114 15.5756L8.57586 13.5596C8.21521 13.37 7.78435 13.37 7.42364 13.5597L3.58848 15.5756C3.4228 15.6627 3.22205 15.6481 3.07065 15.5382C2.91922 15.4281 2.84342 15.2417 2.87504 15.0573L3.60747 10.7874C3.67638 10.3857 3.54323 9.97588 3.2514 9.69135L0.148505 6.66666C0.0145037 6.536 -0.0337665 6.34058 0.0240798 6.1626C0.0819262 5.98461 0.235794 5.85489 0.421019 5.82792L4.70905 5.20459C5.11229 5.14597 5.46089 4.8927 5.64125 4.52729L7.55881 0.641809Z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[13px] leading-4">(2 reviews)</span>
                </div>
                <div className="space-s-2 mt-2 mb-4">
                  <span className="text-primary-500 inline-block font-medium">Choose Options</span>
                </div>
                <div className="product-cart-button flex justify-center">
                  <a className="group inline-block text-center min-w-[150px] flex px-4 py-2 relative leading-6 text-brand-light font-medium rounded-full text-[13px] transition-all bg-primary-500 hover:bg-primary-400" href="/product/11-le-parfait-jar">
                    Choose Options
                  </a>
                </div>
              </div>
            </article>

            {/* Product Card 5 */}
            <article className="flex flex-col md:gap-2 product-card px-2 md:px-3 h-full relative bg-white card-image--jump block">
              <div className="relative flex-shrink-0 z-1 mt-3">
                <div className="flex justify-center card-img-container overflow-hidden w-full">
                  <div className="relative md:inline-block">
                    <div className="block w-full box-sizing">
                      <svg className="block max-w-full h-auto" xmlns="http://www.w3.org/2000/svg" width="200" height="200" version="1.1"></svg>
                    </div>
                    <img 
                      alt="Save Banner" 
                      loading="eager" 
                      width="0" 
                      height="0" 
                      decoding="async" 
                      className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full w-auto h-auto object-cover" 
                      sizes="100vw" 
                      src="/images/product2.png" 
                      style={{ color: 'transparent' }} 
                    />
                  </div>
                </div>
                <div className="w-full h-full absolute top-1 z-10">
                  <button className="hover:bg-primary-400 buttons--quickview px-4 py-2 bg-brand-light rounded-full hover:text-brand-light" aria-label="Quick View Button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-col mb-1.5 overflow-hidden relative items-center text-center">
                
                <a className="group hover:text-primary-500 transition-all ease-in-out duration-500 leading-5 line-clamp-2 mt-1 mb-2 text-brand-dark text-sm min-h-[40px]" href="/product/pepperidge-farm-milano-mint-chocolate">
                  Pepperidge Farm® Milano® Mint Chocolate
                </a>
                <div className="flex text-gray-500 space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 16 16" fill="#F3B81F" className="w-3 h-3 mx-px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.55881 0.641809C7.64165 0.473983 7.81256 0.367737 7.99973 0.367737C8.18691 0.367704 8.35785 0.473951 8.44069 0.641777L10.3586 4.52732C10.539 4.89267 10.8875 5.14597 11.2908 5.20453L15.5789 5.82789C15.7642 5.85483 15.918 5.98455 15.9759 6.16256C16.0337 6.34055 15.9855 6.53597 15.8515 6.66663L12.7488 9.69142C12.457 9.97588 12.3239 10.3856 12.3927 10.7872L13.1248 15.0574C13.1564 15.2419 13.0806 15.4283 12.9292 15.5382C12.7778 15.6483 12.577 15.6627 12.4114 15.5756L8.57586 13.5596C8.21521 13.37 7.78435 13.37 7.42364 13.5597L3.58848 15.5756C3.4228 15.6627 3.22205 15.6481 3.07065 15.5382C2.91922 15.4281 2.84342 15.2417 2.87504 15.0573L3.60747 10.7874C3.67638 10.3857 3.54323 9.97588 3.2514 9.69135L0.148505 6.66666C0.0145037 6.536 -0.0337665 6.34058 0.0240798 6.1626C0.0819262 5.98461 0.235794 5.85489 0.421019 5.82792L4.70905 5.20459C5.11229 5.14597 5.46089 4.8927 5.64125 4.52729L7.55881 0.641809Z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[13px] leading-4">(2 reviews)</span>
                </div>
                <div className="space-s-2 mt-2 mb-4">
                  <span className="text-primary-500 inline-block font-medium">$10.00 - $15.00</span>
                </div>
                <div className="product-cart-button flex justify-center">
                  <a className="group inline-block text-center min-w-[150px] flex px-4 py-2 relative leading-6 text-brand-light font-medium rounded-full text-[13px] transition-all bg-primary-500 hover:bg-primary-400" href="/product/pepperidge-farm-milano-mint-chocolate">
                    Choose Options
                  </a>
                </div>
              </div>
            </article>

            {/* Product Card 6 */}
            <article className="flex flex-col md:gap-2 product-card px-2 md:px-3 h-full relative bg-white card-image--jump block">
              <div className="relative flex-shrink-0 z-1 mt-3">
                <div className="flex justify-center card-img-container overflow-hidden w-full">
                  <div className="relative md:inline-block">
                    <div className="block w-full box-sizing">
                      <svg className="block max-w-full h-auto" xmlns="http://www.w3.org/2000/svg" width="200" height="200" version="1.1"></svg>
                    </div>
                    <img 
                      alt="Pepperidge Farm Milano Mint Chocolate" 
                      loading="eager" 
                      width="0" 
                      height="0" 
                      decoding="async" 
                      className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full w-auto h-auto object-cover" 
                      sizes="100vw" 
                      src="/images/product7.png" 
                      style={{ color: 'transparent' }} 
                    />
                  </div>
                </div>
                <div className="w-full h-full absolute top-1 z-10">
                  <button className="hover:bg-primary-400 buttons--quickview px-4 py-2 bg-brand-light rounded-full hover:text-brand-light" aria-label="Quick View Button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-col mb-1.5 overflow-hidden relative items-center text-center">
                
                <a className="group hover:text-primary-500 transition-all ease-in-out duration-500 leading-5 line-clamp-2 mt-1 mb-2 text-brand-dark text-sm min-h-[40px]" href="/product/pepperidge-farm-milano-mint-chocolate">
                  Pepperidge Farm® Milano® Mint Chocolate
                </a>
                <div className="flex text-gray-500 space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 16 16" fill="#F3B81F" className="w-3 h-3 mx-px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.55881 0.641809C7.64165 0.473983 7.81256 0.367737 7.99973 0.367737C8.18691 0.367704 8.35785 0.473951 8.44069 0.641777L10.3586 4.52732C10.539 4.89267 10.8875 5.14597 11.2908 5.20453L15.5789 5.82789C15.7642 5.85483 15.918 5.98455 15.9759 6.16256C16.0337 6.34055 15.9855 6.53597 15.8515 6.66663L12.7488 9.69142C12.457 9.97588 12.3239 10.3856 12.3927 10.7872L13.1248 15.0574C13.1564 15.2419 13.0806 15.4283 12.9292 15.5382C12.7778 15.6483 12.577 15.6627 12.4114 15.5756L8.57586 13.5596C8.21521 13.37 7.78435 13.37 7.42364 13.5597L3.58848 15.5756C3.4228 15.6627 3.22205 15.6481 3.07065 15.5382C2.91922 15.4281 2.84342 15.2417 2.87504 15.0573L3.60747 10.7874C3.67638 10.3857 3.54323 9.97588 3.2514 9.69135L0.148505 6.66666C0.0145037 6.536 -0.0337665 6.34058 0.0240798 6.1626C0.0819262 5.98461 0.235794 5.85489 0.421019 5.82792L4.70905 5.20459C5.11229 5.14597 5.46089 4.8927 5.64125 4.52729L7.55881 0.641809Z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[13px] leading-4">(2 reviews)</span>
                </div>
                <div className="space-s-2 mt-2 mb-4">
                  <span className="text-primary-500 inline-block font-medium">$10.00 - $15.00</span>
                </div>
                <div className="product-cart-button flex justify-center">
                  <a className="group inline-block text-center min-w-[150px] flex px-4 py-2 relative leading-6 text-brand-light font-medium rounded-full text-[13px] transition-all bg-primary-500 hover:bg-primary-400" href="/product/pepperidge-farm-milano-mint-chocolate">
                    Choose Options
                  </a>
                </div>
              </div>
            </article>
             <article className="flex flex-col md:gap-2 product-card px-2 md:px-3 h-full relative bg-white card-image--jump block">
              <div className="relative flex-shrink-0 z-1 mt-3">
                <div className="flex justify-center card-img-container overflow-hidden w-full">
                  <div className="relative md:inline-block">
                    <div className="block w-full box-sizing">
                      <svg className="block max-w-full h-auto" xmlns="http://www.w3.org/2000/svg" width="200" height="200" version="1.1"></svg>
                    </div>
                    <img 
                      alt="Pepperidge Farm Milano Mint Chocolate" 
                      loading="eager" 
                      width="0" 
                      height="0" 
                      decoding="async" 
                      className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full w-auto h-auto object-cover" 
                      sizes="100vw" 
                      src="/images/product8.png" 
                      style={{ color: 'transparent' }} 
                    />
                  </div>
                </div>
                <div className="w-full h-full absolute top-1 z-10">
                  <button className="hover:bg-primary-400 buttons--quickview px-4 py-2 bg-brand-light rounded-full hover:text-brand-light" aria-label="Quick View Button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-col mb-1.5 overflow-hidden relative items-center text-center">
                
                <a className="group hover:text-primary-500 transition-all ease-in-out duration-500 leading-5 line-clamp-2 mt-1 mb-2 text-brand-dark text-sm min-h-[40px]" href="/product/pepperidge-farm-milano-mint-chocolate">
                  Pepperidge Farm® Milano® Mint Chocolate
                </a>
                <div className="flex text-gray-500 space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 16 16" fill="#F3B81F" className="w-3 h-3 mx-px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.55881 0.641809C7.64165 0.473983 7.81256 0.367737 7.99973 0.367737C8.18691 0.367704 8.35785 0.473951 8.44069 0.641777L10.3586 4.52732C10.539 4.89267 10.8875 5.14597 11.2908 5.20453L15.5789 5.82789C15.7642 5.85483 15.918 5.98455 15.9759 6.16256C16.0337 6.34055 15.9855 6.53597 15.8515 6.66663L12.7488 9.69142C12.457 9.97588 12.3239 10.3856 12.3927 10.7872L13.1248 15.0574C13.1564 15.2419 13.0806 15.4283 12.9292 15.5382C12.7778 15.6483 12.577 15.6627 12.4114 15.5756L8.57586 13.5596C8.21521 13.37 7.78435 13.37 7.42364 13.5597L3.58848 15.5756C3.4228 15.6627 3.22205 15.6481 3.07065 15.5382C2.91922 15.4281 2.84342 15.2417 2.87504 15.0573L3.60747 10.7874C3.67638 10.3857 3.54323 9.97588 3.2514 9.69135L0.148505 6.66666C0.0145037 6.536 -0.0337665 6.34058 0.0240798 6.1626C0.0819262 5.98461 0.235794 5.85489 0.421019 5.82792L4.70905 5.20459C5.11229 5.14597 5.46089 4.8927 5.64125 4.52729L7.55881 0.641809Z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[13px] leading-4">(2 reviews)</span>
                </div>
                <div className="space-s-2 mt-2 mb-4">
                  <span className="text-primary-500 inline-block font-medium">$10.00 - $15.00</span>
                </div>
                <div className="product-cart-button flex justify-center">
                  <a className="group inline-block text-center min-w-[150px] flex px-4 py-2 relative leading-6 text-brand-light font-medium rounded-full text-[13px] transition-all bg-primary-500 hover:bg-primary-400" href="/product/pepperidge-farm-milano-mint-chocolate">
                    Choose Options
                  </a>
                </div>
              </div>
            </article>

             <article className="flex flex-col md:gap-2 product-card px-2 md:px-3 h-full relative bg-white card-image--jump block">
              <div className="relative flex-shrink-0 z-1 mt-3">
                <div className="flex justify-center card-img-container overflow-hidden w-full">
                  <div className="relative md:inline-block">
                    <div className="block w-full box-sizing">
                      <svg className="block max-w-full h-auto" xmlns="http://www.w3.org/2000/svg" width="200" height="200" version="1.1"></svg>
                    </div>
                    <img 
                      alt="Pepperidge Farm Milano Mint Chocolate" 
                      loading="eager" 
                      width="0" 
                      height="0" 
                      decoding="async" 
                      className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full w-auto h-auto object-cover" 
                      sizes="100vw" 
                      src="/images/product3.png" 
                      style={{ color: 'transparent' }} 
                    />
                  </div>
                </div>
                <div className="w-full h-full absolute top-1 z-10">
                  <button className="hover:bg-primary-400 buttons--quickview px-4 py-2 bg-brand-light rounded-full hover:text-brand-light" aria-label="Quick View Button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-col mb-1.5 overflow-hidden relative items-center text-center">
                
                <a className="group hover:text-primary-500 transition-all ease-in-out duration-500 leading-5 line-clamp-2 mt-1 mb-2 text-brand-dark text-sm min-h-[40px]" href="/product/pepperidge-farm-milano-mint-chocolate">
                  Pepperidge Farm® Milano® Mint Chocolate
                </a>
                <div className="flex text-gray-500 space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 16 16" fill="#F3B81F" className="w-3 h-3 mx-px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.55881 0.641809C7.64165 0.473983 7.81256 0.367737 7.99973 0.367737C8.18691 0.367704 8.35785 0.473951 8.44069 0.641777L10.3586 4.52732C10.539 4.89267 10.8875 5.14597 11.2908 5.20453L15.5789 5.82789C15.7642 5.85483 15.918 5.98455 15.9759 6.16256C16.0337 6.34055 15.9855 6.53597 15.8515 6.66663L12.7488 9.69142C12.457 9.97588 12.3239 10.3856 12.3927 10.7872L13.1248 15.0574C13.1564 15.2419 13.0806 15.4283 12.9292 15.5382C12.7778 15.6483 12.577 15.6627 12.4114 15.5756L8.57586 13.5596C8.21521 13.37 7.78435 13.37 7.42364 13.5597L3.58848 15.5756C3.4228 15.6627 3.22205 15.6481 3.07065 15.5382C2.91922 15.4281 2.84342 15.2417 2.87504 15.0573L3.60747 10.7874C3.67638 10.3857 3.54323 9.97588 3.2514 9.69135L0.148505 6.66666C0.0145037 6.536 -0.0337665 6.34058 0.0240798 6.1626C0.0819262 5.98461 0.235794 5.85489 0.421019 5.82792L4.70905 5.20459C5.11229 5.14597 5.46089 4.8927 5.64125 4.52729L7.55881 0.641809Z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[13px] leading-4">(2 reviews)</span>
                </div>
                <div className="space-s-2 mt-2 mb-4">
                  <span className="text-primary-500 inline-block font-medium">$10.00 - $15.00</span>
                </div>
                <div className="product-cart-button flex justify-center">
                  <a className="group inline-block text-center min-w-[150px] flex px-4 py-2 relative leading-6 text-brand-light font-medium rounded-full text-[13px] transition-all bg-primary-500 hover:bg-primary-400" href="/product/pepperidge-farm-milano-mint-chocolate">
                    Choose Options
                  </a>
                </div>
              </div>
            </article>

             <article className="flex flex-col md:gap-2 product-card px-2 md:px-3 h-full relative bg-white card-image--jump block">
              <div className="relative flex-shrink-0 z-1 mt-3">
                <div className="flex justify-center card-img-container overflow-hidden w-full">
                  <div className="relative md:inline-block">
                    <div className="block w-full box-sizing">
                      <svg className="block max-w-full h-auto" xmlns="http://www.w3.org/2000/svg" width="200" height="200" version="1.1"></svg>
                    </div>
                    <img 
                      alt="Pepperidge Farm Milano Mint Chocolate" 
                      loading="eager" 
                      width="0" 
                      height="0" 
                      decoding="async" 
                      className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full w-auto h-auto object-cover" 
                      sizes="100vw" 
                      src="/images/product9.png"  
                      style={{ color: 'transparent' }} 
                    />
                  </div>
                </div>
                <div className="w-full h-full absolute top-1 z-10">
                  <button className="hover:bg-primary-400 buttons--quickview px-4 py-2 bg-brand-light rounded-full hover:text-brand-light" aria-label="Quick View Button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-col mb-1.5 overflow-hidden relative items-center text-center">
                
                <a className="group hover:text-primary-500 transition-all ease-in-out duration-500 leading-5 line-clamp-2 mt-1 mb-2 text-brand-dark text-sm min-h-[40px]" href="/product/pepperidge-farm-milano-mint-chocolate">
                  Pepperidge Farm® Milano® Mint Chocolate
                </a>
                <div className="flex text-gray-500 space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 16 16" fill="#F3B81F" className="w-3 h-3 mx-px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.55881 0.641809C7.64165 0.473983 7.81256 0.367737 7.99973 0.367737C8.18691 0.367704 8.35785 0.473951 8.44069 0.641777L10.3586 4.52732C10.539 4.89267 10.8875 5.14597 11.2908 5.20453L15.5789 5.82789C15.7642 5.85483 15.918 5.98455 15.9759 6.16256C16.0337 6.34055 15.9855 6.53597 15.8515 6.66663L12.7488 9.69142C12.457 9.97588 12.3239 10.3856 12.3927 10.7872L13.1248 15.0574C13.1564 15.2419 13.0806 15.4283 12.9292 15.5382C12.7778 15.6483 12.577 15.6627 12.4114 15.5756L8.57586 13.5596C8.21521 13.37 7.78435 13.37 7.42364 13.5597L3.58848 15.5756C3.4228 15.6627 3.22205 15.6481 3.07065 15.5382C2.91922 15.4281 2.84342 15.2417 2.87504 15.0573L3.60747 10.7874C3.67638 10.3857 3.54323 9.97588 3.2514 9.69135L0.148505 6.66666C0.0145037 6.536 -0.0337665 6.34058 0.0240798 6.1626C0.0819262 5.98461 0.235794 5.85489 0.421019 5.82792L4.70905 5.20459C5.11229 5.14597 5.46089 4.8927 5.64125 4.52729L7.55881 0.641809Z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[13px] leading-4">(2 reviews)</span>
                </div>
                <div className="space-s-2 mt-2 mb-4">
                  <span className="text-primary-500 inline-block font-medium">$10.00 - $15.00</span>
                </div>
                <div className="product-cart-button flex justify-center">
                  <a className="group inline-block text-center min-w-[150px] flex px-4 py-2 relative leading-6 text-brand-light font-medium rounded-full text-[13px] transition-all bg-primary-500 hover:bg-primary-400" href="/product/pepperidge-farm-milano-mint-chocolate">
                    Choose Options
                  </a>
                </div>
              </div>
            </article>

             <article className="flex flex-col md:gap-2 product-card px-2 md:px-3 h-full relative bg-white card-image--jump block">
              <div className="relative flex-shrink-0 z-1 mt-3">
                <div className="flex justify-center card-img-container overflow-hidden w-full">
                  <div className="relative md:inline-block">
                    <div className="block w-full box-sizing">
                      <svg className="block max-w-full h-auto" xmlns="http://www.w3.org/2000/svg" width="200" height="200" version="1.1"></svg>
                    </div>
                    <img 
                      alt="Pepperidge Farm Milano Mint Chocolate" 
                      loading="eager" 
                      width="0" 
                      height="0" 
                      decoding="async" 
                      className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full w-auto h-auto object-cover" 
                      sizes="100vw" 
                      src="/images/product1.png" 
                      style={{ color: 'transparent' }} 
                    />
                  </div>
                </div>
                <div className="w-full h-full absolute top-1 z-10">
                  <button className="hover:bg-primary-400 buttons--quickview px-4 py-2 bg-brand-light rounded-full hover:text-brand-light" aria-label="Quick View Button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-col mb-1.5 overflow-hidden relative items-center text-center">
                
                <a className="group hover:text-primary-500 transition-all ease-in-out duration-500 leading-5 line-clamp-2 mt-1 mb-2 text-brand-dark text-sm min-h-[40px]" href="/product/pepperidge-farm-milano-mint-chocolate">
                  Pepperidge Farm® Milano® Mint Chocolate
                </a>
                <div className="flex text-gray-500 space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 16 16" fill="#F3B81F" className="w-3 h-3 mx-px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.55881 0.641809C7.64165 0.473983 7.81256 0.367737 7.99973 0.367737C8.18691 0.367704 8.35785 0.473951 8.44069 0.641777L10.3586 4.52732C10.539 4.89267 10.8875 5.14597 11.2908 5.20453L15.5789 5.82789C15.7642 5.85483 15.918 5.98455 15.9759 6.16256C16.0337 6.34055 15.9855 6.53597 15.8515 6.66663L12.7488 9.69142C12.457 9.97588 12.3239 10.3856 12.3927 10.7872L13.1248 15.0574C13.1564 15.2419 13.0806 15.4283 12.9292 15.5382C12.7778 15.6483 12.577 15.6627 12.4114 15.5756L8.57586 13.5596C8.21521 13.37 7.78435 13.37 7.42364 13.5597L3.58848 15.5756C3.4228 15.6627 3.22205 15.6481 3.07065 15.5382C2.91922 15.4281 2.84342 15.2417 2.87504 15.0573L3.60747 10.7874C3.67638 10.3857 3.54323 9.97588 3.2514 9.69135L0.148505 6.66666C0.0145037 6.536 -0.0337665 6.34058 0.0240798 6.1626C0.0819262 5.98461 0.235794 5.85489 0.421019 5.82792L4.70905 5.20459C5.11229 5.14597 5.46089 4.8927 5.64125 4.52729L7.55881 0.641809Z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[13px] leading-4">(2 reviews)</span>
                </div>
                <div className="space-s-2 mt-2 mb-4">
                  <span className="text-primary-500 inline-block font-medium">$10.00 - $15.00</span>
                </div>
                <div className="product-cart-button flex justify-center">
                  <a className="group inline-block text-center min-w-[150px] flex px-4 py-2 relative leading-6 text-brand-light font-medium rounded-full text-[13px] transition-all bg-primary-500 hover:bg-primary-400" href="/product/pepperidge-farm-milano-mint-chocolate">
                    Choose Options
                  </a>
                </div>
              </div>
            </article>


             <article className="flex flex-col md:gap-2 product-card px-2 md:px-3 h-full relative bg-white card-image--jump block">
              <div className="relative flex-shrink-0 z-1 mt-3">
                <div className="flex justify-center card-img-container overflow-hidden w-full">
                  <div className="relative md:inline-block">
                    <div className="block w-full box-sizing">
                      <svg className="block max-w-full h-auto" xmlns="http://www.w3.org/2000/svg" width="200" height="200" version="1.1"></svg>
                    </div>
                    <img 
                      alt="Pepperidge Farm Milano Mint Chocolate" 
                      loading="eager" 
                      width="0" 
                      height="0" 
                      decoding="async" 
                      className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full w-auto h-auto object-cover" 
                      sizes="100vw" 
                      src="/images/product2.png" 
                      style={{ color: 'transparent' }} 
                    />
                  </div>
                </div>
                <div className="w-full h-full absolute top-1 z-10">
                  <button className="hover:bg-primary-400 buttons--quickview px-4 py-2 bg-brand-light rounded-full hover:text-brand-light" aria-label="Quick View Button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-col mb-1.5 overflow-hidden relative items-center text-center">
                
                <a className="group hover:text-primary-500 transition-all ease-in-out duration-500 leading-5 line-clamp-2 mt-1 mb-2 text-brand-dark text-sm min-h-[40px]" href="/product/pepperidge-farm-milano-mint-chocolate">
                  Pepperidge Farm® Milano® Mint Chocolate
                </a>
                <div className="flex text-gray-500 space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 16 16" fill="#F3B81F" className="w-3 h-3 mx-px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.55881 0.641809C7.64165 0.473983 7.81256 0.367737 7.99973 0.367737C8.18691 0.367704 8.35785 0.473951 8.44069 0.641777L10.3586 4.52732C10.539 4.89267 10.8875 5.14597 11.2908 5.20453L15.5789 5.82789C15.7642 5.85483 15.918 5.98455 15.9759 6.16256C16.0337 6.34055 15.9855 6.53597 15.8515 6.66663L12.7488 9.69142C12.457 9.97588 12.3239 10.3856 12.3927 10.7872L13.1248 15.0574C13.1564 15.2419 13.0806 15.4283 12.9292 15.5382C12.7778 15.6483 12.577 15.6627 12.4114 15.5756L8.57586 13.5596C8.21521 13.37 7.78435 13.37 7.42364 13.5597L3.58848 15.5756C3.4228 15.6627 3.22205 15.6481 3.07065 15.5382C2.91922 15.4281 2.84342 15.2417 2.87504 15.0573L3.60747 10.7874C3.67638 10.3857 3.54323 9.97588 3.2514 9.69135L0.148505 6.66666C0.0145037 6.536 -0.0337665 6.34058 0.0240798 6.1626C0.0819262 5.98461 0.235794 5.85489 0.421019 5.82792L4.70905 5.20459C5.11229 5.14597 5.46089 4.8927 5.64125 4.52729L7.55881 0.641809Z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[13px] leading-4">(2 reviews)</span>
                </div>
                <div className="space-s-2 mt-2 mb-4">
                  <span className="text-primary-500 inline-block font-medium">$10.00 - $15.00</span>
                </div>
                <div className="product-cart-button flex justify-center">
                  <a className="group inline-block text-center min-w-[150px] flex px-4 py-2 relative leading-6 text-brand-light font-medium rounded-full text-[13px] transition-all bg-primary-500 hover:bg-primary-400" href="/product/pepperidge-farm-milano-mint-chocolate">
                    Choose Options
                  </a>
                </div>
              </div>
            </article>

             <article className="flex flex-col md:gap-2 product-card px-2 md:px-3 h-full relative bg-white card-image--jump block">
              <div className="relative flex-shrink-0 z-1 mt-3">
                <div className="flex justify-center card-img-container overflow-hidden w-full">
                  <div className="relative md:inline-block">
                    <div className="block w-full box-sizing">
                      <svg className="block max-w-full h-auto" xmlns="http://www.w3.org/2000/svg" width="200" height="200" version="1.1"></svg>
                    </div>
                    <img 
                      alt="Pepperidge Farm Milano Mint Chocolate" 
                      loading="eager" 
                      width="0" 
                      height="0" 
                      decoding="async" 
                      className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full w-auto h-auto object-cover" 
                      sizes="100vw" 
                      src="/images/product3.png"  
                      style={{ color: 'transparent' }} 
                    />
                  </div>
                </div>
                <div className="w-full h-full absolute top-1 z-10">
                  <button className="hover:bg-primary-400 buttons--quickview px-4 py-2 bg-brand-light rounded-full hover:text-brand-light" aria-label="Quick View Button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-col mb-1.5 overflow-hidden relative items-center text-center">
                
                <a className="group hover:text-primary-500 transition-all ease-in-out duration-500 leading-5 line-clamp-2 mt-1 mb-2 text-brand-dark text-sm min-h-[40px]" href="/product/pepperidge-farm-milano-mint-chocolate">
                  Pepperidge Farm® Milano® Mint Chocolate
                </a>
                <div className="flex text-gray-500 space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 16 16" fill="#F3B81F" className="w-3 h-3 mx-px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.55881 0.641809C7.64165 0.473983 7.81256 0.367737 7.99973 0.367737C8.18691 0.367704 8.35785 0.473951 8.44069 0.641777L10.3586 4.52732C10.539 4.89267 10.8875 5.14597 11.2908 5.20453L15.5789 5.82789C15.7642 5.85483 15.918 5.98455 15.9759 6.16256C16.0337 6.34055 15.9855 6.53597 15.8515 6.66663L12.7488 9.69142C12.457 9.97588 12.3239 10.3856 12.3927 10.7872L13.1248 15.0574C13.1564 15.2419 13.0806 15.4283 12.9292 15.5382C12.7778 15.6483 12.577 15.6627 12.4114 15.5756L8.57586 13.5596C8.21521 13.37 7.78435 13.37 7.42364 13.5597L3.58848 15.5756C3.4228 15.6627 3.22205 15.6481 3.07065 15.5382C2.91922 15.4281 2.84342 15.2417 2.87504 15.0573L3.60747 10.7874C3.67638 10.3857 3.54323 9.97588 3.2514 9.69135L0.148505 6.66666C0.0145037 6.536 -0.0337665 6.34058 0.0240798 6.1626C0.0819262 5.98461 0.235794 5.85489 0.421019 5.82792L4.70905 5.20459C5.11229 5.14597 5.46089 4.8927 5.64125 4.52729L7.55881 0.641809Z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[13px] leading-4">(2 reviews)</span>
                </div>
                <div className="space-s-2 mt-2 mb-4">
                  <span className="text-primary-500 inline-block font-medium">$10.00 - $15.00</span>
                </div>
                <div className="product-cart-button flex justify-center">
                  <a className="group inline-block text-center min-w-[150px] flex px-4 py-2 relative leading-6 text-brand-light font-medium rounded-full text-[13px] transition-all bg-primary-500 hover:bg-primary-400" href="/product/pepperidge-farm-milano-mint-chocolate">
                    Choose Options
                  </a>
                </div>
              </div>
            </article>


             <article className="flex flex-col md:gap-2 product-card px-2 md:px-3 h-full relative bg-white card-image--jump block">
              <div className="relative flex-shrink-0 z-1 mt-3">
                <div className="flex justify-center card-img-container overflow-hidden w-full">
                  <div className="relative md:inline-block">
                    <div className="block w-full box-sizing">
                      <svg className="block max-w-full h-auto" xmlns="http://www.w3.org/2000/svg" width="200" height="200" version="1.1"></svg>
                    </div>
                    <img 
                      alt="Pepperidge Farm Milano Mint Chocolate" 
                      loading="eager" 
                      width="0" 
                      height="0" 
                      decoding="async" 
                      className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full w-auto h-auto object-cover" 
                      sizes="100vw" 
                      src="/images/product4.png" 
                      style={{ color: 'transparent' }} 
                    />
                  </div>
                </div>
                <div className="w-full h-full absolute top-1 z-10">
                  <button className="hover:bg-primary-400 buttons--quickview px-4 py-2 bg-brand-light rounded-full hover:text-brand-light" aria-label="Quick View Button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-col mb-1.5 overflow-hidden relative items-center text-center">
                
                <a className="group hover:text-primary-500 transition-all ease-in-out duration-500 leading-5 line-clamp-2 mt-1 mb-2 text-brand-dark text-sm min-h-[40px]" href="/product/pepperidge-farm-milano-mint-chocolate">
                  Pepperidge Farm® Milano® Mint Chocolate
                </a>
                <div className="flex text-gray-500 space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 16 16" fill="#F3B81F" className="w-3 h-3 mx-px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.55881 0.641809C7.64165 0.473983 7.81256 0.367737 7.99973 0.367737C8.18691 0.367704 8.35785 0.473951 8.44069 0.641777L10.3586 4.52732C10.539 4.89267 10.8875 5.14597 11.2908 5.20453L15.5789 5.82789C15.7642 5.85483 15.918 5.98455 15.9759 6.16256C16.0337 6.34055 15.9855 6.53597 15.8515 6.66663L12.7488 9.69142C12.457 9.97588 12.3239 10.3856 12.3927 10.7872L13.1248 15.0574C13.1564 15.2419 13.0806 15.4283 12.9292 15.5382C12.7778 15.6483 12.577 15.6627 12.4114 15.5756L8.57586 13.5596C8.21521 13.37 7.78435 13.37 7.42364 13.5597L3.58848 15.5756C3.4228 15.6627 3.22205 15.6481 3.07065 15.5382C2.91922 15.4281 2.84342 15.2417 2.87504 15.0573L3.60747 10.7874C3.67638 10.3857 3.54323 9.97588 3.2514 9.69135L0.148505 6.66666C0.0145037 6.536 -0.0337665 6.34058 0.0240798 6.1626C0.0819262 5.98461 0.235794 5.85489 0.421019 5.82792L4.70905 5.20459C5.11229 5.14597 5.46089 4.8927 5.64125 4.52729L7.55881 0.641809Z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[13px] leading-4">(2 reviews)</span>
                </div>
                <div className="space-s-2 mt-2 mb-4">
                  <span className="text-primary-500 inline-block font-medium">$10.00 - $15.00</span>
                </div>
                <div className="product-cart-button flex justify-center">
                  <a className="group inline-block text-center min-w-[150px] flex px-4 py-2 relative leading-6 text-brand-light font-medium rounded-full text-[13px] transition-all bg-primary-500 hover:bg-primary-400" href="/product/pepperidge-farm-milano-mint-chocolate">
                    Choose Options
                  </a>
                </div>
              </div>
            </article>


             <article className="flex flex-col md:gap-2 product-card px-2 md:px-3 h-full relative bg-white card-image--jump block">
              <div className="relative flex-shrink-0 z-1 mt-3">
                <div className="flex justify-center card-img-container overflow-hidden w-full">
                  <div className="relative md:inline-block">
                    <div className="block w-full box-sizing">
                      <svg className="block max-w-full h-auto" xmlns="http://www.w3.org/2000/svg" width="200" height="200" version="1.1"></svg>
                    </div>
                    <img 
                      alt="Pepperidge Farm Milano Mint Chocolate" 
                      loading="eager" 
                      width="0" 
                      height="0" 
                      decoding="async" 
                      className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full w-auto h-auto object-cover" 
                      sizes="100vw" 
                      src="/images/product5.png" 
                      style={{ color: 'transparent' }} 
                    />
                  </div>
                </div>
                <div className="w-full h-full absolute top-1 z-10">
                  <button className="hover:bg-primary-400 buttons--quickview px-4 py-2 bg-brand-light rounded-full hover:text-brand-light" aria-label="Quick View Button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-col mb-1.5 overflow-hidden relative items-center text-center">
                
                <a className="group hover:text-primary-500 transition-all ease-in-out duration-500 leading-5 line-clamp-2 mt-1 mb-2 text-brand-dark text-sm min-h-[40px]" href="/product/pepperidge-farm-milano-mint-chocolate">
                  Pepperidge Farm® Milano® Mint Chocolate
                </a>
                <div className="flex text-gray-500 space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 16 16" fill="#F3B81F" className="w-3 h-3 mx-px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.55881 0.641809C7.64165 0.473983 7.81256 0.367737 7.99973 0.367737C8.18691 0.367704 8.35785 0.473951 8.44069 0.641777L10.3586 4.52732C10.539 4.89267 10.8875 5.14597 11.2908 5.20453L15.5789 5.82789C15.7642 5.85483 15.918 5.98455 15.9759 6.16256C16.0337 6.34055 15.9855 6.53597 15.8515 6.66663L12.7488 9.69142C12.457 9.97588 12.3239 10.3856 12.3927 10.7872L13.1248 15.0574C13.1564 15.2419 13.0806 15.4283 12.9292 15.5382C12.7778 15.6483 12.577 15.6627 12.4114 15.5756L8.57586 13.5596C8.21521 13.37 7.78435 13.37 7.42364 13.5597L3.58848 15.5756C3.4228 15.6627 3.22205 15.6481 3.07065 15.5382C2.91922 15.4281 2.84342 15.2417 2.87504 15.0573L3.60747 10.7874C3.67638 10.3857 3.54323 9.97588 3.2514 9.69135L0.148505 6.66666C0.0145037 6.536 -0.0337665 6.34058 0.0240798 6.1626C0.0819262 5.98461 0.235794 5.85489 0.421019 5.82792L4.70905 5.20459C5.11229 5.14597 5.46089 4.8927 5.64125 4.52729L7.55881 0.641809Z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[13px] leading-4">(2 reviews)</span>
                </div>
                <div className="space-s-2 mt-2 mb-4">
                  <span className="text-primary-500 inline-block font-medium">$10.00 - $15.00</span>
                </div>
                <div className="product-cart-button flex justify-center">
                  <a className="group inline-block text-center min-w-[150px] flex px-4 py-2 relative leading-6 text-brand-light font-medium rounded-full text-[13px] transition-all bg-primary-500 hover:bg-primary-400" href="/product/pepperidge-farm-milano-mint-chocolate">
                    Choose Options
                  </a>
                </div>
              </div>
            </article>


             <article className="flex flex-col md:gap-2 product-card px-2 md:px-3 h-full relative bg-white card-image--jump block">
              <div className="relative flex-shrink-0 z-1 mt-3">
                <div className="flex justify-center card-img-container overflow-hidden w-full">
                  <div className="relative md:inline-block">
                    <div className="block w-full box-sizing">
                      <svg className="block max-w-full h-auto" xmlns="http://www.w3.org/2000/svg" width="200" height="200" version="1.1"></svg>
                    </div>
                    <img 
                      alt="Pepperidge Farm Milano Mint Chocolate" 
                      loading="eager" 
                      width="0" 
                      height="0" 
                      decoding="async" 
                      className="absolute top-0 left-0 right-0 bottom-0 max-w-full max-h-full min-w-full w-auto h-auto object-cover" 
                      sizes="100vw" 
                      src="/images/product6.png" 
                      style={{ color: 'transparent' }} 
                    />
                  </div>
                </div>
                <div className="w-full h-full absolute top-1 z-10">
                  <button className="hover:bg-primary-400 buttons--quickview px-4 py-2 bg-brand-light rounded-full hover:text-brand-light" aria-label="Quick View Button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-col mb-1.5 overflow-hidden relative items-center text-center">
                
                <a className="group hover:text-primary-500 transition-all ease-in-out duration-500 leading-5 line-clamp-2 mt-1 mb-2 text-brand-dark text-sm min-h-[40px]" href="/product/pepperidge-farm-milano-mint-chocolate">
                  Pepperidge Farm® Milano® Mint Chocolate
                </a>
                <div className="flex text-gray-500 space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 16 16" fill="#F3B81F" className="w-3 h-3 mx-px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.55881 0.641809C7.64165 0.473983 7.81256 0.367737 7.99973 0.367737C8.18691 0.367704 8.35785 0.473951 8.44069 0.641777L10.3586 4.52732C10.539 4.89267 10.8875 5.14597 11.2908 5.20453L15.5789 5.82789C15.7642 5.85483 15.918 5.98455 15.9759 6.16256C16.0337 6.34055 15.9855 6.53597 15.8515 6.66663L12.7488 9.69142C12.457 9.97588 12.3239 10.3856 12.3927 10.7872L13.1248 15.0574C13.1564 15.2419 13.0806 15.4283 12.9292 15.5382C12.7778 15.6483 12.577 15.6627 12.4114 15.5756L8.57586 13.5596C8.21521 13.37 7.78435 13.37 7.42364 13.5597L3.58848 15.5756C3.4228 15.6627 3.22205 15.6481 3.07065 15.5382C2.91922 15.4281 2.84342 15.2417 2.87504 15.0573L3.60747 10.7874C3.67638 10.3857 3.54323 9.97588 3.2514 9.69135L0.148505 6.66666C0.0145037 6.536 -0.0337665 6.34058 0.0240798 6.1626C0.0819262 5.98461 0.235794 5.85489 0.421019 5.82792L4.70905 5.20459C5.11229 5.14597 5.46089 4.8927 5.64125 4.52729L7.55881 0.641809Z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[13px] leading-4">(2 reviews)</span>
                </div>
                <div className="space-s-2 mt-2 mb-4">
                  <span className="text-primary-500 inline-block font-medium">$10.00 - $15.00</span>
                </div>
                <div className="product-cart-button flex justify-center">
                  <a className="group inline-block text-center min-w-[150px] flex px-4 py-2 relative leading-6 text-brand-light font-medium rounded-full text-[13px] transition-all bg-primary-500 hover:bg-primary-400" href="/product/pepperidge-farm-milano-mint-chocolate">
                    Choose Options
                  </a>
                </div>
              </div>
            </article>


            

            
          </div>
          

          {/* Pagination */}
          <div className="mt-12 mb-8 flex justify-center">
            <nav className="flex items-center justify-center space-x-2">
              <button 
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                disabled
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-primary-500 bg-primary-500 text-white font-medium">
                1
              </button>
              
              <button className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                2
              </button>
              
              <button className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;