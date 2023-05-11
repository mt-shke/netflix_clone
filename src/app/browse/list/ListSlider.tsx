"use client";

import useWindowWidth from "@/hooks/useWindowWidth";
import { useEffect, useState } from "react";
import ItemsList from "./ItemsList";
import LeftArrow from "@/components/UI/icons/leftArrow";
import RightArrow from "@/components/UI/icons/rightArrow";
import { Item } from "./ItemCard";

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

interface IListSlider {
   listTitle: string;
   data: Item[];
}

const ListSlider: React.FC<IListSlider> = ({ listTitle, data }) => {
   const [currentPosition, setCurrentPosition] = useState(0);
   const [itemsToRender, setItemsToRender] = useState(data);
   const [isTouched, setIsTouched] = useState(false);
   const originalItems = data.slice(0, 12);
   const defaultItem = [itemsToRender[0], ...itemsToRender];
   const lastItemPosition = data.length - 1;
   const firstItem = originalItems[0];
   const ww = useWindowWidth();

   useEffect(() => {
      setItemsToRender((p) => updateItems());
   }, [currentPosition]);

   // Number of Images displayed on screen
   const numOfDisplayedItems =
      ww < 500 ? 2 : ww < 800 ? 3 : ww < 1100 ? 4 : ww < 1400 ? 5 : 6;
   // Number of items to render on DOM
   const numOfSliderItems = numOfDisplayedItems * 3 + 2;

   // Should handle how listItems is updated when fetching last items
   const updateItems = () => {
      let lastItemToLoad = currentPosition + numOfSliderItems;
      let restToLoad = 0;
      if (lastItemToLoad >= lastItemPosition) {
         restToLoad = lastItemToLoad - lastItemPosition;
         lastItemToLoad = lastItemPosition;
      }
      const updatedItems = data.slice(currentPosition, lastItemToLoad);
      return updatedItems;
   };

   const handleNext = () => {
      if (!isTouched) {
         setIsTouched((p) => true);
      }
      setCurrentPosition((currentIndex) =>
         currentPosition + numOfDisplayedItems >= lastItemPosition
            ? lastItemPosition
            : currentPosition + numOfDisplayedItems
      );
   };

   const handlePrev = () => {
      setCurrentPosition((currentIndex) =>
         currentPosition - numOfDisplayedItems <= 0
            ? 0
            : currentPosition - numOfDisplayedItems
      );
   };

   if (!ww) {
      return <div></div>;
   }

   return (
      <section className="w-full min-w-[360px] flex flex-col items-start gap-1 overflow-hidden">
         <h2 className="font-bold mb-1 ml-4 lg:text-lg xl:text-xl">
            {listTitle}
         </h2>
         <div className="group relative w-full flex min-w-[360px] px-4 sm:px-6 md:px-8 lg:px-12">
            <ItemsList
               items={!isTouched ? defaultItem : itemsToRender}
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
