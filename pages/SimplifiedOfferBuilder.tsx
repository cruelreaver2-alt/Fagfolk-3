import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ArrowLeft, Plus, Trash2, Send, Clock, Package } from "lucide-react";
import { projectId, publicAnonKey } from "/utils/supabase/info";

export function SimplifiedOfferBuilder() {
  const navigate = useNavigate();
  const { jobId } = useParams();
  const supplierId = localStorage.getItem("userId") || "supplier-001";
  const supplierName = localStorage.getItem("userName") || "Ole Hansen Tømrer";

  const [offerDescription, setOfferDescription] = useState("");
  const [laborHours, setLaborHours] = useState("");
  const [hourlyRate, setHourlyRate] = useState("750");
  const [estimatedDuration, setEstimatedDuration] = useState("");
  const [materials, setMaterials] = useState<Array<{
    id: string;
    name: string;
    quantity: string;
    unitPrice: string;
    totalPrice: number;
  }>>([]);
  const [sendingOffer, setSendingOffer] = useState(false);

  const addMaterial = () => {
    setMaterials([...materials, {
      id: Date.now().toString(),
      name: "",
      quantity: "1",
      unitPrice: "0",
      totalPrice: 0,
    }]);
  };

  const updateMaterial = (id: string, field: string, value: string) => {
    setMaterials(materials.map(m => {
      if (m.id === id) {
        const updated = { ...m, [field]: value };
        if (field === "quantity" || field === "unitPrice") {
          const qty = field === "quantity" ? parseFloat(value) : parseFloat(m.quantity);
          const price = field === "unitPrice" ? parseFloat(value) : parseFloat(m.unitPrice);
          updated.totalPrice = (qty || 0) * (price || 0);
        }
        return updated;
      }
      return m;
    }));
  };

  const handleRemoveMaterial = (id: string) => {
    setMaterials(materials.filter(m => m.id !== id));
  };

  // Calculate totals for display
  const materialsCost = materials.reduce((sum, m) => sum + m.totalPrice, 0);
  const laborCost = parseFloat(laborHours) * parseFloat(hourlyRate) || 0;
  const subtotal = materialsCost + laborCost;
  const vat = subtotal * 0.25;
  const total = subtotal + vat;

  const handleSendOffer = async () => {
    if (!offerDescription || !laborHours) {
      alert("Vennligst fyll ut beskrivelse og arbeidstimer");
      return;
    }

    setSendingOffer(true);

    try {
      // Send offer to backend
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-8d200dba/offers`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({
            requestId: jobId,
            supplierId: supplierId,
            supplierName: supplierName,
            description: offerDescription,
            laborHours: parseFloat(laborHours),
            hourlyRate: parseFloat(hourlyRate),
            laborCost: laborCost,
            materials: materials.map(m => ({
              name: m.name,
              quantity: parseFloat(m.quantity),
              unitPrice: parseFloat(m.unitPrice),
              totalPrice: m.totalPrice,
            })),
            materialsCost: materialsCost,
            subtotal: subtotal,
            vat: vat,
            totalPrice: total,
            price: total, // For email template
            estimatedDuration: estimatedDuration || "Ikke oppgitt",
          }),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Kunne ikke sende tilbud");
      }

      const data = await response.json();
      console.log("Tilbud sendt:", data);

      alert("✅ Tilbud sendt til kunde! Kunden har mottatt en e-post med detaljene.");
      navigate("/leverandør-dashboard");
    } catch (error) {
      console.error("Feil ved sending av tilbud:", error);
      alert(`Kunne ikke sende tilbud: ${error instanceof Error ? error.message : 'Ukjent feil'}`);
    } finally {
      setSendingOffer(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/leverandør-dashboard")}
              className="p-2 hover:bg-[#F3F4F6] rounded-lg transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-[#111827]" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-[#111827]">Lag tilbud</h1>
              <p className="text-sm text-[#6B7280]">Jobb #{jobId}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-[#E07B3E]/10 border border-[#E07B3E]/30 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <Package className="w-5 h-5 text-[#E07B3E] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-[#111827] mb-1">
                Forenklet tilbudsbygger (Light)
              </h3>
              <p className="text-sm text-[#6B7280]">
                Du bruker Light-planen. Oppgrader til Medium eller Pro for tilgang til materialdatabase og avanserte kalkulatorer.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          {/* Offer Description */}
          <div className="bg-white rounded-lg border border-[#E5E7EB] p-6">
            <h2 className="text-lg font-bold text-[#111827] mb-4">
              Beskrivelse av arbeidet
            </h2>
            <textarea
              placeholder="Beskriv arbeidet som skal utføres..."
              value={offerDescription}
              onChange={(e) => setOfferDescription(e.target.value)}
              className="w-full h-32 px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17384E] resize-none"
            />
          </div>

          {/* Labor */}
          <div className="bg-white rounded-lg border border-[#E5E7EB] p-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-[#E07B3E]" />
              <h2 className="text-lg font-bold text-[#111827]">Arbeid</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#111827] mb-2">
                  Antall timer
                </label>
                <input
                  type="number"
                  placeholder="f.eks. 40"
                  value={laborHours}
                  onChange={(e) => setLaborHours(e.target.value)}
                  className="w-full h-12 px-4 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17384E]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#111827] mb-2">
                  Timepris (kr)
                </label>
                <input
                  type="number"
                  placeholder="f.eks. 950"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(e.target.value)}
                  className="w-full h-12 px-4 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17384E]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#111827] mb-2">
                  Estimert varighet (dager)
                </label>
                <input
                  type="number"
                  placeholder="f.eks. 5"
                  value={estimatedDuration}
                  onChange={(e) => setEstimatedDuration(e.target.value)}
                  className="w-full h-12 px-4 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17384E]"
                />
              </div>
            </div>

            {laborHours && hourlyRate && (
              <div className="mt-4 p-4 bg-[#F3F4F6] rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#6B7280]">
                    Arbeidskostnad ({laborHours} timer × {hourlyRate} kr)
                  </span>
                  <span className="text-lg font-bold text-[#17384E]">
                    {laborCost.toLocaleString('nb-NO')} kr
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Materials */}
          <div className="bg-white rounded-lg border border-[#E5E7EB] p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-[#E07B3E]" />
                <h2 className="text-lg font-bold text-[#111827]">Materialer</h2>
              </div>
              <button
                onClick={addMaterial}
                className="flex items-center gap-2 px-4 h-10 bg-[#17384E] text-white rounded-lg font-semibold hover:bg-[#1a4459] transition-colors"
              >
                <Plus className="w-5 h-5" />
                Legg til materiale
              </button>
            </div>

            {/* Materials List */}
            {materials.length === 0 ? (
              <div className="text-center py-8 text-[#6B7280]">
                <Package className="w-12 h-12 mx-auto mb-3 opacity-30" />
                <p className="text-sm">Ingen materialer lagt til ennå</p>
              </div>
            ) : (
              <div className="space-y-2">
                {materials.map((material) => (
                  <div
                    key={material.id}
                    className="flex items-center justify-between p-3 bg-[#F3F4F6] rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="font-medium text-[#111827]">{material.name}</div>
                      <div className="text-sm text-[#6B7280]">
                        {material.quantity} stk × {material.unitPrice.toLocaleString('nb-NO')} kr
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-[#17384E]">
                        {material.totalPrice.toLocaleString('nb-NO')} kr
                      </span>
                      <button
                        onClick={() => handleRemoveMaterial(material.id)}
                        className="p-1 hover:bg-white rounded transition-colors"
                      >
                        <Trash2 className="w-5 h-5 text-[#DC2626]" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {materials.length > 0 && (
              <div className="mt-4 pt-4 border-t border-[#E5E7EB]">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-[#111827]">Total materialkostnad</span>
                  <span className="text-xl font-bold text-[#17384E]">
                    {materialsCost.toLocaleString('nb-NO')} kr
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="bg-white rounded-lg border border-[#E5E7EB] p-6">
            <h2 className="text-lg font-bold text-[#111827] mb-4">Oppsummering</h2>
            
            <div className="space-y-3">
              <div className="flex justify-between text-[#111827]">
                <span>Arbeid</span>
                <span className="font-semibold">{laborCost.toLocaleString('nb-NO')} kr</span>
              </div>
              <div className="flex justify-between text-[#111827]">
                <span>Materialer</span>
                <span className="font-semibold">{materialsCost.toLocaleString('nb-NO')} kr</span>
              </div>
              <div className="flex justify-between text-[#111827] pt-3 border-t border-[#E5E7EB]">
                <span>Subtotal</span>
                <span className="font-semibold">{subtotal.toLocaleString('nb-NO')} kr</span>
              </div>
              <div className="flex justify-between text-[#6B7280]">
                <span>MVA (25%)</span>
                <span>{vat.toLocaleString('nb-NO')} kr</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-[#17384E] pt-3 border-t border-[#E5E7EB]">
                <span>Total inkl. MVA</span>
                <span>{total.toLocaleString('nb-NO')} kr</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button
              onClick={() => navigate("/leverandør-dashboard")}
              className="flex-1 h-12 border-2 border-[#E5E7EB] rounded-lg font-semibold text-[#6B7280] hover:bg-[#F3F4F6] transition-colors"
            >
              Avbryt
            </button>
            <button
              onClick={handleSendOffer}
              disabled={sendingOffer}
              className="flex-1 h-12 bg-[#E07B3E] text-white rounded-lg font-semibold hover:bg-[#d16f35] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sendingOffer ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sender tilbud...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send tilbud
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}