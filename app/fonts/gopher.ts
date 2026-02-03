import localFont from "next/font/local";

export const gopher = localFont({
  src: [
    {
      path: "./fonnts.com-Gopher_Regular.otf",
      weight: "400",
    },
    {
      path: "./fonnts.com-Gopher_Bold.otf",
      weight: "700",
    },

  ],
  variable: "--font-gopher",
});