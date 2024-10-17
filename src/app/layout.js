import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eric Boerschinger - Web Developer Portfolio",
  description:
    "Portfolio of Eric Boerschinger, a passionate web developer specializing in Next.js and modern web technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
