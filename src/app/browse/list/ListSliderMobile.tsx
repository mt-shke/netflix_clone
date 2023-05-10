// import { useEffect } from "react";
// import { useRef } from "react";
// import { useState } from "react";

// const ProductCardGallery = ({ data }) => {
//     const ref = useRef(null);
//     const [currentImg, setCurrentImg] = useState(0);
//     const [slideDirection, setSlideDirection] = useState("");

//     let touchStart;

//     useEffect(() => {
//         const containerRef = ref.current;
//         containerRef.addEventListener("touchstart", handleTouchStart);
//         containerRef.addEventListener("touchend", handleTouchEnd);
//         return () => [
//             containerRef.removeEventListener("touchstart", handleTouchStart),
//             containerRef.removeEventListener("touchend", handleTouchEnd),
//         ];
//     }, []);

//     const handleTouchStart = (e) => {
//         touchStart = e.changedTouches[0].pageX;
//     };

//     const handleTouchEnd = (e) => {
//         const touchEnd = e.changedTouches[0].pageX;
//         const swipeDistance = touchEnd - touchStart;
//         if (swipeDistance >= 50) {
//             setCurrentImg((p) => (p === 0 ? data.images.length - 1 : p - 1));
//             setSlideDirection((p) => "left");
//             clearSlideDirection();
//         }
//         if (swipeDistance <= -50) {
//             setCurrentImg((p) => (p === data.images.length - 1 ? 0 : p + 1));
//             setSlideDirection((p) => "right");
//             clearSlideDirection();
//         }
//     };

//     const handleImageWithDot = (index) => {
//         if (currentImg === index) return;
//         setCurrentImg((p) => index);
//         setSlideDirection((p) => (currentImg < index ? "right" : "left"));
//         setTimeout(() => {
//             setSlideDirection("");
//         }, 300);
//     };

//     const clearSlideDirection = () =>
//         setTimeout(() => {
//             setSlideDirection("");
//         }, 300);

//     return (
//         <section className="flex flex-col items-center">
//             <div
//                 ref={ref}
//                 className={`w-full max-h-[400px] aspect-square grid place-items-center overflow-hidden`}
//             >
//                 <SlideImg
//                     slideStyle={`animate-slide-${slideDirection}`}
//                     src={data.images[currentImg]}
//                     alt={data.name}
//                 />
//             </div>
//             <div className="flex gap-2 my-4">
//                 {!!data.images.length &&
//                     data.images.map((elem, index) => (
//                         <span
//                             onClick={() => handleImageWithDot(index)}
//                             key={index}
//                             className={`${
//                                 index === currentImg
//                                     ? "bg-secondary"
//                                     : "bg-bg-main"
//                             } w-2 aspect-square rounded-full border-[1px] border-secondary`}
//                         ></span>
//                     ))}
//             </div>
//         </section>
//     );
// };

// export default ProductCardGallery;

// const SlideImg = ({ src, slideStyle, alt }) => {
//     return (
//         <img
//             className={`${slideStyle} w-full max-w-[400px] object-fill`}
//             src={src}
//             alt={alt}
//         />
//     );
// };
