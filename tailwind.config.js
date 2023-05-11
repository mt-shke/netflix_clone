/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
               "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         },

         colors: {
            titleRed: "#e50914",
            bgMain: "#00081d",
            bgMainBlack: "#141414",
            bgSoftBlue: "#e7f3ff",
            bgSoftGrey: "#e4e6eb",
            main: "#1c1e21",
            darkBlue: "#132144",
            darkBlueLight: "#223362",
            borderGrey: "#615e61",
            inputGrey: "#333333",
            grey: "#65676b",
            btnRed: "#e50914",
            greenBtn: "#42b72a",
            btnGrey: "#64686b",
         },
         screens: {
            sm: "440px",
            md: "600px",
            lg: "900px",
            xl: "1100px",
            slidersm: "500px",
            slidermd: "800px",
            sliderlg: "1100px",
            sliderxl: "1400px",
         },
      },
   },
   plugins: [],
};
