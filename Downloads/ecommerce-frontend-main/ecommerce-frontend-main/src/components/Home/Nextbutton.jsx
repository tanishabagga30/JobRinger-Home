import React from "react";

const Nextbutton = ({ rightvalue, topvalue, className }) => {
  return (
    <div
      className={`swiper-next ${className} z-10  hover:bg-[#ff9400] w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-base lg:text-lg xl:text-xl cursor-pointer flex items-center justify-center rounded-full bg-white absolute transition duration-300  text-gray-950 hover:text-skin-inverted focus:outline-none transform shadow-navigation 3xl:text-2xl end-3 xl:end-8`}
      id="nextActivateId"
      style={{ top: `${topvalue}`, right: `${rightvalue}` }}
    >
      <svg
        fill="#000000"
        height="1em"
        width="1em"
        version="1.1"
        id="XMLID_287_"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 0.6 0.6"
        xmlSpace="preserve"
      >
        <g id="next">
          <g>
            <path
              points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 "
              d="M0.17 0.593L0.135 0.557L0.393 0.3L0.135 0.043L0.17 0.007L0.463 0.3Z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Nextbutton;
