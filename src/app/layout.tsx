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
         <head>
            <link rel="icon" href="../assets/favicons/favicon.ico" />
         </head>
         <body className={inter.className}>
            <div className="h-screen w-full bg-black text-white">
               {children}
            </div>
         </body>
      </html>
   );
}
