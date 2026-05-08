import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "유튜브 구독 옮기기 — 시작 전 알아야 할 것 | YouTube MoveKit",
  description:
    "유튜브 구독 옮기기 전에 알아야 할 것: subscriptions.csv 분석, 중복 제거, 이전 계획 수립 방법과 API 제한, 안전한 워크플로를 설명합니다.",
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
      name: "유튜브 구독 옮기기",
      item: `${BASE}/guides/transfer-youtube-subscriptions`,
    },
  ],
};

const article = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "유튜브 구독 옮기기 — 시작 전 알아야 할 것",
  description:
    "유튜브 구독 옮기기 전에 알아야 할 것: subscriptions.csv 분석, 중복 제거, 이전 계획 수립 방법과 API 제한, 안전한 워크플로를 설명합니다.",
  publisher: { "@type": "Organization", name: "YouTube MoveKit" },
  url: `${BASE}/guides/transfer-youtube-subscriptions`,
};

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "유튜브 구독 옮기기를 지금 바로 시작할 수 있나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "subscriptions.csv 분석과 중복 제거는 지금 바로 시작할 수 있습니다. Google Takeout에서 파일을 내보낸 후 /tool 페이지에서 업로드하면 됩니다. 실제 구독 재구독(새 계정에 구독 추가) 기능은 향후 제공될 예정입니다.",
      },
    },
    {
      "@type": "Question",
      name: "subscriptions.csv 파일은 어디서 받나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google Takeout(takeout.google.com)에서 'YouTube 및 YouTube Music'을 선택한 후 'subscriptions' 항목만 포함해 내보내면 subscriptions.csv 파일을 받을 수 있습니다.",
      },
    },
    {
      "@type": "Question",
      name: "중복 구독은 왜 제거해야 하나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "같은 채널이 목록에 여러 번 포함되어 있으면 실제 이전 시 불필요한 API 요청이 늘어납니다. 중복을 미리 제거하면 이전에 드는 시간과 API 할당량을 절약할 수 있습니다.",
      },
    },
    {
      "@type": "Question",
      name: "하루에 몇 개까지 구독을 이전할 수 있나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "YouTube API 할당량과 계정 이상 감지 정책을 고려할 때, 하루 약 190개 이하로 나눠 처리하는 것이 일반적으로 안전한 것으로 알려져 있습니다. 이 수치는 공식 YouTube 사양이 아닌 경험적 가이드라인입니다.",
      },
    },
    {
      "@type": "Question",
      name: "브라우저 확장 프로그램으로 구독을 이전하면 위험한가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "일부 확장 프로그램은 YouTube 쿠키나 세션 토큰을 읽어 동작합니다. 이 방식은 계정 보안 위험, 서비스 약관 위반 가능성, 확장 프로그램 강제 제거 위험 등을 수반합니다. YouTube MoveKit은 계정 자격증명을 요구하지 않습니다.",
      },
    },
  ],
};

