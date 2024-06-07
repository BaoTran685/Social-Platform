import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "@/provider/sessionProvider";
import ProgressProvider from "@/provider/progressProvider";
import InnerRootLayout from "@/layouts/innerRootLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en" className="bg-[var(--background-white-color)]">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <ProgressProvider>
            <InnerRootLayout>
              {children}
            </InnerRootLayout>
          </ProgressProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
