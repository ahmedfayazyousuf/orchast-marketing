import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { dashboardNav, marketingLinks } from "@/data/navigation";
import { appHref } from "@/lib/urls";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-[13px]">
            Coordinated AI operators for digital performance, brand advertising
            and internal business support. Dummy product UI — no live accounts.
          </p>
        </div>
        <div>
          <div className="eyebrow mb-3">Product</div>
          <ul className="space-y-2 text-[13px] text-muted">
            {marketingLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={appHref("/login")} className="hover:text-ink">
                Sign in
              </Link>
            </li>
          </ul>
        </div>
        {dashboardNav.slice(0, 2).map((group) => (
          <div key={group.id}>
            <div className="eyebrow mb-3">{group.label}</div>
            <ul className="space-y-2 text-[13px] text-muted">
              {group.children.map((child) => (
                <li key={child.href}>
                  <Link href={appHref(child.href)} className="hover:text-ink">
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-[11px] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© 2026 Orchast · Concept prototype · All business data fictional</span>
          <span>Mint intelligence · Inter + editorial serif</span>
        </div>
      </div>
    </footer>
  );
}
