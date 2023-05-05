import MainContainer from "@/components/container/MainContainer";
import AdSection from "./AdSection";
import FAQ from "./FAQ";
import Header from "./Header";
import SignUpForm from "./SignUpForm";

const HomePage: React.FC = () => {
   return (
      <>
         <Header />
         <MainContainer>
            <SignUpForm />
            <AdSection />
            <FAQ />
         </MainContainer>
      </>
   );
};
export default HomePage;
