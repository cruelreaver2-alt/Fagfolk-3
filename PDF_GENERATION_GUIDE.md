# 📄 PDF Generation Guide - Testpilot-dokumenter

Denne guiden viser deg hvordan du genererer PDF-filer som kan vedlegges i e-post til testpilotene.

---

## 📋 Oversikt over tilgjengelige PDF-er

Du har **3 PDF-dokumenter** tilgjengelig:

| # | Dokument | URL | Sider | Formål |
|---|----------|-----|-------|--------|
| 1 | **Pilot-invitasjon** | `/pilot-print` | 8 sider | Komplett pitch av plattformen |
| 2 | **Onboarding Kunde** | `/onboarding-kunde` | 6 sider | Steg-for-steg guide for kunder |
| 3 | **Onboarding Leverandør** | `/onboarding-leverandor` | 6 sider | Steg-for-steg guide for leverandører |

---

## 🖨️ Slik genererer du PDF-filer

### Metode 1: Via Browser (Anbefalt)

1. **Åpne dokumentet i nettleseren:**
   ```
   https://handtverkeren.no/pilot-print
   https://handtverkeren.no/onboarding-kunde
   https://handtverkeren.no/onboarding-leverandor
   ```

2. **Åpne print-dialog:**
   - **Mac:** `Cmd + P`
   - **Windows:** `Ctrl + P`

3. **Velg print-innstillinger:**
   - **Destination/Printer:** Velg "Save as PDF" / "Lagre som PDF"
   - **Paper size:** A4
   - **Margins:** Default
   - **Background graphics:** ✅ PÅ (viktig for farger!)
   - **Headers and footers:** ❌ AV

4. **Lagre filen:**
   - Klikk "Save" / "Lagre"
   - Filnavn-forslag:
     - `Håndtverkeren-Pilot-Invitasjon.pdf`
     - `Håndtverkeren-Onboarding-Kunde.pdf`
     - `Håndtverkeren-Onboarding-Leverandør.pdf`

---

### Metode 2: Via Chrome DevTools (Avansert)

Denne metoden gir bedre kontroll over PDF-kvalitet:

1. **Åpne dokumentet i Chrome**

2. **Åpne DevTools:**
   - `F12` eller `Cmd/Ctrl + Shift + I`

3. **Åpne Command Palette:**
   - `Cmd/Ctrl + Shift + P`

4. **Skriv "PDF" og velg:**
   - "Run Command: Print to PDF"

5. **Sett preferences:**
   ```
   Scale: 100
   Paper width: 21 cm (A4)
   Paper height: 29.7 cm (A4)
   Margins: Default
   Background graphics: ON
   ```

6. **Klikk "Generate PDF"**

---

## 📧 E-post-kampanje til testpilotene

### Foreslått e-poststruktur:

```
TIL: [Testpilot e-post]
FRA: pilot@handtverkeren.no
SUBJECT: 🚀 Velkommen som testpilot for Håndtverkeren (3 vedlegg)

---

Hei [Navn]!

Takk for at du meldte deg på som testpilot for Håndtverkeren! 🎉

Vi har vedlagt 3 PDF-dokumenter som hjelper deg i gang:

1️⃣ Pilot-invitasjon.pdf
   → Komplett oversikt over plattformen og hva som gjør oss unike

2️⃣ Onboarding-guide.pdf
   → Steg-for-steg instruksjoner for å opprette konto
   
3️⃣ [Evt. ekstramateriale]

📅 VIKTIGE DATOER:
• Pilotprogrammet starter: 15. mars 2026
• Du har tilgang fra dag 1
• Livstid 50% rabatt er allerede aktivert på din konto

🔗 REGISTRER DEG NÅ:
Kunder: https://handtverkeren.no/registrer
Leverandører: https://handtverkeren.no/leverandør-logg-inn

💡 TRENGER DU HJELP?
• E-post: pilot@handtverkeren.no
• Vi svarer innen 24 timer

Vi gleder oss til å ha deg med! 🚀

Med vennlig hilsen,
Håndtverkeren-teamet

---
P.S. Hvis du har spørsmål før du registrerer deg, bare svar på denne e-posten!
```

---

## 📎 Vedlegg i e-post

### Scenario 1: Kunde-testpilot

**Vedlegg:**
1. `Håndtverkeren-Pilot-Invitasjon.pdf` (8 sider)
2. `Håndtverkeren-Onboarding-Kunde.pdf` (6 sider)

**Total størrelse:** Ca. 2-3 MB

---

### Scenario 2: Leverandør-testpilot

