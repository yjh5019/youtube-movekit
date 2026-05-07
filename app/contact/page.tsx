import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "문의하기 | YouTube MoveKit",
  description:
    "YouTube MoveKit 서비스 관련 문의, 이메일 삭제 요청, 버그 신고 방법을 안내합니다.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-12 text-gray-900">
      <div className="mx-auto max-w-2xl">
        <nav className="mb-8 flex flex-wrap gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900 hover:underline">홈</Link>
          <span>·</span>
          <span className="text-gray-900">문의하기</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900">문의하기</h1>
        <p className="mt-4 text-base text-gray-600 leading-relaxed">
          서비스 관련 질문, 이메일 삭제 요청, 버그 신고는 아래 연락처로 보내주세요.
        </p>

        {/* Summary box */}
        <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700 space-y-2">
          <p className="font-semibold text-gray-900">요약</p>
          <ul className="space-y-1.5">
            <li className="flex gap-2"><span className="shrink-0 font-bold text-red-500">+</span>이메일 문의: yjhanwlstkd@gmail.com</li>
            <li className="flex gap-2"><span className="shrink-0 font-bold text-red-500">+</span>이메일 삭제 요청은 이메일로 접수됩니다</li>
            <li className="flex gap-2"><span className="shrink-0 font-bold text-gray-400">—</span>비밀번호, 쿠키, 세션 토큰을 절대 보내지 마세요</li>
          </ul>
        </div>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-xl font-bold text-gray-900">연락처</h2>
            <p className="mt-3 text-sm text-gray-700">
              이메일:{" "}
              <a href="mailto:yjhanwlstkd@gmail.com" className="font-mono text-red-600 hover:underline">yjhanwlstkd@gmail.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">이메일 삭제 요청</h2>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              대기자 명단에서 이메일 주소를 삭제하려면 아래 내용을 포함해 이메일을 보내주세요:
            </p>
            <ol className="mt-4 space-y-2">
              {[
                "제목: [삭제 요청] 이메일 주소 삭제",
                "삭제를 원하는 이메일 주소",
                "요청 내용 (예: 대기자 목록에서 삭제)",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-700">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-600">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
            <p className="mt-4 text-sm text-gray-500">
              요청 접수 후 최대 30일 이내에 처리됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">버그 신고 및 기능 제안</h2>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              CSV 파싱 오류, 다운로드 오류, UI 문제가 발생했다면 아래 정보와 함께 이메일로 알려주세요:
            </p>
            <ul className="mt-3 space-y-2">
              {[
                "오류가 발생한 단계 (업로드 / 분석 / 다운로드)",
                "사용 중인 브라우저 및 OS",
                "subscriptions.csv 파일의 대략적인 행 수",
                "오류 메시지 전문 (가능한 경우)",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-gray-700">
                  <span className="shrink-0 font-bold text-gray-400">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-amber-200 bg-amber-50 p-5">
            <h2 className="text-base font-bold text-amber-800">보안 안내: 이런 정보는 절대 보내지 마세요</h2>
            <p className="mt-2 text-sm text-amber-700 leading-relaxed">
              문의 이메일에 다음 정보를 포함하지 마세요. YouTube MoveKit은 이 정보를 요청하지 않으며, 절대 필요하지 않습니다.
            </p>
            <ul className="mt-3 space-y-2">
              {[
                "Google 계정 비밀번호",
                "YouTube 또는 Google 쿠키",
                "브라우저 세션 토큰 또는 인증 토큰",
                "Google 계정 복구 코드",
                "신용카드 또는 결제 정보",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-amber-700">
                  <span className="shrink-0 font-bold text-amber-600">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">응답 시간</h2>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              현재 MVP 단계로 소규모로 운영됩니다. 일반 문의는 영업일 기준 3–5일, 삭제 요청은 최대 30일 이내에 처리됩니다.
            </p>
          </section>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            홈으로
          </Link>
          <Link
            href="/privacy"
            className="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            개인정보처리방침
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
