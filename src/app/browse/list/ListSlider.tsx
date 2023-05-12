"use client";

import { useEffect, useState } from "react";
import ItemsList from "./ItemsList";
import LeftArrow from "@/components/UI/icons/leftArrow";
import RightArrow from "@/components/UI/icons/rightArrow";
import { Item } from "./ItemCard";
import useSlidesImages from "@/hooks/useSlidesImages";

// Receive a list(array) of items{img,title,etc}
// - List contains 40 items
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

export interface IListSlider {
   listTitle: string;
   data: Item[];
}

const ListSlider: React.FC<IListSlider> = ({ listTitle, data }) => {
   const [currentPosition, setCurrentPosition] = useState(0);
   const [itemsToRender, setItemsToRender] = useState<Item[]>([]);
   const [isTouched, setIsTouched] = useState(false);
   const { numOfDisplayedItems, numOfSliderItems } = useSlidesImages();
   const originalItems = data;
   const defaultItems = [originalItems[0], ...originalItems];
   const lastItemPosition = data.length - 1;

   useEffect(() => {
      setItemsToRender((p) => updateItems());
   }, [currentPosition]);

   // Handle how itemsToRender are updated
   const updateItems = () => {
      let lastItemToLoad = currentPosition + numOfSliderItems;
      if (!isTouched) {
         return [...originalItems, ...originalItems, ...originalItems].slice(
            currentPosition,
            lastItemToLoad
         );
      }
      return [...originalItems, ...originalItems, ...originalItems].slice(
         currentPosition,
         lastItemToLoad
      );
   };

   // Handle arrow buttons
   const handleNext = () => {
      if (!isTouched) {
         setIsTouched((_) => true);
         setCurrentPosition(
            (_) => currentPosition + numOfDisplayedItems + lastItemPosition
         );
         return;
      }
      if (currentPosition > 100) {
         setCurrentPosition(
            (_) => currentPosition + numOfDisplayedItems - data.length
         );
         return;
      }
      setCurrentPosition(() => currentPosition + numOfDisplayedItems);
   };

   const handlePrev = () => {
      if (currentPosition < 20) {
         setCurrentPosition(
            (_) => currentPosition + numOfDisplayedItems + data.length
         );
         return;
      }
      setCurrentPosition(() => currentPosition - numOfDisplayedItems);
   };

   return (
      <section className="w-full min-w-[360px] flex flex-col items-start gap-1 overflow-hidden">
         <h2 className="font-bold mb-1 ml-4 lg:text-lg xl:text-xl">
            {listTitle}
         </h2>
         <div className="group relative w-full flex min-w-[360px] px-4 sm:px-6 md:px-8 lg:px-12">
            {/* <div className="group relative w-full flex min-w-[360px] px-4 sm:px-6 md:px-8 lg:px-12 transition-all translate-x-full duration-300"> */}
            <ItemsList
               items={!isTouched ? defaultItems : itemsToRender}
               isTouched={isTouched}
            />
            {!!isTouched && (
               <span
                  onClick={handlePrev}
                  className="absolute z-50 left-0 top-0 h-full w-fit grid place-items-center opacity-0 group-hover:opacity-100 group-hover:cursor-pointer transition-all w-4 sm:w-6 md:w-8 lg:w-12"
               >
                  <LeftArrow
                     className="w-4 sm:w-6 md:w-8 lg:w-12"
                     fill="white"
                  />
               </span>
            )}
            <span
               onClick={handleNext}
               className="absolute z-50 right-0 top-0 h-full w-fit grid place-items-center opacity-0 group-hover:opacity-100 group-hover:cursor-pointer transition-all w-4 sm:w-6 md:w-8 lg:w-12"
            >
               <RightArrow className="w-4 sm:w-6 md:w-8 lg:w-12" fill="white" />
            </span>
         </div>
      </section>
   );
};

export default ListSlider;
