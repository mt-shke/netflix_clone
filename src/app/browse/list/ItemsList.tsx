"use client";

import useWindowWidth from "@/hooks/useWindowWidth";
import ItemCard from "./ItemCard";

const ItemsList: React.FC = () => {
   const allItems = imgs.map((item) => ({
      id: item,
      title: item,
      imgUrl: "/assets/images/" + item,
   }));
   const sliderStartPosition = 0;
   const ww = useWindowWidth();
   let displayedImgs =
      ww < 500 ? 2 : ww < 800 ? 3 : ww < 1100 ? 4 : ww < 1400 ? 5 : 6;
   let numOfImgs =
      ww < 500 ? 4 : ww < 800 ? 5 : ww < 1100 ? 6 : ww < 1400 ? 7 : 8;
   const imgsToRender = allItems.slice(sliderStartPosition, numOfImgs);

   return (
      <>
         <ul className="w-full flex-none flex items-center justify-center gap-1">
            {imgsToRender.map((item, index) => (
               <li
                  className={`relative flex flex-none w-1/2 slidersm:w-1/3 slidermd:w-1/4 sliderlg:w-1/5 sliderxl:w-1/6 
                  `}
                  key={item.title}
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
      </>
   );
};
export default ItemsList;

interface IItemContainer {
   item: any;
   width: string;
}

const ItemContainer: React.FC<IItemContainer> = ({ item, width }) => {
   return (
      <li className={`flex flex-none w-${width}`} key={item.title}>
         <ItemCard item={item} />
      </li>
   );
};

const imgs = [
   "alice.jpg",
   "bcs.jpg",
   "blackMirror.jpg",
   "breakingBad.webp",
   "theEndofTheFuckingWorld.jpg",
   "dontLookUp.jpg",
   "peakyBlinders.jpg",
   "dark.jpg",
   "ozark.jpg",
   "queensGambit.jpg",
   "strangerThings.jpg",
   "theOffice.webp",
   "twd.webp",
];
