import NetflixLogo from "@/components/UI/Logo";
import Select from "./Select";
import Link from "next/link";

const Header: React.FC = () => {
   return (
      <header className="w-full flex items-center py-5 px-4">
         <div className="w-24 md:w-44">
            <NetflixLogo />
         </div>
         <div className="flex gap-3 ml-auto mr-0">
            <Select />
            <Link href={"login"}>
               <button className="bg-titleRed px-4 py-1 rounded font-bold text-sm">
                  Sign In
               </button>
            </Link>
         </div>
      </header>
   );
};

export default Header;
