"use client";

import useWindowWidth from "@/hooks/useWindowWidth";
import ItemCard, { Item } from "./ItemCard";

interface IItemsList {
   items: Item[];
   isTouched: boolean;
}

// Receives an array of images
// Handle responsiveness and displays the images accordingly
const ItemsList: React.FC<IItemsList> = ({ items, isTouched }) => {
   const sliderStartPosition = 0;
   const ww = useWindowWidth();
   let displayedImgs =
      ww < 500 ? 2 : ww < 800 ? 3 : ww < 1100 ? 4 : ww < 1400 ? 5 : 6;

   let numOfImgs =
      ww < 500 ? 4 : ww < 800 ? 5 : ww < 1100 ? 6 : ww < 1400 ? 7 : 8;
   const imgsToRender = items.slice(sliderStartPosition, numOfImgs);

   return (
      <ul className="w-full flex-none flex items-center justify-center">
         {imgsToRender.map((item, index) => (
            <li
               className={`relative flex flex-none mx-[2px] w-1/2 slidersm:w-1/3 slidermd:w-1/4 sliderlg:w-1/5 sliderxl:w-1/6 
               ${!isTouched && index === 0 ? "opacity-0" : ""}
               `}
               key={item.title + index}
            >
               <ItemCard item={item} />
               {index !== 0 && index <= displayedImgs ? (
                  ""
               ) : (
                  <span className="absolute z-50 inset-0 w-full h-full bg-black opacity-75"></span>
               )}
            </li>
         ))}
      </ul>
   );
};
export default ItemsList;
