import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center">
      {/* Red Header Bar */}
      <div className="text-center font-logo bg-blood mt-8 w-full py-8 px-6">
        <h1 className="translate-y-2 text-center text-wheat text-4xl md:text-6xl lg:text-8xl font-bold tracking-wide">
          SLAKT PÅ ÖLAND MK3™
        </h1>
      </div>

      {/* Subtitle */}
      <div className="mt-6 px-4">
        <h2 className="text-center text-xl text-wheat font-hero md:text-2xl lg:text-4xl tracking-widest font-semibold uppercase">
          Ett rollspel om Ölands undergång
        </h2>
      </div>

      {/* Hero Graphic */}
      <div className="mt-12">
        <Image
          src="/slakt-pa-oland-mark-iii/hero.png" // Replace with your real image path
          alt="Silhouetted soldier or Öland survivor"
          width={1024}
          height={1031}
        />
      </div>

      {/* Introduction */}
      <div className="mt-12 px-4 max-w-2xl text-center">
        <p className="text-wheat text-lg font-hero mb-4">
          Slakt på Öland Mark III™ är ett rollspel som tar dig med på en resa
          genom en postapokalyptisk värld där Öland har förvandlats till en
          ödemark. Utforska ruinerna av det förflutna, möt farliga fiender och
          kämpa för överlevnad i en värld där varje beslut räknas.
        </p>
      </div>

      {/* Navigation / CTA */}
      <div className="text-wheat mt-12 flex flex-col md:flex-row gap-4 text-center">
        <Link
          href="/codex/setting"
          className="uppercase border border-wheat py-2 px-6 hover:bg-wheat hover:text-black transition"
        >
          Utforska Världen
        </Link>
        <Link
          href="/codex/rules"
          className="uppercase border border-wheat py-2 px-6 hover:bg-wheat hover:text-black transition"
        >
          Läs Reglerna
        </Link>
        <Link
          href="/codex/characters"
          className="uppercase border border-wheat py-2 px-6 hover:bg-wheat hover:text-black transition"
        >
          Skapa Karaktär
        </Link>
        <Link
          href="/codex/slaktsystem"
          className="uppercase border border-wheat py-2 px-6 hover:bg-wheat hover:text-black transition"
        >
          Slaktsystem
        </Link>
      </div>

      {/* Footer */}
      <footer className="mt-auto py-6 text-sm text-zinc-500">
        &copy; 2025 drbrago. Slakt på Öland Mark III.
      </footer>
    </main>
  );
}
