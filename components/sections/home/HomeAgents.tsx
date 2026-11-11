import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MyCard } from "@/components/ui/MyCard";
import { MyHeading } from "@/components/ui/MyHeading";
import { MyReveal } from "@/components/ui/MyReveal";
import { dashboardNav } from "@/data/navigation";
import { appHref } from "@/lib/urls";

export function HomeAgents() {
  return (
    <section id="agents" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <MyReveal>
          <MyHeading as="h2" eyebrow="04 / Agent ecosystem">
            Specialized by mandate.
            <br />
            <span className="serif">United by intent.</span>
          </MyHeading>
          <p className="mt-4 max-w-2xl text-[16px]">
            Three operating lanes. Each specialist owns a bounded domain, uses
            typed inputs and returns structured evidence. QUEEN can coordinate,
            but only the policy engine can authorize execution.
          </p>
        </MyReveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {dashboardNav.map((group, index) => {
            const Icon = group.icon;
            return (
              <MyReveal key={group.id} delay={index * 0.08}>
                <MyCard className="h-full">
                  <div className="mb-4 grid size-10 place-items-center rounded-full bg-mint-0 text-deep">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-[20px] font-semibold tracking-[-0.025em] text-ink">
                    {group.label}
                  </h3>
                  <p className="mt-2">{group.description}</p>
                  <ul className="mt-5 space-y-2">
                    {group.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={appHref(child.href)}
                          className="group flex items-center justify-between rounded-[12px] border border-line bg-bg px-3 py-2 text-[13px] text-ink hover:border-mint-3 hover:bg-mint-0"
                        >
                          {child.label}
                          <ArrowUpRight
                            size={14}
                            className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </MyCard>
              </MyReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
