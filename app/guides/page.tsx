import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "YouTube 이전 가이드 | YouTube MoveKit",
  description:
    "Google Takeout 내보내기, 구독 이전 준비, 재생목록 백업 방법을 단계별로 안내합니다.",
};

const GUIDES = [
  {
    href: "/guides/transfer-youtube-subscriptions",
    title: "YouTube 구독 목록을 새 계정으로 옮기기 전에 알아야 할 것",
    description:
      "이전 가능한 항목과 불가능한 항목, API 할당량 제한, 브라우저 확장 프로그램의 위험성, 안전한 이전 워크플로를 설명합니다.",
    readTime: "7분",
  },
  {
    href: "/guides/transfer-youtube-playlists",
    title: "유튜브 재생 목록 옮기기 — 가능한 것과 불가능한 것",
    description:
      "공개 재생목록 재생성 방법, 비공개 재생목록의 한계, Watch Later 대안, Google Takeout 백업 방법을 설명합니다.",
    readTime: "6분",
  },
  {
    href: "/guides/transfer-youtube-watch-history",
    title: "유튜브 시청 기록 옮기기, 직접 이전은 어렵습니다",
    description:
      "YouTube API 제한으로 시청 기록 직접 이전은 불가능합니다. Takeout 개인 백업 방법과 현실적인 대안을 설명합니다.",
    readTime: "5분",
  },
  {
    href: "/guides/google-takeout-youtube-subscriptions",
    title: "Google Takeout으로 YouTube 구독 목록 내보내는 방법",
    description:
      "Google Takeout 사이트에서 구독 목록만 선택해 내보내는 단계별 방법과 subscriptions.csv 파일 구조를 설명합니다.",
    readTime: "5분",
  },
];

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-12 text-gray-900">
      <div className="mx-auto max-w-2xl">
        <nav className="mb-8 flex flex-wrap gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900 hover:underline">홈</Link>
          <span>·</span>
          <span className="text-gray-900">가이드</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900">YouTube 이전 가이드</h1>
        <p className="mt-4 text-base text-gray-600 leading-relaxed">
          YouTube 계정 이전을 처음 준비하는 분을 위한 단계별 가이드 모음입니다.
          Google Takeout 내보내기부터 구독 이전 준비, 재생목록 백업까지 순서대로 읽어보세요.
        </p>

        <div className="mt-10 space-y-4">
          {GUIDES.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="block rounded-xl border border-gray-200 bg-white p-5 hover:border-red-200 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-300 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-gray-900">{guide.title}</p>
                  <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">{guide.description}</p>
                </div>
                <span className="shrink-0 text-xs text-gray-400 whitespace-nowrap">{guide.readTime}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm font-semibold text-gray-900">관련 리소스</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <Link
              href="/resources/youtube-migration-checklist"
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              이전 체크리스트
            </Link>
            <Link
              href="/resources/sample-subscriptions-csv"
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              CSV 샘플 보기
            </Link>
            <Link
              href="/compare/google-takeout-vs-browser-extension"
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              방식 비교하기
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
