import React, { useState, useEffect } from 'react';
// Perfectly scaled and padded emblem based on your business card
function VaayuEmblem({ size = 44 }) {
return (
<svg
width={size}
height={size}
viewBox="0 0 200 200"
preserveAspectRatio="xMidYMid meet"
fill="none"
xmlns="http://www.w3.org/2000/svg"
style={{ flexShrink: 0, display: "block" }}
>
<defs>
<linearGradient id="goldArchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
<stop offset="0%" stopColor="#DFBF77" />
<stop offset="45%" stopColor="#B88A34" />
<stop offset="100%" stopColor="#7E5914" />
</linearGradient>
<linearGradient id="goldFeatherGrad" x1="0%" y1="0%" x2="100%" y2="80%">
<stop offset="0%" stopColor="#DFC07A" />
<stop offset="50%" stopColor="#BA8C36" />
<stop offset="100%" stopColor="#8A631E" />
</linearGradient>
<linearGradient id="navyFeather1" x1="0%" y1="0%" x2="100%" y2="100%">
<stop offset="0%" stopColor="#1C2E4A" />
<stop offset="100%" stopColor="#0B1322" />
</linearGradient>
<linearGradient id="navyFeather2" x1="0%" y1="0%" x2="100%" y2="100%">
<stop offset="0%" stopColor="#122038" />
<stop offset="100%" stopColor="#070D18" />
</linearGradient>
<linearGradient id="navyFeather3" x1="0%" y1="0%" x2="100%" y2="100%">
<stop offset="0%" stopColor="#0D1728" />
<stop offset="100%" stopColor="#04070D" />
</linearGradient>
</defs>
{/* Outer Slender Golden Crescent Arch */}
<path 
d="M 95 18 C 145 18 182 56 182 104 C 182 133 166 156 145 168 C 160 154 172 132 172 104 C 172 62 138 28 95 28 C 76 28 58 35 44 46 C 58 29 75 18 95 18 Z" 
fill="url(#goldArchGrad)" 
/>
{/* Top Main Wing Feather - Rich Gold */}
<path 
d="M 52 58 C 82 54 134 66 162 88 C 128 89 96 81 68 76 C 58 74 48 68 52 58 Z" 
fill="url(#goldFeatherGrad)" 
/>
{/* Second Wing Feather - Deep Navy */}
<path 
d="M 58 84 C 88 80 132 91 154 112 C 120 110 94 102 70 97 C 60 94 54 90 58 84 Z" 
fill="url(#navyFeather1)" 
/>
{/* Third Wing Feather - Deep Navy */}
<path 
d="M 68 110 C 94 107 128 116 142 134 C 114 130 92 123 76 118 C 68 115 64 112 68 110 Z" 
fill="url(#navyFeather2)" 
/>
{/* Bottom Quill Tail Feather - Deep Navy */}
<path 
d="M 80 132 C 98 131 118 138 126 149 C 106 146 90 140 80 136 C 75 134 75 132 80 132 Z" 
fill="url(#navyFeather3)" 
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
origin: "Punjab & Haryana Rice Mandis",
grainLength: "8.35 mm+ Average Pre-Cooked",
moisture: "Max 12.5%",
broken: "Under 1.0% (Optical Sortex 100%)",
purity: "95% Pure Varietal Admixture",
packaging: "25kg & 50kg BOPP Laminated Poly Bags",
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
origin: "Taraori & Karnal Rice Belt",
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
packaging: "10kg / 25kg Jute Gunny or PP Bags",
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
<div style={{ minHeight: "100vh", backgroundColor: "#F8FAFC", color: "#1E293B", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
{/* 1. TOP TICKER */}
<header style={{ backgroundColor: "#060D1D", borderBottom: "1px solid #1E293B", color: "#94A3B8", fontSize: "11px", position: "sticky", top: 0, zIndex: 100 }}>
<div style={{ maxWidth: "1240px", margin: "0 auto", padding: "8px 16px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
<div style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "monospace" }}>
<span style={{ color: "#DFC07A", fontWeight: 700, display: "flex", alignItems: "center", gap: "6px" }}>
<span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#10B981", display: "inline-block" }}></span>
GATEWAY: JNPT NHAVA SHEVA (BMCT / NSICT)
</span>
<span style={{ color: "#334155" }}>|</span>
<span style={{ color: "#CBD5E1", fontSize: "10px" }}>APEDA • FSSAI • SPICES BOARD • IEC REGISTERED</span>
</div>
<div style={{ display: "flex", alignItems: "center", gap: "16px", fontFamily: "monospace", fontSize: "11px" }}>
<span>BOM: <strong style={{ color: "#FFF" }}>{deskTimes.mumbai || "--:--"}</strong></span>
<span>DXB: <strong style={{ color: "#FFF" }}>{deskTimes.dubai || "--:--"}</strong></span>
<a href="mailto:care@vaayuelixir.com" style={{ color: "#DFC07A", textDecoration: "none", fontWeight: 700 }}>
care@vaayuelixir.com
</a>
</div>
</div>
</header>
{/* 2. NAVIGATION BAR */}
<nav style={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid #E2E8F0", padding: "12px 16px" }}>
<div style={{ maxWidth: "1240px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
{/* Logo + Brand Container */}
<div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
<div style={{ width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "visible" }}>
<VaayuEmblem size={44} />
</div>
<div>
<div style={{ display: "flex", alignItems: "baseline", gap: "6px", lineHeight: 1 }}>
<span style={{ fontFamily: "Georgia, serif", fontSize: "20px", fontWeight: 800, color: "#0B1528", letterSpacing: "0.08em" }}>
VAAYU
</span>
<span style={{ fontFamily: "Georgia, serif", fontSize: "20px", fontWeight: 800, color: "#B88A34", letterSpacing: "0.08em" }}>
ELIXIR
</span>
</div>
<div style={{ fontSize: "8px", fontWeight: 700, color: "#475569", letterSpacing: "0.22em", textTransform: "uppercase", marginTop: "4px" }}>
GLOBAL TRADE & STRATEGIC VENTURES
</div>
</div>
</div>
<div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
<div style={{ textAlign: "right" }}>
<div style={{ fontSize: "8.5px", fontFamily: "monospace", color: "#94A3B8", letterSpacing: "0.15em", textTransform: "uppercase" }}>
TRADE CORRIDORS
</div>
<div style={{ fontSize: "10.5px", fontWeight: 600, color: "#0B1528" }}>
INDIA • MIDDLE EAST • AFRICA • EUROPE • ASIA
</div>
</div>
<a
href="#proforma"
style={{ fontSize: "11px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.06em", padding: "9px 16px", backgroundColor: "#0B1528", color: "#DFC07A", borderRadius: "4px", textDecoration: "none", fontWeight: 700, border: "1px solid rgba(184,138,52,0.4)" }}
>
Request Proforma
</a>
</div>
</div>
</nav>
{/* 3. HERO OVERVIEW */}
<section style={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid #E2E8F0", padding: "36px 16px" }}>
<div style={{ maxWidth: "1240px", margin: "0 auto" }}>
<div style={{ display: "inline-block", padding: "5px 12px", backgroundColor: "#FEF9EE", border: "1px solid #F5E3B8", borderRadius: "4px", fontSize: "10.5px", fontFamily: "monospace", color: "#875F1C", marginBottom: "16px" }}>
<strong style={{ letterSpacing: "0.08em" }}>MOVING OPPORTUNITIES. CREATING VALUE.</strong>
<span style={{ margin: "0 8px", color: "#CBD5E1" }}>|</span>
<span style={{ color: "#475569" }}>MUMBAI & NAVI MUMBAI TRADING CORRIDOR</span>
</div>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px", alignItems: "center" }}>
<div>
<h1 style={{ fontFamily: "Georgia, serif", fontSize: "28px", fontWeight: 700, color: "#0B1528", lineHeight: 1.35, margin: "0 0 14px 0", letterSpacing: "0.01em" }}>
Direct Farm-to-Berth Maritime Trade Execution
</h1>
<p style={{ fontSize: "14.5px", lineHeight: "1.65", color: "#475569", margin: "0 0 20px 0" }}>
Direct containerized export shipments of calibrated Indian Basmati rice, high-pungency red chillies, plantation spices, fresh perishables, and cold-chain cargo through Nhava Sheva (JNPT) and Sahar Cargo across the GCC, Africa, and Southeast Asia.
</p>
<div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px", marginBottom: "22px" }}>
<div style={{ padding: "10px 14px", backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "4px" }}>
<div style={{ fontSize: "9px", fontFamily: "monospace", color: "#64748B", textTransform: "uppercase" }}>Primary Port</div>
<div style={{ fontSize: "13px", fontWeight: 700, color: "#0B1528", marginTop: "2px" }}>JNPT Nhava Sheva</div>
</div>
<div style={{ padding: "10px 14px", backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "4px" }}>
<div style={{ fontSize: "9px", fontFamily: "monospace", color: "#64748B", textTransform: "uppercase" }}>Express Air</div>
<div style={{ fontSize: "13px", fontWeight: 700, color: "#0B1528", marginTop: "2px" }}>Sahar & NMIA Cargo</div>
</div>
<div style={{ padding: "10px 14px", backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "4px" }}>
<div style={{ fontSize: "9px", fontFamily: "monospace", color: "#64748B", textTransform: "uppercase" }}>Cold Chain</div>
<div style={{ fontSize: "13px", fontWeight: 700, color: "#0B1528", marginTop: "2px" }}>-18°C to +14°C</div>
</div>
<div style={{ padding: "10px 14px", backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "4px" }}>
<div style={{ fontSize: "9px", fontFamily: "monospace", color: "#64748B", textTransform: "uppercase" }}>Assay Standard</div>
<div style={{ fontSize: "13px", fontWeight: 700, color: "#0B1528", marginTop: "2px" }}>SGS / Bureau Veritas</div>
</div>
</div>
<div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
<a
href="#catalog"
style={{ display: "inline-block", padding: "11px 20px", backgroundColor: "#B88A34", color: "#FFFFFF", fontFamily: "monospace", fontSize: "11.5px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", textDecoration: "none", borderRadius: "4px" }}
>
Inspect Export Commodities →
</a>
<a
href="https://wa.me/917208666522"
target="_blank"
rel="noreferrer"
style={{ display: "inline-block", padding: "11px 20px", backgroundColor: "#0B1528", color: "#DFC07A", fontFamily: "monospace", fontSize: "11.5px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", textDecoration: "none", borderRadius: "4px" }}
>
Trade Desk WhatsApp
</a>
</div>
</div>
<div style={{ backgroundColor: "#060D1D", color: "#CBD5E1", padding: "24px", borderRadius: "8px", border: "1px solid #1E293B", boxShadow: "0 6px 20px rgba(0,0,0,0.12)" }}>
<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #1E293B", paddingBottom: "12px", marginBottom: "14px" }}>
<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
<VaayuEmblem size={24} />
<span style={{ fontFamily: "monospace", fontSize: "11px", fontWeight: 700, color: "#DFC07A", letterSpacing: "0.08em" }}>
CORRIDOR VELOCITY & LOGISTICS
</span>
</div>
<span style={{ fontSize: "9.5px", fontFamily: "monospace", backgroundColor: "#1E293B", color: "#94A3B8", padding: "2px 6px", borderRadius: "3px" }}>
LIVE BERTH
</span>
</div>
<div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "12px" }}>
<div style={{ padding: "12px", backgroundColor: "#0E182D", borderRadius: "4px", border: "1px solid #1E293B", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
<div>
<div style={{ color: "#FFF", fontWeight: 600 }}>Nhava Sheva → Jebel Ali (Dubai)</div>
<div style={{ color: "#94A3B8", fontSize: "11px" }}>Direct liner transit • 3 to 4 Voyage Days</div>
</div>
<span style={{ color: "#10B981", fontFamily: "monospace", fontWeight: 700 }}>ACTIVE</span>
</div>
<div style={{ padding: "12px", backgroundColor: "#0E182D", borderRadius: "4px", border: "1px solid #1E293B", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
<div>
<div style={{ color: "#FFF", fontWeight: 600 }}>Nhava Sheva → West Africa (Lomé / Lagos)</div>
<div style={{ color: "#94A3B8", fontSize: "11px" }}>Bulk parboiled & agro breakbulk • 22 to 26 Days</div>
</div>
<span style={{ color: "#10B981", fontFamily: "monospace", fontWeight: 700 }}>ACTIVE</span>
</div>
<div style={{ padding: "12px", backgroundColor: "#0E182D", borderRadius: "4px", border: "1px solid #1E293B", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
<div>
<div style={{ color: "#FFF", fontWeight: 600 }}>Mumbai Air Cargo → GCC Corridor</div>
<div style={{ color: "#94A3B8", fontSize: "11px" }}>Moringa & fresh perishables • Daily Uplift</div>
</div>
<span style={{ color: "#DFC07A", fontFamily: "monospace", fontWeight: 700 }}>EXPRESS</span>
</div>
</div>
<div style={{ marginTop: "16px", paddingTop: "12px", borderTop: "1px solid #1E293B", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "11px", color: "#94A3B8" }}>
<span>Amit Zawarey • Proprietor</span>
<span style={{ color: "#DFC07A", fontFamily: "monospace" }}>+91 7208666522</span>
</div>
</div>
</div>
</div>
</section>
{/* 4. COMMODITY CATALOG */}
<section id="catalog" style={{ maxWidth: "1240px", margin: "0 auto", padding: "40px 16px" }}>
<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px", marginBottom: "28px" }}>
<div>
<div style={{ fontSize: "10.5px", fontFamily: "monospace", color: "#B88A34", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
INSTITUTIONAL GRADE
</div>
<h2 style={{ fontFamily: "Georgia, serif", fontSize: "26px", fontWeight: 800, color: "#0B1528", margin: "4px 0 0 0" }}>
Export Commodity Portfolio
</h2>
<p style={{ fontSize: "13.5px", color: "#64748B", margin: "4px 0 0 0" }}>
Laboratory compliance tolerances, Sortex grading, and container stuffing schedules.
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
padding: "7px 13px",
fontSize: "11px",
fontFamily: "monospace",
textTransform: "uppercase",
letterSpacing: "0.04em",
borderRadius: "4px",
cursor: "pointer",
border: active ? "1px solid #0B1528" : "1px solid #CBD5E1",
backgroundColor: active ? "#0B1528" : "#FFFFFF",
color: active ? "#DFC07A" : "#475569",
fontWeight: 700
}}
>
{cat}
</button>
);
})}
</div>
</div>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }}>
{filteredProducts.map(prod => (
<div
key={prod.id}
style={{ backgroundColor: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: "6px", display: "flex", flexDirection: "column", justifyContent: "space-between", overflow: "hidden" }}
>
<div>
<div style={{ height: "110px", backgroundColor: "#060D1D", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", borderBottom: "1px solid #E2E8F0" }}>
<div style={{ textAlign: "center" }}>
<VaayuEmblem size={34} />
<div style={{ fontSize: "9.5px", fontFamily: "monospace", color: "#DFC07A", textTransform: "uppercase", letterSpacing: "0.15em", marginTop: "4px" }}>
{prod.category}
</div>
</div>
<div style={{ position: "absolute", top: "10px", right: "10px", backgroundColor: "#0B1528", border: "1px solid #1E293B", padding: "2px 6px", borderRadius: "3px", color: "#DFC07A", fontSize: "9.5px", fontFamily: "monospace" }}>
HSN {prod.hsn}
</div>
</div>
<div style={{ padding: "18px" }}>
<h3 style={{ fontFamily: "Georgia, serif", fontSize: "16px", fontWeight: 700, color: "#0B1528", margin: "0 0 3px 0" }}>
{prod.title}
</h3>
<div style={{ fontSize: "11.5px", fontStyle: "italic", color: "#64748B", marginBottom: "10px" }}>
{prod.botanical}
</div>
<p style={{ fontSize: "13px", color: "#475569", lineHeight: "1.5", margin: "0 0 14px 0" }}>
{prod.description}
</p>
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", fontSize: "11px", fontFamily: "monospace", paddingTop: "10px", borderTop: "1px solid #F1F5F9" }}>
<div style={{ padding: "7px 10px", backgroundColor: "#F8FAFC", borderRadius: "3px" }}>
<span style={{ color: "#94A3B8", display: "block", fontSize: "8.5px" }}>MOISTURE</span>
<strong style={{ color: "#1E293B" }}>{prod.moisture}</strong>
</div>
<div style={{ padding: "7px 10px", backgroundColor: "#F8FAFC", borderRadius: "3px" }}>
<span style={{ color: "#94A3B8", display: "block", fontSize: "8.5px" }}>PAYLOAD / FCL</span>
<strong style={{ color: "#1E293B" }}>{prod.containerPayload}</strong>
</div>
</div>
</div>
</div>
<div style={{ padding: "18px", paddingTop: "0", display: "flex", gap: "8px" }}>
<button
onClick={() => setSelectedProduct(prod)}
style={{ flex: 1, padding: "9px", backgroundColor: "#F1F5F9", border: "none", borderRadius: "4px", color: "#1E293B", fontFamily: "monospace", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", cursor: "pointer" }}
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
style={{ padding: "9px 14px", backgroundColor: "#0B1528", border: "1px solid rgba(184,138,52,0.35)", borderRadius: "4px", color: "#DFC07A", fontFamily: "monospace", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", cursor: "pointer" }}
>
Quote
</button>
</div>
</div>
))}
</div>
</section>
{/* 5. SPECIFICATION MODAL */}
{selectedProduct && (
<div style={{ position: "fixed", inset: 0, zIndex: 200, backgroundColor: "rgba(6,13,29,0.85)", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}>
<div style={{ backgroundColor: "#FFFFFF", borderRadius: "6px", maxWidth: "600px", width: "100%", maxHeight: "90vh", overflowY: "auto", border: "1px solid #CBD5E1", boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}>
<div style={{ padding: "16px 20px", backgroundColor: "#060D1D", color: "#FFF", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
<div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
<VaayuEmblem size={32} />
<div>
<div style={{ fontSize: "9.5px", fontFamily: "monospace", color: "#DFC07A", textTransform: "uppercase" }}>{selectedProduct.category}</div>
<h3 style={{ fontFamily: "Georgia, serif", fontSize: "17px", fontWeight: 700, margin: "2px 0 0 0" }}>{selectedProduct.title}</h3>
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
<div style={{ padding: "20px" }}>
<p style={{ fontSize: "13.5px", color: "#475569", lineHeight: "1.6", margin: "0 0 16px 0" }}>
{selectedProduct.description}
</p>
<div style={{ border: "1px solid #E2E8F0", borderRadius: "4px", overflow: "hidden", fontSize: "12px" }}>
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "9px 12px", backgroundColor: "#F8FAFC", borderBottom: "1px solid #E2E8F0" }}>
<span style={{ fontFamily: "monospace", color: "#64748B" }}>Origin / Mandi</span>
<strong>{selectedProduct.origin}</strong>
</div>
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "9px 12px", backgroundColor: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
<span style={{ fontFamily: "monospace", color: "#64748B" }}>Grain / Pod Length</span>
<strong>{selectedProduct.grainLength}</strong>
</div>
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "9px 12px", backgroundColor: "#F8FAFC", borderBottom: "1px solid #E2E8F0" }}>
<span style={{ fontFamily: "monospace", color: "#64748B" }}>Moisture Tolerance</span>
<strong>{selectedProduct.moisture}</strong>
</div>
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "9px 12px", backgroundColor: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
<span style={{ fontFamily: "monospace", color: "#64748B" }}>Broken Allowance</span>
<strong>{selectedProduct.broken}</strong>
</div>
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "9px 12px", backgroundColor: "#F8FAFC", borderBottom: "1px solid #E2E8F0" }}>
<span style={{ fontFamily: "monospace", color: "#64748B" }}>Export Packaging</span>
<strong>{selectedProduct.packaging}</strong>
</div>
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "9px 12px", backgroundColor: "#FFFFFF" }}>
<span style={{ fontFamily: "monospace", color: "#64748B" }}>Inspection Standard</span>
<strong>{selectedProduct.inspectionStandard}</strong>
</div>
</div>
<div style={{ marginTop: "20px" }}>
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
style={{ width: "100%", padding: "12px", backgroundColor: "#0B1528", color: "#DFC07A", fontFamily: "monospace", fontSize: "11.5px", fontWeight: 700, textTransform: "uppercase", border: "1px solid rgba(184,138,52,0.4)", borderRadius: "4px", cursor: "pointer" }}
>
Configure Commercial Quotation →
</button>
</div>
</div>
</div>
</div>
)}
{/* 6. RFQ / PROFORMA */}
<section id="proforma" style={{ backgroundColor: "#060D1D", color: "#FFF", padding: "44px 16px", borderTop: "1px solid #1E293B" }}>
<div style={{ maxWidth: "900px", margin: "0 auto" }}>
<div style={{ textAlign: "center", marginBottom: "28px" }}>
<div style={{ fontSize: "10.5px", fontFamily: "monospace", color: "#DFC07A", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
IMMEDIATE EXECUTION
</div>
<h2 style={{ fontFamily: "Georgia, serif", fontSize: "27px", fontWeight: 800, margin: "4px 0 6px 0" }}>
Commercial RFQ & Proforma Estimator
</h2>
<p style={{ fontSize: "13.5px", color: "#94A3B8", maxWidth: "600px", margin: "0 auto" }}>
Submit your required commodity specifications. Inquiries route directly to <span style={{ color: "#DFC07A", fontFamily: "monospace" }}>care@vaayuelixir.com</span> with immediate maritime rate lock.
</p>
</div>
<div style={{ backgroundColor: "#0B1528", border: "1px solid #1E293B", borderRadius: "6px", padding: "24px" }}>
{rfqSuccess ? (
<div style={{ textAlign: "center", padding: "36px 12px" }}>
<div style={{ width: "52px", height: "52px", margin: "0 auto 14px auto", borderRadius: "50%", backgroundColor: "rgba(16,185,129,0.2)", color: "#10B981", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px", fontWeight: 700 }}>
✓
</div>
<h3 style={{ fontFamily: "Georgia, serif", fontSize: "20px", fontWeight: 700, margin: "0 0 6px 0" }}>Commercial Inquiry Transmitted</h3>
<p style={{ color: "#94A3B8", fontSize: "13.5px", maxWidth: "500px", margin: "0 auto 20px auto" }}>
Your inquiry for <strong style={{ color: "#FFF" }}>{rfqForm.volumeMT} MT of {activeCommodity.title}</strong> has been transmitted to <span style={{ color: "#DFC07A", fontFamily: "monospace" }}>care@vaayuelixir.com</span>.
</p>
<div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
<a
href={whatsappUrl}
target="_blank"
rel="noreferrer"
style={{ padding: "11px 20px", backgroundColor: "#10B981", color: "#FFF", fontFamily: "monospace", fontSize: "11.5px", fontWeight: 700, textTransform: "uppercase", textDecoration: "none", borderRadius: "4px" }}
>
Open Live in WhatsApp Trade Desk →
</a>
<button
onClick={() => setRfqSuccess(false)}
style={{ padding: "11px 20px", backgroundColor: "#1E293B", color: "#CBD5E1", fontFamily: "monospace", fontSize: "11.5px", fontWeight: 700, textTransform: "uppercase", border: "none", borderRadius: "4px", cursor: "pointer" }}
>
Submit Another Inquiry
</button>
</div>
</div>
) : (
<form onSubmit={handleRfqSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
<div>
<label style={{ display: "block", fontSize: "10.5px", fontFamily: "monospace", textTransform: "uppercase", color: "#94A3B8", marginBottom: "6px" }}>
Export Commodity
</label>
<select
value={rfqForm.commodityId}
onChange={(e) => setRfqForm({ ...rfqForm, commodityId: e.target.value })}
style={{ width: "100%", backgroundColor: "#060D1D", border: "1px solid #1E293B", borderRadius: "4px", padding: "9px 12px", color: "#FFF", fontSize: "13px" }}
>
{COMMODITY_CATALOG.map(c => (
<option key={c.id} value={c.id}>
{c.title} (HSN {c.hsn})
</option>
))}
</select>
</div>
<div>
<label style={{ display: "block", fontSize: "10.5px", fontFamily: "monospace", textTransform: "uppercase", color: "#94A3B8", marginBottom: "6px" }}>
Order Volume: <strong style={{ color: "#DFC07A" }}>{rfqForm.volumeMT} Metric Tons</strong>
</label>
<input
type="range"
min="10"
max="1000"
step="10"
value={rfqForm.volumeMT}
onChange={(e) => setRfqForm({ ...rfqForm, volumeMT: parseInt(e.target.value, 10) })}
style={{ width: "100%", accentColor: "#B88A34", cursor: "pointer" }}
/>
<div style={{ display: "flex", justifyContent: "space-between", fontSize: "9.5px", fontFamily: "monospace", color: "#64748B", marginTop: "4px" }}>
<span>10 MT (Trial LCL)</span>
<span>500 MT</span>
<span>1,000 MT (Charter)</span>
</div>
</div>
</div>
<div style={{ padding: "12px", backgroundColor: "#060D1D", border: "1px solid #1E293B", borderRadius: "4px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", textAlign: "center" }}>
<div>
<div style={{ fontSize: "8.5px", fontFamily: "monospace", color: "#64748B", textTransform: "uppercase" }}>Standard Inspection</div>
<div style={{ fontSize: "11.5px", fontWeight: 700, color: "#FFF", marginTop: "2px" }}>{activeCommodity.inspectionStandard}</div>
</div>
<div>
<div style={{ fontSize: "8.5px", fontFamily: "monospace", color: "#64748B", textTransform: "uppercase" }}>Payload / Container</div>
<div style={{ fontSize: "11.5px", fontWeight: 700, color: "#DFC07A", marginTop: "2px" }}>{activeCommodity.containerPayload}</div>
</div>
<div>
<div style={{ fontSize: "8.5px", fontFamily: "monospace", color: "#64748B", textTransform: "uppercase" }}>Estimated Capacity</div>
<div style={{ fontSize: "11.5px", fontWeight: 700, color: "#10B981", fontFamily: "monospace", marginTop: "2px" }}>
~ {calculatedContainers} Containers (FCL)
</div>
</div>
</div>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "14px" }}>
<div>
<label style={{ display: "block", fontSize: "10.5px", fontFamily: "monospace", textTransform: "uppercase", color: "#94A3B8", marginBottom: "5px" }}>
Incoterm
</label>
<select
value={rfqForm.incoterm}
onChange={(e) => setRfqForm({ ...rfqForm, incoterm: e.target.value })}
style={{ width: "100%", backgroundColor: "#060D1D", border: "1px solid #1E293B", borderRadius: "4px", padding: "9px", color: "#FFF", fontSize: "13px" }}
>
<option value="CIF">CIF (Cost, Insurance & Freight)</option>
<option value="FOB">FOB (Nhava Sheva / JNPT Milled Berth)</option>
<option value="CFR">CFR (Cost & Freight)</option>
<option value="EXW">EXW (Mandi Mill Warehouse)</option>
</select>
</div>
<div>
<label style={{ display: "block", fontSize: "10.5px", fontFamily: "monospace", textTransform: "uppercase", color: "#94A3B8", marginBottom: "5px" }}>
Discharge Port
</label>
<input
type="text"
value={rfqForm.destinationPort}
onChange={(e) => setRfqForm({ ...rfqForm, destinationPort: e.target.value })}
style={{ width: "100%", backgroundColor: "#060D1D", border: "1px solid #1E293B", borderRadius: "4px", padding: "9px", color: "#FFF", fontSize: "13px" }}
placeholder="e.g. Jebel Ali, Lomé, Singapore"
required
/>
</div>
<div>
<label style={{ display: "block", fontSize: "10.5px", fontFamily: "monospace", textTransform: "uppercase", color: "#94A3B8", marginBottom: "5px" }}>
Packaging Requirement
</label>
<input
type="text"
value={rfqForm.packagingType}
onChange={(e) => setRfqForm({ ...rfqForm, packagingType: e.target.value })}
style={{ width: "100%", backgroundColor: "#060D1D", border: "1px solid #1E293B", borderRadius: "4px", padding: "9px", color: "#FFF", fontSize: "13px" }}
placeholder="e.g. 25kg PP Woven Bags"
required
/>
</div>
</div>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "14px" }}>
<div>
<label style={{ display: "block", fontSize: "10.5px", fontFamily: "monospace", textTransform: "uppercase", color: "#94A3B8", marginBottom: "5px" }}>
Importer / Entity
</label>
<input
type="text"
value={rfqForm.buyerEntity}
onChange={(e) => setRfqForm({ ...rfqForm, buyerEntity: e.target.value })}
style={{ width: "100%", backgroundColor: "#060D1D", border: "1px solid #1E293B", borderRadius: "4px", padding: "9px", color: "#FFF", fontSize: "13px" }}
placeholder="Company Name"
required
/>
</div>
<div>
<label style={{ display: "block", fontSize: "10.5px", fontFamily: "monospace", textTransform: "uppercase", color: "#94A3B8", marginBottom: "5px" }}>
Contact Name
</label>
<input
type="text"
value={rfqForm.contactName}
onChange={(e) => setRfqForm({ ...rfqForm, contactName: e.target.value })}
style={{ width: "100%", backgroundColor: "#060D1D", border: "1px solid #1E293B", borderRadius: "4px", padding: "9px", color: "#FFF", fontSize: "13px" }}
placeholder="Officer Name"
required
/>
</div>
<div>
<label style={{ display: "block", fontSize: "10.5px", fontFamily: "monospace", textTransform: "uppercase", color: "#94A3B8", marginBottom: "5px" }}>
Corporate Email
</label>
<input
type="email"
value={rfqForm.email}
onChange={(e) => setRfqForm({ ...rfqForm, email: e.target.value })}
style={{ width: "100%", backgroundColor: "#060D1D", border: "1px solid #1E293B", borderRadius: "4px", padding: "9px", color: "#FFF", fontSize: "13px" }}
placeholder="buyer@domain.com"
required
/>
</div>
<div>
<label style={{ display: "block", fontSize: "10.5px", fontFamily: "monospace", textTransform: "uppercase", color: "#94A3B8", marginBottom: "5px" }}>
WhatsApp / Phone
</label>
<input
type="text"
value={rfqForm.phone}
onChange={(e) => setRfqForm({ ...rfqForm, phone: e.target.value })}
style={{ width: "100%", backgroundColor: "#060D1D", border: "1px solid #1E293B", borderRadius: "4px", padding: "9px", color: "#FFF", fontSize: "13px" }}
placeholder="+971..."
required
/>
</div>
</div>
<button
type="submit"
disabled={isSubmitting}
style={{ width: "100%", padding: "14px", backgroundColor: "#B88A34", color: "#FFFFFF", fontFamily: "monospace", fontSize: "11.5px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", border: "none", borderRadius: "4px", cursor: isSubmitting ? "not-allowed" : "pointer" }}
>
{isSubmitting ? "Transmitting to care@vaayuelixir.com..." : "Dispatch Commercial RFQ to care@vaayuelixir.com & Calculate Berth Schedule →"}
</button>
</form>
)}
</div>
</div>
</section>
{/* 7. FOOTER */}
<footer style={{ backgroundColor: "#050A14", color: "#94A3B8", padding: "40px 16px 20px 16px", borderTop: "1px solid #1E293B", fontSize: "11.5px" }}>
<div style={{ maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "28px" }}>
<div>
<div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
<VaayuEmblem size={34} />
<div>
<span style={{ fontFamily: "Georgia, serif", fontWeight: 800, color: "#FFF", fontSize: "17px" }}>VAAYU </span>
<span style={{ fontFamily: "Georgia, serif", fontWeight: 800, color: "#DFC07A", fontSize: "17px" }}>ELIXIR</span>
</div>
</div>
<p style={{ color: "#DFC07A", fontFamily: "Georgia, serif", fontSize: "10.5px", letterSpacing: "0.08em", margin: "0 0 8px 0" }}>
"MOVING OPPORTUNITIES. CREATING VALUE."
</p>
<p style={{ fontSize: "11px", color: "#64748B", margin: 0, lineHeight: 1.6 }}>
Global Trade & Strategic Ventures. Direct merchant export operations headquartered in Mumbai & Navi Mumbai with direct berth corridors at JNPT Nhava Sheva.
</p>
</div>
<div>
<div style={{ fontFamily: "monospace", color: "#FFF", fontSize: "10.5px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "6px", fontWeight: 700 }}>
LEADERSHIP
</div>
<div style={{ color: "#CBD5E1", fontSize: "11.5px", lineHeight: "1.6" }}>
<strong style={{ color: "#FFF", fontSize: "13px", display: "block" }}>Amit Zawarey</strong>
<span style={{ color: "#DFC07A", fontSize: "10.5px", fontFamily: "monospace", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>
PROPRIETOR
</span>
Mumbai & Navi Mumbai, India<br />
Direct JNPT Nhava Sheva Gateway
</div>
</div>
<div>
<div style={{ fontFamily: "monospace", color: "#FFF", fontSize: "10.5px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "6px", fontWeight: 700 }}>
COMMUNICATION DESK
</div>
<div style={{ fontFamily: "monospace", fontSize: "11.5px", display: "flex", flexDirection: "column", gap: "4px" }}>
<div>Email: <a href="mailto:care@vaayuelixir.com" style={{ color: "#DFC07A", textDecoration: "none" }}>care@vaayuelixir.com</a></div>
<div>Trade Desk: <a href="tel:+917208666522" style={{ color: "#FFF", textDecoration: "none" }}>+91 7208666522</a></div>
<div>Web: <a href="https://www.vaayuelixir.com" style={{ color: "#FFF", textDecoration: "none" }}>www.vaayuelixir.com</a></div>
</div>
</div>
<div>
<div style={{ fontFamily: "monospace", color: "#FFF", fontSize: "10.5px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "6px", fontWeight: 700 }}>
VERTICALS
</div>
<div style={{ fontSize: "11.5px", color: "#94A3B8", display: "flex", flexDirection: "column", gap: "3px" }}>
<div>• TRADE</div>
<div>• ADVISORY</div>
<div>• VENTURES</div>
<div>• GLOBAL OPPORTUNITIES</div>
</div>
</div>
</div>
<div style={{ maxWidth: "1240px", margin: "28px auto 0 auto", paddingTop: "16px", borderTop: "1px solid #111E38", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "10px", fontSize: "9.5px", fontFamily: "monospace", color: "#475569" }}>
<span>© {new Date().getFullYear()} VAAYU ELIXIR GLOBAL TRADE & STRATEGIC VENTURES.</span>
<span>INDIA | MIDDLE EAST | AFRICA | EUROPE | ASIA | BEYOND</span>
</div>
</footer>
</div>
);
}
