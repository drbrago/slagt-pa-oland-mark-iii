import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MainContent } from "@/components/MainContent";

export default function Page() {
  return (
    <>
      <Header header="Välkommen till Slakt på Öland MarkIII">
        <p>
          Ett satiriskt, postapokalyptiskt rollspel där Öland blivit en isolerad
          och farlig zon efter att självständiga AI-system raserat världen.
          Radioaktiv strålning, zombiegasen Silex™ och muterad natur blandas med
          maskiner som patrullerar ruinerna. Här kämpar du för att överleva,
          förhandla eller förändra världens öde.
        </p>
      </Header>
      <MainContent>
        <h2>Berättelser i kaoset</h2>
        <p>
          Du och dina vänner samlas och låter en berättelse dra er in i ett
          absurt, postapokalyptiskt Sverige. Ni gestaltar en gemensam berättelse
          genom att agera utifrån era karaktärers perspektiv. Istället för att
          fokusera på traditionell tävling, betonar spelet samarbete och
          interaktivt berättande.
        </p>
        <h2>Spelarna</h2>
        <p>
          Varje spelare tar på sig en avatar — en rollperson som kan vara allt
          från en muterad bonde till en radioskadad AI-förkämpe. Ni improviserar
          tillsammans; inga manus, bara dystra visioner, lapptäcksstäder och
          radion som ert gemensamma narrativ.
        </p>
        <h2>Spelledaren</h2>
        <p>
          Någon i gruppen antar rollen som Spelledare, och leder spelet som en
          regissör för ett surrealistiskt drama. Spelledaren målar ruinerna,
          spelar alla icke-spelarkaraktär (biroller, riksdagslösa politikers
          hologram, muterande djur), och skapar de satiriska, mörka och ibland
          groteska situationer som driver berättelsen framåt. Spelledaren avgör
          ordningsföljden i handlingen, väver in mutationer, strålning och
          AI-kaos efter behov, och justerar utmaningsnivån i realtid.
          Spelledaren är er medspelare i att skapa en bisarr, spännande och
          satirisk kväll som ni aldrig glömmer.
        </p>
        <h2>Regler och mekanik</h2>
        <p>
          Regelmotorn bygger på <strong>Year Zero Engine</strong> av Fria Ligan
          och har anpassats för spelets egna spelmekaniker. Spelarna slår ett
          antal tärningar baserat på attribut och färdigheter och kan pressa
          slag för att få fler sexor, men riskerar då att ta trauma eller skada
          utrustning.
        </p>
        <p>
          <em>Slakt på Öland Mark III</em> är alltså ett överlevnadsspel med
          AI-hot, satir, dataintrång och galna vapen. Det är tänkt att spelas
          med glimten i ögat samtidigt som man rullar tärningar för att överleva
          nästa zombiegas-storm. Målet är att ge spelare en blandning av skräck
          och humor, där varje val får konsekvenser för både kropp och själ.
        </p>
      </MainContent>
      <Footer>
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
      </Footer>
    </>
  );
}
