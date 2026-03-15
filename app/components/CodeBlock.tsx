"use client";

import { useState } from "react";

export default function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-[#0b1228] border border-white/10 rounded-lg p-4">

      <button
        onClick={copy}
        className="absolute top-3 right-3 text-xs text-slate-400"
      >
        {copied ? "Copied" : "Copy"}
      </button>

      <pre className="text-sm text-slate-300 overflow-x-auto">
        {code}
      </pre>

    </div>
  );
}