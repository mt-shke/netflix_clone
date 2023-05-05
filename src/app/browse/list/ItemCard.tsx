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
      <article className="relative w-[241px] h-[135px] overflow-hidden">
         <Image
            className="absolute z-70 inset-0 w-full"
            style={{ objectFit: "cover" }}
            width={341}
            height={192}
            // width={241}
            // height={135}
            alt={item.title}
            src={item.imgUrl}
         />
      </article>
   );
};
export default ItemCard;
