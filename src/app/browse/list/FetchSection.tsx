"use client";

import { allItems, itemsCategories } from "@/data/data";
import useHandleScrollDown from "@/hooks/useHandleScrollDown";
import { useEffect, useRef, useState } from "react";
import ListSlider, { IListSlider } from "./ListSlider";
import { shuffleArray } from "@/utils/array";
import { Item } from "./ItemCard";

const FetchSection: React.FC = () => {
   const [fetchedCategories, setFetchedCategories] = useState<IListSlider[]>(
      []
   );
   const [isFetching, setIsFetching] = useState(false);
   const sectionRef = useRef<HTMLDivElement>(null);
   const data = allItems;
   const categories = itemsCategories;
   const categoriesData = categories.map((_) => shuffleArray([...data]));

   const handleScrollDown = useHandleScrollDown(sectionRef, () =>
      fetchNewContent()
   );

   useEffect(() => {}, [fetchedCategories]);

   const fetchNewContent = () => {
      if (isFetching === true) {
         return;
      }

      // TODO
      if (fetchedCategories.length === categoriesData.length - 30) {
         setIsFetching((_) => true);
         return;
      }
      setIsFetching((_) => true);
      setTimeout(() => {
         setFetchedCategories((p) => {
            const prevLength = p.length;
            const newSliderItem = !prevLength
               ? [
                    {
                       listTitle: categories[0],
                       data: categoriesData[0] as Item[],
                    },
                 ]
               : [
                    ...p,
                    {
                       listTitle: categories[prevLength - 1],
                       data: categoriesData[prevLength - 1] as Item[],
                    },
                 ];
            return newSliderItem;
         });
         setIsFetching((_) => false);
      }, 500);
   };

   return (
      <section
         ref={sectionRef}
         id={`sectionId`}
         className="w-full relative z-40 pb-10 flex flex-col gap-6"
      >
         {!!fetchedCategories.length &&
            fetchedCategories.map((data, index) => (
               <ListSlider
                  data={data.data}
                  key={data.listTitle + index}
                  listTitle={data.listTitle}
               />
            ))}
      </section>
   );
};

export default FetchSection;
