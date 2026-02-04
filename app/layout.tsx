import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const gopher = localFont({
  src: [
    {
      path: "../public/assets/fonts/fonnts.com-Gopher_Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/fonnts.com-Gopher_Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/fonnts.com-Gopher_Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gopher",
});

export const metadata: Metadata = {
  title: "Therapy Site",
  description: "Therapy Site",
  icons: {
    icon: "/assets/images/favicon.png",
    shortcut: "/assets/images/favicon.png",
    apple: "/assets/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gopher.variable} font-gopher antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
