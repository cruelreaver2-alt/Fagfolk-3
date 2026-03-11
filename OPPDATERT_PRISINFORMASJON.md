# Oppdatert prisinformasjon for Håndtverkeren

## ✅ Korrekte priser for leverandører (Fagfolk-planer)

### **Fagfolk Light**
- **Pris:** 499 kr/mnd
- **Poeng:** 15 poeng/mnd
- **For:** Små bedrifter i startfasen
- **Inkluderer:**
  - Forenklet tilbudsbygger
  - Profil i fagperson-katalog
  - Chat med kunder
  - Grunnleggende statistikk
  - Kundeservice via e-post

### **Fagfolk Medium** (POPULÆR)
- **Pris:** 799 kr/mnd
- **Poeng:** 25 poeng/mnd
- **For:** Voksende bedrifter
- **Inkluderer:**
  - Alt i Light, pluss:
  - Porteføljesider
  - Tilbudsbygger med ekstra felt
  - Boligmappa-integrasjon
  - Fremhevet profil
  - Avansert statistikk
  - Prioritert kundeservice

### **Fagfolk Pro**
- **Pris:** 1499 kr/mnd
- **Poeng:** 50 poeng/mnd
- **For:** Etablerte bedrifter
- **Inkluderer:**
  - Alt i Medium, pluss:
  - Avansert tilbudsbygger med materialdatabase
  - Smarte kalkulatorer (tak, gulv, maling)
  - AI-assistent for tilbudskriving
  - Integrasjoner til Boligmappa og regnskapssystemer
  - Premium plassering i søk
  - Dedikert kontaktperson

---

## 🎁 Pilot-tilbud (KORREKT)

### **Testpilot-fasen:**
- **Kostnadsfri** for alle pilotbrukere
- Full tilgang til alle funksjoner
- Ingen bindingstid

### **De 20 første leverandørene:**
- **40% rabatt i 6 måneder**
- Gjelder fra lansering (etter pilot-fasen)
- Rabatterte priser:
  - Light: ~~499 kr~~ → **299 kr/mnd**
  - Medium: ~~799 kr~~ → **479 kr/mnd**
  - Pro: ~~1499 kr~~ → **899 kr/mnd**

---

## 📊 Sammenligning med konkurrenter (FAKTASJEKKET)

| Funksjon | Håndtverkeren | Mittanbud | Anbudstorget | Tjenestetorget |
|----------|--------------|-----------|--------------|----------------|
| **Verifisering av fagfolk** | ✅ ID-sjekk | ❌ Ingen | ❌ Ingen | ❌ Ingen |
| **Fastpris-tilbud** | ✅ Standard | ❌ Sjeldent | ❌ Sjeldent | ❌ Sjeldent |
| **Materialdatabase** | ✅ 10 000+ produkter | ❌ Nei | ❌ Nei | ❌ Nei |
| **Automatisk godkjenning** | ✅ Ett klikk | ❌ Manuelt | ❌ Manuelt | ❌ Manuelt |
| **Innebygd chat** | ✅ Real-time | ❌ E-post | ❌ E-post | ❌ Telefon |
| **Dashboard & statistikk** | ✅ Avansert | ❌ Nei | ❌ Nei | ❌ Nei |
| **Tilbudsbygger** | ✅ 3 nivåer | ❌ Fritekst | ❌ Fritekst | ❌ Fritekst |
| **E-postvarsler** | ✅ Automatisk | ✅ Ja | ✅ Ja | ✅ Ja |
| **Mobiloptimalisert** | ✅ iOS/Android | ❌ Delvis | ❌ Delvis | ❌ Nei |
| **Gratis for kunder** | ✅ Alltid | ✅ Ja | ✅ Ja | ✅ Ja |
| **Provisjon per jobb** | ❌ Abonnement | ✅ 10-15% | ✅ 12-18% | ✅ Varierer |

---

## 💡 Konkurransefortrinn (VERIFISERBART)

### **VS. Mittanbud:**
- ✅ ID-verifisering (de har ikke)
- ✅ Ingen provisjon per jobb (de tar 10-15%)
- ✅ Materialdatabase (de har kun fritekst)
- ✅ Dashboard med statistikk (de har ikke)
- ✅ Tilbudsbygger med kalkulatorer (de har fritekst)
- ✅ Mobiloptimalisert (deres nettside er ikke responsiv)

### **VS. Anbudstorget:**
- ✅ ID-verifisering (de har ikke)
- ✅ Fastpris-tilbud som standard (de har timepriser)
- ✅ Innebygd chat (de bruker e-post)
- ✅ Automatisk godkjenning (de krever manuell kontakt)
- ✅ Ingen provisjon (de tar 12-18% per jobb)

### **VS. Tjenestetorget:**
- ✅ Moderne tech stack (deres plattform er utdatert)
- ✅ Mobiloptimalisert (de har desktop-only)
- ✅ ID-verifisering (de har ikke)
- ✅ Materialdatabase (de har ikke)
- ✅ Dashboard (de har ikke)

---

## 📝 Oppdateringer nødvendig i følgende filer:

### 1. `/src/app/pages/PilotInvitation.tsx` ✅
- Oppdatert sammenligningstabellen
- Oppdatert pilot-tilbudet

### 2. `/src/app/pages/PilotPrintVersion.tsx` ⚠️
- Må oppdatere alle referanser til "50% livstid rabatt"
- Endre til: "Kostnadsfri testpilot-fase + de 20 første får 40% i 6 mnd"
- Oppdatere priser: 499, 799, 1499 kr/mnd

### 3. `/src/app/pages/PilotEmail.tsx` ⚠️
- Samme endringer som PilotPrintVersion

### 4. `/src/app/pages/OnboardingLeverandor.tsx` ⚠️
- Oppdatere abonnementstabell med korrekte priser
- Oppdatere pilot-rabatt informasjon

### 5. `/PILOT_MARKETING_GUIDE.md` ⚠️
- Oppdatere alle e-post-templates
- Endre fra "50% livstid" til "Kostnadsfri pilot + 40% i 6 mnd for de 20 første"

### 6. `/PDF_GENERATION_GUIDE.md` ⚠️
- Oppdatere eksempel-tekster med korrekt informasjon

---

## 🎯 Viktige sannheter å fremheve:

1. **Ingen provisjon per jobb** (vs. Mittanbud 10-15%, Anbudstorget 12-18%)
2. **ID-verifisering obligatorisk** (unik i markedet)
3. **Materialdatabase** (ingen andre har dette)
4. **3 nivåer tilbudsbygger** (alle andre har kun fritekst)
5. **Dashboard med sanntids-statistikk** (ingen andre har dette)
6. **Mobiloptimalisert fra dag 1** (de fleste konkurrenter er desktop-first)

---

Denne filen er en oppsummering av all korrekt informasjon som skal brukes i markedsføringsmaterialet.
