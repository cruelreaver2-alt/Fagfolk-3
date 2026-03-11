import { CheckCircle, X } from "lucide-react";

/**
 * This component serves as a template for pilot invitation emails.
 * Copy the HTML output and paste it into your email provider (Resend, Mailchimp, etc.)
 */
export function PilotEmail() {
  return (
    <div style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', maxWidth: '600px', margin: '0 auto', backgroundColor: '#F8FAFC' }}>
      {/* Header */}
      <div style={{ backgroundColor: '#17384E', padding: '32px 24px', textAlign: 'center' }}>
        <div style={{ fontSize: '32px', marginBottom: '8px' }}>🔨</div>
        <h1 style={{ color: '#FFFFFF', fontSize: '24px', fontWeight: 'bold', margin: '0 0 8px 0' }}>
          Håndtverkeren
        </h1>
        <p style={{ color: '#FFFFFF', opacity: 0.8, fontSize: '14px', margin: 0 }}>
          Fremtidens håndverkerplattform
        </p>
      </div>

      {/* Hero Banner */}
      <div style={{ background: 'linear-gradient(135deg, #E07B3E 0%, #d16f35 100%)', padding: '24px', textAlign: 'center' }}>
        <div style={{ fontSize: '32px', marginBottom: '12px' }}>🚀</div>
        <h2 style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 'bold', margin: '0 0 8px 0' }}>
          Du er invitert til pilotprogrammet!
        </h2>
        <p style={{ color: '#FFFFFF', fontSize: '14px', margin: '0' }}>
          Bli en av de 100 første og få <strong>livstid 50% rabatt</strong>
        </p>
      </div>

      {/* Main Content */}
      <div style={{ backgroundColor: '#FFFFFF', padding: '32px 24px' }}>
        <p style={{ fontSize: '16px', color: '#111827', lineHeight: '1.6', marginTop: 0 }}>
          Hei! 👋
        </p>
        <p style={{ fontSize: '16px', color: '#111827', lineHeight: '1.6' }}>
          Vi er glade for å invitere deg til å bli testpilot for <strong>Håndtverkeren</strong> – 
          den første håndverkerplattformen som faktisk løser problemene Mittanbud og andre ignorerer.
        </p>

        {/* Why We're Different */}
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginTop: '32px', marginBottom: '16px' }}>
          Hvorfor er vi annerledes?
        </h3>

        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '24px' }}>
          <thead>
            <tr style={{ backgroundColor: '#F8FAFC' }}>
              <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 'bold', color: '#6B7280', borderBottom: '2px solid #E5E7EB' }}>Funksjon</th>
              <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 'bold', color: '#E07B3E', borderBottom: '2px solid #E5E7EB' }}>Oss ⭐</th>
              <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 'bold', color: '#6B7280', borderBottom: '2px solid #E5E7EB' }}>Mittanbud</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: '#FFFFFF' }}>
              <td style={{ padding: '12px', fontSize: '14px', color: '#111827', borderBottom: '1px solid #E5E7EB' }}>✓ Verifiserte fagfolk</td>
              <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #E5E7EB' }}>✅</td>
              <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #E5E7EB' }}>❌</td>
            </tr>
            <tr style={{ backgroundColor: '#F8FAFC' }}>
              <td style={{ padding: '12px', fontSize: '14px', color: '#111827', borderBottom: '1px solid #E5E7EB' }}>✓ Fastpris-tilbud</td>
              <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #E5E7EB' }}>✅</td>
              <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #E5E7EB' }}>❌</td>
            </tr>
            <tr style={{ backgroundColor: '#FFFFFF' }}>
              <td style={{ padding: '12px', fontSize: '14px', color: '#111827', borderBottom: '1px solid #E5E7EB' }}>✓ Materialdatabase</td>
              <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #E5E7EB' }}>✅</td>
              <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #E5E7EB' }}>❌</td>
            </tr>
            <tr style={{ backgroundColor: '#F8FAFC' }}>
              <td style={{ padding: '12px', fontSize: '14px', color: '#111827', borderBottom: '1px solid #E5E7EB' }}>✓ Innebygd chat</td>
              <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #E5E7EB' }}>✅</td>
              <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #E5E7EB' }}>❌</td>
            </tr>
            <tr style={{ backgroundColor: '#FFFFFF' }}>
              <td style={{ padding: '12px', fontSize: '14px', color: '#111827', borderBottom: '1px solid #E5E7EB' }}>✓ Dashboard & statistikk</td>
              <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #E5E7EB' }}>✅</td>
              <td style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #E5E7EB' }}>❌</td>
            </tr>
          </tbody>
        </table>

        {/* Key Benefits */}
        <div style={{ backgroundColor: '#EFF6FF', border: '2px solid #BFDBFE', borderRadius: '8px', padding: '20px', marginBottom: '24px' }}>
          <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#1E40AF', marginTop: 0, marginBottom: '12px' }}>
            🎁 Som testpilot får du:
          </h4>
          <ul style={{ margin: 0, paddingLeft: '20px', color: '#1E3A8A', fontSize: '14px', lineHeight: '1.8' }}>
            <li><strong>50% livstid rabatt</strong> på alle betalte planer</li>
            <li>Gratis tilgang til alle premium-funksjoner</li>
            <li>Direkte kontakt med utviklerteamet</li>
            <li>Mulighet til å påvirke produktutviklingen</li>
          </ul>
        </div>

        {/* For Customers */}
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginTop: '32px', marginBottom: '16px' }}>
          For kunder 👨‍👩‍👧‍👦
        </h3>
        <ul style={{ margin: '0 0 24px 0', paddingLeft: '20px', color: '#6B7280', fontSize: '14px', lineHeight: '1.8' }}>
          <li><strong>100% verifiserte fagfolk</strong> – ID-sjekket og kvalitetssikret</li>
          <li><strong>Fastpris-tilbud</strong> – Ingen overraskelser, kun faste priser</li>
          <li><strong>Materialdatabase</strong> – Spesifiser nøyaktig merke/modell (f.eks Nibe F2120)</li>
          <li><strong>Automatisk godkjenning</strong> – Ett klikk for å godkjenne tilbud</li>
          <li><strong>Innebygd chat</strong> – Alt på ett sted + e-postvarsler</li>
          <li><strong>Mobiloptimalisert</strong> – Perfekt på iOS og Android</li>
        </ul>

        {/* For Suppliers */}
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginTop: '32px', marginBottom: '16px' }}>
          For leverandører 🔨
        </h3>
        <ul style={{ margin: '0 0 24px 0', paddingLeft: '20px', color: '#6B7280', fontSize: '14px', lineHeight: '1.8' }}>
          <li><strong>Smart tilbudsbygger</strong> – 3 nivåer med integrerte kalkulatorer</li>
          <li><strong>Profesjonelle tilbudsmaler</strong> – PDF-klare tilbud automatisk</li>
          <li><strong>Sanntids dashboard</strong> – Se godkjenningsrate, inntjening og statistikk</li>
          <li><strong>Instant varsler</strong> – Push + e-post ved nye jobber</li>
          <li><strong>Materialdatabase</strong> – Søk produkter med veiledende priser</li>
          <li><strong>Fleksible abonnementer</strong> – Velg mellom Basic (gratis), Pro, eller Premium</li>
        </ul>

        {/* CTA Button */}
        <div style={{ textAlign: 'center', margin: '40px 0' }}>
          <a href="https://handtverkeren.no/pilot" style={{ display: 'inline-block', backgroundColor: '#E07B3E', color: '#FFFFFF', padding: '16px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px' }}>
            Les mer og registrer deg →
          </a>
        </div>

        {/* Timeline */}
        <div style={{ backgroundColor: '#FEF3E2', border: '2px solid #E07B3E', borderRadius: '8px', padding: '20px', marginBottom: '24px' }}>
          <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#92400E', marginTop: 0, marginBottom: '12px' }}>
            📅 Viktige datoer:
          </h4>
          <ul style={{ margin: 0, paddingLeft: '20px', color: '#92400E', fontSize: '14px', lineHeight: '1.8' }}>
            <li><strong>Nå:</strong> Registrering åpner for de 100 første</li>
            <li><strong>15. mars 2026:</strong> Pilotprogrammet starter</li>
            <li><strong>Våren 2026:</strong> Full lansering til allmennheten</li>
          </ul>
        </div>

        {/* Closing */}
        <p style={{ fontSize: '16px', color: '#111827', lineHeight: '1.6' }}>
          Vi gleder oss til å ha deg med på reisen! 🚀
        </p>
        <p style={{ fontSize: '16px', color: '#111827', lineHeight: '1.6', marginBottom: 0 }}>
          Med vennlig hilsen,<br />
          <strong>Håndtverkeren-teamet</strong>
        </p>
      </div>

      {/* Footer */}
      <div style={{ backgroundColor: '#17384E', padding: '24px', textAlign: 'center' }}>
        <p style={{ color: '#FFFFFF', opacity: 0.8, fontSize: '12px', margin: '0 0 8px 0' }}>
          Spørsmål? Kontakt oss på <a href="mailto:pilot@handtverkeren.no" style={{ color: '#E07B3E' }}>pilot@handtverkeren.no</a>
        </p>
        <p style={{ color: '#FFFFFF', opacity: 0.6, fontSize: '11px', margin: 0 }}>
          © 2026 Håndtverkeren. Alle rettigheter reservert.
        </p>
      </div>
    </div>
  );
}

