import { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import {
  X,
  Download,
  Printer,
  Mail,
  MapPin,
  Award,
  BookOpen,
  Shield,
  Leaf,
  CheckCircle2,
  Loader2,
  Smartphone,
  TrendingUp,
  Phone,
  MessageCircle,
  Instagram,
  Globe,
} from 'lucide-react';
import {
  ALL_APP_SCREENS,
  ASSETS,
  COMPARISON_ROWS,
  FOUNDER_CONTACT,
  REFERENCES_LIST,
  ROADMAP_STEPS,
  type AppScreenEntry,
} from '../data/presentationData';
import { soundEngine } from '../utils/sound';
import { generateSadeemBrochurePdf } from '../utils/pdfBrochure';

interface DigitalBrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DigitalBrochureModal({ isOpen, onClose }: DigitalBrochureModalProps) {
  const [isExporting, setIsExporting] = useState(false);
  const [exportStatus, setExportStatus] = useState<string | null>(null);
  const [screenFilter, setScreenFilter] = useState<'All' | AppScreenEntry['category']>('All');
  const [websiteQrUrl, setWebsiteQrUrl] = useState<string>('');

  useEffect(() => {
    if (!isOpen) return;
    let active = true;
    QRCode.toDataURL(FOUNDER_CONTACT.websiteUrl, {
      width: 320,
      margin: 1,
      errorCorrectionLevel: 'M',
      color: { dark: '#050814', light: '#FFFFFF' },
    })
      .then((url) => {
        if (active) setWebsiteQrUrl(url);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredScreens =
    screenFilter === 'All'
      ? ALL_APP_SCREENS
      : ALL_APP_SCREENS.filter((s) => s.category === screenFilter);

  const handleDownloadPdf = async () => {
    setIsExporting(true);
    setExportStatus(null);
    soundEngine.playClick();
    try {
      await generateSadeemBrochurePdf();
      soundEngine.playSuccess();
      setExportStatus('Saved SADEEM_SAIF2026_Investor_Brochure.pdf');
    } catch {
      soundEngine.playAlert();
      setExportStatus('Could not generate PDF automatically — try Print View.');
    } finally {
      setIsExporting(false);
    }
  };

  const handlePrint = () => {
    soundEngine.playClick();
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-md print-only-container"
      role="dialog"
      aria-modal="true"
      aria-label="SADEEM Digital Brochure and References"
    >
      <div className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-slate-700 bg-[#0A1022] shadow-2xl print-only-container">
        {/* Modal Action Bar (hidden during print) */}
        <div className="no-print flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 px-6 py-4">
          <div>
            <h2 className="font-display text-lg font-bold text-white">
              SADEEM · Executive Digital Brochure &amp; Complete App Dossier
            </h2>
            <p className="text-xs text-slate-400">
              SAIF 2026 Competition Brief · {ALL_APP_SCREENS.length} Verified App Screens · BMC · References
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            {exportStatus && (
              <span className="text-xs font-medium text-emerald-300">{exportStatus}</span>
            )}
            <button
              type="button"
              onClick={handleDownloadPdf}
              disabled={isExporting}
              className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-amber-300 disabled:opacity-60 whitespace-nowrap shrink-0 cursor-pointer"
            >
              {isExporting ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <Download className="h-3.5 w-3.5" />
              )}
              <span>{isExporting ? 'Generating PDF...' : 'Download PDF Brochure'}</span>
            </button>
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs font-medium text-slate-200 transition hover:bg-slate-800 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Print View</span>
            </button>
            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                onClose();
              }}
              className="rounded-lg border border-slate-700 bg-slate-900 p-2 text-slate-300 hover:bg-slate-800 hover:text-white cursor-pointer"
              aria-label="Close Digital Brochure"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Printable Brochure Body */}
        <div className="custom-scrollbar overflow-y-auto p-6 sm:p-8 space-y-7 print-only-container">
          {/* SAIF Official Header Banner */}
          <div className="overflow-hidden rounded-xl border border-slate-800 bg-[#b85242] p-2 print-card">
            <img
              src={ASSETS.saifHeaderStrip}
              alt="SAIF 2026 Security and Innovation Fair Official Partners"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Executive Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <p className="text-xs font-semibold tracking-wide text-amber-400 print-text-muted">
                SAIF 2026 · Security &amp; Innovation Fair · Participant ID: SAIF120170
              </p>
              <h1 className="mt-1 font-display text-2xl sm:text-3xl font-extrabold text-white print-text-dark">
                SADEEM: Igniting Young Minds Safely
              </h1>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-300 print-text-muted max-w-2xl">
                A Cyber-Secure Interactive Educational Mobile App Transforming Children’s Screen Time
                through Multi-Domain Cosmic Learning, Safe AI Arabic Grammar (Nahw) Tutoring,
                On-Device Talent Discovery, and PIN-Protected Parental Controls.
              </p>
            </div>
            <img
              src={ASSETS.appProfile1}
              alt="SADEEM Mascot"
              referrerPolicy="no-referrer"
              className="h-24 w-24 rounded-2xl border border-slate-700 object-cover object-top shrink-0"
            />
          </div>

          {/* Validated Field Trial Snapshot */}
          <div>
            <h2 className="font-display text-base font-bold text-white print-text-dark mb-3">
              01. Classroom Field Validation (Allaoua Yahia Primary School · N = 5 Pupils)
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { stat: '92%', label: 'First-Try Nahw Accuracy', sub: 'AI parser vs. traditional drills' },
                { stat: '100% (5/5)', label: 'Local Talent Discovery', sub: 'Zero cloud data exposure' },
                { stat: '5,155 XP', label: '988 Stars · 4-Day Streak', sub: '100% active engagement' },
                { stat: '100%', label: 'Ad-Free & PIN Locked', sub: '3-try tamper lockout verified' },
              ].map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-xl border border-slate-800 bg-slate-900/75 p-4 print-card"
                >
                  <p className="font-mono-tabular text-2xl font-bold text-amber-300 print-text-dark">
                    {kpi.stat}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-white print-text-dark">{kpi.label}</p>
                  <p className="mt-0.5 text-[11px] text-slate-400 print-text-muted">{kpi.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Complete 14-Screen App Walkthrough inside Brochure */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="inline-flex items-center gap-2 font-display text-base font-bold text-white print-text-dark">
                  <Smartphone className="h-4 w-4 text-amber-300" />
                  <span>02. Complete Application Walkthrough ({ALL_APP_SCREENS.length} Real Screens)</span>
                </h2>
                <p className="text-xs text-slate-400 print-text-muted">
                  Every screen from the SADEEM V2 prototype with functional breakdown
                </p>
              </div>

              <div className="no-print flex flex-wrap items-center gap-1 rounded-lg border border-slate-800 bg-slate-950 p-1">
                {(
                  [
                    'All',
                    'Cosmic Galaxy',
                    'Arabic & AI',
                    'Action Games',
                    'Science & STEM',
                    'Talent & Parents',
                  ] as const
                ).map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        soundEngine.playClick();
                        setScreenFilter(cat);
                      }}
                      className={`rounded-md px-2.5 py-1 text-[11px] font-medium transition cursor-pointer ${
                        screenFilter === cat
                          ? 'bg-amber-400 text-slate-950 font-semibold'
                          : 'text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredScreens.map((screen, idx) => (
                <div
                  key={screen.id}
                  className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/75 p-4 print-card"
                >
                  <div className="w-24 sm:w-28 shrink-0 overflow-hidden rounded-lg border border-slate-700 bg-slate-950">
                    <img
                      src={screen.image}
                      alt={screen.title}
                      referrerPolicy="no-referrer"
                      className="aspect-[9/16] w-full object-cover object-top"
                    />
                  </div>
                  <div className="flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex items-center justify-between gap-2 text-[10px]">
                        <span className="font-semibold text-amber-300 print-text-dark">
                          {screen.category}
                        </span>
                        <span className="font-mono-tabular text-cyan-300 print-text-muted">
                          {screen.badge}
                        </span>
                      </div>
                      <h3 className="mt-1 font-display text-sm font-bold text-white print-text-dark">
                        {idx + 1}. {screen.title}
                      </h3>
                      <p dir="rtl" className="text-right text-[11px] text-slate-400 print-text-muted">
                        {screen.arabicTitle}
                      </p>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-300 print-text-muted">
                        {screen.description}
                      </p>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 border-t border-slate-800 pt-2 text-[10px] text-emerald-300 print-text-dark">
                      {screen.highlights.map((h) => (
                        <span key={h} className="inline-flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3 shrink-0" />
                          <span>{h}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture + Sustainability + Vision 2030 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-800 bg-slate-900/75 p-4 print-card">
              <h3 className="inline-flex items-center gap-2 font-display text-sm font-bold text-white print-text-dark">
                <Shield className="h-4 w-4 text-cyan-300" />
                <span>03. Three-Layer Cyber-Secure Architecture</span>
              </h3>
              <ul className="mt-2.5 space-y-1.5 text-xs leading-relaxed text-slate-300 print-text-muted">
                <li>• Cross-platform mobile app built on React Native &amp; Expo (iOS &amp; Android).</li>
                <li>• Content-filtered AI Nahw Tutor preventing unsafe or off-topic responses.</li>
                <li>• On-device behavioral talent engine (Leadership, Language, Movement) with zero cloud upload.</li>
                <li>• Encrypted 4-digit PIN parental gate (Expo SecureStore) with 3-attempt lockout.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/75 p-4 print-card">
              <h3 className="inline-flex items-center gap-2 font-display text-sm font-bold text-white print-text-dark">
                <Leaf className="h-4 w-4 text-emerald-300" />
                <span>04. Sustainability, Vision 2030 &amp; Scaling</span>
              </h3>
              <ul className="mt-2.5 space-y-1.5 text-xs leading-relaxed text-slate-300 print-text-muted">
                <li>• Green edge computing reduces cloud server load as active learners scale to 1M+.</li>
                <li>• Advances Vision 2030 Human Capability Development &amp; global Arabic empowerment.</li>
                <li>• 70% B2B school &amp; academy licenses + 30% B2C family plans (100% ad-free).</li>
                <li>• Roadmap: {ROADMAP_STEPS.map((r) => r.year).join(' → ')} (EN/FR interfaces + AI Speech).</li>
              </ul>
            </div>
          </div>

          {/* Competitive Edge + Business Model Canvas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            <div className="lg:col-span-6 rounded-xl border border-slate-800 bg-slate-900/75 p-4 print-card">
              <h3 className="inline-flex items-center gap-2 font-display text-sm font-bold text-white print-text-dark mb-3">
                <TrendingUp className="h-4 w-4 text-amber-300" />
                <span>05. Competitive Advantage Matrix</span>
              </h3>
              <div className="divide-y divide-slate-800 text-xs">
                {COMPARISON_ROWS.map((row) => (
                  <div key={row.criterion} className="py-2 flex items-center justify-between gap-2">
                    <span className="font-semibold text-white print-text-dark">{row.criterion}</span>
                    <span className="text-emerald-300 print-text-dark text-right">{row.sadeem}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 rounded-xl border border-slate-800 bg-slate-900/75 p-4 print-card flex flex-col justify-between">
              <h3 className="font-display text-sm font-bold text-white print-text-dark mb-2">
                06. Business Model Canvas (70% B2B · 30% B2C)
              </h3>
              <div className="overflow-hidden rounded-lg border border-slate-700 bg-white">
                <img
                  src={ASSETS.bmcFull}
                  alt="SADEEM Business Model Canvas"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Scientific & Technical References */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/75 p-4 print-card">
            <h3 className="inline-flex items-center gap-2 font-display text-sm font-bold text-white print-text-dark">
              <BookOpen className="h-4 w-4 text-amber-300" />
              <span>07. Scientific, Legal &amp; Security References</span>
            </h3>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
              {REFERENCES_LIST.map((ref) => (
                <div
                  key={ref.code}
                  className="rounded-lg border border-slate-800 bg-slate-950/60 p-3 print-card"
                >
                  <p className="font-mono-tabular text-xs font-bold text-cyan-300 print-text-dark">
                    {ref.code}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-white print-text-dark">
                    {ref.title}
                  </p>
                  <p className="mt-1 text-[11px] leading-relaxed text-slate-400 print-text-muted">
                    {ref.relevance}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Founder Direct Contact Card */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 rounded-xl border border-amber-400/35 bg-slate-900/85 p-5 print-card">
            <div className="space-y-1.5 flex-1">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-300 print-text-dark">
                <Award className="h-4 w-4" />
                <span>Founder &amp; Lead Engineer · University Incubated Project</span>
              </div>
              <h4 className="font-display text-base font-bold text-white print-text-dark">
                {FOUNDER_CONTACT.name}
              </h4>
              <p className="inline-flex items-center gap-1.5 text-xs text-slate-300 print-text-muted">
                <MapPin className="h-3.5 w-3.5 text-cyan-300 shrink-0" />
                <span>{FOUNDER_CONTACT.affiliation} · Computer Science Undergraduate</span>
              </p>
              <p className="font-mono-tabular text-[11px] text-slate-400 print-text-muted">
                SAIF 2026 Participant ID: {FOUNDER_CONTACT.saifId} · IP Filing in Progress
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex flex-col items-start md:items-end gap-2 text-xs">
                <a
                  href={`mailto:${FOUNDER_CONTACT.email}`}
                  className="inline-flex items-center gap-1.5 font-mono-tabular font-semibold text-cyan-300 hover:text-cyan-200 print-text-dark"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0" />
                  <span>{FOUNDER_CONTACT.email}</span>
                </a>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={`tel:${FOUNDER_CONTACT.phoneHref}`}
                    className="inline-flex items-center gap-1.5 font-mono-tabular font-semibold text-slate-200 hover:text-white print-text-dark"
                  >
                    <Phone className="h-3.5 w-3.5 text-amber-300 shrink-0" />
                    <span>{FOUNDER_CONTACT.phoneDisplay}</span>
                  </a>
                  <a
                    href={FOUNDER_CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-emerald-300 hover:text-emerald-200 print-text-dark"
                  >
                    <MessageCircle className="h-3.5 w-3.5 shrink-0" />
                    <span>WhatsApp</span>
                  </a>
                </div>
                <a
                  href={FOUNDER_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono-tabular font-semibold text-pink-300 hover:text-pink-200 print-text-dark"
                >
                  <Instagram className="h-3.5 w-3.5 shrink-0" />
                  <span>{FOUNDER_CONTACT.instagramHandle}</span>
                </a>
                <a
                  href={FOUNDER_CONTACT.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono-tabular text-[11px] text-amber-300 hover:text-amber-200 print-text-dark"
                >
                  <Globe className="h-3.5 w-3.5 shrink-0" />
                  <span>Live Pitch Website</span>
                </a>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                {websiteQrUrl && (
                  <a
                    href={FOUNDER_CONTACT.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Scan to open SADEEM Live Interactive Pitch Website"
                    className="flex flex-col items-center gap-1 rounded-xl border border-slate-700 bg-white p-1.5 shadow-md transition hover:scale-105"
                  >
                    <img
                      src={websiteQrUrl}
                      alt="SADEEM Live Website QR Code"
                      className="h-16 w-16 object-contain"
                    />
                    <span className="text-[9px] font-bold text-slate-900">LIVE PITCH</span>
                  </a>
                )}

                <a
                  href={FOUNDER_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Scan or click to open Instagram (${FOUNDER_CONTACT.instagramHandle})`}
                  className="flex flex-col items-center gap-1 rounded-xl border border-slate-700 bg-white p-1.5 shadow-md transition hover:scale-105"
                >
                  <img
                    src={ASSETS.instagramQr}
                    alt={`Instagram QR Code for ${FOUNDER_CONTACT.instagramHandle}`}
                    referrerPolicy="no-referrer"
                    className="h-16 w-16 rounded object-cover"
                  />
                  <span className="text-[9px] font-bold text-slate-900">INSTAGRAM</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
