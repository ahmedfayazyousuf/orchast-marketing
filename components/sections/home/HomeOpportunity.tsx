import { MyBadge } from "@/components/ui/MyBadge";
import { MyCard } from "@/components/ui/MyCard";
import { MyHeading } from "@/components/ui/MyHeading";
import { MyReveal } from "@/components/ui/MyReveal";
import { opportunity } from "@/data/home";

export function HomeOpportunity() {
  return (
    <section id="platform" className="border-y border-line bg-white px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <MyReveal>
          <MyHeading as="h2" eyebrow="02 / Commercial problem">
            From dashboards to <span className="serif">decisions.</span>
          </MyHeading>
          <p className="mt-4 max-w-2xl text-[16px]">
            Businesses rarely need another isolated analytics screen. They need
            reliably connected work, clear responsibility, safe execution and
            demonstrated economic effects.
          </p>
        </MyReveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {opportunity.map((item, index) => (
            <MyReveal key={item.tag} delay={index * 0.08}>
              <MyCard className={item.tag === "Orchast" ? "border-mint-3 bg-mint-0/50" : ""}>
                <MyBadge tone={item.tag === "Orchast" ? "ink" : "default"}>
                  {item.tag}
                </MyBadge>
                <h3 className="mt-4 text-[20px] font-semibold tracking-[-0.025em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-2">{item.body}</p>
                <div className="mt-4 text-[11px] text-muted">{item.hint}</div>
              </MyCard>
            </MyReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
