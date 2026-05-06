"use client";

import { useState } from "react";
import UploadZone from "@/components/upload-zone";
import AnalysisResult from "@/components/analysis-result";
import { parseSubscriptionsCsv } from "@/lib/takeout-parser";
import { dedupeSubscriptions } from "@/lib/dedupe";
import { estimateSubscriptionMigrationDays } from "@/lib/estimate";
import type { DedupedSubscriptionResult } from "@/types/youtube";

type PageState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "result"; result: DedupedSubscriptionResult; days: number };

export default function ToolPage() {
  const [state, setState] = useState<PageState>({ status: "idle" });

  async function handleFile(file: File) {
    setState({ status: "loading" });
    try {
      const text = await file.text();
      const parsed = parseSubscriptionsCsv(text);
      if (!parsed.ok || !parsed.data) {
        setState({
          status: "error",
          message: parsed.error ?? "파일을 분석할 수 없습니다.",
        });
        return;
      }
      const result = dedupeSubscriptions(parsed.data);
      const days = estimateSubscriptionMigrationDays(result.uniqueCount);
      setState({ status: "result", result, days });
    } catch {
      setState({
        status: "error",
        message: "파일을 읽는 중 오류가 발생했습니다. 다시 시도해 주세요.",
      });
    }
  }

  function handleReset() {
    setState({ status: "idle" });
  }

  return (
    <main className="min-h-screen bg-white px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            YouTube 구독 목록 분석기
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            업로드한 파일은 브라우저에서만 분석되며 서버에 저장되지 않습니다.
          </p>
        </header>

        {state.status === "idle" && (
          <UploadZone onFile={handleFile} />
        )}

        {state.status === "loading" && (
          <div
            role="status"
            aria-live="polite"
            className="flex flex-col items-center gap-3 py-16 text-gray-500"
          >
            <svg
              className="h-8 w-8 animate-spin text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            <p className="text-sm">파일을 분석하고 있습니다…</p>
          </div>
        )}

        {state.status === "error" && (
          <div
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 p-6"
          >
            <p className="font-medium text-red-700">파일 분석 실패</p>
            <p className="mt-1 text-sm text-red-600">{state.message}</p>
            <button
              onClick={handleReset}
              className="mt-4 rounded-lg border border-red-300 px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-100 focus:ring-2 focus:ring-red-300 focus:outline-none"
            >
              다시 시도
            </button>
          </div>
        )}

        {state.status === "result" && (
          <AnalysisResult
            result={state.result}
            estimatedDays={state.days}
            onReset={handleReset}
          />
        )}
      </div>
    </main>
  );
}
