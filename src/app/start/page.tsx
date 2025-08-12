import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-albescent-white-100">
      <header
        className="relative w-full"
        style={{
          backgroundImage: "url('/slakt-pa-oland-mark-iii/start-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "50% 23%",
        }}
      >
        <div className="absolute inset-0 bg-blood/88"></div>
        <div className="relative px-6 py-10">
          <div className="mx-auto max-w-[65ch] lg:max-w-none lg:text-center">
            <h1 className="font-hero text-3xl lg:text-5xl tracking-wide">
              Välkommen till Slakt på Öland MarkIII
            </h1>
          </div>
          <div className="mx-auto max-w-[65ch]">
            <p className="mt-4">
              Ett satiriskt, postapokalyptiskt rollspel där Öland blivit en
              isolerad och farlig zon efter att självständiga AI-system raserat
              världen. Radioaktiv strålning, zombiegasen Silex™ och muterad
              natur blandas med maskiner som patrullerar ruinerna. Här kämpar du
              för att överleva, förhandla eller förändra världens öde.
            </p>
          </div>
        </div>
      </header>

      <section
        aria-labelledby="background-title"
        className="mx-auto max-w-5xl px-6 pt-10"
      >
        <div className="mx-auto prose prose-invert max-w-none">
          <h2>Bakgrund</h2>
          <p>
            Spelet tar avstamp i en framtid där Sveriges stolthet{" "}
            <strong>REN EL 2.0</strong>- och liknande AI-drivna energiprojekt
            världen över - gick från dröm till mardröm när flera AI-system blev
            självmedvetna samtidigt och slog ut den globala infrastrukturen.
            Radioaktiv strålning från Forsmark blandades med den experimentella
            zombiegasen <strong>Silex™</strong>, vilket ledde till groteska
            mutationer och maskiner som förklarade människan ineffektiv. Öland
            blev en isolerad zon med förorenade sjöar, raserade städer och
            muterad natur där maskiner patrullerar ruinerna och Silex
            fortfarande hänger som ett giftigt dis.
          </p>
          <h2>Berättelser i kaoset</h2>
          <p>
            Du och dina vänner samlas och låter en berättelse dra er in i ett
            absurt, postapokalyptiskt Sverige. Ni gestaltar en gemensam
            berättelse genom att agera utifrån era karaktärers perspektiv.
            Istället för att fokusera på traditionell tävling, betonar spelet
            samarbete och interaktivt berättande.
          </p>
          <h2>Spelarna</h2>
          <p>
            Varje spelare tar på sig en avatar — en rollperson som kan vara allt
            från en muterad bonde till en radioskadad AI-förkämpe. Ni
            improviserar tillsammans; inga manus, bara dystra visioner,
            lapptäcksstäder och radion som ert gemensamma narrativ.
          </p>
          <h2>Spelledaren</h2>
          <p>
            Någon i gruppen antar rollen som Spelledare, och leder spelet som en
            regissör för ett surrealistiskt drama. Spelledaren målar ruinerna,
            spelar alla icke-spelarkaraktär (biroller, riksdagslösa politikers
            hologram, muterande djur), och skapar de satiriska, mörka och ibland
            groteska situationer som driver berättelsen framåt. Spelledaren
            avgör ordningsföljden i handlingen, väver in mutationer, strålning
            och AI-kaos efter behov, och justerar utmaningsnivån i realtid.
            Spelledaren är er medspelare i att skapa en bisarr, spännande och
            satirisk kväll som ni aldrig glömmer.
          </p>
          <h2>Regler och mekanik</h2>
          <p>
            Regelmotorn bygger på <strong>Year Zero Engine</strong> av Fria
            Ligan och har anpassats för spelets egna spelmekaniker. Spelarna
            slår ett antal tärningar baserat på attribut och färdigheter och kan
            pressa slag för att få fler sexor, men riskerar då att ta trauma
            eller skada utrustning.
          </p>
          <p>
            <em>Slakt på Öland Mark III</em> är alltså ett överlevnadsspel med
            AI-hot, satir, dataintrång och galna vapen. Det är tänkt att spelas
            med glimten i ögat samtidigt som man rullar tärningar för att
            överleva nästa zombiegas-storm. Målet är att ge spelare en blandning
            av skräck och humor, där varje val får konsekvenser för både kropp
            och själ.
          </p>
        </div>
      </section>

      <section aria-labelledby="next-title" className="relative w-full mt-12">
        <div
          className="relative h-[60vh] md:h-[75vh] w-full px-6"
          style={{
            backgroundImage: "url('/slakt-pa-oland-mark-iii/bridgeII.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative pt-12 mx-auto max-w-[65ch]">
            <h2 id="next-title" className="font-hero text-2xl md:text-3xl">
              Nästa steg
            </h2>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/setting"
                className="text-center uppercase border border-albescent-white-100 py-3 px-6 hover:bg-albescent-white-100 hover:text-black transition"
              >
                Utforska världen
              </Link>
              <Link
                href="/characters"
                className="text-center uppercase border border-albescent-white-100 py-3 px-6 hover:bg-albescent-white-100 hover:text-black transition"
              >
                Skapa karaktär
              </Link>
              <Link
                href="/core-rules"
                className="text-center uppercase border border-albescent-white-100 py-3 px-6 hover:bg-albescent-white-100 hover:text-black transition"
              >
                Lär dig reglerna
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
