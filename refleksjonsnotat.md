# Refleksjonsnotat – Dyreverden

## Valg og arbeidsprosess

Jeg valgte å lage Dyreverden fordi jeg ønsket å lage en nettside med dyr og natur som tema. Jeg startet med å finne inspirasjon og planlegge hvilke sider og funksjoner nettstedet skulle ha. Målet var å lage en oversiktlig nettside hvor brukeren kunne utforske dyrearter, søke etter dyr og finne mer informasjon på egne detaljsider.

Jeg valgte iNaturalist API fordi det gir tilgang til informasjon og bilder av mange dyrearter. Nettsiden er bygget med Next.js og TypeScript, med gjenbrukbare komponenter som AnimalCard og AnimalGrid. Til designet hentet jeg inspirasjon fra _Ecoflora – Rare Life Exploration Website_ på Dribbble, spesielt fargene, typografien og naturpreget. Jeg tilpasset dette til mitt eget uttrykk.

## Utfordringer og løsninger

En av de største utfordringene var søkefunksjonen. API-et ga ikke alltid relevante resultater, og jeg måtte prøve ulike måter å begrense og sortere søkeresultatene på. Jeg forsøkte også å støtte norske dyrenavn, men løsningen ble ikke pålitelig nok. Derfor beholdt jeg et enklere søk som fungerer best med engelske dyrenavn.

En annen utfordring var at ikke alle dyr har bilder eller fullstendig informasjon. Jeg tilpasset derfor visningen til manglende data og la til feilhåndtering når et dyr ikke finnes, eller data ikke kan hentes.

Mot slutten undersøkte jeg bruksvilkårene til iNaturalist API og oppdaget at bildene har ulike lisenser. Jeg oppdaterte API-funksjonene slik at bilder uten en godkjent lisens ikke vises, og la til fotografkreditering, lisensinformasjon og bildelenke. Jeg laget også en plassholder for dyr uten bilde, slik at designet fortsatt blir ryddig.

Underveis ble CSS-koden uoversiktlig. Jeg brukte derfor CSS Modules for å organisere stylingen og jobbet videre med responsivt design, kontraster og synlig fokus ved tastaturnavigasjon.

## Hva jeg har lært

Jeg har lært mer om å hente og bruke data fra eksterne API-er, dynamiske sider i Next.js, TypeScript og gjenbrukbare komponenter. Arbeidet med bildene lærte meg også at bruk av API-data innebærer å ta hensyn til opphavsrett og lisenser.

Prosjektet har vist meg at det ikke bare handler om å få funksjonaliteten til å virke. Jeg må også tenke på feilhåndtering, brukervennlighet, tilgjengelighet og god organisering av koden.

## Hva jeg ville forbedret videre

Hvis jeg hadde mer tid, ville jeg forbedret søkefunksjonen, spesielt støtte for norske dyrenavn og bedre filtrering. Jeg ville også vurdert å vise flere dyrearter, legge til flere måter å utforske dem på og finjustere enkelte detaljer i designet.
