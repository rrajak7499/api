"use client"

export default function CodePreview() {

  const code = `import { BridgePort } from "bridgeport"

const api = new BridgePort({
  apiKey: process.env.API_KEY
})

await api.events.send({
  name: "user.signup",
  userId: "42"
})`

  return (
    <div className="bg-[#0b1228] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">

      {/* Window Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">

        <span className="w-3 h-3 bg-red-400 rounded-full"/>
        <span className="w-3 h-3 bg-yellow-400 rounded-full"/>
        <span className="w-3 h-3 bg-green-400 rounded-full"/>

      </div>

      {/* Code */}
      <pre className="p-6 text-sm text-slate-300 overflow-x-auto">
        <code>{code}</code>
      </pre>

    </div>
  )
}