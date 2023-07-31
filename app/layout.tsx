import BaseContainer from "@/components/containers/Container";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Providers } from "@/redux/provider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Karvi Code Challenge",
  description: "Catalog application done with ts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          <BaseContainer>{children}</BaseContainer>
        </Providers>
      </body>
    </html>
  );
}
