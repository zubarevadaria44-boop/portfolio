import { Fraunces, Manrope } from "next/font/google";
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
  title: "Smaige_go — мобильный фотограф",
  description:
    "Smaige_go — мобильная фотография: портреты, студийная и уличная съёмка. Снимаю телефоном там, где вам удобно.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
