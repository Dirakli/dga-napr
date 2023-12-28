import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeContextProvider } from "./context/theme";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import Sidebar from "./components/main/Sidebar";
import StarterText from "./components/main/StarterText";
import Wrapper from "./components/main/Wrapper";

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
          <Wrapper>
            <Header />
            {children}
            <Footer />
            <Sidebar />
            <StarterText />
          </Wrapper>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
