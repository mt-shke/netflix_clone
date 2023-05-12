"use client";

import ItemCard, { Item } from "./ItemCard";
import useSlidesImages from "@/hooks/useSlidesImages";
import { useEffect } from "react";

interface IItemsList {
   items: Item[];
   isTouched: boolean;
}

// Receives an array of items
// Handle responsiveness and displays the items accordingly
const ItemsList: React.FC<IItemsList> = ({ items, isTouched }) => {
   const sliderStartPosition = 0;
   const { numOfDisplayedItems, numOfItemsToRenderInList } = useSlidesImages();

   useEffect(() => {}, [items]);

   // Default render = allItems to set the default untouched render
   // On rerender, get exact itemsToRender on DOM and following fn slice to render the visible items
   let itemsToRender = items.slice(
      sliderStartPosition,
      numOfItemsToRenderInList
   );

   // onClick should reSlice to get the next or prev items and set the animation transition

   return (
      <ul className="w-full flex-none flex items-center justify-center">
         {itemsToRender.map((item, index) => (
            <li
               className={`relative flex flex-none mx-[2px] w-1/2 slidersm:w-1/3 slidermd:w-1/4 sliderlg:w-1/5 sliderxl:w-1/6 ${
                  !isTouched && index === 0 ? "opacity-0" : ""
               }`}
               key={item.title + index}
            >
               <ItemCard item={item} />
               {index !== 0 && index <= numOfDisplayedItems ? (
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
