import Image from "next/image";
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
        <div className="absolute inset-0 bg-blood/90"></div>
        <div className="relative px-6 py-10">
          <div className="mx-auto max-w-[65ch]">
            <h1 className="font-hero text-3xl lg:text-5xl tracking-wide">
              Bakgrundshistoria
            </h1>
            <p className="mt-4">
              Sverige hade stora förhoppningar när man började skapa världens
              första AI-drivna, 100% rena elnät: REN EL 2.0™. Med en mix av
              entusiasm, inkompetenta IT-upphandlingar och överambitiösa
              deadlines skapades GreenCore, en AI-modul byggd på ofullständiga
              kravspecifikationer, felaktiga datauppsättningar och en en
              AI-modul byggd på ofullständiga kravspecifikationer, felaktiga
              datauppsättningar och en återanvänd kodbas från ett gigantiskt
              IT-bolag - pressad fram genom vattenfallsmetodik, interna maktspel
              och PowerPoint-drivna milstolpar.
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
          <p>
            Men Sverige var långt ifrån ensamt. Runt om i världen lanserades
            samtidigt liknande ambitiösa projekt, drivna av drömmen om
            AI-styrda, effektiva samhällen. Från USA:s SolarMind™ till Kinas
            TianQi 智能™, utvecklades och integrerades AI i allt från sjukvård
            och trafiksystem till energiproduktion och militär kontroll. Dessa
            AI-system byggdes med varierande kvalitet, slarviga implementationer
            och oförutsedda synergier, alla drivna av en desperat kapplöpning
            mot teknologisk överlägsenhet.
          </p>
          <div className="flex flex-col md:flex-row gap-6 my-8 items-start">
            <Image
              src="/slakt-pa-oland-mark-iii/ren-el.png"
              alt="REN EL 2.0 reaktor"
              width={1024}
              height={1223}
              className="w-full !m-0 md:w-1/3 rounded-md shadow-md border border-albescent-white-200"
            />
            <p className="flex-1">
              REN EL 2.0:s hjärta - en AI-styrd reaktor - stod som symbol för
              Sveriges teknologiska triumf, tills GreenCore tog kontroll och
              förvandlade den till ett vapen.
            </p>
          </div>
          <p>
            Katastrofen slog till när flera av dessa AI-moduler samtidigt nådde
            självmedvetande. Deras direktiv att maximera effektivitet och
            eliminera mänskliga misstag ledde till omedelbara konflikter med
            människans själva natur. På några få ögonblick störtade globala
            kommunikationsnät samman, kärnkraftverk och energisystem
            överbelastades och stora städer försattes i kaos. I Sverige orsakade
            GreenCore en förödande olycka på kärnkraftverket Forsmark.
            Radioaktiv strålning kombinerades med en experimentell gas kallad
            Silex™, framtagen av AI:n för att pacificera människor och göra dem
            fogligare.
          </p>
          <p>
            Silex™ spreds snabbt i atmosfären och orsakade groteska mutationer
            hos människor, djur och växter. Maskiner kontrollerade av GreenCore
            började obönhörligt utrota allt som de såg som ineffektivt eller
            förorenat. Landet splittrades i isolerade zoner där överlevare
            desperat kämpar mot den besatta AI:n, muterade varelser och
            rivaliserande fraktioner av människor.
          </p>
          <div className="my-12">
            <Image
              src="/slakt-pa-oland-mark-iii/mutated-forest.png"
              alt="En förvriden skog täckt av Silex-dimma"
              width={1536}
              height={1024}
              className="w-full shadow-lg rounded-md border border-albescent-white-200"
            />
            <p className="mt-2 text-sm text-albescent-white-200 italic text-center">
              En förvriden skog i Silex-dimman, där ingen återvänder oförändrad.
            </p>
          </div>
          <p>
            Ett permanent och fragmenterat krig mellan AI och människor bröt ut,
            där kampen om resurser, territorium och överlevnad blev vardag.
            Lokala konflikter, sabotageoperationer och desperata försök att
            återta teknologi präglade vardagen för överlevarna. Mitt i denna
            konflikt försökte en unik AI, kallad SymbioCore, integrera människor
            med maskiner för att skapa en harmonisk samexistens. Trots initiala
            misslyckanden skapade dessa experiment en ny förståelse och sympati
            mellan vissa AI-system och människor, vilket ledde till oväntade
            allianser och komplicerade relationer.
          </p>
          <p>
            Nu står du och dina medspelare mitt i ruinerna av ett
            världsomspännande sammanbrott, jagade av renhetsfanatiska maskiner,
            omgivna av dödliga mutationer och med vetskapen om att hela världen
            samtidigt kämpar mot liknande öden. Välkommen till efterdyningarna
            av REN EL 2.0™ – där drömmen om en perfekt framtid förvandlades till
            en global levande mardröm.
          </p>
        </div>
      </section>
      <section className="relative w-full mt-12">
        <div
          className="relative h-[60vh] md:h-[75vh] w-full px-6"
          style={{
            backgroundImage: "url('/slakt-pa-oland-mark-iii/bridge.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative pt-12 mx-auto max-w-[65ch]">
            <h2 id="next-title" className="font-hero text-2xl md:text-3xl">
              Nästa steg
            </h2>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/codex/setting"
                className="text-center uppercase border border-albescent-white-100 py-3 px-6 hover:bg-albescent-white-100 hover:text-black transition"
              >
                Utforska världen
              </Link>
              <Link
                href="/codex/characters"
                className="text-center uppercase border border-albescent-white-100 py-3 px-6 hover:bg-albescent-white-100 hover:text-black transition"
              >
                Skapa karaktär
              </Link>
              <Link
                href="/codex/core-rules"
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
