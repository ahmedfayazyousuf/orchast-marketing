import { orbitNodes } from "@/data/home";

export function HomeOrbit() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[420px]"
      aria-label="Conceptual diagram of QUEEN coordinating agents"
    >
      <div className="orbit-spin absolute inset-[8%] rounded-full border border-mint-3/70" />
      <div className="orbit-spin-rev absolute inset-[18%] rounded-full border border-dashed border-mint-4/80" />
      <div className="absolute inset-[30%] rounded-full border border-mint-2" />
      <div className="orbit-pulse absolute left-1/2 top-1/2 grid size-[118px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ink text-center text-mint-0">
        <span>
          <span className="block font-serif text-[28px] italic leading-none">Q</span>
          <span className="mt-1 block text-[9px] tracking-[0.18em]">QUEEN</span>
        </span>
      </div>
      {orbitNodes.map((node, index) => {
        const angle = (index / orbitNodes.length) * Math.PI * 2 - Math.PI / 2;
        const x = 50 + Math.cos(angle) * 42;
        const y = 50 + Math.sin(angle) * 42;
        return (
          <div
            key={node}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-line bg-white px-2.5 py-1.5 text-center text-[10px] font-medium leading-tight text-ink shadow-soft"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            {node}
          </div>
        );
      })}
    </div>
  );
}
