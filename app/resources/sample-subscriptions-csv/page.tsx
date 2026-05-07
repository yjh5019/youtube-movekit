import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "subscriptions.csv 샘플과 컬럼 설명 | YouTube MoveKit",
  description:
    "YouTube Takeout subscriptions.csv 파일의 구조, 각 컬럼의 의미, 중복 제거에 Channel Id를 사용하는 이유를 설명합니다.",
};

const BASE = SITE_URL;

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "홈", item: BASE },
    { "@type": "ListItem", position: 2, name: "리소스", item: `${BASE}/resources` },
    {
      "@type": "ListItem",
      position: 3,
      name: "subscriptions.csv 샘플과 컬럼 설명",
      item: `${BASE}/resources/sample-subscriptions-csv`,
    },
  ],
};

const SAMPLE_ROWS = [
  { id: "UCxxxxxx1234567890AAAA", url: "https://www.youtube.com/channel/UCxxxxxx1234567890AAAA", title: "채널 이름 예시 A" },
  { id: "UCyyyyyy1234567890BBBB", url: "https://www.youtube.com/channel/UCyyyyyy1234567890BBBB", title: "채널 이름 예시 B" },
  { id: "UCzzzzzz1234567890CCCC", url: "https://www.youtube.com/channel/UCzzzzzz1234567890CCCC", title: "채널 이름 예시, 쉼표 포함" },
  { id: "UCxxxxxx1234567890AAAA", url: "https://www.youtube.com/channel/UCxxxxxx1234567890AAAA", title: "채널 이름 예시 A" },
];

