import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "이용약관 | YouTube MoveKit",
  description:
    "YouTube MoveKit 이용약관입니다. 독립 서비스 안내, 현재 제공 기능, 이전 기능 제한, 금지된 사용에 대해 설명합니다.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-12 text-gray-900">
      <div className="mx-auto max-w-2xl">
        <nav className="mb-8 flex gap-4 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900 hover:underline">홈</Link>
          <span>·</span>
          <Link href="/tool" className="hover:text-gray-900 hover:underline">구독 분석 도구</Link>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900">이용약관</h1>
        <p className="mt-2 text-sm text-gray-500">최종 업데이트: 2026-05-07</p>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-xl font-bold text-gray-900">1. 독립 서비스 안내</h2>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              YouTube MoveKit은 YouTube 또는 Google의 공식 서비스가 아닙니다.
              YouTube 및 Google과 제휴 관계에 있지 않으며, 두 회사로부터 어떠한 승인이나 지원도 받지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">2. 현재 제공 기능</h2>
            <p className="mt-3 text-sm text-gray-700">현재 MVP 1에서 제공되는 기능:</p>
            <ul className="mt-3 space-y-2">
              {[
                "Google Takeout subscriptions.csv 파일 분석",
                "중복 구독 항목 제거",
                "정리된 CSV 파일 다운로드",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-gray-700">
                  <span className="shrink-0 font-bold text-red-500">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">3. 이전 기능 제한 안내</h2>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              구독 이전 기능은 현재 제공되지 않으며, 대기자 기반으로 준비 중입니다.
            </p>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              향후 이전 기능이 제공되더라도, 처리 가능한 범위는 YouTube API 쿼터, Google/YouTube 정책,
              사용자 계정 상태에 따라 제한될 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">4. 사용자 책임</h2>
            <ul className="mt-3 space-y-2">
              {[
                "사용자는 본인의 Google Takeout 파일을 직접 준비해야 합니다.",
                "사용자는 분석 및 이전 대상 계정과 데이터에 대한 적법한 권한을 보유해야 합니다.",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-gray-700">
                  <span className="shrink-0 font-bold text-gray-400">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">5. 보장하지 않는 사항</h2>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              분석 결과와 이전 예상 기간은 참고용이며, 정확성을 보장하지 않습니다.
            </p>
            <ul className="mt-3 space-y-2">
              {[
                "전체 구독 이전 보장 없음",
                "즉시 이전 보장 없음",
                "무중단 이전 보장 없음",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-gray-700">
                  <span className="shrink-0 font-bold text-gray-400">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">6. 금지된 사용</h2>
            <p className="mt-3 text-sm text-gray-700">다음 목적으로의 사용을 금지합니다:</p>
            <ul className="mt-3 space-y-2">
              {[
                "YouTube 또는 Google 정책 우회",
                "비공식 자동화 도구로의 활용",
                "스팸성 대량 계정 조작",
                "타인의 계정이나 데이터 사용",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-gray-700">
                  <span className="shrink-0 font-bold text-gray-400">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">7. 향후 유료 기능</h2>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              유료 기능이 출시될 경우, 가격, 환불 조건, 제공 범위를 별도로 안내합니다.
              현재는 유료 기능이 없으며 결제 처리도 이루어지지 않습니다.
            </p>
          </section>
        </div>

        <div className="mt-12 flex gap-4">
          <Link
            href="/"
            className="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            홈으로
          </Link>
          <Link
            href="/tool"
            className="rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            구독 분석 시작하기
          </Link>
        </div>
      </div>
    </main>
  );
}
