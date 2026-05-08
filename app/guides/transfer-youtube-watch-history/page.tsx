import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "유튜브 시청 기록 옮기기, 직접 이전은 어렵습니다 | YouTube MoveKit",
  description:
    "YouTube 시청 기록은 API 제한으로 다른 계정에 직접 이전할 수 없습니다. Google Takeout으로 개인 백업하는 방법과 현실적인 대안을 설명합니다.",
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
      name: "유튜브 시청 기록 옮기기",
      item: `${BASE}/guides/transfer-youtube-watch-history`,
    },
  ],
};

const article = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "유튜브 시청 기록 옮기기, 직접 이전은 어렵습니다",
  description:
    "YouTube 시청 기록은 API 제한으로 다른 계정에 직접 이전할 수 없습니다. Google Takeout으로 개인 백업하는 방법과 현실적인 대안을 설명합니다.",
  publisher: { "@type": "Organization", name: "YouTube MoveKit" },
  url: `${BASE}/guides/transfer-youtube-watch-history`,
};

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "유튜브 시청 기록을 새 계정으로 옮길 수 있나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "아니요. YouTube API는 시청 기록 쓰기를 공식적으로 지원하지 않습니다. Google Takeout으로 기존 계정의 시청 기록을 개인 백업용으로 내보낼 수는 있지만, 그 데이터를 새 계정의 시청 기록으로 가져오는 공식적인 방법은 없습니다.",
      },
    },
    {
      "@type": "Question",
      name: "시청 기록을 백업해두면 나중에 이전할 수 있나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "백업 자체는 Google Takeout으로 가능합니다. 그러나 현재 YouTube API 정책상 시청 기록 쓰기는 지원되지 않으므로, 백업 파일을 가지고 있어도 새 계정에 시청 기록으로 복원하는 것은 불가능합니다.",
      },
    },
    {
      "@type": "Question",
      name: "시청 기록이 없으면 추천 알고리즘이 망가지나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "새 계정은 처음에는 개인화가 되어 있지 않아 추천이 덜 정교할 수 있습니다. 하지만 구독 채널들을 새 계정으로 이전하고, 해당 채널들의 영상을 시청하기 시작하면 알고리즘이 점차 적응합니다. 구독 이전이 추천 품질 회복의 핵심입니다.",
      },
    },
    {
      "@type": "Question",
      name: "Google Takeout으로 시청 기록을 내보내면 어떤 형식인가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google Takeout에서 YouTube 시청 기록을 내보내면 JSON 파일로 제공됩니다. 시청한 영상의 제목, URL, 시청 시각이 포함됩니다. 이 파일은 개인 기록 보관 목적으로 유용하지만, YouTube에 다시 업로드해 시청 기록을 복원하는 용도로는 사용할 수 없습니다.",
      },
    },
    {
      "@type": "Question",
      name: "시청 기록 대신 무엇을 이전하면 효과적인가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "구독 목록 이전이 가장 효과적입니다. 자주 보던 채널들을 새 계정에서 다시 구독하면 해당 채널의 콘텐츠가 피드에 노출되고, 시청 패턴이 쌓이면서 추천 알고리즘도 자연스럽게 개인화됩니다. 중요한 영상은 재생목록으로 정리해두는 것도 좋습니다.",
      },
    },
  ],
};

