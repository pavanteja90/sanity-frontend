import "./globals.scss";
import { Figtree } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Canstar Blue | Star ratings PoC",
  description:
    "Proof of concept developed for Canstar using Next.js 13 with app router and Sanity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <section className="top-border">{children}</section>
      </body>
    </html>
  );
}
