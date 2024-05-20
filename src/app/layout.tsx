import type { Metadata } from "next";
import { Inter, Jura } from "next/font/google";
import "./globals.css";
import WalletContextProvider from "@/lib/context/WalletContextProvider";
import { ToastContainer } from 'react-toastify';
import NewContextProvider from "@/lib/context/NewContextProvider";
import { Analytics } from "@vercel/analytics/react"

const inter = Jura({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "$ROCKY",
  description: "HARD 🍆💦",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={inter.className}>
          {/* <WalletContextProvider> */}
            <ToastContainer />
            {children}
          {/* </WalletContextProvider> */}
          <Analytics/>
        </body>
    </html>
  );
}
