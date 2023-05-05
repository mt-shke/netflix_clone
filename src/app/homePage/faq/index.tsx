import QuestionsList from "./QuestionsList";

const FAQ: React.FC = () => {
   return (
      <section className="max-w-[1000px] mx-auto mt-10 sm:mt-24 ">
         <h2 className="text-3xl lg:text-5xl font-bold my-4">
            Frequently Asked Questions
         </h2>
         <QuestionsList />
         <form className="flex flex-col items-start gap-2 mt-6">
            <p className="mt-2">
               Ready to watch? Enter your email to create or restart your
               membership.
            </p>
            <input
               className="w-full p-2 px-4 my-1 bg-[#17101c80] rounded border border-[1px] border-borderGrey"
               placeholder="Email address"
            />
            <button className="px-4 py-2 bg-titleRed rounded font-bold">
               Get Started
            </button>
         </form>
      </section>
   );
};

export default FAQ;
