import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "YouTube 이전 리소스 | YouTube MoveKit",
  description:
    "YouTube 계정 이전을 위한 체크리스트, CSV 샘플, 컬럼 설명 등 실용적인 참고 자료 모음입니다.",
};

const RESOURCES = [
  {
    href: "/resources/youtube-migration-checklist",
    title: "YouTube 계정 이전 체크리스트",
    description:
      "내보내기 전, 이전 전, 이전 후 단계별로 확인해야 할 항목을 정리했습니다. 이전 실수를 줄이는 데 도움이 됩니다.",
    badge: "체크리스트",
  },
  {
    href: "/resources/sample-subscriptions-csv",
    title: "subscriptions.csv 샘플과 컬럼 설명",
    description:
      "YouTube Takeout에서 내보낸 CSV 파일의 구조와 각 컬럼의 의미, 중복 제거에 어떤 컬럼을 사용하는지 설명합니다.",
    badge: "참고 자료",
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-12 text-gray-900">
      <div className="mx-auto max-w-2xl">
        <nav className="mb-8 flex flex-wrap gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900 hover:underline">홈</Link>
          <span>·</span>
          <span className="text-gray-900">리소스</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900">YouTube 이전 리소스</h1>
        <p className="mt-4 text-base text-gray-600 leading-relaxed">
          YouTube 계정 이전을 준비할 때 바로 활용할 수 있는 참고 자료 모음입니다.
          체크리스트와 CSV 샘플을 참고해 이전 실수를 줄이세요.
        </p>

        <div className="mt-10 space-y-4">
          {RESOURCES.map((resource) => (
            <Link
              key={resource.href}
              href={resource.href}
              className="block rounded-xl border border-gray-200 bg-white p-5 hover:border-red-200 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-300 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-gray-900">{resource.title}</p>
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500">
                      {resource.badge}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">{resource.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm font-semibold text-gray-900">관련 페이지</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <Link
              href="/guides"
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              이전 가이드
            </Link>
            <Link
              href="/compare/google-takeout-vs-browser-extension"
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              방식 비교
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
