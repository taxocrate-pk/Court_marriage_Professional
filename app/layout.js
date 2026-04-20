import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header.jsx";
import { AppThemeProvider } from "@/components/theme-provider.jsx";
import { Footer } from "@/components/footer";

// Ye fonts define hona zaroori hain
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
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body 
        className={`${fontSans.variable} ${fontMono.variable} min-h-screen flex flex-col bg-background text-foreground antialiased`}
        suppressHydrationWarning 
      >
        <AppThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </AppThemeProvider>
      </body>
    </html>
  );
}