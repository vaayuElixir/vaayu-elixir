import React, { useState, useEffect } from 'react';

/* =====================================================================
   Keeps React stable when Google Translate rewrites the page text.
   ===================================================================== */
if (typeof window !== 'undefined' && typeof Node === 'function' && Node.prototype && !window.__veNodePatch) {
  window.__veNodePatch = true;
  const origRemove = Node.prototype.removeChild;
  Node.prototype.removeChild = function (child) {
    if (child.parentNode !== this) return child;
    return origRemove.apply(this, arguments);
  };
  const origInsert = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function (newNode, ref) {
    if (ref && ref.parentNode !== this) return newNode;
    return origInsert.apply(this, arguments);
  };
}

/* =====================================================================
   1) LANGUAGES  (edit this list to add or remove languages)
   ===================================================================== */
const LANGUAGES = [
  ['en', 'English'],
  ['ar', 'العربية (Arabic)'],
  ['fr', 'Français (French)'],
  ['es', 'Español (Spanish)'],
  ['pt', 'Português (Portuguese)'],
  ['ru', 'Русский (Russian)'],
  ['zh-CN', '中文 (Chinese)'],
  ['hi', 'हिन्दी (Hindi)'],
  ['de', 'Deutsch (German)'],
  ['it', 'Italiano (Italian)'],
  ['tr', 'Türkçe (Turkish)'],
  ['id', 'Bahasa Indonesia'],
  ['sw', 'Kiswahili (Swahili)'],
  ['bn', 'বাংলা (Bengali)'],
];

/* =====================================================================
   2) CERTIFICATES  (add or remove entries here)
   file: path inside the public/certificates folder (PDF or image)
   ===================================================================== */
const CERTIFICATES = [
  {
    title: 'APEDA Registration-cum-Membership Certificate (RCMC)',
    issuer: 'APEDA, Ministry of Commerce & Industry',
    detail: 'RCMC/APEDA/35225/2026-2027',
    valid: 'Valid for 2026-27',
    file: '/certificates/apeda-rcmc.pdf',
  },
  {
    title: 'Importer-Exporter Code (IEC)',
    issuer: 'DGFT, Government of India',
    detail: 'AAIPZ6521H',
    valid: '',
    file: '/certificates/iec-certificate.pdf',
  },
  {
    title: 'FSSAI License',
    issuer: 'Food Safety and Standards Authority of India',
    detail: '11526996001186',
    valid: '',
    file: '/certificates/fssai-license.pdf',
  },
  {
    title: 'GST Registration',
    issuer: 'Goods and Services Tax, Government of India',
    detail: '27AAIPZ6521H2Z9',
    valid: '',
    file: '/certificates/gst-registration.pdf',
  },
  {
    title: 'MSME Registration Certificate',
    issuer: 'Ministry of MSME, Government of India',
    detail: '',
    valid: '',
    file: '/certificates/msme-certificate.pdf',
  },
];

/* =====================================================================
   3) GALLERY  (add photos here; the section stays hidden while empty)
   Example entry:
   { src: '/gallery/container-loading-1.jpg', caption: 'Container loading at JNPT', category: 'Consignments' },
   ===================================================================== */
const GALLERY = [];

/* =====================================================================
   STYLES
   ===================================================================== */
