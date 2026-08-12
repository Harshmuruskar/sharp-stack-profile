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
        className="h-full w-full scale-125 object-cover opacity-45 blur-[100px] light:opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/25 to-background/60" />
      <div className="absolute -top-[15%] -left-[10%] h-[70vh] w-[65vw] rounded-full aurora-1 opacity-60 blur-[70px]" />
      <div className="absolute top-[35%] -right-[15%] h-[65vh] w-[60vw] rounded-full aurora-2 opacity-55 blur-[70px]" />
      <div className="absolute -bottom-[15%] left-[20%] h-[60vh] w-[55vw] rounded-full aurora-3 opacity-50 blur-[70px]" />
      <div className="noise-overlay absolute inset-0" />
    </div>
  );
}
