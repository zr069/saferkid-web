import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "SaferKid – Wisse was drin ist.",
  description:
    "SaferKid scannt Inhaltsstoffe in Babyprodukten mit KI und warnt dich vor bedenklichen Stoffen – in Sekunden.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "SaferKid – Wisse was drin ist.",
    description:
      "SaferKid scannt Inhaltsstoffe in Babyprodukten mit KI und warnt dich vor bedenklichen Stoffen.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${dmSans.variable} ${playfairDisplay.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
