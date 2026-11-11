import { MyCard } from "@/components/ui/MyCard";
import { MyHeading } from "@/components/ui/MyHeading";
import { MyReveal } from "@/components/ui/MyReveal";
import { howItWorks } from "@/data/home";

export function HomeCapabilities() {
  return (
    <section id="capabilities" className="border-y border-line bg-white px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <MyReveal>
          <MyHeading as="h2" eyebrow="07 / From objective to outcome">
            Value in five minutes.
            <br />
            <span className="serif">Trust before action.</span>
          </MyHeading>
          <p className="mt-4 max-w-2xl text-[16px]">
            The first assessment can work without any integration. Campaign
            reports and real writes cannot. This prototype demonstrates the
            operating rhythm — not a hosted model.
          </p>
        </MyReveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {howItWorks.map((item, index) => (
            <MyReveal key={item.step} delay={index * 0.08}>
              <MyCard>
                <div className="text-[11px] font-semibold tracking-[0.14em] text-deep">
                  {item.step}
                </div>
                <h3 className="mt-3 text-[20px] font-semibold tracking-[-0.025em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-2">{item.body}</p>
              </MyCard>
            </MyReveal>
          ))}
        </div>
        <MyReveal delay={0.16}>
          <article className="prose prose-neutral mt-10 max-w-none rounded-card border border-line bg-mint-0/60 px-6 py-8 prose-headings:font-sans prose-headings:tracking-[-0.04em] prose-p:text-muted prose-strong:text-ink">
            <h3>Design system / mint intelligence</h3>
            <p>
              Orchast inherits the mint-to-deep-teal visual system: restrained
              elevation, 19px radius, 1px fine borders and an editorial serif
              for expression. Interfaces use Inter. Proof, not personality, is
              the product.
            </p>
          </article>
        </MyReveal>
      </div>
    </section>
  );
}
