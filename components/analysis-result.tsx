"use client";

import { useState } from "react";
import type { DedupedSubscriptionResult } from "@/types/youtube";
import { subscriptionsToCsv } from "@/lib/csv-export";
import EmailCapture from "@/components/email-capture";

type Props = {
  result: DedupedSubscriptionResult;
  estimatedDays: number;
  onReset: () => void;
};

type StatCardProps = {
  label: string;
  value: string | number;
  highlight?: boolean;
};

function StatCard({ label, value, highlight = false }: StatCardProps) {
  return (
    <div
      className={[
        "rounded-xl border p-4 text-center",
        highlight
          ? "border-red-200 bg-red-50"
          : "border-gray-200 bg-white",
      ].join(" ")}
    >
      <p
        className={[
          "text-2xl font-bold",
          highlight ? "text-red-600" : "text-gray-900",
        ].join(" ")}
      >
        {value}
      </p>
      <p className="mt-1 text-xs text-gray-500">{label}</p>
    </div>
  );
}

export default function AnalysisResult({
  result,
  estimatedDays,
  onReset,
}: Props) {
  const [downloadError, setDownloadError] = useState<string | null>(null);

  function handleDownload() {
    setDownloadError(null);
    try {
      const csv = subscriptionsToCsv(result.uniqueSubscriptions);
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "youtube-subscriptions-cleaned.csv";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("CSV download failed:", err);
      setDownloadError(
        "파일 다운로드에 실패했습니다. 다시 시도해 주세요."
      );
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatCard label="총 구독 수" value={result.totalCount} />
        <StatCard
          label="중복 제거 후"
          value={result.uniqueCount}
          highlight
        />
        <StatCard label="중복 항목" value={result.duplicateCount} />
        <StatCard
          label="예상 이전 기간"
          value={estimatedDays === 0 ? "—" : `${estimatedDays}일`}
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          onClick={handleDownload}
          className="flex-1 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-700 focus:ring-2 focus:ring-red-300 focus:outline-none"
        >
          정리된 CSV 다운로드
        </button>
        <button
          onClick={onReset}
          className="flex-1 rounded-xl border border-gray-300 px-5 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 focus:ring-2 focus:ring-gray-200 focus:outline-none"
        >
          다른 파일 분석하기
        </button>
      </div>
      {downloadError && (
        <p role="alert" className="text-sm text-red-600">
          {downloadError}
        </p>
      )}

      <EmailCapture />
    </div>
  );
}
