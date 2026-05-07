import Link from "next/link";

const LINKS = [
  { href: "/", label: "홈" },
  { href: "/tool", label: "구독 분석 도구" },
  { href: "/pricing", label: "요금제" },
  { href: "/guides", label: "가이드" },
  { href: "/resources", label: "리소스" },
  { href: "/compare", label: "비교" },
  { href: "/about", label: "소개" },
  { href: "/contact", label: "문의" },
  { href: "/privacy", label: "개인정보처리방침" },
  { href: "/terms", label: "이용약관" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 px-4 py-8 text-xs text-gray-500">
      <div className="mx-auto max-w-4xl">
        <nav className="flex flex-wrap gap-x-4 gap-y-2">
          {LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:text-gray-900 hover:underline">
              {label}
            </Link>
          ))}
        </nav>
        <p className="mt-4 text-gray-400">
          YouTube MoveKit은 YouTube·Google과 무관한 독립 서비스입니다.
        </p>
      </div>
    </footer>
  );
}
