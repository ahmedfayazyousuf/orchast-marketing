import { ArrowUpRight } from "lucide-react";
import { MyButton } from "@/components/ui/MyButton";
import { MyHeading } from "@/components/ui/MyHeading";
import { MyReveal } from "@/components/ui/MyReveal";
import { appHref } from "@/lib/urls";

export function HomeCTA() {
  return (
    <section className="px-5 py-20 sm:px-8">
      <MyReveal>
        <div className="mx-auto max-w-6xl overflow-hidden rounded-card border border-line bg-ink px-6 py-12 text-mint-0 sm:px-12">
          <MyHeading as="h2" className="text-mint-0">
            Sell the results.
            <br />
            <span className="serif text-mint-2">Prove the trust.</span>
          </MyHeading>
          <p className="mt-4 max-w-xl text-mint-1">
            Open the dummy workspace. Approvals, workflow tiles and agent desks
            are local only — a cockpit for the operating layer, without touching
            real money or data.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <MyButton href={appHref("/login")} variant="primary" size="lg" className="bg-mint-0 text-ink hover:bg-white">
              Enter command centre <ArrowUpRight size={16} />
            </MyButton>
            <MyButton href={appHref("/login")} size="lg" className="border-white/15 bg-transparent text-mint-0 hover:bg-white/10">
              Sign in
            </MyButton>
          </div>
        </div>
      </MyReveal>
    </section>
  );
}
