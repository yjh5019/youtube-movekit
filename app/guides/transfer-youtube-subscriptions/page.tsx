import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "YouTube 구독 목록을 새 계정으로 옮기기 전에 알아야 할 것 | YouTube MoveKit",
  description:
    "이전 가능한 항목과 불가능한 항목, API 할당량 제한, 브라우저 확장 프로그램 위험성, 안전한 이전 워크플로를 설명합니다.",
};

const BASE = "https://youtube-movekit.vercel.app";

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "홈", item: BASE },
    { "@type": "ListItem", position: 2, name: "가이드", item: `${BASE}/guides` },
    {
      "@type": "ListItem",
      position: 3,
      name: "YouTube 구독 목록을 새 계정으로 옮기기 전에 알아야 할 것",
      item: `${BASE}/guides/transfer-youtube-subscriptions`,
    },
  ],
};

const article = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "YouTube 구독 목록을 새 계정으로 옮기기 전에 알아야 할 것",
  description:
    "이전 가능한 항목과 불가능한 항목, API 할당량 제한, 브라우저 확장 프로그램 위험성, 안전한 이전 워크플로를 설명합니다.",
  publisher: { "@type": "Organization", name: "YouTube MoveKit" },
  url: `${BASE}/guides/transfer-youtube-subscriptions`,
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

      <div className="mx-auto max-w-2xl">
        <nav className="mb-8 flex flex-wrap gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900 hover:underline">홈</Link>
          <span>·</span>
          <Link href="/guides" className="hover:text-gray-900 hover:underline">가이드</Link>
          <span>·</span>
          <span className="text-gray-900">구독 이전 준비</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900">
          YouTube 구독 목록을 새 계정으로 옮기기 전에 알아야 할 것
        </h1>
        <p className="mt-4 text-base text-gray-600 leading-relaxed">
          YouTube 구독 이전을 시작하기 전에 알아야 할 현실적인 제약과 안전한 준비 방법을 설명합니다.
          막연히 시작하면 계정이 일시 제한될 수 있습니다.
        </p>

        {/* Summary box */}
        <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700 space-y-2">
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
            <h2 className="text-xl font-bold text-gray-900">왜 즉시 전체 이전이 어려운가요?</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="font-semibold text-sm text-gray-900">YouTube API 할당량 제한</p>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                  YouTube는 공식 API를 통해 처리할 수 있는 구독 요청 수에 하루 한도를 두고 있습니다.
                  하루에 너무 많은 요청을 보내면 일시적으로 요청이 차단되거나 계정이 제한될 수 있습니다.
                  일반적으로 하루 약 190개 이하로 나눠 처리하는 것이 안전합니다.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="font-semibold text-sm text-gray-900">계정 이상 활동 감지</p>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                  단기간에 수백~수천 개의 구독 작업이 발생하면 YouTube의 자동 시스템이 이상 활동으로 감지할 수 있습니다.
                  이는 일시적 계정 제한으로 이어질 수 있습니다.
                </p>
              </div>
            </div>
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
            <h2 className="text-xl font-bold text-gray-900">권장하는 안전한 이전 워크플로</h2>
            <ol className="mt-4 space-y-4">
              {[
                { step: "Google Takeout으로 구독 목록 내보내기", detail: "이전하려는 계정에서 subscriptions.csv를 내보냅니다." },
                { step: "YouTube MoveKit으로 파일 분석", detail: "중복 구독을 제거하고 실제 이전이 필요한 채널 수를 파악합니다." },
                { step: "정리된 CSV 다운로드", detail: "중복이 제거된 깨끗한 CSV 파일을 받습니다." },
                { step: "이전 예상 기간 확인", detail: "채널 수를 하루 한도(약 190개)로 나눠 며칠이 걸릴지 미리 계획합니다." },
                { step: "공식 OAuth API 기반 이전 (출시 예정)", detail: "준비가 되면 YouTube MoveKit의 공식 이전 기능을 사용해 안전하게 처리합니다." },
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

          <section className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <h2 className="text-base font-bold text-gray-900">개인정보 및 보안 안내</h2>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              YouTube MoveKit은 Google 계정 비밀번호, 쿠키, 세션 토큰을 요구하거나 수집하지 않습니다.
              현재 제공되는 CSV 분석 기능은 파일을 브라우저에서만 처리합니다.
              향후 이전 기능은 공식 YouTube OAuth API 방식으로만 구현될 예정입니다.
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
          <Link href="/compare/google-takeout-vs-browser-extension" className="text-red-600 hover:underline">방식 비교하기</Link>
          <Link href="/resources/youtube-migration-checklist" className="text-red-600 hover:underline">이전 체크리스트</Link>
        </div>
      </div>
    </main>
  );
}
