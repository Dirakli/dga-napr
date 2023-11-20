import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeContextProvider } from "./context/theme";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import Sidebar from "./components/main/Sidebar";
import StarterText from "./components/main/StarterText";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <ThemeContextProvider>
          <main className="bg-gray-300 min-h-screen w-full flex flex-col justify-between">
            <Header />
            {children}
            <Footer />
            <Sidebar />
            {/* <StarterText /> */}
          </main>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
