import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  XCircle,
  Cpu,
  Lock,
  TrendingUp,
  Globe,
  Leaf,
  Award,
  FileText,
  Maximize2,
  RotateCcw,
  Star,
  BookOpen,
  Smartphone,
} from 'lucide-react';
import {
  ALL_APP_SCREENS,
  APP_FEATURES,
  ASSETS,
  COMPARISON_ROWS,
  FIELD_METRICS,
  FOUNDER_CONTACT,
  ROADMAP_STEPS,
  STORY_BEATS,
} from '../data/presentationData';
import { InteractivePhoneFrame } from './InteractivePhoneFrame';
import { soundEngine } from '../utils/sound';

interface SlidesProps {
  currentSlideIndex: number;
  onOpenBmc: () => void;
  onOpenBrochure: () => void;
  onOpenGallery: () => void;
  onReplayPresentation: () => void;
}

function CircularGauge({
  value,
  label,
  context,
  accent,
}: {
  value: number;
  label: string;
  context: string;
  accent: string;
}) {
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const targetOffset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center rounded-xl border border-slate-700/60 bg-slate-900/75 p-4 text-center backdrop-blur-md">
      <div className="relative flex h-24 w-24 items-center justify-center">
        <svg className="h-24 w-24 -rotate-90" viewBox="0 0 96 96">
          <circle
            cx="48"
            cy="48"
            r={radius}
            fill="none"
            stroke="rgba(148, 163, 184, 0.16)"
            strokeWidth="7"
          />
          <motion.circle
            cx="48"
            cy="48"
            r={radius}
            fill="none"
            stroke={accent}
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: targetOffset }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
        <span className="font-mono-tabular absolute text-xl font-bold text-white">
          {value}%
        </span>
      </div>
      <h4 className="mt-2 font-display text-sm font-semibold text-white">{label}</h4>
      <p className="mt-1 text-xs leading-snug text-slate-300">{context}</p>
    </div>
  );
}

