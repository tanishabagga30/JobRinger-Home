'use client'
import React from "react";
import CartIcon from "./CartIcon";
import { useState } from "react";
import Image from "next/image";
import MobileCategory from "./MobileCategory.jsx";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
// import AuthModal from "./AuthModal";
import { useEffect } from "react";
const Header = ({toggleCart}) => {
//   const { data: session, status } = useSession();
//   const user = session?.user;
  const {openMobileMenu} = useAppContext();
  const [showauth, setShowAuth] = useState(false);
 
  const [showCategory, setShowCategory] = useState(false);
  const [mobilecategory, setMobileCategory] = useState(false);
  const [sticky,setSticky] = useState(false);

  const openModal = () => setShowAuth(true);
	const closeModal = () => setShowAuth(false);

  function setNavbar() {
    if (window.scrollY >= 200){
      setSticky(true)
    }
    else{
      setSticky(false);
    }
  }

  function toggleMenu() {
    setMobileCategory(!mobilecategory);
  }
 useEffect(() =>{

   window.addEventListener("scroll",setNavbar)
 },[])
  return (
    <>
      <header
        id="siteHeader"
        className={`header-four sticky-header sticky top-0 z-50 lg:relative w-full ${sticky ? 'is-scrolling':''}`}
      >
        <div className="innerSticky w-screen lg:w-full transition-all duration-200 ease-in-out body-font bg-[#232b35] z-20">
          <div className="w-full transition-all duration-200 ease-in-out top-bar-search hidden lg:max-w-[600px] absolute z-30 px-4 md:px-6 top-12 xl:top-1">
            <div className="overlay cursor-pointer" />
            <div className="w-full flex flex-col justify-center flex-shrink-0 relative z-30">
              <div className="flex flex-col mx-auto w-full">
                <form
                  className="flex w-full relative "
                  noValidate=""
                  role="search"
                >
                  <label
                    htmlFor="mobile-search"
                    className="flex flex-1 items-center py-0.5"
                  >
                    <input
                      id="mobile-search"
                      className="text-heading outline-none w-full h-[45px] pl-[40px] pe-14 md:pe-16 bg-skin-full text-skin-base text-sm rounded-full transition-all duration-200 focus:border-skin-primary focus:ring-1 focus:ring-skin-form border border-skin-base"
                      placeholder="Search the store"
                      aria-label="mobile-search"
                      autoComplete="off"
                      defaultValue=""
                      name="search"
                    />
                  </label>
                  <span className="w-14 md:w-16 h-full absolute top-0 end-0 flex flex-shrink-0 justify-center items-center focus:outline-none">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      className="w-5 h-5 text-skin-base text-opacity-40"
                    >
                      <path
                        d="M19.0144 17.9256L13.759 12.6703C14.777 11.4129 15.3899 9.81507 15.3899 8.07486C15.3899 4.04156 12.1081 0.759766 8.07483 0.759766C4.04152 0.759766 0.759766 4.04152 0.759766 8.07483C0.759766 12.1081 4.04156 15.3899 8.07486 15.3899C9.81507 15.3899 11.4129 14.777 12.6703 13.759L17.9256 19.0144C18.0757 19.1645 18.2728 19.24 18.47 19.24C18.6671 19.24 18.8642 19.1645 19.0144 19.0144C19.3155 18.7133 19.3155 18.2266 19.0144 17.9256ZM8.07486 13.8499C4.89009 13.8499 2.2998 11.2596 2.2998 8.07483C2.2998 4.89006 4.89009 2.29976 8.07486 2.29976C11.2596 2.29976 13.8499 4.89006 13.8499 8.07483C13.8499 11.2596 11.2596 13.8499 8.07486 13.8499Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </form>
              </div>
            </div>
          </div>
          <div className="top-bar text-13px text-gray-300 border-b border-white/10">
            <div className="mx-auto sm:max-w-[1730px]  max-w-[1870px] px-4 md:px-6 lg:px-8 2xl:px-20">
              <div className="h-12 flex justify-between items-center py-2 gap-5">
              <span className="hidden md:flex truncate gap-2">
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-skin-base text-white mt-0.5"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>

</span>


                <div className="flex flex-shrink-0 smx-auto max-w-[1920px]pace-s-5">
                  <nav className=" flex relative -mx-2 md:-mx-3  transition-all duration-200 ease-in-out">
                    <div className="menuItem group cursor-pointer mx-2 md:mx-3 ">
                      <a
                        className="text-gray-300 inline-flex items-center py-2 font-normal relative group-hover:text-orange-500 "
                        href="/my-account/wishlist"
                      >
                        Wishlist
                      </a>
                    </div>
                    <div className="menuItem group cursor-pointer mx-2 md:mx-3 ">
                      <a
                        className="text-gray-300 inline-flex items-center py-2 font-normal relative group-hover:text-orange-500 "
                        href="/checkout"
                      >
                        Checkout
                      </a>
                    </div>
                    <div className="menuItem group cursor-pointer mx-2 md:mx-3 ">
                      <a
                        className="text-gray-300 inline-flex items-center py-2 font-normal relative group-hover:text-orange-500 "
                        href="/"
                      >
                        Gift Certificates
                      </a>
                    </div>
                  </nav>
                  <div className="relative z-10 lg:top-[1px]">
                    <button
                      className="text-skin-base relative w-full py-2 px-5 pe-5  text-start  focus:outline-none cursor-pointer"
                      id="headlessui-listbox-button-undefined"
                      type="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="text-gray-300 flex truncate items-center">
                        <span className="me-2 w-4 h-4 rounded-full overflow-hidden flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="flag-icon-css-us"
                            viewBox="0 0 640 480"
                            className="h-full"
                          >
                            <g fillRule="evenodd">
                              <g strokeWidth="1pt">
                                <path
                                  fill="#bd3d44"
                                  d="M0 0h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8V197H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8V512H0z"
                                  transform="scale(.9375)"
                                />
                                <path
                                  fill="#fff"
                                  d="M0 39.4h972.8v39.4H0zm0 78.8h972.8v39.3H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0z"
                                  transform="scale(.9375)"
                                />
                              </g>
                              <path
                                fill="#192f5d"
                                d="M0 0h389.1v275.7H0z"
                                transform="scale(.9375)"
                              />
                              <path
                                fill="#fff"
                                d="M32.4 11.8L36 22.7h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 39.4l3.5 10.9h11.5L70.6 57 74 67.9l-9-6.7-9.3 6.7L59 57l-9-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7L124 57l-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5L330 57l3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 66.9L36 78h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H29zm64.9 0l3.5 11h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0l3.6 11H177l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7h11.5zm64.9 0l3.5 11H242l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 11h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.2-6.7h11.4zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zM64.9 94.5l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 122.1L36 133h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 149.7l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zM32.4 177.2l3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 11H177l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 11H242l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 204.8l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 232.4l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7H29zm64.9 0l3.5 10.9h11.5L103 250l3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 10.9H177l-9 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.5z"
                                transform="scale(.9375)"
                              />
                            </g>
                          </svg>
                        </span>
                        <span className="leading-5 pb-0.5">English</span>
                      </span>
                      <span className="absolute inset-y-0  flex items-center pointer-events-none -right-2">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 16 16"
                          className="w-7 h-3.5 text-white opacity-40"
                          aria-hidden="true"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-white/10">
            <div className="mx-auto sm:max-w-[1730px]  max-w-[1870px] px-4 md:px-6 lg:px-8 2xl:px-20">
              <div className="flex items-center justify-between  py-2 md:py-5">
                <div className="relative flex-shrink-0 lg:hidden">
                  <button onClick={openMobileMenu} className="border border-skin-base/40 rounded-md focus:outline-none flex-shrink-0 text-sm  text-white px-2.5 md:px-3 lg:px-[18px] py-2 md:py-2.5 lg:py-3 flex items-center transition-all hover:border-skin-four">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-xl lg:text-2xl"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1={3} y1={12} x2={21} y2={12} />
                      <line x1={3} y1={6} x2={21} y2={6} />
                      <line x1={3} y1={18} x2={21} y2={18} />
                    </svg>
                  </button>
                </div>
                
                <div
                  className="inline-flex focus:outline-none logo ps-3 md:ps-0 lg:mx-0"
                >
                  <Link href="/">
                  <div
                    style={{
                      overflow: "hidden",
                      boxSizing: "border-box",
                      display: "inline-block",
                      position: "relative",
                      width: 200,
                      height: 105,
                    }}
                  >
                    <img
                      alt="Razor"
                      src="/custom-logo.png"
                      decoding="async"
                      data-nimg="fixed"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
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
                    
                  </div>
                  </Link>
                </div>
                <div className="text-14px  gap-2 hidden lg:flex">
                  <div className="image_hotline bg-iconPhone2" />
                  <div className="">
                    <div className="text-white ">Hotline Free:</div>
                    <a className="text-sm text-white font-medium">
                      9953757593{" "}
                    </a>
                  </div>
                </div>
                <div className="w-full transition-all duration-200 ease-in-out hidden lg:flex lg:max-w-[450px] xl:max-w-[500px] 2xl:max-w-[800px] lg:mx-10">
                  <div className="overlay cursor-pointer" />
                  <div className="w-full flex flex-col justify-center flex-shrink-0 relative z-30">
                    <div className="flex flex-col mx-auto w-full">
                      <form
                        className="flex w-full relative "
                        noValidate=""
                        role="search"
                      >
                        <label
                          htmlFor="top-bar-search"
                          className="flex flex-1 items-center py-0.5"
                        >
                          <input
                            id="top-bar-search"
                            className="text-heading outline-none w-full h-[45px] pl-10 md:pl-10 pe-14 md:pe-16 bg-white text-skin-base text-sm rounded-full transition-all duration-200 focus:border-skin-primary focus:ring-1 focus:ring-skin-form bg-skin-one"
                            placeholder="Search the store"
                            aria-label="top-bar-search"
                            autoComplete="off"
                            defaultValue=""
                            name="search"
                          />
                        </label>
                        <span className="w-14 md:w-16 h-full absolute top-0 end-0 flex flex-shrink-0 justify-center items-center focus:outline-none">
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            className="w-5 h-5 text-skin-base text-opacity-40"
                          >
                            <path
                              d="M19.0144 17.9256L13.759 12.6703C14.777 11.4129 15.3899 9.81507 15.3899 8.07486C15.3899 4.04156 12.1081 0.759766 8.07483 0.759766C4.04152 0.759766 0.759766 4.04152 0.759766 8.07483C0.759766 12.1081 4.04156 15.3899 8.07486 15.3899C9.81507 15.3899 11.4129 14.777 12.6703 13.759L17.9256 19.0144C18.0757 19.1645 18.2728 19.24 18.47 19.24C18.6671 19.24 18.8642 19.1645 19.0144 19.0144C19.3155 18.7133 19.3155 18.2266 19.0144 17.9256ZM8.07486 13.8499C4.89009 13.8499 2.2998 11.2596 2.2998 8.07483C2.2998 4.89006 4.89009 2.29976 8.07486 2.29976C11.2596 2.29976 13.8499 4.89006 13.8499 8.07483C13.8499 11.2596 11.2596 13.8499 8.07486 13.8499Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-5 xl:space-x-10 lg:max-w-[33%]">
                  <div className="hidden lg:flex items-center flex-shrink-0 accountButton">
                    {/* {user?.image ? (
                      <Link href="/my-account/account-settings">
                      <img className="w-10 h-10 rounded-full" src={user.image} alt="Rounded avatar" />
                      </Link>
                    ):null} */}
                    {false ? (
                    <Link href="/my-account/account-settings">
                    <button  className="text-white font-base text-lg mx-2">
                      My Account
                    </button>
                    </Link>
                    ):(                     
                      <button onClick={openModal}
      className="text-sm text-white font-normal focus:outline-none ms-2"
      aria-label="Authentication"
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 1024 1024"
        className="text-white text-xl lg:text-2xl"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" />
      </svg>
                      </button>

                    )}
                    
                  </div>
                    <div className=" items-center justify-center flex-shrink-0 h-auto focus:outline-none transform hidden lg:flex">
                      <CartIcon toggleCart={toggleCart} />
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar hidden lg:block bg-[#232b35]">
            <div className="mx-auto sm:max-w-[1730px]  max-w-[1870px] px-4 md:px-6 lg:px-8 2xl:px-20">
              <div className="flex justify-between items-center">
                <a
                  className="inline-flex focus:outline-none navbar-logo w-0 opacity-0 transition-all duration-200 ease-in-out"
                  href="/"
                >
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
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
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
                  </div>
                </a>
                <div className="categories-header-button relative me-8 flex-shrink-0 w-72">
                  <button
                    onClick={() => setShowCategory(!showCategory)}
                    className="border-white/10 min-h-[60px] focus:outline-none w-full font-medium text-white  uppercase py-4 flex items-center  border-r"
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-2xl me-3"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1={3} y1={12} x2={21} y2={12} />
                      <line x1={3} y1={6} x2={21} y2={6} />
                      <line x1={3} y1={18} x2={21} y2={18} />
                    </svg>
                    All Categories
                  </button>
                  {showCategory && (
                    <div className="absolute z-30 w-72 lg:w-full ">
                      <div className="max-h-full">
                        <ul className="w-full bg-white border-t-0 border-2 border-[#ff7e00] rounded-b-md category-dropdown-menu">
                          <li className="px-4 group  transition false text-sm hover:text-orange-500 ">
                            <a
                              className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                              href="/search"
                            >
                              <span className="capitalize ">Audio Music</span>
                              <span className="ms-auto hidden md:inline-flex">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 512 512"
                                  className="text-15px text-skin-base text-opacity-40"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" />
                                </svg>
                              </span>
                            </a>
                            <div className="dropdownMenu hidden  absolute z-10 left-full group-hover:block top-0 w-[800px] bg-white   shadow-md">
                              <ul className="text-xs pl-7 px-5 py-4 grid grid-cols-3 gap-4">
                                <li className="relative transition  text-sm  text-skin-base  mb-0.5">
                                  <a
                                    className="flex items-center w-full hover:text-[#ff7e00] text-base font-medium"
                                    href="/search"
                                  >
                                    <span className="capitalize ">
                                      Bags &amp; Accessories
                                    </span>
                                  </a>
                                  <div className="subMenuChild w-full py-1 subMega--level1 false">
                                    <ul className="text-xs">
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Jewelry &amp; Watches
                                          </span>
                                        </a>
                                      </li>
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Accessories
                                          </span>
                                        </a>
                                      </li>
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Wedding Rings
                                          </span>
                                        </a>
                                      </li>
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Men Watches
                                          </span>
                                        </a>
                                      </li>
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Woman Watches
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li className="relative transition  text-sm  text-skin-base  mb-0.5">
                                  <a
                                    className="flex items-center w-full hover:text-[#ff7e00] text-base font-medium"
                                    href="/search"
                                  >
                                    <span className="capitalize ">
                                      Electronic &amp; Digital
                                    </span>
                                  </a>
                                  <div className="subMenuChild w-full py-1 subMega--level1 false">
                                    <ul className="text-xs">
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Mobiles &amp; Tablets
                                          </span>
                                        </a>
                                      </li>
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Camera, Photo &amp; Video
                                          </span>
                                        </a>
                                      </li>
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Mobiles
                                          </span>
                                        </a>
                                      </li>
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Tablets
                                          </span>
                                        </a>
                                      </li>
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            PC Gaming
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li className="relative transition  text-sm  text-skin-base  mb-0.5">
                                  <a
                                    className="flex items-center w-full hover:text-[#ff7e00] text-base font-medium"
                                    href="/search"
                                  >
                                    <span className="capitalize ">
                                      Garden &amp; Kitchen
                                    </span>
                                  </a>
                                  <div className="subMenuChild w-full py-1 subMega--level1 false">
                                    <ul className="text-xs">
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Helicopters &amp; Parts
                                          </span>
                                        </a>
                                      </li>
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Toys &amp; Hobbies
                                          </span>
                                        </a>
                                      </li>
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Outdoor &amp; Traveling
                                          </span>
                                        </a>
                                      </li>
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Home &amp; Kitchen
                                          </span>
                                        </a>
                                      </li>
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Lighting &amp; Lamps
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li className="relative transition  text-sm  text-skin-base  mb-0.5">
                                  <a
                                    className="flex items-center w-full hover:text-[#ff7e00] text-base font-medium"
                                    href="/search"
                                  >
                                    <span className="capitalize ">
                                      Automotive
                                    </span>
                                  </a>
                                  <div className="subMenuChild w-full py-1 subMega--level1 false">
                                    <ul className="text-xs">
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Automotive
                                          </span>
                                        </a>
                                      </li>
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Car Alarms and Security
                                          </span>
                                        </a>
                                      </li>
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Car Audio &amp; Speakers
                                          </span>
                                        </a>
                                      </li>
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Home &amp; Kitchen
                                          </span>
                                        </a>
                                      </li>
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Lighting &amp; Lamps
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li className="relative transition  text-sm  text-skin-base  mb-0.5">
                                  <a
                                    className="flex items-center w-full hover:text-[#ff7e00] text-base font-medium"
                                    href="/search"
                                  >
                                    <span className="capitalize ">
                                      Lighting &amp; Lamps
                                    </span>
                                  </a>
                                  <div className="subMenuChild w-full py-1 subMega--level1 false">
                                    <ul className="text-xs">
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Wedding Rings
                                          </span>
                                        </a>
                                      </li>
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Electronic &amp; Digital
                                          </span>
                                        </a>
                                      </li>
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Garden &amp; Kitchen
                                          </span>
                                        </a>
                                      </li>
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Home &amp; Kitchen
                                          </span>
                                        </a>
                                      </li>
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Lighter &amp; Cigar Supplies
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li className="relative transition  text-sm  text-skin-base  mb-0.5">
                                  <a
                                    className="flex items-center w-full hover:text-[#ff7e00] text-base font-medium"
                                    href="/search"
                                  >
                                    <span className="capitalize ">
                                      Home Accessories
                                    </span>
                                  </a>
                                  <div className="subMenuChild w-full py-1 subMega--level1 false">
                                    <ul className="text-xs">
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Bags &amp; Accessories
                                          </span>
                                        </a>
                                      </li>
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Electronic &amp; Digital
                                          </span>
                                        </a>
                                      </li>
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Garden &amp; Kitchen
                                          </span>
                                        </a>
                                      </li>
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Gift for Man
                                          </span>
                                        </a>
                                      </li>
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Gift for Woman
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="px-4 group  transition false text-sm hover:text-orange-500 ">
                            <a
                              className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                              href="/search"
                            >
                              <span className="capitalize ">
                                Phones &amp; Tablets
                              </span>
                              <span className="ms-auto hidden md:inline-flex">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 512 512"
                                  className="text-15px text-skin-base text-opacity-40"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" />
                                </svg>
                              </span>
                            </a>
                            <div className="dropdownMenu hidden group-hover:block absolute z-10 left-full top-0 w-[800px] bg-white  shadow-md">
                              <ul className="text-xs pl-7 px-5 py-4 grid grid-cols-3 gap-4">
                                <li className="relative transition  text-sm  text-skin-base  mb-0.5">
                                  <a
                                    className="flex items-center w-full hover:text-[#ff7e00] text-base font-medium"
                                    href="/search"
                                  >
                                    <span className="capitalize ">
                                      Bags &amp; Accessories
                                    </span>
                                  </a>
                                  <div className="subMenuChild w-full py-1 subMega--level1 false">
                                    <ul className="text-xs">
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Jewelry &amp; Watches
                                          </span>
                                        </a>
                                      </li>
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Accessories
                                          </span>
                                        </a>
                                      </li>
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Wedding Rings
                                          </span>
                                        </a>
                                      </li>
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Men Watches
                                          </span>
                                        </a>
                                      </li>
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Woman Watches
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li className="relative transition  text-sm  text-skin-base  mb-0.5">
                                  <a
                                    className="flex items-center w-full hover:text-[#ff7e00] text-base font-medium"
                                    href="/search"
                                  >
                                    <span className="capitalize ">
                                      Electronic &amp; Digital
                                    </span>
                                  </a>
                                  <div className="subMenuChild w-full py-1 subMega--level1 false">
                                    <ul className="text-xs">
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Mobiles &amp; Tablets
                                          </span>
                                        </a>
                                      </li>
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Camera, Photo &amp; Video
                                          </span>
                                        </a>
                                      </li>
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Mobiles
                                          </span>
                                        </a>
                                      </li>
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Tablets
                                          </span>
                                        </a>
                                      </li>
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            PC Gaming
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li className="relative transition  text-sm  text-skin-base  mb-0.5">
                                  <a
                                    className="flex items-center w-full hover:text-[#ff7e00] text-base font-medium"
                                    href="/search"
                                  >
                                    <span className="capitalize ">
                                      Garden &amp; Kitchen
                                    </span>
                                  </a>
                                  <div className="subMenuChild w-full py-1 subMega--level1 false">
                                    <ul className="text-xs">
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Helicopters &amp; Parts
                                          </span>
                                        </a>
                                      </li>
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Toys &amp; Hobbies
                                          </span>
                                        </a>
                                      </li>
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Outdoor &amp; Traveling
                                          </span>
                                        </a>
                                      </li>
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Home &amp; Kitchen
                                          </span>
                                        </a>
                                      </li>
                                      <li className="relative transition  text-sm text-skin-base hover:text-orange-500 ">
                                        <a
                                          className="flex items-center w-full hover:text-[#ff7e00]  "
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Lighting &amp; Lamps
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="px-4 group  transition relative text-sm hover:text-orange-500 ">
                            <a
                              className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                              href="/search"
                            >
                              <span className="capitalize ">
                                Fashion &amp; Clothing
                              </span>
                              <span className="ms-auto hidden md:inline-flex">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 512 512"
                                  className="text-15px text-skin-base text-opacity-40"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" />
                                </svg>
                              </span>
                            </a>
                            <div className="dropdownMenu hidden  absolute z-10 left-full top-0 w-64 bg-white group-hover:block shadow-md subMenu--level0">
                              <ul className="text-xs px-1 py-3">
                                <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                  <a
                                    className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                    href="/search"
                                  >
                                    <span className="capitalize ">
                                      Bags &amp; Accessories
                                    </span>
                                    <span className="ms-auto hidden md:inline-flex">
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 512 512"
                                        className="text-15px text-skin-base text-opacity-40"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" />
                                      </svg>
                                    </span>
                                  </a>
                                  <div className="dropdownMenu hidden md:block absolute z-10 left-full top-0 w-64 bg-skin-fill opacity-0 invisible shadow-md subMenu--level1">
                                    <ul className="text-xs px-1 py-3">
                                      <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                        <a
                                          className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Jewelry &amp; Watches
                                          </span>
                                        </a>
                                      </li>
                                      <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                        <a
                                          className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Accessories
                                          </span>
                                        </a>
                                      </li>
                                      <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                        <a
                                          className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Wedding Rings
                                          </span>
                                        </a>
                                      </li>
                                      <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                        <a
                                          className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Men Watches
                                          </span>
                                        </a>
                                      </li>
                                      <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                        <a
                                          className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Woman Watches
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                  <a
                                    className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                    href="/search"
                                  >
                                    <span className="capitalize ">
                                      Electronic &amp; Digital
                                    </span>
                                    <span className="ms-auto hidden md:inline-flex">
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 512 512"
                                        className="text-15px text-skin-base text-opacity-40"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" />
                                      </svg>
                                    </span>
                                  </a>
                                  <div className="dropdownMenu hidden md:block absolute z-10 left-full top-0 w-64 bg-skin-fill opacity-0 invisible shadow-md subMenu--level1">
                                    <ul className="text-xs px-1 py-3">
                                      <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                        <a
                                          className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Mobiles &amp; Tablets
                                          </span>
                                        </a>
                                      </li>
                                      <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                        <a
                                          className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Camera, Photo &amp; Video
                                          </span>
                                        </a>
                                      </li>
                                      <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                        <a
                                          className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Mobiles
                                          </span>
                                        </a>
                                      </li>
                                      <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                        <a
                                          className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Tablets
                                          </span>
                                        </a>
                                      </li>
                                      <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                        <a
                                          className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            PC Gaming
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                  <a
                                    className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                    href="/search"
                                  >
                                    <span className="capitalize ">
                                      Garden &amp; Kitchen
                                    </span>
                                    <span className="ms-auto hidden md:inline-flex">
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 512 512"
                                        className="text-15px text-skin-base text-opacity-40"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" />
                                      </svg>
                                    </span>
                                  </a>
                                  <div className="dropdownMenu hidden md:block absolute z-10 left-full top-0 w-64 bg-skin-fill opacity-0 invisible shadow-md subMenu--level1">
                                    <ul className="text-xs px-1 py-3">
                                      <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                        <a
                                          className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Helicopters &amp; Parts
                                          </span>
                                        </a>
                                      </li>
                                      <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                        <a
                                          className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Toys &amp; Hobbies
                                          </span>
                                        </a>
                                      </li>
                                      <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                        <a
                                          className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Outdoor &amp; Traveling
                                          </span>
                                        </a>
                                      </li>
                                      <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                        <a
                                          className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Home &amp; Kitchen
                                          </span>
                                        </a>
                                      </li>
                                      <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                        <a
                                          className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Lighting &amp; Lamps
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                  <a
                                    className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                    href="/search"
                                  >
                                    <span className="capitalize ">
                                      Automotive
                                    </span>
                                    <span className="ms-auto hidden md:inline-flex">
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 512 512"
                                        className="text-15px text-skin-base text-opacity-40"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" />
                                      </svg>
                                    </span>
                                  </a>
                                  <div className="dropdownMenu hidden md:block absolute z-10 left-full top-0 w-64 bg-skin-fill opacity-0 invisible shadow-md subMenu--level1">
                                    <ul className="text-xs px-1 py-3">
                                      <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                        <a
                                          className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Automotive
                                          </span>
                                        </a>
                                      </li>
                                      <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                        <a
                                          className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Car Alarms and Security
                                          </span>
                                        </a>
                                      </li>
                                      <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                        <a
                                          className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Car Audio &amp; Speakers
                                          </span>
                                        </a>
                                      </li>
                                      <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                        <a
                                          className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Home &amp; Kitchen
                                          </span>
                                        </a>
                                      </li>
                                      <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                        <a
                                          className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Lighting &amp; Lamps
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                  <a
                                    className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                    href="/search"
                                  >
                                    <span className="capitalize ">
                                      Lighting &amp; Lamps
                                    </span>
                                    <span className="ms-auto hidden md:inline-flex">
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 512 512"
                                        className="text-15px text-skin-base text-opacity-40"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" />
                                      </svg>
                                    </span>
                                  </a>
                                  <div className="dropdownMenu hidden md:block absolute z-10 left-full top-0 w-64 bg-skin-fill opacity-0 invisible shadow-md subMenu--level1">
                                    <ul className="text-xs px-1 py-3">
                                      <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                        <a
                                          className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Wedding Rings
                                          </span>
                                        </a>
                                      </li>
                                      <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                        <a
                                          className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Electronic &amp; Digital
                                          </span>
                                        </a>
                                      </li>
                                      <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                        <a
                                          className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Garden &amp; Kitchen
                                          </span>
                                        </a>
                                      </li>
                                      <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                        <a
                                          className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Home &amp; Kitchen
                                          </span>
                                        </a>
                                      </li>
                                      <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                        <a
                                          className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Lighter &amp; Cigar Supplies
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                  <a
                                    className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                    href="/search"
                                  >
                                    <span className="capitalize ">
                                      Home Accessories
                                    </span>
                                    <span className="ms-auto hidden md:inline-flex">
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 512 512"
                                        className="text-15px text-skin-base text-opacity-40"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" />
                                      </svg>
                                    </span>
                                  </a>
                                  <div className="dropdownMenu hidden md:block absolute z-10 left-full top-0 w-64 bg-skin-fill opacity-0 invisible shadow-md subMenu--level1">
                                    <ul className="text-xs px-1 py-3">
                                      <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                        <a
                                          className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Bags &amp; Accessories
                                          </span>
                                        </a>
                                      </li>
                                      <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                        <a
                                          className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Electronic &amp; Digital
                                          </span>
                                        </a>
                                      </li>
                                      <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                        <a
                                          className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Garden &amp; Kitchen
                                          </span>
                                        </a>
                                      </li>
                                      <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                        <a
                                          className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Gift for Man
                                          </span>
                                        </a>
                                      </li>
                                      <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                        <a
                                          className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                          href="/search"
                                        >
                                          <span className="capitalize ">
                                            Gift for Woman
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="px-4  transition relative text-sm hover:text-orange-500 ">
                            <a
                              className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                              href="/search"
                            >
                              <span className="capitalize ">
                                Garden &amp; Kitchen
                              </span>
                              <span className="ms-auto hidden md:inline-flex">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 512 512"
                                  className="text-15px text-skin-base text-opacity-40"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" />
                                </svg>
                              </span>
                            </a>
                            <div className="dropdownMenu hidden md:block absolute z-10 left-full top-0 w-64 bg-skin-fill opacity-0 invisible shadow-md subMenu--level0">
                              <ul className="text-xs px-1 py-3">
                                <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                  <a
                                    className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                    href="/search"
                                  >
                                    <span className="capitalize ">
                                      Helicopters &amp; Parts
                                    </span>
                                  </a>
                                </li>
                                <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                  <a
                                    className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                    href="/search"
                                  >
                                    <span className="capitalize ">
                                      Toys &amp; Hobbies
                                    </span>
                                  </a>
                                </li>
                                <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                  <a
                                    className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                    href="/search"
                                  >
                                    <span className="capitalize ">
                                      Outdoor &amp; Traveling
                                    </span>
                                  </a>
                                </li>
                                <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                  <a
                                    className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                    href="/search"
                                  >
                                    <span className="capitalize ">
                                      Home &amp; Kitchen
                                    </span>
                                  </a>
                                </li>
                                <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                  <a
                                    className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                    href="/search"
                                  >
                                    <span className="capitalize ">
                                      Lighting &amp; Lamps
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="px-4  transition relative text-sm hover:text-orange-500 ">
                            <a
                              className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                              href="/search"
                            >
                              <span className="capitalize ">
                                TV &amp; Video
                              </span>
                              <span className="ms-auto hidden md:inline-flex">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 512 512"
                                  className="text-15px text-skin-base text-opacity-40"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" />
                                </svg>
                              </span>
                            </a>
                            <div className="dropdownMenu hidden md:block absolute z-10 left-full top-0 w-64 bg-skin-fill opacity-0 invisible shadow-md subMenu--level0">
                              <ul className="text-xs px-1 py-3">
                                <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                  <a
                                    className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                    href="/search"
                                  >
                                    <span className="capitalize ">Apples</span>
                                  </a>
                                </li>
                                <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                  <a
                                    className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                    href="/search"
                                  >
                                    <span className="capitalize ">Melons</span>
                                  </a>
                                </li>
                                <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                  <a
                                    className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                    href="/search"
                                  >
                                    <span className="capitalize ">Berries</span>
                                  </a>
                                </li>
                                <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                  <a
                                    className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                    href="/search"
                                  >
                                    <span className="capitalize ">LG</span>
                                  </a>
                                </li>
                                <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                  <a
                                    className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                    href="/search"
                                  >
                                    <span className="capitalize ">Samsung</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="px-4  transition relative text-sm hover:text-orange-500 ">
                            <a
                              className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                              href="/search"
                            >
                              <span className="capitalize ">
                                Beauty &amp; Health
                              </span>
                              <span className="ms-auto hidden md:inline-flex">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 512 512"
                                  className="text-15px text-skin-base text-opacity-40"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" />
                                </svg>
                              </span>
                            </a>
                            <div className="dropdownMenu hidden md:block absolute z-10 left-full top-0 w-64 bg-skin-fill opacity-0 invisible shadow-md subMenu--level0">
                              <ul className="text-xs px-1 py-3">
                                <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                  <a
                                    className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                    href="/search"
                                  >
                                    <span className="capitalize ">
                                      Fruit Juice
                                    </span>
                                  </a>
                                </li>
                                <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                  <a
                                    className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                    href="/search"
                                  >
                                    <span className="capitalize ">
                                      Ice Coffee
                                    </span>
                                  </a>
                                </li>
                                <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                  <a
                                    className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                    href="/search"
                                  >
                                    <span className="capitalize ">
                                      Comodianos
                                    </span>
                                  </a>
                                </li>
                                <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                  <a
                                    className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                    href="/search"
                                  >
                                    <span className="capitalize ">Punch</span>
                                  </a>
                                </li>
                                <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                  <a
                                    className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                    href="/search"
                                  >
                                    <span className="capitalize ">
                                      Montemous
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="px-4  transition relative text-sm hover:text-orange-500 ">
                            <a
                              className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                              href="/search"
                            >
                              <span className="capitalize ">
                                Jewelry &amp; Watches
                              </span>
                            </a>
                          </li>
                          <li className="px-4  transition relative text-sm hover:text-orange-500 ">
                            <a
                              className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                              href="/search"
                            >
                              <span className="capitalize ">Top 10 Offers</span>
                              <span className="ms-auto hidden md:inline-flex">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 512 512"
                                  className="text-15px text-skin-base text-opacity-40"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" />
                                </svg>
                              </span>
                            </a>
                            <div className="dropdownMenu hidden md:block absolute z-10 left-full top-0 w-64 bg-skin-fill opacity-0 invisible shadow-md subMenu--level0">
                              <ul className="text-xs px-1 py-3">
                                <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                  <a
                                    className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                    href="/search"
                                  >
                                    <span className="capitalize ">
                                      Boiled Milk
                                    </span>
                                  </a>
                                </li>
                                <li className="px-4  transition relative text-sm p-0 pe-4 text-skin-base hover:text-orange-500 mb-0.5">
                                  <a
                                    className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                                    href="/search"
                                  >
                                    <span className="capitalize ">
                                      Mixed Milk
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="px-4  transition relative text-sm hover:text-orange-500 ">
                            <a
                              className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                              href="/search"
                            >
                              <span className="capitalize ">Accessories</span>
                            </a>
                          </li>
                          <li className="px-4  transition relative text-sm hover:text-orange-500 ">
                            <a
                              className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                              href="/search"
                            >
                              <span className="capitalize ">Beaf Steak</span>
                            </a>
                          </li>
                          <li className="px-4  transition relative text-sm hover:text-orange-500 ">
                            <a
                              className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                              href="/search"
                            >
                              <span className="capitalize ">Vitamin Items</span>
                            </a>
                          </li>
                          <li className="px-4  transition relative text-sm hover:text-orange-500 ">
                            <a
                              className="flex items-center w-full py-3 text-start outline-none focus:outline-none focus:ring-0 focus:text-skin-base"
                              href="/search"
                            >
                              <span className="capitalize ">
                                Raw Chicken mdeo
                              </span>
                            </a>
                          </li>
                          <li className="px-4 relative transition text-sm hover:text-orange-500">
                            <div className="flex items-center w-full py-3 text-start cursor-pointer">
                              <div className="inline-flex flex-shrink-0 mr-2">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 512 512"
                                  className="text-xl text-skin-base text-opacity-80"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M346.5 240H272v-74.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-74.5c-8.8 0-16 6-16 16s7.5 16 16 16H240v74.5c0 9.5 7 16 16 16s16-7.2 16-16V272h74.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
                                  <path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" />
                                </svg>
                              </div>
                              <span className="capitalize ">
                                All Categories
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                <nav className="headerMenu  w-full  flex transition-all duration-200 ease-in-out">
                  <div className="menuItem group py-3 mx-4 xl:mx-5 relative">
                    <a
                      className="uppercase inline-flex items-center text-sm text-white py-2 font-medium relative  group-hover:text-orange-500"
                      href="/"
                    >
                      Demos
                      <span className="text-xs w-4 flex justify-end text-white opacity-80 group-hover:text-orange-500">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 16 16"
                          className="transition duration-300 ease-in-out transform "
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div className="menuItem group py-3 mx-4 xl:mx-5 ">
                    <a
                      className="uppercase inline-flex items-center text-sm text-white py-2 font-medium relative  group-hover:text-orange-500"
                      href="/search"
                    >
                      Categories
                      <span className="text-xs w-4 flex justify-end text-white opacity-80 group-hover:text-orange-500">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 16 16"
                          className="transition duration-300 ease-in-out transform "
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </span>
                    </a>
                    <div className="subMega shadow-dropDown hidden bg-white left-0 w-full  z-30 absolute top-[calc(100% + 0px)]  group-hover:block">
                      <div className="mx-auto max-w-screen-2xl   px-4 md:px-6 lg:px-8 2xl:px-20">
                        <div className="flex flex-row gap-5 pt-8 py-5">
                          <div className="cateArea basis-full">
                            <ul className="text-body text-sm grid grid-cols-5 gap-4 ">
                              <li className="relative">
                                <a href="/search">
                                  <div
                                    style={{
                                      display: "block",
                                      overflow: "hidden",
                                      position: "relative",
                                      boxSizing: "border-box",
                                      margin: 0,
                                    }}
                                  >
                                    <div
                                      style={{
                                        display: "block",
                                        boxSizing: "border-box",
                                        paddingTop: "62.7451%",
                                      }}
                                    />
                                    <img
                                      alt="menu-fresh-vegetables"
                                      sizes="(max-width: 768px) 15vw,10vw"
                                      src="/img/categories-menu/collection_1.webp"
                                      decoding="async"
                                      data-nimg="responsive"
                                      className="bg-sink-thumbnail object-cover transition duration-200 ease-in-out transform "
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
                                <a
                                  className="flex items-center justify-between py-2 hover:text-orange-500 text-base font-medium"
                                  href="/search"
                                >
                                  Phones &amp; Tablets
                                </a>
                                <ul className="subMenuChild  w-full py-1">
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Home Audio
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Helicopters &amp; Parts
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Toys &amp; Hobbies
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Outdoor &amp; Traveling
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Garden
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="relative">
                                <a href="/search">
                                  <div
                                    style={{
                                      display: "block",
                                      overflow: "hidden",
                                      position: "relative",
                                      boxSizing: "border-box",
                                      margin: 0,
                                    }}
                                  >
                                    <div
                                      style={{
                                        display: "block",
                                        boxSizing: "border-box",
                                        paddingTop: "62.7451%",
                                      }}
                                    />
                                    <img
                                      alt="menu-diet-nutrition"
                                      sizes="(max-width: 768px) 15vw,10vw"
                                      src="/img/categories-menu/collection_2.webp"
                                      decoding="async"
                                      data-nimg="responsive"
                                      className="bg-sink-thumbnail object-cover transition duration-200 ease-in-out transform "
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
                                <a
                                  className="flex items-center justify-between py-2 hover:text-orange-500 text-base font-medium"
                                  href="/search"
                                >
                                  Fashion &amp; Clothing
                                </a>
                                <ul className="subMenuChild  w-full py-1">
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Automotive
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Car Audio &amp; Speakers
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      More Car Accessories
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Car Alarms and Security
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Battereries &amp; Chargers
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="relative">
                                <a href="/search">
                                  <div
                                    style={{
                                      display: "block",
                                      overflow: "hidden",
                                      position: "relative",
                                      boxSizing: "border-box",
                                      margin: 0,
                                    }}
                                  >
                                    <div
                                      style={{
                                        display: "block",
                                        boxSizing: "border-box",
                                        paddingTop: "62.7451%",
                                      }}
                                    />
                                    <img
                                      alt="menu-healthy-foods"
                                      sizes="(max-width: 768px) 15vw,10vw"
                                      src="/img/categories-menu/collection_3.webp"
                                      decoding="async"
                                      data-nimg="responsive"
                                      className="bg-sink-thumbnail object-cover transition duration-200 ease-in-out transform "
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
                                <a
                                  className="flex items-center justify-between py-2 hover:text-orange-500 text-base font-medium"
                                  href="/search"
                                >
                                  Garden &amp; Kitchen
                                </a>
                                <ul className="subMenuChild  w-full py-1">
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Audio &amp; Video
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Mobiles &amp; Tablets
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Bath
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Garden
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Garden
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="relative">
                                <a href="/search">
                                  <div
                                    style={{
                                      display: "block",
                                      overflow: "hidden",
                                      position: "relative",
                                      boxSizing: "border-box",
                                      margin: 0,
                                    }}
                                  >
                                    <div
                                      style={{
                                        display: "block",
                                        boxSizing: "border-box",
                                        paddingTop: "62.7451%",
                                      }}
                                    />
                                    <img
                                      alt="menu-grocery-items"
                                      sizes="(max-width: 768px) 15vw,10vw"
                                      src="/img/categories-menu/collection_4.webp"
                                      decoding="async"
                                      data-nimg="responsive"
                                      className="bg-sink-thumbnail object-cover transition duration-200 ease-in-out transform "
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
                                <a
                                  className="flex items-center justify-between py-2 hover:text-orange-500 text-base font-medium"
                                  href="/search"
                                >
                                  Beauty &amp; Health
                                </a>
                                <ul className="subMenuChild  w-full py-1">
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Battereries &amp; Chargers
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Headphones, Headsets
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Accessories
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Jewelry &amp; Watches
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Wedding Rings
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="relative">
                                <a href="/search">
                                  <div
                                    style={{
                                      display: "block",
                                      overflow: "hidden",
                                      position: "relative",
                                      boxSizing: "border-box",
                                      margin: 0,
                                    }}
                                  >
                                    <div
                                      style={{
                                        display: "block",
                                        boxSizing: "border-box",
                                        paddingTop: "62.7451%",
                                      }}
                                    />
                                    <img
                                      alt="menu-beaf-steak"
                                      sizes="(max-width: 768px) 15vw,10vw"
                                      src="/img/categories-menu/collection_5.webp"
                                      decoding="async"
                                      data-nimg="responsive"
                                      className="bg-sink-thumbnail object-cover transition duration-200 ease-in-out transform "
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
                                <a
                                  className="flex items-center justify-between py-2 hover:text-orange-500 text-base font-medium"
                                  href="/search"
                                >
                                  TV &amp; Video
                                </a>
                                <ul className="subMenuChild  w-full py-1">
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Men Watches
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Woman Watches
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Gift Certificates
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Gift for Man
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Gift for Woman
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="navPages-contentbottom bg-skin-carnation">
                        <div className="mx-auto  max-w-[1870px] px-4 md:px-6 lg:px-8 2xl:px-20">
                          <div className="text-white text-sm text-center py-4">
                            <strong>30% Off</strong> the shipping of your first
                            order with the code: <strong>RAZOR-SALE30</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menuItem group py-3 mx-4 xl:mx-5 ">
                    <a
                      className="uppercase inline-flex items-center text-sm text-white py-2 font-medium relative  group-hover:text-orange-500"
                      href="/search"
                    >
                      Mega Menu
                      <span className="text-xs w-4 flex justify-end text-white opacity-80 group-hover:text-orange-500">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 16 16"
                          className="transition duration-300 ease-in-out transform "
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </span>
                    </a>
                    <div className="subMega shadow-dropDown bg-white w-full  z-30 absolute start-0 hidden   group-hover:block">
                      <div className="mx-auto  max-w-screen-2xl   px-4 md:px-6 lg:px-8 2xl:px-20">
                        <div className="flex flex-row gap-5 pt-8 py-5">
                          <div className="cateArea basis-3/4 ">
                            <ul className="text-body text-sm grid grid-cols-5 gap-4 ">
                              <li className="relative">
                                <a
                                  className="flex items-center justify-between py-2 hover:text-orange-500 text-base font-medium"
                                  href="/search"
                                >
                                  Audio &amp; Video
                                </a>
                                <ul className="subMenuChild  w-full py-1">
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Home Audio
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Helicopters &amp; Parts
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Toys &amp; Hobbies
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Outdoor &amp; Traveling
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Garden
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="relative">
                                <a
                                  className="flex items-center justify-between py-2 hover:text-orange-500 text-base font-medium"
                                  href="/search"
                                >
                                  Automotive
                                </a>
                                <ul className="subMenuChild  w-full py-1">
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Automotive
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Car Audio &amp; Speakers
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      More Car Accessories
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Car Alarms and Security
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Battereries &amp; Chargers
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="relative">
                                <a
                                  className="flex items-center justify-between py-2 hover:text-orange-500 text-base font-medium"
                                  href="/search"
                                >
                                  Bath
                                </a>
                                <ul className="subMenuChild  w-full py-1">
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Audio &amp; Video
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Mobiles &amp; Tablets
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Bath
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Garden
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Garden
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="relative">
                                <a
                                  className="flex items-center justify-between py-2 hover:text-orange-500 text-base font-medium"
                                  href="/search"
                                >
                                  Garden
                                </a>
                                <ul className="subMenuChild  w-full py-1">
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Battereries &amp; Chargers
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Headphones, Headsets
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Accessories
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Jewelry &amp; Watches
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Wedding Rings
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="relative">
                                <a
                                  className="flex items-center justify-between py-2 hover:text-orange-500 text-base font-medium"
                                  href="/search"
                                >
                                  publications
                                </a>
                                <ul className="subMenuChild  w-full py-1">
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Men Watches
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Woman Watches
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Gift Certificates
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Gift for Man
                                    </a>
                                  </li>
                                  <li className="relative">
                                    <a
                                      className="flex items-center justify-between py-2 hover:text-orange-500  "
                                      href="/search"
                                    >
                                      Gift for Woman
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                          <div className="imageArea basis-1/4 false">
                            <a className="text-skin-base " href="/search">
                              <div className="card-img-container max-w-[350px]">
                                <div
                                  style={{
                                    display: "block",
                                    overflow: "hidden",
                                    position: "relative",
                                    boxSizing: "border-box",
                                    margin: 0,
                                  }}
                                >
                                  <div
                                    style={{
                                      display: "block",
                                      boxSizing: "border-box",
                                      paddingTop: "66.6667%",
                                    }}
                                  />
                                  <img
                                    alt="Product Image"
                                    sizes="(max-width: 768px) 15vw,15vw"
                                    src="/img/mega-menu/banner-menu.webp"
                                    decoding="async"
                                    data-nimg="responsive"
                                    className="object-cover bg-skin-thumbnail"
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
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="navPages-contentbottom bg-[#f35c5c]">
                        <div className="mx-auto  max-w-[1870px] px-4 md:px-6 lg:px-8 2xl:px-20">
                          <div className="text-white text-sm text-center py-4">
                            <strong>30% Off</strong> the shipping of your first
                            order with the code: <strong>RAZOR-SALE30</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menuItem group py-3 mx-4 xl:mx-5 relative">
                    <a
                      className="uppercase inline-flex items-center text-sm text-white py-2 font-medium relative  group-hover:text-orange-500"
                      href="/shops"
                    >
                      Vendors
                    </a>
                  </div>
                  <div className="menuItem group py-3 mx-4 xl:mx-5 relative">
                    <a
                      className="uppercase inline-flex items-center text-sm text-white py-2 font-medium relative  group-hover:text-orange-500"
                      href="/"
                    >
                      Pages
                      <span className="text-xs w-4 flex justify-end text-white opacity-80 group-hover:text-orange-500">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 16 16"
                          className="transition duration-300 ease-in-out transform "
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div className="menuItem group py-3 mx-4 xl:mx-5 relative">
                    <a
                      className="uppercase inline-flex items-center text-sm text-white py-2 font-medium relative  group-hover:text-orange-500"
                      href="/blog/blog-category-grid"
                    >
                      Blog
                      <span className="text-xs w-4 flex justify-end text-white opacity-80 group-hover:text-orange-500">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 16 16"
                          className="transition duration-300 ease-in-out transform "
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div className="menuItem group py-3 mx-4 xl:mx-5 relative">
                    <a
                      className="uppercase inline-flex items-center text-sm text-white py-2 font-medium relative  group-hover:text-orange-500"
                      href="/contact-us"
                    >
                      Contact Us
                    </a>
                  </div>
                </nav>
                <div className="ms-auto flex items-center flex-shrink-0">
                  <div className="navbar-right flex items-center overflow-hidden w-0 opacity-0 transition-all duration-200 ease-in-out">
                    <button
                      type="button"
                      aria-label="Search Toggle"
                      title="Search toggle"
                      className="outline-none me-6 w-12 md:w-14 h-full flex items-center justify-center transition duration-200 ease-in-out hover:text-heading focus:outline-none"
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        className="w-[22px] h-[22px] text-white "
                      >
                        <path
                          d="M19.0144 17.9256L13.759 12.6703C14.777 11.4129 15.3899 9.81507 15.3899 8.07486C15.3899 4.04156 12.1081 0.759766 8.07483 0.759766C4.04152 0.759766 0.759766 4.04152 0.759766 8.07483C0.759766 12.1081 4.04156 15.3899 8.07486 15.3899C9.81507 15.3899 11.4129 14.777 12.6703 13.759L17.9256 19.0144C18.0757 19.1645 18.2728 19.24 18.47 19.24C18.6671 19.24 18.8642 19.1645 19.0144 19.0144C19.3155 18.7133 19.3155 18.2266 19.0144 17.9256ZM8.07486 13.8499C4.89009 13.8499 2.2998 11.2596 2.2998 8.07483C2.2998 4.89006 4.89009 2.29976 8.07486 2.29976C11.2596 2.29976 13.8499 4.89006 13.8499 8.07483C13.8499 11.2596 11.2596 13.8499 8.07486 13.8499Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                    <div className="flex-shrink-0 flex items-center">
                    {false ? (
                      <Link href="/my-account/account-settings">
                      <img className="w-10 h-10 rounded-full" src={user.image} alt="Rounded avatar" />
                      </Link>
                    ):null}
                    {false ? (
                    <Link href="/my-account/account-settings">
                    <button className="text-white font-base text-lg mx-2">
                      My Account
                    </button>
                    </Link>):(
                      <button onClick={openModal}
      className="text-sm text-white font-normal focus:outline-none ms-2"
      aria-label="Authentication"
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 1024 1024"
        className="text-white text-xl lg:text-2xl"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" />
      </svg>
                      </button>
                    )}
                    </div>
                    <CartIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {showCategory && (
        <div className="shadow_bkg_show fixed w-full h-full inset-0 bg-blackk/70 z-40" />
      )}
     {/* <MobileCategory mobilecategory={mobilecategory} toggleMenu={toggleMenu} setMobileCategory={setMobileCategory}   /> */}
     {/* <AuthModal show={showauth} onClose={closeModal} /> */}
    </>
  );
};

export default Header;
