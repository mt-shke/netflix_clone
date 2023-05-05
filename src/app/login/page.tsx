import NetflixLogo from "@/components/UI/Logo";
import MainContainer from "@/components/container/MainContainer";
import LoginForm from "./LoginForm";
import Image from "next/image";
import PageContainer from "@/components/container/PageContainer";

const LoginPage: React.FC = () => {
   return (
      <PageContainer>
         <Image
            style={{ objectFit: "cover" }}
            className="hidden md:block absolute inset-0 z-10 w-full h-full"
            width={961}
            height={540}
            alt="background"
            src="https://res.cloudinary.com/do7mdddf5/image/upload/v1683277339/nextflix_clone/bgnetflix_aa13ml.jpg"
         />
         <div className="hidden md:block absolute inset-0 z-20 w-full h-full bg-gradient-to-br from-[#000000CC] via-[#000000CC] via-20% to-80% to-transparent"></div>
         <header className="px-2 py-4">
            <div className="absolute z-50 w-24 md:w-44 md:m-6">
               <NetflixLogo />
            </div>
         </header>
         <MainContainer>
            <div className="w-full relative z-30 rounded md:mt-16 md:max-w-[460px] md:p-16 mx-auto md:bg-[#000000BF]">
               <h2 className="text-3xl font-bold">Sign In</h2>
               <LoginForm />
               <div className="w-full flex justify-between text-sm opacity-50">
                  <label htmlFor="remember-me">
                     <input
                        name="remember-me"
                        id="remember-me"
                        type="checkbox"
                        className="bg-inputGrey"
                     />
                     <span className="ml-2">Remember me</span>
                  </label>
                  <span>Need help?</span>
               </div>
               <div className="mt-8 mb-28 text-sm">
                  <span className="opacity-50">New to Netflix? </span>{" "}
                  <span className="hover:cursor-pointer hover:underline">
                     Sign up now.
                  </span>
               </div>
            </div>
         </MainContainer>
      </PageContainer>
   );
};

export default LoginPage;
