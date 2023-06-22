import "./globals.css";
import { Pathway_Extreme } from "next/font/google";

const paway = Pathway_Extreme({ subsets: ["latin"] });

export const metadata = {
  title: "🍑GFXTesting",
  description: "UTWC28",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={paway.className}>{children}</body>
    </html>
  );
}
