import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  FileText,
  Sparkles,
  LayoutGrid,
  Smartphone,
  QrCode,
} from 'lucide-react';
import { ALL_APP_SCREENS, SLIDES } from './data/presentationData';
import { EntranceSequence } from './components/EntranceSequence';
import { Slides } from './components/Slides';
import { DigitalBrochureModal } from './components/DigitalBrochureModal';
import { BmcLightboxModal } from './components/BmcLightboxModal';
import { AppGalleryModal } from './components/AppGalleryModal';
import { WebsiteQrModal } from './components/WebsiteQrModal';
import { soundEngine } from './utils/sound';

export default function App() {
  const [showEntrance, setShowEntrance] = useState(true);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [isBmcOpen, setIsBmcOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isQrOpen, setIsQrOpen] = useState(false);

  const currentSlide = SLIDES[currentSlideIndex];

  const goToSlide = useCallback((index: number, withSound = true) => {
    const safeIndex = Math.max(0, Math.min(SLIDES.length - 1, index));
    if (withSound) {
      soundEngine.playTransition();
    }
    setCurrentSlideIndex(safeIndex);
  }, []);

  const handleNext = useCallback(() => {
    if (currentSlideIndex < SLIDES.length - 1) {
      goToSlide(currentSlideIndex + 1, true);
    }
  }, [currentSlideIndex, goToSlide]);

  const handlePrev = useCallback(() => {
    if (currentSlideIndex > 0) {
      goToSlide(currentSlideIndex - 1, true);
    }
  }, [currentSlideIndex, goToSlide]);

  // Manual keyboard navigation (Left / Right arrows + M for sound)
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (isBrochureOpen || isBmcOpen || isGalleryOpen || isQrOpen) {
        if (e.key === 'Escape') {
          setIsBrochureOpen(false);
          setIsBmcOpen(false);
          setIsGalleryOpen(false);
          setIsQrOpen(false);
        }
        return;
      }
      if (showEntrance) return;

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key.toLowerCase() === 'm') {
        setSoundEnabled((prev) => {
          const next = !prev;
          soundEngine.setEnabled(next);
          return next;
        });
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handleNext, handlePrev, isBmcOpen, isBrochureOpen, isGalleryOpen, isQrOpen, showEntrance]);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    soundEngine.setEnabled(next);
    if (next) soundEngine.playClick();
  };

  const handleEntranceComplete = useCallback(() => {
    setShowEntrance(false);
    setCurrentSlideIndex(0);
  }, []);

  const handleReplayAll = () => {
    soundEngine.playTransition();
    setCurrentSlideIndex(0);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-between bg-[#050814] text-slate-100 overflow-x-hidden">
      {/* Animated Child & Star Entrance Sequence */}
      {showEntrance && <EntranceSequence onComplete={handleEntranceComplete} />}

      {/* ============================================================
          FIXED TOP HEADER (SAIF 2026 Competition Header)
         ============================================================ */}
      <header className="no-print relative z-30 flex w-full items-center justify-between gap-4 border-b border-slate-800/80 bg-[#060914]/90 px-4 sm:px-6 py-3 backdrop-blur-md">
        {/* Zone 1: SAIF 2026 & SADEEM Brand Mark */}
        <div className="flex items-center gap-3 whitespace-nowrap shrink-0">
          <svg
            className="h-7 w-7 shrink-0 text-amber-400"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M16 2L28 7V15.5C28 22.8 22.9 28.6 16 30C9.1 28.6 4 22.8 4 15.5V7L16 2Z"
              stroke="currentColor"
              strokeWidth="2"
              fill="rgba(251, 191, 36, 0.12)"
            />
            <path
              d="M16 8.5L18.2 13.1L23.2 13.8L19.6 17.3L20.5 22.3L16 19.9L11.5 22.3L12.4 17.3L8.8 13.8L13.8 13.1L16 8.5Z"
              fill="currentColor"
            />
          </svg>
          <span className="font-display text-base font-bold tracking-tight text-white">
            SAIF 2026 · SADEEM
          </span>
        </div>

        {/* Zone 2: Chapter Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-6 text-xs font-medium text-slate-300"
          aria-label="Presentation acts"
        >
          {[
            { label: '01 Opening', idx: 0 },
            { label: '02 Story', idx: 1 },
            { label: '03 App Demo', idx: 2 },
            { label: '04 Field Proof', idx: 3 },
            { label: '05 Business', idx: 4 },
            { label: '06 Roadmap', idx: 5 },
          ].map((item) => (
            <button
              key={item.idx}
              type="button"
              onClick={() => goToSlide(item.idx, true)}
              className={`relative py-1 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentSlideIndex === item.idx
                  ? 'text-amber-300 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {item.label}
              {currentSlideIndex === item.idx && (
                <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-amber-400 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action + ID */}
        <div className="flex items-center gap-4 shrink-0">
          <span className="hidden sm:inline font-mono-tabular text-xs text-slate-400 whitespace-nowrap">
            ID: SAIF120170
          </span>
          <button
            type="button"
            onClick={() => {
              soundEngine.playClick();
              setIsBrochureOpen(true);
            }}
            className="inline-flex items-center gap-1.5 rounded-lg bg-amber-400 px-3.5 py-1.5 text-xs font-semibold text-slate-950 transition hover:bg-amber-300 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Digital Brochure</span>
          </button>
        </div>
      </header>

      {/* ============================================================
          CENTRAL 16:9 HIGH-RESOLUTION PRESENTATION STAGE
         ============================================================ */}
      <main className="no-print relative z-10 flex w-full flex-1 items-center justify-center p-2 sm:p-5">
        <div className="relative w-full max-w-[1360px] min-h-[520px] lg:aspect-video overflow-hidden rounded-2xl border border-slate-800/90 bg-[#070B19] shadow-2xl">
          {/* Illustrated Cosmic Space Backdrop */}
          <AnimatePresence mode="sync">
            <motion.img
              key={currentSlide.bgImage + currentSlideIndex}
              src={currentSlide.bgImage}
              alt="SADEEM Cosmic Space Illustration Backdrop"
              referrerPolicy="no-referrer"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 0.34, scale: 1.0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.0, ease: 'easeOut' }}
              className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>

          {/* Measured Contrast Scrim for WCAG AA+ Readability */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#050814]/90 via-[#070C1D]/78 to-[#050814]/92" />

          {/* Subtle SAIF Competition Partner Line inside Stage Top-Right */}
          <div className="pointer-events-none absolute right-6 top-3 z-20 hidden sm:flex items-center gap-2 text-[11px] text-slate-400">
            <span>SAIF Security &amp; Innovation Fair</span>
            <span aria-hidden="true">·</span>
            <span>Elm · Tahakom · Ministry of Education · Tuwaiq Academy</span>
          </div>

          {/* Active Slide Content */}
          <div className="relative z-10 h-full w-full">
            <Slides
              currentSlideIndex={currentSlideIndex}
              onOpenBmc={() => setIsBmcOpen(true)}
              onOpenBrochure={() => setIsBrochureOpen(true)}
              onOpenGallery={() => setIsGalleryOpen(true)}
              onReplayPresentation={handleReplayAll}
            />
          </div>
        </div>
      </main>

      {/* ============================================================
          FIXED BOTTOM FOOTER & MANUAL SLIDE NAVIGATION
         ============================================================ */}
      <footer className="no-print relative z-30 w-full border-t border-slate-800/80 bg-[#060914]/95 px-4 sm:px-6 py-2.5 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1400px] flex-col md:flex-row items-center justify-between gap-3">
          {/* Fixed Student & University Attribution */}
          <div className="flex items-center gap-2 text-xs text-slate-300 whitespace-nowrap">
            <span className="font-semibold text-white">Hasni Wiam (حسني وئام)</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Ziane Achour University of Djelfa, Algeria</span>
          </div>

          {/* Center Manual Slide Flipper */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentSlideIndex === 0}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:bg-slate-800 hover:text-white disabled:opacity-40 whitespace-nowrap shrink-0 cursor-pointer"
              aria-label="Previous slide"
              title="Previous Slide (Left Arrow)"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              <span>Prev</span>
            </button>

            {/* 6-Slide Interactive Stepper */}
            <div className="flex items-center gap-1.5 px-1" aria-label="Slide selector">
              {SLIDES.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => goToSlide(idx, true)}
                  title={s.actLabel}
                  aria-label={`Jump to ${s.actLabel}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    idx === currentSlideIndex
                      ? 'w-8 bg-amber-400'
                      : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            <span className="font-mono-tabular text-xs font-semibold text-amber-300 whitespace-nowrap">
              0{currentSlideIndex + 1} / 0{SLIDES.length}
            </span>

            <button
              type="button"
              onClick={handleNext}
              disabled={currentSlideIndex === SLIDES.length - 1}
              className="inline-flex items-center gap-1 rounded-lg bg-amber-400 px-3.5 py-1.5 text-xs font-semibold text-slate-950 transition hover:bg-amber-300 disabled:opacity-40 whitespace-nowrap shrink-0 cursor-pointer"
              aria-label="Next slide"
              title="Next Slide (Right Arrow)"
            >
              <span>Next</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Right Quick Utilities (Sound FX, Screens, BMC, Site QR, Intro) */}
          <div className="flex flex-wrap items-center justify-center gap-2 shrink-0">
            <button
              type="button"
              onClick={toggleSound}
              className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition whitespace-nowrap cursor-pointer ${
                soundEnabled
                  ? 'border-cyan-500/40 bg-cyan-500/10 text-cyan-200'
                  : 'border-slate-800 bg-slate-900 text-slate-400'
              }`}
              title="Toggle Soft Sound Effects (M)"
            >
              {soundEnabled ? (
                <Volume2 className="h-3.5 w-3.5" />
              ) : (
                <VolumeX className="h-3.5 w-3.5" />
              )}
              <span>{soundEnabled ? 'SFX On' : 'Muted'}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                setIsGalleryOpen(true);
              }}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs font-medium text-slate-200 hover:bg-slate-800 whitespace-nowrap cursor-pointer"
              title={`Explore All ${ALL_APP_SCREENS.length} Real App Screens`}
            >
              <Smartphone className="h-3.5 w-3.5 text-cyan-300" />
              <span>Screens ({ALL_APP_SCREENS.length})</span>
            </button>

            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                setIsBmcOpen(true);
              }}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs font-medium text-slate-200 hover:bg-slate-800 whitespace-nowrap cursor-pointer"
            >
              <LayoutGrid className="h-3.5 w-3.5 text-amber-300" />
              <span>BMC</span>
            </button>

            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                setIsQrOpen(true);
              }}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs font-medium text-slate-200 hover:bg-slate-800 whitespace-nowrap cursor-pointer"
              title="Website Link & Scannable QR Code"
            >
              <QrCode className="h-3.5 w-3.5 text-emerald-300" />
              <span>Site QR</span>
            </button>

            <button
              type="button"
              onClick={() => {
                soundEngine.playStarChime();
                setShowEntrance(true);
              }}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs font-medium text-slate-200 hover:bg-slate-800 whitespace-nowrap cursor-pointer"
              title="Replay Star Entrance Animation"
            >
              <Sparkles className="h-3.5 w-3.5 text-amber-300" />
              <span>Intro</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Executive Modals */}
      <DigitalBrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />
      <BmcLightboxModal
        isOpen={isBmcOpen}
        onClose={() => setIsBmcOpen(false)}
      />
      <AppGalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />
      <WebsiteQrModal
        isOpen={isQrOpen}
        onClose={() => setIsQrOpen(false)}
      />
    </div>
  );
}
