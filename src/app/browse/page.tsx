import MainContainer from "@/components/container/MainContainer";
import PageContainer from "@/components/container/PageContainer";
import BrowsePageHeader from "./header";
import Image from "next/image";
import ItemsList from "./list/ItemsList";
import ListSlider from "./list/ListSlider";

const BrowsePage: React.FC = () => {
   return (
      <PageContainer className="min-h-screen bg-bgMainBlack">
         <BrowsePageHeader />
         <MainContainer className="relative w-full">
            <BrowsePageBackground />
            <section className="w-full relative z-40 pt-[600px]">
               <ListSlider />
               {/* <ItemsList /> */}
            </section>
         </MainContainer>
      </PageContainer>
   );
};
export default BrowsePage;

const BrowsePageBackground: React.FC = () => {
   return (
      <>
         <Image
            className="absolute z-10 top-0 left-0 right-0 w-full"
            style={{ objectFit: "cover" }}
            width={748}
            height={420}
            alt="breaking-bad"
            src="https://res.cloudinary.com/do7mdddf5/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1683302455/bb_uku9ys.jpg"
         />
         <div className="absolute z-20 w-full aspect-[748/422] bg-gradient-to-b from-bgMainBlack via-10% via-[#1414141A] to-95% to-bgMainBlack"></div>
      </>
   );
};