**Vedlegg:**
1. `Håndtverkeren-Pilot-Invitasjon.pdf` (8 sider)
2. `Håndtverkeren-Onboarding-Leverandør.pdf` (6 sider)

**Total størrelse:** Ca. 2-3 MB

---

### Scenario 3: Usikker rolle (både kunde OG leverandør)

**Vedlegg:**
1. `Håndtverkeren-Pilot-Invitasjon.pdf` (8 sider)
2. `Håndtverkeren-Onboarding-Kunde.pdf` (6 sider)
3. `Håndtverkeren-Onboarding-Leverandør.pdf` (6 sider)

**Total størrelse:** Ca. 3-4 MB

---

## 🎨 PDF-innhold - Detaljert oversikt

### 📄 1. Pilot-invitasjon (8 sider)

**Side 1: Cover**
- Logo og branding
- "Eksklusiv invitasjon til pilotprogram"
- Pilotstart-dato

**Side 2: Introduksjon**
- Hva testpiloten får
- Hva vi ønsker fra testpiloten
- Hvorfor vi bygget dette

**Side 3: Problemet med dagens løsninger**
- 4 røde kort om Mittanbud og konkurrenter
- Manglende verifisering
- Upresise tilbud
- Dårlig kommunikasjon
- Ingen verktøy

**Side 4: For Kunder**
- 6 unike fordeler med detaljert beskrivelse
- Sammenligning med konkurrenter

**Side 5: For Leverandører**
- 6 unike fordeler med detaljert beskrivelse
- Sammenligning med konkurrenter

**Side 6: Side-om-side sammenligning**
- Tabell med 10 funksjoner
- Håndtverkeren vs. Mittanbud vs. Andre
- Visuell sammenligning

**Side 7: Teknologi & Timeline**
- Tech stack (React, Supabase, Tailwind, Resend)
- Mobiloptimalisering-detaljer
- Timeline for pilotprogrammet

**Side 8: Call to Action**
- Slik kommer du i gang (6 steg)
- Kontaktinformasjon
- Final motivasjon

---

### 📄 2. Onboarding Kunde (6 sider)

**Side 1: Cover**
- Emoji 👨‍👩‍👧‍👦
- Tidsbruk: 5-10 minutter

**Side 2: Oversikt**
- 6 funksjoner tilgjengelig for kunder
- Viktig informasjon (gratis, verifiserte fagfolk)

**Side 3: STEG 1 - Opprett konto**
- URL til registrering
- Alle påkrevde felt
- E-postbekreftelse

**Side 4: STEG 2 - Komplett profil**
- Profilbilde
- Kontaktinformasjon
- Tips for bedre tilbud

**Side 5: STEG 3 - Legg ut første jobb**
- 4-stegs skjema forklart
- Grunninfo (kategori, tittel, beskrivelse)
- Bilder
- Lokasjon og tidspunkt
- Preferanser og budsjett
- Tips for gode beskrivelser

**Side 6: STEG 4-6**
- Motta og vurdere tilbud
- Chat med håndverkere
- Godkjenn tilbud
- Marker som fullført
- Gi vurdering

---

### 📄 3. Onboarding Leverandør (6 sider)

**Side 1: Cover**
- Emoji 🔨
- Tidsbruk: 10-15 minutter

**Side 2: Oversikt**
- 6 funksjoner tilgjengelig for leverandører
- Prismodell (Basic, Pro, Premium med 50% rabatt)

**Side 3: STEG 1 - Opprett leverandørkonto**
- URL til registrering
- Alle påkrevde felt (org.nr, firma, etc.)
- E-postbekreftelse

**Side 4: STEG 2 - ID-verifisering (KRITISK!)**
- Hvorfor det er viktig
- Hvilke ID-dokumenter som aksepteres
- Krav til bildet (god belysning, leselig, etc.)
- Oppladingsprosess
- Forventet godkjenningstid (1-2 dager)

**Side 5: STEG 3-4**
- Komplett profil (logo, beskrivelse, portefølje)
- Spesifiser arbeidsområde
- Sertifiseringer
- Velg abonnement (sammenligning av planer)

**Side 6: STEG 5-6**
- Finn relevante jobber
- Velg tilbudsbygger (Enkel/Medium/Avansert)
- Fyll ut tilbud
- Tips for gode tilbud
- Når tilbudet godkjennes
- Fullfør jobb og be om vurdering

---

## ✅ Sjekkliste før utsendelse

### Teknisk sjekk:
- [ ] PDF generert fra riktig URL
- [ ] Alle sider rendret korrekt
- [ ] Farger vises korrekt (background graphics PÅ)
- [ ] Tekst er leselig (ikke pixelert)
- [ ] Linker fungerer (hvis testet i PDF-leser)
- [ ] Filstørrelse under 5 MB per PDF

