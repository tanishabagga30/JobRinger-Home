"use client";
import React from "react";
import { useState } from "react";
import CustomPaging from "../Layout/slider/CustomPagination";
import { addToCart } from "@/lib/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useAppContext } from "@/context/AppContext";
const ProductQuickviewModal = () => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { showModal, setShowModal, selectedProduct } = useAppContext();
  if (!selectedProduct) return null; // or a loader
  const { _id, name, price, description } = selectedProduct;
  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  const title = name;
  const image = selectedProduct.image;
  const addItemToCart = () => {
    //Sending the product as an action to the REDUX store... the cart slice
    dispatch(
      addToCart({
        _id,
        title,
        price,
        description,
        category,
        image,
        qty: quantity,
        toast: true,
      })
    );
  };

  const gallery = [
    "/assets/images/products/tshirt.webp",
    "/assets/images/products/p-3-2.jpg",
    "/assets/images/products/p-3-3.jpg",
  ];


if(!showModal) return null;
  return (
    <>
      <div
        className="fixed bg-black/50 bg-opacity-70 inset-0 z-40 cursor-pointer overflow-hidden"
        id="headlessui-dialog-13"
        role="dialog"
        aria-modal="true"
      >
        <div className={`min-h-screen lg:px-4 text-center ${!showModal ? "hidden" : ""}`}>
          <div
            className="fixed bg-blackk bg-opacity-70 inset-0 z-40 cursor-pointer"
            id="headlessui-dialog-overlay-15"
            aria-hidden="true"
          />
          <span
            className="h-screen align-middle inline-block"
            aria-hidden="true"
          >

          </span>
          <div className="w-full md:w-auto inline-block p-4 md:p-6 xl:p-8 overflow-hidden text-start align-middle transition-all transform  relative z-50">
            <div className=" rounded-md">
              <button
                aria-label="Close panel"
                className="opacity-0 absolute top-2 md:top-4 end-2 md:end-4"
                tabIndex={0}
              />
              <div className="md:w-[600px] lg:w-[940px] xl:w-[1180px]  mx-auto p-1 lg:p-0 xl:p-3 bg-white rounded-md">
                <button
                  aria-label="Close Button"
                  onClick={() => setShowModal(false)}
                  className="absolute top-0  z-10 inline-flex items-center justify-center w-8 h-8 lg:w-9 lg:h-9 transition duration-200 text-gray-700 text-opacity-50 focus:outline-none  hover:text-opacity-100  md:top-2 lg:top-7 xl:top-10 end-0.5 md:end-2 lg:end-7 xl:end-10 bg-skin-fill lg:bg-transparent rounded-full"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    className="text-xl lg:text-2xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
                  </svg>
                </button>
                <div className="overflow-hidden">
                  <div className="px-2 md:px-5 mb-2 lg:mb-2 pt-4 md:pt-7 ">
                    <div className="lg:flex items-start justify-between gap-8">
                      <div className="xl:flex items-center justify-center overflow-hidden">
                        <div className="w-full h-auto  items-center xl:ms-5 overflow-hidden rounded-md relative xl:w-[480px] 2xl:w-[650px]">
                          <CustomPaging gallery={gallery}  />
                            
                        </div>
                      </div>
                      <div className="flex-shrink-0 flex flex-col lg:w-[430px] xl:w-[520px] 2xl:w-[520px]">
                        <div className="pt-5 lg:pt-0 pb-5">
                          <div
                            className="mb-2 md:mb-2.5 block -mt-1.5"
                            role="button"
                          >
                            <h2 className="text-brand-dark text-lg md:text-xl xl:text-2xl font-medium transition-colors duration-300 hover:text-skin-primary">
                              {selectedProduct.name}
                            </h2>
                          </div>
                          <div className="text-sm md:text-15px font-medium">
                            {selectedProduct.unit}
                          </div>
                          <div className="flex items-center mt-5">
                            <div className="text-[#ff7e00] font-semibold text-base md:text-xl xl:text-[30px]">
                              {selectedProduct.price}₹
                            </div>
                          </div>
                        </div>
                        <div className="pb-2">
                          <span className="text-sm font-medium text-orange-500">
                            Only {selectedProduct.quantity} item left!
                          </span>
                        </div>
                        <div className="pt-1.5 lg:pt-3 xl:pt-4 space-y-2.5 md:space-y-3.5">
                          <div className="button--mutiqty flex items-center justify-between rounded overflow-hidden flex-shrink-0  h-11 md:h-14 bg-gray-300/30">
                            <button
                              onClick={decreaseQuantity}
                              className="flex items-center justify-center flex-shrink-0 h-10 transition-all ease-in-out duration-300 focus:outline-none focus-visible:outline-none w-10  rounded-full transform scale-80 lg:scale-100 text-brand-dark hover:bg-gray-200 ms-auto"
                            >
                              <span className="sr-only">button-minus</span>
                              <svg
                                className="transition-all"
                                width={22}
                                height={22}
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g opacity={1}>
                                  <path
                                    d="M3.15109 11.8438L10.174 11.8439L11.8264 11.8438L18.8493 11.8439C19.0772 11.8439 19.284 11.7515 19.4335 11.602C19.5831 11.4524 19.6755 11.2455 19.6754 11.0177C19.6755 10.5608 19.3062 10.1915 18.8493 10.1916L11.8264 10.1915L10.1741 10.1915L3.15109 10.1915C2.69427 10.1915 2.32496 10.5608 2.32496 11.0177C2.32486 11.4746 2.69416 11.8439 3.15109 11.8438Z"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeWidth="0.5"
                                  />
                                </g>
                              </svg>
                            </button>
                            <span className="font-semibold text-brand-dark flex items-center justify-center h-full transition-colors duration-250 ease-in-out cursor-default flex-shrink-0 text-base md:text-[17px] w-12 md:w-20 xl:w-28">
                              {quantity}
                            </span>
                            <button
                              onClick={increaseQuantity}
                              className="group flex items-center justify-center  flex-shrink-0 transition-all ease-in-out duration-300 focus:outline-none focus-visible:outline-none w-10 h-10 rounded-full scale-80 lg:scale-100 text-heading hover:bg-gray-200 me-auto"
                              title=""
                            >
                              <span className="sr-only">button-plus</span>
                              <svg
                                width={22}
                                height={22}
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g opacity={1}>
                                  <path
                                    d="M10.174 11.8439L3.15109 11.8438C2.69416 11.8439 2.32486 11.4746 2.32496 11.0177C2.32496 10.5608 2.69427 10.1915 3.15109 10.1915L10.1741 10.1915L10.174 3.16858C10.1741 2.71165 10.5433 2.34245 11.0002 2.34245C11.4571 2.34234 11.8264 2.71165 11.8263 3.16858L11.8264 10.1915L18.8493 10.1916C19.3062 10.1915 19.6755 10.5608 19.6754 11.0177C19.6755 11.2455 19.5831 11.4524 19.4335 11.602C19.284 11.7515 19.0772 11.8439 18.8493 11.8439L11.8264 11.8438L11.8264 18.8668C11.8264 19.0947 11.734 19.3015 11.5845 19.451C11.4349 19.6006 11.2281 19.6929 11.0002 19.6929C10.5433 19.693 10.174 19.3237 10.1741 18.8668L10.174 11.8439Z"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeWidth="0.5"
                                  />
                                </g>
                              </svg>
                            </button>
                          </div>
                          <button
                            onClick={addItemToCart}
                            data-variant="primary"
                            className="group text-sm lg:text-15px leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body font-semibold text-center justify-center rounded placeholder-white focus-visible:outline-none focus:outline-none h-12 md:h-14 bg-[#ff7e00] text-white tracking-widest px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-opacity-90 w-full "
                          >
                            <svg
                              width={18}
                              height={18}
                              viewBox="0 0 22 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="me-3"
                            >
                              <g clipPath="url(#clip0)">
                                <path
                                  d="M19.7999 19.0172L18.5402 4.8319C18.5132 4.51697 18.2478 4.27853 17.9374 4.27853H15.3459C15.31 1.91207 13.3754 0 10.9999 0C8.62447 0 6.68991 1.91207 6.65392 4.27853H4.06251C3.74758 4.27853 3.48664 4.51697 3.45965 4.8319L2.19993 19.0172C2.19993 19.0352 2.19543 19.0532 2.19543 19.0712C2.19543 20.6863 3.6756 22 5.49768 22H16.5022C18.3243 22 19.8044 20.6863 19.8044 19.0712C19.8044 19.0532 19.8044 19.0352 19.7999 19.0172ZM10.9999 1.21472C12.705 1.21472 14.0952 2.58241 14.1312 4.27853H7.86864C7.90464 2.58241 9.29482 1.21472 10.9999 1.21472ZM16.5022 20.7853H5.49768C4.35494 20.7853 3.42815 20.0294 3.41016 19.0982L4.61588 5.49775H6.64942V7.34233C6.64942 7.67975 6.91936 7.94969 7.25678 7.94969C7.59421 7.94969 7.86415 7.67975 7.86415 7.34233V5.49775H14.1312V7.34233C14.1312 7.67975 14.4012 7.94969 14.7386 7.94969C15.076 7.94969 15.3459 7.67975 15.3459 7.34233V5.49775H17.3795L18.5897 19.0982C18.5717 20.0294 17.6404 20.7853 16.5022 20.7853Z"
                                  fill="#ffffff"
                                  stroke="#ffffff"
                                  strokeWidth="0.1"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0">
                                  <rect width={22} height={22} fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            Add to Cart
                          </button>
                          <div className="grid grid-cols-2 gap-2.5">
                            <button
                              data-variant="border"
                              className="group text-sm lg:text-15px leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body font-semibold text-center justify-center tracking-[0.2px] rounded placeholder-white focus-visible:outline-none focus:outline-none h-12 md:h-14 bg-skin-inverted text-brand-dark border border-gray-200  px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 group hover:text-skin-primary false"
                            >
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 512 512"
                                className="text-2xl md:text-[26px] me-2 transition-all group-hover:text-skin-primary"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M352 56h-1c-39.7 0-74.8 21-95 52-20.2-31-55.3-52-95-52h-1c-61.9.6-112 50.9-112 113 0 37 16.2 89.5 47.8 132.7C156 384 256 456 256 456s100-72 160.2-154.3C447.8 258.5 464 206 464 169c0-62.1-50.1-112.4-112-113zm41.6 229.2C351 343.5 286.1 397.3 256 420.8c-30.1-23.5-95-77.4-137.6-135.7C89.1 245.1 76 198 76 169c0-22.6 8.8-43.8 24.6-59.8 15.9-16 37-24.9 59.6-25.1H161.1c14.3 0 28.5 3.7 41.1 10.8 12.2 6.9 22.8 16.7 30.4 28.5 5.2 7.9 14 12.7 23.5 12.7s18.3-4.8 23.5-12.7c7.7-11.8 18.2-21.6 30.4-28.5 12.6-7.1 26.8-10.8 41.1-10.8h.9c22.5.2 43.7 9.1 59.6 25.1 15.9 16 24.6 37.3 24.6 59.8-.2 29-13.3 76.1-42.6 116.2z" />
                              </svg>
                              Wishlist
                            </button>
                            <div className="relative group">
                              <button
                                data-variant="border"
                                className="group text-sm lg:text-15px leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body font-semibold text-center justify-center tracking-[0.2px] rounded placeholder-white focus-visible:outline-none focus:outline-none h-12 md:h-14 bg-skin-inverted text-brand-dark border border-gray-200  px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 w-full hover:text-skin-primary false"
                              >
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 512 512"
                                  className="text-2xl md:text-[26px] me-2 transition-all group-hover:text-skin-primary"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill="none"
                                    strokeLinejoin="round"
                                    strokeWidth={32}
                                    d="M448 256L272 88v96C103.57 184 64 304.77 64 424c48.61-62.24 91.6-96 208-96v96z"
                                  />
                                </svg>
                                Share
                              </button>
                              <div className="shadow-card bg-skin-fill rounded-md p-4 md:p-6 lg:p-7 absolute z-10 end-0 w-[300px] md:min-w-[400px] transition-all duration-300 opacity-0 invisible top-[130%]">
                                <h3 className="text-brand-dark mb-2 text-15px sm:text-base font-medium">
                                  Share in social network
                                </h3>
                                <div className="flex items-center flex-wrap space-s-2 mb-4">
                                  <button
                                    aria-label="facebook"
                                    className="react-share__ShareButton"
                                    style={{
                                      backgroundColor: "transparent",
                                      border: "none",
                                      padding: 0,
                                      font: "inherit",
                                      color: "inherit",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <svg
                                      viewBox="0 0 64 64"
                                      width={40}
                                      height={40}
                                      className="transition-all hover:opacity-90"
                                    >
                                      <circle
                                        cx={32}
                                        cy={32}
                                        r={31}
                                        fill="#3b5998"
                                      />
                                      <path
                                        d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
                                        fill="white"
                                      />
                                    </svg>
                                  </button>
                                  <button
                                    aria-label="twitter"
                                    className="react-share__ShareButton"
                                    style={{
                                      backgroundColor: "transparent",
                                      border: "none",
                                      padding: 0,
                                      font: "inherit",
                                      color: "inherit",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <svg
                                      viewBox="0 0 64 64"
                                      width={40}
                                      height={40}
                                      className="transition-all hover:opacity-90"
                                    >
                                      <circle
                                        cx={32}
                                        cy={32}
                                        r={31}
                                        fill="#00aced"
                                      />
                                      <path
                                        d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"
                                        fill="white"
                                      />
                                    </svg>
                                  </button>
                                  <button
                                    aria-label="whatsapp"
                                    className="react-share__ShareButton"
                                    style={{
                                      backgroundColor: "transparent",
                                      border: "none",
                                      padding: 0,
                                      font: "inherit",
                                      color: "inherit",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <svg
                                      viewBox="0 0 64 64"
                                      width={40}
                                      height={40}
                                      className="transition-all hover:opacity-90"
                                    >
                                      <circle
                                        cx={32}
                                        cy={32}
                                        r={31}
                                        fill="#25D366"
                                      />
                                      <path
                                        d="m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915"
                                        fill="white"
                                      />
                                    </svg>
                                  </button>
                                  <button
                                    aria-label="linkedin"
                                    className="react-share__ShareButton"
                                    style={{
                                      backgroundColor: "transparent",
                                      border: "none",
                                      padding: 0,
                                      font: "inherit",
                                      color: "inherit",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <svg
                                      viewBox="0 0 64 64"
                                      width={40}
                                      height={40}
                                      className="transition-all hover:opacity-90"
                                    >
                                      <circle
                                        cx={32}
                                        cy={32}
                                        r={31}
                                        fill="#007fb1"
                                      />
                                      <path
                                        d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"
                                        fill="white"
                                      />
                                    </svg>
                                  </button>
                                </div>
                                <p className="text-sm leading-[1.85em]">
                                  or copy link
                                </p>
                                <div className="relative mt-2.5 mb-1.5">
                                  <div className="w-full">
                                    <input
                                      id="shareLink"
                                      name="shareLink"
                                      type="link"
                                      placeholder=""
                                      className="py-2 px-4 w-full appearance-none transition duration-150 ease-in-out border text-input text-13px lg:text-sm font-body rounded placeholder-[#B3B3B3] min-h-12 transition duration-200 ease-in-out text-brand-dark bg-skin-fill border-skin-two focus:border-2 focus:outline-none focus:border-skin-primary h-11 md:h-12 px-4 border-skin-base rounded-md focus:outline focus:border-skin-primary"
                                      autoComplete="off"
                                      spellCheck="false"
                                      aria-invalid="false"
                                      defaultValue="https://razor-next.vercel.app//products/sample-able-brewing-system-consetetur"
                                    />
                                  </div>
                                  <span
                                    className="absolute end-0.5 top-[6%] h-[90%] px-2 text-skin-primary text-sm uppercase font-bold flex items-center bg-skin-fill cursor-pointer"
                                    role="button"
                                  >
                                    copy
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {Array.isArray(selectedProduct.tag) && selectedProduct.tag.length > 0 && (
                        <ul className="pt-5 xl:pt-6">
                          <li className="text-sm md:text-15px text-brand-dark text-opacity-80 inline-flex items-center justify-center me-2 relative top-1">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="me-2"
                            >
                              <path
                                d="M17.125 1H12.3677C11.4662 1 10.6188 1.351 9.98123 1.98849L1.63974 10.33C1.22725 10.7425 1 11.2908 1 11.8765C1 12.4593 1.22725 13.0075 1.63974 13.42L6.58 18.3603C6.99249 18.7728 7.54075 19 8.12649 19C8.70924 19 9.2575 18.7728 9.66999 18.3603L18.0115 10.0188C18.649 9.38125 19 8.53374 19 7.63226V2.87499C19 1.8415 18.1585 1 17.125 1ZM18.25 7.63226C18.25 8.33352 17.977 8.99277 17.482 9.48777L9.13976 17.83C8.6005 18.3693 7.65476 18.373 7.111 17.83L2.17 12.889C1.89926 12.619 1.74999 12.259 1.74999 11.8735C1.74999 11.491 1.89923 11.131 2.17 10.8603L10.5115 2.51875C11.008 2.02301 11.6665 1.74999 12.3677 1.74999H17.125C17.7452 1.74999 18.25 2.25473 18.25 2.87499V7.63226H18.25Z"
                                fill="#999999"
                                stroke="#999999"
                                strokeWidth="0.5"
                              />
                              <path
                                d="M14.8749 3.25C13.8414 3.25 12.9999 4.0915 12.9999 5.12499C12.9999 6.15848 13.8414 6.99998 14.8749 6.99998C15.9084 6.99998 16.7499 6.15851 16.7499 5.12499C16.7499 4.0915 15.9084 3.25 14.8749 3.25ZM14.8749 6.24999C14.2546 6.24999 13.7499 5.74525 13.7499 5.12499C13.7499 4.50473 14.2546 3.99999 14.8749 3.99999C15.4952 3.99999 15.9999 4.50473 15.9999 5.12499C15.9999 5.74525 15.4951 6.24999 14.8749 6.24999Z"
                                fill="#999999"
                                stroke="#999999"
                                strokeWidth="0.5"
                              />
                            </svg>{" "}
                            Tags:
                          </li>
                          {selectedProduct.tag?.map((item, index) => {
                            return (
                              <li key={item.id || item.name || index} className="inline-block p-[3px]">
                                <div
                                  className="text-13px md:text-sm rounded hover:bg-skin-button-secondary block border border-sink-base px-2 py-1 transition"
                                  role="button"
                                >
                                  {item.name}
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                        )}
                        <div className="pt-6 xl:pt-8 pb-6">
                          <h3 className="text-brand-dark mb-3 lg:mb-3.5 text-15px sm:text-base font-medium">
                            Product Details:
                          </h3>
                          <p className="text-sm leading-[1.85em]">
                            {selectedProduct.description.length >= 233
                              ? selectedProduct.description.slice(0, 233) +
                                "..."
                              : selectedProduct.description}
                            <span
                              role="button"
                              className="text-skin-primary ms-0.5"
                            >
                              Read More
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductQuickviewModal;
