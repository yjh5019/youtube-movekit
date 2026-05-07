import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://youtube-movekit.vercel.app"),
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
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
