import type { Metadata, Viewport } from "next";

import { Inter } from "next/font/google";
import "./globals.css";
import RecoilRootProvider from "@/recoil/recoilRootProvider";
import LoginCheck from "@/util/LoginCheck";
import SetScreenHeight from "@/util/SetScreenHeight";

const inter = Inter({ subsets: ["latin"] });
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
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
        <SetScreenHeight>
          <RecoilRootProvider>
            <LoginCheck />
            {children}
          </RecoilRootProvider>
        </SetScreenHeight>
      </body>
    </html>
  );
}
