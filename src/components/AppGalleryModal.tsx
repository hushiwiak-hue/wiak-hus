import { useState } from 'react';
import { X, CheckCircle2, Smartphone } from 'lucide-react';
import { ALL_APP_SCREENS, type AppScreenEntry } from '../data/presentationData';
import { soundEngine } from '../utils/sound';

interface AppGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CATEGORIES: Array<'All' | AppScreenEntry['category']> = [
  'All',
  'Cosmic Galaxy',
  'Arabic & AI',
  'Action Games',
  'Science & STEM',
  'Talent & Parents',
];

export function AppGalleryModal({ isOpen, onClose }: AppGalleryModalProps) {
  const [filter, setFilter] = useState<'All' | AppScreenEntry['category']>('All');
  const [selected, setSelected] = useState<AppScreenEntry>(ALL_APP_SCREENS[0]);

  if (!isOpen) return null;

  const filtered =
    filter === 'All'
      ? ALL_APP_SCREENS
      : ALL_APP_SCREENS.filter((s) => s.category === filter);

  const handleSelectCategory = (cat: 'All' | AppScreenEntry['category']) => {
    soundEngine.playClick();
    setFilter(cat);
    const nextList =
      cat === 'All' ? ALL_APP_SCREENS : ALL_APP_SCREENS.filter((s) => s.category === cat);
    if (nextList.length > 0 && !nextList.some((s) => s.id === selected.id)) {
      setSelected(nextList[0]);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="Complete SADEEM App Screen Gallery"
    >
      <div className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-slate-700 bg-[#0A1022] shadow-2xl">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-400/10 text-amber-300">
              <Smartphone className="h-4 w-4" />
            </div>
            <div>
              <h2 className="font-display text-lg font-bold text-white">
                Complete SADEEM Application Walkthrough ({ALL_APP_SCREENS.length} Real Screens)
              </h2>
              <p className="text-xs text-slate-400">
                Every high-resolution interface from the field-tested MVP V2 mobile build
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-950 p-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleSelectCategory(cat)}
                  className={`rounded-md px-2.5 py-1 text-xs font-medium transition whitespace-nowrap cursor-pointer ${
                    filter === cat
                      ? 'bg-amber-400 text-slate-950 font-semibold'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                onClose();
              }}
              className="rounded-lg border border-slate-700 bg-slate-900 p-2 text-slate-300 hover:bg-slate-800 hover:text-white cursor-pointer"
              aria-label="Close app screen gallery"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Mobile Category Filter */}
        <div className="flex md:hidden items-center gap-1.5 overflow-x-auto border-b border-slate-800 px-4 py-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => handleSelectCategory(cat)}
              className={`rounded-md px-2.5 py-1 text-xs font-medium whitespace-nowrap shrink-0 cursor-pointer ${
                filter === cat
                  ? 'bg-amber-400 text-slate-950 font-semibold'
                  : 'bg-slate-900 text-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Split Body: Grid of all screens + Focused Inspector */}
        <div className="grid flex-1 grid-cols-1 lg:grid-cols-12 overflow-hidden">
          {/* Left: Scrollable Grid of filtered screens */}
          <div className="custom-scrollbar lg:col-span-7 overflow-y-auto p-5 grid grid-cols-2 sm:grid-cols-3 gap-3 content-start border-b lg:border-b-0 lg:border-r border-slate-800">
            {filtered.map((screen) => {
              const isSelected = selected.id === screen.id;
              return (
                <button
                  key={screen.id}
                  type="button"
                  onClick={() => {
                    soundEngine.playClick();
                    setSelected(screen);
                  }}
                  className={`group flex flex-col overflow-hidden rounded-xl border text-left transition cursor-pointer ${
                    isSelected
                      ? 'border-amber-400 bg-slate-900 shadow-lg'
                      : 'border-slate-800 bg-slate-950/70 hover:border-slate-600'
                  }`}
                >
                  <div className="relative aspect-[9/15] w-full overflow-hidden bg-slate-950">
                    <img
                      src={screen.image}
                      alt={screen.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-2.5">
                    <p className="text-[10px] font-medium text-amber-300 truncate">
                      {screen.category}
                    </p>
                    <p className="mt-0.5 text-xs font-semibold text-white line-clamp-1">
                      {screen.title}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Screen Inspector */}
          <div className="custom-scrollbar lg:col-span-5 overflow-y-auto p-6 flex flex-col justify-between gap-4 bg-[#070C1B]">
            <div className="flex flex-col items-center">
              <div className="relative w-48 overflow-hidden rounded-2xl border-2 border-slate-700 bg-slate-950 p-1.5 shadow-2xl">
                <img
                  src={selected.image}
                  alt={selected.title}
                  referrerPolicy="no-referrer"
                  className="aspect-[9/16] w-full rounded-xl object-cover object-top"
                />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2 text-xs">
                <span className="font-semibold text-amber-300">{selected.category}</span>
                <span className="font-mono-tabular text-cyan-300">{selected.badge}</span>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-white">{selected.title}</h3>
                <p dir="rtl" className="text-right text-sm font-medium text-slate-400 mt-0.5">
                  {selected.arabicTitle}
                </p>
              </div>

              <p className="text-sm leading-relaxed text-slate-200">{selected.description}</p>

              <div className="space-y-1.5 border-t border-slate-800 pt-3">
                <p className="text-xs font-semibold text-slate-400">Key Capabilities</p>
                {selected.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-xs text-emerald-300">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
