"use client";

import Image from "next/image";
import VideoContainer from "./VideoContainer";
import { useState } from "react";

const BrowsePageBackground: React.FC = () => {
   const [videoBackground, setVideoBackground] = useState(false);

   const toggleVideo = () => {
      //   setTimeout(() => {
      //      setVideoBackground((p) => !p);
      //   }, 5000);
   };

   return (
      <>
         {!videoBackground && (
            <>
               <Image
                  className="absolute z-10 top-0 left-0 right-0 w-full aspect-16/9"
                  style={{ objectFit: "cover" }}
                  width={1920}
                  height={1080}
                  alt="squid-game"
                  src="https://res.cloudinary.com/do7mdddf5/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1683819550/bgsg_xfbguz.jpg?_s=public-apps"
               />
               <div className="absolute z-20 w-full aspect-[748/422] bg-gradient-to-b from-bgMainBlack via-10% via-[#1414141A] to-95% to-bgMainBlack"></div>
            </>
         )}

         <VideoContainer toggleVideo={toggleVideo} />
         <div className="w-full aspect-[16/9] lg:-mb-32 xl:-mb-48"></div>
      </>
   );
};

export default BrowsePageBackground;
