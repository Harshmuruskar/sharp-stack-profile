import heroBgAsset from "@/assets/hero-bg.jpg.asset.json";

/**
 * Fixed, page-wide ambient background: blurred imagery + colour orbs.
 * Every surface above it uses frosted-glass panels.
 */
export function PageBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <img
        src={heroBgAsset.url}
        alt=""
        className="h-full w-full scale-125 object-cover opacity-40 blur-[110px] light:opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/85" />
      <div className="absolute -top-[15%] -left-[10%] h-[55vh] w-[55vw] rounded-full bg-primary/10 blur-[140px]" />
      <div className="absolute top-[35%] -right-[15%] h-[50vh] w-[50vw] rounded-full bg-primary/8 blur-[150px]" />
      <div className="absolute -bottom-[15%] left-[20%] h-[45vh] w-[45vw] rounded-full bg-primary/6 blur-[150px]" />
      <div className="noise-overlay absolute inset-0" />
    </div>
  );
}
