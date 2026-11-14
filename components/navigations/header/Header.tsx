"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { MyButton } from "@/components/ui/MyButton";
import { marketingLinks } from "@/data/navigation";
import { cn } from "@/lib/cn";
import { appHref } from "@/lib/urls";

const shell = "w-full px-5 sm:px-8 lg:px-12 xl:px-16";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-[background-color,box-shadow,border-color] duration-300",
        scrolled
          ? "border-line bg-white/90 shadow-[0_10px_40px_rgba(21,62,56,0.06)] backdrop-blur-xl"
          : "border-transparent bg-bg/70 backdrop-blur-md",
      )}
    >
      <div className={cn(shell, "relative flex h-[68px] items-center gap-6 sm:h-[76px]")}>
        <Logo />
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {marketingLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-[13px] font-medium text-muted transition-colors hover:bg-white hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto hidden items-center gap-2 md:flex">
          <MyButton href={appHref("/login")} variant="ghost" size="sm">
            Sign in
          </MyButton>
          <MyButton href={appHref("/login")} variant="primary" size="sm">
            Open workspace
          </MyButton>
        </div>
        <button
          type="button"
          className="ml-auto grid size-10 place-items-center rounded-full border border-line bg-white text-ink shadow-soft md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>
      <div
        className={cn(
          "w-full border-t border-line bg-white md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className={cn(shell, "flex flex-col py-3")}>
          {marketingLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-3 py-3 text-[15px] font-medium text-ink transition-colors hover:bg-mint-0"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className={cn(shell, "grid grid-cols-2 gap-2 pb-5")}>
          <MyButton href={appHref("/login")} className="w-full">
            Sign in
          </MyButton>
          <MyButton href={appHref("/login")} variant="primary" className="w-full">
            Open workspace
          </MyButton>
        </div>
      </div>
    </header>
  );
}
