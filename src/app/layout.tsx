import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alchemistpharmacy.com"),
  title: {
    default: "Alchemist Pharmacy — 30-Minute Prescription Delivery in Lahore",
    template: "%s · Alchemist Pharmacy",
  },
  description:
    "Snap a photo of your prescription on WhatsApp and get your medicines delivered to your door in 30 minutes. Trusted pharmacists across 5 branches in Lahore.",
  keywords: [
    "pharmacy Lahore",
    "medicine home delivery",
    "30 minute delivery",
    "prescription delivery",
    "Alchemist Pharmacy",
  ],
  openGraph: {
    title: "Alchemist Pharmacy — 30-Minute Medicine Delivery",
    description:
      "Send your prescription on WhatsApp. Delivered in 30 minutes across Lahore.",
    url: "https://alchemistpharmacy.com",
    siteName: "Alchemist Pharmacy",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink-body">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppWidget
          phone={site.whatsapp}
          message={site.whatsappPrefill}
        />
      </body>
    </html>
  );
}
