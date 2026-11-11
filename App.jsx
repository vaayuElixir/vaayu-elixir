import React, { useState, useEffect } from 'react';
const COMMODITY_CATALOG = [
{
id: 'rice-1121-steam',
category: 'Grains & Rice',
title: '1121 Basmati Rice (Steam / Sella)',
hsn: '1006.30.20',
botanical: 'Oryza sativa var. Basmati 1121',
origin: 'Punjab / Haryana Mandis (India)',
grainLength: '8.35 mm+ Average Pre-Cooked',
moisture: 'Max 12.5%',
broken: 'Under 1.0% (Optical Sortex 100%)',
purity: '95% Pure Varietal Admixture Max 5%',
packaging: '25kg / 50kg BOPP & Non-Woven Laminated Poly Bags',
containerPayload: '25.0 MT per 20ft Dry Cargo FCL',
inspectionStandard: 'SGS / Bureau Veritas Pre-Berth Assayed',
description: 'Premier culinary-grade aromatic extra-long grain with elongation ratio exceeding 2.2x post-cook. Certified optical Sortex processed for export.'
},
{
id: 'rice-1509-steam',
category: 'Grains & Rice',
title: '1509 Basmati Rice (Golden / Steam)',
hsn: '1006.30.20',
botanical: 'Oryza sativa var. Basmati 1509',
origin: 'Taraori & Karnal Rice Belt (India)',
grainLength: '8.40 mm+ Pre-Cooked',
moisture: 'Max 12.5%',
broken: 'Under 1.0% Sortex Milled',
purity: '95% Pure Varietal Admixture',
packaging: '10kg, 25kg, 50kg Master Bags',
containerPayload: '25.5 MT per 20ft Dry FCL',
inspectionStandard: 'APEDA / SGS Assayed',
description: 'High-volume commercial Basmati delivering long slender visual appeal, exceptional aroma, and rapid culinary turnaround for catering and retail markets.'
},
{
id: 'rice-ir64-parboiled',
category: 'Grains & Rice',
title: 'IR64 Non-Basmati Parboiled Rice (5% Broken)',
hsn: '1006.30.90',
botanical: 'Oryza sativa (Long Grain Indica)',
origin: 'Andhra Pradesh & Chhattisgarh Hubs',
grainLength: '6.00 mm - 6.20 mm Average',
moisture: 'Max 14.0%',
broken: 'Max 5.0% Optical Sorted',
purity: 'Silky Double Polished',
packaging: '50kg Strong Jute / PP Woven Export Sacks',
containerPayload: '26.0 MT per 20ft FCL Container',
inspectionStandard: 'FSSAI / Pre-Shipment Marine Inspection',
description: 'The global workhorse of bulk food security. Heavy grain weight, resilient gelatinization starch profile, optimized for West Africa & GCC port deliveries.'
},
{
id: 'rice-sona-masoori',
category: 'Grains & Rice',
title: 'Sona Masoori Raw & Steam Rice',
hsn: '1006.30.90',
botanical: 'Oryza sativa (Medium Grain)',
origin: 'Raichur & Kurnool River Basins',
grainLength: '5.20 mm Average Medium Slender',
moisture: 'Max 13.0%',
broken: 'Under 1.5%',
purity: '100% Optical Sortex Sorted',
packaging: '10kg & 25kg Branded Laminated Pouches',
containerPayload: '25.0 MT per 20ft FCL',
inspectionStandard: 'APEDA Quality Certificate',
description: 'Low-starch aromatic medium grain. Light and easily digestible staple with steady year-round volume demand across the international Indian diaspora.'
},
{
id: 'spices-teja-chilli',
category: 'Whole Spices',
title: 'Teja S17 Dried Red Chilli (Stem & Stemless)',
hsn: '0904.21.10',
botanical: 'Capsicum annuum var. Teja S17',
origin: 'Guntur & Warangal Spice Corridors',
grainLength: '6 cm - 8 cm Whole Dried Pods',
moisture: 'Max 10.0% Sun Cured',
broken: 'Under 2.0% Loose Seeds / Foreign Matter',
purity: 'Hot Pungency: 75,000 - 90,000 SHU',
packaging: '10kg / 25kg Jute Gunny or PP Bags with Master Poly Liner',
containerPayload: '7.0 MT in 20ft FCL / 14.5 MT in 40ft HC',
inspectionStandard: 'Spices Board India / Agmark Tested',
description: 'Intense fire rating with high natural capsaicin yield. Deep crimson oil extractability, prized worldwide by oleoresin processors and spice blending mills.'
},
{
id: 'spices-byadgi-chilli',
category: 'Whole Spices',
title: 'Byadgi Deep Red Chilli (High ASTA Color)',
hsn: '0904.21.10',
botanical: 'Capsicum annuum var. Byadgi',
origin: 'Haveri & Dharwad District (Karnataka)',
grainLength: '10 cm - 13 cm Wrinkled Pods',
moisture: 'Max 11.0%',
broken: 'Low Broken / Hand Cleaned',
purity: 'Color Value: 140 - 200 ASTA | Low Heat: 15,000 SHU',
packaging: '5kg, 10kg, 20kg Export Bales & Bags',
containerPayload: '6.5 MT in 20ft FCL / 14.0 MT in 40ft HC',
inspectionStandard: 'Spices Board India Certified',
description: 'Renowned for characteristic wrinkled skins and high natural oleoresin color tinting with minimal capsaicin bite. Standard for industrial food coloration.'
},
{
id: 'spices-cardamom-alleppey',
category: 'Whole Spices',
title: 'Alleppey Bold Green Cardamom (8mm+)',
hsn: '0908.31.20',
botanical: 'Elettaria cardamomum',
origin: 'Idukki Western Ghats Plantation Belt',
grainLength: '8.0 mm - 8.5 mm Bold Calibrated Pods',
moisture: 'Max 10.5%',
broken: 'Zero Splits / 100% Whole Closed Pods',
purity: 'Volatile Oil: Min 3.5% ml/100g',
packaging: '10kg Vacuum Foil Packs in 5-Ply Master Outer Cartons',
containerPayload: 'Palletized Air Freight / LCL Sea Cargo',
inspectionStandard: 'Spices Board Certificate of Analysis',
description: 'The Queen of Spices. Deep olive-green calyx preservation, robust aromatic pinene and cineole compounds, processed for premium Gulf & Middle East Gahwa.'
},
{
id: 'spices-cloves-lalpari',
category: 'Whole Spices',
title: 'Whole Lal Pari Cloves (Handpicked)',
hsn: '0907.10.10',
botanical: 'Syzygium aromaticum',
origin: 'Kanyakumari & Western Ghats Foothills',
grainLength: 'Intact Crown / Head Structure',
moisture: 'Max 11.0%',
broken: 'Headless Cloves < 2.0%',
purity: 'Eugenol Oil Content: Min 17%',
packaging: '25kg Woven Bags with Moisture Barrier Liner',
containerPayload: '12.0 MT per 20ft Dry Cargo FCL',
inspectionStandard: 'Pre-Berth Phytosanitary Cleared',
description: 'Natural reddish-brown dried flower buds with unbroken crowns. Rich eugenol content delivering antiseptic spice punch for culinary trade.'
},
{
id: 'spices-turmeric-curcumin',
category: 'Whole Spices',
title: 'High-Curcumin Turmeric Fingers (Salem / Nizamabad)',
hsn: '0910.30.20',
botanical: 'Curcuma longa',
origin: 'Salem (Tamil Nadu) & Nizamabad (Telangana)',
grainLength: 'Clean Polished Whole Double Fingers',
moisture: 'Max 10.0%',
broken: 'Bulbs & Broken under 2%',
purity: 'Curcumin Active Range: 3.5% - 5.2% Min',
packaging: '25kg / 50kg Multi-Wall Jute / PP Bags',
containerPayload: '18.0 MT per 20ft FCL Container',
inspectionStandard: 'Spices Board Agmark Lab Graded',
description: 'Deep golden-orange core with natural curcumin potency. Clean double-polished finish, minimal chalky defect, primed for pharma and food extraction.'
},
{
id: 'produce-moringa-drumstick',
category: 'Fresh Produce',
title: 'Fresh Moringa Drumsticks (Export Cut)',
hsn: '0709.99.90',
botanical: 'Moringa oleifera',
origin: 'Theni & Dindigul Farm Clusters (Tamil Nadu)',
grainLength: '45 cm - 55 cm Uniform Diameter',
moisture: 'Turgid Farm-Fresh Moisture Retention',
broken: 'Zero Split Ends / No Black Scars',
purity: 'Hand Harvested & Pre-Cooled at 10°C',
packaging: '5kg CFB Telescopic Ventilated Export Cartons',
containerPayload: 'Sahar / NMIA Express Air Freight & 40ft Reefer',
inspectionStandard: 'APEDA Fresh Perishable Export Cleared',
description: 'Tender seed formation with fleshy sweet pulp. Handpicked at sunrise, sorted for diameter uniformity, and cold-chain stabilized for GCC air corridors.'
},
{
id: 'produce-elephant-yam',
category: 'Fresh Produce',
title: 'Elephant Foot Yam (Suran / Amorphophallus)',
hsn: '0714.90.90',
botanical: 'Amorphophallus paeoniifolius',
origin: 'AP River Deltas & Maharashtra Mandis',
grainLength: '1.5 kg to 4.5 kg Cured Solid Corms',
moisture: 'Air-Cured Dry Outer Epidermis',
broken: 'Zero Bruising / Firm Solid Flesh',
purity: 'Surface Cleaned & Anti-Fungal Dust Treated',
packaging: '10kg / 20kg Ventilated Mesh Jute Sacks',
containerPayload: '24.0 MT in 40ft High Cube Reefer (+12°C to +14°C)',
inspectionStandard: 'Phytosanitary Clearance Certificate',
description: 'Dense, nutrient-packed starchy tuber with extended ocean shelf-life. Cured under shaded ventilation to eliminate excess surface moisture prior to reefer stuffing.'
},
{
id: 'poultry-table-eggs',
category: 'Cold Chain & Poultry',
title: 'Grade A Export Table Eggs (Clean White Shell)',
hsn: '0407.21.00',
botanical: 'Gallus gallus domesticus',
origin: 'Namakkal Poultry Hub (Tamil Nadu)',
grainLength: 'Weight: 50g - 55g per Egg',
moisture: 'Controlled Humidity Storage (75%)',
broken: 'Zero Micro-Hairline Cracks (Candled 100%)',
purity: 'Haugh Units: 72+ (Fresh Thick Albumin)',
packaging: '30 Eggs per Tray • 12 Trays per 360-Egg Master Carton',
containerPayload: '1,312 Cartons (472,320 Eggs) in 40ft Reefer (+4°C)',
inspectionStandard: 'Department of Animal Husbandry & Dairying (DAHD)',
description: 'Salmonella & antibiotic certified clean white shell eggs. Candled and UV disinfected prior to temperature-locked reefer voyages to the Middle East & Africa.'
},
{
id: 'poultry-frozen-chicken',
category: 'Cold Chain & Poultry',
title: 'Halal Certified Frozen Whole Poultry & Cuts',
hsn: '0207.12.00',
botanical: 'Gallus domesticus (Commercial Broiler)',
origin: 'Western Maharashtra & Tamil Nadu Abattoirs',
grainLength: 'Whole Carcass: 900g to 1400g Calibrated',
moisture: 'Moisture Retention: Under 4%',
broken: 'Zero Broken Bones / Clean Wing Cut',
purity: 'Halal Hand Slaughtered (Islamic Sharia Compliant)',
packaging: 'Individual Poly Bags in 10kg Master Cartons',
containerPayload: '26.0 MT in 40ft High Cube Reefer (-18°C Blast Frozen)',
inspectionStandard: 'FSSAI / Halal Trust / EIC Veterinary Health Assayed',
description: 'Blast-frozen to core -18°C within hours of processing. Complete traceability, zero artificial moisture pumping, export packed for commercial food distribution.'
}
];
export default function App() {
const [selectedCategory, setSelectedCategory] = useState('All');
const [selectedProduct, setSelectedProduct] = useState(null);
const [customPhotos, setCustomPhotos] = useState({});
const [rfqForm, setRfqForm] = useState({
commodityId: 'rice-1121-steam',
volumeMT: 50,
incoterm: 'CIF',
destinationPort: 'Jebel Ali Port (UAE)',
packagingType: '25kg Woven PP Sacks (Export Grade)',
buyerEntity: '',
contactName: '',
email: '',
phone: '',
notes: ''
});
const [isSubmitting, setIsSubmitting] = useState(false);
const [rfqSuccess, setRfqSuccess] = useState(false);
const [deskTimes, setDeskTimes] = useState({
mumbai: '',
dubai: '',
singapore: '',
rotterdam: ''
});
useEffect(() => {
const updateTimes = () => {
const now = new Date();
setDeskTimes({
mumbai: now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
dubai: now.toLocaleTimeString('en-US', { timeZone: 'Asia/Dubai', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
singapore: now.toLocaleTimeString('en-US', { timeZone: 'Asia/Singapore', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
rotterdam: now.toLocaleTimeString('en-US', { timeZone: 'Europe/Amsterdam', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
});
};
updateTimes();
const interval = setInterval(updateTimes, 1000);
return () => clearInterval(interval);
}, []);
const categories = ['All', 'Grains & Rice', 'Whole Spices', 'Fresh Produce', 'Cold Chain & Poultry'];
const filteredProducts = selectedCategory === 'All'
? COMMODITY_CATALOG
: COMMODITY_CATALOG.filter(c => c.category === selectedCategory);
const activeCommodity = COMMODITY_CATALOG.find(c => c.id === rfqForm.commodityId) || COMMODITY_CATALOG[0];
const payloadPerFcl = parseFloat(activeCommodity.containerPayload) || 25;
const calculatedContainers = Math.max(1, Math.ceil(rfqForm.volumeMT / payloadPerFcl));
const handlePhotoUpload = (productId, event) => {
const file = event.target.files[0];
if (file) {
const reader = new FileReader();
reader.onloadend = () => {
setCustomPhotos(prev => ({
...prev,
[productId]: reader.result
}));
};
reader.readAsDataURL(file);
}
};
const handleRfqSubmit = async (e) => {
e.preventDefault();
setIsSubmitting(true);
const emailSubject = '[TRADE ENQUIRY] ' + activeCommodity.title + ' - ' + rfqForm.volumeMT + ' MT (' + rfqForm.incoterm + ')';
const volumeDescription = rfqForm.volumeMT + ' Metric Tons (~' + calculatedContainers + ' Container/s)';
const payload = {
access_key: 'care@vaayuelixir.com',
subject: emailSubject,
from_name: 'Vaayu Elixir Web Terminal',
to_email: 'care@vaayuelixir.com',
reply_to: rfqForm.email || undefined,
commodity: activeCommodity.title,
hsn_code: activeCommodity.hsn,
volume: volumeDescription,
incoterm: rfqForm.incoterm,
destination_port: rfqForm.destinationPort,
packaging_required: rfqForm.packagingType,
buyer_entity: rfqForm.buyerEntity || 'Direct Importer',
authorized_contact: rfqForm.contactName || 'Representative',
buyer_email: rfqForm.email,
buyer_phone_whatsapp: rfqForm.phone,
notes_tolerances: rfqForm.notes || 'None specified'
};
try {
await fetch('https://api.web3forms.com/submit', {
method: 'POST',
headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
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
'VAAYU ELIXIR - COMMERCIAL RFQ\n\n' +
'• Commodity: ' + activeCommodity.title + '\n' +
'• HSN Code: ' + activeCommodity.hsn + '\n' +
'• Volume: ' + rfqForm.volumeMT + ' MT (~' + calculatedContainers + ' FCL)\n' +
'• Incoterm: ' + rfqForm.incoterm + ' -> ' + rfqForm.destinationPort + '\n' +
'• Packaging: ' + rfqForm.packagingType + '\n' +
'• Buyer: ' + (rfqForm.buyerEntity || 'Direct Importer') + ' (' + rfqForm.contactName + ')\n' +
'• Email: ' + rfqForm.email + '\n' +
'• Tel: ' + rfqForm.phone + '\n\n' +
'Please dispatch proforma quotation and next berth stuffing schedule.';
const whatsappUrl = 'https://wa.me/917208666522?text=' + encodeURIComponent(whatsappMessage);
return (
<div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
<header className="bg-slate-900 text-slate-300 text-xs border-b border-slate-800 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-3">
<div className="flex items-center gap-4 text-[11px] font-mono tracking-wider">
<span className="flex items-center gap-1.5 text-amber-400 font-medium">
<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
PORT GATEWAY: JNPT NHAVA SHEVA (BMCT / NSICT)
</span>
<span className="hidden md:inline text-slate-500">|</span>
<span className="hidden md:inline text-slate-400">APEDA • FSSAI • SPICES BOARD • IEC REGISTERED</span>
</div>
<div className="flex items-center gap-4 font-mono text-[11px]">
<span className="text-slate-400">BOM: <span className="text-white font-medium">{deskTimes.mumbai || '--:--'}</span></span>
<span className="text-slate-400">DXB: <span className="text-white font-medium">{deskTimes.dubai || '--:--'}</span></span>
<span className="hidden sm:inline text-slate-400">SIN: <span className="text-white font-medium">{deskTimes.singapore || '--:--'}</span></span>
<a 
href="mailto:care@vaayuelixir.com" 
className="text-amber-400 hover:text-amber-300 transition-colors font-medium ml-2"
>
care@vaayuelixir.com
</a>
</div>
</div>
</header>
<nav className="bg-white border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-slate-950 flex items-center justify-center text-amber-400 font-serif text-xl font-bold tracking-wider border border-amber-500/30 shadow-sm">
V
</div>
<div>
<h1 className="text-xl font-serif font-bold text-slate-950 tracking-wider">VAAYU ELIXIR</h1>
<p className="text-[10px] font-mono text-amber-700 uppercase tracking-widest -mt-0.5 font-medium">Global Trade & Strategic Ventures</p>
</div>
</div>
<div className="flex items-center gap-4">
<a 
href="#catalog" 
className="hidden sm:block text-xs font-mono uppercase tracking-wider text-slate-600 hover:text-slate-900 transition-colors"
>
Commodity Vault
</a>
<a 
href="#proforma" 
className="text-xs font-mono uppercase tracking-wider px-4 py-2 bg-slate-950 hover:bg-slate-800 text-amber-400 rounded transition-colors font-medium"
>
Request Proforma
</a>
</div>
</div>
</nav>
<section className="bg-white border-b border-slate-200 py-16 px-4">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-7 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 rounded text-amber-800 text-xs font-mono tracking-wide">
<span>MERCHANT EXPORT HOUSE</span>
<span>•</span>
<span>MUMBAI & NAVI MUMBAI TRADING CORRIDOR</span>
</div>
<h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-950 leading-tight">
Direct Farm-to-Berth Maritime Trade Execution.
</h2>
<p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
Direct containerized export shipments of calibrated Indian Basmati rice, high-pungency red chillies, plantation spices, fresh perishables, and cold-chain cargo through Nhava Sheva (JNPT) and Sahar Cargo across the GCC, Africa, and Southeast Asia.
</p>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
<div className="p-3 bg-slate-50 border border-slate-200 rounded">
<div className="text-[10px] font-mono text-slate-500 uppercase">Primary Port</div>
<div className="font-semibold text-slate-900 text-sm">JNPT Nhava Sheva</div>
</div>
<div className="p-3 bg-slate-50 border border-slate-200 rounded">
<div className="text-[10px] font-mono text-slate-500 uppercase">Express Air</div>
<div className="font-semibold text-slate-900 text-sm">Sahar & NMIA Air Cargo</div>
</div>
<div className="p-3 bg-slate-50 border border-slate-200 rounded">
<div className="text-[10px] font-mono text-slate-500 uppercase">Cold Chain</div>
<div className="font-semibold text-slate-900 text-sm">-18°C to +14°C Reefer</div>
</div>
<div className="p-3 bg-slate-50 border border-slate-200 rounded">
<div className="text-[10px] font-mono text-slate-500 uppercase">Assay Audit</div>
<div className="font-semibold text-slate-900 text-sm">SGS / Bureau Veritas</div>
</div>
</div>
<div className="flex flex-wrap gap-3 pt-2">
<a
href="#catalog"
className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-mono text-xs uppercase tracking-widest font-semibold rounded shadow-sm transition-colors"
>
Inspect Export Commodities →
</a>
<a
href="https://wa.me/917208666522"
target="_blank"
rel="noreferrer"
className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-mono text-xs uppercase tracking-widest font-semibold rounded border border-slate-300 transition-colors flex items-center gap-2"
>
<span>Live Trade Desk WhatsApp</span>
</a>
</div>
</div>
<div className="lg:col-span-5 bg-slate-950 text-slate-300 p-6 rounded-lg border border-slate-800 shadow-xl space-y-5">
<div className="flex items-center justify-between border-b border-slate-800 pb-3">
<span className="font-mono text-xs text-amber-400 font-semibold tracking-wider">CORRIDOR VELOCITY & LOGISTICS</span>
<span className="text-[10px] font-mono bg-slate-800 px-2 py-0.5 rounded text-slate-400">LIVE BERTH STATUS</span>
</div>
<div className="space-y-3 text-xs">
<div className="p-3 bg-slate-900/80 rounded border border-slate-800/80 flex items-start justify-between">
<div>
<div className="text-white font-medium">Nhava Sheva → Jebel Ali (Dubai)</div>
<div className="text-slate-400 text-[11px]">Direct liner transit • 3 to 4 Voyage Days</div>
</div>
<span className="text-emerald-400 font-mono font-medium">ACTIVE</span>
</div>
<div className="p-3 bg-slate-900/80 rounded border border-slate-800/80 flex items-start justify-between">
<div>
<div className="text-white font-medium">Nhava Sheva → West Africa (Lomé / Lagos)</div>
<div className="text-slate-400 text-[11px]">Bulk parboiled & agro breakbulk • 22 to 26 Days</div>
</div>
<span className="text-emerald-400 font-mono font-medium">ACTIVE</span>
</div>
<div className="p-3 bg-slate-900/80 rounded border border-slate-800/80 flex items-start justify-between">
<div>
<div className="text-white font-medium">Mumbai Air Cargo → GCC Corridor</div>
<div className="text-slate-400 text-[11px]">Moringa, okra & perishables • Same-Day Cargo Intake</div>
</div>
<span className="text-amber-400 font-mono font-medium">EXPRESS</span>
</div>
</div>
<div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
<span>IEC: Registered Exporter</span>
<span>Official: care@vaayuelixir.com</span>
</div>
</div>
</div>
</section>
<section id="catalog" className="max-w-7xl mx-auto px-4 py-16">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
<div>
<span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-semibold">Institutional Grade</span>
<h3 className="text-3xl font-serif font-bold text-slate-950 mt-1">Export Commodity Portfolio</h3>
<p className="text-slate-600 text-sm mt-1">Strict laboratory compliance tolerances, Sortex grading, and container stuffing schedules.</p>
</div>
<div className="flex flex-wrap gap-2">
{categories.map(cat => (
<button
key={cat}
onClick={() => setSelectedCategory(cat)}
className={⁠px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded transition-colors ${ selectedCategory === cat ? 'bg-slate-950 text-white font-semibold' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100' }⁠}
>
{cat}
</button>
))}
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{filteredProducts.map(prod => {
const hasCustomPhoto = customPhotos[prod.id];
return (
<div 
key={prod.id} 
className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
>
<div>
<div className="relative h-44 bg-slate-900 flex items-center justify-center overflow-hidden border-b border-slate-200">
{hasCustomPhoto ? (
<img 
src={hasCustomPhoto} 
alt={prod.title} 
className="w-full h-full object-cover" 
/>
) : (
<div className="text-center p-4">
<div className="w-12 h-12 mx-auto rounded-full bg-slate-800 border border-amber-500/40 flex items-center justify-center text-amber-400 font-serif text-lg font-bold mb-2">
VE
</div>
<div className="text-[11px] font-mono text-amber-400 uppercase tracking-widest font-semibold">{prod.category}</div>
<div className="text-xs text-slate-300 font-serif mt-0.5">{prod.title}</div>
<div className="text-[10px] font-mono text-slate-500 mt-1">HSN: {prod.hsn} • {prod.origin}</div>
</div>
)}
<div className="absolute top-2 right-2 bg-slate-950/80 backdrop-blur px-2 py-0.5 rounded text-[10px] font-mono text-amber-400 border border-slate-700">
HSN {prod.hsn}
</div>
</div>
<div className="p-5 space-y-3">
<div>
<h4 className="font-serif font-bold text-slate-950 text-lg">{prod.title}</h4>
<p className="text-xs italic text-slate-500 font-serif">{prod.botanical}</p>
</div>
<p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
{prod.description}
</p>
<div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-2 border-t border-slate-100">
<div className="p-2 bg-slate-50 rounded">
<span className="text-slate-400 block text-[10px]">MOISTURE</span>
<span className="font-semibold text-slate-800">{prod.moisture}</span>
</div>
<div className="p-2 bg-slate-50 rounded">
<span className="text-slate-400 block text-[10px]">CONTAINER PAYLOAD</span>
<span className="font-semibold text-slate-800">{prod.containerPayload}</span>
</div>
</div>
</div>
</div>
<div className="p-5 pt-0 flex items-center gap-2">
<button
onClick={() => setSelectedProduct(prod)}
className="flex-1 py-2 text-xs font-mono uppercase tracking-wider bg-slate-100 hover:bg-slate-200 text-slate-800 rounded font-semibold transition-colors"
>
Technical Spec
</button>
<button
onClick={() => {
setRfqForm(prev => ({
...prev,
commodityId: prod.id,
packagingType: prod.packaging.split('•')[0]
}));
const el = document.getElementById('proforma');
if (el) el.scrollIntoView({ behavior: 'smooth' });
}}
className="py-2 px-3 text-xs font-mono uppercase tracking-wider bg-slate-950 hover:bg-slate-800 text-amber-400 rounded font-semibold transition-colors"
>
Quote
</button>
</div>
</div>
);
})}
</div>
</section>
{selectedProduct && (
<div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
<div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-300">
<div className="p-6 bg-slate-950 text-white flex items-start justify-between">
<div>
<span className="text-xs font-mono text-amber-400 uppercase tracking-widest">{selectedProduct.category}</span>
<h3 className="text-xl font-serif font-bold text-white mt-1">{selectedProduct.title}</h3>
<p className="text-xs text-slate-400 font-serif italic">{selectedProduct.botanical} • HSN: {selectedProduct.hsn}</p>
</div>
<button
onClick={() => setSelectedProduct(null)}
className="text-slate-400 hover:text-white text-2xl leading-none"
>
×
</button>
</div>
<div className="p-6 space-y-5">
<p className="text-sm text-slate-600 leading-relaxed font-light">
{selectedProduct.description}
</p>
<div className="border border-slate-200 rounded overflow-hidden text-xs">
<div className="grid grid-cols-2 p-2.5 bg-slate-50 border-b border-slate-200">
<span className="font-mono text-slate-500 uppercase">Procurement Mandi / Origin</span>
<span className="font-medium text-slate-900">{selectedProduct.origin}</span>
</div>
<div className="grid grid-cols-2 p-2.5 bg-white border-b border-slate-200">
<span className="font-mono text-slate-500 uppercase">Grain Length / Grading</span>
<span className="font-medium text-slate-900">{selectedProduct.grainLength}</span>
</div>
<div className="grid grid-cols-2 p-2.5 bg-slate-50 border-b border-slate-200">
<span className="font-mono text-slate-500 uppercase">Moisture Allowance</span>
<span className="font-medium text-slate-900">{selectedProduct.moisture}</span>
</div>
<div className="grid grid-cols-2 p-2.5 bg-white border-b border-slate-200">
<span className="font-mono text-slate-500 uppercase">Broken / Foreign Matter</span>
<span className="font-medium text-slate-900">{selectedProduct.broken}</span>
</div>
<div className="grid grid-cols-2 p-2.5 bg-slate-50 border-b border-slate-200">
<span className="font-mono text-slate-500 uppercase">Chemical / Color / Purity</span>
<span className="font-medium text-slate-900">{selectedProduct.purity}</span>
</div>
<div className="grid grid-cols-2 p-2.5 bg-white border-b border-slate-200">
<span className="font-mono text-slate-500 uppercase">Standard Export Packaging</span>
<span className="font-medium text-slate-900">{selectedProduct.packaging}</span>
</div>
<div className="grid grid-cols-2 p-2.5 bg-slate-50 border-b border-slate-200">
<span className="font-mono text-slate-500 uppercase">FCL Container Payload</span>
<span className="font-medium text-slate-900">{selectedProduct.containerPayload}</span>
</div>
<div className="grid grid-cols-2 p-2.5 bg-white">
<span className="font-mono text-slate-500 uppercase">Mandatory Inspection</span>
<span className="font-medium text-slate-900">{selectedProduct.inspectionStandard}</span>
</div>
</div>
<div className="p-4 bg-amber-50/60 border border-amber-200 rounded-lg">
<label className="block text-xs font-mono uppercase tracking-wider text-amber-900 font-semibold mb-1">
Upload Authentic Lot / Warehouse Photo
</label>
<p className="text-[11px] text-amber-800 mb-2">
Select a photo of your actual stock or packaged lots directly from your device:
</p>
<input
type="file"
accept="image/*"
onChange={(e) => handlePhotoUpload(selectedProduct.id, e)}
className="text-xs text-slate-600 file:mr-3 file:py-1.5 file:px-3 file:rounded file:border-0 file:text-xs file:font-mono file:font-semibold file:bg-amber-700 file:text-white hover:file:bg-amber-800 cursor-pointer"
/>
</div>
<div className="flex items-center gap-3 pt-2">
<button
onClick={() => {
setRfqForm(prev => ({
...prev,
commodityId: selectedProduct.id,
packagingType: selectedProduct.packaging.split('•')[0]
}));
setSelectedProduct(null);
const el = document.getElementById('proforma');
if (el) el.scrollIntoView({ behavior: 'smooth' });
}}
className="flex-1 py-3 bg-slate-950 hover:bg-slate-800 text-amber-400 font-mono text-xs uppercase tracking-widest font-semibold rounded text-center"
>
Configure Commercial Quotation
</button>
</div>
</div>
</div>
</div>
)}
<section id="proforma" className="bg-slate-900 text-white py-16 px-4 border-t border-slate-800">
<div className="max-w-5xl mx-auto">
<div className="text-center space-y-2 mb-10">
<span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">Immediate Execution</span>
<h3 className="text-3xl font-serif font-bold text-white">Commercial RFQ & Proforma Estimator</h3>
<p className="text-sm text-slate-400 max-w-xl mx-auto font-light">
Submit your required commodity specifications. Inquiries route straight to <span className="text-amber-400 font-mono">care@vaayuelixir.com</span> with immediate maritime rate lock.
</p>
</div>
<div className="bg-slate-950 border border-slate-800 rounded-xl p-6 sm:p-8 shadow-2xl">
{rfqSuccess ? (
<div className="text-center py-12 space-y-5">
<div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-3xl font-bold">
✓
</div>
<h4 className="text-2xl font-serif font-bold text-white">Commercial Inquiry Transmitted</h4>
<p className="text-slate-300 text-sm max-w-lg mx-auto">
Your inquiry for <strong className="text-white">{rfqForm.volumeMT} MT of {activeCommodity.title}</strong> has been transmitted to <span className="text-amber-400 font-mono">care@vaayuelixir.com</span>.
</p>
<div className="pt-4 flex flex-wrap justify-center gap-4">
<a
href={whatsappUrl}
target="_blank"
rel="noreferrer"
className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs uppercase tracking-widest font-semibold rounded shadow-sm transition-colors"
>
Open Live in WhatsApp Trade Desk →
</a>
<button
onClick={() => setRfqSuccess(false)}
className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono text-xs uppercase tracking-widest rounded"
>
Submit Another Inquiry
</button>
</div>
</div>
) : (
<form onSubmit={handleRfqSubmit} className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
Export Commodity
</label>
<select
value={rfqForm.commodityId}
onChange={(e) => setRfqForm({ ...rfqForm, commodityId: e.target.value })}
className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
>
{COMMODITY_CATALOG.map(c => (
<option key={c.id} value={c.id}>
{c.title} (HSN {c.hsn})
</option>
))}
</select>
</div>
<div>
<label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
Order Volume: <span className="text-amber-400 font-bold">{rfqForm.volumeMT} Metric Tons</span>
</label>
<input
type="range"
min="10"
max="1000"
step="10"
value={rfqForm.volumeMT}
onChange={(e) => setRfqForm({ ...rfqForm, volumeMT: parseInt(e.target.value, 10) })}
className="w-full accent-amber-500 cursor-pointer"
/>
<div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
<span>10 MT (Trial LCL / 20ft)</span>
<span>500 MT</span>
<span>1,000 MT (Bulk Charter)</span>
</div>
</div>
</div>
<div className="p-4 bg-slate-900 rounded border border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
<div>
<div className="text-[10px] font-mono text-slate-400 uppercase">Assayed Standard</div>
<div className="text-xs font-semibold text-white mt-0.5">{activeCommodity.inspectionStandard}</div>
</div>
<div>
<div className="text-[10px] font-mono text-slate-400 uppercase">Max Payload / FCL</div>
<div className="text-xs font-semibold text-amber-400 mt-0.5">{activeCommodity.containerPayload}</div>
</div>
<div>
<div className="text-[10px] font-mono text-slate-400 uppercase">Estimated Requirement</div>
<div className="text-xs font-semibold text-emerald-400 mt-0.5 font-mono">
~ {calculatedContainers} x 20ft/40ft FCL Containers
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
<div>
<label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
Delivery Incoterm
</label>
<select
value={rfqForm.incoterm}
onChange={(e) => setRfqForm({ ...rfqForm, incoterm: e.target.value })}
className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
>
<option value="CIF">CIF (Cost, Insurance & Ocean Freight)</option>
<option value="FOB">FOB (Nhava Sheva / JNPT Milled Berth)</option>
<option value="CFR">CFR (Cost & Ocean Freight)</option>
<option value="EXW">EXW (Mandi Mill Warehouse Floor)</option>
</select>
</div>
<div>
<label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
Discharge Port
</label>
<input
type="text"
value={rfqForm.destinationPort}
onChange={(e) => setRfqForm({ ...rfqForm, destinationPort: e.target.value })}
className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
placeholder="e.g. Jebel Ali, Lomé, Singapore"
required
/>
</div>
<div>
<label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
Packaging Spec
</label>
<input
type="text"
value={rfqForm.packagingType}
onChange={(e) => setRfqForm({ ...rfqForm, packagingType: e.target.value })}
className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
placeholder="e.g. 25kg PP Woven Sacks"
required
/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
<div>
<label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
Importer / Entity Name
</label>
<input
type="text"
value={rfqForm.buyerEntity}
onChange={(e) => setRfqForm({ ...rfqForm, buyerEntity: e.target.value })}
className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
placeholder="Company Ltd."
required
/>
</div>
<div>
<label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
Authorized Officer
</label>
<input
type="text"
value={rfqForm.contactName}
onChange={(e) => setRfqForm({ ...rfqForm, contactName: e.target.value })}
className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
placeholder="Contact Name"
required
/>
</div>
<div>
<label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
Corporate Email
</label>
<input
type="email"
value={rfqForm.email}
onChange={(e) => setRfqForm({ ...rfqForm, email: e.target.value })}
className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
placeholder="buyer@domain.com"
required
/>
</div>
<div>
<label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
WhatsApp / Phone
</label>
<input
type="text"
value={rfqForm.phone}
onChange={(e) => setRfqForm({ ...rfqForm, phone: e.target.value })}
className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
placeholder="+971..."
required
/>
</div>
</div>
<button
type="submit"
disabled={isSubmitting}
className="w-full py-4 bg-amber-600 hover:bg-amber-700 disabled:bg-slate-700 text-white font-mono text-xs font-bold uppercase tracking-widest rounded shadow-lg transition-colors flex items-center justify-center gap-2"
>
{isSubmitting ? (
<span>Routing to care@vaayuelixir.com...</span>
) : (
<span>Dispatch Commercial RFQ to care@vaayuelixir.com & Calculate Schedule →</span>
)}
</button>
</form>
)}
</div>
</div>
</section>
<footer className="bg-slate-950 text-slate-400 py-12 px-4 border-t border-slate-800 text-xs">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="space-y-3">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center font-serif font-bold">V</div>
<span className="font-serif font-bold text-white text-sm tracking-wider">VAAYU ELIXIR</span>
</div>
<p className="text-[11px] text-slate-500 leading-relaxed">
Global Trade & Strategic Ventures. Operating merchant export logistics via JNPT Nhava Sheva and Mumbai Air Cargo.
</p>
</div>
<div>
<div className="font-mono text-white text-[11px] uppercase tracking-wider mb-2 font-semibold">Registered Headquarters</div>
<div className="text-[11px] text-slate-400 leading-relaxed">
Navi Mumbai / Panvel Corridor<br />
Maharashtra, India (Pin 410206)<br />
Direct JNPT Port Connectivity
</div>
</div>
<div>
<div className="font-mono text-white text-[11px] uppercase tracking-wider mb-2 font-semibold">Direct Communication</div>
<div className="text-[11px] text-slate-400 space-y-1">
<div>Email: <a href="mailto:care@vaayuelixir.com" className="text-amber-400 hover:underline">care@vaayuelixir.com</a></div>
<div>Trade Desk: <a href="tel:+917208666522" className="text-slate-300 hover:underline">+91 7208666522</a></div>
<div>Web: <span className="text-slate-300">www.vaayuelixir.com</span></div>
</div>
</div>
<div>
<div className="font-mono text-white text-[11px] uppercase tracking-wider mb-2 font-semibold">Export Compliance</div>
<div className="text-[11px] text-slate-400 space-y-1">
<div>APEDA: Agro & Processed Food Authority</div>
<div>FSSAI: Central Food Safety Certified</div>
<div>Spices Board of India Registered</div>
<div>DGFT: Importer Exporter Code (IEC)</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-900 text-[10px] font-mono text-slate-600 flex flex-wrap justify-between items-center gap-2">
<span>© {new Date().getFullYear()} Vaayu Elixir Global Trade & Strategic Ventures. All rights reserved.</span>
<span>Berth Terminal: JNPT BMCT / NSICT</span>
</div>
</footer>
</div>
);
}
