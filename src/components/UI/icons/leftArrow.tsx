interface IIcon {
   className?: string;
   fill?: string;
}

const LeftArrow: React.FC<IIcon> = ({ className, fill }) => {
   return (
      <svg
         className={className ? className : ""}
         viewBox="0 0 1024 1024"
         // version="1.1"
         // xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
            fill={fill ?? "black"}
         />
      </svg>
   );
};
export default LeftArrow;
