# 🚀 Pilot Marketing Guide - Håndtverkeren
## Oppdatert: Mars 2026

Denne guiden forklarer hvordan du bruker markedsføringsressursene for testpilotprogrammet.

---

## 📋 Oversikt over ressurser

### 1. `/pilot` - Web Landing Page
**URL:** `https://handtverkeren.no/pilot`

**Innhold:**
- Hero-seksjon med verdiforslag
- Problemstillinger med dagens løsninger (Mittanbud, etc.)
- **NYT:** Verifiseringskrav-seksjon (sertifiseringer og godkjenninger)
- **NYT:** Escrow betalingssystem (sikker betaling)
- Fordeler for kunder (8 viktige punkter)
- Fordeler for leverandører (8 viktige punkter)
- Side-om-side feature-sammenligning (12+ funksjoner)
- Teknologi-stack showcase
- Pilotprogram-detaljer (40% rabatt i 6 måneder)
- CTA-knapper til registrering

**Bruk:**
- Del denne lenken i sosiale medier
- Inkluder i e-post-signatur
- Bruk som landingsside for annonser
- Legg ved i LinkedIn-innlegg

---

### 2. `/pilot-email-preview` - E-post Template
**URL:** `https://handtverkeren.no/pilot-email-preview`

**Innhold:**
- HTML-formatert e-post klar for Resend/Mailchimp
- Sammenligningstabeller
- **NYT:** Informasjon om sertifiseringskrav
- **NYT:** Escrow betalingssystem
- Bullet points med fordeler
- CTA-knapp
- Plain-text alternativ inkludert

**Hvordan bruke:**
1. Gå til `/pilot-email-preview`
2. Høyreklikk → "View Page Source" eller Inspiser
3. Kopier hele HTML-koden
4. Lim inn i din e-postleverandør (Resend, Mailchimp, etc.)
5. Test send til deg selv først!

**Plain-text versjon:**
Se `PILOT_EMAIL_TEXT` konstanten i `/src/app/pages/PilotEmail.tsx`

---

### 3. `/onboarding-leverandor` - Onboarding-guide (PDF)
**URL:** `https://handtverkeren.no/onboarding-leverandor`

**Innhold:**
- Komplett steg-for-steg guide (7 steg)
- Sertifiseringskrav for ulike fagområder
- **NYT:** Badge-system for godkjenninger
- **NYT:** Test-tilbudsbygger guide
- **NYT:** Detaljerte arbeidslinjer
- **NYT:** Escrow betalingssystem
- FAQ og support-informasjon
- Print-optimalisert (A4)

**Hvordan generere PDF:**
1. Åpne siden i Chrome/Edge
2. Ctrl/Cmd + P (Print)
3. Velg "Lagre som PDF"
4. Send til nye leverandører

---

### 4. `/onboarding-kunde` - Onboarding-guide for kunder (PDF)
**URL:** `https://handtverkeren.no/onboarding-kunde`

**Innhold:**
- Steg-for-steg guide for kunder
- Hvordan legge ut jobb
- Hvordan velge leverandør
- **NYT:** Escrow betalingssystem forklart
- Print-optimalisert (A4)

---

## 🆕 VIKTIG: NYE FUNKSJONER I MARS 2026

### 🏅 Sertifiseringer og godkjenninger (OBLIGATORISK)
**Hva:** Alle leverandører MÅ laste opp lovpålagte sertifiseringer før de kan sende tilbud.

**Generelle krav (alle fagområder):**
- ✅ Ansvarsforsikring (minimum 10 mill. kr)
- ✅ Organisasjonsnummer (Brønnøysundregistrene)
- ✅ ID-verifisering (BankID)

**Fagspesifikke krav:**
- ⚡ **Elektriker:** DSB-registrering + Fagbrev + Autorisasjon
- 🔧 **Rørlegger:** Kommunal godkjenning + Fagbrev + VA-autorisasjon
- 🏗️ **Tømrer/Tak:** HMS-kort + Fallsikring A og B
- 🎨 **Maler:** Fagbrev (anbefalt)

**Automatisk godkjenning/avslag:**
- ✅ Alle dokumenter lastet opp → AUTO-GODKJENT
- ❌ Mangler dokumenter → AUTO-AVSLÅTT (får beskjed om hva som mangler)

