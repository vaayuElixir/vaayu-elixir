import React, { useState, useEffect } from 'react';
import logoImg from './IMG_9377.jpeg';
import { COMMODITIES } from './products.js';
import { Link } from 'react-router-dom';

/* =====================================================================
   EDIT THESE FIRST
   ===================================================================== */

// 1) Create a free form at formspree.io, then paste your form ID here.
//    Until you do, the form falls back to opening the buyer's email app.
const FORM_ENDPOINT = 'https://formspree.io/f/mbgojywg';
const FORM_READY = !FORM_ENDPOINT.includes('YOUR_FORM_ID');

const CONTACT = {
  name: 'Amit Zawarey',
  role: 'Proprietor',
  phone: '+91 7208666522',
  phoneRaw: '917208666522',
  email: 'care@vaayuelixir.com',
  web: 'www.vaayuelixir.com',
  city: 'Mumbai, Maharashtra, India',
};

// 2) Fill in your real numbers. DELETE any line for a registration you do not hold.
const REGISTRATIONS = [
  { label: 'Importer-Exporter Code (IEC), DGFT', value: 'AAIPZ6521H' },
  { label: 'APEDA RCMC (rice and fresh produce)', value: 'RCMC/APEDA/35225/2026-2027' },
  { label: 'FSSAI license', value: '11526996001186' },
  { label: 'GSTIN', value: '27AAIPZ6521H2Z9' },
];

/* =====================================================================
   PRODUCT DATA
   MOQ, season and markets are INDICATIVE placeholders. Edit them to
   what you can actually commit to. HS codes are 6-digit; confirm the
   8-digit Indian ITC-HS code with your CHA.
   ===================================================================== */
const TABS = ['ALL', 'GRAINS & RICE', 'WHOLE SPICES', 'FRESH PRODUCE'];

const PROCESS = [
  ['Inquiry', 'Send product, volume, incoterm and destination port.'],
  ['Specification & sample', 'We confirm the spec and arrange samples on request.'],
  ['Proforma invoice', 'Price, validity, payment terms and shipment schedule.'],
  ['Contract & payment', 'Sales contract signed; LC at sight, CAD or advance TT.'],
  ['Inspection & loading', 'Packing, third-party inspection if requested, container stuffing.'],
  ['Documents & shipment', 'Invoice, packing list, B/L or AWB, certificates sent to you.'],
];

const FAQS = [
  ['Can I get a sample before ordering?', 'Samples are available on request. Courier terms are confirmed when you inquire.'],
  ['Which incoterms do you quote?', 'FOB Nhava Sheva (JNPT), CFR, CIF and EXW. Tell us your destination port and we will quote accordingly.'],
  ['Do you arrange third-party inspection?', 'Yes, on request. SGS, Bureau Veritas or Intertek inspection can be arranged before shipment, at the buyer’s cost unless agreed otherwise.'],
  ['Are prices fixed?', 'Agricultural prices and export policy change often. Quotations carry a stated validity and are subject to prevailing DGFT policy.'],
];

const INCOTERMS = ['FOB Nhava Sheva (JNPT)', 'CFR Destination Port', 'CIF Destination Port', 'EXW India (processing location)'];

const waLink = (text) => `https://wa.me/${CONTACT.phoneRaw}?text=${encodeURIComponent(text)}`;

/* =====================================================================
   STYLES (mobile-first, media queries)
   ===================================================================== */
