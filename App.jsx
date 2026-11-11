import React, { useState, useEffect } from 'react';

// Brand Emblem: Exact geometry from official business card
// (Golden crescent arc + 3 fluid gold & navy wings tapering down)
const VaayuEmblem = ({ size = 48, className = "" }) => (
<svg
width={size}
height={size}
viewBox="0 0 120 120"
fill="none"
xmlns="http://www.w3.org/2000/svg"
className={className}
style={{ flexShrink: 0, display: "block" }}

<defs>
  <linearGradient id="goldArch" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stopColor="#D4AF37" />
    <stop offset="50%" stopColor="#B38728" />
    <stop offset="100%" stopColor="#8C6721" />
  </linearGradient>
  <linearGradient id="goldWing" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stopColor="#DFB76C" />
    <stop offset="60%" stopColor="#C59B27" />
    <stop offset="100%" stopColor="#9E7818" />
  </linearGradient>
  <linearGradient id="navyWingTop" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stopColor="#1E3A5F" />
    <stop offset="100%" stopColor="#0E1B2E" />
  </linearGradient>
  <linearGradient id="navyWingBottom" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stopColor="#142642" />
    <stop offset="100%" stopColor="#070D18" />
  </linearGradient>
</defs>

{/* Outer Slender Golden Crescent Arch */}
<path
  d="M 68 18 C 96 22 112 48 106 76 C 102 96 85 110 65 112 C 55 113 46 110 40 106 C 49 107 60 104 68 98 C 84 86 94 66 90 46 C 87 31 77 22 68 18 Z"
  fill="url(#goldArch)"
/>

{/* Wing Feather 1 (Top Feather - Rich Brushed Gold) */}
<path
  d="M 32 38 C 50 36 78 40 98 55 C 80 57 60 55 42 49 C 34 46 29 42 32 38 Z"
  fill="url(#goldWing)"
/>

{/* Wing Feather 2 (Upper Middle Feather - Deep Navy) */}
<path
  d="M 38 52 C 55 52 75 58 92 70 C 76 71 58 68 44 61 C 38 58 35 55 38 52 Z"
  fill="url(#navyWingTop)"
/>

{/* Wing Feather 3 (Lower Middle Feather - Deep Navy) */}
<path
  d="M 44 65 C 60 66 75 73 85 84 C 71 83 58 79 48 73 C 43 70 41 67 44 65 Z"
  fill="url(#navyWingBottom)"
/>

{/* Swooping Tail Feather Curve (Tapering to Bottom Tip) */}
<path
  d="M 52 77 C 62 80 72 87 76 96 C 68 93 60 88 56 83 C 51 86 49 92 53 98 C 56 102 62 105 67 106 C 58 107 50 102 46 94 C 43 88 45 80 52 77 Z"
  fill="url(#navyWingBottom)"
/>


// Commodity Portfolio Data
const COMMODITIES = [
{
id: 'basmati-1121',
category: 'Grains & Rice',
name: '1121 Basmati Rice (Steam / Sella / Raw)',
botanical: 'Oryza sativa (Extra Long Grain)',
hsn: '1006.30.20',
origin: 'Karnal & Taraori Belt (Haryana / Punjab)',
grainLength: '8.35 mm - 8.40 mm Average Pre-cooked',
moisture: 'Max 12.5%',
broken: 'Under 1.0%',
purity: '95% Pure Traditional Basmati',
packaging: '10kg, 20kg, 40kg Non-Woven / BOPP / Jute Bags',
fclLoad: '25.0 Metric Tons / 20ft FCL',
inspection: 'SGS / Bureau Veritas Pre-shipment Certificate',
status: 'In Stock - Ready Berth',
desc: 'The pinnacle of global aromatic rice. World-renowned 1121 steam and golden sella basmati with extraordinary elongation ratio of 2.5x upon cooking.'
},
{
id: 'basmati-1509',
category: 'Grains & Rice',
name: '1509 Basmati Rice (Golden Sella / Steam)',
botanical: 'Oryza sativa (Long Grain)',
hsn: '1006.30.20',
origin: 'Western Uttar Pradesh & Punjab Mandis',
grainLength: '8.40 mm+ Length',
moisture: 'Max 12.0%',
broken: 'Under 1.0%',
purity: '95% Minimum',
packaging: '25kg / 50kg PP Bags with Inner Liner',
fclLoad: '25.5 Metric Tons / 20ft FCL',
inspection: 'APEDA Approved Lab / SGS',
status: 'Procurement Active',
desc: 'Cost-effective premium long-grain alternative to 1121. Highly favored across GCC catering, hypermarkets, and West African institutional kitchens.'
},
{
id: 'ir64-parboiled',
category: 'Grains & Rice',
name: 'IR-64 Parboiled Rice (5% Broken)',
botanical: 'Oryza sativa (Non-Basmati)',
hsn: '1006.30.10',
origin: 'Raipur & Kakinada Hinterlands',
grainLength: '6.0 mm - 6.2 mm',
moisture: 'Max 13.5%',
broken: '5.0% Maximum',
purity: '100% Sortex Cleaned',
packaging: '50kg Strong White PP Bags',
fclLoad: '26.0 Metric Tons / 20ft FCL or Breakbulk',
inspection: 'Export Inspection Council (EIC) / SGS',
status: 'Bulk Allocation Open',
desc: 'High-volume institutional staple. Double-steamed parboiled non-basmati rice with low starch discharge, calibrated for West African and Southeast Asian bulk tenders.'
},
{
id: 'sona-masoori',
category: 'Grains & Rice',
name: 'Sona Masoori Raw & Steam Rice',
botanical: 'Oryza sativa (Medium Grain)',
hsn: '1006.30.90',
origin: 'Raichur & Kurnool River Basins',
grainLength: '5.20 mm Average Medium Slender',
moisture: 'Max 13.0%',
broken: 'Under 1.5%',
purity: '100% Optical Sortex Sorted',
packaging: '10kg & 25kg Branded Laminated Pouches',
fclLoad: '25.0 MT per 20ft FCL',
inspection: 'APEDA Quality Certificate',
status: 'Ready for Stuffing',
desc: 'Low-starch aromatic medium grain. Light and easily digestible staple with steady year-round volume demand across the international Indian diaspora.'
},
{
id: 'teja-s17-chilli',
category: 'Whole Spices',
name: 'S17 Teja Red Chilli (Stemless / With Stem)',
botanical: 'Capsicum annuum',
hsn: '0904.21.10',
origin: 'Guntur & Khammam Terminal Mandis',
grainLength: 'SHU Pungency: 75,000 - 100,000 Scoville',
moisture: 'Max 10.5%',
broken: 'Under 2% Loose Seeds / Broken',
purity: 'ASTA Color Value: 50 - 65 ASTA',
packaging: '25kg Compressed Jute Bales or 10kg Cartons',
fclLoad: '7.5 MT in 20ft / 14.0 MT in 40ft HC',
inspection: 'Spices Board India / SGS Aflatoxin Clearance',
status: 'Export Lot Ready',
desc: 'Fiery, high-capsaicin Guntur chilli. The global standard for industrial oleoresin extraction, hot sauce manufacturing, and spice grinding plants worldwide.'
},
{
id: 'byadgi-chilli',
category: 'Whole Spices',
name: 'Byadgi 668 & KDL Red Chilli',
botanical: 'Capsicum annuum var. Byadgi',
hsn: '0904.21.20',
origin: 'Haveri & Dharwad Belt, Karnataka',
grainLength: 'ASTA Color: 120 - 160 ASTA (Deep Ruby)',
moisture: 'Max 11.0%',
broken: 'Under 1.5%',
purity: 'Low Pungency: 15,000 - 25,000 SHU',
packaging: '4.5kg / 10kg Corrugated Export Cartons',
fclLoad: '7.0 MT in 20ft / 13.5 MT in 40ft HC',
inspection: 'Spices Board Certified & Sudan Dye Free',
status: 'Harvest Lot Active',
desc: 'World-famous crinkled red chilli prized for its intense natural red pigmentation and mild heat. Indispensable for premium paprika and food colorants.'
},
{
id: 'green-cardamom',
category: 'Whole Spices',
name: 'Alleppey Green Extra Bold Cardamom (AGEB 8mm+)',
botanical: 'Elettaria cardamomum',
hsn: '0908.31.10',
origin: 'Idukki High Ranges, Kerala',
grainLength: 'Diameter: 8.0 mm - 8.5 mm Bold Pods',
moisture: 'Max 10.0%',
broken: 'Zero Open Pods / 100% Green Husk',
purity: 'Volatile Oil: Min 3.5% ml/100g',
packaging: '5kg Master Vacuum Seal Polybags in Heavy Cartons',
fclLoad: 'Air Cargo LCL / 20ft Containerized',
inspection: 'Spices Board India Organic & Residue Report',
status: 'Controlled Atmosphere Lot',
desc: 'The Queen of Spices. Pristine deep-green sun-shielded cardamom pods with explosive aroma profile and dense seed mass for Middle Eastern royal blends.'
},
{
id: 'fresh-moringa',
category: 'Fresh Produce',
name: 'Export Grade ODC Moringa Drumsticks & Leaves',
botanical: 'Moringa oleifera (ODC3 Variety)',
hsn: '0709.99.90',
origin: 'Dindigul & Theni Orchards, Tamil Nadu',
grainLength: 'Length: 45 cm - 60 cm Straight Pods',
moisture: 'Fresh Harvest Ambient Cold Chain',
broken: 'Zero Blemishes / Uniform Green Caliber',
purity: '100% GlobalG.A.P. Farm Sourced',
packaging: '5kg & 10kg Ventilated Telescopic Cartons',
fclLoad: 'Daily Air Cargo Uplift via Mumbai Sahar / NMIA',
inspection: 'APEDA Phytosanitary Clearance Certificate',
status: 'Daily Air Uplift Active',
desc: 'Nutrient-rich perennial drumsticks harvested at daybreak, sorted by calibrated thickness, pre-cooled, and air-freighted within 24 hours of cutting.'
}
];

export default function App() {
const [activeTab, setActiveTab] = useState('ALL');
const [selectedCommodity, setSelectedCommodity] = useState(null);
const [rfqVolume, setRfqVolume] = useState('25');
const [rfqIncoterm, setRfqIncoterm] = useState('FOB');
const [rfqPort, setRfqPort] = useState('Jebel Ali, UAE');
const [tradeDeskOpen, setTradeDeskOpen] = useState(false);
const [currentTime, setCurrentTime] = useState({ bom: '', dxb: '', sin: '' });

// International Trade Clocks
useEffect(() => {
const updateTimes = () => {
const now = new Date();
setCurrentTime({
bom: now.toLocaleTimeString('en-GB', { timeZone: 'Asia/Kolkata', hour12: false }),
dxb: now.toLocaleTimeString('en-GB', { timeZone: 'Asia/Dubai', hour12: false }),
sin: now.toLocaleTimeString('en-GB', { timeZone: 'Asia/Singapore', hour12: false }),
});
};
updateTimes();
const interval = setInterval(updateTimes, 1000);
return () => clearInterval(interval);
}, []);

const filteredCommodities = activeTab === 'ALL'
? COMMODITIES
: COMMODITIES.filter(c => c.category.toUpperCase() === activeTab);

const handleWhatsAppInquiry = (commodityName = 'Portfolio Inquiry') => {
const message = encodeURIComponent(
Hello Amit,\n\nI am reaching out via Vaayu Elixir Trade Desk regarding:\n*Commodity:* ${commodityName}\n*Volume:* ${rfqVolume} MT\n*Delivery Terms:* ${rfqIncoterm} (${rfqPort})\n\nPlease share current FOB Nhava Sheva / CIF indicative pricing and lab analysis.
);
window.open(https://wa.me/917208666522?text=${message}, '_blank');
};

const handleEmailRFQ = (e) => {
e.preventDefault();
const subject = encodeURIComponent(COMMERCIAL RFQ: ${selectedCommodity?.name || 'General Commodity Allocation'} - ${rfqVolume} MT);
const body = encodeURIComponent(
Attention: Mr. Amit Zawarey (Proprietor)\nVaayu Elixir Global Trade & Strategic Ventures\n\nDear Trade Desk,\n\nWe request an official formal Quotation / Proforma Invoice under the following parameters:\n\n- Commodity: ${selectedCommodity?.name || 'Assorted Agri Commodities'}\n- Volume Required: ${rfqVolume} Metric Tons\n- Incoterm: ${rfqIncoterm}\n- Destination Port: ${rfqPort}\n- Container Load: 20ft FCL / 40ft HC / Breakbulk\n- Mandatory Quality Standard: Pre-shipment SGS / Bureau Veritas Certification\n\nPlease furnish valid price validity, payment terms (100% LC at Sight / CAD), and sailing vessel schedule from JNPT Nhava Sheva.\n\nBest Regards,\nBuyer Procurement Desk
);
window.location.href = mailto:care@vaayuelixir.com?subject=${subject}&body=${body};
};

return (
<div style={{ minHeight: '100vh', backgroundColor: '#F8FAFC', color: '#0F172A', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>

  {/* Top Marine Logistics Bar */}
  <header style={{ backgroundColor: '#070E1A', borderBottom: '1px solid #1E293B', color: '#94A3B8', fontSize: '11px', padding: '8px 24px' }}>
    <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block' }}></span>
          <strong style={{ color: '#F8FAFC', letterSpacing: '0.05em' }}>JNPT NHAVA SHEVA (BMCT / NSICT)</strong>: BERTH OPERATIONAL
        </span>
        <span style={{ color: '#475569' }}>|</span>
        <span style={{ color: '#CBD5E1' }}>APEDA • FSSAI • SPICES BOARD • IEC REGISTERED</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontFamily: 'ui-monospace, monospace' }}>
        <span>BOM: <strong style={{ color: '#F1F5F9' }}>{currentTime.bom || '16:00:00'}</strong></span>
        <span>DXB: <strong style={{ color: '#F1F5F9' }}>{currentTime.dxb || '14:30:00'}</strong></span>
        <span>SIN: <strong style={{ color: '#F1F5F9' }}>{currentTime.sin || '18:30:00'}</strong></span>
        <a href="mailto:care@vaayuelixir.com" style={{ color: '#D4AF37', textDecoration: 'none', fontWeight: 600 }}>care@vaayuelixir.com</a>
      </div>
    </div>
  </header>

  {/* Main Navigation Bar */}
  <nav style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0', padding: '16px 24px', position: 'sticky', top: 0, zIndex: 40, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
    <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      
      {/* Logo Mark + Typography */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <VaayuEmblem size={52} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
            <span style={{ fontSize: '24px', fontWeight: 800, letterSpacing: '0.08em', color: '#0A1526', fontFamily: 'Georgia, serif' }}>VAAYU</span>
            <span style={{ fontSize: '24px', fontWeight: 800, letterSpacing: '0.08em', color: '#B38728', fontFamily: 'Georgia, serif' }}>ELIXIR</span>
          </div>
          <span style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.22em', color: '#64748B', textTransform: 'uppercase', marginTop: '-2px' }}>
            GLOBAL TRADE & STRATEGIC VENTURES
          </span>
        </div>
      </div>

      {/* Trade Corridors Pill + Action Button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', borderRight: '1px solid #E2E8F0', paddingRight: '20px' }}>
          <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.15em', color: '#94A3B8', textTransform: 'uppercase' }}>EXPORT CORRIDORS</span>
          <span style={{ fontSize: '11px', fontWeight: 600, color: '#334155' }}>INDIA • MIDDLE EAST • AFRICA • EUROPE • ASIA</span>
        </div>
        
        <button 
          onClick={() => { setSelectedCommodity(COMMODITIES[0]); setTradeDeskOpen(true); }}
          style={{ backgroundColor: '#0A1526', color: '#F8FAFC', padding: '10px 18px', borderRadius: '4px', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', border: '1px solid #1E293B', cursor: 'pointer' }}
        >
          REQUEST PROFORMA
        </button>
      </div>
    </div>
  </nav>

  {/* Hero Section */}
  <section style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0', padding: '56px 24px 64px' }}>
    <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
      
      <div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#FEF9C3', border: '1px solid #FDE047', padding: '4px 12px', borderRadius: '4px', marginBottom: '20px' }}>
          <span style={{ fontSize: '10.5px', fontWeight: 800, letterSpacing: '0.12em', color: '#854D0E', textTransform: 'uppercase' }}>
            MOVING OPPORTUNITIES. CREATING VALUE.
          </span>
        </div>

        <h1 style={{ fontSize: '42px', lineHeight: '1.15', fontWeight: 800, color: '#0A1526', margin: '0 0 20px', fontFamily: 'Georgia, serif' }}>
          Direct Farm-to-Berth Maritime Trade Execution.
        </h1>

        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#475569', margin: '0 0 32px', maxWidth: '580px' }}>
          Vaayu Elixir connects verified agricultural farm origins across India directly to sovereign and private buyers in the Middle East, Africa, and Europe. Fully containerized exports with rigorous pre-shipment SGS laboratory assays and real-time JNPT customs facilitation.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
          <a 
            href="#commodities"
            style={{ backgroundColor: '#B38728', color: '#FFFFFF', padding: '14px 26px', borderRadius: '4px', fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em', textDecoration: 'none', display: 'inline-block' }}
          >
            EXPLORE COMMODITY PORTFOLIO ↓
          </a>
          <button 
            onClick={() => handleWhatsAppInquiry('Executive Desk Consultation')}
            style={{ backgroundColor: '#0F172A', color: '#F8FAFC', padding: '14px 24px', borderRadius: '4px', fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em', border: '1px solid #1E293B', cursor: 'pointer' }}
          >
            WHATSAPP TRADE DESK
          </button>
        </div>
      </div>

      {/* Right Corridor Status Card */}
      <div style={{ backgroundColor: '#070E1A', border: '1px solid #1E293B', borderRadius: '8px', padding: '32px', color: '#F8FAFC', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #1E293B', paddingBottom: '16px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <VaayuEmblem size={32} />
            <div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#F1F5F9' }}>LOGISTICS VELOCITY</div>
              <div style={{ fontSize: '10px', color: '#94A3B8' }}>JNPT Nhava Sheva & Mumbai Air Cargo</div>
            </div>
          </div>
          <span style={{ fontSize: '10px', fontWeight: 700, backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#10B981', padding: '4px 8px', borderRadius: '4px' }}>
            BERTH ACTIVE
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ backgroundColor: '#0F172A', padding: '14px 18px', borderRadius: '6px', borderLeft: '3px solid #B38728' }}>
            <div style={{ fontSize: '11px', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>PRIMARY SEABORNE GATEWAY</div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#F8FAFC', marginTop: '4px' }}>JNPT Nhava Sheva (BMCT / GTI)</div>
            <div style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>Jebel Ali (3-4 Days) • Sohar • West Africa</div>
          </div>

          <div style={{ backgroundColor: '#0F172A', padding: '14px 18px', borderRadius: '6px', borderLeft: '3px solid #10B981' }}>
            <div style={{ fontSize: '11px', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>AIR FREIGHT CARGO HUB</div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#F8FAFC', marginTop: '4px' }}>Mumbai Sahar Air Cargo & NMIA</div>
            <div style={{ fontSize: '12px', color: '#64748B', marginTop: '2px' }}>Daily uplift for fresh drumsticks & spices to GCC</div>
          </div>

          <div style={{ backgroundColor: '#0F172A', padding: '14px 18px', borderRadius: '6px', borderLeft: '3px solid #38BDF8' }}>
            <div style={{ fontSize: '11px', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>TRADE DESK LEADERSHIP</div>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#F8FAFC', marginTop: '4px' }}>Amit Zawarey • Proprietor</div>
            <div style={{ fontSize: '12px', color: '#CBD5E1', marginTop: '2px' }}>Direct Phone: +91 7208666522</div>
          </div>
        </div>
      </div>

    </div>
  </section>

  {/* Commodity Portfolio Section */}
  <section id="commodities" style={{ padding: '64px 24px', maxWidth: '1280px', margin: '0 auto' }}>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px', gap: '16px' }}>
      <div>
        <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.15em', color: '#B38728', textTransform: 'uppercase', marginBottom: '6px' }}>
          STANDARDIZED EXPORT PORTFOLIO
        </div>
        <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0A1526', margin: 0, fontFamily: 'Georgia, serif' }}>
          Agricultural & Spice Commodities
        </h2>
      </div>

      {/* Filter Pills */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {['ALL', 'GRAINS & RICE', 'WHOLE SPICES', 'FRESH PRODUCE'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '8px 16px',
              borderRadius: '4px',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.05em',
              cursor: 'pointer',
              border: activeTab === tab ? '1px solid #0A1526' : '1px solid #CBD5E1',
              backgroundColor: activeTab === tab ? '#0A1526' : '#FFFFFF',
              color: activeTab === tab ? '#FFFFFF' : '#475569'
            }}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>

    {/* Commodity Cards Grid */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '24px' }}>
      {filteredCommodities.map((item) => (
        <div
          key={item.id}
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '8px',
            border: '1px solid #E2E8F0',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.1em', color: '#B38728', textTransform: 'uppercase' }}>
                {item.category}
              </span>
              <span style={{ fontSize: '10.5px', fontFamily: 'monospace', color: '#64748B' }}>
                HSN: {item.hsn}
              </span>
            </div>

            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0A1526', margin: '0 0 6px', fontFamily: 'Georgia, serif' }}>
              {item.name}
            </h3>
            <div style={{ fontSize: '12px', fontStyle: 'italic', color: '#64748B', marginBottom: '14px' }}>
              {item.botanical}
            </div>

            <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#475569', marginBottom: '20px' }}>
              {item.desc}
            </p>

            {/* Technical Specs Compact Table */}
            <div style={{ backgroundColor: '#F8FAFC', borderRadius: '6px', border: '1px solid #E2E8F0', padding: '12px', fontSize: '11.5px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid #F1F5F9' }}>
                <span style={{ color: '#64748B' }}>Mandi Origin:</span>
                <strong style={{ color: '#0F172A' }}>{item.origin}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid #F1F5F9' }}>
                <span style={{ color: '#64748B' }}>Grading / Length:</span>
                <strong style={{ color: '#0F172A' }}>{item.grainLength}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid #F1F5F9' }}>
                <span style={{ color: '#64748B' }}>Moisture Standard:</span>
                <strong style={{ color: '#0F172A' }}>{item.moisture}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
                <span style={{ color: '#64748B' }}>FCL Loading:</span>
                <strong style={{ color: '#0F172A' }}>{item.fclLoad}</strong>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => { setSelectedCommodity(item); setTradeDeskOpen(true); }}
              style={{ flex: 1, backgroundColor: '#0A1526', color: '#F8FAFC', border: 'none', padding: '10px 14px', borderRadius: '4px', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}
            >
              CALCULATE RFQ
            </button>
            <button
              onClick={() => handleWhatsAppInquiry(item.name)}
              style={{ backgroundColor: '#25D366', color: '#FFFFFF', border: 'none', padding: '10px 16px', borderRadius: '4px', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}
              title="Direct WhatsApp"
            >
              WHATSAPP
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* RFQ / Technical Modal */}
  {tradeDeskOpen && selectedCommodity && (
    <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(7, 14, 26, 0.75)', backdropFilter: 'blur(4px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 100, padding: '20px' }}>
      <div style={{ backgroundColor: '#FFFFFF', width: '100%', maxWidth: '640px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', border: '1px solid #E2E8F0' }}>
        
        {/* Modal Header */}
        <div style={{ backgroundColor: '#0A1526', color: '#F8FAFC', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '10px', fontWeight: 800, color: '#B38728', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              COMMERCIAL SPECIFICATION & QUOTATION
            </span>
            <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '4px 0 0', fontFamily: 'Georgia, serif' }}>
              {selectedCommodity.name}
            </h3>
          </div>
          <button 
            onClick={() => setTradeDeskOpen(false)}
            style={{ background: 'transparent', border: 'none', color: '#94A3B8', fontSize: '24px', cursor: 'pointer' }}
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleEmailRFQ} style={{ padding: '24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>REQUIRED VOLUME (METRIC TONS)</label>
              <input
                type="number"
                value={rfqVolume}
                onChange={(e) => setRfqVolume(e.target.value)}
                style={{ width: '100%', padding: '10px', border: '1px solid #CBD5E1', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box' }}
                min="1"
                required
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>DELIVERY INCOTERM</label>
              <select
                value={rfqIncoterm}
                onChange={(e) => setRfqIncoterm(e.target.value)}
                style={{ width: '100%', padding: '10px', border: '1px solid #CBD5E1', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box' }}
              >
                <option value="FOB">FOB JNPT Nhava Sheva (BMCT/GTI)</option>
                <option value="CIF">CIF Destination Port</option>
                <option value="CFR">CFR Destination Port</option>
                <option value="EXW">EXW Indian Processing Mandi</option>
              </select>
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>DISCHARGE PORT / COUNTRY</label>
            <input
              type="text"
              value={rfqPort}
              onChange={(e) => setRfqPort(e.target.value)}
              style={{ width: '100%', padding: '10px', border: '1px solid #CBD5E1', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box' }}
              placeholder="e.g. Jebel Ali, UAE / Sohar, Oman / Rotterdam"
              required
            />
          </div>

          {/* Lab Specification Sheet */}
          <div style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '14px', fontSize: '12px', marginBottom: '24px' }}>
            <div style={{ fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>Certified Export Parameters:</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', color: '#475569' }}>
              <div>• HSN Code: {selectedCommodity.hsn}</div>
              <div>• Moisture: {selectedCommodity.moisture}</div>
              <div>• Packaging: {selectedCommodity.packaging}</div>
              <div>• Assaying: {selectedCommodity.inspection}</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              type="submit"
              style={{ flex: 1, backgroundColor: '#0A1526', color: '#FFFFFF', padding: '12px', borderRadius: '4px', fontSize: '13px', fontWeight: 700, border: 'none', cursor: 'pointer' }}
            >
              GENERATE OFFICIAL PROFORMA EMAIL →
            </button>
            <button
              type="button"
              onClick={() => handleWhatsAppInquiry(selectedCommodity.name)}
              style={{ backgroundColor: '#25D366', color: '#FFFFFF', padding: '12px 18px', borderRadius: '4px', fontSize: '13px', fontWeight: 700, border: 'none', cursor: 'pointer' }}
            >
              WHATSAPP
            </button>
          </div>
        </form>
      </div>
    </div>
  )}

  {/* Footer */}
  <footer style={{ backgroundColor: '#070E1A', borderTop: '1px solid #1E293B', color: '#94A3B8', padding: '48px 24px 32px' }}>
    <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', marginBottom: '40px' }}>
      
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
          <VaayuEmblem size={44} />
          <div>
            <span style={{ fontSize: '20px', fontWeight: 800, letterSpacing: '0.08em', color: '#F8FAFC', fontFamily: 'Georgia, serif' }}>VAAYU </span>
            <span style={{ fontSize: '20px', fontWeight: 800, letterSpacing: '0.08em', color: '#B38728', fontFamily: 'Georgia, serif' }}>ELIXIR</span>
            <div style={{ fontSize: '8.5px', fontWeight: 700, letterSpacing: '0.2em', color: '#64748B' }}>GLOBAL TRADE & STRATEGIC VENTURES</div>
          </div>
        </div>
        <p style={{ fontSize: '12.5px', lineHeight: '1.6', color: '#64748B', maxWidth: '360px' }}>
          Moving Opportunities. Creating Value. Proprietary merchant exporter headquartered in Mumbai, orchestrating institutional agro-commodity supply chains via Nhava Sheva.
        </p>
      </div>

      <div>
        <div style={{ fontSize: '11px', fontWeight: 700, color: '#F1F5F9', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>COMMERCIAL DESK</div>
        <div style={{ fontSize: '13px', lineHeight: '1.8', color: '#94A3B8' }}>
          <div><strong>Amit Zawarey</strong> • Proprietor</div>
          <div>Direct: <a href="tel:+917208666522" style={{ color: '#D4AF37', textDecoration: 'none' }}>+91 7208666522</a></div>
          <div>Official Desk: <a href="mailto:care@vaayuelixir.com" style={{ color: '#D4AF37', textDecoration: 'none' }}>care@vaayuelixir.com</a></div>
          <div>Web: <a href="https://www.vaayuelixir.com" style={{ color: '#D4AF37', textDecoration: 'none' }}>www.vaayuelixir.com</a></div>
          <div>Mumbai, Maharashtra, India</div>
        </div>
      </div>

      <div>
        <div style={{ fontSize: '11px', fontWeight: 700, color: '#F1F5F9', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>COMPLIANCE & CLEARANCE</div>
        <div style={{ fontSize: '12px', lineHeight: '1.8', color: '#64748B' }}>
          <div>• Directorate General of Foreign Trade (DGFT) IEC</div>
          <div>• APEDA Registration (Basmati & Agri Products)</div>
          <div>• Spices Board of India Registered Exporter</div>
          <div>• FSSAI Central Export License</div>
          <div>• Pre-shipment Assaying: SGS / Bureau Veritas</div>
        </div>
      </div>

    </div>

    <div style={{ maxWidth: '1280px', margin: '0 auto', paddingTop: '24px', borderTop: '1px solid #1E293B', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', color: '#475569' }}>
      <div>© {new Date().getFullYear()} Vaayu Elixir Global Trade & Strategic Ventures. All rights reserved.</div>
      <div>PEOPLE | MARKETS | PARTNERSHIPS | A BRIGHTER TOMORROW</div>
    </div>
  </footer>

</div>


);
}