**Badge-system:**
Verifiserte sertifiseringer vises som fargerike badges på profilen:
- 🛡️ Ansvarsforsikring (grønn)
- 📄 Organisasjonsnummer (blå)
- ⚡ DSB Elvirksomhet (gul)
- 🔧 Kommunal godkjenning (cyan)
- Osv.

---

### 🔒 Escrow betalingssystem (Sikker betaling)
**Hva:** Trygg betaling hvor pengene holdes på en sperret konto til jobben er godkjent.

**Slik fungerer det:**
1. Kunden betaler til sperret konto når de godkjenner tilbud
2. Pengene holdes sikret mens leverandøren utfører jobben
3. Leverandøren starter trygt – vet at pengene er på plass
4. Når jobben er ferdig og kunden godkjenner, utbetales pengene
5. Ved uenigheter har vi tvisteløsning

**Service-gebyr:**
- 1% for kunden
- 1% for leverandøren
- Totalt 2% av jobben

**Fordeler:**
- ✅ Trygghet for begge parter
- ✅ Automatisk utbetaling
- ✅ Tvisteløsning inkludert
- ✅ Full sporbarhet

---

### 📝 Detaljerte arbeidslinjer i tilbudsbygger
**Hva:** Leverandører kan nå legge til flere spesifikke arbeidslinjer med timer og timepris.

**Funksjonalitet:**
- ➕ Legg til ubegrenset med arbeidslinjer
- 📄 Beskriv hver arbeidsoppgave (f.eks. "Montering av terrassebord")
- ⏱️ Angi timer (med desimaler, f.eks. 2.5 timer)
- 💰 Sett individuell timepris per linje
- 🔢 Automatisk sum-beregning
- 🗑️ Fjern linjer (må ha minst 1)

**Eksempel:**
```
1. Forberedelse av fundament     | 8 t  | 800 kr/t | 6 400 kr
2. Montering av bjelker          | 12 t | 850 kr/t | 10 200 kr
3. Legge terrassebord            | 16 t | 850 kr/t | 13 600 kr
4. Montering av rekkverk         | 6 t  | 800 kr/t | 4 800 kr
5. Sluttbehandling               | 4 t  | 700 kr/t | 2 800 kr

Total arbeidskostnad: 37 800 kr
```

**Fordel:**
- Kunder ser nøyaktig hva de betaler for
- Transparens og tillit
- Lettere å sammenligne tilbud

---

### 🧪 Test-tilbudsbygger
**Hva:** Leverandører kan teste tilbudssystemet uten å være knyttet til en faktisk kunde.

**Tilgang:** `/test-offer-builder` (lenke i leverandør-dashboard)

**Funksjoner:**
- Test med demo kundeforespørsel
- Prøv materialdatabase
- Test kalkulatorer
- Øv på detaljerte arbeidslinjer
- Se hvordan escrow fungerer
- Ingen data sendes til ekte kunder

**Fordel:**
- Lær systemet uten risiko
- Bli komfortabel før første tilbud
- Test ulike scenarier

---

## 📧 E-post Template - Oppdatert versjon

### Subject Line alternativer:
```
🚀 Du er invitert: Bli testpilot for Håndtverkeren (40% rabatt i 6 mnd!)
Eksklusiv invitasjon: De 20 første får 40% rabatt + kostnadsfri pilot-fase
Slutt med Mittanbud-problemer – Prøv den nye løsningen (100% verifiserte fagfolk)
```

### Pre-header text:
```
Bli en av de 20 første testpilotene og få 40% rabatt i 6 måneder + kostnadsfri pilot-fase
```

---

## 🎯 Målgrupper og budskap - OPPDATERT

### For Kunder (B2C):
**Pain points:**
- Usikkerhet om håndverker er seriøs og har riktig kompetanse
- Upresise tilbud som sprenger budsjettet
- Risiko for at jobben ikke blir ferdig
- Ingen sikkerhet for at pengene er trygge

**Vår løsning:**
- ✅ 100% verifiserte fagfolk med lovpålagte godkjenninger
- ✅ Detaljerte tilbud med spesifikke arbeidslinjer
- ✅ Sikker betaling via escrow-system
- ✅ Badge-system viser leverandørens kvalifikasjoner
- ✅ Alt samlet på én plattform

**Hovedbudskap:**
"Kun profesjonelle håndverkere med verifiserte sertifiseringer. Din trygghet er vår prioritet."

---

