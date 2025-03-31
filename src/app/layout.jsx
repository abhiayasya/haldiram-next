import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { fetchHeaderPageData } from "@/service/header.service";
import { fetchFooter } from "@/service/footer.service";
import { fetchFooterNote } from "@/service/footerNote.service";


export const metadata = {
  title: "Haldiram’s – India’s Iconic Brand for Snacks, Sweets & More",
  description: "Discover Haldiram’s – a legacy of authentic Indian flavours, from snacks and sweets to ready-to-eat meals. With 350+ retail outlets and a global presence, we bring taste and tradition to millions.",
};

export default async function RootLayout({ children }) {
  const headerNav = await fetchHeaderPageData();
  const footer = await fetchFooter();
  const footerNote = await fetchFooterNote();

  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <Header headerNav={headerNav} />
        {children}
        <Footer footerData={footer} footerNote={footerNote} />
      </body>
    </html>
  );
}
