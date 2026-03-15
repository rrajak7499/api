"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const docs = [
  {
    section: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Authentication", href: "/docs/authentication" },
    ],
  },
  {
    section: "API",
    items: [
      { title: "Events API", href: "/docs/events" },
      { title: "Webhooks", href: "/docs/webhooks" },
    ],
  },
];

export default function DocsSidebar() {
  const path = usePathname();

  return (
    <aside className="sticky top-24 h-fit">
      <input
        placeholder="Search docs..."
        className="w-full mb-6 px-3 py-2 bg-[#0b1228] border border-white/10 rounded"
      />
      {docs.map((group) => (
        <div key={group.section} className="mb-8">
          <p className="text-xs uppercase text-slate-400 mb-3">
            {group.section}
          </p>

          <ul className="space-y-1">
            {group.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-3 py-2 rounded text-sm ${
                    path === item.href
                      ? "bg-white/10 text-white"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}
