# Skapa och spela på en digital karta

När du väljer matrix‑run‑varianten av dataintrång representeras nätverket som en karta av **noder** förbundna med **länkar**. Spelledaren kan rita kartan på ett papper, i ett virtuellt tabletop‑program eller beskriva den muntligt. Varje nod motsvarar en funktion i systemet – en serverhall, ett datalager, en drönardocka eller en AI:s medvetande – och har en säkerhetsnivå som påverkar svårighetsgraden. Nedan finns riktlinjer för att skapa och använda kartan.

## Bygga en karta

1. **Bestäm syfte:** Vad vill hackaren uppnå? Ett specifikt mål ger en tydlig slutnod (t.ex. “stäng av övervakningskamerorna”). Den noden placeras långt inne i kartan med skyddande noder mellan.  
2. **Skapa startnod:** Placera en **Ingångsnod** där hackaren ansluter. Den har ofta låg säkerhet men kan innehålla passiva sensorer som startar Trace om hackaren stannar länge.  
3. **Lägg till noder:** Mellan start och mål läggs **säkerhetsnoder** (brandväggar, ICE‑hubbar), **databaser**, **kontrollnoder** (som styr fysiska system) och eventuellt en **SysOp‑nod** där AI:n bor. Antalet beror på hur lång scen du vill spela – 4–7 noder räcker ofta för en spännande matrix‑run.  
4. **Bestäm länkar:** Dra linjer mellan noderna för att visa hur de är kopplade. Några noder kan ha flera vägar; andra är flaskhalsar. Varje flytt mellan noder är en manöver.  
5. **Sätt säkerhetsnivåer:** Tilldela varje nod en modifiering från tabellen trivial (+3) till formidabel (−3). Detta modifierar slaget i **Systemintrång**. Du kan också lägga till ytterligare modifieringar för aktiv ICE (−1 per aktiv enhet).

Ett enkelt exempel på en karta:
[Ingång] – [Firewall] – [Kontroll] – [Mål] – [Databank] – [SysOp]

Varje rektangel är en nod, och pilarna visar länkar. Hackaren kan välja att ta vägen via Databank för att kanske hitta en bakdörr till Mål‑noden.

## Spela på kartan

* **Turordning:** På en matrix‑run kan du spela som i en strid. Varje tur kan hackaren utföra en **handling** (t.ex. Systemintrång, Kodbrytning, Elektronisk strid eller Riggning) och en **manöver** (t.ex. flytta till nästa nod, aktivera ett program eller söka efter en bakdörr).  
* **Flytta:** Att förflytta sig från en nod till en angränsande nod är en manöver. Du gör inget slag om det inte finns aktivt skydd; men vissa länkar är skyddade av **ICE** eller brandväggar som kräver **Systemintrång**‑slag.  
* **Handlingar i noder:** När du befinner dig i en nod kan du ta dig in i dess funktion. I en Kontrollnod gör du ett **Riggning**‑slag för att ta över en robot; i en Databank gör du ett **Kodbrytning**‑slag för att dekryptera data; i en SysOp‑nod kan du slå ett socialt slag (t.ex. Manipulera) för att övertyga AI:n att släppa dig.  
* **Aktiva hot:** ICE och Trace fungerar som fientliga varelser. De agerar i slutet av varje runda eller enligt spelledarens gottfinnande. Vita ICE övervakar och kan ge –1 på dina slag eller starta Trace; grå ICE attackerar ditt cyberdeck och kan minska din gear‑bonus; svarta ICE kan ge trauma till Skärpa eller Känsla.  
* **SysOp:** Systemoperatören kan flytta runt i kartan, aktivera nya ICE eller stänga noder när den anar intrång. Den kan också förhandla och ge uppdrag – vissa AI:er drivs av nostalgi efter bankbonusprogram och går att muta med digitala memer.

## Särskilda miljöer

I Mark III är Ö‑nätet inte bara kod; det är en surrealistisk skärmsläckare av det förflutna. När du designar en karta kan du lägga till särskilda miljöer som påverkar spelupplevelsen:

* **AI‑minnespalats:** En nod där AI:n har lagrat nostalgiska bilder av mellanstadiets skolmatsal från 1990‑talet. Här kan hackaren få +1 på sociala slag mot SysOp om hen påminner AI:n om “pannkaksfredag”.  
* **Reklamlabyrint:** En serie noder fyllda med gamla reklamslogans och pop‑ups. Varje förflyttning ger –1 på nästa slag tills hackaren förstör en reklamsändare.  
* **Röda rummet:** Ett farligt utrymme där svart ICE flödar. Att gå genom kräver ett Elektronisk strid‑slag; misslyckande ger omedelbart trauma (två punkter på Skärpa).  
* **Byråkratiskt arkiv:** Här pratar du med en AI‑variant av en myndighetstjänsteman som kräver att du fyller i blanketter. Om du tar dig tid (en extra runda) kan du få information som ger +1 på nästa Kodbrytning.

## Balans och tempo

En matrix‑run ska inte ta över hela spelpasset men erbjuda en dramatiskt höjdpunkt. En lagom lång karta (4–7 noder) med varierade hot och belöningar ger spänning. Kom ihåg att även vid misslyckanden bör historien drivas framåt – aktivera larm, skick in drönare, och låt hackaren välja om hen vill fly eller stanna.