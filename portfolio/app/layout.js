import { Fraunces, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://portfolio-olive-nu-29.vercel.app"),
  title: "Smaige_go — мобильный фотограф",
  description:
    "Smaige_go — мобильная фотография: портреты, студийная и уличная съёмка. Снимаю телефоном там, где вам удобно.",
  openGraph: {
    title: "Smaige_go — мобильный фотограф",
    description:
      "Портреты, студийная, уличная и предметная съёмка. Снимаю на телефон.",
    url: "https://portfolio-olive-nu-29.vercel.app",
    siteName: "Smaige_go",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smaige_go — мобильный фотограф",
    description: "Портреты, студийная, уличная и предметная съёмка.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

