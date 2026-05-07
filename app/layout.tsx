import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavigationProvider } from "@/components/navigation/navigation-context";
import { Header } from "@/components/navigation/header";
import { ThemeProvider, ThemeScript } from "@/components/theme-provider";
import { OfflineBanner } from "@/components/ui/offline-banner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DAN GTS Import & Export | Powering Trade, Building Ethiopia's Future",
  description: "Leading Ethiopian trade, logistics, and infrastructure company. Specializing in asphalt supply, industrial materials, nationwide logistics, construction support, agricultural exports, and sustainable mobility solutions since 2015.",
  keywords: ["Ethiopia trade", "logistics", "infrastructure", "import export", "asphalt", "steel billets", "electric vehicles", "sustainable mobility"],
  authors: [{ name: "DAN GTS Import & Export" }],
  openGraph: {
    title: "DAN GTS Import & Export | National Trade Partner",
    description: "A decade of integrity in trade, logistics, and infrastructure development across Ethiopia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          <NavigationProvider>
            <Header />
            <main className="relative bg-background overflow-hidden min-h-screen">
              <div className="grain-overlay" />
              {children}
            </main>
            <OfflineBanner />
          </NavigationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