export default function SampleCsvPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-12 text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <div className="mx-auto max-w-2xl">
        <nav className="mb-8 flex flex-wrap gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900 hover:underline">홈</Link>
          <span>·</span>
          <Link href="/resources" className="hover:text-gray-900 hover:underline">리소스</Link>
          <span>·</span>
          <span className="text-gray-900">CSV 샘플</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900">
          subscriptions.csv 샘플과 컬럼 설명
        </h1>
        <p className="mt-4 text-base text-gray-600 leading-relaxed">
          Google Takeout에서 내보낸 YouTube 구독 파일의 구조를 설명합니다.
          파일을 처음 받았다면 이 페이지에서 각 컬럼의 의미와 중복 제거 방식을 미리 확인하세요.
        </p>

        {/* Summary box */}
        <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700 space-y-2">
          <p className="font-semibold text-gray-900">이 페이지에서 알 수 있는 것</p>
          <ul className="space-y-1.5">
            {[
              "subscriptions.csv의 3개 컬럼 구조",
              "Channel Id, Channel Url, Channel Title의 의미",
              "중복 제거에 Channel Id를 사용하는 이유",
              "채널 이름에 쉼표가 포함된 경우 처리 방식",
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
            <h2 className="text-xl font-bold text-gray-900">파일 구조 개요</h2>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              YouTube Takeout에서 내보낸 <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-xs">subscriptions.csv</code>는
              첫 번째 행이 헤더이고, 이후 각 행이 구독 채널 하나를 나타냅니다.
              파일 인코딩은 UTF-8 (BOM 포함 가능)이며, 컬럼은 쉼표로 구분됩니다.
            </p>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              헤더 행은 항상 다음과 같습니다:
            </p>
            <pre className="mt-3 rounded-xl border border-gray-200 bg-gray-50 p-4 font-mono text-xs text-gray-800 overflow-x-auto">
              Channel Id,Channel Url,Channel Title
            </pre>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">컬럼 설명</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="font-mono text-sm font-semibold text-gray-900">Channel Id</p>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                  채널의 고유 식별자입니다. <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-xs">UC</code>로 시작하는
                  24자리 문자열입니다. 채널 이름이 변경되거나 URL이 바뀌어도 ID는 변하지 않습니다.
                </p>
                <p className="mt-2 text-xs text-gray-500 font-mono">예시: UCxxxxxx1234567890AAAA</p>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="font-mono text-sm font-semibold text-gray-900">Channel Url</p>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                  채널의 표준 URL입니다. Channel Id를 포함한 URL 형식이며,
                  브라우저에서 바로 접속할 수 있습니다.
                </p>
                <p className="mt-2 text-xs text-gray-500 font-mono">예시: https://www.youtube.com/channel/UCxxxxxx...</p>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="font-mono text-sm font-semibold text-gray-900">Channel Title</p>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                  채널의 표시 이름입니다. 채널 운영자가 언제든지 변경할 수 있으므로
                  중복 확인의 기준으로 사용하기에 적합하지 않습니다.
                  쉼표가 포함된 이름은 따옴표로 감싸진 형태로 저장됩니다.
                </p>
                <p className="mt-2 text-xs text-gray-500 font-mono">예시: 채널 이름 / &ldquo;채널 이름, 쉼표 포함&rdquo;</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">샘플 데이터</h2>
            <p className="mt-3 text-sm text-gray-500">
              아래는 실제 파일과 유사한 형태의 예시 데이터입니다. 마지막 행은 첫 번째 행과 같은 Channel Id를 가진 중복 예시입니다.
            </p>
            <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200">
              <table className="min-w-full text-xs">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-2.5 text-left font-semibold text-gray-700">Channel Id</th>
                    <th className="px-3 py-2.5 text-left font-semibold text-gray-700">Channel Url</th>
                    <th className="px-3 py-2.5 text-left font-semibold text-gray-700">Channel Title</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {SAMPLE_ROWS.map((row, i) => (
                    <tr
                      key={i}
                      className={i === 3 ? "bg-red-50" : ""}
                    >
                      <td className="px-3 py-2.5 font-mono text-gray-700">{row.id}</td>
                      <td className="px-3 py-2.5 font-mono text-gray-600 max-w-[200px] truncate">{row.url}</td>
                      <td className="px-3 py-2.5 text-gray-700">{row.title}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-red-600">
              빨간색으로 표시된 4번째 행은 1번째 행과 Channel Id가 동일한 중복 항목입니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">왜 Channel Id가 중복 제거의 기준인가요?</h2>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              채널 이름(Channel Title)은 운영자가 바꿀 수 있고, URL도 변경되거나 리디렉션될 수 있습니다.
              반면 Channel Id는 채널이 생성될 때 부여되어 변하지 않는 고유 식별자입니다.
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "채널 이름만 다르고 ID가 같은 경우 → 같은 채널, 중복",
                "채널 이름이 같지만 ID가 다른 경우 → 다른 채널, 중복 아님",
                "URL이 달라도 ID가 같으면 → 같은 채널 (URL 변경 케이스)",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-gray-700">
                  <span className="shrink-0 font-bold text-red-500">+</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-gray-500">
              YouTube MoveKit은 Channel Id를 우선 기준으로 중복을 제거하며,
              ID가 없는 경우에는 Channel Url, 그것도 없으면 Channel Title을 대안으로 사용합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">쉼표가 포함된 채널 이름 처리</h2>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              RFC 4180 CSV 규격에 따라, 쉼표나 따옴표가 포함된 필드는 큰따옴표로 감싸집니다.
              YouTube MoveKit은 이러한 경우를 올바르게 파싱합니다.
            </p>
            <pre className="mt-3 rounded-xl border border-gray-200 bg-gray-50 p-4 font-mono text-xs text-gray-800 overflow-x-auto">
{`Channel Id,Channel Url,Channel Title
UCxxxxxx,https://...,채널 이름
UCyyyyyy,https://...,"채널 이름, 쉼표 포함"`}
            </pre>
          </section>

          <section className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <h2 className="text-base font-bold text-gray-900">개인정보 안내</h2>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              subscriptions.csv 파일에는 채널 ID, URL, 이름만 포함됩니다.
              개인 식별 정보, 비밀번호, 결제 정보는 포함되지 않습니다.
              YouTube MoveKit에 업로드해도 파일은 브라우저에서만 처리되며 서버에 저장되지 않습니다.
            </p>
          </section>
        </div>

        <div className="mt-10 rounded-xl bg-red-50 border border-red-200 p-5">
          <p className="font-semibold text-red-900">파일이 있다면 지금 바로 분석하세요</p>
          <p className="mt-1 text-sm text-red-700">중복 항목 수와 이전 예상 기간을 즉시 확인할 수 있습니다.</p>
          <Link
            href="/tool"
            className="mt-4 inline-block rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            구독 목록 분석하기
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <span className="text-gray-500">관련 페이지:</span>
          <Link href="/guides/google-takeout-youtube-subscriptions" className="text-red-600 hover:underline">Takeout 내보내기 가이드</Link>
          <Link href="/resources/youtube-migration-checklist" className="text-red-600 hover:underline">이전 체크리스트</Link>
          <Link href="/guides/transfer-youtube-subscriptions" className="text-red-600 hover:underline">구독 이전 준비</Link>
        </div>
      </div>
    </main>
  );
}
