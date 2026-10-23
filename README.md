# Dyreverden

Dyreverden er et nettsted hvor brukeren kan utforske ulike dyrearter, se bilder og finne informasjon om dyr fra hele verden.

Prosjektet er laget som en del av et skoleprosjekt i Next.js og TypeScript.

## Målgruppe

Dyreverden er laget for alle som er interessert i dyr og natur. Nettsiden skal være enkel å bruke, også for personer som ikke har mye kunnskap om dyrearter fra før.

## Funksjonalitet

- Utforske en oversikt over ulike dyrearter
- Søke etter dyr
- Åpne en egen detaljside for hvert dyr
- Se informasjon som vitenskapelig navn, dyregruppe, antall observasjoner og bevaringsstatus
- Tilpasset både store og små skjermer
- Håndtering av dyr som ikke blir funnet, og feil ved henting av data

## API

Dyreverden bruker [iNaturalist API](https://api.inaturalist.org/v1/docs/) for å hente informasjon og bilder av dyr.

API-et brukes blant annet til:

- Å hente en oversikt over dyrearter
- Å søke etter dyr
- Å hente informasjon om et bestemt dyr ved hjelp av ID

Det kreves ingen egen API-nøkkel for forespørslene som brukes i prosjektet.

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
- `/search?q=...` – Søkeresultater
- `/about` – Informasjon om Dyreverden

## Tilgjengelighet

Jeg har blant annet jobbet med:

- Semantiske HTML-elementer
- Alternativ tekst på bilder
- Tastaturnavigasjon og synlig fokus
- Responsivt design
- Tekstlig visning av bevaringsstatus slik at informasjonen ikke er avhengig av farge

## Kjør prosjektet lokalt

Du trenger Node.js og npm installert.

1. Installer avhengighetene:

   ```bash
   npm install
   ```

2. Start utviklingsserveren:

   ```bash
   npm run dev
   ```

3. Åpne [http://localhost:3000](http://localhost:3000) i nettleseren.

For å kontrollere at prosjektet kan bygges, kjør:

```bash
npm run build
```

## Kjente begrensninger

- Søket fungerer best med engelske dyrenavn, fordi informasjonen hentes fra iNaturalist API.
- Dyreoversikten viser et begrenset antall dyrearter, ikke alle artene som finnes i API-et.
- Noen dyr mangler bilder eller informasjon om bevaringsstatus.
- Nettsiden er avhengig av at iNaturalist API er tilgjengelig for å hente dyreinformasjon. Nettsteder har også begrensninger for antall forespørsler.