const EXTRA_CSS = `
.lang{display:flex;align-items:center;gap:6px;border:1px solid #CBD5E1;border-radius:4px;padding:0 8px;background:#fff}
.lang:focus-within{border-color:var(--gold)}
.lang select{border:none;background:transparent;font:inherit;font-size:13px;font-weight:600;color:#334155;padding:9px 2px;cursor:pointer;max-width:150px;outline:none}
.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}
@media(max-width:520px){.lang select{max-width:92px;font-size:12px}.nav-links{gap:8px}.nav-links .btn{padding:10px;font-size:11px}}
.lang-note{position:fixed;left:12px;bottom:12px;z-index:90;max-width:min(92vw,360px);background:var(--navy);color:#F8FAFC;font-size:12.5px;padding:10px 12px;border-radius:6px;box-shadow:0 8px 20px rgba(0,0,0,.25);display:flex;gap:10px;align-items:flex-start}
.lang-note button{background:none;border:none;color:#94A3B8;cursor:pointer;font-size:14px;padding:0 2px}
body{top:0!important}
iframe.skiptranslate,.VIpgJd-ZVi9od-ORHb-OEVmcd{display:none!important}
#goog-gt-tt,.goog-te-balloon-frame{display:none!important}
.goog-text-highlight{background:none!important;box-shadow:none!important}

.cert-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,300px),1fr));gap:20px}
.cert{background:#fff;border:1px solid var(--line);border-radius:8px;padding:20px;display:flex;flex-direction:column;gap:10px;box-shadow:0 1px 3px rgba(0,0,0,.05)}
.cert-icon{width:42px;height:42px;border-radius:8px;background:#FEF9C3;color:#854D0E;display:flex;align-items:center;justify-content:center}
.cert h3{margin:0;font-family:Georgia,serif;font-size:17px;color:var(--navy)}
.cert .issuer{font-size:13px;color:var(--muted)}
.cert .num{font-family:ui-monospace,monospace;font-size:13px;color:var(--ink);word-break:break-all}
.cert .valid{font-size:12px;color:var(--text)}
.cert img{width:100%;border:1px solid var(--line);border-radius:6px}
.cert .btn{margin-top:auto}

.g-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,260px),1fr));gap:14px}
.g-item{position:relative;padding:0;border:1px solid var(--line);border-radius:8px;overflow:hidden;cursor:zoom-in;background:#fff;aspect-ratio:4/3;display:block;width:100%}
.g-item img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .3s}
.g-item:hover img{transform:scale(1.04)}
.g-cap{position:absolute;left:0;right:0;bottom:0;padding:22px 12px 10px;background:linear-gradient(transparent,rgba(7,14,26,.85));color:#fff;font-size:12.5px;text-align:left}
.lb{position:fixed;inset:0;z-index:200;background:rgba(7,14,26,.92);display:flex;align-items:center;justify-content:center;padding:20px}
.lb figure{margin:0;max-width:min(96vw,1100px);max-height:92vh;display:flex;flex-direction:column;align-items:center;gap:10px}
.lb img{max-width:100%;max-height:78vh;object-fit:contain;border-radius:4px}
.lb figcaption{color:#E2E8F0;font-size:14px;text-align:center}
.lb-btn{position:absolute;background:rgba(255,255,255,.14);color:#fff;border:none;border-radius:50%;width:44px;height:44px;font-size:22px;cursor:pointer}
.lb-close{top:16px;right:16px}
.lb-prev{left:16px;top:50%;transform:translateY(-50%)}
.lb-next{right:16px;top:50%;transform:translateY(-50%)}
`;

/* =====================================================================
   LANGUAGE SELECTOR (uses Google Translate; loads only when needed)
   ===================================================================== */
const readLang = () => {
  const m = document.cookie.match(/(?:^|;\s*)googtrans=\/[^/]*\/([^;]+)/);
  return m ? decodeURIComponent(m[1]) : 'en';
};

let gtRequested = false;
function loadGoogleTranslate() {
  if (gtRequested || typeof document === 'undefined') return;
  gtRequested = true;
  let host = document.getElementById('google_translate_element');
  if (!host) {
    host = document.createElement('div');
    host.id = 'google_translate_element';
    host.setAttribute('style', 'position:absolute;left:-9999px;top:0;height:0;overflow:hidden');
    document.body.appendChild(host);
  }
  window.googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'en',
        includedLanguages: LANGUAGES.map((l) => l[0]).join(','),
        autoDisplay: false,
      },
      'google_translate_element'
    );
  };
  const s = document.createElement('script');
  s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  s.async = true;
  document.body.appendChild(s);
}

function changeLang(code) {
  const host = window.location.hostname;
  const root = host.replace(/^www\./, '');
  const past = 'Thu, 01 Jan 1970 00:00:00 GMT';
  [null, host, '.' + host, '.' + root].forEach((d) => {
    const domainPart = d ? '; domain=' + d : '';
    document.cookie = 'googtrans=; expires=' + past + '; path=/' + domainPart;
  });
  if (code !== 'en') {
    document.cookie = 'googtrans=/en/' + code + '; path=/';
  }
  window.location.reload();
}

