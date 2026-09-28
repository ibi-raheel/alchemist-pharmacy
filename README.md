<div align="center">

<img src=".github/assets/cover.png" alt="Alchemist Pharmacy" width="100%">

# Alchemist Pharmacy

**WhatsApp-first ordering site for a five-branch Lahore pharmacy, built with an agentic workflow.**

<p>
<a href="https://alchemistpharmacy.com"><img alt="Live" src="https://img.shields.io/badge/Live-open%20%E2%86%97-c8f560?style=for-the-badge&labelColor=0b0c10"></a>
<a href="https://ibiraheel.com/p/alchemist"><img alt="Case study" src="https://img.shields.io/badge/Case%20study-ibiraheel.com-0b0c10?style=for-the-badge&labelColor=c8f560"></a>
</p>

<p>
<img alt="HTML" src="https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=html5&logoColor=white">
<img alt="CSS" src="https://img.shields.io/badge/CSS-663399?style=flat-square&logo=css&logoColor=white">
<img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=white">
<img alt="WhatsApp deep links" src="https://img.shields.io/badge/WhatsApp%20deep%20links-25D366?style=flat-square&logo=whatsapp&logoColor=white">
<img alt="Google Maps embeds" src="https://img.shields.io/badge/Google%20Maps%20embeds-30363D?style=flat-square">
<img alt="Vercel" src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white">
<img alt="Claude Code" src="https://img.shields.io/badge/Claude%20Code-D97757?style=flat-square&logo=claude&logoColor=white">
</p>

</div>

<br>

> **300 to 545 orders a month**  
> for Alchemist Pharmacy, five branches, roughly 350 walk-in customers a day

## What it did

Every visit is routed to the nearest branch's WhatsApp in two taps. Thirty-minute delivery positioning, bilingual hero, branch galleries with live maps.

<sub>Outcome: reported by the owner.</sub>

## How it works

<p align="center"><img src=".github/assets/architecture.svg" alt="Architecture" width="100%"></p>

1. No backend: static HTML, CSS, and JS so the site loads instantly on cheap Android phones.
2. Area-to-branch routing runs in the browser and deep-links straight into the right WhatsApp chat.
3. Repo uses an ICM layered-context layout (CLAUDE.md, CONTEXT.md, shared facts) so AI agents build each track from real business data.
4. All assets local; the only external dependency is Google Fonts.

## Screenshots

<table>
<tr>
<td width="50%"><img src=".github/assets/picker.png" alt="Choose your nearest branch: the WhatsApp branch picker"><br><sub>Choose your nearest branch: the WhatsApp branch picker</sub></td>
<td width="50%"><img src=".github/assets/branches.png" alt="Branches accordion with gallery and map"><br><sub>Branches accordion with gallery and map</sub></td>
</tr>
</table>

## Run it locally

```bash
npm install
npm run dev   # http://localhost:3000
```

## Repository layout

```
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/
│   ├── components/
│   └── lib/
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

---

<div align="center">

<sub>Built by <a href="https://github.com/ibi-raheel">Muhammad Ibrahim Raheel</a> · more work at <a href="https://ibiraheel.com">ibiraheel.com</a></sub>

</div>
