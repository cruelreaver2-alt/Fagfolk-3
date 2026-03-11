# 🧪 Testbrukere - Instruksjoner

## ❌ Problem
Testbrukerene `kunde@test.no` og `leverandor@test.no` fantes ikke i Supabase-databasen, så innlogging fungerte ikke.

## ✅ Løsning
Jeg har lagt til en "Opprett testbrukere"-knapp i Admin Panel som automatisk oppretter begge testbrukerne.

---

## 📋 **Slik oppretter du testbrukere:**

### **Steg 1: Gå til Admin Panel**
- Åpne applikasjonen
- Gå til: `/admin` eller klikk på ⚙️ Settings-ikonet i header
- Alternativt: Klikk på knappen "Opprett testbrukere i Admin Panel" på innloggingssiden

### **Steg 2: Opprett testbrukere**
- Scroll ned til seksjonen **"🔐 Autentisering & Testbrukere"**
- Klikk på den grønne knappen **"🧪 Opprett testbrukere"**
- Vent til du ser: ✅ "Testbrukere opprettet!"

### **Steg 3: Logg inn**
Nå kan du logge inn med:

**Kunde:**
- E-post: `kunde@test.no`
- Passord: `passord123`
- Logg inn på: `/logg-inn`

**Leverandør:**
- E-post: `leverandor@test.no`
- Passord: `passord123`
- Logg inn på: `/leverandør-logg-inn`

---

## 🔧 **Hva skjer i bakgrunnen?**

Når du klikker "Opprett testbrukere":

### **1. Kunde-bruker opprettes:**
```json
{
  "email": "kunde@test.no",
  "password": "passord123",
  "name": "Test Kunde",
  "role": "customer"
}
```
- Opprettes i Supabase Auth
- Får automatisk en kundeprofil i databasen
- E-posten blir auto-bekreftet

### **2. Leverandør-bruker opprettes:**
```json
{
  "email": "leverandor@test.no",
  "password": "passord123",
  "name": "Test Leverandør",
  "role": "supplier",
  "company": "Test AS",
  "category": "elektro",
  "phone": "+47 123 45 678",
  "orgNumber": "123456789",
  "certifications": [
    { "type": "insurance", "status": "uploaded" },
    { "type": "org_number", "status": "uploaded" },
    { "type": "dsb_registration", "status": "uploaded" },
    { "type": "electrician_certificate", "status": "uploaded" }
  ]
}
```
- Opprettes i Supabase Auth
- Får automatisk en leverandørprofil i databasen
- Alle obligatoriske sertifiseringer er lagt til
- **Status:** GODKJENT (alle required certifications er "uploaded")
- Kan umiddelbart motta jobber

---

## ⚠️ **Feilmeldinger**

### **"Kunne ikke opprette testbrukere. De eksisterer sannsynligvis allerede."**
Dette er OK! Det betyr at testbrukerne allerede eksisterer i databasen. Du kan logge inn med dem.

### **"User already registered"**
Dette betyr at e-postadressen allerede er registrert i Supabase. Bruk eksisterende innlogging.

---

## 🎯 **Hva kan du teste?**

### **Som Kunde (kunde@test.no):**
✓ Opprette nye jobber/forespørsler
✓ Motta tilbud fra leverandører
✓ Godkjenne/avslå tilbud
✓ Sende meldinger til leverandører
✓ Markere jobber som fullført
✓ Gi anmeldelser

### **Som Leverandør (leverandor@test.no):**
✓ Se alle tilgjengelige jobber
✓ Sende tilbud til kunder
✓ Bruke tilbudsbygger (Enkel, Medium, Avansert)
✓ Søke i materialdatabasen
✓ Sende meldinger til kunder
✓ Se dashboard med statistikk
✓ Redigere profil og portefølje

---

## 📄 **Oppdaterte filer:**

1. ✅ `/src/app/pages/AdminPanel.tsx`
   - Ny seksjon: "🔐 Autentisering & Testbrukere"
   - Knapp: "🧪 Opprett testbrukere"
   - Viser testbruker-credentials
   - Lenker til innloggingssider

2. ✅ `/src/app/pages/Login.tsx`
   - Oppdatert demo-påloggingsboks
   - Ny knapp: "Opprett testbrukere i Admin Panel"
   - Lenke til `/admin`

3. ✅ `/src/app/pages/SupplierLogin.tsx`
   - Oppdatert demo-påloggingsboks
   - Ny knapp: "Opprett testbrukere i Admin Panel"
   - Lenke til `/admin`

---

## 🚀 **Raskt oppsett:**

```bash
1. Åpne applikasjonen
2. Gå til /admin
3. Klikk "🧪 Opprett testbrukere"
4. Vent på bekreftelse
5. Gå til /logg-inn eller /leverandør-logg-inn
6. Logg inn med testbruker
```

---

## 💡 **Tips:**

- **Første gang:** Bruk alltid Admin Panel for å opprette testbrukere
- **Testing:** Logg ut og inn med forskjellige roller for å teste full brukerflyt
- **Demo-data:** Bruk andre Admin Panel-funksjoner for å legge til:
  - Demo-profiler
  - Porteføljeprosjekter
  - Anmeldelser
  - Notifikasjoner
  - Produktdatabase

---

## ✅ **Status: FUNGERER NÅ**

Testbrukersystemet er nå fullt funksjonelt! 🎉

**Neste steg:**
1. Opprett testbrukere via Admin Panel
2. Logg inn med en av testbrukerene
3. Test hele plattformen
4. Hvis du trenger flere testbrukere, bruk registreringssiden eller Admin Panel

---

**Dato oppdatert:** 11. mars 2026  
**Versjon:** 1.0
