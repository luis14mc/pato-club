import type { Metadata } from "next";
import { Bricolage_Grotesque, Work_Sans } from "next/font/google";
import "./globals.css";

// Bricolage Grotesque para títulos (similar a la identidad de marca)
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

// Work Sans para cuerpo (alternativa limpia a Larke Neue)
const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pato Club | Streetwear Exclusivo Honduras",
  description: "Pato Club - La marca de ropa urbana más exclusiva de Honduras. Colecciones limitadas y envíos a todo el país. Pedidos directos vía WhatsApp.",
  openGraph: {
    title: "Pato Club | Streetwear Exclusivo Honduras",
    description: "Pato Club - La marca de ropa urbana más exclusiva de Honduras. Colecciones limitadas y envíos a todo el país. Pedidos directos vía WhatsApp.",
    url: "https://patoclub.hn",
    siteName: "Pato Club",
    images: [
      {
        url: "/og-preview.webp", // Asegúrate de que esta imagen exista o se cree
        width: 1200,
        height: 600,
        alt: "Pato Club Streetwear Honduras",
      },
    ],
    locale: "es_HN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pato Club | Streetwear Exclusivo Honduras",
    description: "Pato Club - La marca de ropa urbana más exclusiva de Honduras. Colecciones limitadas y envíos a todo el país.",
    images: ["/og-preview.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${bricolage.variable} ${workSans.variable} font-sans antialiased bg-cream text-black`}
      >
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
