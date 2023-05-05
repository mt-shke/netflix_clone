import ItemCard from "./ItemCard";

const ItemsList: React.FC = () => {
   const allItems = imgs.map((item) => ({
      id: item,
      title: item,
      imgUrl: "/assets/images/" + item,
   }));
   return (
      <ul className="relative z-60 w-full flex items-center gap-1">
         {allItems.map((item) => (
            <li key={item.title}>
               <ItemCard item={item} />
            </li>
         ))}
      </ul>
   );
};
export default ItemsList;

const imgs = [
   "alice.jpg",
   "bcs.jpg",
   "blackMirror.jpg",
   "breakingBad.webp",
   "dark.jpg",
   "dontLookUp.jpg",
   "ozark.jpg",
   "peakyBlinders.jpg",
   "queensGambit.jpg",
   "strangerThings.jpg",
   "theEndofTheFuckingWorld.jpg",
   "theOffice.webp",
   "twd.webp",
];
