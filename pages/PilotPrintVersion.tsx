import { CheckCircle, X, Shield, DollarSign, Database, Zap, MessageSquare, Smartphone, Target, FileText, TrendingUp, Bell, Award } from "lucide-react";

/**
 * PRINT-OPTIMALISERT VERSJON FOR PDF GENERERING
 * 
 * Slik genererer du PDF:
 * 1. Gå til: https://handtverkeren.no/pilot-print
 * 2. Trykk Cmd+P (Mac) eller Ctrl+P (Windows)
 * 3. Velg "Lagre som PDF" / "Save as PDF"
 * 4. Lagre filen som "Håndtverkeren-Pilot-Invitasjon.pdf"
 * 5. Vedlegg i e-post til testpilotene
 */

export function PilotPrintVersion() {
  return (
    <div className="print-document" style={{
      fontFamily: 'Inter, -apple-system, sans-serif',
      maxWidth: '210mm', // A4 width
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

      {/* Page 1: Cover */}
      <div style={{ textAlign: 'center', paddingTop: '40mm' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔨</div>
        <h1 style={{ fontSize: '42px', fontWeight: 'bold', color: '#17384E', marginBottom: '16px' }}>
          Håndtverkeren
        </h1>
        <div style={{ 
          display: 'inline-block', 
          padding: '12px 24px', 
          backgroundColor: '#E07B3E', 
          color: '#FFFFFF',
          borderRadius: '8px',
          fontSize: '18px',
          fontWeight: 'bold',
          marginBottom: '32px'
        }}>
          🚀 Eksklusiv Pilot-Invitasjon
        </div>
        <h2 style={{ fontSize: '28px', color: '#111827', marginBottom: '16px' }}>
          Fremtidens håndverkerplattform
        </h2>
        <p style={{ fontSize: '16px', color: '#6B7280', marginBottom: '48px' }}>
          Bli en av de 100 første testpilotene<br/>
          og få <strong>livstid 50% rabatt</strong>
        </p>

        <div style={{ 
          marginTop: '80px',
          padding: '24px',
          backgroundColor: '#F8FAFC',
          borderRadius: '12px',
          border: '2px solid #E5E7EB'
        }}>
          <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '8px' }}>
            <strong>Pilotprogram starter:</strong> 15. mars 2026
          </p>
          <p style={{ fontSize: '14px', color: '#6B7280', margin: 0 }}>
            <strong>Begrenset til:</strong> De 100 første påmeldingene
          </p>
        </div>
      </div>

      {/* Page 2: Introduksjon */}
      <div className="page-break" style={{ paddingTop: '20px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#17384E', marginBottom: '24px' }}>
          Velkommen til pilotprogrammet! 🎉
        </h2>

        <p style={{ fontSize: '16px', marginBottom: '16px' }}>
          Takk for interessen! Vi er glade for å invitere deg til å bli testpilot for <strong>Håndtverkeren</strong> – 
          den første håndverkerplattformen som faktisk løser problemene som Mittanbud og andre ignorerer.
        </p>

        <div style={{ 
          backgroundColor: '#EFF6FF', 
          border: '2px solid #BFDBFE', 
          borderRadius: '12px', 
          padding: '24px',
          marginBottom: '32px'
        }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1E40AF', marginTop: 0, marginBottom: '16px' }}>
            🎁 Som testpilot får du:
          </h3>
          <ul style={{ margin: 0, paddingLeft: '24px', color: '#1E3A8A', fontSize: '15px', lineHeight: '1.8' }}>
            <li><strong>50% livstid rabatt</strong> på alle betalte planer (verdi: 15 000+ kr/år)</li>
            <li>Gratis tilgang til alle premium-funksjoner under pilotperioden</li>
            <li>Direkte kontakt med utviklerteamet via dedikert Slack-kanal</li>
            <li>Mulighet til å påvirke produktutviklingen før lansering</li>
            <li>Early-bird status og eksklusiv merking i systemet</li>
            <li>Prioritert support og rask respons på henvendelser</li>
          </ul>
        </div>

        <div style={{ 
          backgroundColor: '#FEF3E2', 
          border: '2px solid #E07B3E', 
          borderRadius: '12px', 
          padding: '24px',
          marginBottom: '32px'
        }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#92400E', marginTop: 0, marginBottom: '16px' }}>
            💼 Vi ønsker fra deg:
          </h3>
          <ul style={{ margin: 0, paddingLeft: '24px', color: '#92400E', fontSize: '15px', lineHeight: '1.8' }}>
            <li>Ærlige tilbakemeldinger på brukeropplevelsen (via ukentlige spørreskjemaer)</li>
            <li>Testing av nye funksjoner før de lanseres til allmennheten</li>
            <li>Forslag til forbedringer og ønskede features</li>
            <li>Eventuelle bug-rapporter (helst med skjermbilder)</li>
            <li>Vurdering av konkurransesituasjonen vs. Mittanbud</li>
          </ul>
        </div>

        <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '16px' }}>
          Hvorfor bygget vi dette?
        </h3>
        <p style={{ fontSize: '15px', marginBottom: '16px' }}>
          Etter å ha brukt Mittanbud og lignende tjenester i flere år, opplevde vi gjentatte ganger:
        </p>
        <ul style={{ paddingLeft: '24px', fontSize: '15px', lineHeight: '1.8', color: '#6B7280' }}>
          <li><strong>Usikkerhet:</strong> Hvem er egentlig denne håndverkeren? Er de seriøse?</li>
          <li><strong>Upresise tilbud:</strong> "Ca. 300 kr/timen" som endte på det dobbelte</li>
          <li><strong>Kaotisk kommunikasjon:</strong> Meldinger spredt på e-post, SMS og telefon</li>
          <li><strong>Dårlige verktøy:</strong> Håndverkere som sliter med å lage profesjonelle tilbud</li>
        </ul>

        <p style={{ fontSize: '15px', marginTop: '16px', fontStyle: 'italic', color: '#6B7280' }}>
          Vi bestemte oss for å bygge løsningen vi selv ønsket å bruke.
        </p>
      </div>

      {/* Page 3: Problemet med dagens løsninger */}
      <div className="page-break" style={{ paddingTop: '20px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#17384E', marginBottom: '24px', borderBottom: '3px solid #E07B3E', paddingBottom: '12px' }}>
          Problemet med dagens løsninger
        </h2>

        <p style={{ fontSize: '16px', marginBottom: '24px', color: '#6B7280' }}>
          Mittanbud, Offertenett og lignende plattformer har store svakheter som gjør dem utrygg og ineffektive:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
          <div style={{ backgroundColor: '#FEF2F2', border: '2px solid #FCA5A5', borderRadius: '12px', padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{ fontSize: '24px' }}>❌</div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#991B1B', marginTop: 0, marginBottom: '8px' }}>
                  Ingen kvalitetskontroll
                </h3>
                <p style={{ fontSize: '14px', color: '#7F1D1D', margin: 0, lineHeight: '1.6' }}>
                  Hvem som helst kan registrere seg som "fagperson" uten verifisering av identitet eller kompetanse.
                </p>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: '#FEF2F2', border: '2px solid #FCA5A5', borderRadius: '12px', padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{ fontSize: '24px' }}>❌</div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#991B1B', marginTop: 0, marginBottom: '8px' }}>
                  Upresise tilbud
                </h3>
                <p style={{ fontSize: '14px', color: '#7F1D1D', margin: 0, lineHeight: '1.6' }}>
                  Kun fritekst-beskrivelser gir ofte timepriser uten budsjettgaranti eller materialoversikt.
                </p>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: '#FEF2F2', border: '2px solid #FCA5A5', borderRadius: '12px', padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{ fontSize: '24px' }}>❌</div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#991B1B', marginTop: 0, marginBottom: '8px' }}>
                  Manuell kommunikasjon
                </h3>
                <p style={{ fontSize: '14px', color: '#7F1D1D', margin: 0, lineHeight: '1.6' }}>
                  Alt skjer via spredte e-poster og telefonsamtaler. Ingen sporbarhet eller historikk.
                </p>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: '#FEF2F2', border: '2px solid #FCA5A5', borderRadius: '12px', padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{ fontSize: '24px' }}>❌</div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#991B1B', marginTop: 0, marginBottom: '8px' }}>
                  Ingen verktøy for fagfolk
                </h3>
                <p style={{ fontSize: '14px', color: '#7F1D1D', margin: 0, lineHeight: '1.6' }}>
                  Leverandører får ingen hjelp til prissetting, kalkulasjoner eller tilbudsskriving.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ 
          backgroundColor: '#F0FDF4', 
          border: '2px solid #86EFAC', 
          borderRadius: '12px', 
          padding: '24px',
          marginTop: '32px'
        }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#166534', marginTop: 0, marginBottom: '12px' }}>
            ✅ Vår løsning:
          </h3>
          <p style={{ fontSize: '15px', color: '#14532D', margin: 0, lineHeight: '1.8' }}>
            Vi har bygget en plattform som adresserer <strong>alle</strong> disse problemene med moderne teknologi 
            og brukersentrert design. Les videre for å se hvordan!
          </p>
        </div>
      </div>

      {/* Page 4: For Kunder */}
      <div className="page-break" style={{ paddingTop: '20px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#17384E', marginBottom: '24px', borderBottom: '3px solid #E07B3E', paddingBottom: '12px' }}>
          For kunder 👨‍👩‍👧‍👦
        </h2>

        <p style={{ fontSize: '16px', marginBottom: '24px', color: '#6B7280' }}>
          Slutt å krysse fingrene for at håndverkeren er seriøs. Vi garanterer kvalitet med disse funksjonene:
        </p>

        {[
          {
            icon: "🛡️",
            title: "100% Verifiserte fagfolk",
            description: "Alle håndverkere er ID-sjekket og kvalitetssikret før de får tilgang. Vi krever opplasting av gyldig legitimasjon og verifiserer identitet manuelt.",
            competitor: "Mittanbud: Hvem som helst kan registrere seg uten sjekk"
          },
          {
            icon: "💰",
            title: "Fastpris-tilbud som standard",
            description: "Få faste priser uten overraskelser – ikke bare timepriser. Alle tilbud må inneholde totalpris med materialer og arbeid spesifisert.",
            competitor: "Andre: Mesteparten timebasert uten budsjettgaranti"
          },
          {
            icon: "📦",
            title: "Integrert materialdatabase",
            description: "Spesifiser nøyaktig merke og modell (f.eks Nibe F2120 varmepumpe, Weber Spirit grill). Sikrer at du får presis pris på rett produkt.",
            competitor: "Konkurrenter: Generelle beskrivelser som gir upresise tilbud"
          },
          {
            icon: "⚡",
            title: "Automatisk godkjenning & jobbtilstand",
            description: "Ett klikk for å godkjenne tilbud og markere jobb som fullført. Alt dokumentert digitalt med tidsstempler.",
            competitor: "Andre: Manuell kontakt via epost/telefon for alt"
          },
          {
            icon: "💬",
            title: "Innebygd chat & e-postvarsler",
            description: "Alle meldinger samlet på ett sted + instant e-postvarsler ved nye tilbud. Full historikk og søkefunksjon.",
            competitor: "Mittanbud: Meldinger spredt på e-post og eksternt"
          },
          {
            icon: "📱",
            title: "Mobiloptimalisert fra dag 1",
            description: "Perfekt på iOS og Android med 44px touch targets, safe-area support for notch, og prevented zoom på inputs. Bygget mobile-first.",
            competitor: "Konkurrenter: Desktop-first design som er klønete på mobil"
          }
        ].map((benefit, index) => (
          <div key={index} style={{ 
            marginBottom: '20px', 
            padding: '20px', 
            backgroundColor: '#F8FAFC',
            border: '1px solid #E5E7EB',
            borderRadius: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ fontSize: '32px', flexShrink: 0 }}>{benefit.icon}</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginTop: 0, marginBottom: '8px' }}>
                  {benefit.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#6B7280', margin: '0 0 12px 0', lineHeight: '1.6' }}>
                  {benefit.description}
                </p>
                <div style={{ 
                  padding: '8px 12px', 
                  backgroundColor: '#FEF2F2', 
                  borderLeft: '3px solid #EF4444',
                  borderRadius: '4px'
                }}>
                  <p style={{ fontSize: '12px', color: '#991B1B', margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>❌</span>
                    <span>{benefit.competitor}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Page 5: For Leverandører */}
      <div className="page-break" style={{ paddingTop: '20px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#17384E', marginBottom: '24px', borderBottom: '3px solid #E07B3E', paddingBottom: '12px' }}>
          For leverandører 🔨
        </h2>

        <p style={{ fontSize: '16px', marginBottom: '24px', color: '#6B7280' }}>
          Få verktøyene du trenger for å jobbe profesjonelt og vokse virksomheten:
        </p>

        {[
          {
            icon: "🎯",
            title: "Smart tilbudsbygger med kalkulatorer",
            description: "3 nivåer: Enkel (kun pris), Medium (materialliste + arbeid), Avansert (fullstendig kalkyle). Integrerte kalkulatorer for timeberegning og materialkostnader.",
            competitor: "Andre: Fritekst-skjema uten hjelp til prissetting"
          },
          {
            icon: "📄",
            title: "Profesjonelle tilbudsmaler",
            description: "Generer PDF-klare tilbud med materiallister, arbeidsposter og betingelser. Automatisk formatering og branding.",
            competitor: "Mittanbud: Kun enkle tekstmeldinger uten struktur"
          },
          {
            icon: "📊",
            title: "Sanntids dashboard & statistikk",
            description: "Se godkjenningsrate, total inntjening, svar-rate og ytelsesanalyse. Historiske trender og sammenligning over tid.",
            competitor: "Konkurrenter: Ingen analyseverktøy for leverandører"
          },
          {
            icon: "🔔",
            title: "Instant varsler ved nye jobber",
            description: "Push-varsler + e-post når relevante jobber legges ut i ditt område og kategori. Filtrer etter budsjett og lokasjon.",
            competitor: "Andre: Manuell sjekking av plattformen daglig"
          },
          {
            icon: "🗄️",
            title: "Materialdatabase med priser",
            description: "Søk opp produkter med veiledende priser for raskere kalkulasjon. Oppdatert database med 10 000+ produkter.",
            competitor: "Konkurrenter: Ingen produktdatabase tilgjengelig"
          },
          {
            icon: "🏆",
            title: "Fleksibelt abonnementssystem",
            description: "Velg mellom Basic (gratis, 5 tilbud/mnd), Pro (399 kr/mnd, ubegrenset), eller Premium (799 kr/mnd + prioritering). Ingen provisjon per jobb!",
            competitor: "Mittanbud: Fast 10-15% provisjon per jobb (dyrere)"
          }
        ].map((benefit, index) => (
          <div key={index} style={{ 
            marginBottom: '20px', 
            padding: '20px', 
            backgroundColor: '#F8FAFC',
            border: '1px solid #E5E7EB',
            borderRadius: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ fontSize: '32px', flexShrink: 0 }}>{benefit.icon}</div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', marginTop: 0, marginBottom: '8px' }}>
                  {benefit.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#6B7280', margin: '0 0 12px 0', lineHeight: '1.6' }}>
                  {benefit.description}
                </p>
                <div style={{ 
                  padding: '8px 12px', 
                  backgroundColor: '#FEF2F2', 
                  borderLeft: '3px solid #EF4444',
                  borderRadius: '4px'
                }}>
                  <p style={{ fontSize: '12px', color: '#991B1B', margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>❌</span>
                    <span>{benefit.competitor}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Page 6: Sammenligning */}
      <div className="page-break" style={{ paddingTop: '20px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#17384E', marginBottom: '24px', borderBottom: '3px solid #E07B3E', paddingBottom: '12px' }}>
          Side-om-side sammenligning
        </h2>

        <p style={{ fontSize: '16px', marginBottom: '24px', color: '#6B7280' }}>
          Se selv hvorfor Håndtverkeren er i en egen liga sammenlignet med Mittanbud og andre konkurrenter:
        </p>

        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse', 
          marginBottom: '32px',
          border: '2px solid #E5E7EB'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#17384E' }}>
              <th style={{ 
                padding: '16px', 
                textAlign: 'left', 
                fontSize: '14px', 
                fontWeight: 'bold', 
                color: '#FFFFFF',
                borderRight: '1px solid rgba(255,255,255,0.1)'
              }}>
                Funksjon
              </th>
              <th style={{ 
                padding: '16px', 
                textAlign: 'center', 
                fontSize: '14px', 
                fontWeight: 'bold', 
                color: '#FFFFFF',
                backgroundColor: '#E07B3E',
                borderRight: '1px solid rgba(255,255,255,0.1)'
              }}>
                Håndtverkeren ⭐
              </th>
              <th style={{ 
                padding: '16px', 
                textAlign: 'center', 
                fontSize: '14px', 
                fontWeight: 'bold', 
                color: '#FFFFFF',
                borderRight: '1px solid rgba(255,255,255,0.1)'
              }}>
                Mittanbud
              </th>
              <th style={{ 
                padding: '16px', 
                textAlign: 'center', 
                fontSize: '14px', 
                fontWeight: 'bold', 
                color: '#FFFFFF'
              }}>
                Andre
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              { feature: "Verifisering av fagfolk", us: true, mittanbud: false, others: false },
              { feature: "Fastpris-tilbud som standard", us: true, mittanbud: false, others: false },
              { feature: "Materialdatabase (merke/modell)", us: true, mittanbud: false, others: false },
              { feature: "Automatisk godkjenning/avslag", us: true, mittanbud: false, others: false },
              { feature: "Innebygd chat-system", us: true, mittanbud: false, others: false },
              { feature: "Dashboard & statistikk", us: true, mittanbud: false, others: false },
              { feature: "Tilbudsbygger med kalkulatorer", us: true, mittanbud: false, others: false },
              { feature: "E-postvarsler (Resend)", us: true, mittanbud: false, others: false },
              { feature: "Mobiloptimalisert (iOS/Android)", us: true, mittanbud: false, others: false },
              { feature: "Gratis for kunder", us: true, mittanbud: true, others: true }
            ].map((row, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#F8FAFC' : '#FFFFFF' }}>
                <td style={{ 
                  padding: '14px', 
                  fontSize: '13px', 
                  color: '#111827', 
                  fontWeight: '500',
                  borderBottom: '1px solid #E5E7EB',
                  borderRight: '1px solid #E5E7EB'
                }}>
                  {row.feature}
                </td>
                <td style={{ 
                  padding: '14px', 
                  textAlign: 'center',
                  borderBottom: '1px solid #E5E7EB',
                  borderRight: '1px solid #E5E7EB'
                }}>
                  <span style={{ fontSize: '20px' }}>{row.us ? '✅' : '❌'}</span>
                </td>
                <td style={{ 
                  padding: '14px', 
                  textAlign: 'center',
                  borderBottom: '1px solid #E5E7EB',
                  borderRight: '1px solid #E5E7EB'
                }}>
                  <span style={{ fontSize: '20px' }}>{row.mittanbud ? '✅' : '❌'}</span>
                </td>
                <td style={{ 
                  padding: '14px', 
                  textAlign: 'center',
                  borderBottom: '1px solid #E5E7EB'
                }}>
                  <span style={{ fontSize: '20px' }}>{row.others ? '✅' : '❌'}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ 
          backgroundColor: '#F0FDF4', 
          border: '2px solid #86EFAC', 
          borderRadius: '12px', 
          padding: '24px',
          marginTop: '24px'
        }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#166534', marginTop: 0, marginBottom: '12px' }}>
            📈 Resultat:
          </h3>
          <p style={{ fontSize: '15px', color: '#14532D', margin: 0, lineHeight: '1.8' }}>
            Håndtverkeren har <strong>9 av 10 funksjoner</strong> som konkurrentene mangler. 
            Vi er den eneste plattformen som kombinerer verifiserte fagfolk, fastpris-tilbud, 
            materialdatabase OG profesjonelle verktøy for leverandører.
          </p>
        </div>
      </div>

      {/* Page 7: Teknologi & Timeline */}
      <div className="page-break" style={{ paddingTop: '20px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#17384E', marginBottom: '24px', borderBottom: '3px solid #E07B3E', paddingBottom: '12px' }}>
          Bygget med moderne teknologi
        </h2>

        <p style={{ fontSize: '16px', marginBottom: '24px', color: '#6B7280' }}>
          Vi bruker samme teknologi som Netflix, Airbnb og Spotify for å sikre skalerbarhet og ytelse:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
          {[
            { emoji: "⚛️", name: "React", desc: "Brukt av Facebook, Netflix" },
            { emoji: "🔥", name: "Supabase", desc: "Modern Firebase alternativ" },
            { emoji: "🎨", name: "Tailwind CSS", desc: "Brukt av GitHub, Vercel" },
            { emoji: "📧", name: "Resend", desc: "E-postvarsel API" }
          ].map((tech, index) => (
            <div key={index} style={{ 
              padding: '20px', 
              backgroundColor: '#F8FAFC',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '8px' }}>{tech.emoji}</div>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#111827', marginBottom: '4px' }}>
                {tech.name}
              </h3>
              <p style={{ fontSize: '13px', color: '#6B7280', margin: 0 }}>
                {tech.desc}
              </p>
            </div>
          ))}
        </div>

        <div style={{ 
          backgroundColor: '#EFF6FF', 
          border: '2px solid #BFDBFE', 
          borderRadius: '12px', 
          padding: '24px',
          marginBottom: '32px'
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1E40AF', marginTop: 0, marginBottom: '12px' }}>
            📱 Fullstendig mobiloptimalisert
          </h3>
          <p style={{ fontSize: '14px', color: '#1E3A8A', marginBottom: '12px' }}>
            Vi har optimalisert hver eneste pixel for iOS og Android:
          </p>
          <ul style={{ margin: 0, paddingLeft: '24px', color: '#1E3A8A', fontSize: '13px', lineHeight: '1.8' }}>
            <li>44px minimum touch targets (Apple Human Interface Guidelines)</li>
            <li>Safe-area insets for iPhone notch & home indicator</li>
            <li>Prevented zoom på input focus (iOS Safari fix med 16px font)</li>
            <li>Momentum scrolling & smooth transitions på alle plattformer</li>
            <li>Responsive design fra 320px (iPhone SE) til 4K desktop</li>
          </ul>
        </div>

        <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#17384E', marginBottom: '16px', marginTop: '40px' }}>
          Viktige datoer 📅
        </h2>

        <div style={{ position: 'relative', paddingLeft: '40px', marginBottom: '32px' }}>
          {[
            {
              date: "Nå - 15. mars 2026",
              title: "Registrering åpner",
              desc: "De 100 første kan melde seg på pilotprogrammet"
            },
            {
              date: "15. mars 2026",
              title: "Pilotprogram starter",
              desc: "Alle pilotbrukere får tilgang til plattformen"
            },
            {
              date: "Mars - Mai 2026",
              title: "Testing & forbedringer",
              desc: "Iterasjon basert på tilbakemeldinger fra pilotbrukere"
            },
            {
              date: "Juni 2026",
              title: "Full lansering",
              desc: "Offentlig tilgjengelig for alle"
            }
          ].map((item, index) => (
            <div key={index} style={{ 
              marginBottom: '24px',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                left: '-40px',
                top: '4px',
                width: '24px',
                height: '24px',
                backgroundColor: '#E07B3E',
                borderRadius: '50%',
                border: '4px solid #FFFFFF',
                boxShadow: '0 0 0 2px #E07B3E'
              }}></div>
              {index < 3 && (
                <div style={{
                  position: 'absolute',
                  left: '-28px',
                  top: '28px',
                  width: '2px',
                  height: '60px',
                  backgroundColor: '#E5E7EB'
                }}></div>
              )}
              <div>
                <p style={{ 
                  fontSize: '12px', 
                  fontWeight: 'bold', 
                  color: '#E07B3E', 
                  margin: '0 0 4px 0',
                  textTransform: 'uppercase'
                }}>
                  {item.date}
                </p>
                <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#111827', margin: '0 0 4px 0' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#6B7280', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Page 8: Call to Action */}
      <div className="page-break" style={{ paddingTop: '20px' }}>
        <div style={{ textAlign: 'center', paddingTop: '60px' }}>
          <div style={{ fontSize: '64px', marginBottom: '24px' }}>🚀</div>
          
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#17384E', marginBottom: '16px' }}>
            Klar til å være med?
          </h2>
          
          <p style={{ fontSize: '18px', color: '#6B7280', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Meld deg på nå og få livstid 50% rabatt på alle betalte planer
          </p>

          <div style={{ 
            backgroundColor: '#FEF3E2', 
            border: '3px solid #E07B3E', 
            borderRadius: '16px', 
            padding: '32px',
            marginBottom: '32px',
            maxWidth: '600px',
            margin: '0 auto 32px'
          }}>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#92400E', marginTop: 0, marginBottom: '16px' }}>
              Slik kommer du i gang:
            </h3>
            <ol style={{ 
              margin: 0, 
              paddingLeft: '24px', 
              color: '#92400E', 
              fontSize: '16px', 
              lineHeight: '2',
              textAlign: 'left'
            }}>
              <li>Gå til <strong>handtverkeren.no/pilot</strong></li>
              <li>Klikk på "Bli testpilot" knappen</li>
              <li>Velg om du er kunde eller leverandør</li>
              <li>Fyll ut registreringsskjemaet</li>
              <li>Verifiser e-postadressen din</li>
              <li>Start testing! 🎉</li>
            </ol>
          </div>

          <div style={{ 
            backgroundColor: '#17384E', 
            color: '#FFFFFF',
            borderRadius: '12px', 
            padding: '32px',
            marginBottom: '32px',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: 0, marginBottom: '16px' }}>
              📧 Spørsmål?
            </h3>
            <p style={{ fontSize: '16px', margin: '0 0 16px 0', opacity: 0.9 }}>
              Kontakt oss på:
            </p>
            <p style={{ fontSize: '18px', fontWeight: 'bold', margin: 0 }}>
              pilot@handtverkeren.no
            </p>
            <p style={{ fontSize: '14px', margin: '16px 0 0 0', opacity: 0.7 }}>
              Vi svarer innen 24 timer
            </p>
          </div>

          <div style={{ 
            marginTop: '48px',
            paddingTop: '24px',
            borderTop: '2px solid #E5E7EB'
          }}>
            <p style={{ fontSize: '14px', color: '#6B7280', margin: '0 0 8px 0' }}>
              Vi gleder oss til å ha deg med på reisen! 🎉
            </p>
            <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#111827', margin: 0 }}>
              Håndtverkeren-teamet
            </p>
          </div>

          <div style={{ 
            marginTop: '48px',
            padding: '20px',
            backgroundColor: '#F8FAFC',
            borderRadius: '8px',
            fontSize: '12px',
            color: '#6B7280'
          }}>
            <p style={{ margin: 0 }}>
              © 2026 Håndtverkeren. Alle rettigheter reservert.<br/>
              Dokument generert: {new Date().toLocaleDateString('nb-NO')}
            </p>
          </div>
        </div>
      </div>

      {/* Print instructions (hidden on screen, visible only when printing) */}
      <div className="no-print" style={{ 
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#17384E',
        color: '#FFFFFF',
        padding: '20px',
        borderRadius: '12px',
        maxWidth: '300px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
      }}>
        <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginTop: 0, marginBottom: '12px' }}>
          📄 Generer PDF
        </h3>
        <p style={{ fontSize: '13px', margin: '0 0 12px 0', lineHeight: '1.6' }}>
          Trykk <strong>Cmd+P</strong> (Mac) eller <strong>Ctrl+P</strong> (Windows)
        </p>
        <p style={{ fontSize: '13px', margin: 0, lineHeight: '1.6' }}>
          Velg "Lagre som PDF" og lagre filen
        </p>
      </div>
    </div>
  );
}
