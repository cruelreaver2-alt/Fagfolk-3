# ✅ Sertifiseringer & Godkjenninger - Komplett system

## 🎯 Hva som er implementert:

### 1. ✅ **Badge-system for sertifiseringer**
Opprettet komplett komponent-system for visuell visning av sertifiseringer med ikoner og farger.

**Fil:** `/src/app/components/CertificationBadge.tsx`

**Funksjoner:**
- `CertificationBadge` - Individuell badge med ikon og status
- `CertificationGrid` - Grid-visning av badges
- `CertificationList` - Detaljert liste-visning

**Sertifiseringstyper med egne ikoner:**
- 🛡️ **Ansvarsforsikring** (grønn) - Insurance
- 📄 **Organisasjonsnummer** (blå) - Org number
- ⚡ **DSB Elvirksomhet** (gul) - DSB registration
- ⚡ **Fagbrev Elektriker** (oransje) - Electrician certificate
- 🔧 **Kommunal godkjenning rørlegger** (cyan) - Plumber approval  
- 🔧 **Fagbrev Rørlegger** (teal) - Plumber certificate
- 🏗️ **HMS-kort / Fallsikring** (oransje) - Fall protection
- 🏆 **Fagbrev Tømrer** (brun) - Carpenter certificate
- 🔥 **Gasssertifikat** (rød) - Gas certificate
- 🎨 **Fagbrev Maler** (lilla) - Painter certificate

**Status-merking:**
- ✅ **Verifisert** - Grønn badge
- 📤 **Lastet opp** - Blå badge
- ⏳ **Venter** - Gul badge
- ❌ **Utløpt** - Rød badge

---

### 2. ✅ **Oppdatert leverandørprofil med badges**

**Fil:** `/src/app/pages/SupplierProfile.tsx`

**Plassering:** Direkte under kategorier og beskrivelse på profilen

**Visning:**
- Badge-grid med opptil 6 sertifiseringer synlig
- Automatisk "+X flere" hvis mer enn 6 sertifiseringer
- Hover for tooltip med full informasjon
- Kun verifiserte sertifiseringer vises

**Eksempel:**
```
Godkjenninger & Sertifiseringer
[🛡️] [📄] [⚡] [⚡] [🔧] [+3]
```

---

### 3. ✅ **Verifiseringskrav på fremsiden**

**Fil:** `/src/app/pages/Landing.tsx`

**Ny seksjon:** "✅ Bare verifiserte håndverkere"

**Plassering:** Etter hero-seksjonen og før "Hvordan det fungerer"

**Innhold:**

#### **📋 Krav for godkjenning**

**Generelle krav (alle fagområder):**
- ✅ Ansvarsforsikring (minimum 10 mill. kr)
- ✅ Organisasjonsnummer (Brønnøysundregistrene)
- ✅ ID-verifisering (BankID eller tilsvarende)

**Fagspesifikke krav:**
- ✅ Fagbrev / Svennebrev
- ✅ Offentlige godkjenninger (DSB, kommunal, etc.)
- ✅ HMS-kurs (påkrevde sikkerhetskurs)

#### **Eksempler på fagspesifikke krav:**

**⚡ Elektriker:**
- DSB Elvirksomhetsregistrering
- Fagbrev elektriker
- Autorisasjon fra DSB

**🔧 Rørlegger:**
- Kommunal godkjenning
- Fagbrev rørlegger
- VA-autorisasjon

**🏠 Tømrer / Tak:**
- HMS-kort
- Fallsikring A og B
- Fagbrev (anbefalt)

#### **🔍 Verifiseringsprosess (4 steg):**

1. **Registrering** - Leverandør laster opp alle dokumenter
2. **Automatisk sjekk** - Systemet validerer påkrevde dokumenter
3. **Manuell verifisering** - Teamet gjennomgår alle dokumenter
4. **Godkjenning** - Kun med gyldige dokumenter

**⚠️ Automatisk avslag:**
Søknader uten fullstendige dokumenter avslås automatisk av systemet.

---

## 📊 **Automatisk godkjennings/avslagssystem**

**Backend:** `/supabase/functions/server/index.tsx`

**Funksjon:** `validateCertifications(category, certifications)`

**Logikk:**

### **Elektrikere:**
Krever:
- ✅ Ansvarsforsikring
- ✅ Organisasjonsnummer
- ✅ DSB Elvirksomhetsregistrering
- ✅ Fagbrev elektriker

