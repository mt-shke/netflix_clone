import { IContainerLayout } from "@/ts/interface";

const PageContainer: React.FC<IContainerLayout> = ({ children, className }) => {
   return (
      <div className={`${className ? className : ""} h-full w-full`}>
         {children}
      </div>
   );
};
export default PageContainer;