/**
 * TEXT-ONLY EMAIL VERSION (for plain-text email clients)
 * Copy this into your email provider as the text alternative:
 */

export const PILOT_EMAIL_TEXT = `
Håndtverkeren - Invitasjon til pilotprogrammet 🚀

Hei! 👋

Vi er glade for å invitere deg til å bli testpilot for Håndtverkeren – den første håndverkerplattformen som faktisk løser problemene Mittanbud og andre ignorerer.

HVORFOR ER VI ANNERLEDES?

Funksjon                  | Håndtverkeren | Mittanbud
--------------------------|---------------|----------
Verifiserte fagfolk       | ✅            | ❌
Fastpris-tilbud          | ✅            | ❌
Materialdatabase         | ✅            | ❌
Innebygd chat            | ✅            | ❌
Dashboard & statistikk   | ✅            | ❌

SOM TESTPILOT FÅR DU:
✓ 50% livstid rabatt på alle betalte planer
✓ Gratis tilgang til alle premium-funksjoner
✓ Direkte kontakt med utviklerteamet
✓ Mulighet til å påvirke produktutviklingen

FOR KUNDER 👨‍👩‍👧‍👦
• 100% verifiserte fagfolk – ID-sjekket og kvalitetssikret
• Fastpris-tilbud – Ingen overraskelser, kun faste priser
• Materialdatabase – Spesifiser nøyaktig merke/modell
• Automatisk godkjenning – Ett klikk for å godkjenne tilbud
• Innebygd chat – Alt på ett sted + e-postvarsler
• Mobiloptimalisert – Perfekt på iOS og Android

FOR LEVERANDØRER 🔨
• Smart tilbudsbygger – 3 nivåer med integrerte kalkulatorer
• Profesjonelle tilbudsmaler – PDF-klare tilbud automatisk
• Sanntids dashboard – Se godkjenningsrate og inntjening
• Instant varsler – Push + e-post ved nye jobber
• Materialdatabase – Søk produkter med veiledende priser
• Fleksible abonnementer – Velg mellom Basic, Pro, eller Premium

VIKTIGE DATOER:
• Nå: Registrering åpner for de 100 første
• 15. mars 2026: Pilotprogrammet starter
• Våren 2026: Full lansering til allmennheten

REGISTRER DEG NÅ:
https://handtverkeren.no/pilot

Vi gleder oss til å ha deg med på reisen! 🚀

Med vennlig hilsen,
Håndtverkeren-teamet

---
Spørsmål? Kontakt oss på pilot@handtverkeren.no
© 2026 Håndtverkeren. Alle rettigheter reservert.
`;
