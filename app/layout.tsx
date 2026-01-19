import type { Metadata } from "next";
import { Bricolage_Grotesque, Work_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pato Club | Coming Soon",
  description: "El lujo está llegando a Honduras. Valentine's Edition & Core Collection. Muy pronto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${bricolage.variable} ${workSans.variable} font-body antialiased bg-cream text-black`}
      >
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
