import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Poppins({ subsets: ["latin"] , weight: ["500"] });

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
