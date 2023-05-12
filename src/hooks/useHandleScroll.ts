import { useEffect } from "react";

const useHandleScroll = (
   htmlRefElement: React.RefObject<HTMLElement>,
   fn: () => void
) => {
   useEffect(() => {
      const sectionElement = htmlRefElement.current;
      if (sectionElement) {
         const handleScroll = () => {
            const { top, bottom } = sectionElement.getBoundingClientRect();
            const isVisible = top < window.innerHeight && bottom >= 0;
            if (isVisible) {
               fn();
            }
         };
         window.addEventListener("scroll", handleScroll);
         return () => {
            window.removeEventListener("scroll", handleScroll);
         };
      }
   }, []);
};

export default useHandleScroll;
