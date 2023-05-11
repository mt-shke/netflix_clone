interface IIcon {
   className?: string;
   fill?: string;
}

const PlayIcon: React.FC<IIcon> = ({ className, fill }) => {
   return (
      <svg className={className ? className : ""} viewBox="0 0 1024 1024">
         <path
            d="M0 6.688v18.906c0 0.344 0.156 0.625 0.469 0.813 0.125 0.094 0.344 0.125 0.5 0.125s0.281-0.031 0.438-0.125l16.375-9.438c0.313-0.219 0.5-0.5 0.5-0.844 0-0.313-0.188-0.594-0.5-0.813l-16.375-9.438c-0.563-0.406-1.406 0.094-1.406 0.813z"
            fill={fill ?? "black"}
         ></path>
      </svg>
   );
};
export default PlayIcon;
