/**
 * ONBOARDING-GUIDE FOR LEVERANDØRER
 * Print-optimalisert versjon for PDF-generering
 * Oppdatert: Mars 2026 - Inkluderer alle nye funksjoner
 */

export function OnboardingLeverandor() {
  return (
    <div className="print-document" style={{
      fontFamily: 'Inter, -apple-system, sans-serif',
      maxWidth: '210mm',
      margin: '0 auto',
      padding: '20mm',
      backgroundColor: '#FFFFFF',
      color: '#111827',
      lineHeight: 1.6
    }}>
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 15mm;
          }
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          .page-break {
            page-break-before: always;
          }
          .no-print {
            display: none;
          }
        }
      `}</style>

      {/* Cover */}
      <div style={{ textAlign: 'center', paddingTop: '40mm' }}>
        <div style={{ fontSize: '64px', marginBottom: '16px' }}>🔨</div>
        <h1 style={{ fontSize: '42px', fontWeight: 'bold', color: '#17384E', marginBottom: '16px' }}>
          Onboarding-guide
        </h1>
        <h2 style={{ fontSize: '28px', color: '#E07B3E', marginBottom: '32px' }}>
          For leverandører - Testpilot 2026
        </h2>
        <div style={{ 
          display: 'inline-block', 
          padding: '16px 32px', 
          backgroundColor: '#F8FAFC', 
          borderRadius: '12px',
          border: '2px solid #E5E7EB',
          marginBottom: '48px'
        }}>
          <p style={{ fontSize: '16px', color: '#6B7280', margin: 0 }}>
            <strong>Tidsbruk:</strong> 15-20 minutter<br/>
            <strong>Vanskelighetsgrad:</strong> Medium<br/>
            <strong>Versjon:</strong> Mars 2026
          </p>
        </div>

        <p style={{ fontSize: '18px', color: '#111827', maxWidth: '500px', margin: '0 auto' }}>
          Denne guiden viser deg steg-for-steg hvordan du oppretter en leverandørkonto, 
          verifiserer identiteten din, laster opp sertifiseringer, og sender ditt første tilbud
        </p>
      </div>

      {/* Oversikt */}
      <div className="page-break" style={{ paddingTop: '20px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#17384E', marginBottom: '24px', borderBottom: '3px solid #E07B3E', paddingBottom: '12px' }}>
          📋 Oversikt - Hva du får tilgang til
        </h2>

        <p style={{ fontSize: '16px', marginBottom: '24px', color: '#6B7280' }}>
          Som leverandør får du tilgang til kraftige verktøy:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
          {[
            { icon: "🎯", title: "Smart tilbudsbygger", desc: "3 nivåer + testmodus + detaljerte arbeidslinjer" },
            { icon: "📊", title: "Dashboard & statistikk", desc: "Følg din ytelse i sanntid" },
            { icon: "🔔", title: "Jobbvarsler", desc: "Få beskjed om relevante jobber" },
            { icon: "💬", title: "Direkte chat", desc: "Kommuniser med kunder" },
            { icon: "📦", title: "Materialdatabase", desc: "10 000+ produkter med priser" },
            { icon: "🏅", title: "Sertifiserings-badges", desc: "Vis dine godkjenninger visuelt" },
            { icon: "🔒", title: "Sikker betaling (Escrow)", desc: "Trygg betaling for begge parter" },
            { icon: "💰", title: "Testpilot-rabatt", desc: "40% rabatt i 6 måneder!" }
          ].map((item, index) => (
            <div key={index} style={{ 
              padding: '16px', 
              backgroundColor: '#F8FAFC',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px'
            }}>
              <div style={{ fontSize: '28px' }}>{item.icon}</div>
              <div>
                <h3 style={{ fontSize: '15px', fontWeight: 'bold', color: '#111827', margin: '0 0 4px 0' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '13px', color: '#6B7280', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ 
          backgroundColor: '#FEF3E2', 
          border: '2px solid #E07B3E', 
          borderRadius: '12px', 
          padding: '20px',
          marginBottom: '24px'
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#92400E', marginTop: 0, marginBottom: '12px' }}>
            💰 Prismodell (Testpilot-rabatt!)
          </h3>
          <table style={{ width: '100%', fontSize: '13px', color: '#92400E' }}>
            <tbody>
              <tr>
                <td style={{ padding: '8px 0', fontWeight: 'bold' }}>Fagfolk Light:</td>
                <td style={{ padding: '8px 0' }}>499 kr/mnd → <strong>299 kr/mnd (40% rabatt!)</strong></td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', fontWeight: 'bold' }}>Fagfolk Medium:</td>
                <td style={{ padding: '8px 0' }}>799 kr/mnd → <strong>479 kr/mnd (40% rabatt!)</strong></td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', fontWeight: 'bold' }}>Fagfolk Pro:</td>
                <td style={{ padding: '8px 0' }}>1499 kr/mnd → <strong>899 kr/mnd (40% rabatt!)</strong></td>
              </tr>
            </tbody>
          </table>
          <p style={{ fontSize: '12px', marginTop: '12px', marginBottom: 0 }}>
            ⚠️ <strong>VIKTIG:</strong> Som testpilot (de 20 første) får du 40% rabatt i 6 måneder + kostnadsfri pilot-fase!
          </p>
        </div>
      </div>

      {/* Steg 1: Registrering */}
      <div className="page-break" style={{ paddingTop: '20px' }}>
        <div style={{ 
          backgroundColor: '#17384E', 
          color: '#FFFFFF',
          padding: '16px 24px',
          borderRadius: '8px 8px 0 0',
          marginBottom: '0'
        }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', margin: 0 }}>
            STEG 1: Opprett leverandørkonto
          </h2>
        </div>
        <div style={{ 
          border: '2px solid #17384E',
          borderTop: 'none',
          borderRadius: '0 0 8px 8px',
          padding: '24px',
          marginBottom: '32px'
        }}>
          <p style={{ fontSize: '16px', color: '#6B7280', marginBottom: '24px' }}>
            <strong>Tidsbruk:</strong> 3-5 minutter
          </p>

          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            1.1 Gå til leverandør-registreringssiden
          </h3>
          <div style={{ 
            backgroundColor: '#F8FAFC',
            padding: '16px',
            borderRadius: '8px',
            marginBottom: '24px',
            border: '1px solid #E5E7EB'
          }}>
            <p style={{ fontSize: '14px', color: '#6B7280', margin: '0 0 8px 0' }}>
              <strong>URL:</strong>
            </p>
            <p style={{ 
              fontSize: '16px', 
              fontFamily: 'monospace',
              color: '#E07B3E',
              backgroundColor: '#FFFFFF',
              padding: '12px',
              borderRadius: '4px',
              border: '1px solid #E5E7EB',
              margin: 0
            }}>
              https://handtverkeren.no/leverandør-logg-inn
            </p>
            <p style={{ fontSize: '13px', color: '#6B7280', margin: '12px 0 0 0' }}>
              Klikk på "Opprett ny konto" nederst på siden
            </p>
          </div>

          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            1.2 Fyll ut grunnleggende informasjon
          </h3>
          <table style={{ 
            width: '100%', 
            borderCollapse: 'collapse',
            marginBottom: '24px'
          }}>
            <thead>
              <tr style={{ backgroundColor: '#F8FAFC' }}>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '13px', fontWeight: 'bold', color: '#111827', border: '1px solid #E5E7EB' }}>
                  Felt
                </th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '13px', fontWeight: 'bold', color: '#111827', border: '1px solid #E5E7EB' }}>
                  Beskrivelse
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { field: "Firmanavn", desc: "Navn på selskapet ditt (eller ditt navn hvis enkeltpersonforetak)" },
                { field: "Organisasjonsnummer", desc: "9-sifret org.nr fra Brønnøysund (OBLIGATORISK)" },
                { field: "Fullt navn", desc: "Kontaktpersons fulle navn (eier/daglig leder)" },
                { field: "E-postadresse", desc: "Bedriftens e-post for innlogging og varsler" },
                { field: "Passord", desc: "Sterkt passord (min. 8 tegn, bruk tall og spesialtegn)" },
                { field: "Telefonnummer", desc: "Mobilnummer for direkte kontakt" },
                { field: "Kategorier", desc: "Velg hvilke typer jobber du kan ta (f.eks. Elektriker, Rørlegger)" },
              ].map((row, index) => (
                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F8FAFC' }}>
                  <td style={{ padding: '12px', fontSize: '13px', color: '#111827', border: '1px solid #E5E7EB', fontWeight: 'bold', width: '180px' }}>
                    {row.field}
                  </td>
                  <td style={{ padding: '12px', fontSize: '13px', color: '#6B7280', border: '1px solid #E5E7EB' }}>
                    {row.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            1.3 Bekreft e-postadressen
          </h3>
          <ol style={{ paddingLeft: '24px', fontSize: '14px', color: '#6B7280', lineHeight: '1.8' }}>
            <li>Du mottar en bekreftelses-e-post</li>
            <li>Klikk på lenken i e-posten</li>
            <li>Du blir logget inn automatisk</li>
          </ol>
        </div>
      </div>

      {/* Steg 2: Sertifiseringer og godkjenninger */}
      <div className="page-break" style={{ paddingTop: '20px' }}>
        <div style={{ 
          backgroundColor: '#E07B3E', 
          color: '#FFFFFF',
          padding: '16px 24px',
          borderRadius: '8px 8px 0 0',
          marginBottom: '0'
        }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', margin: 0 }}>
            STEG 2: ⚠️ Last opp sertifiseringer (OBLIGATORISK!)
          </h2>
        </div>
        <div style={{ 
          border: '2px solid #E07B3E',
          borderTop: 'none',
          borderRadius: '0 0 8px 8px',
          padding: '24px',
          marginBottom: '32px'
        }}>
          <p style={{ fontSize: '16px', color: '#6B7280', marginBottom: '24px' }}>
            <strong>Tidsbruk:</strong> 10-15 minutter
          </p>

          <div style={{ 
            backgroundColor: '#FEF2F2', 
            border: '2px solid #EF4444', 
            borderRadius: '8px', 
            padding: '16px',
            marginBottom: '24px'
          }}>
            <p style={{ fontSize: '14px', color: '#991B1B', margin: 0, fontWeight: '500' }}>
              ⚠️ <strong>KRITISK:</strong> Du kan IKKE sende tilbud før alle påkrevde sertifiseringer er lastet opp og verifisert! 
              Systemet vil automatisk avslå søknaden din hvis du mangler lovpålagte godkjenninger.
            </p>
          </div>

          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            2.1 Generelle krav (ALLE fagområder)
          </h3>
          <table style={{ 
            width: '100%', 
            borderCollapse: 'collapse',
            marginBottom: '24px'
          }}>
            <tbody>
              {[
                { 
                  icon: "🛡️", 
                  cert: "Ansvarsforsikring", 
                  desc: "Gyldig yrkesskadeforsikring minimum 10 mill. kr",
                  required: "✅ OBLIGATORISK"
                },
                { 
                  icon: "📄", 
                  cert: "Organisasjonsnummer", 
                  desc: "Registrert i Brønnøysundregistrene",
                  required: "✅ OBLIGATORISK"
                },
                { 
                  icon: "🪪", 
                  cert: "ID-verifisering", 
                  desc: "BankID eller tilsvarende godkjent ID",
                  required: "✅ OBLIGATORISK"
                },
              ].map((row, index) => (
                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#F8FAFC' : '#FFFFFF' }}>
                  <td style={{ padding: '12px', fontSize: '28px', border: '1px solid #E5E7EB', width: '60px', textAlign: 'center' }}>
                    {row.icon}
                  </td>
                  <td style={{ padding: '12px', fontSize: '13px', color: '#111827', border: '1px solid #E5E7EB', fontWeight: 'bold' }}>
                    {row.cert}
                  </td>
                  <td style={{ padding: '12px', fontSize: '12px', color: '#6B7280', border: '1px solid #E5E7EB' }}>
                    {row.desc}
                  </td>
                  <td style={{ padding: '12px', fontSize: '11px', color: '#DC2626', border: '1px solid #E5E7EB', fontWeight: 'bold' }}>
                    {row.required}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            2.2 Fagspesifikke krav (avhenger av kategori)
          </h3>

          <div style={{ 
            backgroundColor: '#EFF6FF', 
            border: '2px solid #BFDBFE', 
            borderRadius: '8px', 
            padding: '16px',
            marginBottom: '16px'
          }}>
            <p style={{ fontSize: '14px', color: '#1E40AF', margin: '0 0 8px 0', fontWeight: 'bold' }}>
              ⚡ ELEKTRIKER:
            </p>
            <ul style={{ margin: 0, paddingLeft: '20px', color: '#1E3A8A', fontSize: '13px', lineHeight: '1.8' }}>
              <li>✅ DSB Elvirksomhetsregistrering (OBLIGATORISK)</li>
              <li>✅ Fagbrev elektriker (OBLIGATORISK)</li>
              <li>✅ Autorisasjon fra DSB (OBLIGATORISK)</li>
            </ul>
          </div>

          <div style={{ 
            backgroundColor: '#ECFDF5', 
            border: '2px solid #A7F3D0', 
            borderRadius: '8px', 
            padding: '16px',
            marginBottom: '16px'
          }}>
            <p style={{ fontSize: '14px', color: '#065F46', margin: '0 0 8px 0', fontWeight: 'bold' }}>
              🔧 RØRLEGGER:
            </p>
            <ul style={{ margin: 0, paddingLeft: '20px', color: '#064E3B', fontSize: '13px', lineHeight: '1.8' }}>
              <li>✅ Kommunal godkjenning (OBLIGATORISK)</li>
              <li>✅ Fagbrev rørlegger (OBLIGATORISK)</li>
              <li>✅ VA-autorisasjon (OBLIGATORISK)</li>
            </ul>
          </div>

          <div style={{ 
            backgroundColor: '#FEF3C7', 
            border: '2px solid #FCD34D', 
            borderRadius: '8px', 
            padding: '16px',
            marginBottom: '16px'
          }}>
            <p style={{ fontSize: '14px', color: '#92400E', margin: '0 0 8px 0', fontWeight: 'bold' }}>
              🏗️ TØMRER / TAK:
            </p>
            <ul style={{ margin: 0, paddingLeft: '20px', color: '#78350F', fontSize: '13px', lineHeight: '1.8' }}>
              <li>✅ HMS-kort (OBLIGATORISK)</li>
              <li>✅ Fallsikring A og B (OBLIGATORISK)</li>
              <li>⭐ Fagbrev tømrer (anbefalt, men ikke obligatorisk)</li>
            </ul>
          </div>

          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            2.3 Slik laster du opp sertifiseringer
          </h3>
          <ol style={{ paddingLeft: '24px', fontSize: '14px', color: '#6B7280', lineHeight: '1.8', marginBottom: '24px' }}>
            <li>Logg inn og gå til "Rediger profil"</li>
            <li>Scroll ned til "Sertifiseringer og godkjenninger"</li>
            <li>Klikk "Legg til sertifisering"</li>
            <li>Velg type sertifisering fra dropdown-menyen</li>
            <li>Last opp PDF/bilde av dokumentet (maks 5 MB)</li>
            <li>Angi utløpsdato hvis relevant</li>
            <li>Klikk "Lagre"</li>
            <li>Gjenta for alle påkrevde sertifiseringer</li>
          </ol>

          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            2.4 Automatisk godkjenning/avslag
          </h3>
          <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '12px' }}>
            Systemet sjekker automatisk om du har lastet opp alle påkrevde dokumenter:
          </p>
          <ul style={{ paddingLeft: '24px', fontSize: '14px', color: '#6B7280', lineHeight: '1.8', marginBottom: '16px' }}>
            <li>✅ <strong>Alle dokumenter lastet opp:</strong> Automatisk godkjent → kan sende tilbud</li>
            <li>❌ <strong>Mangler dokumenter:</strong> Automatisk avslått → får beskjed om hva som mangler</li>
            <li>⏳ <strong>Verifisering:</strong> Admin gjennomgår dokumentene manuelt (1-2 dager)</li>
          </ul>

          <div style={{ 
            backgroundColor: '#F0FDF4', 
            border: '2px solid #86EFAC', 
            borderRadius: '8px', 
            padding: '16px'
          }}>
            <p style={{ fontSize: '14px', color: '#166534', margin: '0', fontWeight: '500' }}>
              🎖️ <strong>Visning av badges:</strong> Når sertifiseringene dine er verifisert, 
              vises de som fargerike badges på profilen din. Kunder ser umiddelbart hvilke 
              godkjenninger du har!
            </p>
          </div>
        </div>
      </div>

      {/* Steg 3: ID-verifisering */}
      <div className="page-break" style={{ paddingTop: '20px' }}>
        <div style={{ 
          backgroundColor: '#17384E', 
          color: '#FFFFFF',
          padding: '16px 24px',
          borderRadius: '8px 8px 0 0',
          marginBottom: '0'
        }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', margin: 0 }}>
            STEG 3: ID-verifisering
          </h2>
        </div>
        <div style={{ 
          border: '2px solid #17384E',
          borderTop: 'none',
          borderRadius: '0 0 8px 8px',
          padding: '24px',
          marginBottom: '32px'
        }}>
          <p style={{ fontSize: '16px', color: '#6B7280', marginBottom: '24px' }}>
            <strong>Tidsbruk:</strong> 2-3 minutter
          </p>

          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            3.1 Forbered ID-dokumenter
          </h3>
          <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '12px' }}>
            Du må laste opp <strong>ett</strong> av følgende:
          </p>
          <ul style={{ paddingLeft: '24px', fontSize: '14px', color: '#6B7280', lineHeight: '1.8', marginBottom: '24px' }}>
            <li>✅ Førerkort (for- og bakside)</li>
            <li>✅ Pass (forsiden med bilde og informasjon)</li>
            <li>✅ Nasjonalt ID-kort (for- og bakside)</li>
          </ul>

          <div style={{ 
            backgroundColor: '#EFF6FF', 
            border: '2px solid #BFDBFE', 
            borderRadius: '8px', 
            padding: '16px',
            marginBottom: '24px'
          }}>
            <p style={{ fontSize: '13px', color: '#1E40AF', margin: '0 0 8px 0', fontWeight: 'bold' }}>
              📸 Krav til bildet:
            </p>
            <ul style={{ margin: 0, paddingLeft: '20px', color: '#1E3A8A', fontSize: '12px', lineHeight: '1.8' }}>
              <li>✓ God belysning (ikke mørkt eller overeksponert)</li>
              <li>✓ All tekst må være leselig</li>
              <li>✓ Hele kortet/passet må være synlig</li>
              <li>✓ Ikke blurry eller ute av fokus</li>
              <li>✓ Maksimal filstørrelse: 5 MB</li>
              <li>✓ Format: JPG, PNG eller PDF</li>
            </ul>
          </div>

          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            3.2 Last opp ID
          </h3>
          <ol style={{ paddingLeft: '24px', fontSize: '14px', color: '#6B7280', lineHeight: '1.8', marginBottom: '24px' }}>
            <li>Gå til "Rediger profil"</li>
            <li>Scroll ned til "ID-verifisering" seksjonen</li>
            <li>Klikk "Velg fil" og last opp ID-bildet ditt</li>
            <li>Klikk "Send til verifisering"</li>
          </ol>

          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            3.3 Vent på godkjenning
          </h3>
          <ol style={{ paddingLeft: '24px', fontSize: '14px', color: '#6B7280', lineHeight: '1.8', marginBottom: '16px' }}>
            <li>📧 Du får bekreftelses-e-post om at vi har mottatt ID-en</li>
            <li>👀 Admin-teamet gjennomgår manuelt (innen 1-2 arbeidsdager)</li>
            <li>✅ Ved godkjenning får du e-post og grønn "Verifisert" badge</li>
            <li>🚀 Du kan nå sende tilbud til kunder!</li>
          </ol>
        </div>
      </div>

      {/* Steg 4: Komplett profil */}
      <div className="page-break" style={{ paddingTop: '20px' }}>
        <div style={{ 
          backgroundColor: '#E07B3E', 
          color: '#FFFFFF',
          padding: '16px 24px',
          borderRadius: '8px 8px 0 0',
          marginBottom: '0'
        }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', margin: 0 }}>
            STEG 4: Komplett din profil
          </h2>
        </div>
        <div style={{ 
          border: '2px solid #E07B3E',
          borderTop: 'none',
          borderRadius: '0 0 8px 8px',
          padding: '24px',
          marginBottom: '32px'
        }}>
          <p style={{ fontSize: '16px', color: '#6B7280', marginBottom: '24px' }}>
            <strong>Tidsbruk:</strong> 10-15 minutter (viktig for å få jobber!)
          </p>

          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            4.1 Legg til profilbilde og logo
          </h3>
          <ul style={{ paddingLeft: '24px', fontSize: '14px', color: '#6B7280', lineHeight: '1.8', marginBottom: '24px' }}>
            <li><strong>Profilbilde:</strong> Et profesjonelt bilde av deg (eller team)</li>
            <li><strong>Firmalogo:</strong> Bedriftens logo (valgfritt, men anbefalt)</li>
            <li>Maksimal størrelse per bilde: 2 MB</li>
          </ul>

          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            4.2 Skriv en god "Om meg" beskrivelse
          </h3>
          <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '12px' }}>
            Dette er det første kunder ser. Inkluder:
          </p>
          <ul style={{ paddingLeft: '24px', fontSize: '14px', color: '#6B7280', lineHeight: '1.8', marginBottom: '16px' }}>
            <li>Hvor mange års erfaring du har</li>
            <li>Dine spesialområder og kompetanse</li>
            <li>Sertifiseringer eller utdanning</li>
            <li>Hva som gjør deg unik/bedre</li>
            <li>Geografisk arbeidsområde</li>
          </ul>

          <div style={{ 
            backgroundColor: '#F8FAFC',
            border: '1px solid #E5E7EB',
            borderRadius: '8px',
            padding: '16px',
            marginBottom: '24px'
          }}>
            <p style={{ fontSize: '13px', color: '#6B7280', margin: '0 0 8px 0', fontWeight: 'bold' }}>
              ✍️ Eksempel på god "Om meg":
            </p>
            <p style={{ fontSize: '12px', color: '#6B7280', margin: 0, fontStyle: 'italic', lineHeight: '1.6' }}>
              "Autorisert rørlegger med 15 års erfaring. Spesialisert på varmepumper (Nibe, Mitsubishi), 
              vannbåren gulvvarme og baderomsrenoveringer. Sertifisert Nibe-installatør. 
              Vi leverer fagmessig arbeid med 5 års garanti. Dekker Oslo og Akershus. 
              Medlem av Norsk Rørleggerforbund."
            </p>
          </div>

          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            4.3 Legg til tidligere jobber/portefølje
          </h3>
          <ol style={{ paddingLeft: '24px', fontSize: '14px', color: '#6B7280', lineHeight: '1.8', marginBottom: '24px' }}>
            <li>Gå til "Mine prosjekter" i profilen</li>
            <li>Klikk "Legg til prosjekt"</li>
            <li>Last opp bilder (før/etter er gull!)</li>
            <li>Beskriv hva du gjorde og resultatet</li>
            <li>Nevn kundetilfredshet hvis mulig</li>
          </ol>

          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            4.4 Spesifiser arbeidsområde
          </h3>
          <ul style={{ paddingLeft: '24px', fontSize: '14px', color: '#6B7280', lineHeight: '1.8' }}>
            <li><strong>Postnummer:</strong> Hvor er basen din?</li>
            <li><strong>Radius:</strong> Hvor langt reiser du? (10 km, 50 km, 100 km)</li>
            <li><strong>Kategorier:</strong> Hvilke typer jobber tar du?</li>
          </ul>
        </div>
      </div>

      {/* Steg 5: Velg abonnement */}
      <div className="page-break" style={{ paddingTop: '20px' }}>
        <div style={{ 
          backgroundColor: '#17384E', 
          color: '#FFFFFF',
          padding: '16px 24px',
          borderRadius: '8px 8px 0 0',
          marginBottom: '0'
        }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', margin: 0 }}>
            STEG 5: Velg abonnement
          </h2>
        </div>
        <div style={{ 
          border: '2px solid #17384E',
          borderTop: 'none',
          borderRadius: '0 0 8px 8px',
          padding: '24px',
          marginBottom: '32px'
        }}>
          <p style={{ fontSize: '16px', color: '#6B7280', marginBottom: '24px' }}>
            <strong>Tidsbruk:</strong> 2-3 minutter
          </p>

          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            5.1 Sammenlign planene
          </h3>
          
          <table style={{ 
            width: '100%', 
            borderCollapse: 'collapse',
            marginBottom: '24px'
          }}>
            <thead>
              <tr style={{ backgroundColor: '#17384E', color: '#FFFFFF' }}>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '13px', fontWeight: 'bold', border: '1px solid #17384E' }}>
                  Funksjon
                </th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: 'bold', border: '1px solid #17384E' }}>
                  Light<br/>(299 kr/mnd)*
                </th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: 'bold', backgroundColor: '#E07B3E', border: '1px solid #E07B3E' }}>
                  Medium<br/>(479 kr/mnd)*
                </th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '13px', fontWeight: 'bold', border: '1px solid #17384E' }}>
                  Pro<br/>(899 kr/mnd)*
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "Tilbud per måned", light: "5", medium: "15", pro: "Ubegrenset" },
                { feature: "Enkel tilbudsbygger", light: "✅", medium: "✅", pro: "✅" },
                { feature: "Medium tilbudsbygger", light: "❌", medium: "✅", pro: "✅" },
                { feature: "Avansert tilbudsbygger", light: "❌", medium: "❌", pro: "✅" },
                { feature: "Test-tilbudsbygger", light: "✅", medium: "✅", pro: "✅" },
                { feature: "Materialdatabase", light: "❌", medium: "✅", pro: "✅" },
                { feature: "Detaljerte arbeidslinjer", light: "❌", medium: "✅", pro: "✅" },
                { feature: "Dashboard & statistikk", light: "Grunnleggende", medium: "Avansert", pro: "Avansert" },
                { feature: "E-postvarsler", light: "✅", medium: "✅", pro: "✅" },
                { feature: "Prioritering i søk", light: "❌", medium: "❌", pro: "✅" },
                { feature: "Dedikert support", light: "❌", medium: "❌", pro: "✅" },
              ].map((row, index) => (
                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#F8FAFC' : '#FFFFFF' }}>
                  <td style={{ padding: '10px', fontSize: '12px', color: '#111827', border: '1px solid #E5E7EB', fontWeight: '500' }}>
                    {row.feature}
                  </td>
                  <td style={{ padding: '10px', fontSize: '12px', textAlign: 'center', color: '#6B7280', border: '1px solid #E5E7EB' }}>
                    {row.light}
                  </td>
                  <td style={{ padding: '10px', fontSize: '12px', textAlign: 'center', color: '#6B7280', border: '1px solid #E5E7EB', backgroundColor: '#FEF3E2' }}>
                    {row.medium}
                  </td>
                  <td style={{ padding: '10px', fontSize: '12px', textAlign: 'center', color: '#6B7280', border: '1px solid #E5E7EB' }}>
                    {row.pro}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <p style={{ fontSize: '12px', color: '#E07B3E', fontWeight: 'bold', marginBottom: '24px' }}>
            * Som testpilot får du 40% rabatt i 6 måneder!
            <br/>Normal pris: Light 499 kr, Medium 799 kr, Pro 1499 kr
          </p>

          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            5.2 Anbefaling
          </h3>
          <div style={{ 
            backgroundColor: '#EFF6FF', 
            border: '2px solid #BFDBFE', 
            borderRadius: '8px', 
            padding: '16px',
            marginBottom: '24px'
          }}>
            <p style={{ fontSize: '14px', color: '#1E40AF', margin: '0 0 12px 0', fontWeight: 'bold' }}>
              💡 Våre anbefalinger:
            </p>
            <ul style={{ margin: 0, paddingLeft: '20px', color: '#1E3A8A', fontSize: '13px', lineHeight: '1.8' }}>
              <li><strong>Ny på plattformen?</strong> Start med Light for å teste systemet</li>
              <li><strong>Deltid/sidejobb?</strong> Light er nok (5 tilbud/mnd)</li>
              <li><strong>Profesjonell håndverker?</strong> Medium gir best verdi (15 tilbud + materialdatabase)</li>
              <li><strong>Vokser raskt?</strong> Pro gir deg konkurransefortrinn (ubegrenset + prioritering)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Steg 6: Test tilbudsbyggeren */}
      <div className="page-break" style={{ paddingTop: '20px' }}>
        <div style={{ 
          backgroundColor: '#E07B3E', 
          color: '#FFFFFF',
          padding: '16px 24px',
          borderRadius: '8px 8px 0 0',
          marginBottom: '0'
        }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', margin: 0 }}>
            STEG 6: 🧪 Test tilbudsbyggeren (Anbefalt!)
          </h2>
        </div>
        <div style={{ 
          border: '2px solid #E07B3E',
          borderTop: 'none',
          borderRadius: '0 0 8px 8px',
          padding: '24px',
          marginBottom: '32px'
        }}>
          <p style={{ fontSize: '16px', color: '#6B7280', marginBottom: '24px' }}>
            <strong>Tidsbruk:</strong> 10-15 minutter
          </p>

          <div style={{ 
            backgroundColor: '#EFF6FF', 
            border: '2px solid #BFDBFE', 
            borderRadius: '8px', 
            padding: '16px',
            marginBottom: '24px'
          }}>
            <p style={{ fontSize: '14px', color: '#1E40AF', margin: '0', fontWeight: 'bold' }}>
              💡 <strong>Ny funksjon:</strong> Vi har laget en testside hvor du kan øve på å lage tilbud 
              uten å være knyttet til en faktisk kunde. Perfekt for å lære systemet!
            </p>
          </div>

          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            6.1 Åpne test-tilbudsbyggeren
          </h3>
          <ol style={{ paddingLeft: '24px', fontSize: '14px', color: '#6B7280', lineHeight: '1.8', marginBottom: '24px' }}>
            <li>Logg inn og gå til Dashboard</li>
            <li>Klikk på "🧪 Test tilbudsbygger" i sidemenyen</li>
            <li>Du ser nå en demo kundeforespørsel</li>
          </ol>

          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            6.2 Funksjoner du kan teste
          </h3>
          <ul style={{ paddingLeft: '24px', fontSize: '14px', color: '#6B7280', lineHeight: '1.8', marginBottom: '24px' }}>
            <li><strong>📦 Materialdatabase:</strong> Søk blant 10 000+ produkter med priser</li>
            <li><strong>🧮 Kalkulatorer:</strong> Beregn materialbehov for tak, gulv, maling, etc.</li>
            <li><strong>💼 Detaljerte arbeidslinjer:</strong> Legg til flere arbeidsoppgaver med timer og timepris</li>
            <li><strong>💰 Automatisk prisberegning:</strong> Systemet regner ut totalpris automatisk</li>
            <li><strong>🔒 Escrow-informasjon:</strong> Se hvordan sikker betaling fungerer</li>
          </ul>

          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            6.3 Slik lager du et testtilbud
          </h3>
          <ol style={{ paddingLeft: '24px', fontSize: '14px', color: '#6B7280', lineHeight: '1.8', marginBottom: '16px' }}>
            <li><strong>Velg materialer:</strong> Søk i databasen eller legg til egendefinerte</li>
            <li><strong>Legg til arbeidslinjer:</strong> Klikk "Legg til linje" under arbeidskostnad</li>
            <li><strong>Fyll inn arbeidsoppgaver:</strong> F.eks. "Montering av terrassebord"</li>
            <li><strong>Angi timer:</strong> Hvor lang tid tar hver oppgave?</li>
            <li><strong>Sett timepris:</strong> Kr per time (standard 800 kr)</li>
            <li><strong>Se totalpris:</strong> Materialer + arbeid = totalpris</li>
            <li><strong>Fyll inn tilbudsdetaljer:</strong> Varighet, startdato, garanti</li>
            <li><strong>Klikk "Send testilbud":</strong> Får bekreftelse (sendes ikke til kunde)</li>
          </ol>

          <div style={{ 
            backgroundColor: '#F0FDF4', 
            border: '2px solid #86EFAC', 
            borderRadius: '8px', 
            padding: '16px'
          }}>
            <p style={{ fontSize: '14px', color: '#166534', margin: '0', fontWeight: '500' }}>
              ✅ <strong>Tips:</strong> Bruk testsiden til å lage flere ulike tilbud og bli komfortabel 
              med systemet før du sender tilbud til ekte kunder!
            </p>
          </div>
        </div>
      </div>

      {/* Steg 7: Send første tilbud */}
      <div className="page-break" style={{ paddingTop: '20px' }}>
        <div style={{ 
          backgroundColor: '#17384E', 
          color: '#FFFFFF',
          padding: '16px 24px',
          borderRadius: '8px 8px 0 0',
          marginBottom: '0'
        }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', margin: 0 }}>
            STEG 7: Send ditt første tilbud
          </h2>
        </div>
        <div style={{ 
          border: '2px solid #17384E',
          borderTop: 'none',
          borderRadius: '0 0 8px 8px',
          padding: '24px',
          marginBottom: '32px'
        }}>
          <p style={{ fontSize: '16px', color: '#6B7280', marginBottom: '24px' }}>
            <strong>Tidsbruk:</strong> 5-15 minutter per tilbud
          </p>

          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            7.1 Finn relevante jobber
          </h3>
          <ol style={{ paddingLeft: '24px', fontSize: '14px', color: '#6B7280', lineHeight: '1.8', marginBottom: '24px' }}>
            <li>Gå til "Tilgjengelige jobber" fra Dashboard</li>
            <li>Bruk filtrene til å finne jobber i ditt område og kategori</li>
            <li>Se kundens beskrivelse, bilder og budsjett</li>
            <li>Klikk "Se detaljer" på jobber som interesserer deg</li>
          </ol>

          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            7.2 Bygg tilbudet ditt
          </h3>
          <ol style={{ paddingLeft: '24px', fontSize: '14px', color: '#6B7280', lineHeight: '1.8', marginBottom: '24px' }}>
            <li>Klikk "Send tilbud" på jobben</li>
            <li>Velg riktig tilbudsbygger (Light/Medium/Pro)</li>
            <li>Legg til materialer fra databasen</li>
            <li>Legg til arbeidslinjer med detaljer om hva du skal gjøre</li>
            <li>Angi timer og timepris for hver oppgave</li>
            <li>Skriv en god beskrivelse av arbeidet</li>
            <li>Angi varighet, startdato og garanti</li>
            <li>Velg betalingsbetingelser (anbefaler Escrow)</li>
          </ol>

          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            7.3 Sikker betaling via Escrow (Anbefalt!)
          </h3>
          <div style={{ 
            backgroundColor: '#ECFDF5', 
            border: '2px solid #A7F3D0', 
            borderRadius: '8px', 
            padding: '16px',
            marginBottom: '24px'
          }}>
            <p style={{ fontSize: '14px', color: '#065F46', margin: '0 0 12px 0', fontWeight: 'bold' }}>
              🔒 Slik fungerer escrow-betaling:
            </p>
            <ol style={{ margin: 0, paddingLeft: '20px', color: '#064E3B', fontSize: '13px', lineHeight: '1.8' }}>
              <li>Kunden betaler til en sperret konto når de godkjenner tilbudet</li>
              <li>Pengene holdes sikret mens du utfører jobben</li>
              <li>Du starter arbeidet trygt – vet at pengene er på plass</li>
              <li>Når jobben er ferdig og kunden godkjenner, utbetales pengene til deg</li>
              <li>Ved uenigheter har vi tvisteløsning som beskytter begge parter</li>
            </ol>
            <p style={{ fontSize: '12px', color: '#065F46', margin: '12px 0 0 0', fontStyle: 'italic' }}>
              * Service-gebyr: 1% for kunden + 1% for leverandøren
            </p>
          </div>

          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            7.4 Send tilbudet
          </h3>
          <ol style={{ paddingLeft: '24px', fontSize: '14px', color: '#6B7280', lineHeight: '1.8', marginBottom: '24px' }}>
            <li>Sjekk at alt ser riktig ut</li>
            <li>Klikk "Send tilbud"</li>
            <li>Kunden får varsel om ditt tilbud</li>
            <li>Du kan følge status i Dashboard</li>
          </ol>

          <div style={{ 
            backgroundColor: '#FEF3E2', 
            border: '2px solid #E07B3E', 
            borderRadius: '8px', 
            padding: '16px'
          }}>
            <p style={{ fontSize: '14px', color: '#92400E', margin: '0', fontWeight: 'bold' }}>
              💡 <strong>Profi-tips for gode tilbud:</strong>
            </p>
            <ul style={{ margin: '12px 0 0 0', paddingLeft: '20px', color: '#78350F', fontSize: '13px', lineHeight: '1.8' }}>
              <li>Vær spesifikk: Beskriv nøyaktig hva du skal gjøre</li>
              <li>Bruk detalje arbeidslinjer: Vis at du har tenkt gjennom jobben</li>
              <li>Last opp bilder av lignende jobber du har gjort</li>
              <li>Vær realistisk med pris og tidsestimat</li>
              <li>Svar raskt: Kunder velger ofte de som svarer først</li>
              <li>Kommuniser profesjonelt og vennlig</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sertifiserings-badges */}
      <div className="page-break" style={{ paddingTop: '20px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#17384E', marginBottom: '24px', borderBottom: '3px solid #E07B3E', paddingBottom: '12px' }}>
          🏅 Sertifiserings-badges
        </h2>

        <p style={{ fontSize: '16px', marginBottom: '24px', color: '#6B7280' }}>
          Når sertifiseringene dine er verifisert, vises de som fargerike badges på profilen din:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
          {[
            { icon: "🛡️", name: "Ansvarsforsikring", color: "#10B981", desc: "Gyldig yrkesskadeforsikring" },
            { icon: "📄", name: "Organisasjonsnummer", color: "#3B82F6", desc: "Registrert i Brønnøysund" },
            { icon: "⚡", name: "DSB Elvirksomhet", color: "#F59E0B", desc: "Godkjent elektrovirksomhet" },
            { icon: "⚡", name: "Fagbrev Elektriker", color: "#F59E0B", desc: "Godkjent fagbrev" },
            { icon: "🔧", name: "Kommunal godkjenning", color: "#06B6D4", desc: "Godkjent rørlegger" },
            { icon: "🔧", name: "Fagbrev Rørlegger", color: "#14B8A6", desc: "Godkjent fagbrev" },
            { icon: "🏗️", name: "HMS-kort / Fallsikring", color: "#F97316", desc: "Sikkerhetsgodkjenning" },
            { icon: "🔥", name: "Gasssertifikat", color: "#EF4444", desc: "Godkjent for gassarbeid" },
          ].map((badge, index) => (
            <div key={index} style={{ 
              padding: '16px', 
              backgroundColor: '#F8FAFC',
              border: '2px solid ' + badge.color,
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px'
            }}>
              <div style={{ 
                fontSize: '32px',
                width: '48px',
                height: '48px',
                backgroundColor: badge.color + '20',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {badge.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: '#111827', margin: '0 0 4px 0' }}>
                  {badge.name}
                </h3>
                <p style={{ fontSize: '12px', color: '#6B7280', margin: 0 }}>
                  {badge.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ 
          backgroundColor: '#EFF6FF', 
          border: '2px solid #BFDBFE', 
          borderRadius: '12px', 
          padding: '20px'
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1E40AF', marginTop: 0, marginBottom: '12px' }}>
            ✨ Fordeler med verifiserte badges:
          </h3>
          <ul style={{ margin: 0, paddingLeft: '20px', color: '#1E3A8A', fontSize: '14px', lineHeight: '1.8' }}>
            <li><strong>Økt tillit:</strong> Kunder ser umiddelbart at du er profesjonell</li>
            <li><strong>Skiller deg ut:</strong> Visuell fremheving av dine kvalifikasjoner</li>
            <li><strong>Bedre matching:</strong> Får jobber som matcher dine godkjenninger</li>
            <li><strong>Høyere priser:</strong> Verifiserte håndverkere kan ta mer betalt</li>
            <li><strong>Færre spørsmål:</strong> Kunder vet at du er kvalifisert</li>
          </ul>
        </div>
      </div>

      {/* Support og hjelp */}
      <div className="page-break" style={{ paddingTop: '20px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#17384E', marginBottom: '24px', borderBottom: '3px solid #E07B3E', paddingBottom: '12px' }}>
          ❓ Support og hjelp
        </h2>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            Kontakt oss
          </h3>
          <table style={{ 
            width: '100%', 
            borderCollapse: 'collapse'
          }}>
            <tbody>
              {[
                { method: "📧 E-post", contact: "pilot@handtverkeren.no", when: "Generelle spørsmål og feedback" },
                { method: "💬 Chat", contact: "Direkte i plattformen", when: "Rask support under arbeidstid" },
                { method: "📞 Telefon", contact: "Kommer snart", when: "Hastetilfeller og akutte problemer" },
              ].map((row, index) => (
                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#F8FAFC' : '#FFFFFF' }}>
                  <td style={{ padding: '12px', fontSize: '14px', color: '#111827', border: '1px solid #E5E7EB', fontWeight: 'bold' }}>
                    {row.method}
                  </td>
                  <td style={{ padding: '12px', fontSize: '14px', color: '#E07B3E', border: '1px solid #E5E7EB', fontFamily: 'monospace' }}>
                    {row.contact}
                  </td>
                  <td style={{ padding: '12px', fontSize: '13px', color: '#6B7280', border: '1px solid #E5E7EB' }}>
                    {row.when}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
            Vanlige spørsmål (FAQ)
          </h3>
          
          <div style={{ marginBottom: '16px' }}>
            <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#111827', margin: '0 0 4px 0' }}>
              Q: Hvor lang tid tar det å bli verifisert?
            </p>
            <p style={{ fontSize: '14px', color: '#6B7280', margin: 0, paddingLeft: '16px' }}>
              A: ID-verifisering tar 1-2 arbeidsdager. Sertifiseringsverifisering tar også 1-2 arbeidsdager.
            </p>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#111827', margin: '0 0 4px 0' }}>
              Q: Hva skjer hvis jeg mangler en sertifisering?
            </p>
            <p style={{ fontSize: '14px', color: '#6B7280', margin: 0, paddingLeft: '16px' }}>
              A: Systemet vil automatisk avslå søknaden og fortelle deg nøyaktig hva som mangler.
            </p>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#111827', margin: '0 0 4px 0' }}>
              Q: Kan jeg endre abonnement senere?
            </p>
            <p style={{ fontSize: '14px', color: '#6B7280', margin: 0, paddingLeft: '16px' }}>
              A: Ja! Du kan oppgradere eller nedgradere når som helst. Endringen trer i kraft ved neste faktureringsperiode.
            </p>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#111827', margin: '0 0 4px 0' }}>
              Q: Må jeg bruke escrow-betaling?
            </p>
            <p style={{ fontSize: '14px', color: '#6B7280', margin: 0, paddingLeft: '16px' }}>
              A: Nei, men vi anbefaler det sterkt for trygghet. Du kan også velge andre betalingsmåter.
            </p>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#111827', margin: '0 0 4px 0' }}>
              Q: Hva er service-gebyret for escrow?
            </p>
            <p style={{ fontSize: '14px', color: '#6B7280', margin: 0, paddingLeft: '16px' }}>
              A: 1% for kunden + 1% for leverandøren = totalt 2% av jobben.
            </p>
          </div>
        </div>

        <div style={{ 
          backgroundColor: '#F0FDF4', 
          border: '2px solid #86EFAC', 
          borderRadius: '12px', 
          padding: '20px'
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#166534', marginTop: 0, marginBottom: '12px' }}>
            🎉 Du har nå fullført onboardingen!
          </h3>
          <p style={{ fontSize: '14px', color: '#065F46', margin: 0, lineHeight: '1.6' }}>
            Du er klar til å bruke Håndtverkeren og sende tilbud til kunder. 
            Lykke til med din første jobb! Vi er her for å hjelpe deg hele veien.
            <br/><br/>
            <strong>Hilsen teamet bak Håndtverkeren 🔨</strong>
          </p>
        </div>
      </div>

    </div>
  );
}
