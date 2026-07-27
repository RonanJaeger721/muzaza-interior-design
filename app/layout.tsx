import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({ variable: "--font-display", subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"] });
const sans = Manrope({ variable: "--font-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muzaza Interior Design | Imagine. Design. Create. Transform.",
  description: "Bespoke interiors, kitchens, wardrobes, media walls and custom cabinetry by Muzaza Interior Design.",
  icons: {
    icon: [{ url: "/muzaza/brand.jpeg", type: "image/jpeg" }],
    shortcut: "/muzaza/brand.jpeg",
    apple: "/muzaza/brand.jpeg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>;
}
