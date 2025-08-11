import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-ink text-albescent-white-100 flex flex-col items-center">
      {/* Header */}
      <header className="w-full">
        <div className="text-center font-logo bg-blood mt-0 w-full py-8 px-6">
          <h1 className="translate-y-2 text-center text-4xl md:text-6xl lg:text-8xl font-bold tracking-wide">
            SLAKT PÅ ÖLAND MKIII™
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mt-4 px-4">
          <h2 className="text-center text-lg font-hero md:text-2xl lg:text-3xl tracking-widest font-semibold uppercase">
            Ett rollspel om Ölands undergång
          </h2>
        </div>
      </header>

      {/* Hero */}
      <section className="mt-8 px-4 flex flex-col items-center">
        <div>
          <Image
            src="/slakt-pa-oland-mark-iii/hero.png"
            alt="Överlevare i gasmask – stämningsbild för Slakt på Öland Mark III"
            width={1024}
            height={1031}
            priority
          />
        </div>

        {/* Punchy intro */}
        <p className="text-center font-hero mt-8 max-w-2xl text-lg md:text-xl">
          Öland är en ödemark. Maskiner patrullerar ruinerna, Silex-gasen
          muterar överlevare och varje beslut kan bli ditt sista. Är du redo att
          överleva?
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col gap-6 mt-6 max-w-2xl font-hero">
          <div className="flex justify-center">
            <Link
              href="/start"
              className="text-ink font-bold uppercase border border-albescent-white-100 py-3 px-7 bg-albescent-white-100 hover:bg-ink hover transition text-center inline-block"
            >
              Börja här
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/setting"
              className="uppercase border border-albescent-white-100 py-3 px-7 hover:bg-albescent-white-100 hover:text-ink transition text-center flex-1"
            >
              Utforska <br /> världen
            </Link>
            <Link
              href="/characters"
              className="uppercase border border-albescent-white-100 py-3 px-7 hover:bg-albescent-white-100 hover:text-ink transition text-center flex-1"
            >
              Skapa <br /> karaktär
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-10 text-sm text-zinc-500">
        &copy; 2025 drbrago. Slakt på Öland Mark III.
      </footer>
    </main>
  );
}
