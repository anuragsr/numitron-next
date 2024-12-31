// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/app/nav";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
//
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Numitron | Crypto re-imagined",
  description: "Crypto as you've never seen before.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/*<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>*/}
        <Nav />
        {children}
      </body>
    </html>
  );
}
