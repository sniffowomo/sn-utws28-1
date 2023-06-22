import { Dancing_Script } from "next/font/google";
import "./bage.css";

const dansing = Dancing_Script({ subsets: ["latin"] });

export default function BageLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={`${dansing.className} mx-auto min-h-screen bg-[url("https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif")]`}>
      {/* Include shared UI here e.g. a header or sidebar */}
      {children}
    </section>
  );
}
