import CodeBlock from "@/components/CodeBlock";

export default function DocsPage() {
  const code = `import { BridgePort } from "bridgeport"

const api = new BridgePort({
  apiKey: process.env.API_KEY
})

await api.events.send({
  name: "user.signup",
  userId: "42"
})`;

  return (
    <article className="prose prose-invert max-w-none">
      <h1>Getting Started</h1>

      <p>
        BridgePort allows you to send and manage events across your
        infrastructure with minimal setup.
      </p>

      <h2>Install the SDK</h2>

      <CodeBlock code={`npm install bridgeport`} />

      <h2>Initialize Client</h2>

      <CodeBlock code={code} />

      <h2>Send an Event</h2>

      <p>
        Once initialized, you can send events directly to the BridgePort API.
      </p>
    </article>
  );
}