const CSS = `
:root{--navy:#0A1526;--deep:#070E1A;--ink:#0F172A;--gold:#B38728;--goldl:#D4AF37;--text:#475569;--muted:#64748B;--line:#E2E8F0;--bg:#F8FAFC}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0}
.ve{min-height:100vh;background:var(--bg);color:var(--ink);font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;line-height:1.5}
.wrap{max-width:1200px;margin:0 auto;padding:0 20px}
section[id]{scroll-margin-top:84px}
.eyebrow{font-size:12px;font-weight:800;letter-spacing:.14em;color:var(--gold);text-transform:uppercase;margin-bottom:6px}
.title{font-family:Georgia,serif;font-size:clamp(24px,4vw,30px);margin:0;color:var(--navy)}
.section{padding:56px 0}
.alt{background:#fff;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.sec-head{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;gap:16px;margin-bottom:28px}

.topbar{background:var(--deep);color:#CBD5E1;font-size:12px;padding:8px 0}
.topbar .wrap{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:6px 16px}
.topbar a{color:var(--goldl);text-decoration:none;font-weight:600}
.clocks{display:flex;gap:14px;font-family:ui-monospace,monospace;color:#94A3B8}
.clocks b{color:#F1F5F9}
@media(max-width:720px){.clocks{display:none}}

.nav{background:#fff;border-bottom:1px solid var(--line);position:sticky;top:0;z-index:40;box-shadow:0 1px 3px rgba(0,0,0,.04)}
.nav .wrap{display:flex;justify-content:space-between;align-items:center;gap:12px;padding-top:12px;padding-bottom:12px}
.brand{display:flex;align-items:center;gap:12px;text-decoration:none}
.brand-name{font-family:Georgia,serif;font-weight:800;letter-spacing:.08em;font-size:clamp(18px,4vw,24px);color:var(--navy);line-height:1.1}
.brand-name span{color:var(--gold)}
.brand-sub{font-size:10px;font-weight:700;letter-spacing:.16em;color:var(--muted);text-transform:uppercase}
@media(max-width:520px){.brand-sub{display:none}}
.nav-links{display:flex;align-items:center;gap:20px;font-size:13px;font-weight:600}
.nav-links .lnk{text-decoration:none;color:#334155}
@media(max-width:960px){.nav-links .lnk{display:none}}

.logo{display:inline-flex;flex-shrink:0;background:#fff;border-radius:8px;padding:3px;overflow:hidden}
.logo img{width:100%;height:100%;object-fit:contain;display:block}

.btn{display:inline-block;border:1px solid transparent;border-radius:4px;padding:12px 20px;font-size:13px;font-weight:700;letter-spacing:.04em;cursor:pointer;text-decoration:none;text-align:center;font-family:inherit;line-height:1.3}
.btn-navy{background:var(--navy);color:#fff;border-color:#1E293B}
.btn-gold{background:var(--gold);color:#fff}
.btn-wa{background:#128C4A;color:#fff}
.btn:disabled{opacity:.6;cursor:not-allowed}
.btn-row{display:flex;flex-wrap:wrap;gap:12px}

.hero{background:#fff;border-bottom:1px solid var(--line);padding:48px 0 56px}
.hero-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:40px;align-items:center}
@media(max-width:900px){.hero{padding:32px 0 40px}.hero-grid{grid-template-columns:1fr;gap:28px}}
.tag{display:inline-block;background:#FEF9C3;border:1px solid #FDE047;color:#854D0E;font-size:11px;font-weight:800;letter-spacing:.1em;padding:5px 12px;border-radius:4px;margin-bottom:18px}
.hero h1{font-family:Georgia,serif;font-size:clamp(30px,5.5vw,44px);line-height:1.15;margin:0 0 18px;color:var(--navy)}
.lead{font-size:16px;color:var(--text);max-width:600px;margin:0 0 28px}
.panel{background:var(--deep);border:1px solid #1E293B;border-radius:8px;padding:24px;color:#F8FAFC;box-shadow:0 20px 25px -5px rgba(0,0,0,.2)}
.panel-head{display:flex;align-items:center;gap:12px;border-bottom:1px solid #1E293B;padding-bottom:14px;margin-bottom:18px}
.panel-head b{display:block;font-size:14px}
.panel-head small{color:#94A3B8;font-size:12px}
.pitem{background:var(--ink);border-left:3px solid var(--gold);border-radius:6px;padding:12px 16px;margin-bottom:12px}
.pitem:last-child{margin-bottom:0}
.pitem small{display:block;font-size:11px;color:#94A3B8;text-transform:uppercase;letter-spacing:.05em}
.pitem b{display:block;font-size:15px;margin-top:3px}
.pitem span{display:block;font-size:12.5px;color:#94A3B8;margin-top:2px}

.pills{display:flex;flex-wrap:wrap;gap:8px}
.pill{padding:9px 14px;border-radius:4px;font-size:12px;font-weight:700;letter-spacing:.04em;cursor:pointer;border:1px solid #CBD5E1;background:#fff;color:var(--text);font-family:inherit}
.pill.on{background:var(--navy);border-color:var(--navy);color:#fff}

.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,340px),1fr));gap:20px}
.card{background:#fff;border:1px solid var(--line);border-radius:8px;padding:20px;display:flex;flex-direction:column;justify-content:space-between;box-shadow:0 1px 3px rgba(0,0,0,.05)}
.card-top{display:flex;justify-content:space-between;gap:8px;margin-bottom:8px;font-size:11px}
.cat{font-weight:800;letter-spacing:.1em;color:var(--gold);text-transform:uppercase}
.hs{font-family:ui-monospace,monospace;color:var(--muted)}
.card h3{font-family:Georgia,serif;font-size:18px;margin:0 0 4px;color:var(--navy)}
.product-title-link{color:inherit;text-decoration:none}.product-title-link:hover{text-decoration:underline;text-decoration-color:var(--gold)}
.product-breadcrumb{font-size:13px;color:var(--muted);margin-bottom:20px}.product-breadcrumb a{color:var(--gold);text-decoration:none}
.product-detail{max-width:900px;margin:0 auto}.product-detail h1{font-family:Georgia,serif;color:var(--navy);font-size:clamp(30px,5vw,44px);line-height:1.15;margin:0 0 14px}.product-detail .lead{max-width:none}.product-detail h2{font-family:Georgia,serif;color:var(--navy);font-size:24px;margin:28px 0 12px}.product-links{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px}.product-links a{padding:14px;border:1px solid var(--line);background:#fff;border-radius:6px;color:var(--navy);text-decoration:none;font-weight:650}.product-links a:hover{border-color:var(--gold)}
.bot{font-size:12.5px;font-style:italic;color:var(--muted);margin-bottom:12px}
.desc{font-size:14px;color:var(--text);margin:0 0 14px}
.specs{background:var(--bg);border:1px solid var(--line);border-radius:6px;padding:2px 12px}
.row{display:flex;justify-content:space-between;gap:16px;padding:7px 0;border-bottom:1px solid #EEF2F7;font-size:13px}
.row:last-child{border-bottom:none}
.row span{color:var(--muted);flex-shrink:0}
.row strong{text-align:right;font-weight:600;color:var(--ink)}
@media(max-width:420px){.row{flex-direction:column;gap:2px}.row strong{text-align:left}}
.card details{margin-top:12px;border-top:1px dashed var(--line);padding-top:10px}
.card summary{cursor:pointer;font-size:13px;font-weight:700;color:var(--navy)}
.card details .specs{margin-top:10px}
.card-actions{display:flex;gap:8px;margin-top:16px}
.card-actions .btn{padding:11px 14px;font-size:12px}
.grow{flex:1}
.fine{font-size:12.5px;color:var(--muted);margin-top:20px}

.steps{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,210px),1fr));gap:16px}
.step{background:var(--bg);border:1px solid var(--line);border-radius:8px;padding:18px}
.step .n{width:28px;height:28px;border-radius:50%;background:var(--navy);color:#fff;font-weight:700;font-size:13px;display:flex;align-items:center;justify-content:center;margin-bottom:10px}
.step b{display:block;margin-bottom:4px;color:var(--navy)}
.step span{font-size:13.5px;color:var(--text)}

.two{display:grid;grid-template-columns:1fr 1fr;gap:20px}
@media(max-width:800px){.two{grid-template-columns:1fr}}
.box{background:#fff;border:1px solid var(--line);border-radius:8px;padding:20px}
.box h3{margin:0 0 10px;font-size:17px;font-family:Georgia,serif;color:var(--navy)}
.box ul{margin:0;padding-left:18px;font-size:14px;color:var(--text)}
.box li{margin:6px 0}
.note{background:#FFFBEB;border:1px solid #FDE68A;color:#78350F;border-radius:6px;padding:12px 14px;font-size:13px;margin-top:16px}

.faq{background:#fff;border:1px solid var(--line);border-radius:8px;padding:14px 18px;margin-bottom:10px}
.faq summary{cursor:pointer;font-weight:700;color:var(--navy);font-size:15px}
.faq p{margin:10px 0 0;font-size:14px;color:var(--text)}

.inq{display:grid;grid-template-columns:1.5fr .8fr;gap:24px;align-items:start}
@media(max-width:900px){.inq{grid-template-columns:1fr}}
.fg{display:grid;grid-template-columns:1fr 1fr;gap:14px}
@media(max-width:600px){.fg{grid-template-columns:1fr}}
.full{grid-column:1/-1}
.field label{display:block;font-size:12px;font-weight:700;color:var(--text);margin-bottom:5px}
.field input,.field select,.field textarea{width:100%;padding:11px 12px;border:1px solid #CBD5E1;border-radius:4px;font:inherit;font-size:16px;background:#fff;color:var(--ink)}
.field textarea{min-height:90px;resize:vertical}
.inline{display:flex;gap:8px}
.inline select{max-width:96px}
.hp{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}
.msg{border-radius:6px;padding:12px 14px;font-size:14px;margin-bottom:14px}
.ok{background:#ECFDF5;border:1px solid #A7F3D0;color:#065F46}
.err{background:#FEF2F2;border:1px solid #FECACA;color:#991B1B}
.privacy{font-size:12px;color:var(--muted);margin-top:12px}
.contact-box a{color:var(--navy);font-weight:600}
.contact-box div{margin:6px 0;font-size:14px}

.footer{background:var(--deep);color:#94A3B8;padding:40px 0 24px}
.footer a{color:var(--goldl);text-decoration:none}
.fgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:32px;margin-bottom:28px}
.fbrand{display:flex;align-items:center;gap:12px;margin-bottom:12px}
.fbrand .brand-name{color:#F8FAFC}
.fbrand .brand-name span{color:var(--gold)}
.footer p,.footer li{font-size:13px;color:#94A3B8}
.footer h4{font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:#F1F5F9;margin:0 0 12px}
.footer ul{list-style:none;margin:0;padding:0}
.footer li{margin:5px 0}
.fbottom{border-top:1px solid #1E293B;padding-top:18px;display:flex;flex-wrap:wrap;justify-content:space-between;gap:8px;font-size:12px;color:#94A3B8}
`;

