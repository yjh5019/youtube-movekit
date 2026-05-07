import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "YouTube 재생목록과 저장 영상을 백업하기 전에 알아야 할 것 | YouTube MoveKit",
  description:
    "재생목록, Watch Later, 좋아요 영상의 개념과 Google Takeout으로 백업 가능한 것, 완전한 계정 복원의 한계를 설명합니다.",
};

const BASE = SITE_URL;

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "홈", item: BASE },
    { "@type": "ListItem", position: 2, name: "가이드", item: `${BASE}/guides` },
    {
      "@type": "ListItem",
      position: 3,
      name: "YouTube 재생목록과 저장 영상을 백업하기 전에 알아야 할 것",
      item: `${BASE}/guides/backup-youtube-playlists`,
    },
  ],
};

const article = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "YouTube 재생목록과 저장 영상을 백업하기 전에 알아야 할 것",
  description:
    "재생목록, Watch Later, 좋아요 영상의 개념과 Google Takeout으로 백업 가능한 것, 완전한 계정 복원의 한계를 설명합니다.",
  publisher: { "@type": "Organization", name: "YouTube MoveKit" },
  url: `${BASE}/guides/backup-youtube-playlists`,
};

export default function BackupPlaylistsGuidePage() {
  return (
    <main className="min-h-screen bg-white px-4 py-12 text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />

      <div className="mx-auto max-w-2xl">
        <nav className="mb-8 flex flex-wrap gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900 hover:underline">홈</Link>
          <span>·</span>
          <Link href="/guides" className="hover:text-gray-900 hover:underline">가이드</Link>
          <span>·</span>
          <span className="text-gray-900">재생목록 백업</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900">
          YouTube 재생목록과 저장 영상을 백업하기 전에 알아야 할 것
        </h1>
        <p className="mt-4 text-base text-gray-600 leading-relaxed">
          YouTube 계정에는 구독 목록 외에도 재생목록, Watch Later, 좋아요 영상 등 다양한 데이터가 있습니다.
          백업을 시작하기 전에 무엇을 백업할 수 있고 무엇이 불가능한지 먼저 파악하는 것이 중요합니다.
        </p>

        {/* Summary box */}
        <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700 space-y-2">
          <p className="font-semibold text-gray-900">핵심 요약</p>
          <ul className="space-y-1.5">
            {[
              "재생목록: Google Takeout으로 목록 내보내기 가능",
              "Watch Later: Takeout에 포함되지만 복원은 복잡",
              "좋아요 영상: 리스트 백업 가능, 새 계정에 복원은 제한적",
              "시청 기록: 백업 가능하지만 다른 계정으로 이전 불가",
              "완전한 계정 수준 복원은 현재 불가능",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="shrink-0 font-bold text-red-500">+</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-xl font-bold text-gray-900">주요 개념 설명</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="font-semibold text-sm text-gray-900">재생목록 (Playlists)</p>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                  사용자가 직접 만든 영상 컬렉션입니다. 공개 재생목록은 누구나 볼 수 있고,
                  비공개 재생목록은 본인만 볼 수 있습니다. Google Takeout에서 재생목록 데이터를 내보낼 수 있습니다.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="font-semibold text-sm text-gray-900">Watch Later (나중에 볼 동영상)</p>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                  YouTube의 특수 비공개 재생목록입니다. Takeout에서 별도로 내보낼 수 있으나,
                  새 계정의 Watch Later 목록으로 직접 복원하는 것은 YouTube API의 제한으로 복잡합니다.
                  대신 일반 재생목록으로 가져올 수 있습니다.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="font-semibold text-sm text-gray-900">좋아요 표시 영상 (Liked Videos)</p>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                  좋아요를 누른 영상 목록입니다. Takeout에서 영상 ID와 제목 목록을 내보낼 수 있습니다.
                  그러나 새 계정에서 동일한 영상에 일괄로 좋아요를 표시하는 것은 API 할당량 제한으로 인해 느립니다.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">Google Takeout으로 백업 가능한 것</h2>
            <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">데이터 종류</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Takeout 내보내기</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">새 계정으로 복원</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 text-gray-800">구독 목록</td>
                    <td className="px-4 py-3 text-green-700 font-medium">가능</td>
                    <td className="px-4 py-3 text-yellow-700">가능 (하루 한도 이내)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-800">공개 재생목록</td>
                    <td className="px-4 py-3 text-green-700 font-medium">가능</td>
                    <td className="px-4 py-3 text-yellow-700">수동 재생성 또는 API로 느리게 가능</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-800">비공개 재생목록</td>
                    <td className="px-4 py-3 text-green-700 font-medium">가능</td>
                    <td className="px-4 py-3 text-red-700">복원 복잡, 비공개 상태로 재현 어려움</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-800">Watch Later</td>
                    <td className="px-4 py-3 text-green-700 font-medium">가능</td>
                    <td className="px-4 py-3 text-red-700">직접 복원 불가, 일반 재생목록으로만 가능</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-800">좋아요 영상</td>
                    <td className="px-4 py-3 text-green-700 font-medium">목록 가능</td>
                    <td className="px-4 py-3 text-yellow-700">API 할당량으로 매우 느림</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-800">시청 기록</td>
                    <td className="px-4 py-3 text-green-700 font-medium">가능</td>
                    <td className="px-4 py-3 text-red-700">이전 불가 (API 지원 없음)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-800">댓글 이력</td>
                    <td className="px-4 py-3 text-green-700 font-medium">가능</td>
                    <td className="px-4 py-3 text-red-700">이전 불가 (계정에 귀속)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">흔한 오해와 실제</h2>
            <ul className="mt-4 space-y-3">
              {[
                {
                  myth: "Takeout 파일을 받으면 새 계정에 그대로 복원할 수 있다",
                  reality: "내보내기와 복원은 별개입니다. Takeout은 데이터 백업 파일이며, 복원은 별도의 작업이 필요합니다.",
                },
                {
                  myth: "비공개 재생목록도 완전히 복원된다",
                  reality: "비공개 재생목록의 영상 목록은 백업되지만, 새 계정에 비공개 재생목록으로 재생성하는 것은 수동 작업이 필요합니다.",
                },
                {
                  myth: "시청 기록도 새 계정으로 옮길 수 있다",
                  reality: "YouTube API는 시청 기록 쓰기를 지원하지 않아 이전이 불가능합니다.",
                },
              ].map((item) => (
                <li key={item.myth} className="rounded-xl border border-gray-200 p-4">
                  <p className="font-semibold text-sm text-red-700">오해: {item.myth}</p>
                  <p className="mt-1.5 text-sm text-gray-600">실제: {item.reality}</p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">비공개 재생목록을 안전하게 보존하는 방법</h2>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              비공개 재생목록을 완전히 이전하는 공식적인 자동화 방법은 현재 제한적입니다.
              안전하고 실용적인 접근법은 다음과 같습니다:
            </p>
            <ol className="mt-4 space-y-3">
              {[
                "Google Takeout으로 재생목록 데이터를 내보내 로컬에 백업해 두기",
                "중요한 재생목록은 공개 또는 링크 공유 상태로 변경해 새 계정에서 저장하기",
                "비공개가 꼭 필요한 경우, 수동으로 새 계정에 재생성하기",
                "구독 이전을 먼저 완료한 후 재생목록을 단계적으로 처리하기",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-700">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-600">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </section>

          <section className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <h2 className="text-base font-bold text-gray-900">개인정보 안내</h2>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              YouTube MoveKit은 현재 구독 목록(subscriptions.csv) 분석만 지원합니다.
              재생목록 데이터는 처리하지 않습니다.
              파일 분석은 브라우저에서만 이루어지며 서버에 저장되지 않습니다.
            </p>
          </section>
        </div>

        <div className="mt-10 rounded-xl bg-red-50 border border-red-200 p-5">
          <p className="font-semibold text-red-900">구독 목록부터 시작하세요</p>
          <p className="mt-1 text-sm text-red-700">이전 준비의 첫 단계는 구독 목록 분석입니다. 중복을 제거하고 이전 예상 기간을 확인하세요.</p>
          <Link
            href="/tool"
            className="mt-4 inline-block rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            구독 목록 분석하기
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <span className="text-gray-500">관련 페이지:</span>
          <Link href="/guides/google-takeout-youtube-subscriptions" className="text-red-600 hover:underline">Google Takeout 내보내기</Link>
          <Link href="/guides/transfer-youtube-subscriptions" className="text-red-600 hover:underline">구독 이전 준비</Link>
          <Link href="/resources/youtube-migration-checklist" className="text-red-600 hover:underline">이전 체크리스트</Link>
        </div>
      </div>
    </main>
  );
}
