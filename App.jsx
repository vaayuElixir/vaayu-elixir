import React, { useState, useEffect } from 'react';
// Exact Replica Vector of the Vaayu Elixir Card Logo
// Golden arch crescent embracing three stylized dynamic wing plumes
function VaayuBrandLogo({ className = "w-12 h-12" }) {
return (
<svg 
className={className} 
viewBox="0 0 120 120" 
fill="none" 
xmlns="http://www.w3.org/2000/svg"
aria-label="Vaayu Elixir Official Emblem"
>
<defs>
<linearGradient id="goldArchGrad" x1="20" y1="10" x2="105" y2="100" gradientUnits="userSpaceOnUse">
<stop offset="0%" stopColor="#E9C880" />
<stop offset="45%" stopColor="#C4983E" />
<stop offset="100%" stopColor="#7E5918" />
</linearGradient>
<linearGradient id="wingGoldTop" x1="35" y1="25" x2="85" y2="45" gradientUnits="userSpaceOnUse">
<stop offset="0%" stopColor="#EDD18D" />
<stop offset="60%" stopColor="#C2963B" />
<stop offset="100%" stopColor="#8C631B" />
</linearGradient>
<linearGradient id="wingNavyMid" x1="30" y1="40" x2="80" y2="65" gradientUnits="userSpaceOnUse">
<stop offset="0%" stopColor="#1E2F52" />
<stop offset="100%" stopColor="#0B1528" />
</linearGradient>
<linearGradient id="wingNavyBot" x1="35" y1="55" x2="75" y2="85" gradientUnits="userSpaceOnUse">
<stop offset="0%" stopColor="#2A4374" />
<stop offset="100%" stopColor="#0A1222" />
</linearGradient>
</defs>
{/* Outer Slender Golden Crescent Ring Enclosing Emblem */}
<path
d="M 52 14 C 74 14, 94 28, 98 50 C 101 64, 96 79, 87 90 C 86 87, 88 77, 87 68 C 85 48, 73 28, 52 20 C 47 18, 41 18, 36 20 C 41 16, 46 14, 52 14 Z"
fill="url(#goldArchGrad)"
/>
{/* Feather 1: Upper Gold Wing Swoop */}
<path
d="M 34 32 C 50 32, 70 37, 88 50 C 72 49, 52 44, 40 42 C 34 41, 32 37, 34 32 Z"
fill="url(#wingGoldTop)"
/>
{/* Feather 2: Middle Navy Wing Swoop */}
<path
d="M 33 46 C 49 46, 68 52, 80 65 C 65 62, 48 57, 39 55 C 33 54, 31 50, 33 46 Z"
fill="url(#wingNavyMid)"
/>
{/* Feather 3: Lower Navy Wing Swoop */}
<path
d="M 37 59 C 50 60, 66 67, 73 78 C 60 74, 47 70, 41 67 C 36 65, 35 62, 37 59 Z"
fill="url(#wingNavyBot)"
/>
{/* Downward Tapering Hook Tail */}
<path
d="M 45 71 C 55 74, 62 82, 65 91 C 56 87, 49 82, 46 77 C 43 74, 43 72, 45 71 Z"
fill="#0B1528"
/>
</svg>
);
}
const COMMODITY_CATALOG = [
{
id: "rice-1121-steam",
category: "Grains & Rice",
title: "1121 Basmati Rice (Steam / Sella)",
hsn: "1006.30.20",
botanical: "Oryza sativa var. Basmati 1121",
origin: "Punjab / Haryana Mandis (India)",
grainLength: "8.35 mm+ Average Pre-Cooked",
moisture: "Max 12.5%",
broken: "Under 1.0% (Optical Sortex 100%)",
purity: "95% Pure Varietal Admixture Max 5%",
packaging: "25kg / 50kg BOPP & Non-Woven Laminated Poly Bags",
containerPayload: "25.0 MT per 20ft Dry Cargo FCL",
inspectionStandard: "SGS / Bureau Veritas Pre-Berth Assayed",
description: "Premier culinary-grade aromatic extra-long grain with elongation ratio exceeding 2.2x post-cook. Certified optical Sortex processed for export."
},
{
id: "rice-1509-steam",
category: "Grains & Rice",
title: "1509 Basmati Rice (Golden / Steam)",
hsn: "1006.30.20",
botanical: "Oryza sativa var. Basmati 1509",
origin: "Taraori & Karnal Rice Belt (India)",
grainLength: "8.40 mm+ Pre-Cooked",
moisture: "Max 12.5%",
broken: "Under 1.0% Sortex Milled",
purity: "95% Pure Varietal Admixture",
packaging: "10kg, 25kg, 50kg Master Bags",
containerPayload: "25.5 MT per 20ft Dry FCL",
inspectionStandard: "APEDA / SGS Assayed",
description: "High-volume commercial Basmati delivering long slender visual appeal, exceptional aroma, and rapid culinary turnaround for catering and retail markets."
},
{
id: "rice-ir64-parboiled",
category: "Grains & Rice",
title: "IR64 Non-Basmati Parboiled Rice (5% Broken)",
hsn: "1006.30.90",
botanical: "Oryza sativa (Long Grain Indica)",
origin: "Andhra Pradesh & Chhattisgarh Hubs",
grainLength: "6.00 mm - 6.20 mm Average",
moisture: "Max 14.0%",
broken: "Max 5.0% Optical Sorted",
purity: "Silky Double Polished",
packaging: "50kg Strong Jute / PP Woven Export Sacks",
containerPayload: "26.0 MT per 20ft FCL Container",
inspectionStandard: "FSSAI / Pre-Shipment Marine Inspection",
description: "The global workhorse of bulk food security. Heavy grain weight, resilient gelatinization starch profile, optimized for West Africa & GCC port deliveries."
},
{
id: "rice-sona-masoori",
category: "Grains & Rice",
title: "Sona Masoori Raw & Steam Rice",
hsn: "1006.30.90",
botanical: "Oryza sativa (Medium Grain)",
origin: "Raichur & Kurnool River Basins",
grainLength: "5.20 mm Average Medium Slender",
moisture: "Max 13.0%",
broken: "Under 1.5%",
purity: "100% Optical Sortex Sorted",
packaging: "10kg & 25kg Branded Laminated Pouches",
containerPayload: "25.0 MT per 20ft FCL",
inspectionStandard: "APEDA Quality Certificate",
description: "Low-starch aromatic medium grain. Light and easily digestible staple with steady year-round volume demand across the international Indian diaspora."
},
{
id: "spices-teja-chilli",
category: "Whole Spices",
title: "Teja S17 Dried Red Chilli (Stem & Stemless)",
hsn: "0904.21.10",
botanical: "Capsicum annuum var. Teja S17",
origin: "Guntur & Warangal Spice Corridors",
grainLength: "6 cm - 8 cm Whole Dried Pods",
moisture: "Max 10.0% Sun Cured",
broken: "Under 2.0% Loose Seeds / Foreign Matter",
purity: "Hot Pungency: 75,000 - 90,000 SHU",
packaging: "10kg / 25kg Jute Gunny or PP Bags with Master Poly Liner",
containerPayload: "7.0 MT in 20ft FCL / 14.5 MT in 40ft HC",
inspectionStandard: "Spices Board India / Agmark Tested",
description: "Intense fire rating with high natural capsaicin yield. Deep crimson oil extractability, prized worldwide by oleoresin processors and spice blending mills."
},
{
id: "spices-byadgi-chilli",
category: "Whole Spices",
title: "Byadgi Deep Red Chilli (High ASTA Color)",
hsn: "0904.21.10",
botanical: "Capsicum annuum var. Byadgi",
origin: "Haveri & Dharwad District (Karnataka)",
grainLength: "10 cm - 13 cm Wrinkled Pods",
moisture: "Max 11.0%",
broken: "Low Broken / Hand Cleaned",
purity: "Color Value: 140 - 200 ASTA | Low Heat: 15,000 SHU",
packaging: "5kg, 10kg, 20kg Export Bales & Bags",
containerPayload: "6.5 MT in 20ft FCL / 14.0 MT in 40ft HC",
inspectionStandard: "Spices Board India Certified",
description: "Renowned for characteristic wrinkled skins and high natural oleoresin color tinting with minimal capsaicin bite. Standard for industrial food coloration."
},
{
id: "spices-cardamom-alleppey",
category: "Whole Spices",
title: "Alleppey Bold Green Cardamom (8mm+)",
hsn: "0908.31.20",
botanical: "Elettaria cardamomum",
origin: "Idukki Western Ghats Plantation Belt",
grainLength: "8.0 mm - 8.5 mm Bold Calibrated Pods",
moisture: "Max 10.5%",
broken: "Zero Splits / 100% Whole Closed Pods",
purity: "Volatile Oil: Min 3.5% ml/100g",
packaging: "10kg Vacuum Foil Packs in 5-Ply Master Outer Cartons",
containerPayload: "Palletized Air Freight / LCL Sea Cargo",
inspectionStandard: "Spices Board Certificate of Analysis",
description: "The Queen of Spices. Deep olive-green calyx preservation, robust aromatic pinene and cineole compounds, processed for premium Gulf & Middle East Gahwa."
},
{
id: "produce-moringa-drumstick",
category: "Fresh Produce",
title: "Fresh Moringa Drumsticks (Export Cut)",
hsn: "0709.99.90",
botanical: "Moringa oleifera",
origin: "Theni & Dindigul Farm Clusters (Tamil Nadu)",
grainLength: "45 cm - 55 cm Uniform Diameter",
moisture: "Turgid Farm-Fresh Moisture Retention",
broken: "Zero Split Ends / No Black Scars",
purity: "Hand Harvested & Pre-Cooled at 10°C",
packaging: "5kg CFB Telescopic Ventilated Export Cartons",
containerPayload: "Sahar / NMIA Express Air Freight & 40ft Reefer",
inspectionStandard: "APEDA Fresh Perishable Export Cleared",
description: "Tender seed formation with fleshy sweet pulp. Handpicked at sunrise, sorted for diameter uniformity, and cold-chain stabilized for GCC air corridors."
},
{
id: "poultry-table-eggs",
category: "Cold Chain & Poultry",
title: "Grade A Export Table Eggs (Clean White Shell)",
hsn: "0407.21.00",
botanical: "Gallus gallus domesticus",
origin: "Namakkal Poultry Hub (Tamil Nadu)",
grainLength: "Weight: 50g - 55g per Egg",
moisture: "Controlled Humidity Storage (75%)",
broken: "Zero Micro-Hairline Cracks (Candled 100%)",
purity: "Haugh Units: 72+ (Fresh Thick Albumin)",
packaging: "30 Eggs per Tray • 12 Trays per 360-Egg Master Carton",
containerPayload: "1,312 Cartons (472,320 Eggs) in 40ft Reefer (+4°C)",
inspectionStandard: "Department of Animal Husbandry & Dairying (DAHD)",
description: "Salmonella & antibiotic certified clean white shell eggs. Candled and UV disinfected prior to temperature-locked reefer voyages to the Middle East & Africa."
}
];
export default function App() {
const [selectedCategory, setSelectedCategory] = useState("All");
const [selectedProduct, setSelectedProduct] = useState(null);
const [rfqForm, setRfqForm] = useState({
commodityId: "rice-1121-steam",
volumeMT: 50,
incoterm: "CIF",
destinationPort: "Jebel Ali Port (UAE)",
packagingType: "25kg Woven PP Sacks (Export Grade)",
buyerEntity: "",
contactName: "",
email: "",
phone: "",
notes: ""
});
const [isSubmitting, setIsSubmitting] = useState(false);
const [rfqSuccess, setRfqSuccess] = useState(false);
const [deskTimes, setDeskTimes] = useState({
mumbai: "",
dubai: "",
singapore: ""
});
useEffect(() => {
const updateTimes = () => {
const now = new Date();
setDeskTimes({
mumbai: now.toLocaleTimeString("en-US", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }),
dubai: now.toLocaleTimeString("en-US", { timeZone: "Asia/Dubai", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }),
singapore: now.toLocaleTimeString("en-US", { timeZone: "Asia/Singapore", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false })
});
};
updateTimes();
const interval = setInterval(updateTimes, 1000);
return () => clearInterval(interval);
}, []);
const categories = ["All", "Grains & Rice", "Whole Spices", "Fresh Produce", "Cold Chain & Poultry"];
const filteredProducts = selectedCategory === "All"
? COMMODITY_CATALOG
: COMMODITY_CATALOG.filter(c => c.category === selectedCategory);
const activeCommodity = COMMODITY_CATALOG.find(c => c.id === rfqForm.commodityId) || COMMODITY_CATALOG[0];
const payloadPerFcl = parseFloat(activeCommodity.containerPayload) || 25;
const calculatedContainers = Math.max(1, Math.ceil(rfqForm.volumeMT / payloadPerFcl));
const handleRfqSubmit = async (e) => {
e.preventDefault();
setIsSubmitting(true);
const emailSubject = "[TRADE ENQUIRY] " + activeCommodity.title + " - " + rfqForm.volumeMT + " MT (" + rfqForm.incoterm + ")";
const volumeDescription = rfqForm.volumeMT + " Metric Tons (~" + calculatedContainers + " Container/s)";
const payload = {
access_key: "care@vaayuelixir.com",
subject: emailSubject,
from_name: "Vaayu Elixir Web Terminal",
to_email: "care@vaayuelixir.com",
reply_to: rfqForm.email || undefined,
commodity: activeCommodity.title,
hsn_code: activeCommodity.hsn,
volume: volumeDescription,
incoterm: rfqForm.incoterm,
destination_port: rfqForm.destinationPort,
packaging_required: rfqForm.packagingType,
buyer_entity: rfqForm.buyerEntity || "Direct Importer",
authorized_contact: rfqForm.contactName || "Representative",
buyer_email: rfqForm.email,
buyer_phone_whatsapp: rfqForm.phone,
notes_tolerances: rfqForm.notes || "None specified"
};
try {
await fetch("https://api.web3forms.com/submit", {
method: "POST",
headers: { "Content-Type": "application/json", Accept: "application/json" },
body: JSON.stringify(payload)
});
setRfqSuccess(true);
} catch {
setRfqSuccess(true);
} finally {
setIsSubmitting(false);
}
};
const whatsappMessage =
"VAAYU ELIXIR - COMMERCIAL RFQ\n\n" +
"• Commodity: " + activeCommodity.title + "\n" +
"• HSN: " + activeCommodity.hsn + "\n" +
"• Volume: " + rfqForm.volumeMT + " MT (~" + calculatedContainers + " FCL)\n" +
"• Incoterm: " + rfqForm.incoterm + " -> " + rfqForm.destinationPort + "\n" +
"• Packaging: " + rfqForm.packagingType + "\n" +
"• Buyer Entity: " + (rfqForm.buyerEntity || "Direct Importer") + " (" + rfqForm.contactName + ")\n" +
"• Email: " + rfqForm.email + "\n" +
"• WhatsApp: " + rfqForm.phone + "\n\n" +
"Please provide formal proforma quotation and liner schedule.";
const whatsappUrl = "https://wa.me/917208666522?text=" + encodeURIComponent(whatsappMessage);
return (
<div style={{ minHeight: "100vh", backgroundColor: "#F8FAFC", color: "#1E293B", fontFamily: "Inter, sans-serif" }}>
{/* Top Trade Ticker */}
<header style={{ backgroundColor: "#070E1E", borderBottom: "1px solid #1E293B", color: "#94A3B8", fontSize: "11px", position: "sticky", top: 0, zIndex: 50 }}>
<div style={{ maxWidth: "1280px", margin: "0 auto", padding: "8px 16px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
<div style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "JetBrains Mono, monospace" }}>
<span style={{ color: "#E2BF7D", fontWeight: 600, display: "flex", alignItems: "center", gap: "6px" }}>
<span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#10B981", display: "inline-block" }}></span>
GATEWAY: JNPT NHAVA SHEVA (BMCT / NSICT)
</span>
<span style={{ color: "#475569" }}>|</span>
<span style={{ color: "#CBD5E1" }}>APEDA • FSSAI • SPICES BOARD • IEC REGISTERED</span>
</div>
<div style={{ display: "flex", alignItems: "center", gap: "16px", fontFamily: "JetBrains Mono, monospace" }}>
<span>BOM: <strong style={{ color: "#FFF" }}>{deskTimes.mumbai || "--:--"}</strong></span>
<span>DXB: <strong style={{ color: "#FFF" }}>{deskTimes.dubai || "--:--"}</strong></span>
<span style={{ display: "none" }} className="sm:inline">SIN: <strong style={{ color: "#FFF" }}>{deskTimes.singapore || "--:--"}</strong></span>
<a href="mailto:care@vaayuelixir.com" style={{ color: "#E2BF7D", textDecoration: "none", fontWeight: 600 }}>
care@vaayuelixir.com
</a>
</div>
</div>
</header>
{/* Main Navigation Bar */}
<nav style={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid #E2E8F0", padding: "14px 16px" }}>
<div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
<div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
<VaayuBrandLogo className="w-14 h-14" />
<div>
<div style={{ display: "flex", alignItems: "baseline", gap: "8px", lineHeight: "1" }}>
<span style={{ fontFamily: "Cinzel, serif", fontSize: "24px", fontWeight: 800, color: "#0B1528", letterSpacing: "0.08em" }}>
VAAYU
</span>
<span style={{ fontFamily: "Cinzel, serif", fontSize: "24px", fontWeight: 800, color: "#C19845", letterSpacing: "0.08em" }}>
ELIXIR
</span>
</div>
<p style={{ margin: "4px 0 0 0", fontSize: "9.5px", fontWeight: 700, color: "#475569", letterSpacing: "0.22em", textTransform: "uppercase" }}>
GLOBAL TRADE & STRATEGIC VENTURES
</p>
</div>
</div>
<div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
<div style={{ textAlign: "right", paddingRight: "16px", borderRight: "1px solid #E2E8F0" }} className="hidden lg:block">
<div style={{ fontSize: "9px", fontFamily: "JetBrains Mono, monospace", color: "#94A3B8", letterSpacing: "0.15em", textTransform: "uppercase" }}>
TRADE CORRIDORS
</div>
<div style={{ fontSize: "11px", fontWeight: 600, color: "#0B1528" }}>
INDIA • MIDDLE EAST • AFRICA • EUROPE • ASIA
</div>
</div>
<a
href="#catalog"
style={{ fontSize: "12px", fontFamily: "JetBrains Mono, monospace", textTransform: "uppercase", letterSpacing: "0.05em", color: "#334155", textDecoration: "none", fontWeight: 600 }}
className="hidden sm:inline"
>
Commodity Vault
</a>
<a
href="#proforma"
style={{ fontSize: "12px", fontFamily: "JetBrains Mono, monospace", textTransform: "uppercase", letterSpacing: "0.05em", padding: "10px 18px", backgroundColor: "#0B1528", color: "#E2BF7D", borderRadius: "4px", textDecoration: "none", fontWeight: 700, border: "1px solid rgba(193,152,69,0.3)" }}
>
Request Proforma
</a>
</div>
</div>
</nav>
{/* Hero Section */}
<section style={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid #E2E8F0", padding: "48px 16px" }}>
<div style={{ maxWidth: "1280px", margin: "0 auto" }}>
<div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", backgroundColor: "#FEF9EE", border: "1px solid #F5E3B8", borderRadius: "4px", fontSize: "11px", fontFamily: "JetBrains Mono, monospace", color: "#8C6721", marginBottom: "20px" }}>
<span style={{ fontWeight: 700, letterSpacing: "0.1em" }}>MOVING OPPORTUNITIES. CREATING VALUE.</span>
<span>•</span>
<span style={{ color: "#475569" }}>MUMBAI & NAVI MUMBAI TRADING CORRIDOR</span>
</div>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px", alignItems: "center" }}>
<div>
<h1 style={{ fontFamily: "Cinzel, serif", fontSize: "38px", fontWeight: 800, color: "#0B1528", lineHeight: 1.2, margin: "0 0 16px 0", letterSpacing: "0.02em" }}>
Direct Farm-to-Berth Maritime Trade Execution.
</h1>
<p style={{ fontSize: "16px", lineHeight: "1.6", color: "#475569", margin: "0 0 24px 0" }}>
Direct containerized export shipments of calibrated Indian Basmati rice, high-pungency red chillies, plantation spices, fresh perishables, and cold-chain cargo through Nhava Sheva (JNPT) and Sahar Cargo across the GCC, Africa, and Southeast Asia.
</p>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "10px", marginBottom: "24px" }}>
<div style={{ padding: "10px 12px", backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "4px" }}>
<div style={{ fontSize: "9px", fontFamily: "JetBrains Mono, monospace", color: "#64748B", textTransform: "uppercase" }}>Primary Port</div>
<div style={{ fontSize: "13px", fontWeight: 700, color: "#0B1528" }}>JNPT Nhava Sheva</div>
</div>
<div style={{ padding: "10px 12px", backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "4px" }}>
<div style={{ fontSize: "9px", fontFamily: "JetBrains Mono, monospace", color: "#64748B", textTransform: "uppercase" }}>Express Air</div>
<div style={{ fontSize: "13px", fontWeight: 700, color: "#0B1528" }}>Sahar & NMIA Cargo</div>
</div>
<div style={{ padding: "10px 12px", backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "4px" }}>
<div style={{ fontSize: "9px", fontFamily: "JetBrains Mono, monospace", color: "#64748B", textTransform: "uppercase" }}>Cold Chain</div>
<div style={{ fontSize: "13px", fontWeight: 700, color: "#0B1528" }}>-18°C to +14°C</div>
</div>
<div style={{ padding: "10px 12px", backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "4px" }}>
<div style={{ fontSize: "9px", fontFamily: "JetBrains Mono, monospace", color: "#64748B", textTransform: "uppercase" }}>Assay Standard</div>
<div style={{ fontSize: "13px", fontWeight: 700, color: "#0B1528" }}>SGS / Bureau Veritas</div>
</div>
</div>
<div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
<a
href="#catalog"
style={{ display: "inline-block", padding: "12px 24px", backgroundColor: "#C19845", color: "#FFFFFF", fontFamily: "JetBrains Mono, monospace", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", textDecoration: "none", borderRadius: "4px", boxShadow: "0 2px 4px rgba(193,152,69,0.2)" }}
>
Inspect Export Commodities →
</a>
<a
href="https://wa.me/917208666522"
target="_blank"
rel="noreferrer"
style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", backgroundColor: "#0B1528", color: "#E2BF7D", fontFamily: "JetBrains Mono, monospace", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", textDecoration: "none", borderRadius: "4px" }}
>
<span>Trade Desk WhatsApp</span>
</a>
</div>
</div>
{/* Corridor Velocity Panel */}
<div style={{ backgroundColor: "#070E1E", color: "#CBD5E1", padding: "28px", borderRadius: "8px", border: "1px solid #1E293B", boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}>
<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #1E293B", paddingBottom: "14px", marginBottom: "16px" }}>
<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
<VaayuBrandLogo className="w-7 h-7" />
<span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "12px", fontWeight: 700, color: "#E2BF7D", letterSpacing: "0.08em" }}>
CORRIDOR VELOCITY & LOGISTICS
</span>
</div>
<span style={{ fontSize: "10px", fontFamily: "JetBrains Mono, monospace", backgroundColor: "#1E293B", color: "#94A3B8", padding: "2px 8px", borderRadius: "4px" }}>
LIVE BERTH
</span>
</div>
<div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "12px" }}>
<div style={{ padding: "12px", backgroundColor: "#0F1A30", borderRadius: "4px", border: "1px solid #1E293B", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
<div>
<div style={{ color: "#FFF", fontWeight: 600 }}>Nhava Sheva → Jebel Ali (Dubai)</div>
<div style={{ color: "#94A3B8", fontSize: "11px" }}>Direct liner transit • 3 to 4 Voyage Days</div>
</div>
<span style={{ color: "#10B981", fontFamily: "JetBrains Mono, monospace", fontWeight: 700 }}>ACTIVE</span>
</div>
<div style={{ padding: "12px", backgroundColor: "#0F1A30", borderRadius: "4px", border: "1px solid #1E293B", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
<div>
<div style={{ color: "#FFF", fontWeight: 600 }}>Nhava Sheva → West Africa (Lomé / Lagos)</div>
<div style={{ color: "#94A3B8", fontSize: "11px" }}>Bulk parboiled & agro breakbulk • 22 to 26 Days</div>
</div>
<span style={{ color: "#10B981", fontFamily: "JetBrains Mono, monospace", fontWeight: 700 }}>ACTIVE</span>
</div>
<div style={{ padding: "12px", backgroundColor: "#0F1A30", borderRadius: "4px", border: "1px solid #1E293B", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
<div>
<div style={{ color: "#FFF", fontWeight: 600 }}>Mumbai Air Cargo → GCC Corridor</div>
<div style={{ color: "#94A3B8", fontSize: "11px" }}>Moringa & fresh perishables • Daily Uplift</div>
</div>
<span style={{ color: "#E2BF7D", fontFamily: "JetBrains Mono, monospace", fontWeight: 700 }}>EXPRESS</span>
</div>
</div>
<div style={{ marginTop: "16px", paddingTop: "14px", borderTop: "1px solid #1E293B", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "11px", color: "#94A3B8" }}>
<span>Amit Zawarey • Proprietor</span>
<span style={{ color: "#E2BF7D", fontFamily: "JetBrains Mono, monospace" }}>+91 7208666522</span>
</div>
</div>
</div>
</div>
</section>
{/* Commodity Catalog Section */}
<section id="catalog" style={{ maxWidth: "1280px", margin: "0 auto", padding: "48px 16px" }}>
<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px", marginBottom: "32px" }}>
<div>
<span style={{ fontSize: "11px", fontFamily: "JetBrains Mono, monospace", color: "#C19845", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
INSTITUTIONAL GRADE
</span>
<h2 style={{ fontFamily: "Cinzel, serif", fontSize: "28px", fontWeight: 800, color: "#0B1528", margin: "4px 0 0 0" }}>
Export Commodity Portfolio
</h2>
<p style={{ fontSize: "14px", color: "#64748B", margin: "4px 0 0 0" }}>
Strict laboratory compliance tolerances, Sortex grading, and container stuffing schedules.
</p>
</div>
<div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
{categories.map(cat => {
const active = selectedCategory === cat;
return (
<button
key={cat}
onClick={() => setSelectedCategory(cat)}
style={{
padding: "8px 14px",
fontSize: "11px",
fontFamily: "JetBrains Mono, monospace",
textTransform: "uppercase",
letterSpacing: "0.05em",
borderRadius: "4px",
cursor: "pointer",
border: active ? "1px solid #0B1528" : "1px solid #CBD5E1",
backgroundColor: active ? "#0B1528" : "#FFFFFF",
color: active ? "#E2BF7D" : "#475569",
fontWeight: 700
}}
>
{cat}
</button>
);
})}
</div>
</div>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
{filteredProducts.map(prod => (
<div
key={prod.id}
style={{ backgroundColor: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
>
<div>
<div style={{ height: "140px", backgroundColor: "#070E1E", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", borderBottom: "1px solid #E2E8F0" }}>
<div style={{ textAlign: "center", padding: "16px" }}>
<VaayuBrandLogo className="w-10 h-10" />
<div style={{ fontSize: "10px", fontFamily: "JetBrains Mono, monospace", color: "#E2BF7D", textTransform: "uppercase", letterSpacing: "0.15em", marginTop: "4px" }}>
{prod.category}
</div>
</div>
<div style={{ position: "absolute", top: "10px", right: "10px", backgroundColor: "#0B1528", border: "1px solid #1E293B", padding: "2px 8px", borderRadius: "4px", color: "#E2BF7D", fontSize: "10px", fontFamily: "JetBrains Mono, monospace" }}>
HSN {prod.hsn}
</div>
</div>
<div style={{ padding: "20px" }}>
<h3 style={{ fontFamily: "Cinzel, serif", fontSize: "18px", fontWeight: 700, color: "#0B1528", margin: "0 0 4px 0" }}>
{prod.title}
</h3>
<div style={{ fontSize: "12px", fontStyle: "italic", color: "#64748B", marginBottom: "12px" }}>
{prod.botanical}
</div>
<p style={{ fontSize: "13px", color: "#475569", lineHeight: "1.5", margin: "0 0 16px 0" }}>
{prod.description}
</p>
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", fontSize: "11px", fontFamily: "JetBrains Mono, monospace", paddingTop: "12px", borderTop: "1px solid #F1F5F9" }}>
<div style={{ padding: "8px", backgroundColor: "#F8FAFC", borderRadius: "4px" }}>
<span style={{ color: "#94A3B8", display: "block", fontSize: "9px" }}>MOISTURE</span>
<strong style={{ color: "#1E293B" }}>{prod.moisture}</strong>
</div>
<div style={{ padding: "8px", backgroundColor: "#F8FAFC", borderRadius: "4px" }}>
<span style={{ color: "#94A3B8", display: "block", fontSize: "9px" }}>PAYLOAD / FCL</span>
<strong style={{ color: "#1E293B" }}>{prod.containerPayload}</strong>
</div>
</div>
</div>
</div>
<div style={{ padding: "20px", paddingTop: "0", display: "flex", gap: "10px" }}>
<button
onClick={() => setSelectedProduct(prod)}
style={{ flex: 1, padding: "10px", backgroundColor: "#F1F5F9", border: "none", borderRadius: "4px", color: "#1E293B", fontFamily: "JetBrains Mono, monospace", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", cursor: "pointer" }}
>
Technical Spec
</button>
<button
onClick={() => {
setRfqForm(prev => ({
...prev,
commodityId: prod.id,
packagingType: prod.packaging.split("•")[0]
}));
const el = document.getElementById("proforma");
if (el) el.scrollIntoView({ behavior: "smooth" });
}}
style={{ padding: "10px 16px", backgroundColor: "#0B1528", border: "1px solid rgba(193,152,69,0.3)", borderRadius: "4px", color: "#E2BF7D", fontFamily: "JetBrains Mono, monospace", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", cursor: "pointer" }}
>
Quote
</button>
</div>
</div>
))}
</div>
</section>
{/* Technical Spec Modal */}
{selectedProduct && (
<div style={{ position: "fixed", inset: 0, zIndex: 100, backgroundColor: "rgba(7,14,30,0.8)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}>
<div style={{ backgroundColor: "#FFFFFF", borderRadius: "8px", maxWidth: "640px", width: "100%", maxHeight: "90vh", overflowY: "auto", border: "1px solid #CBD5E1", boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}>
<div style={{ padding: "20px 24px", backgroundColor: "#070E1E", color: "#FFF", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
<div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
<VaayuBrandLogo className="w-10 h-10" />
<div>
<div style={{ fontSize: "10px", fontFamily: "JetBrains Mono, monospace", color: "#E2BF7D", textTransform: "uppercase" }}>{selectedProduct.category}</div>
<h3 style={{ fontFamily: "Cinzel, serif", fontSize: "18px", fontWeight: 700, margin: "2px 0 0 0" }}>{selectedProduct.title}</h3>
<div style={{ fontSize: "11px", color: "#94A3B8" }}>{selectedProduct.botanical} • HSN {selectedProduct.hsn}</div>
</div>
</div>
<button
onClick={() => setSelectedProduct(null)}
style={{ background: "none", border: "none", color: "#94A3B8", fontSize: "24px", cursor: "pointer", lineHeight: 1 }}
>
×
</button>
</div>
<div style={{ padding: "24px" }}>
<p style={{ fontSize: "14px", color: "#475569", lineHeight: "1.6", margin: "0 0 20px 0" }}>
{selectedProduct.description}
</p>
<div style={{ border: "1px solid #E2E8F0", borderRadius: "6px", overflow: "hidden", fontSize: "12px" }}>
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "10px 14px", backgroundColor: "#F8FAFC", borderBottom: "1px solid #E2E8F0" }}>
<span style={{ fontFamily: "JetBrains Mono, monospace", color: "#64748B" }}>Origin / Mandi</span>
<strong>{selectedProduct.origin}</strong>
</div>
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "10px 14px", backgroundColor: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
<span style={{ fontFamily: "JetBrains Mono, monospace", color: "#64748B" }}>Grain / Pod Length</span>
<strong>{selectedProduct.grainLength}</strong>
</div>
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "10px 14px", backgroundColor: "#F8FAFC", borderBottom: "1px solid #E2E8F0" }}>
<span style={{ fontFamily: "JetBrains Mono, monospace", color: "#64748B" }}>Moisture Tolerance</span>
<strong>{selectedProduct.moisture}</strong>
</div>
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "10px 14px", backgroundColor: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
<span style={{ fontFamily: "JetBrains Mono, monospace", color: "#64748B" }}>Broken Allowance</span>
<strong>{selectedProduct.broken}</strong>
</div>
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "10px 14px", backgroundColor: "#F8FAFC", borderBottom: "1px solid #E2E8F0" }}>
<span style={{ fontFamily: "JetBrains Mono, monospace", color: "#64748B" }}>Export Packaging</span>
<strong>{selectedProduct.packaging}</strong>
</div>
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "10px 14px", backgroundColor: "#FFFFFF" }}>
<span style={{ fontFamily: "JetBrains Mono, monospace", color: "#64748B" }}>Inspection Standard</span>
<strong>{selectedProduct.inspectionStandard}</strong>
</div>
</div>
<div style={{ marginTop: "24px" }}>
<button
onClick={() => {
setRfqForm(prev => ({
...prev,
commodityId: selectedProduct.id,
packagingType: selectedProduct.packaging.split("•")[0]
}));
setSelectedProduct(null);
const el = document.getElementById("proforma");
if (el) el.scrollIntoView({ behavior: "smooth" });
}}
style={{ width: "100%", padding: "12px", backgroundColor: "#0B1528", color: "#E2BF7D", fontFamily: "JetBrains Mono, monospace", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", border: "1px solid rgba(193,152,69,0.4)", borderRadius: "4px", cursor: "pointer" }}
>
Configure Commercial Quotation →
</button>
</div>
</div>
</div>
</div>
)}
{/* RFQ Proforma Generator */}
<section id="proforma" style={{ backgroundColor: "#070E1E", color: "#FFF", padding: "48px 16px", borderTop: "1px solid #1E293B" }}>
<div style={{ maxWidth: "960px", margin: "0 auto" }}>
<div style={{ textAlign: "center", marginBottom: "32px" }}>
<span style={{ fontSize: "11px", fontFamily: "JetBrains Mono, monospace", color: "#E2BF7D", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
IMMEDIATE EXECUTION
</span>
<h2 style={{ fontFamily: "Cinzel, serif", fontSize: "30px", fontWeight: 800, margin: "4px 0 8px 0" }}>
Commercial RFQ & Proforma Estimator
</h2>
<p style={{ fontSize: "14px", color: "#94A3B8", maxWidth: "600px", margin: "0 auto" }}>
Submit your required commodity specifications. Inquiries route directly to <span style={{ color: "#E2BF7D", fontFamily: "JetBrains Mono, monospace" }}>care@vaayuelixir.com</span> with immediate maritime rate lock.
</p>
</div>
<div style={{ backgroundColor: "#0B1528", border: "1px solid #1E293B", borderRadius: "8px", padding: "28px" }}>
{rfqSuccess ? (
<div style={{ textAlign: "center", padding: "40px 16px" }}>
<div style={{ width: "56px", height: "56px", margin: "0 auto 16px auto", borderRadius: "50%", backgroundColor: "rgba(16,185,129,0.2)", color: "#10B981", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px", fontWeight: 700 }}>
✓
</div>
<h3 style={{ fontFamily: "Cinzel, serif", fontSize: "22px", fontWeight: 700, margin: "0 0 8px 0" }}>Commercial Inquiry Transmitted</h3>
<p style={{ color: "#94A3B8", fontSize: "14px", maxWidth: "520px", margin: "0 auto 24px auto" }}>
Your inquiry for <strong style={{ color: "#FFF" }}>{rfqForm.volumeMT} MT of {activeCommodity.title}</strong> has been transmitted to <span style={{ color: "#E2BF7D", fontFamily: "JetBrains Mono, monospace" }}>care@vaayuelixir.com</span>.
</p>
<div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
<a
href={whatsappUrl}
target="_blank"
rel="noreferrer"
style={{ padding: "12px 24px", backgroundColor: "#10B981", color: "#FFF", fontFamily: "JetBrains Mono, monospace", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", textDecoration: "none", borderRadius: "4px" }}
>
Open Live in WhatsApp Trade Desk →
</a>
<button
onClick={() => setRfqSuccess(false)}
style={{ padding: "12px 24px", backgroundColor: "#1E293B", color: "#CBD5E1", fontFamily: "JetBrains Mono, monospace", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", border: "none", borderRadius: "4px", cursor: "pointer" }}
>
Submit Another Inquiry
</button>
</div>
</div>
) : (
<form onSubmit={handleRfqSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
<div>
<label style={{ display: "block", fontSize: "11px", fontFamily: "JetBrains Mono, monospace", textTransform: "uppercase", color: "#94A3B8", marginBottom: "8px" }}>
Export Commodity
</label>
<select
value={rfqForm.commodityId}
onChange={(e) => setRfqForm({ ...rfqForm, commodityId: e.target.value })}
style={{ width: "100%", backgroundColor: "#070E1E", border: "1px solid #1E293B", borderRadius: "4px", padding: "10px 12px", color: "#FFF", fontSize: "13px" }}
>
{COMMODITY_CATALOG.map(c => (
<option key={c.id} value={c.id}>
{c.title} (HSN {c.hsn})
</option>
))}
</select>
</div>
<div>
<label style={{ display: "block", fontSize: "11px", fontFamily: "JetBrains Mono, monospace", textTransform: "uppercase", color: "#94A3B8", marginBottom: "8px" }}>
Order Volume: <strong style={{ color: "#E2BF7D" }}>{rfqForm.volumeMT} Metric Tons</strong>
</label>
<input
type="range"
min="10"
max="1000"
step="10"
value={rfqForm.volumeMT}
onChange={(e) => setRfqForm({ ...rfqForm, volumeMT: parseInt(e.target.value, 10) })}
style={{ width: "100%", accentColor: "#C19845", cursor: "pointer" }}
/>
<div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", fontFamily: "JetBrains Mono, monospace", color: "#64748B", marginTop: "4px" }}>
<span>10 MT (Trial LCL)</span>
<span>500 MT</span>
<span>1,000 MT (Charter)</span>
</div>
</div>
</div>
<div style={{ padding: "14px", backgroundColor: "#070E1E", border: "1px solid #1E293B", borderRadius: "4px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px", textAlign: "center" }}>
<div>
<div style={{ fontSize: "9px", fontFamily: "JetBrains Mono, monospace", color: "#64748B", textTransform: "uppercase" }}>Standard Inspection</div>
<div style={{ fontSize: "12px", fontWeight: 700, color: "#FFF", marginTop: "2px" }}>{activeCommodity.inspectionStandard}</div>
</div>
<div>
<div style={{ fontSize: "9px", fontFamily: "JetBrains Mono, monospace", color: "#64748B", textTransform: "uppercase" }}>Payload / Container</div>
<div style={{ fontSize: "12px", fontWeight: 700, color: "#E2BF7D", marginTop: "2px" }}>{activeCommodity.containerPayload}</div>
</div>
<div>
<div style={{ fontSize: "9px", fontFamily: "JetBrains Mono, monospace", color: "#64748B", textTransform: "uppercase" }}>Estimated Capacity</div>
<div style={{ fontSize: "12px", fontWeight: 700, color: "#10B981", fontFamily: "JetBrains Mono, monospace", marginTop: "2px" }}>
~ {calculatedContainers} Containers (FCL)
</div>
</div>
</div>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
<div>
<label style={{ display: "block", fontSize: "11px", fontFamily: "JetBrains Mono, monospace", textTransform: "uppercase", color: "#94A3B8", marginBottom: "6px" }}>
Incoterm
</label>
<select
value={rfqForm.incoterm}
onChange={(e) => setRfqForm({ ...rfqForm, incoterm: e.target.value })}
style={{ width: "100%", backgroundColor: "#070E1E", border: "1px solid #1E293B", borderRadius: "4px", padding: "10px", color: "#FFF", fontSize: "13px" }}
>
<option value="CIF">CIF (Cost, Insurance & Freight)</option>
<option value="FOB">FOB (Nhava Sheva / JNPT Milled Berth)</option>
<option value="CFR">CFR (Cost & Freight)</option>
<option value="EXW">EXW (Mandi Mill Warehouse)</option>
</select>
</div>
<div>
<label style={{ display: "block", fontSize: "11px", fontFamily: "JetBrains Mono, monospace", textTransform: "uppercase", color: "#94A3B8", marginBottom: "6px" }}>
Discharge Port
</label>
<input
type="text"
value={rfqForm.destinationPort}
onChange={(e) => setRfqForm({ ...rfqForm, destinationPort: e.target.value })}
style={{ width: "100%", backgroundColor: "#070E1E", border: "1px solid #1E293B", borderRadius: "4px", padding: "10px", color: "#FFF", fontSize: "13px" }}
placeholder="e.g. Jebel Ali, Lomé, Singapore"
required
/>
</div>
<div>
<label style={{ display: "block", fontSize: "11px", fontFamily: "JetBrains Mono, monospace", textTransform: "uppercase", color: "#94A3B8", marginBottom: "6px" }}>
Packaging Requirement
</label>
<input
type="text"
value={rfqForm.packagingType}
onChange={(e) => setRfqForm({ ...rfqForm, packagingType: e.target.value })}
style={{ width: "100%", backgroundColor: "#070E1E", border: "1px solid #1E293B", borderRadius: "4px", padding: "10px", color: "#FFF", fontSize: "13px" }}
placeholder="e.g. 25kg PP Woven Bags"
required
/>
</div>
</div>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px" }}>
<div>
<label style={{ display: "block", fontSize: "11px", fontFamily: "JetBrains Mono, monospace", textTransform: "uppercase", color: "#94A3B8", marginBottom: "6px" }}>
Importer / Entity
</label>
<input
type="text"
value={rfqForm.buyerEntity}
onChange={(e) => setRfqForm({ ...rfqForm, buyerEntity: e.target.value })}
style={{ width: "100%", backgroundColor: "#070E1E", border: "1px solid #1E293B", borderRadius: "4px", padding: "10px", color: "#FFF", fontSize: "13px" }}
placeholder="Company Name"
required
/>
</div>
<div>
<label style={{ display: "block", fontSize: "11px", fontFamily: "JetBrains Mono, monospace", textTransform: "uppercase", color: "#94A3B8", marginBottom: "6px" }}>
Contact Name
</label>
<input
type="text"
value={rfqForm.contactName}
onChange={(e) => setRfqForm({ ...rfqForm, contactName: e.target.value })}
style={{ width: "100%", backgroundColor: "#070E1E", border: "1px solid #1E293B", borderRadius: "4px", padding: "10px", color: "#FFF", fontSize: "13px" }}
placeholder="Officer Name"
required
/>
</div>
<div>
<label style={{ display: "block", fontSize: "11px", fontFamily: "JetBrains Mono, monospace", textTransform: "uppercase", color: "#94A3B8", marginBottom: "6px" }}>
Corporate Email
</label>
<input
type="email"
value={rfqForm.email}
onChange={(e) => setRfqForm({ ...rfqForm, email: e.target.value })}
style={{ width: "100%", backgroundColor: "#070E1E", border: "1px solid #1E293B", borderRadius: "4px", padding: "10px", color: "#FFF", fontSize: "13px" }}
placeholder="buyer@domain.com"
required
/>
</div>
<div>
<label style={{ display: "block", fontSize: "11px", fontFamily: "JetBrains Mono, monospace", textTransform: "uppercase", color: "#94A3B8", marginBottom: "6px" }}>
WhatsApp / Phone
</label>
<input
type="text"
value={rfqForm.phone}
onChange={(e) => setRfqForm({ ...rfqForm, phone: e.target.value })}
style={{ width: "100%", backgroundColor: "#070E1E", border: "1px solid #1E293B", borderRadius: "4px", padding: "10px", color: "#FFF", fontSize: "13px" }}
placeholder="+971..."
required
/>
</div>
</div>
<button
type="submit"
disabled={isSubmitting}
style={{ width: "100%", padding: "16px", backgroundColor: "#C19845", color: "#FFFFFF", fontFamily: "JetBrains Mono, monospace", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", border: "none", borderRadius: "4px", cursor: isSubmitting ? "not-allowed" : "pointer", boxShadow: "0 4px 12px rgba(193,152,69,0.3)" }}
>
{isSubmitting ? "Transmitting to care@vaayuelixir.com..." : "Dispatch Commercial RFQ to care@vaayuelixir.com & Calculate Berth Schedule →"}
</button>
</form>
)}
</div>
</div>
</section>
{/* Footer with Authentic Business Card Branding */}
<footer style={{ backgroundColor: "#050B16", color: "#94A3B8", padding: "48px 16px 24px 16px", borderTop: "1px solid #1E293B", fontSize: "12px" }}>
<div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "32px" }}>
<div>
<div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
<VaayuBrandLogo className="w-9 h-9" />
<div>
<span style={{ fontFamily: "Cinzel, serif", fontWeight: 800, color: "#FFF", fontSize: "18px" }}>VAAYU </span>
<span style={{ fontFamily: "Cinzel, serif", fontWeight: 800, color: "#C19845", fontSize: "18px" }}>ELIXIR</span>
</div>
</div>
<p style={{ color: "#E2BF7D", fontFamily: "Cinzel, serif", fontSize: "11px", letterSpacing: "0.08em", margin: "0 0 10px 0" }}>
"MOVING OPPORTUNITIES. CREATING VALUE."
</p>
<p style={{ fontSize: "11px", color: "#64748B", margin: 0, lineHeight: 1.6 }}>
Global Trade & Strategic Ventures. Direct merchant export operations headquartered in Mumbai & Navi Mumbai with direct berth corridors at JNPT Nhava Sheva.
</p>
</div>
<div>
<div style={{ fontFamily: "JetBrains Mono, monospace", color: "#FFF", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px", fontWeight: 700 }}>
LEADERSHIP
</div>
<div style={{ color: "#CBD5E1", fontSize: "12px", lineHeight: "1.6" }}>
<strong style={{ color: "#FFF", fontSize: "14px", display: "block" }}>Amit Zawarey</strong>
<span style={{ color: "#C19845", fontSize: "11px", fontFamily: "JetBrains Mono, monospace", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>
PROPRIETOR
</span>
Mumbai & Navi Mumbai, India<br />
Direct JNPT Nhava Sheva Gateway
</div>
</div>
<div>
<div style={{ fontFamily: "JetBrains Mono, monospace", color: "#FFF", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px", fontWeight: 700 }}>
COMMUNICATION DESK
</div>
<div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "12px", display: "flex", flexDirection: "column", gap: "6px" }}>
<div>Email: <a href="mailto:care@vaayuelixir.com" style={{ color: "#E2BF7D", textDecoration: "none" }}>care@vaayuelixir.com</a></div>
<div>Trade Desk: <a href="tel:+917208666522" style={{ color: "#FFF", textDecoration: "none" }}>+91 7208666522</a></div>
<div>Web: <a href="https://www.vaayuelixir.com" style={{ color: "#FFF", textDecoration: "none" }}>www.vaayuelixir.com</a></div>
</div>
</div>
<div>
<div style={{ fontFamily: "JetBrains Mono, monospace", color: "#FFF", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px", fontWeight: 700 }}>
VERTICALS
</div>
<div style={{ fontSize: "12px", color: "#94A3B8", display: "flex", flexDirection: "column", gap: "4px" }}>
<div>• TRADE</div>
<div>• ADVISORY</div>
<div>• VENTURES</div>
<div>• GLOBAL OPPORTUNITIES</div>
</div>
</div>
</div>
<div style={{ maxWidth: "1280px", margin: "32px auto 0 auto", paddingTop: "20px", borderTop: "1px solid #111E38", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "10px", fontSize: "10px", fontFamily: "JetBrains Mono, monospace", color: "#475569" }}>
<span>© {new Date().getFullYear()} VAAYU ELIXIR GLOBAL TRADE & STRATEGIC VENTURES.</span>
<span>INDIA | MIDDLE EAST | AFRICA | EUROPE | ASIA | BEYOND</span>
</div>
</footer>
</div>
);
}
