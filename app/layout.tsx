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
  title: "Pato Club | Streetwear Exclusivo Honduras",
  description: "Pato Club - La marca de ropa urbana más exclusiva de Honduras. Colecciones limitadas y envíos a todo el país. Pedidos directos vía WhatsApp.",
  openGraph: {
    title: "Pato Club | Streetwear Exclusivo Honduras",
    description: "Pato Club - La marca de ropa urbana más exclusiva de Honduras. Colecciones limitadas y envíos a todo el país. Pedidos directos vía WhatsApp.",
    url: "https://patoclub.hn",
    siteName: "Pato Club",
    images: [
      {
        url: "/og-preview.webp",
        width: 1200,
        height: 600,
        alt: "Pato Club Streetwear Honduras",
      },
    ],
    locale: "es_HN",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  authors: [{ name: "Luis Martínez Cerrato", url: "https://github.com/luis14mc" }],
  creator: "Luis Martínez Cerrato",
  publisher: "Pato Club",
  other: {
    "developer-contact": "Luis Martínez Cerrato - Full Stack Developer",
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