export default function TransferWatchHistoryGuidePage() {
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
          <span className="text-gray-900">시청 기록 옮기기</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900">
          유튜브 시청 기록 옮기기, 직접 이전은 어렵습니다
        </h1>
        <p className="mt-4 text-base text-gray-600 leading-relaxed">
          계정을 바꿀 때 시청 기록까지 그대로 옮기고 싶은 마음은 이해하지만,
          YouTube API의 기술적 제한으로 인해 시청 기록을 새 계정으로 직접 이전하는 것은 현재 불가능합니다.
          이 가이드에서는 그 이유와 현실적인 대안을 설명합니다.
        </p>

        {/* Summary box */}
        <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700 space-y-2">
          <p className="font-semibold text-gray-900">핵심 요약</p>
          <ul className="space-y-1.5">
            {[
              "시청 기록 직접 이전: 불가능 (YouTube API 미지원)",
              "개인 백업: Google Takeout으로 JSON 형식 내보내기 가능",
              "추천 알고리즘 복원: 구독 이전 후 시청 패턴이 쌓이면 자연스럽게 적응",
              "현실적 대안: 구독 목록 이전 + 중요 영상 재생목록 정리",
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
            <h2 className="text-xl font-bold text-gray-900">왜 직접 이전이 불가능한가요?</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="font-semibold text-sm text-gray-900">YouTube API 정책 — 시청 기록 쓰기 미지원</p>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                  YouTube Data API는 재생목록 생성, 구독 추가, 좋아요 표시 등 다양한 쓰기 작업을 지원합니다.
                  그러나 시청 기록에 데이터를 추가하는 API 엔드포인트는 공식적으로 제공되지 않습니다.
                  이는 YouTube의 정책적 결정이며, 서드파티 도구로도 우회할 수 없습니다.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="font-semibold text-sm text-gray-900">비공식 방법의 위험성</p>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                  일부 비공식 도구는 계정 쿠키나 세션 토큰을 이용해 시청 기록을 조작하려 시도합니다.
                  이 방식은 YouTube 서비스 약관을 위반할 가능성이 높으며, 계정 정지나 보안 위협을 초래할 수 있습니다.
                  YouTube MoveKit은 이러한 방식을 사용하지 않으며 권장하지도 않습니다.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">시청 기록 관련 가능 여부 요약</h2>
            <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">항목</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">가능 여부</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">비고</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 text-gray-800">Google Takeout으로 개인 백업</td>
                    <td className="px-4 py-3 text-green-700 font-medium">가능</td>
                    <td className="px-4 py-3 text-gray-600">JSON 파일로 내보내기, 개인 기록 보관 목적</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-800">새 계정으로 직접 이전</td>
                    <td className="px-4 py-3 text-red-700 font-medium">불가능</td>
                    <td className="px-4 py-3 text-gray-600">YouTube API 시청 기록 쓰기 미지원</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-800">추천 알고리즘 즉시 복원</td>
                    <td className="px-4 py-3 text-red-700 font-medium">불가능</td>
                    <td className="px-4 py-3 text-gray-600">새 계정은 개인화 초기화 상태에서 시작</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-800">구독 이전 후 알고리즘 재적응</td>
                    <td className="px-4 py-3 text-green-700 font-medium">가능</td>
                    <td className="px-4 py-3 text-gray-600">구독 채널 시청 패턴이 쌓이면서 점진적 개선</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-800">중요 영상 재생목록 정리</td>
                    <td className="px-4 py-3 text-green-700 font-medium">가능</td>
                    <td className="px-4 py-3 text-gray-600">다시 보고 싶은 영상은 재생목록으로 따로 관리</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">Google Takeout으로 시청 기록 백업하기</h2>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              직접 이전은 불가능하지만, 개인 기록 보관을 위해 시청 기록을 내보낼 수 있습니다.
            </p>
            <ol className="mt-4 space-y-4">
              {[
                { step: "takeout.google.com 접속", detail: "Google 계정으로 로그인한 상태에서 Google Takeout에 접속합니다." },
                { step: "YouTube 항목 선택", detail: "전체 선택 해제 후 'YouTube 및 YouTube Music'만 체크합니다." },
                { step: "포함할 YouTube 데이터 선택", detail: "'모든 YouTube 데이터 포함됨'을 클릭해 '기록' 항목을 선택합니다. 시청 기록이 포함됩니다." },
                { step: "내보내기 형식 선택 및 요청", detail: "파일 형식(JSON 권장)과 배송 방식을 선택한 후 내보내기를 요청합니다." },
                { step: "파일 다운로드 및 보관", detail: "이메일로 링크가 오면 파일을 다운로드해 안전한 곳에 보관합니다. 이 파일은 이전 용도가 아닌 개인 기록 보관 목적입니다." },
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-200 text-sm font-bold text-gray-600">
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
            <h2 className="text-xl font-bold text-gray-900">현실적인 대안 — 시청 기록 없이도 새 출발하기</h2>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              시청 기록을 이전하지 못해도, 아래 방법으로 새 계정을 빠르게 자신의 취향에 맞게 만들 수 있습니다.
            </p>
            <ul className="mt-4 space-y-3">
              {[
                {
                  title: "구독 목록 이전 (가장 중요)",
                  desc: "자주 보던 채널들을 새 계정에서 다시 구독하면, 해당 채널의 영상이 피드에 노출되고 시청 패턴이 쌓이면서 알고리즘이 적응합니다.",
                },
                {
                  title: "중요 영상 재생목록으로 정리",
                  desc: "다시 보고 싶거나 기억해두고 싶은 영상들을 재생목록에 저장해두면, 시청 기록이 없어도 중요한 콘텐츠에 쉽게 접근할 수 있습니다.",
                },
                {
                  title: "홈 피드 개인화 직접 설정",
                  desc: "새 계정에서 관심 없는 채널은 '관심 없음', 좋아하는 주제는 적극적으로 시청해 알고리즘이 빠르게 적응하도록 유도합니다.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-3 rounded-xl border border-gray-200 p-4">
                  <span className="shrink-0 font-bold text-red-500 mt-0.5">+</span>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{item.title}</p>
                    <p className="mt-0.5 text-sm text-gray-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">자주 묻는 질문</h2>
            <div className="mt-4 space-y-4">
              {[
                {
                  q: "유튜브 시청 기록을 새 계정으로 옮길 수 있나요?",
                  a: "아니요. YouTube API는 시청 기록 쓰기를 지원하지 않아 직접 이전은 불가능합니다. Google Takeout으로 개인 백업용으로 내보낼 수는 있지만, 새 계정에 복원하는 공식 방법은 없습니다.",
                },
                {
                  q: "시청 기록 없이 추천 알고리즘이 다시 작동하나요?",
                  a: "네. 구독 채널을 새 계정에서 다시 구독하고 영상을 시청하기 시작하면 알고리즘이 점진적으로 적응합니다. 처음에는 개인화가 덜하지만, 시청 패턴이 쌓이면 빠르게 개선됩니다.",
                },
                {
                  q: "Takeout으로 내보낸 시청 기록 JSON 파일은 어디에 쓸 수 있나요?",
                  a: "개인 기록 보관, 어떤 영상을 봤는지 확인, 또는 재생목록 정리 참고용으로 활용할 수 있습니다. YouTube에 다시 업로드해 시청 기록을 복원하는 용도로는 사용할 수 없습니다.",
                },
                {
                  q: "시청 기록 이전 서비스나 앱이 있나요?",
                  a: "YouTube API가 시청 기록 쓰기를 지원하지 않으므로, 공식적인 방법으로 이를 구현하는 합법적인 서비스는 존재하기 어렵습니다. 계정 쿠키나 세션 토큰을 사용하는 비공식 방법은 계정 위험과 약관 위반 가능성이 있어 권장하지 않습니다.",
                },
                {
                  q: "구독 목록 이전은 어떻게 시작하나요?",
                  a: "Google Takeout에서 subscriptions.csv 파일을 내보낸 후, YouTube MoveKit의 /tool 페이지에서 파일을 업로드하면 중복 구독 제거와 이전 예상 기간을 바로 확인할 수 있습니다.",
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
              YouTube MoveKit은 Google 계정 비밀번호, 쿠키, 세션 토큰을 요구하거나 수집하지 않습니다.
              시청 기록 이전을 주장하는 도구 중 계정 자격 증명을 요구하는 것은 보안 위험이 있으므로 주의하세요.
              YouTube MoveKit의 현재 기능은 구독 목록 분석에 한정되며 브라우저에서만 처리됩니다.
            </p>
          </section>
        </div>

        <div className="mt-10 rounded-xl bg-red-50 border border-red-200 p-5">
          <p className="font-semibold text-red-900">시청 기록 대신 구독 목록부터 이전하세요</p>
          <p className="mt-1 text-sm text-red-700">구독 채널 이전이 새 계정 알고리즘 적응의 핵심입니다. 지금 구독 목록을 분석해 이전을 준비하세요.</p>
          <Link
            href="/tool"
            className="mt-4 inline-block rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            구독 목록 분석하기
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <span className="text-gray-500">관련 페이지:</span>
          <Link href="/guides/transfer-youtube-subscriptions" className="text-red-600 hover:underline">구독 이전 준비</Link>
          <Link href="/guides/transfer-youtube-playlists" className="text-red-600 hover:underline">재생 목록 옮기기</Link>
          <Link href="/guides/google-takeout-youtube-subscriptions" className="text-red-600 hover:underline">Google Takeout 내보내기</Link>
        </div>
      </div>
    </main>
  );
}
