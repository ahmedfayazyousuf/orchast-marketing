import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { dashboardNav, marketingLinks } from "@/data/navigation";
import { appHref } from "@/lib/urls";

const shell = "w-full px-5 sm:px-8 lg:px-12 xl:px-16";

export function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="h-px w-full bg-gradient-to-r from-mint-3 via-line to-transparent" />
      <div className={shell}>
        <div className="flex w-full flex-col gap-12 py-14 md:flex-row md:items-start md:justify-between md:gap-10 lg:gap-16 lg:py-20">
          <div className="max-w-sm shrink-0 md:w-64 lg:w-80">
            <Logo />
            <p className="mt-5 text-[14px] leading-6">
              Coordinated AI operators for digital performance, brand
              advertising and internal business support.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-[12px] text-muted">
              <span className="size-1.5 rounded-full bg-mint-4" aria-hidden />
              Concept prototype · no live accounts
            </p>
          </div>
          <div className="grid w-full min-w-0 grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 md:flex-1 lg:max-w-3xl">
            <div>
              <div className="eyebrow mb-4">Product</div>
              <ul className="space-y-2.5 text-[14px]">
                {marketingLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={appHref("/login")}
                    className="text-muted transition-colors hover:text-ink"
                  >
                    Sign in
                  </Link>
                </li>
              </ul>
            </div>
            {dashboardNav.slice(0, 2).map((group) => (
              <div key={group.id}>
                <div className="eyebrow mb-4">{group.label}</div>
                <ul className="space-y-2.5 text-[14px]">
                  {group.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={appHref(child.href)}
                        className="text-muted transition-colors hover:text-ink"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full border-t border-line bg-bg">
        <div
          className={`${shell} flex flex-col gap-2 py-5 text-[12px] text-muted sm:flex-row sm:items-center sm:justify-between`}
        >
          <span>© 2026 Orchast · All business data fictional</span>
          <span className="tracking-[0.14em] uppercase">Mint intelligence</span>
        </div>
      </div>
    </footer>
  );
}
