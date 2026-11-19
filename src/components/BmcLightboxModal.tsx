import { X, TrendingUp, ShieldCheck, Building2, Users } from 'lucide-react';
import { ASSETS } from '../data/presentationData';
import { soundEngine } from '../utils/sound';

interface BmcLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BmcLightboxModal({ isOpen, onClose }: BmcLightboxModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="SADEEM Business Model Canvas"
    >
      <div className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-slate-700 bg-[#0A1022] shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
          <div>
            <h2 className="font-display text-lg font-bold text-white">
              SADEEM Business Model Canvas (V2 · Investment-Ready)
            </h2>
            <p className="text-xs text-slate-400">
              Ethical Ad-Free SaaS · 70% B2B Institutional Subscriptions · 30% B2C Family Plans
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              soundEngine.playClick();
              onClose();
            }}
            className="rounded-lg border border-slate-700 bg-slate-900 p-2 text-slate-300 hover:bg-slate-800 hover:text-white cursor-pointer"
            aria-label="Close Business Model Canvas modal"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="custom-scrollbar overflow-y-auto p-6 space-y-5">
          <div className="overflow-hidden rounded-xl border border-slate-700/70 bg-white">
            <img
              src={ASSETS.bmcFull}
              alt="SADEEM Business Model Canvas designed by Hasni Wiam"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
              <div className="flex items-center gap-2 font-semibold text-cyan-300">
                <Building2 className="h-4 w-4" />
                <span>70% B2B Institutional Engine</span>
              </div>
              <p className="mt-2 leading-relaxed text-slate-300">
                Monthly/annual per-student licenses for primary schools, private tutoring centers,
                and international Arabic academies with curriculum-aligned teacher dashboards.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
              <div className="flex items-center gap-2 font-semibold text-amber-300">
                <Users className="h-4 w-4" />
                <span>30% B2C Family Sanctuary</span>
              </div>
              <p className="mt-2 leading-relaxed text-slate-300">
                Free core cosmic worlds plus a paid monthly tier for full AI Nahw tutoring and
                on-device talent analytics — preserving 100% ad-free child trust.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
              <div className="flex items-center gap-2 font-semibold text-emerald-300">
                <ShieldCheck className="h-4 w-4" />
                <span>Unit Economics &amp; IP Status</span>
              </div>
              <p className="mt-2 leading-relaxed text-slate-300">
                On-device talent computation keeps cloud costs low up to 1M+ users. Break-even
                projected in 12–18 months. University-incubated with IP filing in progress.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-xs text-slate-300">
            <span className="inline-flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-amber-300" />
              <span>Why Ad-Free? Ad-tech violates child privacy and blocks school ministry procurement.</span>
            </span>
            <span className="font-mono-tabular text-slate-400">ID: SAIF120170</span>
          </div>
        </div>
      </div>
    </div>
  );
}
