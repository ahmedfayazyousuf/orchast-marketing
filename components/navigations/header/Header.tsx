"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { MyButton } from "@/components/ui/MyButton";
import { marketingLinks } from "@/data/navigation";
import { cn } from "@/lib/cn";
import { appHref } from "@/lib/urls";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-[64px] max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 text-[13px] text-muted md:flex">
          {marketingLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <MyButton href={appHref("/login")} variant="ghost" size="sm">
            Sign in
          </MyButton>
          <MyButton href={appHref("/login")} variant="primary" size="sm">
            Open workspace
          </MyButton>
        </div>
        <button
          type="button"
          className="grid size-10 place-items-center rounded-full border border-line bg-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>
      <div
        className={cn(
          "border-t border-line bg-white px-5 py-4 md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col gap-3 text-[14px]">
          {marketingLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-1 text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-4 flex gap-2">
          <MyButton href={appHref("/login")} className="flex-1">
            Sign in
          </MyButton>
          <MyButton href={appHref("/login")} variant="primary" className="flex-1">
            Open workspace
          </MyButton>
        </div>
      </div>
    </header>
  );
}
