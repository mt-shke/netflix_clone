import { IContainerLayout } from "@/ts/interface";

const PageContainer: React.FC<IContainerLayout> = ({ children, className }) => {
   return (
      <div
         className={`${
            className ? className : ""
         } h-full w-full mx-auto min-w-[440px] max-w-[1920px]`}
      >
         {children}
      </div>
   );
};
export default PageContainer;
