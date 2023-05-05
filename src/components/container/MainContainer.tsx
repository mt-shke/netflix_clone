import { IContainerLayout } from "@/ts/interface";

const MainContainer: React.FC<IContainerLayout> = ({ children, className }) => {
   return (
      <main
         className={className ? className : `h-full p-4 sm:p-6 md:p-8 lg:p-12`}
      >
         {children}
      </main>
   );
};
export default MainContainer;
