'use client'
import React,{useState,useEffect,useRef} from 'react'
import {useDispatch, useSelector } from 'react-redux';
import { emptyCart,selectItems,selectTotal } from '@/lib/slices/cartSlice';
import CartProductItem from './CartProductItem';
import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';
const CartSidebar = () => {
  const {showcart,setShowCart,closeCart} = useAppContext();
    const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);
 console.log(items)
  const ref = useRef();
  
  useEffect(() => {
    if (showcart) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      document.body.style.width = 'calc(100% - 15px)';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction='';
      document.body.style.width = '';
    }
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowCart(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showcart,ref]);
  return (
    <div tabIndex={-1} className={`drawer drawer-right ${showcart ? 'drawer-open':''}`} >
   {showcart && (
       <div className="drawer-mask" />
       )}     
  <div className="drawer-content-wrapper" style={showcart ? { right: 0 }: { right: 0, transform: "translateX(100%)" }} ref={ref}>
    <div className="drawer-content">
      <div className="flex flex-col w-full h-full justify-between">
        <div className="w-full flex justify-between items-center relative ps-5 md:ps-7 border-b border-skin-base">
          <h3 className="text-skin-base font-semibold text-skin-base text-xl">
            Shopping Cart
          </h3>
          <div className="flex items-center">
            <button
              onClick={() => dispatch(emptyCart())}
              className="flex flex-shrink items-center text-15px transition duration-150 ease-in focus:outline-none text-skin-base opacity-50 hover:opacity-100 -me-1.5"
              aria-label="Clear All"
            >
              <svg
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M14.3546 3.46335L13.207 16.5406H4.79372L3.64636 3.46335L2.1925 3.59079L3.36082 16.9052C3.42231 17.5189 3.95478 18 4.57336 18H13.4274C14.0458 18 14.5784 17.5191 14.6409 16.8964L15.8085 3.59079L14.3546 3.46335Z"
                    fill="black"
                  />
                  <path
                    d="M11.6758 0H6.32445C5.65381 0 5.10822 0.54559 5.10822 1.21623V3.52705H6.56766V1.45944H11.4325V3.52702H12.8919V1.2162C12.892 0.54559 12.3464 0 11.6758 0Z"
                    fill="black"
                  />
                  <path
                    d="M16.7838 2.79724H1.21625C0.813183 2.79724 0.486511 3.12391 0.486511 3.52698C0.486511 3.93005 0.813183 4.25672 1.21625 4.25672H16.7838C17.1869 4.25672 17.5136 3.93005 17.5136 3.52698C17.5136 3.12391 17.1869 2.79724 16.7838 2.79724Z"
                    fill="black"
                  />
                </g>
              </svg>
              <span className="ps-1">Clear All</span>
            </button>
            <button
              onClick={closeCart}
              className="flex cursor-pointer text-2xl items-center justify-center px-4 md:px-6 py-6 lg:py-7 focus:outline-none transition-opacity text-skin-base hover:opacity-60"
              aria-label="close"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
              </svg>
            </button>
          </div>
        </div>
        {items.length?(
            <div className="os-host os-host-foreign os-theme-thin cart-scrollbar w-full flex-grow os-host-resize-disabled os-host-transition os-host-overflow os-host-overflow-y os-host-scrollbar-horizontal-hidden">
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
              style={{ margin: 0, width: 499, height: 155 }}
            />
            <div className="os-padding">
              <div
                className="os-viewport os-viewport-native-scrollbars-invisible"
                style={{overflowY:'scroll'}}
              >
                <div
                  className="os-content"
                  style={{ padding: 0, height: "100%", width: "100%" }}
                >
                  <div className="w-full px-5 md:px-7">
                  {items.map((item, i) => (
                   <CartProductItem
                      key={`cart-product-${item?._id}`}
                      _id={item?._id}
                      title={item?.title}
                      price={item?.price}
                      description={item?.description}
                      category={item?.category}
                      image={item?.image}
                      qty={item?.qty}
                      border={i !== items?.length - 1}
                      disabled={disabled}
                   />
                  ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
              <div className="os-scrollbar-track os-scrollbar-track-off">
                <div
                  className="os-scrollbar-handle"
                  style={{ width: "100%", transform: "translate(0px, 0px)" }}
                />
              </div>
            </div>
            <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden os-scrollbar-unusable">
              <div className="os-scrollbar-track os-scrollbar-track-off">
                <div
                  className="os-scrollbar-handle"
                  style={{ height: "100%", transform: "translate(0px, 0px)" }}
                />
              </div>
            </div>
            <div className="os-scrollbar-corner" />
          </div>
        ):(
            <div className="px-5 md:px-7 pt-8 pb-5 flex justify-center flex-col items-center">
  <div className="flex mx-auto w-[220px] md:w-auto">
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 512 512"
      className="text-[120px] text-gray-400"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx={176}
        cy={416}
        r={16}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <circle
        cx={400}
        cy={416}
        r={16}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M48 80h64l48 272h256"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128"
      />
    </svg>
  </div>
  <h3 className="text-skin-base mb-1.5 pt-8 font-semibold text-skin-base text-xl">
    Your cart is empty.
  </h3>
  <p className="text-sm lg:leading-[27px]">
    Please add product to your cart list
  </p>
</div>

        )}
        
        <div className="border-t border-skin-base px-5 md:px-7 pt-5 md:pt-6 pb-5 md:pb-6">
          <div className="flex pb-5 md:pb-7">
            <div className="pe-3">
              <h3 className="text-skin-base mb-2.5 text-15px sm:text-base font-medium">
                Subtotal:
              </h3>
              <p className="text-sm lg:leading-[27px] leading-6">
                Final price and discounts will be determined at the time of
                payment processing.
              </p>
            </div>
            <div className="flex-shrink-0 font-semibold text-base md:text-lg text-skin-base -mt-0.5 min-w-[80px] text-end">
              {total}{total?'₹':''}
            </div>
          </div>
          <div className="flex flex-col">
            <Link href="/checkout">
            <button
              className="w-full px-5 py-3 md:py-4 flex items-center justify-center bg-heading rounded font-semibold text-sm sm:text-15px text-white bg-orange-500 focus:outline-none transition duration-300 hover:bg-opacity-90"
              href="/checkout"
            >
              <span className="py-0.5">Proceed To Checkout</span>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default CartSidebar