### Innhold sjekk:
- [ ] Datoer er korrekte (15. mars 2026)
- [ ] Kontaktinformasjon er riktig (pilot@handtverkeren.no)
- [ ] URLs er korrekte (handtverkeren.no)
- [ ] Ingen stavefeil eller skrivefeil
- [ ] Priser er korrekte (med 50% rabatt)

### E-post sjekk:
- [ ] Riktig vedlegg for målgruppen (kunde/leverandør)
- [ ] Subject line er engasjerende
- [ ] Personalisert med mottakers navn
- [ ] Call-to-action er tydelig
- [ ] Signatur er profesjonell

---

## 🔧 Feilsøking

### Problem: Farger vises ikke i PDF

**Løsning:**
- Sjekk at "Background graphics" er PÅ i print-innstillinger
- Bruk Chrome/Edge i stedet for Safari (Safari har dårligere CSS print support)
- Alternativt: Bruk DevTools-metoden

---

### Problem: PDF er for stor (> 5 MB)

**Løsning:**
- Bruk online PDF-kompressor (f.eks. ilovepdf.com, smallpdf.com)
- Reduser kvalitet til 90% (nesten ingen visuell forskjell)

---

### Problem: Tekst er ute av sync (overlapper)

**Løsning:**
- Klikk "Refresh" i nettleseren før print
- Vent 2-3 sekunder for at CSS skal laste ferdig
- Prøv å scrolle gjennom hele dokumentet først

---

### Problem: Sideoverganger ser rare ut

**Løsning:**
- Dette er normalt i browser preview
- PDFen vil se bedre ut når den er generert
- Bruk Chrome DevTools-metoden for bedre kontroll

---

## 📊 Tracking & Analytics (Valgfritt)

Hvis du vil tracke hvor mange som åpner PDF-ene:

1. **Bruk UTM-parametere i lenker:**
   ```
   https://handtverkeren.no/registrer?utm_source=pilot-pdf&utm_medium=email&utm_campaign=pilot-march-2026
   ```

2. **Analyser i Google Analytics:**
   - Se hvor mange som klikker fra PDF til nettside
   - Track konvertering fra PDF-lesere

---

## 🎯 Best Practices

### 1. Timing
- Send e-post på hverdager (Tirsdag-Torsdag fungerer best)
- Tidspunkt: 09:00-11:00 eller 14:00-16:00
- Unngå mandager (travelt) og fredager (folk avslutter uken)

### 2. Personalisering
```
✅ GODT: "Hei Ola! Takk for at du meldte deg på som testpilot..."
❌ DÅRLIG: "Hei, Velkommen som testpilot..."
```

### 3. Oppfølging
- **Dag 3:** Send påminnelse til de som ikke har registrert seg
- **Dag 7:** Siste sjanse-e-post med urgency
- **Dag 10:** Takk til de som har registrert seg + onboarding-tips

---

## 📞 Support

Hvis du har problemer med PDF-generering:

**E-post:** pilot@handtverkeren.no  
**Responstid:** Innen 24 timer

---

## 📝 Eksempel på komplett e-postsekvens

### E-post 1: Invitasjon (Dag 0)
- **Subject:** 🚀 Velkommen som testpilot - Håndtverkeren (3 vedlegg)
- **Vedlegg:** Pilot-invitasjon.pdf + Onboarding.pdf
- **CTA:** Registrer deg nå

### E-post 2: Påminnelse (Dag 3)
- **Subject:** Har du glemt å registrere deg? 🤔
- **Innhold:** Kort påminnelse om fordelene
- **CTA:** Det tar kun 5 minutter

### E-post 3: Social Proof (Dag 7)
- **Subject:** 47 testpiloterer allerede i gang – bli med!
- **Innhold:** Testimonials + stats
- **CTA:** Siste sjanse for livstid 50% rabatt

### E-post 4: Onboarding (Dag 14 - kun til registrerte)
- **Subject:** Tips for å komme i gang med Håndtverkeren
- **Innhold:** Quick-start guide + support
- **CTA:** Legg ut din første jobb / Send ditt første tilbud

---

## 🎉 Konklusjon

Du har nå alt du trenger for å generere profesjonelle PDF-er og sende dem til testpilotene!

**Neste steg:**
1. ✅ Generer alle 3 PDF-ene
2. ✅ Lag e-post-template i din e-postleverandør (Gmail, Outlook, Mailchimp, etc.)
3. ✅ Send test-e-post til deg selv
4. ✅ Når alt ser bra ut: Send til de 100 første testpilotene!

**Lykke til med pilotprogrammet! 🚀**
