import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Play, ArrowRight } from 'lucide-react';
import { ASSETS } from '../data/presentationData';
import { soundEngine } from '../utils/sound';

interface EntranceSequenceProps {
  onComplete: () => void;
}

const STAGES = [
  {
    id: 0,
    image: ASSETS.introReach,
    caption: 'Every child gazes up at a quiet sky...',
    subcaption: 'Searching for wonder, curiosity, and purpose.',
  },
  {
    id: 1,
    image: ASSETS.introHold,
    caption: 'When guidance meets protection, the spark draws near.',
    subcaption: 'A safe light placed gently in young hands.',
  },
  {
    id: 2,
    image: ASSETS.introFly,
    caption: 'And takes flight toward limitless discovery.',
    subcaption: 'Welcome to SADEEM · SAIF 2026',
  },
];

export function EntranceSequence({ onComplete }: EntranceSequenceProps) {
  const [stage, setStage] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const t1 = window.setTimeout(() => {
      setStage(1);
      if (hasInteracted) soundEngine.playStarChime();
    }, 2300);

    const t2 = window.setTimeout(() => {
      setStage(2);
      if (hasInteracted) soundEngine.playTransition();
    }, 4600);

    const t3 = window.setTimeout(() => {
      onComplete();
    }, 7600);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, [hasInteracted, onComplete]);

  const handleLaunch = () => {
    setHasInteracted(true);
    soundEngine.playStarChime();
    onComplete();
  };

  const current = STAGES[stage];

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#040711] overflow-hidden select-none"
      onClick={() => {
        if (!hasInteracted) {
          setHasInteracted(true);
          soundEngine.playStarChime();
        }
      }}
    >
      {/* Subtle ambient starfield particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[
          { top: '12%', left: '18%', delay: '0s' },
          { top: '24%', left: '78%', delay: '1.1s' },
          { top: '38%', left: '14%', delay: '2.1s' },
          { top: '65%', left: '84%', delay: '0.6s' },
          { top: '76%', left: '22%', delay: '1.8s' },
          { top: '18%', left: '52%', delay: '2.6s' },
        ].map((star, idx) => (
          <span
            key={idx}
            className="animate-twinkle absolute h-1 w-1 rounded-full bg-amber-200/80"
            style={{ top: star.top, left: star.left, animationDelay: star.delay }}
          />
        ))}
      </div>

      {/* Central Cinematic Frame */}
      <div className="relative flex w-full max-w-4xl flex-col items-center px-6">
        <div className="relative aspect-square w-full max-w-[440px] sm:max-w-[500px] overflow-hidden rounded-2xl border border-slate-800/80 bg-[#070B19] shadow-2xl">
          <AnimatePresence mode="sync">
            <motion.img
              key={current.id}
              src={current.image}
              alt={current.caption}
              referrerPolicy="no-referrer"
              initial={{ opacity: 0, scale: stage === 2 ? 1.04 : 0.98 }}
              animate={{
                opacity: 1,
                scale: stage === 1 ? 1.06 : stage === 2 ? 1.0 : 1.02,
                y: stage === 2 ? -6 : 0,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>

          {/* Soft vignette so edges melt smoothly into obsidian */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#040711] via-transparent to-[#040711]/55" />

          {/* Rising starlight trail accent on final stage */}
          {stage === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: -12 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="pointer-events-none absolute inset-x-0 top-5 flex justify-center"
            >
              <div className="flex items-center gap-2 rounded-full border border-amber-400/30 bg-[#060914]/80 px-3.5 py-1 text-xs font-medium text-amber-300 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5" />
                <span>SADEEM · SAIF 2026</span>
              </div>
            </motion.div>
          )}
        </div>

        {/* Poetic Narrative Caption */}
        <div className="mt-6 text-center min-h-[72px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.55 }}
            >
              <h2 className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-white">
                {current.caption}
              </h2>
              <p className="mt-1.5 text-sm text-slate-400">{current.subcaption}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Stage Progress Indicators & Immediate Launch Action */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-2" aria-label="Intro sequence progress">
            {STAGES.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setHasInteracted(true);
                  soundEngine.playClick();
                  setStage(s.id);
                }}
                aria-label={`View intro frame ${s.id + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  stage === s.id ? 'w-8 bg-amber-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleLaunch();
            }}
            className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-amber-300 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Play className="h-3.5 w-3.5 fill-current" />
            <span>Enter Presentation</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
