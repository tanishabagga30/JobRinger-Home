"use client";
import React from "react";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import MobileMenuItem from "./MobileMenuItem"; 
import menuData from "@/data/menuData";
const MobileMenu = () => {
  const { isMobileMenuOpen, closeMobileMenu } = useAppContext();
  return (
    <div>
      <div
        className={`rc-drawer rc-drawer-left ${
          isMobileMenuOpen ? "rc-drawer-open" : ""
        }`}
        tabIndex={-1}
      >
        <div
          tabIndex={0}
          aria-hidden="true"
          data-sentinel="start"
          style={{
            width: 0,
            height: 0,
            overflow: "hidden",
            outline: "none",
            position: "absolute",
          }}
        />
        <div
          className={`rc-drawer-content-wrapper ${
            isMobileMenuOpen ? "" : "rc-drawer-content-wrapper-hidden"
          }`}
          style={{ width: 378 }}
        >
          <div
            className="rc-drawer-section w-[375px]"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex flex-col w-full h-full">
              <div className="bg-slate-600 w-full border-b border-border-base flex justify-between items-center relative ltr:pl-5 rtl:pr-5 md:ltr:pl-7 md:rtl:pr-7 shrink-0 py-0.5">
                <div role="button" className="inline-flex">
                  <a
                    className="group hover:text-primary-500 transition-all ease-in-out duration-500 inline-flex focus:outline-none"
                    href="/"
                  >
                    <Image
                      alt="razor"
                      width={200}
                      height={105}
                      src="/custom-logo.png"
                      style={{ color: "transparent" }}
                    />
                  </a>
                </div>
                <button
                  className="flex items-center justify-center px-4 py-5 text-2xl transition-opacity md:px-5 lg:py-8 focus:outline-none hover:opacity-60"
                  aria-label="close"
                  onClick={closeMobileMenu}
                >
                  <svg
                    stroke="currentColor"
                    fill="white"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z" />
                  </svg>
                </button>
              </div>
              <div
                data-overlayscrollbars-initialize
                className="os-theme-thin flex-grow mb-auto menu-scrollbar"
                data-overlayscrollbars="host"
              >
                <div
                  data-overlayscrollbars-contents
                  data-overlayscrollbars-viewport="scrollbarHidden overflowXHidden overflowYHidden"
                  tabIndex={-1}
                  style={{
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                    top: 0,
                    right: "auto",
                    left: 0,
                    width: "calc(100% + 0px)",
                    padding: 0,
                  }}
                >
                  <div className="flex flex-col px-0 text-brand-dark h-[calc(100vh_-_150px)] overflow-y-auto">
      <ul className="mobile-menu">
        {menuData.map((item, index) => (
          <MobileMenuItem key={index} item={item} />
        ))}
      </ul>
    </div>
                </div>
                <div className="os-scrollbar os-scrollbar-horizontal os-theme-dark os-scrollbar-auto-hide os-scrollbar-auto-hide-hidden os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-unusable">
                  <div className="os-scrollbar-track">
                    <div className="os-scrollbar-handle" />
                  </div>
                </div>
                <div className="os-scrollbar os-scrollbar-vertical os-theme-dark os-scrollbar-auto-hide os-scrollbar-auto-hide-hidden os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-unusable">
                  <div className="os-scrollbar-track">
                    <div className="os-scrollbar-handle" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center py-3 -mx-3 border-t text-brand-light border-border-base px-7 shrink-0">
                <a
                  className="group hover:text-primary-500 transition-all ease-in-out duration-500 text-heading mx-3  text-brand-dark text-opacity-60 hover:text-brand facebook"
                  href="https://www.facebook.com/"
                >
                  <span className="sr-only">text-facebook</span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    className="w-6 h-6"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                    />
                  </svg>
                </a>
                <a
                  className="group hover:text-primary-500 transition-all ease-in-out duration-500 text-heading mx-3  text-brand-dark text-opacity-60 hover:text-brand twitter"
                  href="https://twitter.com/"
                >
                  <span className="sr-only">text-twitter</span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    className="w-6 h-6"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M496 109.5a201.8 201.8 0 0 1-56.55 15.3 97.51 97.51 0 0 0 43.33-53.6 197.74 197.74 0 0 1-62.56 23.5A99.14 99.14 0 0 0 348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 0 0 2.54 22.1 280.7 280.7 0 0 1-203-101.3A95.69 95.69 0 0 0 36 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0 1 35.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 0 1-25.94 3.4 94.38 94.38 0 0 1-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0 1 39.5 405.6a203 203 0 0 1-23.5-1.4A278.68 278.68 0 0 0 166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 0 0 496 109.5z" />
                  </svg>
                </a>
                <a
                  className="group hover:text-primary-500 transition-all ease-in-out duration-500 text-heading mx-3  text-brand-dark text-opacity-60 hover:text-brand youtube"
                  href="https://www.youtube.com/"
                >
                  <span className="sr-only">text-youtube</span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    className="w-6 h-6"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z" />
                  </svg>
                </a>
                <a
                  className="group hover:text-primary-500 transition-all ease-in-out duration-500 text-heading mx-3  text-brand-dark text-opacity-60 hover:text-brand instagram"
                  href="https://www.instagram.com/"
                >
                  <span className="sr-only">text-instagram</span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    className="w-6 h-6"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M349.33 69.33a93.62 93.62 0 0 1 93.34 93.34v186.66a93.62 93.62 0 0 1-93.34 93.34H162.67a93.62 93.62 0 0 1-93.34-93.34V162.67a93.62 93.62 0 0 1 93.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
                    <path d="M377.33 162.67a28 28 0 1 1 28-28 27.94 27.94 0 0 1-28 28zM256 181.33A74.67 74.67 0 1 1 181.33 256 74.75 74.75 0 0 1 256 181.33m0-37.33a112 112 0 1 0 112 112 112 112 0 0 0-112-112z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          tabIndex={0}
          aria-hidden="true"
          data-sentinel="end"
          style={{
            width: 0,
            height: 0,
            overflow: "hidden",
            outline: "none",
            position: "absolute",
          }}
        />
      </div>
    </div>
  );
};

export default MobileMenu;
