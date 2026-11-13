import { NAV, SITE } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 sm:py-10 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        <div>
          <img src="/images/logo.png" alt={`${SITE.name} logo`} className="h-14 rounded bg-white p-1" />
          <p className="mt-3 break-words text-sm">{SITE.address}</p>
        </div>
        <nav aria-label="Footer navigation">
          <h2 className="mb-2 font-semibold text-white">Quick Links</h2>
          <ul className="space-y-1 text-sm">{NAV.map((n) => <li key={n.label}><a href={n.href} className="hover:text-white">{n.label}</a></li>)}</ul>
        </nav>
        <div className="text-sm">
          <h2 className="mb-2 font-semibold text-white">Contact</h2>
          <p className="break-words">Telephone: {SITE.phone}</p><p className="break-words">Mailbox: {SITE.email}</p>
          <a href={SITE.facebook} className="mt-2 inline-block underline">Facebook: Greentech Solution</a>
        </div>
      </div>
      <p className="border-t border-slate-700/80 px-4 py-4 text-center text-xs">Copyright © {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
    </footer>
  );
}
