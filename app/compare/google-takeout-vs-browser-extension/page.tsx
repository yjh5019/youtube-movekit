import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Google Takeout 방식과 브라우저 확장 프로그램 방식 비교 | YouTube MoveKit",
  description:
    "구독 이전 방식을 개인정보 보호, 보안, 편의성, YouTube 정책 준수 측면에서 비교합니다. 어떤 방식이 자신에게 맞는지 확인하세요.",
};

const BASE = SITE_URL;

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "홈", item: BASE },
    { "@type": "ListItem", position: 2, name: "비교", item: `${BASE}/compare` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Google Takeout 방식과 브라우저 확장 프로그램 방식 비교",
      item: `${BASE}/compare/google-takeout-vs-browser-extension`,
    },
  ],
};

const article = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Google Takeout 방식과 브라우저 확장 프로그램 방식 비교",
  description:
    "구독 이전 방식을 개인정보 보호, 보안, 편의성, YouTube 정책 준수 측면에서 비교합니다.",
  publisher: { "@type": "Organization", name: "YouTube MoveKit" },
  url: `${BASE}/compare/google-takeout-vs-browser-extension`,
};

export default function TakeoutVsExtensionPage() {
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
          <Link href="/compare" className="hover:text-gray-900 hover:underline">비교</Link>
          <span>·</span>
          <span className="text-gray-900">Takeout vs 브라우저 확장</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900">
          Google Takeout 방식과 브라우저 확장 프로그램 방식 비교
        </h1>
        <p className="mt-4 text-base text-gray-600 leading-relaxed">
          YouTube 구독 이전에는 여러 방식이 있습니다. 이 페이지에서는 Google Takeout 기반 방식과
          브라우저 확장 프로그램 방식을 개인정보 보호, 보안, 편의성, YouTube 정책 준수 측면에서 비교합니다.
        </p>

        {/* Summary box */}
        <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700 space-y-2">
          <p className="font-semibold text-gray-900">핵심 비교 요약</p>
          <ul className="space-y-1.5">
            {[
              "Google Takeout: 공식 방식, 느리지만 안전하고 정책 위반 없음",
              "브라우저 확장 프로그램: 편리하지만 보안·정책 위험이 있을 수 있음",
              "쿠키/세션 토큰 방식: 이 비교에서 권장하지 않음",
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
            <h2 className="text-xl font-bold text-gray-900">비교 표</h2>
            <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">비교 항목</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Google Takeout + 공식 API</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">브라우저 확장 프로그램</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-700">개인정보 보호</td>
                    <td className="px-4 py-3 text-green-700">높음 — 파일만 사용, 계정 접근 불필요</td>
                    <td className="px-4 py-3 text-yellow-700">낮을 수 있음 — 쿠키·세션 접근 가능</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-700">계정 보안 위험</td>
                    <td className="px-4 py-3 text-green-700">낮음</td>
                    <td className="px-4 py-3 text-red-700">높을 수 있음 — 세션 토큰 접근</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-700">YouTube 정책 준수</td>
                    <td className="px-4 py-3 text-green-700">준수 (공식 API 사용)</td>
                    <td className="px-4 py-3 text-red-700">위반 가능성 있음 (비공식 자동화)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-700">계정 제한 위험</td>
                    <td className="px-4 py-3 text-green-700">낮음 (하루 한도 내 처리 시)</td>
                    <td className="px-4 py-3 text-red-700">높을 수 있음 (비정상 패턴 감지)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-700">사용 편의성</td>
                    <td className="px-4 py-3 text-yellow-700">다소 번거로움 (Takeout 내보내기 필요)</td>
                    <td className="px-4 py-3 text-green-700">편리함 (자동화)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-700">이전 속도</td>
                    <td className="px-4 py-3 text-yellow-700">느림 (하루 약 190개 한도)</td>
                    <td className="px-4 py-3 text-yellow-700">빠를 수 있지만 한도 초과 위험</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-700">투명성</td>
                    <td className="px-4 py-3 text-green-700">높음 — 처리 내용이 명확</td>
                    <td className="px-4 py-3 text-yellow-700">낮을 수 있음 — 내부 동작 불투명</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-700">확장 프로그램 제거 위험</td>
                    <td className="px-4 py-3 text-green-700">해당 없음</td>
                    <td className="px-4 py-3 text-red-700">정책 위반으로 스토어 제거 가능</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">Google Takeout + 공식 API 방식</h2>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              Google Takeout에서 subscriptions.csv를 내보낸 후, YouTube 공식 API를 사용해 새 계정에 구독을 추가하는 방식입니다.
              이 방식은 다음과 같은 장점이 있습니다:
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Google 계정에 로그인하거나 쿠키를 제공할 필요가 없음",
                "처리 과정이 투명하고 예측 가능함",
                "YouTube 이용약관을 준수함",
                "하루 처리 한도를 지키면 계정 제한 위험이 낮음",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-gray-700">
                  <span className="shrink-0 font-bold text-green-600">+</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-gray-500">
              단점: 내보내기 과정이 필요하고, 이전에 여러 날이 소요될 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">브라우저 확장 프로그램 방식</h2>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              일부 확장 프로그램은 YouTube 페이지에서 직접 구독 정보를 읽고 새 계정에 추가하는 방식으로 작동합니다.
              이 방식에는 다음과 같은 위험이 있습니다:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                {
                  title: "세션 토큰 접근 위험",
                  desc: "일부 확장 프로그램은 브라우저 쿠키나 세션 토큰에 접근할 수 있습니다. 이는 계정 탈취에 악용될 수 있는 위치에 있습니다.",
                },
                {
                  title: "YouTube 서비스 약관 위반 가능성",
                  desc: "비공식 자동화 방식은 YouTube 이용약관을 위반할 수 있으며, 이로 인해 계정이 정지될 수 있습니다.",
                },
                {
                  title: "스토어 정책으로 갑작스러운 제거",
                  desc: "브라우저 스토어 정책 위반으로 확장 프로그램이 갑자기 제거될 수 있어, 이전 도중 사용이 불가능해질 수 있습니다.",
                },
                {
                  title: "과도한 속도로 인한 계정 제한",
                  desc: "빠른 속도로 구독을 처리하면 YouTube가 비정상 활동으로 감지해 계정을 일시 제한할 수 있습니다.",
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
            <h2 className="text-xl font-bold text-gray-900">쿠키·세션 토큰 방식에 대한 안내</h2>
            <div className="rounded-xl border border-red-200 bg-red-50 p-4">
              <p className="font-semibold text-sm text-red-900">이 방식은 권장하지 않습니다</p>
              <p className="mt-2 text-sm text-red-800 leading-relaxed">
                브라우저 쿠키나 세션 토큰을 사용해 구독을 자동화하는 방식은
                YouTube 이용약관을 위반할 수 있으며 계정 보안에 심각한 위험을 초래할 수 있습니다.
                YouTube MoveKit은 이러한 방식을 사용하지 않으며, 어떤 도구에도 세션 토큰이나 쿠키를 제공하지 않도록 권고합니다.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">어떤 사용자에게 어떤 방식이 맞나요?</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="font-semibold text-sm text-gray-900">Google Takeout + 공식 API 방식 추천 대상</p>
                <ul className="mt-2 space-y-1">
                  {[
                    "계정 보안을 최우선으로 생각하는 분",
                    "YouTube 정책을 준수하는 방식을 원하는 분",
                    "구독 수가 많아 며칠에 걸쳐 이전해도 괜찮은 분",
                    "처리 과정을 직접 확인하고 싶은 분",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-gray-700">
                      <span className="shrink-0 font-bold text-green-600">+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-10 rounded-xl bg-red-50 border border-red-200 p-5">
          <p className="font-semibold text-red-900">안전한 방식으로 시작하세요</p>
          <p className="mt-1 text-sm text-red-700">Takeout CSV 파일을 업로드해 구독 현황을 먼저 파악하세요.</p>
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
