import  { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Next Js Demo",
  description: "Nextjs 15 feature demo",
};


export default function RootLayout(children) {
  
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900`} >
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main> 
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
