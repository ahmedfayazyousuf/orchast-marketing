import { ArrowUpRight } from "lucide-react";
import { MyBadge } from "@/components/ui/MyBadge";
import { MyButton } from "@/components/ui/MyButton";
import { MyHeading } from "@/components/ui/MyHeading";
import { MyReveal } from "@/components/ui/MyReveal";
import { MyStat } from "@/components/ui/MyStat";
import { HomeOrbit } from "@/components/sections/home/HomeOrbit";
import { heroCopy, stats } from "@/data/home";
import { appHref } from "@/lib/urls";

export function HomeHero() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-8">
        <MyReveal>
          <MyHeading as="h1" eyebrow={heroCopy.eyebrow}>
            {heroCopy.titleLead}
            <br />
            <em className="serif">{heroCopy.titleSerif}</em>
            <br />
            {heroCopy.titleEnd}
          </MyHeading>
          <p className="mt-6 max-w-xl text-[16px] leading-7">
            Meet <strong className="text-ink">Orchast</strong>, a coordinated AI
            business ecosystem. Specialist agents operate in their lanes.{" "}
            <strong className="text-ink">QUEEN</strong> plans the work. A
            separate policy engine protects the business. Every authorized
            action leaves evidence, and every claimed return needs proof.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <MyButton href={appHref("/login")} variant="primary" size="lg">
              Explore live prototype <ArrowUpRight size={16} />
            </MyButton>
            <MyButton href="/#agents" size="lg">
              Meet the agents
            </MyButton>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-[12px] text-muted">
            <MyBadge>Concept / pre-launch</MyBadge>
            <span>
              <strong className="text-ink">Demo mode:</strong> no real accounts,
              funds, ads, or customer data are connected.
            </span>
          </div>
        </MyReveal>
        <MyReveal delay={0.12}>
          <HomeOrbit />
        </MyReveal>
      </div>
      <div className="mx-auto mt-14 grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <MyReveal key={stat.label} delay={index * 0.05}>
            <MyStat label={stat.label} value={stat.value} hint={stat.hint} />
          </MyReveal>
        ))}
      </div>
    </section>
  );
}
