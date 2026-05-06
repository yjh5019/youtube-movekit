"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email.trim() !== "") {
      setSubmitted(true);
    }
  }

  return (
    <section className="rounded-xl border border-gray-200 bg-gray-50 p-6">
      <h2 className="text-lg font-semibold text-gray-900">
        새 계정으로 이전 기능이 필요하신가요?
      </h2>
      <p className="mt-1 text-sm text-gray-500">
        현재는 분석 기능만 제공됩니다. 구독 이전 기능이 준비되면 알려드릴게요.
      </p>
      {submitted ? (
        <p className="mt-4 text-sm font-medium text-green-600">
          등록되었습니다. 준비되면 안내 드릴게요.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
          <label htmlFor="waitlist-email" className="sr-only">
            이메일 주소
          </label>
          <input
            id="waitlist-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일 주소"
            required
            className="min-w-0 flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-red-400 focus:ring-2 focus:ring-red-100 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:ring-2 focus:ring-red-300 focus:outline-none"
          >
            알림 받기
          </button>
        </form>
      )}
    </section>
  );
}
