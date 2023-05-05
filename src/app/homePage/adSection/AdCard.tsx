import Image from "next/image";

type AdType = {
   title: string;
   description: string;
   imgUrl: string;
};

interface IAdCard {
   ad: AdType;
   index: number;
}

const AdCard: React.FC<IAdCard> = ({ ad, index }) => {
   return (
      <article className="mt-10 sm:grid sm:grid-cols-2 items-center">
         <div
            className={`h-full flex flex-col sm:items-start sm:py-[10%] ${
               index % 2 === 1 ? "order-last" : ""
            }`}
         >
            <h2 className="font-bold text-3xl">{ad.title}</h2>
            <p className="mt-3">{ad.description}</p>
         </div>
         <div className="relative">
            <Image
               src={ad.imgUrl}
               alt={ad.title}
               width={390}
               height={293}
               className="mx-auto"
               // className="object-cover"
               // style={{ objectFit: "cover" }}
            />
         </div>
      </article>
   );
};

export default AdCard;
