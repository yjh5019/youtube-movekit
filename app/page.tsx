import Link from "next/link";
import EmailCapture from "@/components/email-capture";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="px-4 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
            유튜브 계정을 바꿔도
            <br />내 구독 목록을 잃지 마세요
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Google Takeout 파일을 업로드하면 구독 목록을 분석하고, 중복을 제거하고,
            새 계정 이전을 준비할 수 있습니다.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/tool"
              className="w-full rounded-xl bg-red-600 px-6 py-3 text-base font-semibold text-white hover:bg-red-700 focus:ring-2 focus:ring-red-300 focus:outline-none sm:w-auto"
            >
              무료로 구독 목록 분석하기
            </Link>
            <a
              href="#how-it-works"
              className="w-full rounded-xl border border-gray-300 px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-gray-200 focus:outline-none sm:w-auto"
            >
              작동 방식 보기
            </a>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900">이런 경험, 있으신가요?</h2>
          <ul className="mt-6 space-y-4">
            <li className="flex gap-3 rounded-xl border border-gray-200 bg-white p-4">
              <span className="shrink-0 font-bold text-red-500">—</span>
              <span className="text-gray-700">
                오래된 계정을 새 계정으로 옮기려는데, 어떤 채널을 구독했는지 다시 찾기가 어렵다
              </span>
            </li>
            <li className="flex gap-3 rounded-xl border border-gray-200 bg-white p-4">
              <span className="shrink-0 font-bold text-red-500">—</span>
              <span className="text-gray-700">
                수백 개의 구독 채널을 수동으로 정리하는 건 너무 오래 걸린다
              </span>
            </li>
            <li className="flex gap-3 rounded-xl border border-gray-200 bg-white p-4">
              <span className="shrink-0 font-bold text-red-500">—</span>
              <span className="text-gray-700">
                이전을 시작하기 전에 중복 구독, 비활성 채널, 오래된 구독을 먼저 파악해야 한다
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* What it analyzes */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900">무엇을 분석해 드리나요?</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 p-5">
              <p className="text-base font-semibold text-red-600">구독 채널 수</p>
              <p className="mt-1 text-sm text-gray-600">
                전체 구독 채널이 몇 개인지 즉시 파악합니다
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-5">
              <p className="text-base font-semibold text-red-600">중복 구독 후보</p>
              <p className="mt-1 text-sm text-gray-600">
                같은 채널 ID가 중복으로 포함된 항목을 탐지합니다
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-5">
              <p className="text-base font-semibold text-red-600">정리된 CSV</p>
              <p className="mt-1 text-sm text-gray-600">
                중복이 제거된 깨끗한 구독 목록을 바로 다운로드합니다
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-5">
              <p className="text-base font-semibold text-red-600">안전한 이전 예상 기간</p>
              <p className="mt-1 text-sm text-gray-600">
                하루 구독 한도를 고려한 안전한 이전 기간을 안내합니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900">어떻게 사용하나요?</h2>
          <ol className="mt-8 space-y-6">
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
                1
              </span>
              <div>
                <p className="font-semibold text-gray-900">Google Takeout에서 파일 받기</p>
                <p className="mt-1 text-sm text-gray-500">
                  Google Takeout 사이트에서 YouTube 데이터를 내보내면{" "}
                  <code className="rounded bg-gray-200 px-1 py-0.5 font-mono text-xs">
                    subscriptions.csv
                  </code>{" "}
                  파일을 받을 수 있습니다
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
                2
              </span>
              <div>
                <p className="font-semibold text-gray-900">파일 업로드</p>
                <p className="mt-1 text-sm text-gray-500">
                  분석 도구에 파일을 드래그하거나 클릭해서 선택하세요. 파일은 브라우저 밖으로 나가지 않습니다.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
                3
              </span>
              <div>
                <p className="font-semibold text-gray-900">분석 결과 확인 및 CSV 다운로드</p>
                <p className="mt-1 text-sm text-gray-500">
                  중복이 제거된 구독 목록과 예상 이전 기간을 확인하고, 정리된 파일을 바로 받으세요
                </p>
              </div>
            </li>
          </ol>
          <div className="mt-8">
            <Link
              href="/tool"
              className="inline-block rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700 focus:ring-2 focus:ring-red-300 focus:outline-none"
            >
              지금 바로 분석하기
            </Link>
          </div>
        </div>
      </section>

      {/* Privacy / Safety */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900">파일은 어떻게 처리되나요?</h2>
          <p className="mt-2 text-sm text-gray-500">
            분석 기능(MVP 1)은 서버 없이 브라우저에서만 동작합니다.
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex gap-3">
              <span className="shrink-0 font-bold text-green-600">+</span>
              <span className="text-gray-700">
                파일 분석은 브라우저 안에서만 이루어집니다 — 서버로 전송되지 않습니다
              </span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 font-bold text-green-600">+</span>
              <span className="text-gray-700">파일이 서버에 저장되지 않습니다</span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 font-bold text-green-600">+</span>
              <span className="text-gray-700">
                Google 계정 비밀번호나 로그인 정보를 요구하지 않습니다
              </span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 font-bold text-green-600">+</span>
              <span className="text-gray-700">
                OAuth/API를 이용한 이전 기능은 추후 공식적인 방식으로만 제공될 예정입니다
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Guides, Resources, Compare */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900">가이드 및 리소스</h2>
          <p className="mt-2 text-sm text-gray-500">
            YouTube 계정 이전을 처음 준비하는 분을 위한 단계별 가이드 모음입니다.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Link
              href="/guides"
              className="flex flex-col rounded-xl border border-gray-200 bg-white p-4 hover:border-red-200 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-300 transition-colors"
            >
              <p className="font-semibold text-gray-900">이전 가이드</p>
              <p className="mt-1 text-sm text-gray-500">Takeout 내보내기, 구독 이전 준비, 재생목록 백업</p>
            </Link>
            <Link
              href="/resources"
              className="flex flex-col rounded-xl border border-gray-200 bg-white p-4 hover:border-red-200 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-300 transition-colors"
            >
              <p className="font-semibold text-gray-900">리소스</p>
              <p className="mt-1 text-sm text-gray-500">이전 체크리스트, CSV 샘플 및 컬럼 설명</p>
            </Link>
            <Link
              href="/compare"
              className="flex flex-col rounded-xl border border-gray-200 bg-white p-4 hover:border-red-200 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-300 transition-colors"
            >
              <p className="font-semibold text-gray-900">방식 비교</p>
              <p className="mt-1 text-sm text-gray-500">Takeout 방식과 확장 프로그램 방식 비교</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-2xl">
          <p className="mb-4 text-sm text-gray-500">
            먼저 무료 분석을 해보고, 이전 기능 출시 알림을 받아보세요.
          </p>
          <EmailCapture />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900">자주 묻는 질문</h2>
          <dl className="mt-8 space-y-0 divide-y divide-gray-200">
            <div className="py-6">
              <dt className="font-semibold text-gray-900">
                YouTube/Google 공식 서비스인가요?
              </dt>
              <dd className="mt-2 text-sm text-gray-600">
                아닙니다. YouTube MoveKit은 YouTube 또는 Google과 무관한 독립 서비스입니다.
                Google Takeout을 통해 사용자가 직접 내보낸 파일만 사용하며, Google의 어떤 시스템에도
                접근하지 않습니다.
              </dd>
            </div>
            <div className="py-6">
              <dt className="font-semibold text-gray-900">파일이 서버에 저장되나요?</dt>
              <dd className="mt-2 text-sm text-gray-600">
                아닙니다. 파일은 브라우저 안에서만 처리됩니다. 서버로 전송되거나 저장되지 않으며,
                탭을 닫으면 데이터도 함께 사라집니다.
              </dd>
            </div>
            <div className="py-6">
              <dt className="font-semibold text-gray-900">
                지금 실제로 구독 이전도 되나요?
              </dt>
              <dd className="mt-2 text-sm text-gray-600">
                현재는 구독 목록 분석 및 CSV 내보내기만 가능합니다. 실제 구독 이전 기능(OAuth 방식)은
                준비 중이며, 출시 시 알림을 받으시려면 위 이메일 등록을 이용해 주세요.
              </dd>
            </div>
            <div className="py-6">
              <dt className="font-semibold text-gray-900">
                왜 전체 이전이 즉시 되지 않나요?
              </dt>
              <dd className="mt-2 text-sm text-gray-600">
                YouTube는 단기간에 너무 많은 구독 요청이 발생하면 계정을 일시 제한할 수 있습니다.
                안전한 이전을 위해 하루 약 190개 이하로 나눠서 진행하는 것을 권장하며,
                이 도구는 그에 맞는 예상 기간을 안내해 드립니다.
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
