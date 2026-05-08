import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "유튜브 재생 목록 옮기기 — 가능한 것과 불가능한 것 | YouTube MoveKit",
  description:
    "YouTube 재생 목록을 새 계정으로 옮기기 전에 알아야 할 것: 공개 재생목록 재생성, 비공개 재생목록 한계, Google Takeout 백업 방법을 설명합니다.",
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
      name: "유튜브 재생 목록 옮기기",
      item: `${BASE}/guides/transfer-youtube-playlists`,
    },
  ],
};

const article = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "유튜브 재생 목록 옮기기 — 가능한 것과 불가능한 것",
  description:
    "YouTube 재생 목록을 새 계정으로 옮기기 전에 알아야 할 것: 공개 재생목록 재생성, 비공개 재생목록 한계, Google Takeout 백업 방법.",
  publisher: { "@type": "Organization", name: "YouTube MoveKit" },
  url: `${BASE}/guides/transfer-youtube-playlists`,
};

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "유튜브 재생 목록을 새 계정으로 그대로 옮길 수 있나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "공개 재생목록은 수동으로 재생성하거나 API로 느리게 가져올 수 있습니다. 비공개 재생목록은 목록 백업은 가능하지만 새 계정에 비공개 상태로 자동 복원하는 공식 방법은 없습니다.",
      },
    },
    {
      "@type": "Question",
      name: "Google Takeout으로 재생 목록을 백업할 수 있나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "네. Google Takeout에서 YouTube 데이터를 선택하면 재생목록 데이터(영상 ID, 제목 포함)를 JSON 또는 CSV 형태로 내보낼 수 있습니다. 이 파일은 로컬 백업 용도로 사용됩니다.",
      },
    },
    {
      "@type": "Question",
      name: "나중에 볼 동영상(Watch Later) 목록도 옮길 수 있나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Watch Later는 YouTube의 특수 비공개 재생목록으로, 새 계정의 Watch Later 목록으로 직접 복원하는 것은 API 제한으로 불가능합니다. Takeout으로 목록을 백업한 후 일반 재생목록으로 새 계정에 추가하는 방식이 현실적입니다.",
      },
    },
    {
      "@type": "Question",
      name: "재생 목록 이전에 얼마나 시간이 걸리나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "재생목록 수와 각 재생목록의 영상 수에 따라 다릅니다. YouTube API 할당량 제한으로 인해 영상 수가 많을수록 여러 날에 걸쳐 처리해야 할 수 있습니다.",
      },
    },
  ],
};

