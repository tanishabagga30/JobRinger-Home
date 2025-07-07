import React from "react";
import { useDispatch } from "react-redux";
import { updateQty, removeFromCart } from "@/lib/slices/cartSlice";
const CartProductItem = ({
  _id,
  title,
  price,
  description,
  category,
  image,
  qty,
  border,
  disabled,
}) => {
  const dispatch = useDispatch();
  const total = price * qty;

  const removeItemFromCart = () => dispatch(removeFromCart({ _id }));
  const incQty = () =>
    dispatch(
      updateQty({
        _id,
        title,
        price,
        description,
        category,
        image,
        qty: qty + 1,
      })
    );
  const decQty = () =>
    dispatch(
      updateQty({
        _id,
        title,
        price,
        description,
        category,
        image,
        qty: qty - 1,
      })
    );

  return (
    <div
      className="group w-full h-auto flex justify-start items-center bg-white py-4 md:py-7 border-b border-skin-one border-opacity-70 relative last:border-b-0"
      title="[Sample] Able Brewing System  consetetur sadipscing elitr"
    >
      <div className="relative flex rounded overflow-hidden flex-shrink-0 cursor-pointer w-[90px] md:w-[100px] h-[90px] md:h-[100px]">
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
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
              style={{
                maxWidth: "100%",
                display: "block",
                margin: 0,
                border: "none",
                padding: 0,
              }}
            />
          </div>
          <img
            alt="[Sample] Able Brewing System  consetetur sadipscing elitr"
            src={image}
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
        <button
          onClick={removeItemFromCart}
          className="absolute cursor-pointer top-0 start-0 h-full w-full bg-blackk bg-opacity-30 md:bg-opacity-0 flex justify-center items-center transition duration-200 ease-in-out md:group-hover:bg-opacity-30"
          role="button"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 512 512"
            className="relative text-white text-2xl transform md:scale-0 md:opacity-0 transition duration-300 ease-in-out md:group-hover:scale-100 md:group-hover:opacity-100"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z" />
          </svg>
        </button>
      </div>
      <div className="flex w-full overflow-hidden items-start justify-between space-x-2">
        <div className="ps-3 md:ps-4">
          <a
            className="block text-skin-base text-13px sm:text-sm mb-2 lg:text-15px transition-all leading-5 hover:text-skin-primary"
            href="/products/sample-able-brewing-system-consetetur"
          >
            {title}
          </a>
        
          <div className="button--mutiqty  items-center justify-between rounded overflow-hidden flex-shrink-0  inline-flex">
            <button
              onClick={decQty}
              className="flex items-center justify-center flex-shrink-0  transition-all ease-in-out duration-300 focus:outline-none focus-visible:outline-none w-6 h-6 border border-gray-400 cursor-pointer hover:bg-orange-500 hover:border-orange-500 rounded-full hover:text-white"
            >
              <span className="sr-only">button-minus</span>
              <svg
                className="transition-all"
                width={14}
                height={14}
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
            <span className="font-semibold text-skin-base flex items-center justify-center h-full transition-colors duration-250 ease-in-out cursor-default flex-shrink-0 text-15px w-9">
              {qty}
            </span>
            <button
              onClick={incQty}
              className="group flex items-center justify-center  flex-shrink-0 transition-all ease-in-out duration-300 focus:outline-none focus-visible:outline-none w-6 h-6 border border-gray-400 cursor-pointer hover:bg-orange-500 hover:border-orange-500 rounded-full hover:text-white"
              title=""
            >
              <span className="sr-only">button-plus</span>
              <svg
                width={14}
                height={14}
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
        </div>
        <div className="flex font-semibold text-sm md:text-base text-skin-base leading-5 flex-shrink-0 min-w-[65px] md:min-w-[80px] justify-end">
          {price}
          {price ? "₹" : ""}
        </div>
      </div>
    </div>
  );
};

export default CartProductItem;
