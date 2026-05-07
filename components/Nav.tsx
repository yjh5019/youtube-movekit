import Link from "next/link";

export default function Nav() {
  return (
    <header className="border-b border-gray-200 bg-white px-4">
      <div className="mx-auto flex max-w-4xl items-center justify-between py-3">
        <Link href="/" className="text-sm font-bold text-gray-900 hover:text-red-600">
          YouTube MoveKit
        </Link>
        <nav className="flex flex-wrap gap-4 text-sm text-gray-600">
          <Link href="/tool" className="hover:text-gray-900">도구</Link>
          <Link href="/pricing" className="hover:text-gray-900">요금제</Link>
          <Link href="/guides" className="hover:text-gray-900">가이드</Link>
          <Link href="/resources" className="hover:text-gray-900">리소스</Link>
          <Link href="/about" className="hover:text-gray-900">소개</Link>
        </nav>
      </div>
    </header>
  );
}