export default function TransferPlaylistsGuidePage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />

      <div className="mx-auto max-w-2xl">
        <nav className="mb-8 flex flex-wrap gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900 hover:underline">홈</Link>
          <span>·</span>
          <Link href="/guides" className="hover:text-gray-900 hover:underline">가이드</Link>
          <span>·</span>
          <span className="text-gray-900">재생 목록 옮기기</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900">
          유튜브 재생 목록 옮기기 — 가능한 것과 불가능한 것
        </h1>
        <p className="mt-4 text-base text-gray-600 leading-relaxed">
          유튜브 재생 목록 옮기기를 계획 중이라면, 시작 전에 무엇이 가능하고 무엇이 불가능한지
          먼저 파악하는 것이 중요합니다. 잘못된 기대로 시작하면 중간에 막힐 수 있습니다.
        </p>

        {/* Summary box */}
        <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700 space-y-2">
          <p className="font-semibold text-gray-900">핵심 요약</p>
          <ul className="space-y-1.5">
            {[
              "공개 재생목록: 수동 재생성 또는 API로 가져오기 가능",
              "비공개 재생목록: 목록 백업은 가능하지만 자동 복원 방법 없음",
              "Watch Later: 직접 복원 불가, 일반 재생목록으로만 대체 가능",
              "좋아요 영상: API 할당량 제한으로 복원 느림",
              "시청 기록: 이전 불가 (YouTube API 미지원)",
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
            <h2 className="text-xl font-bold text-gray-900">재생 목록 종류별 이전 가능 여부</h2>
            <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">데이터 종류</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Takeout 백업</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">새 계정으로 이전</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 text-gray-800">공개 재생목록</td>
                    <td className="px-4 py-3 text-green-700 font-medium">가능</td>
                    <td className="px-4 py-3 text-yellow-700">수동 재생성 또는 API로 느리게 가능</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-800">비공개 재생목록</td>
                    <td className="px-4 py-3 text-green-700 font-medium">목록 백업 가능</td>
                    <td className="px-4 py-3 text-red-700">자동 복원 방법 없음, 수동 재생성 필요</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-800">Watch Later</td>
                    <td className="px-4 py-3 text-green-700 font-medium">가능</td>
                    <td className="px-4 py-3 text-red-700">직접 복원 불가, 일반 재생목록으로만 대체</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-800">좋아요 영상 목록</td>
                    <td className="px-4 py-3 text-green-700 font-medium">목록 가능</td>
                    <td className="px-4 py-3 text-yellow-700">API 할당량으로 매우 느림</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-800">시청 기록</td>
                    <td className="px-4 py-3 text-green-700 font-medium">백업 가능</td>
                    <td className="px-4 py-3 text-red-700">이전 불가 (API 미지원)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">재생 목록 종류 설명</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="font-semibold text-sm text-gray-900">공개 재생목록 (Public Playlists)</p>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                  누구나 접근 가능한 재생목록입니다. Takeout으로 영상 ID와 제목을 내보낸 후,
                  새 계정에서 같은 영상들로 재생목록을 재생성하는 것이 가능합니다.
                  단, 영상이 삭제되거나 비공개로 바뀐 경우 재생성이 불가능합니다.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="font-semibold text-sm text-gray-900">비공개 재생목록 (Private Playlists)</p>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                  본인만 볼 수 있는 재생목록입니다. Takeout에서 목록을 내보낼 수 있지만,
                  새 계정에 비공개 재생목록으로 자동 복원하는 공식 방법은 없습니다.
                  수동으로 재생성하거나, 먼저 공개로 전환 후 복원하는 방식이 필요합니다.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="font-semibold text-sm text-gray-900">나중에 볼 동영상 (Watch Later)</p>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                  YouTube의 특수 내장 재생목록입니다. Takeout으로 백업할 수 있으나,
                  새 계정의 Watch Later 목록으로 직접 복원하는 것은 YouTube API가 지원하지 않습니다.
                  대신 일반 재생목록으로 만들어 보관하는 것이 현실적인 대안입니다.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">흔한 오해와 실제</h2>
            <ul className="mt-4 space-y-3">
              {[
                {
                  myth: "Takeout 파일을 받으면 새 계정에 그대로 복원할 수 있다",
                  reality: "내보내기와 복원은 별개입니다. Takeout은 데이터 백업 파일이며, 복원은 별도 작업이 필요합니다.",
                },
                {
                  myth: "비공개 재생목록도 완전히 이전된다",
                  reality: "비공개 재생목록의 영상 목록은 백업되지만, 새 계정에 비공개 상태로 자동 재생성되지 않습니다.",
                },
                {
                  myth: "Watch Later도 그대로 옮겨진다",
                  reality: "Watch Later는 계정에 귀속된 특수 목록입니다. 직접 복원은 불가능하고 일반 재생목록으로 대체해야 합니다.",
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
            <h2 className="text-xl font-bold text-gray-900">재생 목록을 안전하게 보존하는 단계</h2>
            <ol className="mt-4 space-y-4">
              {[
                { step: "Google Takeout으로 YouTube 데이터 내보내기", detail: "takeout.google.com에서 YouTube 항목을 선택해 재생목록 데이터를 내보냅니다." },
                { step: "중요한 비공개 재생목록 공개로 전환", detail: "새 계정에서 접근할 수 있도록 일시적으로 공개 또는 링크 공유 상태로 변경합니다." },
                { step: "새 계정에서 재생목록 재생성 또는 저장", detail: "공개 재생목록은 새 계정에서 '저장'하거나 영상을 직접 추가해 재생성합니다." },
                { step: "Watch Later는 별도 재생목록으로 대체", detail: "나중에 볼 영상 목록을 새 계정에서 일반 재생목록으로 만들어 관리합니다." },
                { step: "구독 이전을 먼저 완료 후 재생목록 처리", detail: "구독 목록 분석 및 이전 계획을 먼저 세우고, 그 다음 재생목록을 단계적으로 처리합니다." },
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{item.step}</p>
                    <p className="mt-0.5 text-sm text-gray-600">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">자주 묻는 질문</h2>
            <div className="mt-4 space-y-4">
              {[
                {
                  q: "재생 목록 이전에 도구가 필요한가요?",
                  a: "공개 재생목록 재생성은 수동으로도 가능합니다. 다만 영상 수가 많거나 재생목록이 많을 경우 YouTube API를 활용하는 도구가 도움이 됩니다. 현재 YouTube MoveKit은 구독 목록 분석을 지원하며, 재생목록 이전은 향후 기능으로 검토 중입니다.",
                },
                {
                  q: "비공개 재생목록은 정말 복원이 불가능한가요?",
                  a: "완전한 자동 복원은 불가능합니다. 영상 목록은 Takeout으로 백업할 수 있으므로, 그 목록을 참고해 새 계정에서 수동으로 재생성하는 것이 가장 확실한 방법입니다.",
                },
                {
                  q: "구독 목록과 재생 목록 중 어떤 것을 먼저 처리해야 하나요?",
                  a: "구독 목록부터 처리하는 것이 좋습니다. 구독 채널이 정리되어 있어야 이후 재생목록에 추가된 영상들에 계속 접근할 수 있습니다. 구독 목록 분석은 지금 바로 /tool에서 시작할 수 있습니다.",
                },
                {
                  q: "YouTube Premium이나 유료 기능과 관련된 데이터도 이전되나요?",
                  a: "구독 서비스 관련 혜택이나 결제 내역은 계정에 귀속되며 이전되지 않습니다. 재생목록의 영상 콘텐츠 자체는 이전 가능성이 있지만, 유료 서비스 혜택은 해당되지 않습니다.",
                },
              ].map((item) => (
                <details key={item.q} className="rounded-xl border border-gray-200">
                  <summary className="cursor-pointer px-4 py-3 font-semibold text-sm text-gray-900 hover:bg-gray-50">
                    {item.q}
                  </summary>
                  <p className="px-4 pb-4 pt-2 text-sm text-gray-600 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <h2 className="text-base font-bold text-gray-900">개인정보 및 보안 안내</h2>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              YouTube MoveKit은 현재 구독 목록(subscriptions.csv) 분석을 지원합니다.
              재생목록 데이터는 서버에 업로드되거나 처리되지 않습니다.
              파일 분석은 브라우저에서만 이루어지며, Google 계정 비밀번호나 세션 토큰을 요구하지 않습니다.
            </p>
          </section>
        </div>

        <div className="mt-10 rounded-xl bg-red-50 border border-red-200 p-5">
          <p className="font-semibold text-red-900">재생 목록 이전 전에 구독 목록부터 분석하세요</p>
          <p className="mt-1 text-sm text-red-700">중복 구독을 제거하고 이전 예상 기간을 먼저 확인하면 전체 이전 계획을 세우기 쉬워집니다.</p>
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
          <Link href="/guides/transfer-youtube-watch-history" className="text-red-600 hover:underline">시청 기록 옮기기</Link>
        </div>
      </div>
    </main>
  );
}
