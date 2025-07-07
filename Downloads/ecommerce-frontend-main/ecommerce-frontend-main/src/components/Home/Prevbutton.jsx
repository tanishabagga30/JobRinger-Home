import React from 'react'

const Prevbutton = ({topvalue,leftvalue,className}) => {
  return (
    <div
  className={`swiper-prev ${className}  z-10 w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-base lg:text-lg xl:text-xl cursor-pointer flex items-center justify-center rounded-full bg-white absolute transition duration-300 hover:bg-[#ff9400] hover:text-skin-inverted focus:outline-none transform shadow-navigation 3xl:text-2xl start-3 xl:start-8`}
  style={{"top":`${topvalue}`,"left":`${leftvalue}`}}
  id="prevActivateId"
>
<svg
  fill="#000000"
  height="1em"
  width="1em"
  version="1.1"
  id="XMLID_54_"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 0.6 0.6"
  xmlSpace="preserve"
>
  <g id="previous">
    <g>
      <path
        points="17.2,23.7 5.4,12 17.2,0.3 18.5,1.7 8.4,12 18.5,22.3 		"
        d="M0.43 0.593L0.135 0.3L0.43 0.007L0.463 0.043L0.21 0.3L0.463 0.557Z"
      />
    </g>
  </g>
</svg>

</div>

  )
}

export default Prevbutton
