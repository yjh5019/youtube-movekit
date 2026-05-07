import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "YouTube MoveKit — 구독 목록 분석 및 이전 준비",
  description:
    "Google Takeout subscriptions.csv를 업로드하면 중복 구독을 제거하고 이전 준비를 시작할 수 있습니다. 브라우저 전용 처리, 서버 저장 없음.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
