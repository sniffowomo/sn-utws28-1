import { Orbitron } from "next/font/google";
import "./twb1.css";

const orbi = Orbitron({
  subsets: ["latin"],
});

export const metadata = {
  title: "TWPluginTest",
  description: "Tailwind Tutorial Mini Projects",
};

export default function Twb1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className={orbi.className}>{children}</section>;
}
