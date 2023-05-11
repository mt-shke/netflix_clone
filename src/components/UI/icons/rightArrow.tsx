interface IIcon {
   className?: string;
   fill?: string;
}

const RightArrow: React.FC<IIcon> = ({ className, fill }) => {
   return (
      <svg
         className={className ? className : ""}
         viewBox="0 0 1024 1024"
         version="1.1"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
            fill={fill ?? "black"}
         />
      </svg>
   );
};
export default RightArrow;

// M 0 0 L 8 8 L 0 17 L 0 15 L 6 8 L 0 2
