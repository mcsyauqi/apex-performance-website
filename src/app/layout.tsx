import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "APEX Performance | Unleash Your Potential",
  description: "Premium fitness and wellness center offering gym facilities, personal training, group classes, and wellness services. Join APEX Performance and transform your life.",
  keywords: ["fitness", "gym", "personal training", "wellness", "HIIT", "yoga", "boxing", "cycling"],
  openGraph: {
    title: "APEX Performance | Unleash Your Potential",
    description: "Premium fitness and wellness center. Where Champions Are Made.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Oswald:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-deep-black text-pure-white font-inter">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
