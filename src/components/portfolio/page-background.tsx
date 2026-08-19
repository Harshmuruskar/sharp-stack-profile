import heroBgAsset from "@/assets/hero-bg.jpg.asset.json";

/**
 * Page-wide Apple Light ambient background with soft off-white backdrop,
 * pastel radiant glowing light pods, and fine noise overlay.
 */
export function PageBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background transition-colors duration-300">
      {/* Blurred background image base */}
      <img
        src={heroBgAsset.url}
        alt=""
        className="h-full w-full scale-125 object-cover opacity-15 dark:opacity-25 blur-[140px] filter"
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background transition-colors duration-300" />

      {/* Apple Radiant Ambient Orbs */}
      <div className="absolute -top-[20%] left-1/2 h-[750px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,102,204,0.08)_0%,transparent_70%)] blur-[100px]" />
      <div className="absolute top-[35%] -left-[20%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(88,86,214,0.07)_0%,transparent_70%)] blur-[120px]" />
      <div className="absolute top-[65%] -right-[15%] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(52,199,89,0.06)_0%,transparent_70%)] blur-[130px]" />

      {/* Noise filter overlay */}
      <div className="noise-overlay absolute inset-0" />
    </div>
  );
}



