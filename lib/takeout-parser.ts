import type { YouTubeSubscription, ParseResult } from "@/types/youtube";

// ---------------------------------------------------------------------------
// Header recognition
// ---------------------------------------------------------------------------

const TITLE_HEADERS = new Set([
  // English
  "channeltitle",
  "channel title",
  "title",
  // Korean (post-normalization — lowercase applied to any ASCII portions)
  "채널 제목",
  "채널명",
  "채널 이름",
  "제목",
  "이름",
]);

const URL_HEADERS = new Set([
  // English
  "channelurl",
  "channel url",
  "url",
  // Korean (post-normalization)
  "채널 url",
  "채널 주소",
]);

const ID_HEADERS = new Set([
  // English
  "channelid",
  "channel id",
  "channel identifier",
  // Korean (post-normalization — "ID"/"Id" all become "id")
  "채널 id",
  "채널 아이디",
  "채널 식별자",
]);

function normalizeHeader(h: string): string {
  return h.trim().toLowerCase();
}

// ---------------------------------------------------------------------------
// CSV tokenizer
// Handles: quoted fields, commas inside quotes, escaped double-quotes (""),
// \r\n and \n line endings, and multi-line quoted fields.
// ---------------------------------------------------------------------------

function parseCSVRows(text: string): string[][] {
  const rows: string[][] = [];
  const currentRow: string[] = [];
  let field = "";
  let inQuotes = false;
  let i = 0;

  const flushField = () => {
    currentRow.push(field);
    field = "";
  };

  const flushRow = () => {
    flushField();
    rows.push([...currentRow]);
    currentRow.length = 0;
  };

  while (i < text.length) {
    const ch = text[i];

    if (inQuotes) {
      if (ch === '"') {
        const next = i + 1 < text.length ? text[i + 1] : "";
        if (next === '"') {
          // Escaped double-quote inside quoted field
          field += '"';
          i += 2;
        } else {
          // Closing quote
          inQuotes = false;
          i++;
        }
      } else {
        // Any character (including newlines) inside a quoted field is literal
        field += ch;
        i++;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
        i++;
      } else if (ch === ",") {
        flushField();
        i++;
      } else if (ch === "\r") {
        i++;
        if (i < text.length && text[i] === "\n") i++;
        flushRow();
      } else if (ch === "\n") {
        i++;
        flushRow();
      } else {
        field += ch;
        i++;
      }
    }
  }

  // Flush any trailing content that wasn't terminated by a newline
  if (currentRow.length > 0 || field !== "") {
    flushRow();
  }

  return rows;
}

// ---------------------------------------------------------------------------
// Safe cell accessor — guards against rows shorter than the header
// ---------------------------------------------------------------------------

function cell(row: string[], index: number): string {
  if (index < 0 || index >= row.length) return "";
  // TypeScript types string[] access as string; bounds check above ensures
  // this is a real value at runtime.
  return (row as Record<number, string>)[index].trim();
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export function parseSubscriptionsCsv(
  csvText: string
): ParseResult<YouTubeSubscription[]> {
  // Strip UTF-8 BOM if present (﻿ is the BOM codepoint)
  const text = csvText.startsWith("﻿") ? csvText.slice(1) : csvText;

  if (text.trim() === "") {
    return {
      ok: false,
      error:
        "파일이 비어 있습니다. YouTube 데이터 보관함에서 다운로드한 subscriptions.csv 파일을 사용해 주세요.",
    };
  }

  const rows = parseCSVRows(text);

  if (rows.length === 0) {
    return {
      ok: false,
      error:
        "파일이 비어 있습니다. YouTube 데이터 보관함에서 다운로드한 subscriptions.csv 파일을 사용해 주세요.",
    };
  }

  const headerRow = rows[0];
  if (!headerRow || headerRow.length === 0) {
    return {
      ok: false,
      error:
        "CSV 파일에 헤더 행이 없습니다. YouTube 데이터 보관함에서 다운로드한 파일인지 확인해 주세요.",
    };
  }

  const headers = headerRow.map((h) => h.trim());

  // Identify which column index maps to each field
  let titleIndex = -1;
  let urlIndex = -1;
  let idIndex = -1;

  for (let col = 0; col < headers.length; col++) {
    const normalized = normalizeHeader(headers[col] as string);
    if (titleIndex === -1 && TITLE_HEADERS.has(normalized)) titleIndex = col;
    if (urlIndex === -1 && URL_HEADERS.has(normalized)) urlIndex = col;
    if (idIndex === -1 && ID_HEADERS.has(normalized)) idIndex = col;
  }

  if (titleIndex === -1 && urlIndex === -1 && idIndex === -1) {
    return {
      ok: false,
      error:
        `인식할 수 있는 열이 없습니다. ` +
        `지원되는 헤더 예시: Channel Title, Channel URL, Channel Id 또는 채널 제목, 채널 URL, 채널 ID. ` +
        `발견된 헤더: ${headers.join(", ")}. ` +
        `YouTube 데이터 보관함에서 파일을 다시 다운로드해 주세요.`,
    };
  }

  const subscriptions: YouTubeSubscription[] = [];

  for (let rowIndex = 1; rowIndex < rows.length; rowIndex++) {
    const row = rows[rowIndex];
    if (!row) continue;

    // Skip entirely blank rows
    if (row.every((c) => c.trim() === "")) continue;

    const rawTitle = cell(row, titleIndex);
    const rawUrl = cell(row, urlIndex);
    const rawId = cell(row, idIndex);

    // Derive display title: prefer explicit title, fall back to URL
    const channelTitle = rawTitle !== "" ? rawTitle : rawUrl;

    // Skip rows with no usable data at all
    if (channelTitle === "" && rawUrl === "" && rawId === "") continue;

    // Build a header-keyed source map for round-tripping / debugging
    const sourceRow: Record<string, string> = {};
    for (let col = 0; col < headers.length; col++) {
      const key = headers[col] as string;
      sourceRow[key] = cell(row, col);
    }

    const subscription: YouTubeSubscription = {
      channelTitle,
      ...(rawId !== "" && { channelId: rawId }),
      ...(rawUrl !== "" && { channelUrl: rawUrl }),
      sourceRow,
    };

    subscriptions.push(subscription);
  }

  if (subscriptions.length === 0) {
    return {
      ok: false,
      error:
        "유효한 구독 항목이 없습니다. 헤더 행만 있거나 모든 행이 건너뛰어졌습니다. YouTube 데이터 보관함에서 파일을 다시 확인해 주세요.",
    };
  }

  return { ok: true, data: subscriptions };
}
