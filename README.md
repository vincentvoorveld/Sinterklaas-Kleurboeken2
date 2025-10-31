# Sinterklaas Kleurboeken

Een responsieve, statische landingspagina voor Sinterklaas kleurboeken. Deze website is gebouwd met pure HTML, CSS en JavaScript en is geschikt voor deployment op GitHub Pages.

## Over dit Project

Deze website promoot een collectie van vijf Sinterklaas kleurboeken voor verschillende leeftijdsgroepen, verkrijgbaar via Amazon.

## Kenmerken

- 🎨 Volledig responsive design (mobiel, tablet, desktop)
- 🎄 Sinterklaas-thema met traditionele kleuren (donkerrood en goud)
- 📚 Dynamische weergave van 5 kleurboeken via JavaScript
- 🖼️ Voorbeeldgalerij van kleurplaten
- 📱 Mobile-first aanpak
- ⚡ Geen dependencies - pure HTML, CSS en JavaScript

## Bestandsstructuur

```
├── index.html      # Hoofdpagina met navigatie, hero, boeken, voorbeelden en footer
├── style.css       # Alle styling met Sinterklaas kleuren
├── script.js       # Dynamische rendering van boekenkaarten
└── README.md       # Deze documentatie
```

## Lokaal Testen

Open `index.html` direct in een browser, of start een lokale webserver:

```bash
# Met Python 3
python3 -m http.server 5000

# Met Node.js
npx http-server -p 5000
```

Bezoek daarna `http://localhost:5000`

## Deployen naar GitHub Pages

1. **Push deze bestanden naar een GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Sinterklaas landing page"
   git remote add origin https://github.com/USERNAME/REPOSITORY.git
   git push -u origin main
   ```

2. **Activeer GitHub Pages:**
   - Ga naar je repository op GitHub
   - Klik op **Settings**
   - Scroll naar **Pages** in het linkermenu
   - Bij **Source**, selecteer **main** branch
   - Klik op **Save**

3. **Je website is nu live op:**
   ```
   https://USERNAME.github.io/REPOSITORY/
   ```

## Aanpassingen Maken

### Boeken toevoegen of wijzigen

Bewerk het `books` array in `script.js`:

```javascript
const books = [
    {
        title: "Boektitel",
        targetAge: "leeftijdsgroep",
        description: "Korte beschrijving",
        cover: "https://link-naar-afbeelding.jpg",
        link: "https://amazon.nl/link"
    },
    // Voeg meer boeken toe...
];
```

### Kleuren aanpassen

Bewerk de CSS variabelen in `style.css`:

```css
:root {
    --dark-red: #8B0000;
    --gold: #F4C430;
    --white: #FFFFFF;
    --light-bg: #FFF8F0;
}
```

### Amazon links toevoegen

Vervang `#` met echte Amazon links in het `books` array in `script.js`.

## Browser Ondersteuning

- Chrome (laatste 2 versies)
- Firefox (laatste 2 versies)
- Safari (laatste 2 versies)
- Edge (laatste 2 versies)
- Mobiele browsers (iOS Safari, Chrome Mobile)

## Licentie

Dit is een onofficiële Sinterklaas-pagina voor educatieve doeleinden.

© 2025 Sinterklaas Kleurboeken – Verkrijgbaar via Amazon
