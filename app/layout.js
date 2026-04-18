import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header.jsx";
import { AppThemeProvider } from "@/components/theme-provider.jsx";
import { Footer } from "@/components/footer";

const fontSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fontMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Court Marriage Pro | Official",
  description: "Professional Marriage Portal in Pakistan",
};

export default function RootLayout({ children }) {
  return (
    // 1. suppressHydrationWarning yahan zaroori hai (Next-Themes ke liye)
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${fontSans.variable} ${fontMono.variable} min-h-screen flex flex-col bg-background text-foreground antialiased`}
        // 2. Body par bhi ye laga dein taake extensions (ColorZilla etc) error na dein
        suppressHydrationWarning 
      >
        <AppThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {/* 3. pt-20 theek hai kyunke Header fixed hai */}
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </AppThemeProvider>
      </body>
    </html>
  );
}