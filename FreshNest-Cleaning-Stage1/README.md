# FreshNest Cleaning — stage one

A fictional, mobile-friendly cleaning company website for a staged learning project. No real customers, bookings, messages, payments or client systems.

## Run and edit

This is a buildless static website. Serve the `dist` directory with any static web server. Edit `dist/index.html` for content, `dist/styles.css` for appearance and `dist/app.js` for browser interactions. No package installation or build step is needed.

## Working in stage one

- One page with hero, home and office services, how it works, fictional ZAR pricing and a quote section.
- Navigation and quote buttons link to page sections. Service-specific buttons preselect a cleaning service.
- A small-screen menu supports opening, closing, Escape and link selection.
- Practice fields check required values, email format, whole-number property size and a date that is not in the past.
- “Preview my details” displays an on-page practice summary. Typed content is treated as text.
- Accessible labels, skip link, focus indicators and reduced-motion support.

## Still to build

The form sends no network requests and writes no browser or server storage. Prices are static examples. There is no price calculator, request reference, date reservation, CRM, authentication, email, payment or real enquiry submission.

Stage two can calculate an estimate, validate on a server, save a request and return its reference. Stage three can let staff view and update that same saved record. A shared server-side requests table will keep the website and CRM consistent; that connection has not been implemented in stage one.

## Visual asset

The hero image is an AI-generated illustration of a fictional interior, not a customer photo. Generated using the built-in image-generation tool and stored at `dist/assets/fresh-space.png`.

Image prompt: “A beautifully clean, modest modern living room in warm daylight, soft sage-green linen sofa at left, one white cushion, low pale oak coffee table with a small unbranded ceramic vase, leafy indoor plant to the right, white plaster walls, window light through linen curtains, natural calm lived-in atmosphere. Architectural editorial photography, eye-level, landscape 3:2 framing, soft sage, warm white and charcoal palette, realistic material texture, refined but welcoming. No people, no text, no logos, no badges, no watermark. Image fills the frame, no border.”

## Verification

- JavaScript syntax check: passed with `node --check dist/app.js`.
- Static checks: all 14 internal links resolve; all four local assets exist; unique element IDs; one main heading; all five fields have labels.
- Browser checks: desktop at 1348 px, phone layouts at 320 and 390 px, and tablet at 768 px fit without horizontal overflow.
- Interactions: empty fields prevent a practice preview; service links select the correct service; fictional valid details show an honest preview; mobile menu opens and closes on navigation; a fresh visit shows empty fields.
- No application warnings or errors were observed in the browser console. No transmission or browser persistence APIs are present in the application script.
- Responsive QA used temporary static iframe fixtures, removed before publication. This is not a real-device or automated accessibility audit.

The design-review screenshot is not required to run the website and is omitted from this source export.


## Downloaded project structure

The original `dist/` structure is preserved. In this project, `dist/` contains
hand-written website source files; it is not a generated build that needs npm.

- `README.md` — setup, features, limitations and verification notes.
- `dist/index.html` — the complete one-page website and inline SVG icons.
- `dist/styles.css` — all styling, responsive layouts and reduced-motion rules.
- `dist/app.js` — navigation, mobile menu, service selection, field validation and practice preview.
- `dist/assets/favicon.svg` — the local browser icon.
- `dist/assets/fresh-space.png` — the local hero image.

## Run locally on Windows

1. Extract `FreshNest-Cleaning-Stage1.zip` completely before opening the website.
2. Open `FreshNest-Cleaning-Stage1/dist/index.html` in a current Chrome, Edge or Firefox browser.
3. Use fictional contact details to test the practice form. No request is sent or saved.

No internet connection, private preview access, package installation, build step,
API key or database is required. All runtime resources use relative local paths;
fonts use the browser's system fonts. JavaScript must be enabled for the mobile
menu, service preselection, validation feedback and practice-details preview.

You can also use your existing XAMPP installation:

1. Copy the extracted `FreshNest-Cleaning-Stage1` folder into `C:/xampp/htdocs/`.
2. Start Apache in the XAMPP Control Panel. MySQL is not needed.
3. Open `http://localhost/FreshNest-Cleaning-Stage1/dist/`.

An optional alternative, if Python is already installed, is to open a terminal
inside `FreshNest-Cleaning-Stage1` and run:

```sh
python -m http.server 8000 --bind 127.0.0.1 --directory dist
```

Then open `http://127.0.0.1:8000/`. Press Ctrl+C to stop the server.
Do not install Python solely to run this website; opening `dist/index.html`
or using XAMPP is sufficient.

## Export provenance and scope

The website files are copied without modification from the existing Stage 1
source, commit `13eabee756df3c6bce6b562d530788511eef86d0`.
Only this README has additional local setup and export instructions.
The archive excludes Git history, hosting configuration, source credentials,
internal review fixtures, screenshots and temporary files.
No Stage 2 features or external integrations have been added.

The mobile menu and responsive layouts are tested in browser-sized frames,
not a physical-device lab. Direct local-file use is supported by the relative,
classic-script implementation; current browser security settings must allow
local JavaScript and images. The export is also checked over a local static
server. No live preview URL is required.


## ZIP export validation

The export was checked again using a local static server before packaging:

- The bundled hero image loaded at desktop, phone and tablet sizes.
- Navigation targets and all inline SVG icon references resolve.
- Home and office service links select the corresponding service.
- Zero property size, past date and invalid email prevent a practice preview.
- Valid fictional details show the labelled practice summary; the URL contains no form values.
- A fresh page load clears the practice fields and hides the summary.
- The mobile menu opens and closes when a navigation link is followed.
- Widths of 320, 390, 768 and 1348 pixels have no horizontal overflow.
- No application warnings or errors were observed during these checks.
- Source inspection confirms no form endpoint, external resource dependency,
  storage calls, enquiry submission or external integrations.
- The ZIP is checked for integrity and the website files are compared byte for
  byte with the original Stage 1 source.