**Status:**
- Alle dokumenter lastet opp → **AUTO-GODKJENT**
- Mangler ett eller flere → **AUTO-AVSLÅTT**

### **Rørleggere:**
Krever:
- ✅ Ansvarsforsikring
- ✅ Organisasjonsnummer
- ✅ Kommunal godkjenning
- ✅ Fagbrev rørlegger

**Status:**
- Alle dokumenter lastet opp → **AUTO-GODKJENT**
- Mangler ett eller flere → **AUTO-AVSLÅTT**

### **Tømrere:**
Krever:
- ✅ Ansvarsforsikring
- ✅ Organisasjonsnummer
- (Fagbrev er anbefalt, men ikke påkrevd)

**Status:**
- Basis-dokumenter lastet opp → **AUTO-GODKJENT**
- Mangler forsikring/org.nr → **AUTO-AVSLÅTT**

### **Tak:**
Krever:
- ✅ Ansvarsforsikring
- ✅ Organisasjonsnummer
- ✅ HMS-kort / Fallsikring

**Status:**
- Alle dokumenter lastet opp → **AUTO-GODKJENT**
- Mangler ett eller flere → **AUTO-AVSLÅTT**

### **Malere:**
Krever:
- ✅ Ansvarsforsikring
- ✅ Organisasjonsnummer
- (Fagbrev er anbefalt, men ikke påkrevd)

**Status:**
- Basis-dokumenter lastet opp → **AUTO-GODKJENT**
- Mangler forsikring/org.nr → **AUTO-AVSLÅTT**

---

## 🎨 **Design og farger:**

### **Badge-farger per sertifiseringstype:**

| Type | Ikon | Farge | Hex |
|------|------|-------|-----|
| Forsikring | 🛡️ Shield | Grønn | #10B981 |
| Org.nr | 📄 FileText | Blå | #3B82F6 |
| DSB Elvirksomhet | ⚡ Zap | Gul | #F59E0B |
| Fagbrev Elektriker | ⚡ Zap | Oransje | #F59E0B |
| Kommunal godkjenning | 🔧 Wrench | Cyan | #06B6D4 |
| Fagbrev Rørlegger | 🔧 Wrench | Teal | #14B8A6 |
| HMS/Fallsikring | 🏗️ HardHat | Oransje | #F97316 |
| Fagbrev Tømrer | 🏆 Award | Brun | #F59E0B |
| Gasssertifikat | 🔥 Flame | Rød | #EF4444 |
| Fagbrev Maler | 🎨 Award | Lilla | #A855F7 |

### **Status-farger:**

| Status | Badge-farge | Border | Beskrivelse |
|--------|-------------|--------|-------------|
| Verifisert | bg-green-500 | border-white | Godkjent og verifisert |
| Lastet opp | bg-blue-500 | border-white | Lastet opp, venter på verifisering |
| Venter | bg-yellow-500 | border-white | Mangler dokumentasjon |
| Utløpt | bg-red-500 | border-white | Sertifisering har utløpt |

---

## 📱 **Hvor vises sertifiseringer:**

### **1. Leverandørprofil**
- Badge-grid under kategorier
- Opptil 6 badges synlig
- "+X flere" hvis mer enn 6
- Hover for full info

### **2. Fremsiden (Landing)**
- Stor seksjon om verifiseringskrav
- Eksempler for ulike fagområder
- 4-stegs verifiseringsprosess
- Tydelig advarsel om automatisk avslag

### **3. Sidebar på profil**
- Forsikringsbanner (grønn)
- Liste over sertifiseringer
- Statistikk og anbefalinger

### **4. Ved registrering**
- Vises automatisk hvilke krav som gjelder
- Opplasting av dokumenter
- Real-time validering
- Automatisk godkjenning/avslag

---

## 🔧 **Backend-integrasjon:**

### **Signup-flow:**

```typescript
1. Leverandør registrerer seg med kategori
2. Systemet sjekker validateCertifications()
3. Hvis alle påkrevde dokumenter: status = "approved"
4. Hvis mangler dokumenter: status = "rejected"
5. Profil opprettes med sertifiseringsstatus
```

### **Profil-data:**

