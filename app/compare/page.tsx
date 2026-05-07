import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "YouTube 이전 방식 비교 | YouTube MoveKit",
  description:
    "Google Takeout 방식, 브라우저 확장 프로그램 방식, 비공식 자동화 방식의 차이를 개인정보 보호, 편의성, 정책 위험 측면에서 비교합니다.",
};

const COMPARISONS = [
  {
    href: "/compare/google-takeout-vs-browser-extension",
    title: "Google Takeout 방식과 브라우저 확장 프로그램 방식 비교",
    description:
      "구독 이전에 많이 사용되는 두 가지 방식을 개인정보 보호, 보안, 편의성, YouTube 정책 준수 측면에서 비교합니다.",
    badge: "비교 분석",
  },
];

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-white px-4 py-12 text-gray-900">
      <div className="mx-auto max-w-2xl">
        <nav className="mb-8 flex flex-wrap gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900 hover:underline">홈</Link>
          <span>·</span>
          <span className="text-gray-900">비교</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900">YouTube 이전 방식 비교</h1>
        <p className="mt-4 text-base text-gray-600 leading-relaxed">
          YouTube 구독 이전에 사용할 수 있는 방식들을 개인정보 보호, 편의성, YouTube 정책 준수 측면에서 비교합니다.
          자신에게 맞는 방식을 선택하세요.
        </p>

        <div className="mt-10 space-y-4">
          {COMPARISONS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-xl border border-gray-200 bg-white p-5 hover:border-red-200 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-300 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500">
                      {item.badge}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm font-semibold text-gray-900">관련 가이드</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <Link
              href="/guides/google-takeout-youtube-subscriptions"
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              Google Takeout 내보내기 가이드
            </Link>
            <Link
              href="/guides/transfer-youtube-subscriptions"
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              구독 이전 준비 가이드
            </Link>
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/tool"
            className="inline-block rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            지금 구독 목록 분석하기
          </Link>
        </div>
      </div>
    </main>
  );
}
