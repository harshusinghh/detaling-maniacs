import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Detailing Maniacs | Car Detailing in Hyderabad",
  description: "The Detailing Maniacs in Bachupally, Hyderabad provides premium automotive detailing and vehicle protection services. Explore detailing, ceramic coating, paint protection and more.",
  keywords: [
    "Car detailing Bachupally",
    "Car detailing Hyderabad",
    "Car detailing Mallampet",
    "Ceramic coating Hyderabad",
    "Graphene coating Hyderabad",
    "PPF Hyderabad",
    "Paint protection film Hyderabad",
    "Paint correction Hyderabad",
    "Car interior detailing Hyderabad",
    "Premium car detailing Hyderabad"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground selection:bg-[#E30620] selection:text-white">
        {children}
      </body>
    </html>
  );
}
