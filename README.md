# Dyreverden

Dyreverden er et nettsted hvor brukeren kan utforske ulike dyrearter, se bilder og finne informasjon om dyr fra hele verden.

Prosjektet er laget som en del av et skoleprosjekt i Next.js og TypeScript.

## Funksjonalitet

- Utforske en oversikt over ulike dyrearter
- Søke etter dyr
- Åpne en egen detaljside for hvert dyr
- Se informasjon som vitenskapelig navn, dyregruppe, antall observasjoner og bevaringsstatus
- Tilpasset både desktop og mindre skjermer
- Håndtering av dyr som ikke blir funnet

## API

Dyreverden bruker iNaturalist API for å hente informasjon og bilder av dyr.

API-et brukes blant annet til:

- å hente en oversikt over dyrearter
- å søke etter dyr
- å hente informasjon om et bestemt dyr

## Teknologier

Prosjektet er laget med:

- Next.js
- TypeScript
- React
- CSS Modules
- iNaturalist API

## Sider

- `/` – Forside
- `/animals` – Oversikt over dyr
- `/animals/[id]` – Dynamisk detaljside for et dyr
- `/search` – Søkeresultater
- `/about` – Informasjon om Dyreverden

## Tilgjengelighet

Jeg har blant annet jobbet med:

- semantiske HTML-elementer
- alternativ tekst på bilder
- tastaturnavigasjon og synlig fokus
- responsivt design
- tekstlig visning av bevaringsstatus slik at informasjonen ikke er avhengig av farge

## Kjør prosjektet lokalt

Installer dependencies:

```bash
npm install
```
