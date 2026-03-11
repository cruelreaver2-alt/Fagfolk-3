# 🎓 SERTIFISERINGSSYSTEM - Komplett Dokumentasjon

**Håndterkeren - Leverandørverif isering**  
**Versjon:** 1.0  
**Dato:** 11. mars 2026

---

## 📋 Innhold

1. [Oversikt](#oversikt)
2. [Komponenter](#komponenter)
3. [Registreringsflyt](#registreringsflyt)
4. [Sertifiseringskrav per bransje](#krav)
5. [Visning for kunder](#visning)
6. [Backend integrasjon](#backend)
7. [Teknisk dokumentasjon](#teknisk)

---

## 🎯 Oversikt {#oversikt}

Håndterkeren har nå et komplett sertifiseringssystem som sikrer at alle leverandører oppfyller lovpålagte krav før de kan motta jobber.

### **Hovedfunksjoner:**

✅ **Obligatorisk dokumentopplasting** ved registrering  
✅ **Bransj espesifikke krav** (elektriker, rørlegger, tømrer, etc.)  
✅ **Automatisk verifisering** av dokumenter  
✅ **Synlig for kunder** - bygger tillit  
✅ **Årlig revalidering** - sertifiseringer må fornyes  
✅ **Utløpsvarslinger** - automatisk varsel før utløp  

---

## 🧩 Komponenter {#komponenter}

### 1. **CertificationUpload** 
`/src/app/components/CertificationUpload.tsx`

**Formål:** Håndterer opplasting av sertifiseringer under registrering

**Props:**
```typescript
interface CertificationUploadProps {
  category: string;              // Bransje (elektro, ror, tre, etc.)
  certifications: Certification[];
  onCertificationsChange: (certs: Certification[]) => void;
}
```

**Funksjoner:**
- Viser bransjespesifikke sertifiseringskrav
- Håndterer filopplasting (PDF, JPG, PNG)
- Input for registreringsnummer (DSB, org.nr, etc.)
- Input for utløpsdato
- Validering av obligatoriske felt
- Status tracking (pending, uploaded, verified, rejected)

**Sertifiseringskrav per bransje:**

#### **ELEKTRO** (høyest krav):
- ⚡ Ansvarsforsikring (min 5 mill kr) - **OBLIGATORISK**
- ⚡ Organisasjonsnummer - **OBLIGATORISK**
- ⚡ DSB Elvirksomhetsregistrering - **OBLIGATORISK**
- ⚡ Fagbrev elektriker (Gr. L) - **OBLIGATORISK**
- ⚡ HMS / Internkontroll - Anbefalt

#### **RØR**:
- 🚰 Ansvarsforsikring (min 5 mill kr) - **OBLIGATORISK**
- 🚰 Organisasjonsnummer - **OBLIGATORISK**
- 🚰 Kommunal godkjenning - **OBLIGATORISK**
- 🚰 Fagbrev rørlegger - **OBLIGATORISK**

#### **TRE** (Tømrer):
- 🔨 Ansvarsforsikring (min 2 mill kr) - **OBLIGATORISK**
- 🔨 Organisasjonsnummer - **OBLIGATORISK**
- 🔨 Fagbrev tømrer - Anbefalt
- 🔨 Ansvarsrett (søknadspliktig arbeid) - Ved behov

#### **TAK** (Taktekker):
- 🏠 Ansvarsforsikring (min 2 mill kr) - **OBLIGATORISK**
- 🏠 Organisasjonsnummer - **OBLIGATORISK**
- 🏠 Fagbrev taktekker - Anbefalt
- 🏠 HMS-kort / Fallsikring - **OBLIGATORISK**

#### **MALING**:
- 🎨 Ansvarsforsikring (min 1 mill kr) - **OBLIGATORISK**
- 🎨 Organisasjonsnummer - **OBLIGATORISK**
- 🎨 Fagbrev maler - Anbefalt

---

### 2. **CertificationDisplay**
`/src/app/components/CertificationDisplay.tsx`

**Formål:** Viser verifiserte sertifiseringer på leverandørprofil (synlig for kunder)

**Props:**
```typescript
interface CertificationDisplayProps {
  certifications: Certification[];
  category: string;
  supplierName: string;
}
```

**Funksjoner:**
- Viser grønt "Verifisert"-merke
- Lister alle verifiserte sertifiseringer
- Viser utløpsdato og varslinger
- Lenker til offentlige registre (DSB, Brønnøysund)
- Forklarer hva verifiseringen betyr
- Fremhever bransjespesifikke krav

**Eksempel visning:**

```
┌────────────────────────────────────────┐
│  ✅ Verifisert Elektriker              │
│  Ole Hansen AS har dokumentert og     │
│  verifisert kompetanse innen elektro. │
│  Alle lovpålagte krav er oppfylt.     │
└────────────────────────────────────────┘

📄 Verifiserte sertifiseringer:

✓ Ansvarsforsikring
  Utløper: 31. desember 2026

✓ Organisasjonsnummer: 123 456 789
  Se i Brønnøysundregistrene →

✓ DSB Elvirksomhetsregistrering
  Nummer: DSB-12345
  Verifiser i DSB-registeret →

✓ Fagbrev Elektriker
  Verifisert: 1. januar 2024
```

---

## 🔄 Registreringsflyt {#registreringsflyt}

### **Flyt for leverandører:**

```
Steg 1: KONTO
├─ Navn
├─ E-post
├─ Passord
├─ Firma navn
├─ Organisasjonsnummer
└─ Telefon

Steg 2: DETALJER
├─ Velg bransje (elektriker, rørlegger, etc.)
├─ Last opp generelle dokumenter
└─ Porteføljebilder

Steg 3: SERTIFISERINGER ⭐ NY!
├─ Bransjespesifikke krav vises automatisk
├─ Last opp obligatoriske sertifiseringer
├─ Fyll inn registreringsnummer
├─ Angi utløpsdato
└─ Kan fortsette uten å fullføre (verifiseres ikke)

Steg 4: BEKREFTELSE
├─ E-post verifisering (6-sifret kode)
└─ Konto opprettet

ETTER REGISTRERING:
├─ Håndterkeren verifiserer dokumenter (1-3 virkedager)
├─ Grønt merke når godkjent
└─ Årlig påminnelse om revalidering
```

### **Validering:**

**Obligatoriske felt (alle bransjer):**
- Ansvarsforsikring (fil + utløpsdato)
- Organisasjonsnummer (nummer)

**Obligatoriske felt (elektriker):**
- DSB-registrering (nummer + utløpsdato)
- Fagbrev (fil)

**Obligatoriske felt (rørlegger):**
- Kommunal godkjenning (fil + nummer)
- Fagbrev (fil)

---

## 📊 Sertifiseringskrav per bransje {#krav}

### **Sammendrag:**

| Bransje    | Forsikring | Org.nr | Spesielle krav                      | Minimum beløp |
|------------|------------|--------|-------------------------------------|---------------|
| Elektro    | ✅ Påkrevd | ✅ Ja  | DSB-registrering, Fagbrev          | 5 mill kr     |
| Rør        | ✅ Påkrevd | ✅ Ja  | Kommunal godkjenning, Fagbrev      | 5 mill kr     |
| Tre        | ✅ Påkrevd | ✅ Ja  | Fagbrev (anbefalt), Ansvarsrett    | 2 mill kr     |
| Tak        | ✅ Påkrevd | ✅ Ja  | Fagbrev, HMS-kort / Fallsikring    | 2 mill kr     |
| Maling     | ✅ Påkrevd | ✅ Ja  | Fagbrev (anbefalt)                 | 1 mill kr     |

---

## 👀 Visning for kunder {#visning}

### **På leverandørprofil:**

1. **Verifisert-merke** (grønt, fremtredende)
2. **Liste over sertifiseringer**
3. **Lenker til offentlige registre** (DSB, Brønnøysund)
4. **Forklaring av hva verifisering betyr**
5. **Utløpsinformasjon**

### **I søkeresultater:**

```
┌──────────────────────────────────────┐
│ Ole Hansen AS                        │
│ ✅ Verifisert Elektriker             │
│ ⭐ 4.8 (23 anmeldelser)              │
│ 📍 Oslo                              │
└──────────────────────────────────────┘
```

### **På tilbud:**

```
TILBUD FRA: Ole Hansen AS
✅ Verifisert elektriker
✅ DSB-registrert (sjekk registeret)
✅ Gyldig forsikring til 31.12.2026
```

---

## 🔌 Backend integrasjon {#backend}

### **Datamodell:**

```typescript
interface Certification {
  id: string;
  type: string;                    // Type sertifisering
  name: string;                    // Visningsnavn
  file?: string;                   // URL til lastet opp fil
  expiryDate?: string;             // Utløpsdato
  number?: string;                 // Registreringsnummer
  status: "pending" | "uploaded" | "verified" | "rejected" | "expired";
  verifiedDate?: string;           // Dato for verifisering
  verifiedBy?: string;             // Admin som verifiserte
  rejectionReason?: string;        // Årsak til avvisning
}

interface SupplierProfile {
  id: string;
  name: string;
  category: string;
  certifications: Certification[];
  verificationStatus: "unverified" | "pending" | "verified" | "expired";
  lastVerified?: string;
  nextRevalidation?: string;
}
```

### **API Endpoints:**

```typescript
// Opprette profil med sertifiseringer
POST /make-server-8d200dba/auth/signup
Body: {
  name, email, password, role, company,
  category, certifications: [...]
}

// Hente leverandørprofil med sertifiseringer
GET /make-server-8d200dba/suppliers/:id
Response: {
  supplier: {..., certifications: [...]}
}

// Oppdatere sertifiseringer
PUT /make-server-8d200dba/suppliers/:id/certifications
Body: { certifications: [...] }

// Verifisere sertifisering (admin)
POST /make-server-8d200dba/admin/certifications/:id/verify
Body: { status: "verified" | "rejected", reason?: string }

// Sjekk utløpende sertifiseringer (cron job)
GET /make-server-8d200dba/admin/certifications/expiring?days=30
Response: { certifications: [...] }
```

### **Lagring:**

Sertifiseringer lagres i KV-store:

```typescript
// Leverandørprofil med sertifiseringer
await kv.set(`supplier-profile:${userId}`, {
  ...supplierData,
  certifications: [...]
});

// Separat for rask oppslag
await kv.set(`supplier-certifications:${userId}`, certifications);

// Index for verifiseringsstatus
await kv.set(`verification-status:${userId}`, "verified");
```

### **Fil-håndtering:**

Opplastede filer lagres i Supabase Storage:

```typescript
// Bucket for sertifiseringer
const bucketName = "make-8d200dba-certifications";

// Last opp fil
const { data, error } = await supabase.storage
  .from(bucketName)
  .upload(`${userId}/${certId}/${filename}`, file);

// Hent signert URL (privat)
const { data: signedUrl } = await supabase.storage
  .from(bucketName)
  .createSignedUrl(filePath, 3600); // 1 time
```

---

## 💻 Teknisk dokumentasjon {#teknisk}

### **Bruk av komponenter:**

#### **I registrering:**

```tsx
import { CertificationUpload } from "../components/CertificationUpload";

function Registration() {
  const [formData, setFormData] = useState({
    category: "elektro",
    certifications: [],
    // ...
  });

  return (
    <CertificationUpload
      category={formData.category}
      certifications={formData.certifications}
      onCertificationsChange={(certs) => 
        setFormData(prev => ({ ...prev, certifications: certs }))
      }
    />
  );
}
```

#### **På leverandørprofil:**

```tsx
import { CertificationDisplay } from "../components/CertificationDisplay";

function SupplierProfile({ supplier }) {
  return (
    <div>
      {/* ... annen profilinfo ... */}
      
      <CertificationDisplay
        certifications={supplier.certifications}
        category={supplier.category}
        supplierName={supplier.name}
      />
    </div>
  );
}
```

### **Validering:**

```typescript
// Sjekk om alle obligatoriske sertifiseringer er lastet opp
function hasRequiredCertifications(certs: Certification[], category: string) {
  const required = getRequiredCertificationTypes(category);
  
  return required.every(type =>
    certs.some(cert => cert.type === type && cert.status !== "pending")
  );
}

// Sjekk om sertifiseringer er utløpt
function hasExpiredCertifications(certs: Certification[]) {
  return certs.some(cert => {
    if (!cert.expiryDate) return false;
    return new Date(cert.expiryDate) < new Date();
  });
}

// Sjekk om leverandør kan motta jobber
function canReceiveJobs(supplier: SupplierProfile) {
  return (
    supplier.verificationStatus === "verified" &&
    !hasExpiredCertifications(supplier.certifications)
  );
}
```

### **Automatisk revalidering:**

```typescript
// Cron job som kjører daglig
async function checkExpiringCertifications() {
  const allSuppliers = await kv.getByPrefix("supplier-profile:");
  
  for (const supplier of allSuppliers) {
    const expiringSoon = supplier.certifications.filter(cert => {
      if (!cert.expiryDate) return false;
      const daysUntilExpiry = getDaysUntil(cert.expiryDate);
      return daysUntilExpiry > 0 && daysUntilExpiry <= 30;
    });
    
    if (expiringSoon.length > 0) {
      // Send e-post varsel
      await sendEmail({
        to: supplier.email,
        subject: "⚠️ Sertifiseringer utløper snart",
        template: "certification_expiring",
        data: { certifications: expiringSoon }
      });
      
      // Opprett notifikasjon
      await createNotification({
        userId: supplier.id,
        type: "certification_expiring",
        title: "Sertifiseringer må fornyes",
        message: `${expiringSoon.length} sertifisering(er) utløper innen 30 dager`
      });
    }
  }
}
```

---

## 📧 E-post varsler

### **Nye sertifiseringer lastet opp:**

```
Emne: Sertifiseringer mottatt - venter på verifisering

Hei Ole,

Vi har mottatt dine sertifiseringer for Elektriker.

Dokumenter mottatt:
✓ Ansvarsforsikring
✓ Organisasjonsnummer
✓ DSB Elvirksomhetsregistrering
✓ Fagbrev Elektriker

Vi verifiserer dokumentene innen 1-3 virkedager.

Med vennlig hilsen,
Håndtverkeren
```

### **Sertifiseringer verifisert:**

```
Emne: ✅ Sertifiseringer godkjent - Du er nå verifisert!

Hei Ole,

Gratulerer! Dine sertifiseringer er godkjent.

Du har nå et grønt "Verifisert Elektriker"-merke på profilen din.

Dette betyr:
✅ Kunder ser at du er verifisert
✅ Du rangeres høyere i søkeresultater
✅ Du kan motta jobber

Start å motta jobber: [Se tilgjengelige jobber]

Med vennlig hilsen,
Håndtverkeren
```

### **Sertifiseringer utløper snart:**

```
Emne: ⚠️ Sertifiseringer utløper om 30 dager

Hei Ole,

Følgende sertifiseringer utløper snart:

⚠️ Ansvarsforsikring - Utløper 31.12.2026 (27 dager)

Vennligst last opp fornyede dokumenter for å beholde verifiseringen.

[Last opp nye dokumenter]

Hvis sertifiseringene utløper:
❌ Verifisert-merke fjernes
❌ Du kan ikke motta nye jobber

Med vennlig hilsen,
Håndtverkeren
```

---

## 🎯 Fordeler for plattformen

### **For Håndterkeren:**

✅ **Kvalitetssikring** - Kun kvalifiserte håndverkere  
✅ **Juridisk beskyttelse** - Vi har verifisert kompetanse  
✅ **Konkurransefortrinn** - Eneste plattform med full verifisering  
✅ **Kunde tillit** - Trygghet for kunder  
✅ **Redusert risiko** - Mindre sannsynlighet for dårlig arbeid  

### **For leverandører:**

✅ **Profesjonelt image** - Grønt verifiseringsmerke  
✅ **Høyere rangering** - Fremheves i søk  
✅ **Flere jobber** - Kunder velger verifiserte  
✅ **Troverdighet** - Viser at de tar yrket på alvor  
✅ **Konkurransefortrinn** - Skiller seg ut fra konkurrenter  

### **For kunder:**

✅ **Trygghet** - Vet at håndverkeren er kvalifisert  
✅ **Lovlig arbeid** - Elektrikere er DSB-registrert  
✅ **Gyldig forsikring** - Beskyttet ved skader  
✅ **Enkel verifisering** - Kan sjekke i offentlige registre  
✅ **Redusert risiko** - Mindre sannsynlighet for problemer  

---

## 📊 Statistikk og analyse

### **Nøkkeltall vi tracker:**

- **Verifiseringsrate:** % av leverandører som er verifiserte
- **Verif iseringstid:** Gjennomsnittlig tid fra registrering til verifisering
- **Utløpsrate:** % sertifiseringer som utløper uten fornyelse
- **Konvertering:** Verifiserte vs. ikke-verifiserte (jobber vunnet)

### **Rapporter:**

```typescript
// Månedlig rapport
{
  totalSuppliers: 1250,
  verified: 980,        // 78%
  pending: 150,         // 12%
  unverified: 120,      // 10%
  avgVerificationTime: "2.3 dager",
  certificationsByCategory: {
    elektro: 340,
    ror: 180,
    tre: 220,
    // ...
  }
}
```

---

## ✅ Implementeringsstatus

### **✅ Ferdig:**

- [x] CertificationUpload komponent
- [x] CertificationDisplay komponent
- [x] Integrasjon i registreringsflyt
- [x] Bransjespesifikke krav
- [x] Fil-opplasting
- [x] Status tracking

### **🔄 Gjenstår:**

- [ ] Backend fil-lagring (Supabase Storage)
- [ ] Admin-panel for verifisering
- [ ] Automatisk utløpsvarslinger (cron job)
- [ ] E-post templates for sertifiseringer
- [ ] Integrasjon på leverandørprofil-siden
- [ ] Integrasjon i søkeresultater
- [ ] Statistikk dashboard

---

## 🚀 Neste steg

1. **Implementere backend fil-lagring**
2. **Lage admin-panel** for verifisering
3. **Sette opp cron jobs** for utløpsvarslinger
4. **Integrer visning** på leverandørprofil
5. **Test hele flyten** end-to-end
6. **Lag e-post templates**
7. **Dokumentere for testkunder**

---

**Versjon:** 1.0  
**Sist oppdatert:** 11. mars 2026  
**© 2026 Håndterkeren AS - Alle rettigheter reservert**