### For Leverandører (B2B):
**Pain points:**
- Vanskelig å skrive profesjonelle tilbud
- Ingen verktøy for kalkulasjoner
- Mister oversikt over tilbud
- Usikkerhet om betaling
- Dyr provisjon på Mittanbud (10-15%)

**Vår løsning:**
- ✅ Smart tilbudsbygger med detaljerte arbeidslinjer
- ✅ Test-tilbudsbygger for å lære systemet
- ✅ Materialdatabase med 10 000+ produkter
- ✅ Badge-system viser dine kvalifikasjoner visuelt
- ✅ Sikker betaling via escrow (bare 1% gebyr)
- ✅ Dashboard med statistikk
- ✅ Fleksible abonnementer (ingen provisjon!)

**Hovedbudskap:**
"Profesjonelle verktøy for profesjonelle håndverkere. Vis dine kvalifikasjoner og få betalt trygt."

---

## 📱 Sosiale medier - Oppdaterte versjoner

### LinkedIn Post:
```
🚀 Vi lanserer Håndtverkeren – den første håndverkerplattformen med 100% verifiserte fagfolk!

Problemet med Mittanbud og lignende:
❌ Ingen verifisering av fagfolk
❌ Upresise tilbud
❌ Ingen betalingssikkerhet
❌ Ingen verktøy for leverandører

Vår løsning:
✅ OBLIGATORISKE sertifiseringer (DSB, fagbrev, forsikring, etc.)
✅ Automatisk godkjenning/avslag basert på dokumentasjon
✅ Detaljerte tilbud med spesifikke arbeidslinjer
✅ Sikker betaling via escrow-system (bare 2% gebyr totalt)
✅ Badge-system viser kvalifikasjoner visuelt
✅ Test-tilbudsbygger for å lære systemet
✅ Materialdatabase med 10 000+ produkter
✅ Dashboard med sanntids-statistikk
✅ Mobiloptimalisert fra dag 1

🎁 Bli en av de 20 første testpilotene og få:
- Kostnadsfri pilot-fase
- 40% rabatt i 6 måneder
- Direkte kontakt med utviklerteamet

Les mer: https://handtverkeren.no/pilot

#håndverker #oppussing #bygg #startup #proptech #verifisering #sikkerhet
```

### Facebook/Instagram Post (kort):
```
🔨 Sliter du med å finne PÅLITELIGE håndverkere?

Håndtverkeren er den første plattformen som faktisk løser problemene:
✅ 100% verifiserte fagfolk (sertifiseringer sjekkes!)
✅ Detaljerte tilbud (vet nøyaktig hva du betaler for)
✅ Sikker betaling (escrow-system)
✅ Badge-system (se kvalifikasjoner umiddelbart)

🎁 Bli testpilot:
- Kostnadsfri pilot-fase
- 40% rabatt i 6 måneder
- De 20 første!

👉 Les mer: handtverkeren.no/pilot
```

### Twitter/X Post:
```
🚀 Lanserer Håndterkeren – det Mittanbud burde vært

✅ 100% verifiserte fagfolk (DSB, fagbrev, forsikring)
✅ Automatisk godkjenning/avslag
✅ Detaljerte arbeidslinjer i tilbud
✅ Sikker betaling (escrow)
✅ Badge-system for kvalifikasjoner
✅ Materialdatabase (10k+ produkter)

Bli testpilot → 40% rabatt i 6 mnd

handtverkeren.no/pilot
```

---

## 🎨 Visuelle ressurser

### Farger:
- **Primary (mørkeblå):** `#17384E`
- **Accent (varm brun/orange):** `#E07B3E`
- **Bakgrunn:** `#F8FAFC`
- **Tekst:** `#111827`
- **Sekundær tekst:** `#6B7280`

### Badge-farger:
- **Ansvarsforsikring:** `#10B981` (grønn)
- **Organisasjonsnummer:** `#3B82F6` (blå)
- **DSB Elvirksomhet:** `#F59E0B` (gul)
- **Kommunal godkjenning:** `#06B6D4` (cyan)
- **Fagbrev:** `#14B8A6` (teal)
- **HMS/Fallsikring:** `#F97316` (oransje)

### Emoji som fungerer:
- 🚀 (lansering/pilot)
- 🔨 (håndverk)
- 👨‍👩‍👧‍👦 (kunder)
- 🎁 (rabatt/bonus)
- ✅ (fordeler)
- ❌ (problemer hos konkurrenter)
- 📱 (mobil-first)
- 💡 (smart løsning)
- 🏅 (sertifiseringer)
- 🔒 (sikker betaling)
- 🛡️ (forsikring)
- ⚡ (elektriker)
- 🔧 (rørlegger)
- 🏗️ (tømrer/tak)

