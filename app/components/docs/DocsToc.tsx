export default function DocsToc() {
  return (
    <aside className="hidden lg:block sticky top-24 h-fit">

      <p className="text-xs uppercase text-slate-400 mb-4">
        On this page
      </p>

      <ul className="space-y-2 text-sm text-slate-400">

        <li>Install the SDK</li>
        <li>Initialize Client</li>
        <li>Send an Event</li>

      </ul>

    </aside>
  );
}