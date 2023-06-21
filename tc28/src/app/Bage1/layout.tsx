import { Dancing_Script } from "next/font/google";
import "./bage.css";

const dansing = Dancing_Script({ subsets: ["latin"] });

export default function BageLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className={`${dansing.className} bg-purple-800 mx-auto min-h-screen`}>
      {/* Include shared UI here e.g. a header or sidebar */}
      {children}
    </section>
  );
}