---

## 📊 Nøkkeltall å fremheve - OPPDATERT

### Tekniske:
- **100% verifisering** (automatisk godkjenning/avslag)
- **10 000+ produkter** i materialdatabasen
- **15+ unike features** som konkurrenter ikke har
- **Fullstendig mobiloptimalisert** (iOS/Android)
- **Moderne tech stack** (React, Supabase, Tailwind)
- **Badge-system** for visuell fremheving av kvalifikasjoner

### Business:
- **1% + 1% escrow-gebyr** (totalt 2% vs 10-15% hos Mittanbud)
- **100% gratis** for kunder
- **40% testpilot-rabatt** i 6 måneder
- **20 testpilot-plasser** (begrenset!)
- **3 abonnementsnivåer** (Light/Medium/Pro)
- **3 tilbudsbyggere** (enkel/medium/avansert)
- **Automatisk validering** av sertifiseringer

### Sikkerhet:
- **100% verifiserte fagfolk** (obligatoriske sertifiseringer)
- **Automatisk godkjenning/avslag** (basert på dokumentasjon)
- **Escrow betalingssystem** (trygg betaling for begge parter)
- **Badge-system** (transparent visning av kvalifikasjoner)
- **ID-verifisering** (BankID eller tilsvarende)

---

## 🎯 Call-to-Actions (CTAs) - OPPDATERT

### Sterke CTAs:
- "Bli testpilot – Få 40% rabatt i 6 måneder!"
- "Registrer deg nå (kun 20 plasser!)"
- "Test gratis – Kostnadsfri pilot-fase"
- "Se hvorfor 100% av våre leverandører er verifiserte"
- "Trygg betaling med escrow-system"

### Sekundære CTAs:
- "Les om sertifiseringskravene"
- "Sammenlign oss med Mittanbud"
- "Se alle funksjoner"
- "Lær mer om escrow-betaling"
- "Test tilbudsbyggeren"

---

## 📅 Timeline for markedsføring

### Fase 1: Pre-launch (Nå - 15. mars)
- Send invitasjoner til de 20 første testpilotene
- Del på LinkedIn/Facebook med fokus på verifisering og sikkerhet
- E-post til eksisterende nettverk
- Fremhev badge-system og escrow-betaling
- Få feedback på landing page

### Fase 2: Pilot (15. mars - våren 2026)
- Samle testimonials fra pilotbrukere
- Fokuser på verifisering og sikkerhet i markedsføring
- Vis eksempler på detaljerte tilbud
- Opprett case studies med før/etter
- Justere basert på feedback
- Forbered for full lansering

### Fase 3: Full lansering (Våren 2026)
- Offentlig lansering med fokus på sikkerhet
- PR-push om "første 100% verifiserte plattform"
- Digital markedsføring (Facebook Ads, Google Ads)
- Partnerskap med bransjeorganisasjoner
- Testimonials og case studies

---

## 📧 E-postsekvens - OPPDATERT

### E-post 1: Invitasjon (Dag 0)
**Subject:** 🚀 Du er invitert: Bli testpilot (40% rabatt i 6 mnd + 100% verifiserte fagfolk)
**Innhold:**
- Full pitch om 100% verifisering
- Badge-system og escrow-betaling
- Detaljerte arbeidslinjer
- Test-tilbudsbygger
- 40% rabatt i 6 måneder

### E-post 2: Verifisering (Dag 3)
**Subject:** Hvorfor vi krever sertifiseringer (og hvorfor det er bra for DEG)
**Innhold:**
- Forklaring av verifiseringsprosessen
- Badge-system
- Automatisk godkjenning/avslag
- Hvorfor dette gir deg konkurransefortrinn

### E-post 3: Sikkerhet (Dag 5)
**Subject:** Aldri mer bekymre deg for betaling – Escrow-systemet forklart
**Innhold:**
- Hvordan escrow fungerer
- Bare 2% totalt gebyr (vs 10-15% hos Mittanbud)
- Trygghet for begge parter
- Testimonials

### E-post 4: Deadline (Dag 7)
**Subject:** ⏰ Kun 5 plasser igjen som testpilot!
**Innhold:**
- Final push med urgency
- Alle fordeler oppsummert
- Testimonials fra de som allerede har meldt seg på

