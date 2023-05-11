"use client";

import { useEffect, useRef, useState } from "react";

interface IVideoContainer {
   toggleVideo: () => void;
}

const VideoContainer: React.FC<IVideoContainer> = ({ toggleVideo }) => {
   const [isMuted, setIsMuted] = useState(true);
   const videoRef = useRef<null | HTMLVideoElement>(null);

   useEffect(() => {
      const curRef = videoRef.current;
   }, []);

   const togglePlay = () => {
      videoRef.current?.paused
         ? videoRef.current.play()
         : videoRef.current?.pause();
   };

   return (
      <>
         <video
            onLoad={toggleVideo}
            playsInline
            autoPlay
            loop
            muted={isMuted}
            ref={videoRef}
            className="absolute z-10 top-0 left-0 right-0 w-full aspect-16/9"
         >
            <source src="/assets/squidGame.mp4" type="video/mp4" />
         </video>
         <div
            onMouseEnter={() => setIsMuted((p) => false)}
            onMouseLeave={() => setIsMuted((p) => true)}
            onClick={(e) => togglePlay(e)}
            className="absolute z-20 top-0 left-0 right-0 w-full grid items-center aspect-[16/9] bg-gradient-to-b from-bgMainBlack via-10% via-[#1414141A] to-95% to-bgMainBlack"
         >
            <div className="z-50 w-4/5 pt-6 px-8 ml-0 mr-auto md:w-2/3 lg:w-1/2 xl:w-1/3">
               <h2 className="text-2xl font-bold">Squid Game</h2>
               <p className="my-2 md:my-4 text-sm md:text-base">
                  {` Hundreds of cash-strapped players accept a strange invitation to
            compete in children's games. Inside, a tempting prize awaits — with
            deadly high stakes.`}
               </p>
               <div>
                  <button
                     className="px-4 py-1 mr-1 bg-white hover:opacity-80 text-black font-bold rounded-sm hover:cursor-pointer"
                     disabled
                  >
                     Play Episode
                  </button>{" "}
                  <button
                     className="px-4 py-1 bg-btnGrey hover:opacity-80 text-black font-bold rounded-sm hover:cursor-pointer"
                     disabled
                  >
                     Episodes
                  </button>
               </div>
            </div>
         </div>
      </>
   );
};
export default VideoContainer;
