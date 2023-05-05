import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

const QuestionsList: React.FC = () => {
   return (
      <>
         <details className="group">
            <summary className="flex justify-between p-6 bg-darkBlue group-open:bg-darkBlueLight hover:cursor-pointer">
               <span>What is Netflix?</span>
               <AiOutlinePlus className="block group-open:rotate-[225deg] transition duration-500 ease-in" />
            </summary>
            <div className="p-4 mt-[1px] bg-darkBlue hidden translate-y-4 group-open:block group-open:translate-y-0 transition ease-in duration-500">
               <p>
                  {`Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.`}
               </p>
               <br />
               <p>
                  {`You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`}
               </p>
            </div>
         </details>
      </>
   );
};
export default QuestionsList;
