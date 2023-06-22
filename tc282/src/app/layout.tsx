import "./globals.css";
import { Josefin_Sans } from "next/font/google";

const josef = Josefin_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "TWC28MiniP",
  description: "Tailwind Tutorial Mini Projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={josef.className}>{children}</body>
    </html>
  );
}
