export default function EmailCapture() {
  return (
    <section className="rounded-xl border border-gray-200 bg-gray-50 p-6">
      <h2 className="text-lg font-semibold text-gray-900">
        새 계정으로 이전 기능이 필요하신가요?
      </h2>
      <p className="mt-1 text-sm text-gray-500">
        현재는 CSV 분석 기능만 제공됩니다. 이전 기능이 준비되면 소식을 받고 싶으시면
        이메일로 관심 의사를 보내주세요.
      </p>
      <p className="mt-1 text-xs text-gray-400">
        별도 이메일 수집 시스템이 없어 직접 이메일을 통해 관심을 남기는 방식입니다.
      </p>
      <div className="mt-4">
        <a
          href="mailto:yjhanwlstkd@gmail.com?subject=이전+기능+출시+알림+신청"
          className="inline-block rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:ring-2 focus:ring-red-300 focus:outline-none"
        >
          이메일로 관심 등록하기
        </a>
      </div>
    </section>
  );
}