```typescript
{
  id: "supplier-001",
  name: "Ole Hansen",
  category: "elektro",
  verified: true,
  verificationStatus: "approved",
  certifications: [
    {
      type: "insurance",
      status: "verified",
      expiryDate: "2025-12-31"
    },
    {
      type: "org_number",
      status: "verified",
      value: "123456789"
    },
    {
      type: "dsb_registration",
      status: "verified",
      expiryDate: "2025-12-31"
    },
    {
      type: "electrician_certificate",
      status: "verified",
      expiryDate: "2025-12-31"
    }
  ]
}
```

---

## ⚠️ **Viktige prinsipper:**

### **1. Ingen snarveier**
Vi godkjenner **IKKE** leverandører uten lovpålagte godkjenninger. Dette er ufravikelig for å sikre kvalitet og trygghet.

### **2. Automatisk validering**
Systemet sjekker automatisk om alle påkrevde dokumenter er lastet opp. Mangler noe = automatisk avslag.

### **3. Tydelig kommunikasjon**
Leverandører får klare meldinger om:
- Hvilke dokumenter som kreves
- Hvilke dokumenter de mangler
- Status på verifiseringen
- Grunn til eventuelt avslag

### **4. Visuel indikasjon**
Kunder ser tydelig hvilke godkjenninger leverandøren har gjennom:
- Fargede badges med ikoner
- Verifisert-merke på profil
- Forsikringsbanner
- Detaljert sertifiseringsliste

---

## 📄 **Filer opprettet/oppdatert:**

1. ✅ `/src/app/components/CertificationBadge.tsx` - Badge-system (NY)
2. ✅ `/src/app/pages/SupplierProfile.tsx` - Oppdatert med badges
3. ✅ `/src/app/pages/Landing.tsx` - Verifiseringskrav-seksjon
4. ✅ `/src/app/pages/TestOfferBuilder.tsx` - Ny testside (NY)
5. ✅ `/src/app/pages/SupplierDashboard.tsx` - Lenke til testside
6. ✅ `/src/app/routes.tsx` - Lagt til rute for testside
7. ✅ `/SERTIFISERINGER_OG_GODKJENNINGER.md` - Denne filen (NY)

---

## 🎯 **Brukeropplevelse:**

### **For kunder:**
1. Ser tydelig at alle håndverkere er verifiserte
2. Kan klikke på badges for mer info
3. Vet at leverandøren har lovpålagte godkjenninger
4. Føler seg trygg på kvaliteten

### **For leverandører:**
1. Vet nøyaktig hvilke dokumenter de må laste opp
2. Får umiddelbar feedback på godkjenning
3. Vises som verifisert med synlige badges
4. Skiller seg ut med profesjonelle godkjenninger

### **For admin:**
1. Automatisk validering sparer tid
2. Enkelt å se hvem som mangler dokumenter
3. Tydelig oversikt over alle sertifiseringer
4. Kvalitetssikring er innebygd i systemet

---

## 🚀 **Neste steg (fremtidige forbedringer):**

### **Backend:**
1. Integrasjon med DSB API for automatisk verifisering
2. Integrasjon med Brønnøysund for org.nr-sjekk
3. Automatisk påminnelse om utløpende sertifiseringer
4. E-post-varsel ved godkjenning/avslag

### **Frontend:**
5. Klikk på badge for å se dokumentet (PDF)
6. Timeline over sertifiseringshistorikk
7. Sammenligning av leverandører basert på sertifiseringer
8. Filter jobber basert på påkrevde sertifiseringer

### **Ekstra funksjoner:**
9. QR-kode på profil for rask verifisering
10. Eksport av sertifiseringer til PDF
11. Offentlig verifiseringskode
12. Integrasjon med forsikringsselskaper

---

## ✅ **Status: FULLFØRT**

**Alt fungerer nå:**
- ✅ Badge-system opprettet og funksjonelt
- ✅ Leverandørprofil viser sertifiseringer
- ✅ Fremsiden forklarer verifiseringskrav
- ✅ Automatisk godkjenning/avslag implementert
- ✅ Testside for tilbudsbygger fungerer
- ✅ Komplett dokumentasjon

**Brukere kan nå:**
- Se hvilke godkjenninger leverandører har
- Forstå verifiseringskravene
- Føle seg trygg på kvaliteten
- Vite at alle leverandører er verifiserte

---

**Dato fullført:** 11. mars 2026  
**Versjon:** 1.0  
**Status:** ✅ Produksjonsklar
