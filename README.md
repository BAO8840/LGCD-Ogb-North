# Ogbomoso North Local Government website

Static site: HTML, one CSS file and two JS files. No build step.

## Structure
- `index.html`, `education.html`, `research.html`, `workforce.html`, `policies.html`, `ethics.html`, `infrastructure.html`, `reports.html`, `privacy.html`, `404.html`
- `assets/css/styles.css` all styles (responsive)
- `assets/js/main.js` menu, search, forms, tables
- `assets/js/data.js` contact details and lists (schools, projects, vacancies, policies...). Empty lists show a friendly message.

## Run locally
Open `index.html` in a browser, or run `npx serve` in this folder.

## Deploy
1. Create a GitHub repository and push this folder.
2. In Vercel choose Add New Project, import the repository, keep Framework Preset as Other, leave build command empty, deploy.
3. Add your custom domain in Vercel under Settings, Domains (optional).

## Before launch
- Confirm the ward names in `data.js` against the official ward list.
- Confirm the map marker (coordinates in the iframe URL) and working hours.
- Confirm that 115 is the intended emergency number (Nigeria's national emergency number is 112).
- Add official crests and photos (add `<img>` tags with alt text) once approved.
- Confirm wording that describes the council's services with the council.
