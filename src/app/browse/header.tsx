import NetflixLogo from "@/components/UI/Logo";
import { RiArrowDownSFill } from "react-icons/ri";
import { SlMagnifier } from "react-icons/sl";
import { HiOutlineBell } from "react-icons/hi";
import Image from "next/image";

const BrowsePageHeader: React.FC = () => {
   return (
      <header className="absolute z-50 px-4 w-full flex items-center py-3">
         <div className="w-16 md:w-24">
            <NetflixLogo />
         </div>
         <div className="flex items-center ml-4 text-xs hover:cursor-pointer">
            <span>Browse</span>
            <RiArrowDownSFill className="text-[16px]" />
         </div>
         <div className="h-full flex items-center gap-4 ml-auto mr-0">
            <SlMagnifier className="text-[20px]" />
            <HiOutlineBell className="text-[24px]" />
            <div>
               <Image
                  className="rounded-sm"
                  width={32}
                  height={40}
                  alt="avatar"
                  src="https://i.ibb.co/5Wsk6jq/default-Avatar.png"
               />
            </div>
         </div>
      </header>
   );
};
export default BrowsePageHeader;