/* =====================================================================
   COMPONENTS
   ===================================================================== */
const VaayuLogo = ({ size = 48 }) => (
  <span className="logo" style={{ width: size, height: size }}>
    <img src={logoImg} alt="Vaayu Elixir logo" />
  </span>
);

const EMPTY_FORM = {
  name: '', company: '', email: '', phone: '', country: '',
  commodity: 'general', volume: '', unit: 'MT',
  incoterm: INCOTERMS[0], port: '', message: '', _gotcha: '',
};

function RfqForm({ commodityId }) {
  const [form, setForm] = useState({ ...EMPTY_FORM, commodity: commodityId || 'general' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  useEffect(() => {
    setForm((f) => ({ ...f, commodity: commodityId || 'general' }));
  }, [commodityId]);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const commodityName = () => {
    const found = COMMODITIES.find((c) => c.id === form.commodity);
    return found ? found.name : 'General inquiry / multiple products';
  };

  const volumeText = () => (form.volume ? `${form.volume} ${form.unit}` : 'not specified');

  const buildBody = () =>
    [
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `Phone / WhatsApp: ${form.phone || '-'}`,
      `Country: ${form.country}`,
      `Commodity: ${commodityName()}`,
      `Volume: ${volumeText()}`,
      `Incoterm: ${form.incoterm}`,
      `Destination port: ${form.port || '-'}`,
      `Message: ${form.message || '-'}`,
    ].join('\n');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (form._gotcha) return; // spam bots fill the hidden field
    const subject = `RFQ: ${commodityName()} - ${volumeText()} (${form.company})`;

    if (!FORM_READY) {
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildBody())}`;
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: subject,
          name: form.name,
          email: form.email,
          company: form.company,
          phone: form.phone,
          country: form.country,
          commodity: commodityName(),
          volume: volumeText(),
          incoterm: form.incoterm,
          destination_port: form.port,
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ ...EMPTY_FORM, commodity: commodityId || 'general' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  const sendWhatsApp = () => {
    window.open(
      waLink(
        `Hello Vaayu Elixir Trade Desk,\n\nI would like to enquire about:\nCommodity: ${commodityName()}\nVolume: ${volumeText()}\nIncoterm: ${form.incoterm}\nDestination: ${form.port || '-'}\n\nPlease share specifications and indicative pricing.`
      ),
      '_blank'
    );
  };

  return (
    <form onSubmit={onSubmit} className="box" noValidate={false}>
      <div aria-live="polite">
        {status === 'success' && (
          <div className="msg ok">Thank you. Your inquiry has been received and we will reply by email shortly.</div>
        )}
        {status === 'error' && (
          <div className="msg err">
            We could not send your inquiry. Please try again, or email {CONTACT.email} or use WhatsApp.
          </div>
        )}
      </div>

      <div className="fg">
        <div className="field">
          <label htmlFor="f-name">Your name *</label>
          <input id="f-name" type="text" value={form.name} onChange={set('name')} required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="f-company">Company *</label>
          <input id="f-company" type="text" value={form.company} onChange={set('company')} required autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="f-email">Business email *</label>
          <input id="f-email" type="email" value={form.email} onChange={set('email')} required autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="f-phone">Phone / WhatsApp</label>
          <input id="f-phone" type="tel" value={form.phone} onChange={set('phone')} autoComplete="tel" placeholder="With country code" />
        </div>
        <div className="field">
          <label htmlFor="f-country">Country *</label>
          <input id="f-country" type="text" value={form.country} onChange={set('country')} required autoComplete="country-name" />
        </div>
        <div className="field">
          <label htmlFor="f-commodity">Commodity *</label>
          <select id="f-commodity" value={form.commodity} onChange={set('commodity')}>
            <option value="general">General inquiry / multiple products</option>
            {COMMODITIES.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="f-volume">Required volume</label>
          <div className="inline">
            <input id="f-volume" type="number" min="1" value={form.volume} onChange={set('volume')} placeholder="e.g. 25" />
            <select value={form.unit} onChange={set('unit')} aria-label="Unit">
              <option value="MT">MT</option>
              <option value="kg">kg</option>
              <option value="FCL">FCL</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label htmlFor="f-incoterm">Incoterm</label>
          <select id="f-incoterm" value={form.incoterm} onChange={set('incoterm')}>
            {INCOTERMS.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="field full">
          <label htmlFor="f-port">Destination port / country</label>
          <input id="f-port" type="text" value={form.port} onChange={set('port')} placeholder="e.g. Jebel Ali, UAE / Mombasa, Kenya / Rotterdam" />
        </div>
        <div className="field full">
          <label htmlFor="f-message">Message (spec, packing, target price, timeline)</label>
          <textarea id="f-message" value={form.message} onChange={set('message')} />
        </div>
        <div className="hp" aria-hidden="true">
          <label htmlFor="f-gotcha">Leave this empty</label>
          <input id="f-gotcha" type="text" tabIndex={-1} autoComplete="off" value={form._gotcha} onChange={set('_gotcha')} />
        </div>
      </div>

      <div className="btn-row" style={{ marginTop: 16 }}>
        <button type="submit" className="btn btn-navy grow" disabled={status === 'sending'}>
          {status === 'sending' ? 'SENDING...' : 'SEND INQUIRY'}
        </button>
        <button type="button" className="btn btn-wa" onClick={sendWhatsApp}>WHATSAPP</button>
      </div>
      <p className="privacy">Your details are used only to respond to your inquiry.</p>
    </form>
  );
}

/* =====================================================================
   APP
   ===================================================================== */
export function HomePage() {
  const [activeTab, setActiveTab] = useState('ALL');
  const [inquiryId, setInquiryId] = useState('');
  const [time, setTime] = useState({ bom: '--:--:--', dxb: '--:--:--', sin: '--:--:--' });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const fmt = (tz) => now.toLocaleTimeString('en-GB', { timeZone: tz, hour12: false });
      setTime({ bom: fmt('Asia/Kolkata'), dxb: fmt('Asia/Dubai'), sin: fmt('Asia/Singapore') });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const filtered =
    activeTab === 'ALL' ? COMMODITIES : COMMODITIES.filter((c) => c.category.toUpperCase() === activeTab);

  return (
    <div className="ve">
      <style>{CSS}</style>

      {/* Top bar */}
      <div className="topbar">
        <div className="wrap">
          <span>MUMBAI, INDIA • MERCHANT EXPORTER • DISPATCH FROM JNPT NHAVA SHEVA & MUMBAI AIR CARGO</span>
          <div className="clocks">
            <span>BOM <b>{time.bom}</b></span>
            <span>DXB <b>{time.dxb}</b></span>
            <span>SIN <b>{time.sin}</b></span>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="nav">
        <div className="wrap">
          <a className="brand" href="#top">
            <VaayuLogo size={48} />
            <div>
              <div className="brand-name">VAAYU <span>ELIXIR</span></div>
              <div className="brand-sub">Global Trade & Strategic Ventures</div>
            </div>
          </a>
          <div className="nav-links">
            <a className="lnk" href="#portfolio">Products</a>
            <a className="lnk" href="#process">How we work</a>
            <a className="lnk" href="#terms">Terms</a>
            <a className="btn btn-navy" href="#inquiry" onClick={() => setInquiryId('')}>REQUEST A QUOTE</a>
          </div>
        </div>
      </nav>

      <main id="top">
        {/* Hero */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <span className="tag">MOVING OPPORTUNITIES. CREATING VALUE.</span>
              <h1>Indian Rice, Spices & Fresh Produce, Exported Direct.</h1>
              <p className="lead">
                Vaayu Elixir is a Mumbai-based merchant exporter supplying importers, distributors and food manufacturers
                in the Middle East, Africa, Europe and Asia. Sea FCL and reefer containers from JNPT Nhava Sheva, air cargo
                from Mumbai, and third-party pre-shipment inspection on request.
              </p>
              <div className="btn-row">
                <a className="btn btn-gold" href="#portfolio">VIEW PRODUCT PORTFOLIO ↓</a>
                <a className="btn btn-navy" href="#inquiry" onClick={() => setInquiryId('')}>REQUEST A QUOTE</a>
              </div>
            </div>

            <div className="panel">
              <div className="panel-head">
                <VaayuLogo size={40} />
                <div>
                  <b>SHIPPING & DISPATCH</b>
                  <small>Sea • Reefer • Air</small>
                </div>
              </div>
              <div className="pitem">
                <small>Sea gateway</small>
                <b>JNPT Nhava Sheva, Mumbai</b>
                <span>Dry FCL, ventilated and reefer containers</span>
              </div>
              <div className="pitem" style={{ borderLeftColor: '#10B981' }}>
                <small>Air freight</small>
                <b>Mumbai air cargo</b>
                <span>Fresh produce and high-value spices</span>
              </div>
              <div className="pitem" style={{ borderLeftColor: '#38BDF8' }}>
                <small>Trade desk</small>
                <b>{CONTACT.name}</b>
                <span>{CONTACT.phone}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="section wrap">
          <div className="sec-head">
            <div>
              <div className="eyebrow">Export portfolio</div>
              <h2 className="title">Agricultural, Spice & Fresh Produce Commodities</h2>
            </div>
            <div className="pills" role="tablist" aria-label="Filter products">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  className={`pill${activeTab === tab ? ' on' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid">
            {filtered.map((item) => (
              <article className="card" key={item.id}>
                <div>
                  <div className="card-top">
                    <span className="cat">{item.category}</span>
                    <span className="hs">HS {item.hs}</span>
                  </div>
                  <h3><Link className="product-title-link" to={`/products/${productSlug(item)}/`}>{item.name}</Link></h3>
                  <div className="bot">{item.botanical}</div>
                  <p className="desc">{item.desc}</p>

                  <div className="specs">
                    <div className="row"><span>Origin</span><strong>{item.origin}</strong></div>
                    <div className="row"><span>Shipment</span><strong>{item.mode}</strong></div>
                    <div className="row"><span>Min. order (indicative)</span><strong>{item.moq}</strong></div>
                  </div>

                  <details>
                    <summary>Full specification</summary>
                    <div className="specs">
                      {item.specs.map(([label, value]) => (
                        <div className="row" key={label}><span>{label}</span><strong>{value}</strong></div>
                      ))}
                      <div className="row"><span>Packaging</span><strong>{item.packaging}</strong></div>
                      <div className="row"><span>Container loading</span><strong>{item.loading}</strong></div>
                      <div className="row"><span>Availability</span><strong>{item.season}</strong></div>
                      <div className="row"><span>Key markets</span><strong>{item.markets}</strong></div>
                      <div className="row"><span>Testing & documents</span><strong>{item.testing}</strong></div>
                    </div>
                  </details>
                </div>

                <div className="card-actions">
                  <Link className="btn btn-navy" to={`/products/${productSlug(item)}/`}>
                    VIEW DETAILS
                  </Link>
                  <a className="btn btn-navy grow" href="#inquiry" onClick={() => setInquiryId(item.id)}>
                    REQUEST QUOTE
                  </a>
                  <a
                    className="btn btn-wa"
                    href={waLink(`Hello Vaayu Elixir Trade Desk, I would like to enquire about: ${item.name}. Please share specifications, availability and indicative pricing.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WHATSAPP
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="fine">
            HS codes are shown at 6-digit level; the 8-digit Indian ITC-HS code is confirmed on the proforma invoice.
            Specifications, availability and minimum order quantities are indicative and are finalised in the proforma
            invoice and sales contract. Export of some commodities (for example onion and non-basmati rice) is subject
            to prevailing DGFT policy.
          </p>
        </section>

        {/* About + Process */}
        <section id="process" className="section alt">
          <div className="wrap">
            <div className="two" style={{ marginBottom: 36 }}>
              <div>
                <div className="eyebrow">About us</div>
                <h2 className="title" style={{ marginBottom: 12 }}>Vaayu Elixir Global Trade & Strategic Ventures</h2>
              </div>
              <p style={{ margin: 0, fontSize: 15, color: 'var(--text)' }}>
                We are a Mumbai-based merchant exporter of Indian rice, whole spices and fresh produce. We source from
                established growing regions, coordinate grading, packing and inspection, and ship through JNPT Nhava
                Sheva (sea) and Mumbai air cargo to importers and distributors worldwide.
              </p>
            </div>

            <div className="eyebrow">How we work</div>
            <h2 className="title" style={{ marginBottom: 20 }}>From inquiry to shipment</h2>
            <div className="steps">
              {PROCESS.map(([head, body], i) => (
                <div className="step" key={head}>
                  <div className="n">{i + 1}</div>
                  <b>{head}</b>
                  <span>{body}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Terms + Registrations */}
        <section id="terms" className="section wrap">
          <div className="eyebrow">Commercial terms</div>
          <h2 className="title" style={{ marginBottom: 20 }}>Terms, documents & registrations</h2>
          <div className="two">
            <div className="box">
              <h3>Trade terms</h3>
              <ul>
                <li><b>Incoterms:</b> FOB Nhava Sheva (JNPT), CFR, CIF, EXW</li>
                <li><b>Payment:</b> LC at sight, cash against documents or advance TT, confirmed per order</li>
                <li><b>Inspection:</b> SGS, Bureau Veritas or Intertek on request</li>
                <li><b>Samples:</b> on request; terms confirmed at inquiry</li>
                <li><b>Packing:</b> private label and custom packing on request</li>
                <li><b>Shipping documents:</b> commercial invoice, packing list, B/L or AWB, certificate of origin, phytosanitary and analysis certificates where applicable</li>
              </ul>
            </div>
            <div className="box">
              <h3>Registrations</h3>
              <ul>
                {REGISTRATIONS.map((r) => (
                  <li key={r.label}>
                    <b>{r.label}:</b> {r.value || 'number provided on request'}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="note">
            Agricultural prices and export policy change often. Some products (for example onion and non-basmati rice)
            can be affected by DGFT duties, minimum export prices or restrictions at short notice. Quotations are valid
            for the stated period and subject to prevailing policy.
          </div>
        </section>

        {/* FAQ */}
        <section className="section alt">
          <div className="wrap" style={{ maxWidth: 820 }}>
            <div className="eyebrow">FAQ</div>
            <h2 className="title" style={{ marginBottom: 20 }}>Common buyer questions</h2>
            {FAQS.map(([q, a]) => (
              <details className="faq" key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Inquiry */}
        <section id="inquiry" className="section wrap">
          <div className="eyebrow">Request a quotation</div>
          <h2 className="title" style={{ marginBottom: 20 }}>Send us your requirement</h2>
          <div className="inq">
            <RfqForm commodityId={inquiryId} />
            <div className="box contact-box">
              <h3>Trade desk</h3>
              <div><b>{CONTACT.name}</b></div>
              <div>Phone / WhatsApp: <a href={`tel:+${CONTACT.phoneRaw}`}>{CONTACT.phone}</a></div>
              <div>Email: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></div>
              <div>Web: <a href={`https://${CONTACT.web}`}>{CONTACT.web}</a></div>
              <div>{CONTACT.city}</div>
              <p className="privacy">We typically reply by email. For urgent requirements, use WhatsApp.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="wrap">
          <div className="fgrid">
            <div>
              <div className="fbrand">
                <VaayuLogo size={44} />
                <div>
                  <div className="brand-name">VAAYU <span>ELIXIR</span></div>
                  <div className="brand-sub">Global Trade & Strategic Ventures</div>
                </div>
              </div>
              <p>Moving Opportunities. Creating Value. Mumbai-based merchant exporter of Indian rice, spices and fresh produce via Nhava Sheva and Mumbai air cargo.</p>
            </div>
            <div>
              <h4>Trade desk</h4>
              <ul>
                <li><b>{CONTACT.name}</b></li>
                <li><a href={`tel:+${CONTACT.phoneRaw}`}>{CONTACT.phone}</a></li>
                <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
                <li>{CONTACT.city}</li>
              </ul>
            </div>
            <div>
              <h4>Explore</h4>
              <ul>
                <li><a href="#portfolio">Products</a></li>
                <li><a href="#process">How we work</a></li>
                <li><a href="#terms">Terms & registrations</a></li>
                <li><a href="#inquiry">Request a quote</a></li>
              </ul>
            </div>
          </div>
          <div className="fbottom">
            <div>© {new Date().getFullYear()} Vaayu Elixir Global Trade & Strategic Ventures. All rights reserved.</div>
            <div>PEOPLE | MARKETS | PARTNERSHIPS | A BRIGHTER TOMORROW</div>
          </div>
        </div>
      </footer>
    </div>
  );
}


const productSlug = (item) => ({
  'basmati-1121': '1121-basmati-rice',
  'basmati-1509': '1509-basmati-rice',
  'ir64-parboiled': 'ir64-parboiled-rice',
  'sona-masoori': 'sona-masoori-rice',
  'teja-s17-chilli': 's17-teja-red-chilli',
  'byadgi-chilli': 'byadgi-red-chilli',
  'green-cardamom': 'alleppey-green-cardamom',
  'fresh-moringa': 'odc3-moringa-drumsticks',
  'red-onion': 'indian-red-onion',
  'g4-green-chilli': 'g4-green-chilli',
  'g9-banana': 'g9-cavendish-banana',
  'pomegranate': 'bhagwa-pomegranate',
  'semi-husked-coconut': 'semi-husked-coconut',
}[item.id]);

export function ProductPage({ slug }) {
  const item = COMMODITIES.find((product) => productSlug(product) === slug);
  const [time, setTime] = useState({ bom: '--:--:--', dxb: '--:--:--', sin: '--:--:--' });

  useEffect(() => {
    if (!item) return;
    const title = `${item.name} Exporter India | Vaayu Elixir`;
    const description = `${item.desc} Mumbai-based Indian merchant exporter. Enquire for bulk supply, specifications, packaging and export quotations.`;
    document.title = title;
    const setMeta = (name, content, attr = 'name') => {
      let element = document.head.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };
    setMeta('description', description);
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', `https://www.vaayuelixir.com/products/${slug}/`, 'property');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `https://www.vaayuelixir.com/products/${slug}/`;
    let schema = document.getElementById('product-schema');
    if (!schema) {
      schema = document.createElement('script');
      schema.id = 'product-schema';
      schema.type = 'application/ld+json';
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: item.name,
      description,
      category: item.category,
      brand: { '@type': 'Brand', name: 'Vaayu Elixir' },
      countryOfOrigin: { "@type": "Country", name: "India" },
      manufacturer: {
        '@type': 'Organization',
        name: 'Vaayu Elixir Global Trade & Strategic Ventures',
        url: 'https://www.vaayuelixir.com/'
      }
    });
    return () => {
      document.title = 'Vaayu Elixir | Indian Rice, Spices & Fresh Produce Exporter, Mumbai';
      document.getElementById('product-schema')?.remove();
    };
  }, [item, slug]);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const fmt = (tz) => now.toLocaleTimeString('en-GB', { timeZone: tz, hour12: false });
      setTime({ bom: fmt('Asia/Kolkata'), dxb: fmt('Asia/Dubai'), sin: fmt('Asia/Singapore') });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  if (!item) {
    return <div className="ve"><style>{CSS}</style><main className="section wrap"><h1>Product not found</h1><p>The requested product page may have moved.</p><Link className="btn btn-navy" to="/">Return to homepage</Link></main></div>;
  }

  const related = COMMODITIES.filter((p) => p.id !== item.id && p.category === item.category).slice(0, 4);
  const description = item.desc;
  return (
    <div className="ve">
      <style>{CSS}</style>
      <div className="topbar"><div className="wrap"><span>MUMBAI, INDIA • MERCHANT EXPORTER • DISPATCH FROM JNPT NHAVA SHEVA & MUMBAI AIR CARGO</span><div className="clocks"><span>BOM <b>{time.bom}</b></span><span>DXB <b>{time.dxb}</b></span><span>SIN <b>{time.sin}</b></span><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></div></div></div>
      <nav className="nav"><div className="wrap">
        <Link className="brand" to="/"><VaayuLogo size={48}/><div><div className="brand-name">VAAYU <span>ELIXIR</span></div><div className="brand-sub">Global Trade & Strategic Ventures</div></div></Link>
        <div className="nav-links"><Link className="lnk" to="/#portfolio">Products</Link><Link className="lnk" to="/#process">How we work</Link><Link className="btn btn-navy" to="/#inquiry">REQUEST A QUOTE</Link></div>
      </div></nav>
      <main className="section wrap">
        <div className="product-detail">
          <div className="product-breadcrumb"><Link to="/">Home</Link> / <Link to="/#portfolio">Products</Link> / {item.name}</div>
          <div className="eyebrow">{item.category} • HS {item.hs}</div>
          <h1>{item.name} Exporter & Supplier from India</h1>
          <p className="lead">{description} Vaayu Elixir coordinates sourcing, grading, export packing and shipment from India for importers, distributors and food-service buyers.</p>
          <div className="btn-row"><a className="btn btn-gold" href="#product-inquiry">REQUEST A QUOTE</a><a className="btn btn-wa" href={waLink(`Hello Vaayu Elixir Trade Desk, I would like to enquire about ${item.name}. Please share specifications, availability and indicative pricing.`)} target="_blank" rel="noopener noreferrer">WHATSAPP</a></div>
          <h2>Product overview</h2>
          <div className="specs">
            <div className="row"><span>Botanical name</span><strong>{item.botanical}</strong></div>
            <div className="row"><span>Origin</span><strong>{item.origin}</strong></div>
            <div className="row"><span>Availability</span><strong>{item.season}</strong></div>
            <div className="row"><span>Shipment</span><strong>{item.mode}</strong></div>
            <div className="row"><span>Indicative minimum order</span><strong>{item.moq}</strong></div>
            <div className="row"><span>Target markets</span><strong>{item.markets}</strong></div>
          </div>
          <h2>Specifications</h2>
          <div className="specs">
            {item.specs.map(([label,value]) => <div className="row" key={label}><span>{label}</span><strong>{value}</strong></div>)}
            <div className="row"><span>Packaging</span><strong>{item.packaging}</strong></div>
            <div className="row"><span>Container loading</span><strong>{item.loading}</strong></div>
            <div className="row"><span>Testing & documents</span><strong>{item.testing}</strong></div>
          </div>
          <h2>Export supply from Mumbai, India</h2>
          <p className="desc">Vaayu Elixir is a Mumbai-based merchant exporter coordinating export shipments through JNPT Nhava Sheva for sea freight and Mumbai air cargo where suitable. Final grade, packing, quantity, documentation, shipment schedule and commercial terms are confirmed against the buyer's purchase requirements and the prevailing export policy.</p>
          <h2>Request bulk pricing and availability</h2>
          <p className="desc">Share your required quantity, destination country or port, preferred packing and Incoterm. Our trade desk can respond with the relevant specification and a quotation subject to availability.</p>
          <div id="product-inquiry"><RfqForm commodityId={item.id}/></div>
          <h2>Explore related products</h2>
          <div className="product-links">{related.map((p) => <Link key={p.id} to={`/products/${productSlug(p)}/`}>{p.name} →</Link>)}<Link to="/#portfolio">View all export products →</Link></div>
          <p className="fine">Specifications, availability and minimum order quantities are indicative and must be confirmed in the quotation and sales contract. Import requirements and Indian export policy vary by product and destination.</p>
        </div>
      </main>
      <footer className="footer"><div className="wrap"><div className="fbottom"><div>© {new Date().getFullYear()} Vaayu Elixir Global Trade & Strategic Ventures. All rights reserved.</div><div><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> • {CONTACT.phone}</div></div></div></footer>
    </div>
  );
}
