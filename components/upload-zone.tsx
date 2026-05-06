"use client";

import { useRef, useState } from "react";

type Props = {
  onFile: (file: File) => void;
  disabled?: boolean;
};

export default function UploadZone({ onFile, disabled = false }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  function handleFiles(files: FileList | null) {
    setValidationError(null);
    if (!files || files.length === 0) return;
    const file = files[0];
    if (!file) return;
    const isCSV =
      file.name.toLowerCase().endsWith(".csv") || file.type === "text/csv";
    if (!isCSV) {
      setValidationError(
        "CSV 파일만 업로드할 수 있습니다. YouTube 데이터 보관함에서 다운로드한 subscriptions.csv 파일을 사용해 주세요."
      );
      return;
    }
    onFile(file);
  }

  return (
    <div className="w-full">
      <div
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-label="CSV 파일 업로드 영역. 클릭하거나 파일을 드래그하세요."
        className={[
          "flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed p-12 text-center transition-colors select-none",
          isDragOver
            ? "border-red-500 bg-red-50"
            : "border-gray-300 hover:border-red-400 hover:bg-gray-50",
          disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        ].join(" ")}
        onDragOver={(e) => {
          e.preventDefault();
          if (!disabled) setIsDragOver(true);
        }}
        onDragLeave={() => setIsDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragOver(false);
          if (!disabled) handleFiles(e.dataTransfer.files);
        }}
        onClick={() => {
          if (!disabled) inputRef.current?.click();
        }}
        onKeyDown={(e) => {
          if (!disabled && (e.key === "Enter" || e.key === " ")) {
            inputRef.current?.click();
          }
        }}
      >
        <input
          ref={inputRef}
          type="file"
          accept=".csv,text/csv"
          className="hidden"
          disabled={disabled}
          onChange={(e) => handleFiles(e.target.files)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
          />
        </svg>
        <p className="text-base font-medium text-gray-700">
          파일을 드래그하거나 클릭하여 업로드
        </p>
        <p className="text-sm text-gray-400">
          YouTube 데이터 보관함에서 다운로드한{" "}
          <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-xs">
            subscriptions.csv
          </code>{" "}
          파일을 사용하세요
        </p>
      </div>
      {validationError && (
        <p role="alert" className="mt-2 text-sm text-red-600">
          {validationError}
        </p>
      )}
    </div>
  );
}
