import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/slices/cartSlice";
import addedToCartToast from "@/util/Toast/addedToCartToast";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
const Productcard = ({ product }) => {
  const {setShowModal,setSelectedProduct} = useAppContext();
  const dispatch = useDispatch();
  const { _id, name, price, description, category } = product;
  const title = name;

  const image = product?.image;

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
        qty: 1,
        toast: true,
      })
    );
    addedToCartToast(image, title);
  };
  return (
    <>
      <style jsx>
        {`
          .product-card-v2:hover .buttons--quickview {
            opacity: 1;
            visibility: visible;
            transform: translateX(-50%) scale(1);
          }
          .product-card-v2 .buttons--quickview {
            display: block;
            position: absolute;
            z-index: 5;
            top: 40%;
            left: 50%;
            transform: translateX(-50%) scale(0);
            width: 50px;
            height: 50px;
            border-radius: 50%;
            line-height: 48px;
            opacity: 0;
            text-align: center;
            box-shadow: 0 3px 6px 1px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease-in-out 0s;
          }
          .product-card-v2:hover .product-cart-button {
            bottom: 5px;
          }
          .product-card-v2 .product-cart-button {
            position: absolute;
            width: 100%;
            bottom: -40px;
            left: 0;
            z-index: 12;
            transition: bottom 0.3s ease-in-out;
          }
          .swiper-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            z-index: 1;
            transition-property: transform;
            box-sizing: content-box;
          }
          .swiper-grid > .swiper-wrapper {
            flex-wrap: wrap;
          }
        `}
      </style>
      <div className="swiper-slide px-1.5 md:px-2 xl:px-2.5 swiper-slide-active">
        <article
          className="flex flex-col group product-card-v2 card-image--jump  overflow-hidden  h-full"
          title="[Sample] Able Brewing System  consetetur sadipscing elitr"
        >
          <div className="relative flex-shrink-0  mt-4">
            <div className="card-img-container flex overflow-hidden max-w-[230px] mx-auto relative">
              <div
                style={{
                  display: "inline-block",
                  maxWidth: "100%",
                  overflow: "hidden",
                  position: "relative",
                  boxSizing: "border-box",
                  margin: 0,
                }}
              >
                <div
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    maxWidth: "100%",
                  }}
                >
                  <img
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                    style={{
                      maxWidth: "100%",
                      display: "block",
                      margin: 0,
                      border: "none",
                      padding: 0,
                    }}
                  />
                </div>
                <Image
                  alt="[Sample] Able Brewing System  consetetur sadipscing elitr"
                  src={product?.image}
                  width={200}
                  height={238}
                  decoding="async"
                  data-nimg="intrinsic"
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
            <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 z-10 -mx-0.5 sm:-mx-1">
              <button
                onClick={() => {
                  setShowModal(true);
                  setSelectedProduct(product);
                }}
                className="buttons--quickview cursor-pointer top-[40%] left-[50%] h-[50px] w-[50px] px-4 py-2 bg-white  rounded hover:bg-[#ff7e00] hover:text-white"
                aria-label="Quick View Button"
              >
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  opacity={1}
                >
                  <path
                    d="M19.0144 17.9256L13.759 12.6703C14.777 11.4129 15.3899 9.81507 15.3899 8.07486C15.3899 4.04156 12.1081 0.759766 8.07483 0.759766C4.04152 0.759766 0.759766 4.04152 0.759766 8.07483C0.759766 12.1081 4.04156 15.3899 8.07486 15.3899C9.81507 15.3899 11.4129 14.777 12.6703 13.759L17.9256 19.0144C18.0757 19.1645 18.2728 19.24 18.47 19.24C18.6671 19.24 18.8642 19.1645 19.0144 19.0144C19.3155 18.7133 19.3155 18.2266 19.0144 17.9256ZM8.07486 13.8499C4.89009 13.8499 2.2998 11.2596 2.2998 8.07483C2.2998 4.89006 4.89009 2.29976 8.07486 2.29976C11.2596 2.29976 13.8499 4.89006 13.8499 8.07483C13.8499 11.2596 11.2596 13.8499 8.07486 13.8499Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col mb-2 h-full overflow-hidden text-center relative">
            <div className="text-sm mt-auto leading-6 text-gray-400 mb-1.5">
              {product.unit}
            </div>
            <a
              className="text-blue-600 text-sm leading-5  line-clamp-2 mb-2 hover:text-orange-500"
              href="/products/sample-able-brewing-system-consetetur"
            >
              {product.name}
            </a>
            <div className="space-s-2 mb-4 lg:mb-4">
              <span className="inline-block font-semibold text-15px lg:text-base text-gray-700">
                ${product.discountedPrice}
              </span>
            </div>
            <div className="inline-block product-cart-button">
              <button
                onClick={addItemToCart}
                className="min-w-[150px] cursor-pointer px-4 py-2 bg-[#ff7e00] text-white text-[13px] items-center justify-center focus:outline-none focus-visible:outline-none rounded"
                aria-label="Count Button"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default Productcard;