export function LanguageSelector() {
  const [lang, setLang] = useState('en');
  const [showNote, setShowNote] = useState(true);

  useEffect(() => {
    const current = readLang();
    setLang(current);
    if (current !== 'en') loadGoogleTranslate();
  }, []);

  return (
    <>
      <style>{EXTRA_CSS}</style>
      <div className="lang notranslate" translate="no">
        <label className="sr" htmlFor="lang-select">Language</label>
        <span aria-hidden="true">🌐</span>
        <select
          id="lang-select"
          value={lang}
          onChange={(e) => changeLang(e.target.value)}
          aria-label="Select language"
          title="Automatic translation. English is the official version."
        >
          {LANGUAGES.map(([code, name]) => (
            <option key={code} value={code}>{name}</option>
          ))}
        </select>
      </div>
      {lang !== 'en' && showNote && (
        <div className="lang-note" role="status">
          <span>Automatically translated. English is the official version.</span>
          <button onClick={() => setShowNote(false)} aria-label="Dismiss">✕</button>
        </div>
      )}
    </>
  );
}

/* =====================================================================
   CERTIFICATIONS SECTION
   ===================================================================== */
const isImage = (f) => /\.(jpe?g|png|webp)$/i.test(f);

export function CertificationsSection() {
  return (
    <section id="certifications" className="section wrap">
      <style>{EXTRA_CSS}</style>
      <div className="eyebrow">Credentials</div>
      <h2 className="title" style={{ marginBottom: 20 }}>Certifications & registrations</h2>
      <div className="cert-grid">
        {CERTIFICATES.map((c) => (
          <article className="cert" key={c.title}>
            {isImage(c.file) ? (
              <a href={c.file} target="_blank" rel="noopener noreferrer">
                <img src={c.file} alt={c.title} loading="lazy" decoding="async" />
              </a>
            ) : (
              <span className="cert-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="9" y1="13" x2="15" y2="13" />
                  <line x1="9" y1="17" x2="15" y2="17" />
                </svg>
              </span>
            )}
            <h3>{c.title}</h3>
            <div className="issuer">{c.issuer}</div>
            {c.detail && <div className="num notranslate">{c.detail}</div>}
            {c.valid && <div className="valid">{c.valid}</div>}
            <a className="btn btn-navy" href={c.file} target="_blank" rel="noopener noreferrer">
              {isImage(c.file) ? 'VIEW CERTIFICATE' : 'VIEW CERTIFICATE (PDF)'}
            </a>
          </article>
        ))}
      </div>
      <p className="fine">Copies are provided for buyer verification. Original documents are available on request.</p>
    </section>
  );
}

/* =====================================================================
   GALLERY SECTION
   ===================================================================== */
export function GallerySection() {
  const [cat, setCat] = useState('ALL');
  const [open, setOpen] = useState(null);

  const categories = ['ALL', ...Array.from(new Set(GALLERY.map((g) => g.category)))];
  const shown = cat === 'ALL' ? GALLERY : GALLERY.filter((g) => g.category === cat);

  useEffect(() => {
    if (open === null) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') setOpen((i) => (i + 1) % shown.length);
      if (e.key === 'ArrowLeft') setOpen((i) => (i - 1 + shown.length) % shown.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, shown.length]);

  if (GALLERY.length === 0) return null;

  return (
    <section id="gallery" className="section wrap">
      <style>{EXTRA_CSS}</style>
      <div className="sec-head">
        <div>
          <div className="eyebrow">Our work</div>
          <h2 className="title">Gallery: products & consignments</h2>
        </div>
        <div className="pills">
          {categories.map((c) => (
            <button key={c} className={`pill${cat === c ? ' on' : ''}`} onClick={() => setCat(c)}>
              {c.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="g-grid">
        {shown.map((g, i) => (
          <button key={g.src} className="g-item" onClick={() => setOpen(i)} aria-label={`Open photo: ${g.caption}`}>
            <img src={g.src} alt={g.caption} loading="lazy" decoding="async" />
            <span className="g-cap">{g.caption}</span>
          </button>
        ))}
      </div>

      {open !== null && shown[open] && (
        <div className="lb" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={() => setOpen(null)}>
          <button className="lb-btn lb-close" onClick={() => setOpen(null)} aria-label="Close">✕</button>
          {shown.length > 1 && (
            <button
              className="lb-btn lb-prev"
              onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + shown.length) % shown.length); }}
              aria-label="Previous photo"
            >‹</button>
          )}
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={shown[open].src} alt={shown[open].caption} />
            <figcaption>{shown[open].caption}</figcaption>
          </figure>
          {shown.length > 1 && (
            <button
              className="lb-btn lb-next"
              onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % shown.length); }}
              aria-label="Next photo"
            >›</button>
          )}
        </div>
      )}
    </section>
  );
}
