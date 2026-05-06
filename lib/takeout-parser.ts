import type { YouTubeSubscription, ParseResult } from "@/types/youtube";

// ---------------------------------------------------------------------------
// Header recognition
// ---------------------------------------------------------------------------

const TITLE_HEADERS = new Set([
  "channeltitle",
  "channel title",
  "title",
  "channel title",
]);

const URL_HEADERS = new Set([
  "channelurl",
  "channel url",
  "url",
]);

const ID_HEADERS = new Set([
  "channelid",
  "channel id",
  "channel identifier",
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
    return { ok: false, error: "The CSV file is empty." };
  }

  const rows = parseCSVRows(text);

  if (rows.length === 0) {
    return { ok: false, error: "The CSV file is empty." };
  }

  const headerRow = rows[0];
  if (!headerRow || headerRow.length === 0) {
    return { ok: false, error: "The CSV file has no header row." };
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
        `No recognizable columns found. Expected headers like ` +
        `"Channel Title", "Channel URL", or "Channel Id". ` +
        `Found: ${headers.join(", ")}. ` +
        `Try re-downloading your YouTube Takeout archive.`,
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
        "No valid subscriptions found. The file may be a header row only, or all rows were skipped.",
    };
  }

  return { ok: true, data: subscriptions };
}
