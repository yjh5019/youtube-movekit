import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YouTube 구독 목록 분석기 | YouTube MoveKit",
  description:
    "Google Takeout subscriptions.csv 파일을 업로드해 중복을 제거하고 정리된 CSV를 다운로드하세요. 브라우저 전용 처리, 서버 저장 없음.",
};

export default function ToolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
