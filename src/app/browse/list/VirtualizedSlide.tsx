// "use client";

// import { useState, useEffect } from "react";
// import { FixedSizeList } from "react-window";
// import ItemCard, { Item } from "./ItemCard";

// interface IVirtualizedSlider {
//    items: Item[];
// }

// const VirtualizedSlider: React.FC<IVirtualizedSlider> = ({ items }) => {
//    const [currentIndex, setCurrentIndex] = useState(0);
//    const [visibleItems, setVisibleItems] = useState<Item[]>([]);

//    useEffect(() => {
//       setVisibleItems(items.slice(currentIndex, currentIndex + 5));
//    }, [currentIndex, items]);

//    const handlePrev = () => {
//       setCurrentIndex((currentIndex) => Math.max(currentIndex - 1, 0));
//    };

//    const handleNext = () => {
//       setCurrentIndex((currentIndex) =>
//          Math.min(currentIndex + 1, items.length - 5)
//       );
//    };

//    const Row = ({ index, style }) => (
//       <div
//          key={index}
//          className="slider__item"
//          style={{ ...style, display: "flex" }}
//       >
//          <ItemCard item={visibleItems[index]} />
//       </div>
//    );

//    if (!visibleItems.length) {
//       return <div></div>;
//    }

//    return (
//       <div className="slider relative flex justify-between max-w-screen-lg mx-auto">
//          <button
//             className="slider__button slider__button--prev absolute top-1/2 transform -translate-y-1/2 left-0 z-10 bg-white text-black p-4 rounded-full shadow-lg focus:outline-none transition-all duration-300 hover:bg-black hover:text-white"
//             onClick={handlePrev}
//             disabled={currentIndex === 0}
//          >
//             &lt;
//          </button>
//          <div className="slider__wrapper overflow-hidden relative flex-grow">
//             <FixedSizeList
//                className="slider__list"
//                height={200}
//                itemCount={visibleItems.length}
//                itemSize={50}
//                width={window.innerWidth}
//                direction="horizontal"
//             >
//                {({ index, style }) => <Row index={index} style={style} />}
//             </FixedSizeList>
//          </div>
//          <button
//             className="slider__button slider__button--next absolute top-1/2 transform -translate-y-1/2 right-0 z-10 bg-white text-black p-4 rounded-full shadow-lg focus:outline-none transition-all duration-300 hover:bg-black hover:text-white"
//             onClick={handleNext}
//             disabled={currentIndex === items.length - 5}
//          >
//             &gt;
//          </button>
//       </div>
//    );
// };

// export default VirtualizedSlider;
