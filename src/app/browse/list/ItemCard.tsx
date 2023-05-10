import Image from "next/image";

interface IItemCard {
   item: Item;
}

type Item = {
   id: string;
   title: string;
   imgUrl: string;
   category?: string;
   rating?: string;
};

const ItemCard: React.FC<IItemCard> = ({ item }) => {
   return (
      <article className={`relative w-full aspect-[16/9]`}>
         {/* <img
            className="absolute z-70 inset-0 w-full h-full"
            alt={item.title}
            src={item.imgUrl}
         /> */}
         <Image
            className="absolute z-30 inset-0 rounded-sm"
            // fill={true}
            style={{ objectFit: "cover" }}
            width={341}
            height={192}
            alt={item.title}
            src={item.imgUrl}
         />
      </article>
   );
};
export default ItemCard;
