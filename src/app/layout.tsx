import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Çizgi Transfer | İstanbul Korsan Taksi & Transfer Hizmeti",
  description: "İstanbul genelinde 7/24 korsan taksi ve transfer hizmeti. Havaalanı, şehir içi, VIP araçlarla güvenli ulaşım. Hemen arayın!",
  keywords: "korsan taksi, istanbul transfer, havaalanı transferi, VIP taksi, şehir içi taksi, güvenli ulaşım",
  authors: [{ name: "Çizgi Transfer" }],
  openGraph: {
    title: "Çizgi Transfer | İstanbul Korsan Taksi & Transfer Hizmeti",
    description: "İstanbul genelinde 7/24 korsan taksi ve transfer hizmeti.",
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TaxiService",
              "name": "Çizgi Transfer",
              "description": "İstanbul korsan taksi ve transfer hizmeti",
              "url": "https://www.cizgitransfer.com",
              "telephone": "+905427403875",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "İstanbul",
                "addressCountry": "TR"
              },
              "areaServed": "İstanbul",
              "priceRange": "$$",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59"
              }
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
