"use client";

import useWindowWidth from "@/hooks/useWindowWidth";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ItemsList from "./ItemsList";
import LeftArrow from "@/components/UI/icons/leftArrow";
import RightArrow from "@/components/UI/icons/rightArrow";

// Receive a list(array) of images
//OK Display cols of imgs list depending on window width
// Slider buttons control the list position and displayed imgs

// => useResponsive hook
// => Depending on the media size, update the list and display the numbers of imgs accordingly

// OK
// - List should wrap depending on window width so, all imgs should be displayed entirely
// - Max displayed imgs : 6
// - Min displayed imgs : 2

// - Some imgs fetched at page loading
// - Async call when list is clicked to fetch lastest items => update/Add new items to the list

// On hover
// - On each side, display arrows direction
// - On Top right, display the current list position with multiple bars

interface IListSlider {
   data: string[];
   // data: item[];
   // todo item type
}

// const ListSlider: React.FC<IListSlider> = ({ data = imgs }) => {
const ListSlider: React.FC = () => {
   const ref = useRef(null);
   const [currentPosition, setCurrentPosition] = useState(0);
   const ww = useWindowWidth();

   return (
      <section className="w-full min-w-[360px] flex flex-col items-start gap-1 overflow-hidden">
         <h2 className="font-bold mb-1 lg:text-xl 2xl:text-2xl">My List</h2>
         <div className="relative w-full flex min-w-[360px] px-4 sm:px-6 md:px-8 lg:px-12">
            <ItemsList />
            <span className="absolute z-50 left-0 top-0 h-full w-fit grid place-items-center w-4 sm:w-6 md:w-8 lg:w-12">
               <LeftArrow className="w-4 sm:w-6 md:w-8 lg:w-12" fill="white" />
            </span>
            <span className="absolute z-50 right-0 top-0 h-full w-fit grid place-items-center w-4 sm:w-6 md:w-8 lg:w-12 overflow-hidden">
               {/* <RightArrow className="w-4 sm:w-6 md:w-8 lg:w-12" fill="white" /> */}
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 16">
                  <path
                     d="M 1 0 L 9 8 L 1 16 L 0 15 L 7 8 L 0 1"
                     fill="white"
                  />
               </svg>
            </span>
         </div>
      </section>
   );
};

export default ListSlider;

interface ISliderImage {
   src: string;
   alt: string;
   width: number;
   height: number;
}

const SliderImage: React.FC<ISliderImage> = ({ src, alt, width, height }) => {
   return (
      <Image
         className={`w-full max-w-[400px] object-fill`}
         src={src}
         alt={alt}
         width={width}
         height={height}
      />
   );
};

{
   /* <section className="flex-auto min-w-[360px] flex flex-row items-start gap-1 mt-8 mt-4">
<div className="flex flex-col justify-start h-full gap-2 ">
   {!!data.images.length &&
      data.images.map((elem, index) => (
         <div
            className={`w-12 border-[1px] border-gray-400 ${
               index === currentImg && "galleryBoxShadow"
            }`}
            //  onMouseOver={() => handleImageWithDot(index)}
            key={index}
         >
            <Image
               width={imgData.width}
               height={imgData.height}
               src={elem}
               alt={data.name}
               className="object-contain w-full"
            />
         </div>
      ))}
</div>
<div
   ref={ref}
   className={`w-full max-h-[400px] aspect-square grid place-items-center overflow-hidden`}
>
   <SliderImage
      src={data.images[currentImg]}
      alt={data.name}
      width={imgData.width}
      height={imgData.height}
   />
</div>
</section> */
}

const imgs = [
   "alice.jpg",
   "bcs.jpg",
   "blackMirror.jpg",
   "breakingBad.webp",
   "theEndofTheFuckingWorld.jpg",
   "peakyBlinders.jpg",
   "dark.jpg",
   "dontLookUp.jpg",
   "queensGambit.jpg",
   "ozark.jpg",
   "strangerThings.jpg",
   "theOffice.webp",
   "twd.webp",
];

// https://www.dropbox.com/s/cv1jnb2vyg2brub/black-mirror.mp4?dl=0
