import Link from "next/link";

type Props = {
  name: string;
  price: string;
  statusLabel: string;
  available: boolean;
  positioning: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlight?: boolean;
};

export default function PricingCard({
  name,
  price,
  statusLabel,
  available,
  positioning,
  features,
  ctaLabel,
  ctaHref,
  highlight = false,
}: Props) {
  return (
    <div
      className={[
        "flex flex-col rounded-2xl border p-6",
        highlight ? "border-red-300 bg-red-50" : "border-gray-200 bg-white",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-2">
        <p className="text-lg font-bold text-gray-900">{name}</p>
        <span
          className={[
            "shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium",
            available
              ? "bg-green-100 text-green-700"
              : "bg-amber-100 text-amber-700",
          ].join(" ")}
        >
          {statusLabel}
        </span>
      </div>

      <p className="mt-3 text-2xl font-bold text-gray-900">{price}</p>
      <p className="mt-1 text-sm text-gray-500">{positioning}</p>

      <ul className="mt-5 flex-1 space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex gap-2 text-sm text-gray-700">
            <span className="shrink-0 font-bold text-red-500">+</span>
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href={ctaHref}
        className={[
          "mt-6 block rounded-xl px-5 py-3 text-center text-sm font-semibold transition-colors focus:outline-none",
          available
            ? "bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-300"
            : "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-gray-200",
        ].join(" ")}
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
