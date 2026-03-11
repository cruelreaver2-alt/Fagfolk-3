import { Link } from "react-router";
import { Header } from "../components/Header";
import {
  CheckCircle,
  X,
  Zap,
  Shield,
  TrendingUp,
  Calculator,
  MessageSquare,
  Bell,
  Award,
  Clock,
  DollarSign,
  Users,
  Star,
  Smartphone,
  Database,
  FileText,
  Target,
  ArrowRight,
} from "lucide-react";

export function PilotInvitation() {
  const customerBenefits = [
    {
      icon: Shield,
      title: "100% Verifiserte fagfolk",
      description: "Alle håndverkere er ID-sjekket og kvalitetssikret før de får tilgang til plattformen",
      detail: "Obligatorisk opplasting av gyldig legitimasjon",
    },
    {
      icon: DollarSign,
      title: "Fastpris-tilbud som standard",
      description: "Få faste priser uten overraskelser - totalpris med materialer og arbeid spesifisert",
      detail: "Ikke bare vage timepriser",
    },
    {
      icon: Database,
      title: "Integrert materialdatabase",
      description: "Spesifiser nøyaktig merke og modell (f.eks Nibe F2120 varmepumpe, Weber Spirit grill)",
      detail: "10 000+ produkter med priser",
    },
    {
      icon: Zap,
      title: "Automatisk godkjenning & jobbtilstand",
      description: "Ett klikk for å godkjenne tilbud og markere jobb som fullført - alt dokumentert digitalt",
      detail: "Med tidsstempler og full historikk",
    },
    {
      icon: MessageSquare,
      title: "Innebygd chat & e-postvarsler",
      description: "Alle meldinger samlet på ett sted + instant e-postvarsler ved nye tilbud og meldinger",
      detail: "Full historikk og søkefunksjon",
    },
    {
      icon: Smartphone,
      title: "Mobiloptimalisert fra dag 1",
      description: "Perfekt på iOS og Android med 44px touch targets, safe-area support og prevented zoom",
      detail: "Bygget mobile-first",
    },
  ];

  const supplierBenefits = [
    {
      icon: Target,
      title: "Smart tilbudsbygger med kalkulatorer",
      description: "3 nivåer basert på kompleksitet: Enkel, Medium og Avansert med integrerte kalkulatorer",
      detail: "Timeberegning og materialkostnader",
    },
    {
      icon: FileText,
      title: "Profesjonelle tilbudsmaler",
      description: "Generer PDF-klare tilbud med materiallister, arbeidsposter og betingelser",
      detail: "Automatisk formatering og branding",
    },
    {
      icon: TrendingUp,
      title: "Sanntids dashboard & statistikk",
      description: "Se godkjenningsrate, total inntjening, svar-rate og ytelsesanalyse i sanntid",
      detail: "Historiske trender og sammenligning",
    },
    {
      icon: Bell,
      title: "Instant varsler ved nye jobber",
      description: "Push-varsler + e-post når relevante jobber legges ut i ditt område og kategori",
      detail: "Filtrer etter budsjett og lokasjon",
    },
    {
      icon: Database,
      title: "Materialdatabase med priser",
      description: "Søk opp produkter med veiledende priser for raskere og mer presise kalkulasjoner",
      detail: "Oppdatert database med 10 000+ produkter",
    },
    {
      icon: Award,
      title: "Ingen provisjon per jobb",
      description: "Fast månedspris - beholder 100% av det du tjener på hver jobb du utfører",
      detail: "Forutsigbar økonomi",
    },
  ];

  const comparisonTable = [
    {
      feature: "ID-verifisering av alle leverandører",
      handtverkeren: true,
      note: "Obligatorisk opplasting av gyldig legitimasjon",
    },
    {
      feature: "Fastpris-tilbud som standard",
      handtverkeren: true,
      note: "Totalpris med materialer og arbeid spesifisert",
    },
    {
      feature: "Materialdatabase med 10 000+ produkter",
      handtverkeren: true,
      note: "Søk på merke og modell for presise tilbud",
    },
    {
      feature: "Automatisk godkjenning/avslag",
      handtverkeren: true,
      note: "Ett klikk - alt dokumentert digitalt",
    },
    {
      feature: "Innebygd chat-system",
      handtverkeren: true,
      note: "All kommunikasjon samlet på ett sted",
    },
    {
      feature: "Dashboard med sanntids-statistikk",
      handtverkeren: true,
      note: "Godkjenningsrate, inntjening, ytelse",
    },
    {
      feature: "Smart tilbudsbygger med kalkulatorer",
      handtverkeren: true,
      note: "3 nivåer: Enkel, Medium, Avansert",
    },
    {
      feature: "E-postvarsler (automatisk)",
      handtverkeren: true,
      note: "Instant varsler ved nye tilbud og meldinger",
    },
    {
      feature: "Mobiloptimalisert (iOS/Android)",
      handtverkeren: true,
      note: "44px touch targets, safe-area support",
    },
    {
      feature: "Ingen provisjon per jobb",
      handtverkeren: true,
      note: "Fast månedspris - beholder 100% av inntekten",
    },
    {
      feature: "Gratis for kunder",
      handtverkeren: true,
      note: "Kunder betaler aldri for å bruke tjenesten",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] via-white to-[#F8FAFC]">
      <Header />

      {/* Hero Section */}
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-24 max-w-[1366px] mx-auto text-center">
        <div className="inline-block px-4 py-2 bg-[#E07B3E]/10 rounded-full mb-6">
          <span className="text-sm font-semibold text-[#E07B3E]">
            🚀 Eksklusiv invitasjon til pilotprogram
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111827] mb-6 leading-tight">
          Velkommen til fremtidens
          <br />
          <span className="text-[#E07B3E]">håndverkerplattform</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-[#6B7280] max-w-3xl mx-auto mb-8 leading-relaxed">
          Håndtverkeren er <strong>ikke bare enda en anbudsside</strong>. Vi har bygget 
          det første systemet som faktisk løser problemene som Mittanbud og andre ignorerer.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/registrer"
            className="h-14 px-8 bg-[#E07B3E] text-white rounded-lg font-semibold hover:bg-[#d16f35] transition-colors flex items-center justify-center gap-2 touch-manipulation"
          >
            <Users className="w-5 h-5" />
            Test som kunde (Gratis)
          </Link>
          <Link
            to="/leverandør-logg-inn"
            className="h-14 px-8 border-2 border-[#17384E] text-[#17384E] rounded-lg font-semibold hover:bg-[#17384E] hover:text-white transition-colors flex items-center justify-center gap-2 touch-manipulation"
          >
            <Award className="w-5 h-5" />
            Test som leverandør
          </Link>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-12 px-4 sm:px-6 lg:px-24 bg-white">
        <div className="max-w-[1366px] mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-4">
              Problemet med dagens løsninger
            </h2>
            <p className="text-lg text-[#6B7280]">
              Mittanbud, Offertenett og lignende plattformer har store svakheter:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <X className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#111827] mb-2">Ingen kvalitetskontroll</h3>
                  <p className="text-sm text-[#6B7280]">
                    Hvem som helst kan registrere seg som "fagperson" uten verifisering
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <X className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#111827] mb-2">Upresise tilbud</h3>
                  <p className="text-sm text-[#6B7280]">
                    Kun fritekst-beskrivelser gir timepriser uten budsjettgaranti
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <X className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#111827] mb-2">Manuell kommunikasjon</h3>
                  <p className="text-sm text-[#6B7280]">
                    Alt skjer via spredte e-poster og telefonsamtaler
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <X className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#111827] mb-2">Ingen verktøy for fagfolk</h3>
                  <p className="text-sm text-[#6B7280]">
                    Leverandører får ingen hjelp til prissetting eller tilbudsskriving
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Customers */}
      <section className="py-16 px-4 sm:px-6 lg:px-24 bg-gradient-to-br from-[#17384E] to-[#1a4459] text-white">
        <div className="max-w-[1366px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              For kunder 👨‍👩‍👧‍👦
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Slutt å krysse fingrene for at håndverkeren er seriøs. Vi garanterer kvalitet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customerBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all"
              >
                <div className="w-12 h-12 bg-[#E07B3E] rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-white/80 mb-3">{benefit.description}</p>
                <div className="pt-3 border-t border-white/20">
                  <p className="text-xs text-white/60 flex items-start gap-2">
                    <X className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-300" />
                    <span>{benefit.detail}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Suppliers */}
      <section className="py-16 px-4 sm:px-6 lg:px-24 bg-gradient-to-br from-[#E07B3E] to-[#d16f35] text-white">
        <div className="max-w-[1366px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              For leverandører 🔨
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Få verktøyene du trenger for å jobbe profesjonelt og vokse virksomheten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supplierBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all"
              >
                <div className="w-12 h-12 bg-[#17384E] rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-white/80 mb-3">{benefit.description}</p>
                <div className="pt-3 border-t border-white/20">
                  <p className="text-xs text-white/60 flex items-start gap-2">
                    <X className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-300" />
                    <span>{benefit.detail}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-4">
              Våre unike styrker
            </h2>
            <p className="text-lg text-[#6B7280]">
              Funksjoner som gjør Håndtverkeren til fremtidens håndverkerplattform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {comparisonTable.map((row, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-[#F8FAFC] border-2 border-[#E5E7EB] rounded-lg p-6 hover:border-[#E07B3E] hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#111827] mb-1">
                      {row.feature}
                    </h3>
                    <p className="text-sm text-[#6B7280]">
                      {row.note}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-gradient-to-r from-[#E07B3E]/10 to-[#17384E]/10 rounded-2xl p-8 border-2 border-[#E07B3E]/20">
            <h3 className="text-2xl font-bold text-[#111827] mb-3">
              11 unike funksjoner som ingen andre har
            </h3>
            <p className="text-[#6B7280]">
              Dette er ikke bare forbedringer - det er en helt ny måte å koble kunder og fagfolk på
            </p>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-4 sm:px-6 lg:px-24 bg-[#F8FAFC]">
        <div className="max-w-[1366px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-4">
              Bygget med moderne teknologi
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Vi bruker samme teknologi som Netflix, Airbnb og Spotify
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center border border-[#E5E7EB] hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">⚛️</div>
              <h3 className="font-semibold text-[#111827] mb-1">React</h3>
              <p className="text-sm text-[#6B7280]">Brukt av Facebook</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center border border-[#E5E7EB] hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🔥</div>
              <h3 className="font-semibold text-[#111827] mb-1">Supabase</h3>
              <p className="text-sm text-[#6B7280]">Firebase alternativ</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center border border-[#E5E7EB] hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="font-semibold text-[#111827] mb-1">Tailwind CSS</h3>
              <p className="text-sm text-[#6B7280]">Brukt av GitHub</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center border border-[#E5E7EB] hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">📧</div>
              <h3 className="font-semibold text-[#111827] mb-1">Resend</h3>
              <p className="text-sm text-[#6B7280]">E-postvarsel API</p>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <Smartphone className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-[#111827] mb-2">
                  📱 Fullstendig mobiloptimalisert
                </h3>
                <p className="text-sm text-[#6B7280] mb-3">
                  Vi har optimalisert hver eneste pixel for iOS og Android:
                </p>
                <ul className="text-sm text-[#6B7280] space-y-1">
                  <li>✓ 44px minimum touch targets (Apple Human Interface Guidelines)</li>
                  <li>✓ Safe-area insets for iPhone notch & home indicator</li>
                  <li>✓ Prevented zoom på input focus (iOS Safari fix)</li>
                  <li>✓ Momentum scrolling & smooth transitions</li>
                  <li>✓ Responsive design fra 320px til 4K</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Program Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-4">
              Hva innebærer pilotprogrammet?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#111827] mb-2">Du får:</h3>
                  <ul className="text-sm text-[#6B7280] space-y-1">
                    <li>✓ <strong>Kostnadsfri testpilot-fase</strong> (full tilgang)</li>
                    <li>✓ Direkte kontakt med utviklerteamet</li>
                    <li>✓ Mulighet til å påvirke produktutviklingen</li>
                    <li>✓ <strong>De 20 første leverandørene:</strong> 40% rabatt i 6 måneder</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#111827] mb-2">Vi ønsker:</h3>
                  <ul className="text-sm text-[#6B7280] space-y-1">
                    <li>✓ Tilbakemeldinger på brukeropplevelsen</li>
                    <li>✓ Testing av nye funksjoner før lansering</li>
                    <li>✓ Forslag til forbedringer og nye features</li>
                    <li>✓ Eventuelle bug-rapporter</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#17384E] to-[#1a4459] rounded-2xl p-8 sm:p-12 text-white text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Klar til å være med å forme fremtiden?
            </h3>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Testpilot-fasen er kostnadsfri – de 20 første leverandørene får 40% rabatt i 6 måneder
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/registrer"
                className="h-14 px-8 bg-[#E07B3E] text-white rounded-lg font-semibold hover:bg-[#d16f35] transition-colors flex items-center justify-center gap-2 touch-manipulation"
              >
                Start som kunde
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/leverandør-logg-inn"
                className="h-14 px-8 bg-white text-[#17384E] rounded-lg font-semibold hover:bg-white/90 transition-colors flex items-center justify-center gap-2 touch-manipulation"
              >
                Start som leverandør
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-sm text-white/60 mt-6">
              🎁 Begrenset til de første 100 pilotbrukerne
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 px-4 bg-[#F8FAFC] border-t border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-[#6B7280] mb-4">
            Spørsmål? Kontakt oss på{" "}
            <a href="mailto:pilot@handtverkeren.no" className="text-[#E07B3E] hover:underline">
              pilot@handtverkeren.no
            </a>
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-[#6B7280]">
            <Clock className="w-4 h-4" />
            <span>Pilotprogrammet starter 15. mars 2026</span>
          </div>
        </div>
      </section>
    </div>
  );
}