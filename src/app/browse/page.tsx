import MainContainer from "@/components/container/MainContainer";
import PageContainer from "@/components/container/PageContainer";
import BrowsePageHeader from "./header";
import ListSlider from "./list/ListSlider";
import { allItems } from "@/data/data";
import { shuffleArray } from "@/utils/array";
import BrowsePageBackground from "./main/BrowsePageBackground";

const BrowsePage: React.FC = () => {
   const data1 = allItems;
   const data2 = shuffleArray([...allItems]);
   const data3 = shuffleArray([...allItems]);
   const data4 = shuffleArray([...allItems]);

   return (
      <PageContainer className="min-h-screen bg-bgMainBlack">
         <BrowsePageHeader />
         <MainContainer className="relative w-full">
            <BrowsePageBackground />
            <section className="w-full relative z-40 pb-10 flex flex-col gap-6">
               <ListSlider data={data1} listTitle="My List" />
               <ListSlider data={data2} listTitle="Random List" />
               <ListSlider data={data3} listTitle="Trending Now" />
               <ListSlider data={data4} listTitle="Gems for You" />
            </section>
         </MainContainer>
      </PageContainer>
   );
};
export default BrowsePage;
