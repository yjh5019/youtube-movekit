import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-12 text-gray-900">
      <div className="mx-auto max-w-2xl">
        <nav className="mb-8 flex gap-4 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900 hover:underline">홈</Link>
          <span>·</span>
          <Link href="/tool" className="hover:text-gray-900 hover:underline">구독 분석 도구</Link>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900">개인정보처리방침</h1>
        <p className="mt-2 text-sm text-gray-500">최종 업데이트: [날짜 예정]</p>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-xl font-bold text-gray-900">1. MVP 1 처리 방식</h2>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              사용자가 업로드한 <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-xs">subscriptions.csv</code> 파일은
              브라우저에서만 분석됩니다.
            </p>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              MVP 1에서는 파일이 서버에 업로드되거나 저장되지 않습니다. 분석은 사용자의 기기에서 이루어지며,
              탭을 닫으면 데이터도 함께 사라집니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">2. 처리되는 데이터</h2>
            <p className="mt-3 text-sm text-gray-700">파일 분석 시 브라우저 내에서만 처리되는 정보:</p>
            <ul className="mt-3 space-y-2">
              {[
                "구독 채널명",
                "채널 URL",
                "채널 ID",
                "사용자가 직접 입력한 이메일 주소 (대기자 등록 시에만)",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-gray-700">
                  <span className="shrink-0 font-bold text-red-500">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">3. 수집하지 않는 정보</h2>
            <p className="mt-3 text-sm text-gray-700">다음 정보는 수집하거나 처리하지 않습니다:</p>
            <ul className="mt-3 space-y-2">
              {[
                "Google 비밀번호",
                "YouTube 쿠키",
                "브라우저 세션 토큰",
                "결제 정보 (현재는 결제 기능 없음)",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-gray-700">
                  <span className="shrink-0 font-bold text-gray-400">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">4. 이메일 대기자 등록</h2>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              이메일 주소를 등록하는 경우, 해당 이메일은 출시 알림과 피드백 요청 용도로만 사용됩니다.
              제3자에게 판매하거나 공유하지 않습니다.
            </p>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              등록된 이메일의 삭제를 원하시면 아래 연락처로 요청하실 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">5. 향후 OAuth/API 이전 기능</h2>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              향후 구독 이전 기능이 제공될 경우, 공식 OAuth/API 흐름을 사용할 예정입니다.
              그 경우 요청되는 권한 범위와 데이터 사용 목적을 별도로 안내합니다.
              현재 MVP 1에서는 해당 기능이 제공되지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">6. 문의 및 삭제 요청</h2>
            <p className="mt-3 text-sm text-gray-700">
              문의 또는 이메일 삭제 요청:{" "}
              <span className="text-gray-400">[contact email placeholder]</span>
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
