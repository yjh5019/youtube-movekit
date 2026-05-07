import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "YouTube MoveKit 소개 | YouTube MoveKit",
  description:
    "YouTube MoveKit은 Google Takeout 구독 데이터를 분석하고 정리할 수 있는 브라우저 전용 도구입니다. YouTube·Google과 무관한 독립 서비스입니다.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-12 text-gray-900">
      <div className="mx-auto max-w-2xl">
        <nav className="mb-8 flex flex-wrap gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900 hover:underline">홈</Link>
          <span>·</span>
          <Link href="/tool" className="hover:text-gray-900 hover:underline">구독 분석 도구</Link>
          <span>·</span>
          <span className="text-gray-900">소개</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900">YouTube MoveKit 소개</h1>
        <p className="mt-4 text-base text-gray-600 leading-relaxed">
          YouTube MoveKit은 YouTube 계정을 이전하거나 구독 목록을 정리하려는 사용자를 위한
          브라우저 전용 분석 도구입니다.
        </p>

        {/* Summary box */}
        <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700 space-y-2">
          <p className="font-semibold text-gray-900">요약</p>
          <ul className="space-y-1.5 list-none">
            <li className="flex gap-2"><span className="shrink-0 font-bold text-red-500">+</span>Google Takeout subscriptions.csv 분석 및 중복 제거</li>
            <li className="flex gap-2"><span className="shrink-0 font-bold text-red-500">+</span>브라우저 전용 처리 — 서버에 파일 저장 없음</li>
            <li className="flex gap-2"><span className="shrink-0 font-bold text-red-500">+</span>YouTube·Google의 공식 서비스가 아닌 독립 도구</li>
            <li className="flex gap-2"><span className="shrink-0 font-bold text-red-500">+</span>현재는 CSV 분석 무료 제공, OAuth 이전 기능은 준비 중</li>
          </ul>
        </div>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-xl font-bold text-gray-900">이 도구는 무엇인가요?</h2>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              YouTube 구독 목록을 새 계정으로 옮기거나 정리하려면, 먼저 현재 구독 목록을 파악하는 것이 중요합니다.
              YouTube MoveKit은 Google Takeout에서 내보낸 <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-xs">subscriptions.csv</code> 파일을
              브라우저에서 직접 분석해, 중복 항목을 제거하고 정리된 CSV 파일을 다운로드할 수 있도록 도와줍니다.
            </p>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              파일 분석은 전적으로 사용자의 기기(브라우저) 안에서만 이루어집니다. 업로드된 파일은 서버로 전송되거나 저장되지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">어떤 분에게 유용한가요?</h2>
            <ul className="mt-4 space-y-3">
              {[
                "YouTube 계정을 새 계정으로 이전하려는 분",
                "오래된 구독 목록을 정리하고 싶은 분 (500개 이상 구독 보유)",
                "크리에이터로서 활동 계정을 분리하거나 통합하려는 분",
                "이전 전에 중복 구독이 얼마나 되는지 파악하고 싶은 분",
              ].map((item) => (
                <li key={item} className="flex gap-3 rounded-xl border border-gray-200 bg-white p-3">
                  <span className="shrink-0 font-bold text-red-500">—</span>
                  <span className="text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">YouTube·Google과의 관계</h2>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              YouTube MoveKit은 YouTube 또는 Google의 공식 서비스가 아닙니다. 두 회사와 어떠한 제휴 관계나 공식 승인 관계도 없습니다.
            </p>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              이 도구는 사용자가 Google Takeout을 통해 직접 내보낸 파일만 처리합니다. Google의 어떤 서버나 API에도 접근하지 않으며,
              Google 계정 비밀번호, 쿠키, 세션 토큰을 요구하거나 수집하지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">현재 제공 기능 (MVP 1)</h2>
            <ul className="mt-4 space-y-2">
              {[
                "subscriptions.csv 파일 업로드 및 파싱",
                "채널 ID 기반 중복 구독 탐지 및 제거",
                "총 구독 수 / 중복 수 / 순수 구독 수 표시",
                "정리된 CSV 파일 다운로드",
                "안전한 이전 예상 기간 안내",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-gray-700">
                  <span className="shrink-0 font-bold text-red-500">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">향후 계획 (준비 중)</h2>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              현재는 CSV 분석 기능만 제공됩니다. 향후 구독 이전 기능 출시를 검토 중이나,
              구체적인 방식과 범위는 아직 확정되지 않았으며, API 할당량·플랫폼 정책·계정 상태에 따라 제한될 수 있습니다.
              대기자로 등록하시면 진행 상황을 먼저 안내해 드립니다.
            </p>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              브라우저 확장 프로그램, 쿠키 추출, 비공식 자동화 방식은 계획에 없습니다.
              향후 기능이 제공되더라도 플랫폼 정책 및 할당량 범위 안에서만 구현될 예정입니다.
            </p>
          </section>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/tool"
            className="rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            지금 구독 목록 분석하기
          </Link>
          <Link
            href="/guides"
            className="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            가이드 보기
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            문의하기
          </Link>
        </div>
      </div>
    </main>
  );
}