export function Slides({
  currentSlideIndex,
  onOpenBmc,
  onOpenBrochure,
  onOpenGallery,
  onReplayPresentation,
}: SlidesProps) {
  // Slide 2: manual 4-beat story switcher
  const [activeStoryIndex, setActiveStoryIndex] = useState<number>(0);

  // Slide 3: manual 4-pillar app feature switcher
  const [activeFeatureId, setActiveFeatureId] = useState<'nahw' | 'galaxy' | 'talent' | 'gate'>('nahw');

  // Slide 4: interactive field evidence screenshot switcher
  const [selectedProofImg, setSelectedProofImg] = useState<string>(ASSETS.appParentDash);

  // Reset sub-views cleanly when returning to a slide
  useEffect(() => {
    setActiveStoryIndex(0);
    setActiveFeatureId('nahw');
  }, [currentSlideIndex]);

  return (
    <div className="relative h-full w-full overflow-y-auto lg:overflow-hidden">
      <AnimatePresence mode="wait">
        {/* ============================================================
            ACT 1: OPENING (10 SECONDS)
           ============================================================ */}
        {currentSlideIndex === 0 && (
          <motion.section
            key="slide-1"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-full w-full items-center justify-between gap-8 px-8 lg:px-14"
          >
            <div className="max-w-2xl space-y-5">
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium tracking-wide text-amber-300">
                <span>SAIF 2026 Competition</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono-tabular">ID: SAIF120170</span>
                <span aria-hidden="true">·</span>
                <span>Investor &amp; Jury Presentation</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
                SADEEM
                <span className="block mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold text-amber-300">
                  Igniting Young Minds Safely
                </span>
              </h1>

              <p className="max-w-xl text-base sm:text-lg leading-relaxed text-slate-200">
                A cyber-secure mobile learning sanctuary uniting Safe AI Arabic Grammar (Nahw),
                local on-device talent discovery, and tamper-proof PIN parental oversight.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-2 max-w-lg">
                <div className="rounded-xl border border-slate-700/60 bg-slate-900/75 p-3 backdrop-blur-md">
                  <p className="font-mono-tabular text-2xl font-bold text-cyan-300">92%</p>
                  <p className="mt-0.5 text-xs text-slate-300">First-Try Nahw Accuracy</p>
                </div>
                <div className="rounded-xl border border-slate-700/60 bg-slate-900/75 p-3 backdrop-blur-md">
                  <p className="font-mono-tabular text-2xl font-bold text-amber-300">100%</p>
                  <p className="mt-0.5 text-xs text-slate-300">On-Device Talent Map</p>
                </div>
                <div className="rounded-xl border border-slate-700/60 bg-slate-900/75 p-3 backdrop-blur-md">
                  <p className="font-mono-tabular text-2xl font-bold text-emerald-300">0 Ads</p>
                  <p className="mt-0.5 text-xs text-slate-300">Zero-Cloud Child Privacy</p>
                </div>
              </div>
            </div>

            {/* SADEEM Astronaut / Star Character Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="hidden md:flex flex-col items-center justify-center shrink-0"
            >
              <div className="animate-float-slow relative flex h-72 w-72 lg:h-80 lg:w-80 items-center justify-center rounded-full border border-amber-400/25 bg-slate-900/65 p-5 shadow-2xl backdrop-blur-md">
                <img
                  src={ASSETS.spaceAstronautStar}
                  alt="SADEEM Cosmic Astronaut Mascot holding a glowing star"
                  referrerPolicy="no-referrer"
                  className="h-full w-full rounded-full object-cover"
                />
                <div className="absolute -bottom-3 rounded-lg border border-slate-700 bg-slate-950/95 px-4 py-1.5 text-center shadow-lg">
                  <p className="text-xs font-semibold text-white">Hasni Wiam</p>
                  <p className="text-[11px] text-slate-400">
                    Ziane Achour University of Djelfa
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.section>
        )}

        {/* ============================================================
            ACT 2: THE REAL STORY — SPARK OF THE IDEA (35 SECONDS)
           ============================================================ */}
        {currentSlideIndex === 1 && (
          <motion.section
            key="slide-2"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-full w-full flex-col justify-between px-8 lg:px-14 py-6"
          >
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-cyan-300">
                  Act 02 · The Real Story &amp; Spark of the Idea
                </p>
                <h2 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-white">
                  From Digital Risk &amp; Arabic Anxiety to Cosmic Safety
                </h2>
              </div>

              {/* 4 Story Scene Tabs */}
              <div className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-950/80 p-1">
                {STORY_BEATS.map((beat, idx) => (
                  <button
                    key={beat.id}
                    type="button"
                    onClick={() => {
                      soundEngine.playClick();
                      setActiveStoryIndex(idx);
                    }}
                    className={`rounded-md px-3 py-1.5 text-xs font-medium transition whitespace-nowrap shrink-0 cursor-pointer ${
                      activeStoryIndex === idx
                        ? 'bg-cyan-400 text-slate-950 font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                    }`}
                  >
                    Scene {idx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Story Beat Stage */}
            <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={STORY_BEATS[activeStoryIndex].id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 12 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-2xl border border-slate-700/60 bg-slate-900/80 p-6 lg:p-8 backdrop-blur-md"
                  >
                    <div className="flex items-center gap-2 text-xs font-medium text-amber-300">
                      <span>{STORY_BEATS[activeStoryIndex].kicker}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono-tabular text-slate-400">
                        {STORY_BEATS[activeStoryIndex].timeRange}
                      </span>
                    </div>

                    <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-white leading-snug text-balance">
                      {STORY_BEATS[activeStoryIndex].headline}
                    </h3>

                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-200">
                      {STORY_BEATS[activeStoryIndex].detail}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-slate-800 pt-4">
                      <span className="text-xs font-semibold text-cyan-300">
                        Core Insight: {STORY_BEATS[activeStoryIndex].stat}
                      </span>
                      <span className="font-mono-tabular text-xs text-slate-400">
                        {activeStoryIndex + 1} / {STORY_BEATS.length}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Illustrated Story Visual */}
              <div className="lg:col-span-5 flex justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={STORY_BEATS[activeStoryIndex].id + '-img'}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.45 }}
                    className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-950 shadow-2xl"
                  >
                    <img
                      src={STORY_BEATS[activeStoryIndex].image}
                      alt={STORY_BEATS[activeStoryIndex].headline}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-4">
                      <p className="text-xs font-medium text-slate-200">
                        {activeStoryIndex === 3
                          ? 'SADEEM · Safe EdTech Architecture'
                          : 'The Everyday Reality Driving SADEEM'}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* 4-Step Story Timeline Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {STORY_BEATS.map((beat, idx) => (
                <button
                  key={beat.id}
                  type="button"
                  onClick={() => {
                    soundEngine.playClick();
                    setActiveStoryIndex(idx);
                  }}
                  className={`rounded-xl border p-3 text-left transition cursor-pointer ${
                    activeStoryIndex === idx
                      ? 'border-amber-400/60 bg-slate-900/95'
                      : 'border-slate-800/80 bg-slate-950/60 opacity-75 hover:opacity-100'
                  }`}
                >
                  <p className="font-mono-tabular text-[11px] text-amber-300">
                    Scene 0{idx + 1}
                  </p>
                  <p className="mt-0.5 text-xs font-semibold text-white truncate">
                    {beat.stat}
                  </p>
                </button>
              ))}
            </div>
          </motion.section>
        )}

        {/* ============================================================
            ACT 3: SMART SOLUTION & LIVE APP EXPERIENCE (45 SECONDS)
           ============================================================ */}
        {currentSlideIndex === 2 && (
          <motion.section
            key="slide-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="grid h-full w-full grid-cols-1 lg:grid-cols-12 items-center gap-6 px-8 lg:px-14 py-4"
          >
            {/* Left Column: 4 Interactive Architecture Modules */}
            <div className="lg:col-span-7 space-y-3">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-medium text-amber-300">
                    Act 03 · Smart Solution &amp; Live App Experience
                  </p>
                  <h2 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-white">
                    Four Cyber-Secure Pillars Inside One Unified App
                  </h2>
                  <p className="mt-1 text-xs text-slate-300">
                    Built with React Native &amp; Expo (iOS &amp; Android) · Tap any pillar or test the live phone screen.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    soundEngine.playClick();
                    onOpenGallery();
                  }}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold text-cyan-200 transition hover:bg-cyan-400/20 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Smartphone className="h-3.5 w-3.5" />
                  <span>All {ALL_APP_SCREENS.length} App Screens</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {APP_FEATURES.map((feat, idx) => {
                  const isActive = activeFeatureId === feat.id;
                  const Icon =
                    feat.id === 'nahw'
                      ? ShieldCheck
                      : feat.id === 'galaxy'
                      ? Star
                      : feat.id === 'talent'
                      ? Cpu
                      : Lock;

                  return (
                    <button
                      key={feat.id}
                      type="button"
                      onClick={() => {
                        soundEngine.playClick();
                        setActiveFeatureId(feat.id);
                      }}
                      className={`flex flex-col justify-between rounded-xl border p-4 text-left transition cursor-pointer ${
                        isActive
                          ? 'border-amber-400/70 bg-slate-900/90 shadow-lg'
                          : 'border-slate-800 bg-slate-950/65 hover:border-slate-700 hover:bg-slate-900/60'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300">
                            <Icon className="h-3.5 w-3.5" />
                            <span>0{idx + 1}. {feat.title}</span>
                          </span>
                        </div>
                        <p className="mt-1 text-[11px] font-medium text-cyan-300">
                          {feat.subtitle}
                        </p>
                        <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                          {feat.description}
                        </p>
                      </div>
                      <p className="mt-2.5 text-[11px] font-mono-tabular text-emerald-300">
                        Verified · {feat.highlightBadge}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Interactive Live Mobile Phone Frame */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <InteractivePhoneFrame
                activeFeatureId={activeFeatureId}
                onSelectFeature={(id) => setActiveFeatureId(id)}
              />
            </div>
          </motion.section>
        )}

        {/* ============================================================
            ACT 4: FIELD PROOF & REAL CLASSROOM RESULTS (35 SECONDS)
           ============================================================ */}
        {currentSlideIndex === 3 && (
          <motion.section
            key="slide-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-full w-full flex-col justify-between px-8 lg:px-14 py-5"
          >
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-emerald-300">
                  Act 04 · Classroom Field Validation &amp; Empirical Results
                </p>
                <h2 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-white">
                  Allaoua Yahia Primary School Trial (N = 5 Pupils)
                </h2>
              </div>
              <div className="text-xs text-slate-300 font-mono-tabular">
                V1 Home Pilot (N=1) → V2 Classroom Trial (N=5) · 5,155 XP · 988 Stars
              </div>
            </div>

            {/* 4 Animated Circular Gauges */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {FIELD_METRICS.map((metric) => (
                <CircularGauge
                  key={metric.label}
                  value={metric.value}
                  label={metric.label}
                  context={metric.context}
                  accent={metric.accent}
                />
              ))}
            </div>

            {/* Real Field Evidence Gallery & Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center rounded-2xl border border-slate-700/60 bg-slate-900/75 p-4 backdrop-blur-md">
              <div className="lg:col-span-7 space-y-2.5">
                <h3 className="font-display text-sm font-semibold text-white">
                  Verified App Logs &amp; Security Stress-Test Outcomes
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-200">
                  <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-3">
                    <p className="font-semibold text-cyan-300">Grammar &amp; Literacy Jump</p>
                    <p className="mt-1 text-slate-300">
                      92% first-try accuracy in AI Nahw &amp; Arabic tasks (83%–99% across Letter House modules).
                    </p>
                  </div>
                  <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-3">
                    <p className="font-semibold text-amber-300">Local Talent Signals</p>
                    <p className="mt-1 text-slate-300">
                      5/5 pupils revealed distinct natural inclinations (Leadership, Language, Movement) without cloud upload.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-[11px] text-slate-400">Inspect real V2 logs:</span>
                  {[
                    { label: 'Parent Dashboard', img: ASSETS.appParentDash },
                    { label: 'Talent Map', img: ASSETS.appTalentMap },
                    { label: 'Safe AI Nahw', img: ASSETS.screenSafeAiNahw },
                    { label: 'PIN Gate', img: ASSETS.screenPinGate },
                    { label: 'Imposter Play', img: ASSETS.actionImposterPlay },
                    { label: 'Solar Lesson', img: ASSETS.scienceLessonSolar },
                    { label: '4-Day Streak', img: ASSETS.appProfile4 },
                  ].map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => {
                        soundEngine.playClick();
                        setSelectedProofImg(item.img);
                      }}
                      className={`rounded-md px-2.5 py-1 text-[11px] font-medium transition cursor-pointer ${
                        selectedProofImg === item.img
                          ? 'bg-emerald-400 text-slate-950 font-semibold'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="relative h-44 w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950">
                  <img
                    src={selectedProofImg}
                    alt="Verified SADEEM classroom field trial log screenshot"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-contain bg-slate-950"
                  />
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* ============================================================
            ACT 5: ORIGINALITY, BUSINESS MODEL & VISION 2030 (35 SECONDS)
           ============================================================ */}
        {currentSlideIndex === 4 && (
          <motion.section
            key="slide-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-full w-full flex-col justify-between px-8 lg:px-14 py-5"
          >
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-cyan-300">
                  Act 05 · Competitive Edge, Business Model &amp; Vision 2030
                </p>
                <h2 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-white">
                  Ethical Ad-Free SaaS Built for Scale &amp; Sovereign Impact
                </h2>
              </div>

              <button
                type="button"
                onClick={() => {
                  soundEngine.playClick();
                  onOpenBmc();
                }}
                className="inline-flex items-center gap-2 rounded-lg border border-amber-400/50 bg-amber-400/15 px-3.5 py-2 text-xs font-semibold text-amber-200 transition hover:bg-amber-400/25 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Maximize2 className="h-3.5 w-3.5" />
                <span>View Full Business Model Canvas</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto">
              {/* Comparison Table */}
              <div className="lg:col-span-7 overflow-hidden rounded-xl border border-slate-700/60 bg-slate-900/80 backdrop-blur-md">
                <div className="border-b border-slate-800 px-4 py-2.5 flex items-center justify-between">
                  <h3 className="font-display text-sm font-semibold text-white">
                    Competitive Matrix: Why SADEEM Wins
                  </h3>
                  <span className="text-[11px] text-slate-400">5 Core Differentiators</span>
                </div>
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-800/80 text-slate-400">
                      <th className="px-4 py-2 font-medium">Criterion</th>
                      <th className="px-4 py-2 font-medium">Existing Kids Apps</th>
                      <th className="px-4 py-2 font-semibold text-amber-300">SADEEM (MVP V2)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {COMPARISON_ROWS.map((row) => (
                      <tr key={row.criterion}>
                        <td className="px-4 py-2.5 font-medium text-white">{row.criterion}</td>
                        <td className="px-4 py-2.5 text-slate-400">
                          <span className="inline-flex items-center gap-1.5">
                            <XCircle className="h-3.5 w-3.5 text-rose-400 shrink-0" />
                            <span>{row.existing}</span>
                          </span>
                        </td>
                        <td className="px-4 py-2.5 text-emerald-200 font-medium">
                          <span className="inline-flex items-center gap-1.5">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                            <span>{row.sadeem}</span>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Right Column: Revenue Split + Vision 2030 + IP Readiness */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-3">
                {/* Revenue Model Card */}
                <div className="rounded-xl border border-slate-700/60 bg-slate-900/80 p-4 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <h3 className="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-white">
                      <TrendingUp className="h-4 w-4 text-amber-300" />
                      <span>Ethical Ad-Free Revenue Split</span>
                    </h3>
                    <span className="font-mono-tabular text-[11px] text-emerald-300">
                      Break-even 12–18m
                    </span>
                  </div>

                  {/* Proportional 70/30 bar */}
                  <div className="mt-3 flex h-3 w-full overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full w-[70%] bg-cyan-400" />
                    <div className="h-full w-[30%] bg-amber-400" />
                  </div>
                  <div className="mt-2.5 grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <p className="font-mono-tabular font-bold text-cyan-300">70% B2B</p>
                      <p className="text-slate-300 leading-snug">
                        Primary schools, tutoring centers &amp; Arabic academies.
                      </p>
                    </div>
                    <div>
                      <p className="font-mono-tabular font-bold text-amber-300">30% B2C</p>
                      <p className="text-slate-300 leading-snug">
                        Ad-free family plans with full AI Nahw &amp; talent reports.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Vision 2030 & Sustainability */}
                <div className="rounded-xl border border-slate-700/60 bg-slate-900/80 p-4 backdrop-blur-md space-y-2">
                  <h3 className="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-white">
                    <Globe className="h-4 w-4 text-emerald-300" />
                    <span>Vision 2030 &amp; Green Edge Sustainability</span>
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Advances Human Capability Development &amp; global Arabic empowerment while
                    on-device processing lowers cloud server energy as we scale to 1M+ learners.
                  </p>
                  <div className="flex items-center gap-3 border-t border-slate-800 pt-2 text-[11px] text-slate-300">
                    <span className="inline-flex items-center gap-1 text-amber-300 font-medium">
                      <Award className="h-3.5 w-3.5" />
                      University Incubated (Djelfa)
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="inline-flex items-center gap-1 text-cyan-300 font-medium">
                      <Leaf className="h-3.5 w-3.5" />
                      IP Filing in Progress
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* ============================================================
            ACT 6: ROADMAP (2026–2030) & INSPIRING FINALE (20 SECONDS)
           ============================================================ */}
        {currentSlideIndex === 5 && (
          <motion.section
            key="slide-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-full w-full flex-col justify-between px-8 lg:px-14 py-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-amber-300">
                  Act 06 · Future Roadmap (2026–2030) &amp; Closing
                </p>
                <h2 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-white">
                  Scaling From Djelfa Classrooms to 1,000,000+ Learners
                </h2>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    soundEngine.playClick();
                    onOpenBrochure();
                  }}
                  className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-amber-300 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <FileText className="h-3.5 w-3.5" />
                  <span>Digital Brochure &amp; PDF</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    soundEngine.playTransition();
                    onReplayPresentation();
                  }}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/90 px-3.5 py-2 text-xs font-medium text-slate-200 transition hover:bg-slate-800 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Replay Pitch</span>
                </button>
              </div>
            </div>

            {/* 3-Horizon Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-auto">
              {ROADMAP_STEPS.map((step, idx) => (
                <motion.div
                  key={step.year}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15, duration: 0.45 }}
                  className="flex flex-col justify-between rounded-xl border border-slate-700/60 bg-slate-900/80 p-5 backdrop-blur-md"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono-tabular font-bold text-amber-300">
                        {step.year}
                      </span>
                      <span className="text-slate-400">{step.phase}</span>
                    </div>
                    <h3 className="mt-2 font-display text-base font-bold text-white">
                      {step.title}
                    </h3>
                    <ul className="mt-3 space-y-2 text-xs leading-relaxed text-slate-300">
                      {step.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2">
                          <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-300" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Inspiring Finale Banner with SADEEM Mascot */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-amber-400/35 bg-slate-900/85 px-6 py-4 backdrop-blur-md">
              <div className="flex items-center gap-4">
                <img
                  src={ASSETS.appProfile1}
                  alt="SADEEM Mascot Character"
                  referrerPolicy="no-referrer"
                  className="h-14 w-14 rounded-xl object-cover object-top border border-amber-400/40 shrink-0"
                />
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                    SADEEM: Igniting Young Minds Safely.
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Hasni Wiam · Ziane Achour University of Djelfa · ID: {FOUNDER_CONTACT.saifId} · {FOUNDER_CONTACT.email} · {FOUNDER_CONTACT.phoneDisplay} · {FOUNDER_CONTACT.instagramHandle}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  soundEngine.playClick();
                  onOpenBrochure();
                }}
                className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-semibold text-cyan-200 hover:bg-cyan-400/20 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <BookOpen className="h-3.5 w-3.5" />
                <span>References &amp; Contact</span>
              </button>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
