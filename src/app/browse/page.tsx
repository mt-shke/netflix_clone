"use client";

import MainContainer from "@/components/container/MainContainer";
import PageContainer from "@/components/container/PageContainer";
import BrowsePageHeader from "./header";
import ListSlider from "./list/ListSlider";
import { allItems } from "@/data/data";
import { shuffleArray } from "@/utils/array";
import BrowsePageBackground from "./main/BrowsePageBackground";
import { useEffect, useState } from "react";
import FetchSection from "./list/FetchSection";

const BrowsePage: React.FC = () => {
   const [isClient, setIsClient] = useState(false);
   const data = allItems;
   const data1 = [...data];
   const data2 = shuffleArray([...data]);
   const data3 = shuffleArray([...data]);
   const data4 = shuffleArray([...data]);

   useEffect(() => {
      setIsClient(true);
   }, []);

   // onScrollDown , add new category
   return (
      <PageContainer>
         <BrowsePageHeader />
         <MainContainer className="relative w-full">
            <BrowsePageBackground />
            {!!isClient && (
               <section className="w-full relative z-40 pb-10 flex flex-col gap-6">
                  <ListSlider data={data1} listTitle="My List" />
                  <ListSlider data={data2} listTitle="Random List" />
                  <ListSlider data={data3} listTitle="Trending Now" />
                  <ListSlider data={data4} listTitle="Gems for You" />
               </section>
            )}
            {!!isClient && <FetchSection />}
         </MainContainer>
      </PageContainer>
   );
};

export default BrowsePage;
