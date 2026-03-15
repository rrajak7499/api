"use client";

import DocsSidebar from "@/components/docs/DocsSidebar";
import DocsToc from "@/components/docs/DocsToc";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-16">

      <div className="max-w-[1400px] mx-auto grid grid-cols-[260px_1fr_220px] gap-10 px-6 py-10">

        {/* Sidebar */}
        <DocsSidebar />

        {/* Content */}
        <main className="max-w-3xl">
          {children}
        </main>

        {/* Table of contents */}
        <DocsToc />

      </div>

    </div>
  );
}