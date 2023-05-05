const LoginForm: React.FC = () => {
   return (
      <form className="flex flex-col gap-4 py-6">
         <label
            className="relative w-full flex items-center group"
            htmlFor="email-phone"
         >
            <input
               id="email-phone"
               type="text"
               className="w-full p-4 rounded text-sm bg-inputGrey outline-none focus:border-b focus:border-b-[2.5px] focus:border-b-orange-600"
               placeholder="Email or phone number"
            />
            {/* TODO <span className="absolute text-sm opacity-50 p-4 group:focus-scale-x-50 hover:scale-x-[70%] hover:-translate-y-2"> */}
            {/* <span className="absolute text-sm opacity-50 p-4">
               Email of phone number
            </span> */}
         </label>
         <label htmlFor="password">
            <input
               id="password"
               name="password"
               type="text"
               className="w-full p-4 rounded text-sm bg-inputGrey outline-none focus:border-b focus:border-b-[2.5px] focus:border-b-orange-600"
               placeholder="Password"
            />
         </label>
         <button className="w-full px-6 py-3 mt-4 bg-titleRed rounded font-bold">
            Sign In
         </button>
      </form>
   );
};
export default LoginForm;
