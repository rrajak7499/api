import Link from "next/link";

export default function Footer() {

  return (
    <footer className="border-t border-white/10 mt-24">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h3 className="font-bold text-lg mb-4">BridgePort</h3>
          <p className="text-slate-400 text-sm">
            Developer infrastructure for modern APIs.
          </p>
        </div>

        {/* Product */}
        <div>
          <h4 className="font-semibold mb-4">Product</h4>

          <ul className="space-y-2 text-slate-400 text-sm">
            <li><Link href="/docs">Documentation</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/changelog">Changelog</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-4">Resources</h4>

          <ul className="space-y-2 text-slate-400 text-sm">
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/guides">Guides</Link></li>
            <li><Link href="/support">Support</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>

          <ul className="space-y-2 text-slate-400 text-sm">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
          </ul>
        </div>

      </div>

      <div className="text-center text-slate-500 text-sm pb-8">
        © {new Date().getFullYear()} BridgePort. All rights reserved.
      </div>

    </footer>
  );
}