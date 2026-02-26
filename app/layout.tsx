import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: {
    default: "ChristianSing Foundation",
    template: "%s | ChristianSing Foundation",
  },
  description:
    "Propagating the Word through excellence in church and choral music — education, performance, composition and advocacy across Nigeria.",
  keywords: ["church music", "hymns", "Nigeria", "Christian", "choir", "RSCM"],
  openGraph: {
    siteName: "ChristianSing Foundation",
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
