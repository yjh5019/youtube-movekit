import type { Metadata } from "next";
import Link from "next/link";
import PricingCard from "@/components/pricing-card";
import EmailCapture from "@/components/email-capture";

export const metadata: Metadata = {
  title: "요금제 | YouTube MoveKit",
  description:
    "YouTube MoveKit 요금제 안내입니다. 구독 분석 및 CSV 다운로드는 무료 제공, 구독 이전 기능은 준비 중입니다.",
};

const FREE_FEATURES = [
  "subscriptions.csv 분석",
  "중복 제거",
  "정리된 CSV 다운로드",
  "안전한 이전 기간 추정",
];

const STARTER_FEATURES = [
  "핵심 구독 200개 이전 예정",
  "중복 체크",
  "진행률 리포트",
  "실패 항목 리포트",
];

const PRO_FEATURES = [
  "전체 구독 이전 큐 예정",
  "재생목록 복원 예정",
  "Watch Later 비공개 재생목록 복원 예정",
  "실패 리포트",
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="px-4 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            무료 분석부터 시작하세요
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            현재는 YouTube Takeout 구독 분석 기능을 무료로 제공합니다.
            이전 기능은 대기자 피드백을 기반으로 순차 출시할 예정입니다.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          <PricingCard
            name="Free"
            price="₩0"
            statusLabel="지금 이용 가능"
            available={true}
            positioning="구독 목록 분석 및 정리"
            features={FREE_FEATURES}
            ctaLabel="무료 분석 시작하기"
            ctaHref="/tool"
          />
          <PricingCard
            name="Starter"
            price="₩4,900 예정"
            statusLabel="출시 예정"
            available={false}
            positioning="핵심 구독 200개 우선 이전"
            features={STARTER_FEATURES}
            ctaLabel="Starter 대기자 등록"
            ctaHref="#waitlist"
          />
          <PricingCard
            name="Pro"
            price="₩19,900 예정"
            statusLabel="출시 예정"
            available={false}
            positioning="전체 구독 이전 큐 + 재생목록 복원 예정"
            features={PRO_FEATURES}
            ctaLabel="Pro 대기자 등록"
            ctaHref="#waitlist"
            highlight={true}
          />
        </div>
        <p className="mt-6 text-center text-xs text-gray-400">
          가격과 기능은 출시 전 변경될 수 있습니다. 현재는 구독 분석 기능만 제공됩니다.
        </p>
      </section>

      {/* Why waitlist */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900">왜 바로 이전이 안 되나요?</h2>
          <p className="mt-2 text-sm text-gray-500">
            이전 기능이 대기자 방식으로 출시되는 이유를 안내드립니다.
          </p>
          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-600">
                1
              </span>
              <div>
                <p className="font-semibold text-gray-900">YouTube API 할당량 제한</p>
                <p className="mt-1 text-sm text-gray-600">
                  YouTube API는 계정당 하루에 처리할 수 있는 구독 요청 수가 제한되어 있습니다.
                  한 번에 전체를 이전하면 계정이 일시 제한될 수 있어, 안전한 속도로 나눠서
                  처리하는 방식이 필요합니다.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-600">
                2
              </span>
              <div>
                <p className="font-semibold text-gray-900">계정 안전 최우선</p>
                <p className="mt-1 text-sm text-gray-600">
                  비정상적인 패턴이 감지되면 YouTube가 계정 활동을 제한할 수 있습니다.
                  하루 약 190개 이하의 구독 작업으로 나눠 처리하면 이러한 위험을 줄일 수 있습니다.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-600">
                3
              </span>
              <div>
                <p className="font-semibold text-gray-900">단계적 출시로 안정성 확보</p>
                <p className="mt-1 text-sm text-gray-600">
                  대기자 피드백을 반영하면서 OAuth 이전 기능을 순차적으로 안정화할 예정입니다.
                  먼저 무료 분석 기능으로 구독 목록을 파악하고, 이전 기능 준비가 되면 안내해 드립니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900">자주 묻는 질문</h2>
          <dl className="mt-8 divide-y divide-gray-200">
            <div className="py-6">
              <dt className="font-semibold text-gray-900">지금 결제할 수 있나요?</dt>
              <dd className="mt-2 text-sm text-gray-600">
                아직 결제 기능이 준비되어 있지 않습니다. 현재는 무료 분석 기능만 제공되며,
                유료 이전 기능 출시 시 대기자에게 먼저 안내해 드릴 예정입니다.
              </dd>
            </div>
            <div className="py-6">
              <dt className="font-semibold text-gray-900">이전 기능은 언제 제공되나요?</dt>
              <dd className="mt-2 text-sm text-gray-600">
                정확한 출시 일정은 아직 확정되지 않았습니다. 대기자로 등록하시면 출시 시 가장
                먼저 안내해 드립니다.
              </dd>
            </div>
            <div className="py-6">
              <dt className="font-semibold text-gray-900">
                왜 한 번에 전체 이전을 보장하지 않나요?
              </dt>
              <dd className="mt-2 text-sm text-gray-600">
                YouTube API 할당량과 계정 안전 정책으로 인해 하루에 처리할 수 있는 구독
                요청 수가 제한됩니다. 전체 이전은 구독 수에 따라 여러 날에 걸쳐 진행될 수
                있으며, 이 도구는 그 기간을 미리 추정해 드립니다.
              </dd>
            </div>
            <div className="py-6">
              <dt className="font-semibold text-gray-900">무료 분석은 계속 무료인가요?</dt>
              <dd className="mt-2 text-sm text-gray-600">
                네. CSV 분석, 중복 제거, 정리된 파일 다운로드는 계속 무료로 제공할 계획입니다.
                유료 기능은 OAuth를 이용한 실제 구독 이전 및 복원 기능에 한정됩니다.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Final CTA */}
      <section id="waitlist" className="bg-white px-4 py-16">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/tool"
              className="flex-1 rounded-xl bg-red-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-red-700 focus:ring-2 focus:ring-red-300 focus:outline-none"
            >
              지금 무료 분석 시작하기
            </Link>
          </div>
          <p className="mb-4 text-sm text-gray-500">
            이전 기능 출시 알림을 받고 싶으신가요?
          </p>
          <EmailCapture />
        </div>
      </section>
    </main>
  );
}
