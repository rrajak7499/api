"use client";

import { useState } from "react";

export default function ApiPlayground() {
  const [response, setResponse] = useState("");

  const runRequest = () => {
    setResponse(
`{
  "status": "success",
  "eventId": "evt_92kd92",
  "createdAt": "2026-03-15T10:14:22Z"
}`
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-32">

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          Try the API
        </h2>

        <p className="text-slate-400 mt-4">
          Send a request and see how simple the integration is.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">

        {/* Request */}
        <div className="bg-[#0b1228] border border-white/10 rounded-xl p-6">

          <p className="text-sm text-slate-400 mb-4">
            POST /v1/events
          </p>

          <pre className="text-sm text-slate-300 overflow-x-auto">
{`{
  "name": "user.signup",
  "userId": "42"
}`}
          </pre>

          <button
            onClick={runRequest}
            className="mt-6 bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded font-semibold"
          >
            Send Request
          </button>

        </div>

        {/* Response */}
        <div className="bg-[#0b1228] border border-white/10 rounded-xl p-6">

          <p className="text-sm text-slate-400 mb-4">
            Response
          </p>

          <pre className="text-sm text-emerald-300">
{response || "// click send request"}
          </pre>

        </div>

      </div>

    </section>
  );
}