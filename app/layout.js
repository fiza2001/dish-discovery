import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "@/Components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dish Discovery",
  description: "a recipe sharing app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}</body>
    </html>
  );
}
