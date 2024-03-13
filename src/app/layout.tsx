import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RecoilRootProvider from "@/recoil/recoilRootProvider";

import LoginCheck from "@/util/LoginCheck";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "소소한",
  description: "소소한 일상을 기록하고 공유하는 블로그",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="gloval-wrap">
          <RecoilRootProvider>
            <LoginCheck />
            {children}
          </RecoilRootProvider>
        </div>
      </body>
    </html>
  );
}
