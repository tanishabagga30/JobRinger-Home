'use client'
import React from 'react'
import CartIcon from './CartIcon'
import { useSelector } from "react-redux";
import { selectItems } from '@/lib/slices/cartSlice';
import { useAppContext } from '@/context/AppContext';
const BottomMenu = () => {
    const items = useSelector(selectItems);
    const {openMobileMenu,openCart} = useAppContext();
  return (
    <div className="lg:hidden fixed z-30 -bottom-0.5 flex items-center justify-between shadow-bottomNavigation body-font bg-gray-50 w-full h-14 px-4 md:px-6 lg:px-8 text-skin-muted pb-0.5">
  <button
    aria-label="Menu"
    onClick={openMobileMenu}
    className="flex flex-col items-center justify-center flex-shrink-0 outline-none focus:outline-none"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={14}
      viewBox="0 0 25.567 18"
    >
      <g transform="translate(-776 -462)">
        <rect
          data-name="Rectangle 941"
          width="12.749"
          height="2.499"
          rx="1.25"
          transform="translate(776 462)"
          fill="currentColor"
        />
        <rect
          data-name="Rectangle 942"
          width="25.567"
          height="2.499"
          rx="1.25"
          transform="translate(776 469.75)"
          fill="currentColor"
        />
        <rect
          data-name="Rectangle 943"
          width="17.972"
          height="2.499"
          rx="1.25"
          transform="translate(776 477.501)"
          fill="currentColor"
        />
      </g>
    </svg>
  </button>
  <button
    className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none"
    aria-label="Search Button"
  >
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <path
        d="M19.0144 17.9256L13.759 12.6703C14.777 11.4129 15.3899 9.81507 15.3899 8.07486C15.3899 4.04156 12.1081 0.759766 8.07483 0.759766C4.04152 0.759766 0.759766 4.04152 0.759766 8.07483C0.759766 12.1081 4.04156 15.3899 8.07486 15.3899C9.81507 15.3899 11.4129 14.777 12.6703 13.759L17.9256 19.0144C18.0757 19.1645 18.2728 19.24 18.47 19.24C18.6671 19.24 18.8642 19.1645 19.0144 19.0144C19.3155 18.7133 19.3155 18.2266 19.0144 17.9256ZM8.07486 13.8499C4.89009 13.8499 2.2998 11.2596 2.2998 8.07483C2.2998 4.89006 4.89009 2.29976 8.07486 2.29976C11.2596 2.29976 13.8499 4.89006 13.8499 8.07483C13.8499 11.2596 11.2596 13.8499 8.07486 13.8499Z"
        fill="currentColor"
      />
    </svg>
  </button>
  <a className="flex-shrink-0" href="/">
    <span className="sr-only">Home</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18px"
      height="20px"
      viewBox="0 0 17.996 20.442"
    >
      <path
        d="M48.187,7.823,39.851.182A.7.7,0,0,0,38.9.2L31.03,7.841a.7.7,0,0,0-.211.5V19.311a.694.694,0,0,0,.694.694H37.3A.694.694,0,0,0,38,19.311V14.217h3.242v5.095a.694.694,0,0,0,.694.694h5.789a.694.694,0,0,0,.694-.694V8.335a.7.7,0,0,0-.228-.512ZM47.023,18.617h-4.4V13.522a.694.694,0,0,0-.694-.694H37.3a.694.694,0,0,0-.694.694v5.095H32.2V8.63l7.192-6.98L47.02,8.642v9.975Z"
        transform="translate(-30.619 0.236)"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.4"
      />
    </svg>
  </a>
  <button
    onClick={openCart}
    className="flex items-center justify-center flex-shrink-0 h-auto focus:outline-none transform"
    aria-label="cart-button"
  >
    <div className="flex items-center relative cart-button w-[45px] h-[45px] px-0 py-[5px] rounded-[50%] border-2 border-solid border-[rgba(255,255,255,0.15)]">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" h-[20px] w-[20px]  text-xl">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
  </svg>
      <span className="cart-counter-badge min-w-[20px] min-h-[20px] text-[10px] p-0.5  flex items-center justify-center bg-orange-400 text-white absolute -top-0 -start-2.5 rounded-full font-bold">
        {items?.length}
      </span>
    </div>
  </button>
  <button
    className="flex-shrink-0 focus:outline-none"
    aria-label="Authentication"
  >
    <svg
      width={16}
      height={16}
      viewBox="0 0 448 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
        className=""
      />
    </svg>
  </button>
</div>

  )
}

export default BottomMenu
