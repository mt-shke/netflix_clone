import MainContainer from "@/components/container/MainContainer";
import AdSection from "./adSection";
import FAQ from "./faq";
import Header from "./header";
import SignUpForm from "./signUpForm";
import PageContainer from "@/components/container/PageContainer";

const HomePage: React.FC = () => {
   return (
      <PageContainer className="bg-bgMain">
         <Header />
         <MainContainer>
            <SignUpForm />
            <AdSection />
            <FAQ />
         </MainContainer>
      </PageContainer>
   );
};

export default HomePage;