---

## 💡 Tips for best resultat - OPPDATERT

1. **Fremhev sikkerhet** – "100% verifiserte fagfolk" er vårt USP
2. **Vis badge-systemet** – Bruk bilder/screenshots av badges
3. **Forklær escrow** – Folk forstår ikke alltid konseptet, bruk eksempler
4. **Automatisering** – Fremhev automatisk godkjenning/avslag som tidsbesparende
5. **Sammenlign med Mittanbud** – Vis tydelig forskjellen (2% vs 10-15% gebyr)
6. **Personaliser e-poster** – Bruk fornavn og tilpass til fagområde
7. **Bruk video** – Lag en kort demo av badge-systemet og escrow (30-60 sek)
8. **Testimonials** – Samle tilbakemeldinger om verifiseringsprosessen
9. **Urgency** – Begrens til 20 testpilotplasser
10. **Social proof** – Del antall som har meldt seg på

---

## 🔑 Nøkkelmeldinger (Key Messages)

### For Kunder:
1. **"Kun profesjonelle håndverkere"** – Alle må ha lovpålagte godkjenninger
2. **"Se kvalifikasjoner umiddelbart"** – Badge-system viser alt visuelt
3. **"Dine penger er trygge"** – Escrow-system holder pengene sikre
4. **"Detaljerte tilbud"** – Vet nøyaktig hva du betaler for

### For Leverandører:
1. **"Vis dine kvalifikasjoner"** – Badge-system fremhever dine godkjenninger
2. **"Få betalt trygt"** – Escrow sikrer at pengene er på plass før du starter
3. **"Profesjonelle verktøy"** – Test-tilbudsbygger og materialdatabase
4. **"Kun 2% gebyr"** – Vs 10-15% hos Mittanbud
5. **"Detaljerte arbeidslinjer"** – Vis kunden nøyaktig hva du gjør

---

## 🔗 Viktige lenker

- Landing page: `https://handtverkeren.no/pilot`
- E-post preview: `https://handtverkeren.no/pilot-email-preview`
- Onboarding leverandør (PDF): `https://handtverkeren.no/onboarding-leverandor`
- Onboarding kunde (PDF): `https://handtverkeren.no/onboarding-kunde`
- Registrering kunde: `https://handtverkeren.no/registrer`
- Registrering leverandør: `https://handtverkeren.no/leverandør-logg-inn`
- Test-tilbudsbygger: `https://handtverkeren.no/test-offer-builder` (krever innlogging)

---

## 📞 Kontakt for spørsmål

E-post: pilot@handtverkeren.no

---

## 🎯 Konkurransefortrinn (Elevator Pitch)

**30-sekunder versjon:**
"Håndterkeren er den første håndverkerplattformen i Norge som krever lovpålagte sertifiseringer fra ALLE leverandører. Vi har automatisk godkjenning/avslag, badge-system som viser kvalifikasjoner visuelt, og escrow-betaling som sikrer pengene for begge parter. Kun 2% gebyr totalt vs 10-15% hos Mittanbud. Bli testpilot og få 40% rabatt i 6 måneder!"

**60-sekunder versjon:**
"Problemet med Mittanbud og andre plattformer er at hvem som helst kan registrere seg som håndverker. Hos oss må ALLE laste opp ansvarsforsikring, organisasjonsnummer, fagbrev, DSB-godkjenning, eller andre lovpålagte sertifiseringer avhengig av fagområde. Systemet godkjenner eller avslår automatisk basert på dokumentasjonen. Når sertifiseringene er verifisert, vises de som fargerike badges på profilen - kunder ser umiddelbart hvem de har med å gjøre. Vi har også escrow-betaling som sikrer pengene for begge parter, bare 2% gebyr totalt. Leverandører får profesjonelle verktøy som test-tilbudsbygger, materialdatabase med 10 000+ produkter, og kan lage detaljerte tilbud med spesifikke arbeidslinjer. Bli en av de 20 første testpilotene og få 40% rabatt i 6 måneder!"

---

**Lykke til med pilotprogrammet! 🚀**

**Dato oppdatert:** Mars 2026  
**Versjon:** 2.0  
**Nye funksjoner:** Sertifiseringer, Badge-system, Escrow, Detaljerte arbeidslinjer, Test-tilbudsbygger
