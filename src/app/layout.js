import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { footerData, headerData } from "@/constant/global.constant";
import Footer from "@/components/Footer/Footer";
import { fetchHeaderPageData } from "@/service/header.service";
import { fetchFooter } from "@/service/footer.service";
import { fetchFooterNote } from "@/service/footerNote.service";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const headerNav = await fetchHeaderPageData();
  const footer = await fetchFooter();
  const footerNote = await fetchFooterNote();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header headerNav={headerNav} />
        {children}
        <Footer
          footerData={footer}
          socialLinks={footerData}
          footerNote={footerNote}
        />
      </body>
    </html>
  );
}
