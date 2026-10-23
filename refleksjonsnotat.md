# Refleksjonsnotat – Dyreverden

## Valg og arbeidsprosess

Jeg valgte å lage Dyreverden fordi jeg ønsket å lage en nettside med dyr og natur som tema. Jeg startet med å finne inspirasjon og planlegge hvilke sider og funksjoner nettstedet skulle ha. Målet var å lage en oversiktlig nettside hvor brukeren kunne utforske dyrearter, søke etter dyr og finne mer informasjon på egne detaljsider.

Jeg valgte iNaturalist API fordi det gir tilgang til informasjon og bilder av mange ulike dyrearter. Nettsiden er bygget med Next.js og TypeScript, og jeg har brukt gjenbrukbare komponenter som AnimalCard og AnimalGrid. Til designet hentet jeg inspirasjon fra _Ecoflora – Rare Life Exploration Website_ på Dribbble, spesielt naturpreget, fargene og typografien. Jeg tilpasset dette til mitt eget uttrykk.

## Utfordringer og løsninger

En av de største utfordringene var søkefunksjonen. API-et ga ikke alltid relevante resultater, og jeg måtte prøve ulike måter å begrense og sortere søkeresultatene på. Jeg forsøkte også å få søket til å fungere bedre med norske dyrenavn, men løsningen ble ikke pålitelig nok. Derfor valgte jeg å beholde et enklere søk som fungerer best med engelske dyrenavn.

En annen utfordring var at ikke alle dyr har bilder eller fullstendig informasjon i API-et. Jeg måtte derfor tilpasse visningen slik at sidene også fungerer når enkelte opplysninger mangler. Jeg har også lagt til feilhåndtering for situasjoner der et dyr ikke finnes, eller data ikke kan hentes.

Underveis ble CSS-koden uoversiktlig. Jeg løste dette ved å bruke CSS Modules for å samle stylingen til de ulike sidene og komponentene. Jeg jobbet også med responsivt design, kontraster og synlig fokus for tastaturnavigasjon.

## Hva jeg har lært

Jeg har lært mer om hvordan man henter og bruker data fra et eksternt API, og hvor viktig det er å forstå hvordan dataene er strukturert. Jeg har også fått bedre forståelse for dynamiske sider i Next.js, TypeScript og hvordan komponenter kan gjenbrukes flere steder på nettsiden.

Prosjektet har vist meg at det ikke bare handler om å få funksjonaliteten til å virke. Jeg må også tenke på feilhåndtering, brukervennlighet, tilgjengelighet og hvordan koden organiseres.

## Hva jeg ville forbedret videre

Hvis jeg hadde mer tid, ville jeg jobbet videre med søkefunksjonen, spesielt støtte for norske dyrenavn og bedre filtrering. Jeg ville også vurdert å vise flere dyrearter og legge til flere muligheter for å utforske dem. I tillegg kunne jeg finjustert enkelte detaljer i designet.
