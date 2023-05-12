import { useEffect, useState } from "react";

const useHandleScrollDown = (
   htmlRefElement: React.RefObject<HTMLElement>,
   func: () => void
) => {
   const [lastScrollTop, setLastScrollTop] = useState(0);

   useEffect(() => {
      const sectionElement = htmlRefElement.current;
      if (sectionElement) {
         const handleScroll = () => {
            const { top } = sectionElement.getBoundingClientRect();
            const currentScrollTop =
               window.pageYOffset || document.documentElement.scrollTop;

            if (currentScrollTop > lastScrollTop && top < window.innerHeight) {
               setLastScrollTop(currentScrollTop);
               func();
            }
         };
         window.addEventListener("scroll", handleScroll);
         return () => {
            window.removeEventListener("scroll", handleScroll);
         };
      }
   }, [htmlRefElement, lastScrollTop, func]);

   return;
};

export default useHandleScrollDown;
