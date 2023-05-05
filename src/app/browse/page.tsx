import MainContainer from "@/components/container/MainContainer";
import PageContainer from "@/components/container/PageContainer";
import BrowsePageHeader from "./header";
import Image from "next/image";
import ItemsList from "./list/ItemsList";

const BrowsePage: React.FC = () => {
   return (
      <PageContainer className="min-h-screen bg-bgMainBlack">
         <BrowsePageHeader />
         <MainContainer className="relative w-full">
            <Image
               className="absolute z-10 top-0 left-0 right-0 w-full"
               style={{ objectFit: "cover" }}
               width={748}
               height={420}
               alt="breaking-bad"
               src="https://res.cloudinary.com/do7mdddf5/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1683302455/bb_uku9ys.jpg"
            />
            <div className="absolute z-30 w-full aspect-[748/422] bg-gradient-to-b from-bgMainBlack via-10% via-[#1414141A] to-95% to-bgMainBlack"></div>
            <h2>Hello</h2>

            <section className="mt-[500px] px-8 overflow-x-hidden">
               <ItemsList />
            </section>
         </MainContainer>
      </PageContainer>
   );
};
export default BrowsePage;
