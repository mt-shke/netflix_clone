import AdCard from "./AdCard";

const AdSection: React.FC = () => {
   return (
      <section className="relative p-4 mt-8 bg-gradient-to-b from-[#06091f] via-90% via-[#4d00064D] to-98% to-[#340822] rounded-2xl shadow-xl sm:p-8">
         {ads.map((ad, index) => (
            <>
               {index > 0 ? (
                  <hr className="my-4 border-[4px] opacity-10" />
               ) : null}
               <AdCard ad={ad} key={ad.imgUrl} index={index} />
            </>
         ))}
      </section>
   );
};
export default AdSection;

const ads = [
   {
      title: "Enjoy on your TV",
      description:
         "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      imgUrl:
         "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/enjoyOnTv/en.png",
   },
   {
      title: "Watch everywhere",
      description:
         "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      imgUrl:
         "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/watchEverywhere/en.png",
   },
   {
      title: "Create profiles for kids",
      description:
         "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
      imgUrl:
         "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/kids/en.png",
   },
   {
      title: "Download your shows to watch offline",
      description: "Only available on ad-free plans.",
      imgUrl:
         "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/download/en.png",
   },
];
