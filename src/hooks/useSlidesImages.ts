import { useEffect, useState } from "react";
import useWindowWidth from "./useWindowWidth";

const useSlidesImages = () => {
   const windowWidth = useWindowWidth();
   const [state, setState] = useState({
      numOfDisplayedItems: 0,
      numOfSliderItems: 0,
      numOfItemsToRenderInList: 0,
   });

   // Number of items displayed on screen
   useEffect(() => {
      const updatedNumOfDisplayedItems =
         windowWidth < 500
            ? 2
            : windowWidth < 800
            ? 3
            : windowWidth < 1100
            ? 4
            : windowWidth < 1400
            ? 5
            : 6;

      // Number of items to return in ItemsListComponents, to handle translate animation
      const updatedNumOfSliderItems = updatedNumOfDisplayedItems * 3 + 2;

      // Number of items to render in ItemsList components and avoid performance issues
      const updatedNumOfItemToRenderInList = updatedNumOfDisplayedItems + 2;

      setState((_) => ({
         numOfDisplayedItems: updatedNumOfDisplayedItems,
         numOfSliderItems: updatedNumOfSliderItems,
         numOfItemsToRenderInList: updatedNumOfItemToRenderInList,
      }));
   }, [windowWidth]);

   return state;
};

export default useSlidesImages;