export default function TransferSubscriptionsGuidePage() {
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
          <span className="text-gray-900">구독 이전 준비</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900">
          유튜브 구독 옮기기 — 시작 전 알아야 할 것
        </h1>
        <p className="mt-4 text-base text-gray-600 leading-relaxed">
          유튜브 구독 옮기기를 계획하고 있다면, 막연히 시작하기 전에 현실적인 제약과
          안전한 준비 방법을 먼저 파악하는 것이 중요합니다. 잘못된 방법으로 시작하면
          계정이 일시 제한될 수 있습니다.
        </p>

        {/* Short answer box */}
        <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-5 text-sm">
          <p className="font-semibold text-blue-900">YouTube MoveKit으로 현재 할 수 있는 것</p>
          <p className="mt-2 text-blue-800 leading-relaxed">
            구독 목록은 Google Takeout으로 백업하고 정리할 수 있지만, 현재 YouTube MoveKit은
            실제 구독 이전이 아니라 subscriptions.csv 분석과 중복 제거를 제공합니다.
          </p>
        </div>

        {/* Summary box */}
        <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700 space-y-2">
          <p className="font-semibold text-gray-900">핵심 요약</p>
          <ul className="space-y-1.5">
            {[
              "구독 목록은 이전 가능 — 단, 즉각적이고 완전한 이전은 보장되지 않음",
              "YouTube API는 하루에 처리할 수 있는 구독 요청 수가 제한되어 있음",
              "브라우저 확장 프로그램 방식은 계정 위험과 정책 위반 가능성이 있음",
              "안전한 순서: 내보내기 → 분석 → 중복 제거 → 나중에 이전",
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
            <h2 className="text-xl font-bold text-gray-900">현재 YouTube MoveKit으로 할 수 있는 것과 제한되는 것</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                <p className="font-semibold text-sm text-green-800 mb-3">가능한 것</p>
                <ul className="space-y-2 text-sm text-green-900">
                  {[
                    "subscriptions.csv 분석",
                    "중복 구독 제거",
                    "정리된 CSV 다운로드",
                    "이전 계획 수립 (예상 기간 확인)",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="shrink-0 text-green-600">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                <p className="font-semibold text-sm text-amber-800 mb-3">제한되는 것</p>
                <ul className="space-y-2 text-sm text-amber-900">
                  {[
                    "즉시 전체 자동 이전",
                    "계정 상태와 API 정책을 무시한 이전",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="shrink-0 text-amber-600">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">이전 가능한 것과 불가능한 것</h2>
            <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">항목</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">이전 가능 여부</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">비고</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  <tr>
                    <td className="px-4 py-3 text-gray-800">채널 구독 목록</td>
                    <td className="px-4 py-3 text-green-700 font-medium">가능</td>
                    <td className="px-4 py-3 text-gray-600">단, 하루 한도 이내로 나눠 처리</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-800">재생목록 (공개/비공개)</td>
                    <td className="px-4 py-3 text-yellow-700 font-medium">제한적</td>
                    <td className="px-4 py-3 text-gray-600">공개 재생목록은 재생성 가능, 비공개는 복잡</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-800">시청 기록</td>
                    <td className="px-4 py-3 text-red-700 font-medium">불가능</td>
                    <td className="px-4 py-3 text-gray-600">YouTube API가 시청 기록 쓰기를 지원하지 않음</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-800">좋아요 표시 영상</td>
                    <td className="px-4 py-3 text-yellow-700 font-medium">제한적</td>
                    <td className="px-4 py-3 text-gray-600">YouTube API 할당량에 의해 속도 제한됨</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-800">댓글 이력</td>
                    <td className="px-4 py-3 text-red-700 font-medium">불가능</td>
                    <td className="px-4 py-3 text-gray-600">과거 댓글은 계정에 귀속됨</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-800">채널 자체 (구독자, 동영상)</td>
                    <td className="px-4 py-3 text-red-700 font-medium">불가능</td>
                    <td className="px-4 py-3 text-gray-600">채널은 계정에 귀속됨</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">단계별 안전한 구독 이전 준비</h2>
            <ol className="mt-4 space-y-4">
              {[
                {
                  step: "Google Takeout에서 구독 목록 내보내기",
                  detail: "takeout.google.com에서 'YouTube 및 YouTube Music' → 'subscriptions'만 선택해 subscriptions.csv를 내보냅니다.",
                },
                {
                  step: "subscriptions.csv 파일 내용 확인",
                  detail: "내보낸 파일을 열어 채널 수와 데이터 형식을 직접 확인합니다. 예상보다 많은 중복 채널이 포함된 경우가 있습니다.",
                },
                {
                  step: "/tool에서 파일 분석",
                  detail: "YouTube MoveKit 도구 페이지에서 파일을 업로드하면 중복 채널 목록과 실제 이전이 필요한 채널 수를 바로 확인할 수 있습니다.",
                },
                {
                  step: "중복 제거된 CSV 다운로드",
                  detail: "중복이 제거된 정리된 CSV 파일을 다운로드합니다. 이 파일이 이전 계획의 기준이 됩니다.",
                },
                {
                  step: "이전 가능성 검토",
                  detail: "채널 수를 하루 안전 처리 한도(약 190개)로 나눠 예상 이전 기간을 계획합니다. 이전 기능은 향후 제공 예정입니다.",
                },
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
            <h2 className="text-xl font-bold text-gray-900">흔한 실수와 주의할 점</h2>
            <ul className="mt-4 space-y-3">
              {[
                {
                  mistake: "파일 확인 없이 바로 이전 시도",
                  note: "subscriptions.csv에 중복 채널이 포함된 경우, 정리 없이 이전하면 불필요한 API 요청이 늘어납니다. 먼저 파일을 분석하세요.",
                },
                {
                  mistake: "하루 한도를 무시하고 전체 이전 한 번에 시도",
                  note: "단기간에 수백~수천 개의 구독 요청을 보내면 YouTube의 자동 시스템이 이상 활동으로 감지해 계정을 일시 제한할 수 있습니다.",
                },
                {
                  mistake: "브라우저 확장 프로그램에 계정 자격증명 제공",
                  note: "세션 토큰이나 쿠키를 요구하는 확장 프로그램은 계정 보안 위험이 있으며 YouTube 서비스 약관을 위반할 수 있습니다.",
                },
                {
                  mistake: "이전 후 즉시 완전한 추천 알고리즘 복원 기대",
                  note: "구독을 이전해도 시청 기록은 새 계정에 없으므로 추천 알고리즘이 적응하는 데 시간이 걸립니다.",
                },
              ].map((item) => (
                <li key={item.mistake} className="rounded-xl border border-gray-200 p-4">
                  <p className="font-semibold text-sm text-red-700">주의: {item.mistake}</p>
                  <p className="mt-1.5 text-sm text-gray-600">{item.note}</p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">브라우저 확장 프로그램은 왜 위험할 수 있나요?</h2>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              일부 브라우저 확장 프로그램은 YouTube 쿠키나 세션 토큰을 직접 읽어 구독을 대신 처리합니다.
              이 방식은 다음과 같은 위험이 있습니다:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                {
                  title: "계정 보안 위험",
                  desc: "세션 토큰을 읽고 저장하는 확장 프로그램은 이론상 계정을 탈취하거나 남용할 수 있는 위치에 있습니다.",
                },
                {
                  title: "YouTube 서비스 약관 위반 가능성",
                  desc: "비공식적인 자동화 방식은 YouTube 이용약관을 위반할 수 있으며, 계정이 정지될 위험이 있습니다.",
                },
                {
                  title: "확장 프로그램 제거 위험",
                  desc: "브라우저 스토어에서 정책 위반으로 제거될 수 있어, 이전 도중 사용할 수 없게 될 수 있습니다.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
                  <span className="shrink-0 font-bold text-amber-600">!</span>
                  <div>
                    <p className="font-semibold text-sm text-amber-900">{item.title}</p>
                    <p className="mt-0.5 text-sm text-amber-800">{item.desc}</p>
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
                  q: "유튜브 구독 옮기기를 지금 바로 시작할 수 있나요?",
                  a: "subscriptions.csv 분석과 중복 제거는 지금 바로 시작할 수 있습니다. Google Takeout에서 파일을 내보낸 후 /tool 페이지에서 업로드하면 됩니다. 실제 구독 재구독(새 계정에 구독 추가) 기능은 향후 제공될 예정입니다.",
                },
                {
                  q: "subscriptions.csv 파일은 어디서 받나요?",
                  a: "Google Takeout(takeout.google.com)에서 'YouTube 및 YouTube Music'을 선택한 후 'subscriptions' 항목만 포함해 내보내면 subscriptions.csv 파일을 받을 수 있습니다.",
                },
                {
                  q: "중복 구독은 왜 제거해야 하나요?",
                  a: "같은 채널이 목록에 여러 번 포함되어 있으면 실제 이전 시 불필요한 API 요청이 늘어납니다. 중복을 미리 제거하면 이전에 드는 시간과 API 할당량을 절약할 수 있습니다.",
                },
                {
                  q: "하루에 몇 개까지 구독을 이전할 수 있나요?",
                  a: "YouTube API 할당량과 계정 이상 감지 정책을 고려할 때, 하루 약 190개 이하로 나눠 처리하는 것이 일반적으로 안전한 것으로 알려져 있습니다. 이 수치는 공식 YouTube 사양이 아닌 경험적 가이드라인입니다.",
                },
                {
                  q: "구독 이전 후 추천 알고리즘은 어떻게 되나요?",
                  a: "구독을 이전하면 해당 채널들의 새 영상이 피드에 다시 노출됩니다. 그러나 시청 기록은 새 계정에 없으므로 알고리즘이 완전히 적응하는 데는 시간이 걸립니다. 자주 보던 채널들을 다시 구독하고 시청하면 점차 개인화됩니다.",
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
              현재 제공되는 CSV 분석 기능은 파일을 브라우저에서만 처리합니다.
              향후 이전 기능이 제공될 경우, 플랫폼 정책 및 API 할당량 범위 내에서 구현될 예정입니다.
            </p>
          </section>
        </div>

        <div className="mt-10 rounded-xl bg-red-50 border border-red-200 p-5">
          <p className="font-semibold text-red-900">지금 구독 목록을 분석해보세요</p>
          <p className="mt-1 text-sm text-red-700">중복 제거 후 실제 이전이 필요한 채널 수와 예상 기간을 바로 확인할 수 있습니다.</p>
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
          <Link href="/guides/transfer-youtube-playlists" className="text-red-600 hover:underline">재생 목록 옮기기</Link>
          <Link href="/guides/transfer-youtube-watch-history" className="text-red-600 hover:underline">시청 기록 옮기기</Link>
          <Link href="/resources/youtube-migration-checklist" className="text-red-600 hover:underline">이전 체크리스트</Link>
        </div>
      </div>
    </main>
  );
}
