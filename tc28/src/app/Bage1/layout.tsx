import { Dancing_Script } from "next/font/google";
import "./bage.css";
import Image from "next/image";

const dansing = Dancing_Script({ subsets: ["latin"] });

export default function BageLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className={`${dansing.className} mx-auto min-h-screen bg-[url("/1.jpg")] bg-no-repeat bg-cover bg-fixed`}>
      {/* Include shared UI here e.g. a header or sidebar */}
      {children}
    </section>
  );
}
