# Refleksjonsnotat – Dyreverden

## Prosessen så langt

Jeg startet prosjektet med å se på ulike nettsider og design for å finne inspirasjon. Jeg visste at jeg ønsket å lage noe med dyr og natur, og brukte derfor litt tid på å finne ut hvilket uttrykk nettsiden kunne ha.

Etter dette begynte jeg å idémyldre rundt Dyreverden og planlegge hvordan nettsiden skulle bygges opp. Jeg så for meg en forside, en side hvor man kunne utforske dyr, egne detaljsider for hvert dyr, søk og en Om-side. Deretter begynte jeg å utvikle selve nettsiden.

Jeg valgte iNaturalist API for å hente informasjon og bilder av dyr. Jeg startet med grunnstrukturen og bygget deretter dyreoversikten, dynamiske detaljsider og søk. Jeg laget også gjenbrukbare komponenter som AnimalCard og AnimalGrid.

En utfordring underveis var søkefunksjonen. De første API-søkene ga en del irrelevante resultater. Jeg endret derfor søket til å bruke autocomplete og begrenset resultatene til Animalia. Jeg måtte også ta hensyn til at ikke alle dyr har all informasjon tilgjengelig.

Da hovedfunksjonaliteten var på plass, gikk jeg tilbake til designet. Etter å ha sett på flere referanser valgte jeg Ecoflora – Rare Life Exploration Website fra Dribbble som hovedinspirasjon. Jeg likte spesielt den mørke bakgrunnen, grønne aksentfargen, store naturbildene og serif-typografien. Jeg har brukt dette som inspirasjon, men tilpasset uttrykket til Dyreverden.

Jeg har også begynt å gjøre nettsiden responsiv slik at den fungerer på mindre skjermer. Foreløpig har jeg prioritert å få hele nettsiden til å fungere og ha et helhetlig uttrykk. Design og responsivitet kan finjusteres videre før innlevering.

## Dette har jeg lært så langt

Jeg har lært mye av å jobbe med iNaturalist API-et. Før prosjektet så jeg for meg at det hovedsakelig handlet om å hente data og vise dem på nettsiden, men jeg oppdaget at det ikke alltid var så enkelt. Jeg måtte undersøke hvordan dataene var strukturert, hvilke felter jeg kunne bruke og hva som skjedde når informasjon manglet.

Søk og sortering av data var også mer utfordrende enn jeg først hadde tenkt. De første søkene ga ikke alltid relevante resultater, så jeg måtte prøve forskjellige måter å søke på og begrense resultatene til dyr. Dette gjorde at jeg fikk en bedre forståelse av hvordan valg av endepunkt og parametere påvirker dataene man får tilbake fra et API.

Jeg har også lært mer om refaktorering. I starten lå mer av koden samlet, men etter at funksjonaliteten fungerte delte jeg den opp i blant annet AnimalCard og AnimalGrid. Da så jeg tydeligere hvorfor gjenbrukbare komponenter er nyttige, siden de samme komponentene senere kunne brukes både på dyreoversikten og i søkeresultatene.
