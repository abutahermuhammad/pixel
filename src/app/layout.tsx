import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.scss";
import NavigationBar from "@/components/NavigationBar";
import clsx from "clsx";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PIXEL",
  description: "Photography website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavigationBar />
        <main className="bg-[#FCF5F5]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
