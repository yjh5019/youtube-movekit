import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Google Takeout으로 YouTube 구독 목록 내보내는 방법 | YouTube MoveKit",
  description:
    "Google Takeout에서 YouTube 구독 목록만 선택해 subscriptions.csv를 내보내는 단계별 방법과 파일 구조, 흔한 실수를 설명합니다.",
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
      name: "Google Takeout으로 YouTube 구독 목록 내보내는 방법",
      item: `${BASE}/guides/google-takeout-youtube-subscriptions`,
    },
  ],
};

const article = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Google Takeout으로 YouTube 구독 목록 내보내는 방법",
  description:
    "Google Takeout에서 YouTube 구독 목록만 선택해 subscriptions.csv를 내보내는 단계별 방법과 파일 구조, 흔한 실수를 설명합니다.",
  publisher: { "@type": "Organization", name: "YouTube MoveKit" },
  url: `${BASE}/guides/google-takeout-youtube-subscriptions`,
};

export default function GoogleTakeoutGuidePage() {
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
          <span className="text-gray-900">Google Takeout 내보내기</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900">
          Google Takeout으로 YouTube 구독 목록 내보내는 방법
        </h1>
        <p className="mt-4 text-base text-gray-600 leading-relaxed">
          YouTube 계정 이전이나 구독 목록 백업을 시작하려면 먼저 Google Takeout에서
          <code className="mx-1 rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">subscriptions.csv</code>
          파일을 내보내야 합니다. 이 가이드는 그 과정을 단계별로 설명합니다.
        </p>

        {/* Summary box */}
        <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700 space-y-2">
          <p className="font-semibold text-gray-900">이 가이드에서 배우는 것</p>
          <ul className="space-y-1.5">
            {[
              "Google Takeout이 무엇인지",
              "YouTube 구독 목록만 선택해 내보내는 방법",
              "subscriptions.csv 파일의 구조",
              "흔한 실수와 피하는 방법",
              "파일을 받은 후 할 일",
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
            <h2 className="text-xl font-bold text-gray-900">Google Takeout이란?</h2>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              Google Takeout은 Google 계정에 저장된 데이터를 내 컴퓨터로 내보낼 수 있는 공식 서비스입니다.
              Gmail, Google 드라이브, YouTube 등 다양한 서비스의 데이터를 내보낼 수 있으며,
              YouTube 구독 목록도 여기서 받을 수 있습니다.
            </p>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              Takeout을 통해 내보낸 구독 목록 파일은 <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-xs">subscriptions.csv</code> 형식이며,
              구독 중인 채널의 ID, URL, 이름이 포함되어 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">단계별 내보내기 방법</h2>
            <ol className="mt-4 space-y-5">
              <li className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">1</span>
                <div>
                  <p className="font-semibold text-gray-900">Google Takeout 접속</p>
                  <p className="mt-1 text-sm text-gray-600">
                    브라우저에서 <span className="font-mono text-xs bg-gray-100 px-1 py-0.5 rounded">takeout.google.com</span>에 접속합니다.
                    YouTube 계정으로 로그인되어 있어야 합니다.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">2</span>
                <div>
                  <p className="font-semibold text-gray-900">모든 선택 해제 후 YouTube만 선택</p>
                  <p className="mt-1 text-sm text-gray-600">
                    &ldquo;모두 선택 취소&rdquo; 버튼을 클릭해 전체 선택을 해제한 다음,
                    목록에서 &ldquo;YouTube 및 YouTube Music&rdquo;만 체크합니다.
                    전체 데이터를 내보내면 파일 크기가 매우 커집니다.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">3</span>
                <div>
                  <p className="font-semibold text-gray-900">포함할 데이터 선택: 구독만 선택</p>
                  <p className="mt-1 text-sm text-gray-600">
                    YouTube를 선택한 후 &ldquo;모든 YouTube 데이터 포함&rdquo; 드롭다운을 클릭합니다.
                    여기서 &ldquo;구독&rdquo;만 체크하고 나머지(시청 기록, 검색 기록 등)는 해제하면
                    파일 크기를 크게 줄일 수 있습니다.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">4</span>
                <div>
                  <p className="font-semibold text-gray-900">내보내기 형식 선택</p>
                  <p className="mt-1 text-sm text-gray-600">
                    &ldquo;다음 단계&rdquo;를 클릭하고 파일 형식은 <strong>.zip</strong>, 빈도는 &ldquo;한 번 내보내기&rdquo;를 선택합니다.
                    파일 크기는 1GB 이하로 설정하면 됩니다.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">5</span>
                <div>
                  <p className="font-semibold text-gray-900">이메일 링크로 다운로드</p>
                  <p className="mt-1 text-sm text-gray-600">
                    내보내기 요청 후 수 분에서 수 시간 내에 Google로부터 이메일이 도착합니다.
                    이메일의 다운로드 링크를 클릭해 .zip 파일을 받은 뒤,
                    압축을 풀면 <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-xs">Takeout/YouTube/subscriptions/subscriptions.csv</code> 파일을 찾을 수 있습니다.
                  </p>
                </div>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">subscriptions.csv 파일 구조</h2>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              내보낸 CSV 파일은 다음과 같은 3개의 컬럼으로 구성됩니다:
            </p>
            <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">컬럼</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">예시 값</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">설명</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs text-gray-800">Channel Id</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">UCxxxxxx</td>
                    <td className="px-4 py-3 text-gray-700">채널 고유 식별자 (중복 제거 기준)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs text-gray-800">Channel Url</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">https://www.youtube.com/channel/UCxxxxxx</td>
                    <td className="px-4 py-3 text-gray-700">채널 URL</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs text-gray-800">Channel Title</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">채널 이름</td>
                    <td className="px-4 py-3 text-gray-700">채널 표시 이름 (변경될 수 있음)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-gray-500">
              중복 제거 시에는 Channel Id를 기준으로 하는 것이 가장 정확합니다.
              채널 이름은 변경될 수 있지만 ID는 변하지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">흔한 실수와 피하는 방법</h2>
            <ul className="mt-4 space-y-3">
              {[
                {
                  title: "전체 YouTube 데이터를 내보내는 실수",
                  desc: "구독 목록만 필요하다면 반드시 '구독'만 선택하세요. 시청 기록 전체를 내보내면 수십 GB가 될 수 있습니다.",
                },
                {
                  title: "이메일 링크 만료 전에 다운로드하지 않는 경우",
                  desc: "Google이 보내는 다운로드 링크는 유효 기간이 있습니다. 이메일을 받으면 빠르게 다운로드하세요.",
                },
                {
                  title: "잘못된 계정에서 내보내는 실수",
                  desc: "여러 Google 계정을 사용하는 경우, 이전하려는 계정으로 로그인된 상태에서 Takeout에 접속하세요.",
                },
                {
                  title: "압축 파일 경로를 못 찾는 경우",
                  desc: "CSV 파일은 Takeout/YouTube/subscriptions/ 폴더 안에 있습니다. 최상위 폴더에는 없습니다.",
                },
              ].map((item) => (
                <li key={item.title} className="rounded-xl border border-gray-200 p-4">
                  <p className="font-semibold text-sm text-gray-900">{item.title}</p>
                  <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">파일을 받은 후 할 일</h2>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              CSV 파일을 받았다면 이전을 시작하기 전에 분석을 먼저 해보는 것을 권장합니다.
              중복 구독이 얼마나 있는지 확인하고, 이전에 걸리는 예상 기간을 미리 파악할 수 있습니다.
            </p>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              YouTube MoveKit은 이 파일을 브라우저에서만 분석합니다. 파일은 서버에 전송되거나 저장되지 않습니다.
            </p>
          </section>

          <section className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <h2 className="text-base font-bold text-gray-900">개인정보 안내</h2>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              subscriptions.csv 파일에는 채널 ID, URL, 이름만 포함됩니다.
              Google 계정 비밀번호, 결제 정보, 개인 식별 정보는 포함되지 않습니다.
              YouTube MoveKit에 이 파일을 업로드해도 서버에 저장되지 않으며 브라우저 탭을 닫으면 데이터도 사라집니다.
            </p>
          </section>
        </div>

        <div className="mt-10 rounded-xl bg-red-50 border border-red-200 p-5">
          <p className="font-semibold text-red-900">CSV 파일을 받았다면 지금 바로 분석해보세요</p>
          <p className="mt-1 text-sm text-red-700">중복 구독 수와 이전 예상 기간을 즉시 확인할 수 있습니다.</p>
          <Link
            href="/tool"
            className="mt-4 inline-block rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            구독 목록 분석하기
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <span className="text-gray-500">관련 페이지:</span>
          <Link href="/guides/transfer-youtube-subscriptions" className="text-red-600 hover:underline">구독 이전 준비 가이드</Link>
          <Link href="/resources/sample-subscriptions-csv" className="text-red-600 hover:underline">CSV 샘플 및 컬럼 설명</Link>
          <Link href="/resources/youtube-migration-checklist" className="text-red-600 hover:underline">이전 체크리스트</Link>
        </div>
      </div>
    </main>
  );
}
