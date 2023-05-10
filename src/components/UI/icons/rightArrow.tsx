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
            d="M 0 0 L 8 8 L 0 17 L 0 15 L 6 8 L 0 2"
            fill={fill ?? "black"}
         />
      </svg>
   );
};
export default RightArrow;

// M 0 0 L 8 8 L 0 17 L 0 15 L 6 8 L 0 2
