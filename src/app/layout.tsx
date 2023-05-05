import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: "Netflix Clone",
   description: "Testing NextJs 13",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body
            className={
               "min-h-screen w-full text-white bg-black" + inter.className
            }
         >
            {children}
         </body>
      </html>
   );
}
