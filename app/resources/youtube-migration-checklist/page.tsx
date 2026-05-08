import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "YouTube 계정 이전 체크리스트 | YouTube MoveKit",
  description:
    "내보내기 전, 이전 전, 이전 후 단계별로 확인해야 할 항목을 정리한 체크리스트입니다. 이전 실수를 줄이는 데 도움이 됩니다.",
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
      name: "YouTube 계정 이전 체크리스트",
      item: `${BASE}/resources/youtube-migration-checklist`,
    },
  ],
};

type ChecklistItem = { text: string; note?: string };

function ChecklistSection({
  step,
  title,
  items,
}: {
  step: number;
  title: string;
  items: ChecklistItem[];
}) {
  return (
    <section>
      <div className="flex items-center gap-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
          {step}
        </span>
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      </div>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item.text} className="flex gap-3 rounded-xl border border-gray-200 bg-white p-3">
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border-2 border-gray-300" aria-hidden="true" />
            <div>
              <p className="text-sm text-gray-800">{item.text}</p>
              {item.note && <p className="mt-0.5 text-xs text-gray-500">{item.note}</p>}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function MigrationChecklistPage() {
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
          <span className="text-gray-900">이전 체크리스트</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900">YouTube 계정 이전 체크리스트</h1>
        <p className="mt-4 text-base text-gray-600 leading-relaxed">
          YouTube 계정 이전을 단계별로 안전하게 진행할 수 있도록 정리한 체크리스트입니다.
          이전 전에 전체 흐름을 파악하고, 각 단계에서 놓치는 항목이 없는지 확인하세요.
        </p>

        {/* Summary box */}
        <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700 space-y-2">
          <p className="font-semibold text-gray-900">이전 흐름 요약</p>
          <ol className="space-y-1.5 list-none">
            {[
              "Takeout 내보내기 전 준비",
              "Google Takeout 내보내기 실행",
              "파일 분석 및 중복 제거 (YouTube MoveKit)",
              "이전 시작 전 확인",
              "이전 후 점검",
              "개인정보 및 보안 확인",
            ].map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="shrink-0 font-bold text-red-500">{i + 1}.</span>
                {item}
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10 space-y-10">
          <ChecklistSection
            step={1}
            title="Takeout 내보내기 전 준비"
            items={[
              { text: "이전할 원본 계정에 로그인되어 있는지 확인", note: "여러 Google 계정을 사용하는 경우 반드시 확인하세요." },
              { text: "구독 중인 채널 수를 대략적으로 파악", note: "YouTube 구독 관리 페이지에서 확인 가능합니다." },
              { text: "비밀번호, 복구 이메일 등 계정 보안 항목 최신 상태 확인" },
              { text: "이전 대상(새 계정)이 이미 생성되어 있는지 확인" },
            ]}
          />

          <ChecklistSection
            step={2}
            title="Google Takeout 내보내기 실행"
            items={[
              { text: "takeout.google.com 접속 후 '모두 선택 취소' 클릭" },
              { text: "목록에서 'YouTube 및 YouTube Music'만 선택" },
              { text: "포함 데이터 설정에서 '구독'만 체크 (필요에 따라 재생목록 추가)", note: "시청 기록 전체는 용량이 매우 커질 수 있습니다." },
              { text: "파일 형식: .zip, 빈도: 한 번 내보내기 선택" },
              { text: "이메일로 받은 다운로드 링크 클릭 (링크 유효 기간 내 완료)" },
              { text: ".zip 압축 해제 후 subscriptions.csv 파일 위치 확인", note: "Takeout/YouTube/subscriptions/ 폴더 안에 있습니다." },
            ]}
          />

          <ChecklistSection
            step={3}
            title="파일 분석 및 중복 제거"
            items={[
              { text: "YouTube MoveKit에 subscriptions.csv 파일 업로드", note: "파일은 브라우저에서만 처리됩니다." },
              { text: "전체 구독 수와 중복 항목 수 확인" },
              { text: "중복 제거 후 실제 이전 필요 채널 수 확인" },
              { text: "예상 이전 기간 확인 (채널 수 ÷ 하루 한도)", note: "하루 약 190개 이하로 처리하는 것이 안전합니다." },
              { text: "정리된 CSV 파일 다운로드 및 저장" },
            ]}
          />

          <ChecklistSection
            step={4}
            title="이전 시작 전 확인"
            items={[
              { text: "이전 대상 계정(새 계정)에 로그인 가능한지 확인" },
              { text: "이전 예상 기간을 일정에 반영", note: "이전 도중 계정을 중단하면 일부만 이전될 수 있습니다." },
              { text: "OAuth API 기반의 공식 이전 방식 사용 여부 확인", note: "비공식 방식(쿠키 추출, 세션 토큰 사용)은 계정 위험이 있습니다." },
              { text: "이전 전 기존 계정의 재생목록 백업 여부 결정" },
            ]}
          />

          <ChecklistSection
            step={5}
            title="이전 후 점검"
            items={[
              { text: "새 계정에서 주요 채널 구독이 완료되었는지 확인" },
              { text: "이전 실패 항목 리스트 확인 (이전 도구 제공 시)" },
              { text: "원본 계정은 바로 삭제하지 말고 일정 기간 보관", note: "이전 완료 후 1–2주 정도 유지하는 것이 안전합니다." },
              { text: "새 계정 알림 설정이 원하는 대로 되어 있는지 확인" },
            ]}
          />

          <ChecklistSection
            step={6}
            title="개인정보 및 보안 확인"
            items={[
              { text: "이전 도구에 Google 비밀번호를 입력한 적이 없는지 확인" },
              { text: "이전 도구에 쿠키나 세션 토큰을 제공한 적이 없는지 확인" },
              { text: "다운로드한 CSV 파일 보관 또는 안전하게 삭제", note: "CSV 파일에는 구독 채널 정보가 포함됩니다." },
              { text: "이전 완료 후 사용한 서드파티 도구 계정(있는 경우) 비밀번호 확인" },
            ]}
          />
        </div>

        <div className="mt-10 rounded-xl bg-red-50 border border-red-200 p-5">
          <p className="font-semibold text-red-900">구독 분석부터 시작하세요</p>
          <p className="mt-1 text-sm text-red-700">subscriptions.csv 파일을 업로드해 중복을 제거하고 이전 예상 기간을 확인하세요.</p>
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
          <Link href="/guides/transfer-youtube-playlists" className="text-red-600 hover:underline">재생 목록 옮기기</Link>
          <Link href="/guides/transfer-youtube-watch-history" className="text-red-600 hover:underline">시청 기록 옮기기</Link>
          <Link href="/resources/sample-subscriptions-csv" className="text-red-600 hover:underline">CSV 샘플 보기</Link>
        </div>
      </div>
    </main>
  );
}
