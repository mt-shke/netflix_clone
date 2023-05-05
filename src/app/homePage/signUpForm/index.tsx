import Image from "next/image";

const SignUpForm: React.FC = () => {
   return (
      <div className="relative w-full grid items-center px-4 py-24 overflow-hidden rounded-xl sm:px-8 md:px-12">
         <FormBackground />
         <form className="w-full max-w-[600px] relative z-30 flex flex-col items-start gap-3">
            <h1 className="w-2/3 min-w-[320px] text-[36px] font-bold">
               Unlimited movies, TV shows, and more
            </h1>
            <p className="font-bold">Watch anywhere. Cancel anytime.</p>
            <p className="mt-2">
               Ready to watch? Enter your email to create or restart your
               membership.
            </p>
            <input
               className="w-full p-2 px-4 bg-[#17101c80] rounded border border-[1px] border-borderGrey"
               placeholder="Email address"
            />
            <button className="px-6 py-3 bg-titleRed rounded font-bold">
               Get Started
            </button>
         </form>
      </div>
   );
};
export default SignUpForm;

const FormBackground: React.FC = () => {
   return (
      <>
         <Image
            style={{ objectFit: "cover" }}
            className="absolute z-10 w-full h-full"
            width={961}
            height={540}
            alt="background"
            src="https://res.cloudinary.com/do7mdddf5/image/upload/v1683277339/nextflix_clone/bgnetflix_aa13ml.jpg"
         />
         <div className="absolute z-20 h-full w-full bg-gradient-to-tl from-[#1d000a] to-[#0c0c0c99] to-60%"></div>
         <div className="absolute z-20 h-full w-full bg-gradient-to-bl from-[#4d0006] to-transparent to-40%"></div>
      </>
   );
};
