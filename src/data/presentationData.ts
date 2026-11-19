export interface SlideMeta {
  id: number;
  actLabel: string;
  title: string;
  durationSec: number;
  bgImage: string;
  accentColor: 'amber' | 'cyan' | 'emerald' | 'indigo';
}

export type AppScreenCategory =
  | 'Cosmic Galaxy'
  | 'Arabic & AI'
  | 'Action Games'
  | 'Science & STEM'
  | 'Talent & Parents';

export interface AppScreenEntry {
  id: string;
  title: string;
  arabicTitle: string;
  category: AppScreenCategory;
  image: string;
  badge: string;
  description: string;
  highlights: string[];
}

const ASSET_BASE = `${import.meta.env.BASE_URL}assets`;

export const ASSETS = {
  introReach: `${ASSET_BASE}/aistudio/image_cdb4fe40.png`,
  introHold: `${ASSET_BASE}/aistudio/image_7bfe3113.png`,
  introFly: `${ASSET_BASE}/aistudio/image_c8434b82.png`,
  spaceAstronautStar: `${ASSET_BASE}/aistudio/image_bae018f0.png`,
  spaceExplorers: `${ASSET_BASE}/aistudio/image_c1547e18.png`,
  spaceBoyBook: `${ASSET_BASE}/aistudio/image_750b112b.png`,
  spaceIndigoKid: `${ASSET_BASE}/aistudio/image_c4b218c3.png`,
  bmcFull: `${ASSET_BASE}/aistudio/Business_Model_Canvas_in_Green_Blue_Colorful_Style_b5b0af7c.png`,
  saifHeaderStrip: `${ASSET_BASE}/screens/saif_header_strip.png`,

  // High-res full SADEEM app screenshots
  galaxyMovies: `${ASSET_BASE}/aistudio/image_4538d309.png`,
  galaxyTalent: `${ASSET_BASE}/aistudio/image_717fac6d.png`,
  galaxyArabic: `${ASSET_BASE}/aistudio/image_80a06439.png`,
  galaxyAction: `${ASSET_BASE}/aistudio/image_0c7b3cbc.png`,
  galaxyScience: `${ASSET_BASE}/aistudio/image_064b7297.png`,

  arabicHubTop: `${ASSET_BASE}/aistudio/image_49d697c1.png`,
  arabicHubBottom: `${ASSET_BASE}/aistudio/image_ff3e4f88.png`,
  letterHouseTop: `${ASSET_BASE}/aistudio/image_cdc39d7f.png`,
  letterHouseBottom: `${ASSET_BASE}/aistudio/image_ae43b8ff.png`,
  readingGalaxyTop: `${ASSET_BASE}/aistudio/image_24b05547.png`,
  readingGalaxyMid: `${ASSET_BASE}/aistudio/image_c3525435.png`,
  readingGalaxyBottom: `${ASSET_BASE}/aistudio/image_cb97bf3a.png`,
  readingGalaxyScroll: `${ASSET_BASE}/aistudio/image_e84bf23a.png`,
  writingGalaxyTop: `${ASSET_BASE}/aistudio/image_1a7ce75a.png`,
  writingGalaxyBottom: `${ASSET_BASE}/aistudio/image_bb56f294.png`,
  nahwGalaxyTop: `${ASSET_BASE}/aistudio/image_e2c1e87a.png`,
  nahwGalaxyBottom: `${ASSET_BASE}/aistudio/image_27abf0e0.png`,
  dictationGalaxy: `${ASSET_BASE}/aistudio/image_24b370db.png`,

  exLetterDots: `${ASSET_BASE}/aistudio/image_67151e76.png`,
  exTraceJim: `${ASSET_BASE}/aistudio/image_ef0bf554.png`,
  exTraceAlif: `${ASSET_BASE}/aistudio/image_e4797e4b.png`,
  exTraceWordShams: `${ASSET_BASE}/aistudio/image_2b899a61.png`,
  exVerbFill: `${ASSET_BASE}/aistudio/image_451a1fea.png`,
  exAudioLetters: `${ASSET_BASE}/aistudio/image_b39258a3.png`,
  exListenMatch: `${ASSET_BASE}/aistudio/image_4d35a3d2.png`,
  exLessonDal: `${ASSET_BASE}/aistudio/image_539dc420.png`,
  exDragonValley: `${ASSET_BASE}/aistudio/image_4324da2e.png`,
  exStoryQuiz: `${ASSET_BASE}/aistudio/image_f693684c.png`,
  exSentenceOrder: `${ASSET_BASE}/aistudio/image_f5dc34ee.png`,
  storiesWorld: `${ASSET_BASE}/aistudio/image_a9f34022.png`,

  talentMapTop: `${ASSET_BASE}/aistudio/image_f65ac641.png`,
  talentMapBottom: `${ASSET_BASE}/aistudio/image_f863f260.png`,

  actionFreeze1: `${ASSET_BASE}/aistudio/image_0647fe68.png`,
  actionFreeze2: `${ASSET_BASE}/aistudio/image_26d6d144.png`,
  actionImposterPlay: `${ASSET_BASE}/aistudio/image_46a9b4ac.png`,
  actionSniperPlay: `${ASSET_BASE}/aistudio/image_cd245436.png`,
  actionSniperMenu: `${ASSET_BASE}/aistudio/image_aeae0a90.png`,
  actionRacePlay: `${ASSET_BASE}/aistudio/image_acbdfbbd.png`,
  actionRaceMenu: `${ASSET_BASE}/aistudio/image_ee96f6ba.png`,
  actionTowerMenu: `${ASSET_BASE}/aistudio/image_f16d9462.png`,
  actionCookMenu: `${ASSET_BASE}/aistudio/image_14b3e72e.png`,
  actionCookPlay: `${ASSET_BASE}/aistudio/image_fc2318ca.png`,
  actionTransportPlay: `${ASSET_BASE}/aistudio/image_e4350012.png`,
  actionRunnerMenu: `${ASSET_BASE}/aistudio/image_8e43cc4c.png`,
  actionMemoryPlay: `${ASSET_BASE}/aistudio/image_16245980.png`,
  actionStealthMenu: `${ASSET_BASE}/aistudio/image_0d77e9f6.png`,
  actionDuelMenu: `${ASSET_BASE}/aistudio/image_ea61a2ac.png`,
  actionImposterMenu: `${ASSET_BASE}/screens/screen_imposter_game.png`,

  scienceTop: `${ASSET_BASE}/aistudio/image_c0d89029.png`,
  scienceMid: `${ASSET_BASE}/aistudio/image_46cd248d.png`,
  scienceLower: `${ASSET_BASE}/aistudio/image_3a7e2208.png`,
  scienceAstronomy: `${ASSET_BASE}/aistudio/image_2a6e7d60.png`,
  scienceGeography: `${ASSET_BASE}/aistudio/image_cdabca6e.png`,
  scienceHumanBody: `${ASSET_BASE}/aistudio/image_9c32dac8.png`,
  scienceLessonSolar: `${ASSET_BASE}/aistudio/image_b63e50e5.png`,

  appProfile1: `${ASSET_BASE}/aistudio/image_e0665d75.png`,
  appProfile4: `${ASSET_BASE}/aistudio/image_5487cac5.png`,
  appParentDash: `${ASSET_BASE}/aistudio/image_b43f0b33.png`,
  appActionScience: `${ASSET_BASE}/aistudio/image_4c3e5a3d.png`,
  appTalentMap: `${ASSET_BASE}/aistudio/image_8e6b9622.png`,

  screenSafeAiNahw: `${ASSET_BASE}/screens/screen_safe_ai_nahw.png`,
  screenPinGate: `${ASSET_BASE}/screens/screen_pin_gate.png`,
  instagramQr: `${ASSET_BASE}/aistudio/image_0c3bc953.png`,
} as const;

export const FOUNDER_CONTACT = {
  name: 'Hasni Wiam (حسني وئام)',
  email: 'Wiamhasni06@gmail.com',
  phoneDisplay: '+213 676 47 86 32',
  phoneHref: '+213676478632',
  whatsappUrl: 'https://wa.me/213676478632',
  instagramHandle: '@wiam_huxs',
  instagramUrl: 'https://www.instagram.com/wiam_huxs?jplx=MWN4b3Z4dTdhaTVldg==',
  websiteUrl: 'https://ais-pre-kfvm6a67ogusnddsre2a67-27732928038.europe-west2.run.app',
  affiliation: 'Ziane Achour University of Djelfa, Algeria',
  saifId: 'SAIF120170',
} as const;

// Complete catalog of all 59 real SADEEM screens with detailed English explanations
export const ALL_APP_SCREENS: AppScreenEntry[] = [
  // --- 1. COSMIC GALAXY (7 screens) ---
  {
    id: 'galaxy-arabic',
    title: 'Galaxy Orbit: Arabic Planet',
    arabicTitle: 'مجرة سديم · كوكب اللغة العربية',
    category: 'Cosmic Galaxy',
    image: ASSETS.galaxyArabic,
    badge: '988 Stars · 5,155 XP',
    description:
      'Main orbital entry into the Arabic Language Planet, framed by SADEEM’s mascot and real-time XP, Star, and daily streak counters.',
    highlights: ['Live XP & Star HUD', 'One-tap Launch Exploration', 'Zero-ad cosmic navigation'],
  },
  {
    id: 'galaxy-science',
    title: 'Galaxy Orbit: Science & Knowledge',
    arabicTitle: 'مجرة سديم · العلوم والمعرفة',
    category: 'Cosmic Galaxy',
    image: ASSETS.galaxyScience,
    badge: 'STEM Portal',
    description:
      'Green orbital planet connecting young explorers to Astronomy, Human Body, Biology, Math, Robotics, History, and Geography lessons.',
    highlights: ['Multi-discipline STEM hub', 'Child-friendly orbital UI', 'Quick settings & profile'],
  },
  {
    id: 'galaxy-action',
    title: 'Galaxy Orbit: Action Planet',
    arabicTitle: 'مجرة سديم · كوكب الأكشن',
    category: 'Cosmic Galaxy',
    image: ASSETS.galaxyAction,
    badge: '10 Mini-Games',
    description:
      'Coral-ringed planet launching fast-reflex cognitive mini-games that sharpen Arabic fluency, logic, and visual focus.',
    highlights: ['10 cognitive mini-games', 'Feeds local Talent Engine', 'Reward-based mastery'],
  },
  {
    id: 'galaxy-stories',
    title: 'Galaxy Orbit: Movies & Stories',
    arabicTitle: 'مجرة سديم · الأفلام والقصص',
    category: 'Cosmic Galaxy',
    image: ASSETS.galaxyMovies,
    badge: 'Curated Safe Media',
    description:
      'Purple orbital gateway leading to curated, moral Arabic stories and educational animations free of third-party trackers.',
    highlights: ['100% ad-free media', 'Moral & educational tales', 'Audio-assisted reading'],
  },
  {
    id: 'galaxy-talent',
    title: 'Galaxy Orbit: Discover My Talent',
    arabicTitle: 'مجرة سديم · اكتشف موهبتي',
    category: 'Cosmic Galaxy',
    image: ASSETS.galaxyTalent,
    badge: 'On-Device Discovery',
    description:
      'Amber orbital planet inviting children into mystery-solving quests that gently measure natural inclinations locally on-device.',
    highlights: ['Zero clinical pressure', 'Behavioral play quests', '100% local analysis'],
  },
  {
    id: 'stories-world',
    title: 'Stories World Hub',
    arabicTitle: 'عالم القصص التفاعلي',
    category: 'Cosmic Galaxy',
    image: ASSETS.storiesWorld,
    badge: '1 / 1 Completed',
    description:
      'Interactive story progression map ("Listen, Read, Think & Learn from Every Story") featuring completed stories like The Carrot Thief.',
    highlights: ['Audio-visual storytelling', 'Sequential unlock path', 'Moral comprehension'],
  },
  {
    id: 'story-quiz',
    title: 'Story Comprehension Quiz',
    arabicTitle: 'اختبار فهم القصة',
    category: 'Cosmic Galaxy',
    image: ASSETS.exStoryQuiz,
    badge: 'Timed Recall',
    description:
      'Post-story comprehension check asking children key narrative questions with instant positive reinforcement and star rewards.',
    highlights: ['Reading comprehension', 'Timed focus challenge', 'Voweled Arabic text'],
  },

  // --- 2. ARABIC & AI NAHW (21 screens) ---
  {
    id: 'safe-ai-nahw',
    title: 'Safe AI Nahw Tutor (Parser)',
    arabicTitle: 'مُعرب سديم بالذكاء الاصطناعي الآمن',
    category: 'Arabic & AI',
    image: ASSETS.screenSafeAiNahw,
    badge: '92% First-Try Accuracy',
    description:
      'Interactive Arabic grammar parser where pupils test preset or custom sentences (e.g., "أنا أحب أمي") with strict child-safety filtering.',
    highlights: ['Content-filtered AI tutor', 'Color-coded Noun/Verb/Particle', 'Clear grammatical role hints'],
  },
  {
    id: 'arabic-hub-top',
    title: 'Arabic Planet: Letter House & Reading',
    arabicTitle: 'كوكب اللغة العربية · بيت الحروف والقراءة',
    category: 'Arabic & AI',
    image: ASSETS.arabicHubTop,
    badge: 'Literacy Gateway',
    description:
      'Illustrated Arabic Planet hub guiding beginners to Letter House (phonics & letter shapes) and Reading Galaxy (words & stories).',
    highlights: ['Visual landmark navigation', 'Phonics & letter mastery', 'Seamless reading transition'],
  },
  {
    id: 'arabic-hub-bottom',
    title: 'Arabic Planet: Writing, Dictation & Nahw',
    arabicTitle: 'كوكب اللغة العربية · الكتابة والإملاء والنحو',
    category: 'Arabic & AI',
    image: ASSETS.arabicHubBottom,
    badge: 'Full Language Suite',
    description:
      'Lower half of the Arabic Planet hub linking Writing Galaxy, Dictation Galaxy (audio spelling), and Nahw Galaxy (syntax).',
    highlights: ['Guided handwriting path', 'Audio-driven dictation', 'Syntax & grammar galaxy'],
  },
  {
    id: 'letter-house-top',
    title: 'Letter House: Foundations Map',
    arabicTitle: 'بيت الحروف · رحلة الحروف ومكتبة سديم',
    category: 'Arabic & AI',
    image: ASSETS.letterHouseTop,
    badge: '28 Letters Journey',
    description:
      'Step-by-step foundational map including the 28-Letter Journey, SADEEM Library, and Which Sound Did You Hear? listening drills.',
    highlights: ['Structured phonics path', 'Interactive audio library', 'Auditory discrimination'],
  },
  {
    id: 'letter-house-bottom',
    title: 'Letter House: Mastery Challenges',
    arabicTitle: 'بيت الحروف · التحديات الخمسة',
    category: 'Arabic & AI',
    image: ASSETS.letterHouseBottom,
    badge: 'Up to 99% Accuracy',
    description:
      'Five progressive literacy games: Odd Letter Out (96%), Complete Missing Letter (99%), Repeat After Me, Word Garden, and Match Letter to Image.',
    highlights: ['Odd Letter Out (96%)', 'Missing Letter (99%)', 'Speech & visual matching'],
  },
  {
    id: 'dragon-valley-intro',
    title: 'Good Dragon Valley: 7 Keys Quest',
    arabicTitle: 'وادي التنين الطيب · السبعة مفاتيح',
    category: 'Arabic & AI',
    image: ASSETS.exDragonValley,
    badge: 'Gamified Phonics',
    description:
      'Narrative quest where children unlock seven golden keys by mastering letter names, sounds, and shapes across 28 Arabic letters.',
    highlights: ['Story-driven phonics', '7 golden key milestones', 'High intrinsic motivation'],
  },
  {
    id: 'dragon-valley-lesson',
    title: 'Letter Phonetics & Audio Card',
    arabicTitle: 'درس الحرف والنطق الصوتي (الدال)',
    category: 'Arabic & AI',
    image: ASSETS.exLessonDal,
    badge: '8 / 28 Mastered',
    description:
      'Focused letter introduction screen displaying the Arabic letter ("د · الدال") with high-contrast audio playback controls.',
    highlights: ['Clean zero-clutter focus', 'Native Arabic audio cue', '28-letter tracker'],
  },
  {
    id: 'listen-match',
    title: 'Letter Forest: Listen & Catch',
    arabicTitle: 'غابة الحروف · استمع والتقط',
    category: 'Arabic & AI',
    image: ASSETS.exListenMatch,
    badge: 'Phonics Association',
    description:
      'Auditory-visual exercise asking the child to hear a letter ("ن") and select the matching illustrated word ("نار" vs "طبق").',
    highlights: ['Audio-to-meaning link', 'Instant visual cards', '5-stage progression'],
  },
  {
    id: 'audio-letters',
    title: 'Stars Theater: Words Without Pictures',
    arabicTitle: 'مسرح النجوم · كلمات بلا صور',
    category: 'Arabic & AI',
    image: ASSETS.exAudioLetters,
    badge: 'Pure Auditory Recall',
    description:
      'Advanced listening stage removing picture hints so learners rely strictly on phonemic recognition to pick the starting letter.',
    highlights: ['Deep phonemic mastery', 'Eliminates visual guessing', 'Adaptive difficulty'],
  },
  {
    id: 'reading-galaxy-top',
    title: 'Reading Galaxy: Diacritics & Words',
    arabicTitle: 'مجرة القراءة · 10 / 10 نجوم',
    category: 'Arabic & AI',
    image: ASSETS.readingGalaxyTop,
    badge: '10 / 10 Stars',
    description:
      'Reading Galaxy map featuring Voweled Letters, Save the Planet, Planet Explorer, and Word Station — all completed with full checkmarks.',
    highlights: ['Tashkeel (diacritics) mastery', 'Word Station fluency', '10/10 star completion'],
  },
  {
    id: 'reading-galaxy-mid',
    title: 'Reading Galaxy: Sound & Story Builders',
    arabicTitle: 'مجرة القراءة · صياد الأصوات وباني الحكايات',
    category: 'Arabic & AI',
    image: ASSETS.readingGalaxyMid,
    badge: 'Fluency Milestones',
    description:
      'Middle tier of Reading Galaxy connecting Sound Hunter and Story Builder activities to bridge decoding into full-sentence reading.',
    highlights: ['Phonemic synthesis', 'Creative story assembly', 'Visual path guidance'],
  },
  {
    id: 'reading-galaxy-bottom',
    title: 'Reading Galaxy: Expression & Meaning',
    arabicTitle: 'مجرة القراءة · مسرح الدمى ومذيع المستقبل',
    category: 'Arabic & AI',
    image: ASSETS.readingGalaxyBottom,
    badge: 'Comprehension & Speech',
    description:
      'Upper-tier reading adventures including Word Explorer, Puppet Theater, Maze of Meanings, and Future Broadcaster.',
    highlights: ['Semantic comprehension', 'Oral reading confidence', 'Roleplay storytelling'],
  },
  {
    id: 'writing-galaxy-top',
    title: 'Writing Galaxy: Magic Pen Workshop',
    arabicTitle: 'مجرة الكتابة · 5 / 5 نجوم',
    category: 'Arabic & AI',
    image: ASSETS.writingGalaxyTop,
    badge: '5 / 5 Stars',
    description:
      'Interactive Arabic handwriting hub guiding children through Magic Pen Workshop and Letter City with 5/5 completed milestones.',
    highlights: ['Stroke-order guidance', 'Fine-motor skill building', '5/5 star mastery'],
  },
  {
    id: 'writing-galaxy-bottom',
    title: 'Writing Galaxy: Connected Words & Stories',
    arabicTitle: 'مجرة الكتابة · الحروف المتصلة وكاتب القصص',
    category: 'Arabic & AI',
    image: ASSETS.writingGalaxyBottom,
    badge: 'Cursive & Composition',
    description:
      'Progressive writing stages moving from Dots Hunter and Letters Holding Hands (connected forms) to Story Writer.',
    highlights: ['Dot placement accuracy', 'Connected Arabic script', 'Guided word composition'],
  },
  {
    id: 'ex-letter-dots',
    title: 'Interactive Exercise: Place Letter Dots',
    arabicTitle: 'ضع نقاط الحرف في مكانها (ب · بطة)',
    category: 'Arabic & AI',
    image: ASSETS.exLetterDots,
    badge: 'Tactile Phonics',
    description:
      'Hands-on puzzle where children place diacritic dots in their exact anatomical position beneath or above Arabic letters.',
    highlights: ['Prevents letter confusion', 'Visual word anchor ("بطة")', 'Immediate tactile cue'],
  },
  {
    id: 'ex-trace-jim',
    title: 'Guided Tracing Canvas (Letter Jim)',
    arabicTitle: 'اكتب فوق الخط (ج · جمل)',
    category: 'Arabic & AI',
    image: ASSETS.exTraceJim,
    badge: 'Guided Handwriting',
    description:
      'Dotted stroke-guide canvas helping young writers trace Arabic curves cleanly with clear Erase and Done controls.',
    highlights: ['Dotted vector stroke guide', 'Self-correction tools', 'Clean dark-canvas contrast'],
  },
  {
    id: 'ex-trace-alif',
    title: 'Independent Freehand Writing',
    arabicTitle: 'الآن اكتب وحدك (أ · أسد)',
    category: 'Arabic & AI',
    image: ASSETS.exTraceAlif,
    badge: 'Memory Recall',
    description:
      'Scaffolded removal of dotted guides challenges the pupil to draw the letter Alif from memory, with an optional "Show Me" hint.',
    highlights: ['Unassisted letter recall', 'Optional "Show Me" hint', 'Builds writing autonomy'],
  },
  {
    id: 'ex-trace-word-shams',
    title: 'First Words Connected Tracing',
    arabicTitle: 'كلماتي الأولى · كتابة كلمة شمس',
    category: 'Arabic & AI',
    image: ASSETS.exTraceWordShams,
    badge: 'Full Word Script',
    description:
      'Guides learners from isolated letters into tracing complete connected Arabic words ("شمس") alongside visual vocabulary cues.',
    highlights: ['Connected Arabic ligatures', 'Multi-dot placement', 'Vocabulary reinforcement'],
  },
  {
    id: 'nahw-galaxy-top',
    title: 'Nahw Galaxy: Parts of Speech',
    arabicTitle: 'مجرة النحو · اسم أو فعل أو حرف',
    category: 'Arabic & AI',
    image: ASSETS.nahwGalaxyTop,
    badge: 'Syntax Foundations',
    description:
      'Visual Arabic grammar map simplifying syntax into playful steps: Noun/Verb/Particle, Masculine/Feminine, and Singular/Dual/Plural.',
    highlights: ['Bite-sized grammar tiers', 'Visual icon metaphors', 'Zero textbook intimidation'],
  },
  {
    id: 'nahw-galaxy-bottom',
    title: 'Nahw Galaxy: Sentence & AI Parser',
    arabicTitle: 'مجرة النحو · أكمل الجملة ومُعرب سديم',
    category: 'Arabic & AI',
    image: ASSETS.nahwGalaxyBottom,
    badge: 'AI-Powered Practice',
    description:
      'Advanced Nahw path combining Complete the Sentence drills with direct entry into the Safe AI Nahw Parser ("مُعرب سديم").',
    highlights: ['Syntactic reasoning', 'Direct Safe AI launch', 'Progressive mastery path'],
  },
  {
    id: 'ex-verb-fill',
    title: 'Verb Playground: Complete the Sentence',
    arabicTitle: 'ملعب الأفعال · الطائر يطير في السماء',
    category: 'Arabic & AI',
    image: ASSETS.exVerbFill,
    badge: 'Grammar in Context',
    description:
      'Interactive sentence-slot puzzle where pupils choose the grammatically fitting verb ("يطير") to complete "الطائر ??? في السماء".',
    highlights: ['Contextual verb selection', 'Instant error prevention', 'Mascot encouragement'],
  },
  {
    id: 'ex-sentence-order',
    title: 'Syntax Builder: Word Ordering',
    arabicTitle: 'ترتيب الكلمات لتكوين جملة صحيحة',
    category: 'Arabic & AI',
    image: ASSETS.exSentenceOrder,
    badge: 'Timed Syntax',
    description:
      'Timed brick-ordering game teaching Arabic Verb–Subject–Object structure ("قرأت البنت القصة").',
    highlights: ['VSO sentence structure', '3-heart mastery system', 'High-contrast touch tiles'],
  },
  {
    id: 'dictation-galaxy',
    title: 'Dictation Galaxy: Audio Spelling',
    arabicTitle: 'مجرة الإملاء · نسمع ثم نكتب بدقة',
    category: 'Arabic & AI',
    image: ASSETS.dictationGalaxy,
    badge: 'Listening & Spelling',
    description:
      'Audio-guided Arabic dictation hub guiding learners from listening and assembling single words to writing full dictated sentences.',
    highlights: ['Word assembly by ear', 'Full-sentence dictation', '3-stage star progression'],
  },

  // --- 3. ACTION MINI-GAMES (16 screens) ---
  {
    id: 'action-imposter-menu',
    title: 'Action Menu: Imposter Detector',
    arabicTitle: 'كوكب الأكشن · كاشف المحتال',
    category: 'Action Games',
    image: ASSETS.actionImposterMenu,
    badge: '26 / 90 Stars Earned',
    description:
      'Featured Action Planet hub for Imposter Detector, displaying 3-star level mastery and a quick-switch carousel of 10 action games.',
    highlights: ['3-star level progression', '10-game bottom dock', '90-star seasonal track'],
  },
  {
    id: 'action-imposter-play',
    title: 'Gameplay: Odd-Word Imposter',
    arabicTitle: 'من المحتال؟ أي كلمة لا تنتمي للباقي؟',
    category: 'Action Games',
    image: ASSETS.actionImposterPlay,
    badge: 'Semantic Classification',
    description:
      'Fast-paced semantic categorization challenge asking children to spot the outlier word ("بطة") among clothing items ("قميص، سروال، حذاء").',
    highlights: ['Semantic grouping skill', '57s speed timer', 'Builds rapid reading'],
  },
  {
    id: 'action-sniper-menu',
    title: 'Action Menu: Letter Sniper',
    arabicTitle: 'كوكب الأكشن · قنّاص الحروف',
    category: 'Action Games',
    image: ASSETS.actionSniperMenu,
    badge: '7 / 9 Stars Earned',
    description:
      'Reflex game briefing ("Tap the target letter as soon as it appears, and avoid tapping any other!") with 3 star-rated difficulty levels.',
    highlights: ['Impulse control & focus', 'Multi-level star mastery', 'Rapid letter recognition'],
  },
  {
    id: 'action-sniper-play',
    title: 'Gameplay: Letter Sniper Grid',
    arabicTitle: 'اصطد هذا الحرف فقط (س مقابل ش)',
    category: 'Action Games',
    image: ASSETS.actionSniperPlay,
    badge: 'Visual Discrimination',
    description:
      '3x3 grid reflex challenge training children to distinguish visually similar Arabic letters like Seen (س) and Sheen (ش) under time pressure.',
    highlights: ['Distinguishes similar letters', '3-heart precision rule', 'Trains visual scanning'],
  },
  {
    id: 'action-freeze-red',
    title: 'Gameplay: Green Light / Freeze',
    arabicTitle: 'الضوء الأخضر · قف! لا تتحرك',
    category: 'Action Games',
    image: ASSETS.actionFreeze1,
    badge: '9 / 9 Stars Mastered',
    description:
      'Self-regulation mini-game inspired by Red Light, Green Light where pupils hold to sprint and freeze instantly when the signal turns red.',
    highlights: ['Executive self-control', 'Reaction time training', '9/9 stars in field trial'],
  },
  {
    id: 'action-freeze-run',
    title: 'Gameplay: Hold-to-Run Progress',
    arabicTitle: 'اضغط باستمرار للركض (28%)',
    category: 'Action Games',
    image: ASSETS.actionFreeze2,
    badge: 'Motor Timing',
    description:
      'Active sprint meter inside Green Light tracking live distance percentage while testing sustained focus and rapid stop reflexes.',
    highlights: ['Live progress telemetry', 'Sustained attention check', 'Kinesthetic engagement'],
  },
  {
    id: 'action-race-menu',
    title: 'Action Menu: Car Race',
    arabicTitle: 'كوكب الأكشن · سباق السيارات',
    category: 'Action Games',
    image: ASSETS.actionRaceMenu,
    badge: 'Competitive Speed',
    description:
      'Racing-themed literacy challenge motivating children to overtake rivals to the finish line by answering phonics prompts accurately.',
    highlights: ['3-tier race stages', 'Speed + accuracy balance', 'High replay appeal'],
  },
  {
    id: 'action-race-play',
    title: 'Gameplay: Word Racer Sprint',
    arabicTitle: 'أي كلمة تبدأ بحرف (ت)؟',
    category: 'Action Games',
    image: ASSETS.actionRacePlay,
    badge: 'Initial Sound Speed',
    description:
      'Live race track across the top while the child taps the word starting with target letter Taa ("تفاح" vs "سمك" / "دجاجة") to boost speed.',
    highlights: ['Live race track HUD', 'Initial-phoneme fluency', 'Instant feedback loop'],
  },
  {
    id: 'action-tower-menu',
    title: 'Action Menu: Word Tower',
    arabicTitle: 'كوكب الأكشن · برج الكلمات',
    category: 'Action Games',
    image: ASSETS.actionTowerMenu,
    badge: 'Constructive Logic',
    description:
      'Brick-stacking challenge where every correctly built Arabic word or sentence raises the child’s tower floor by floor.',
    highlights: ['Visual achievement tower', 'Sentence assembly focus', '3-level progression'],
  },
  {
    id: 'action-cook-menu',
    title: 'Action Menu: Fast Cooking',
    arabicTitle: 'كوكب الأكشن · الطبخ السريع',
    category: 'Action Games',
    image: ASSETS.actionCookMenu,
    badge: 'Logical Sequencing',
    description:
      'Time-bound culinary sequencing challenge teaching children procedural order, action verbs, and everyday vocabulary.',
    highlights: ['Procedural thinking', 'Daily life vocabulary', '3-tier star levels'],
  },
  {
    id: 'action-cook-play',
    title: 'Gameplay: Recipe Step Ordering',
    arabicTitle: 'اضغط الخطوات بالترتيب الصحيح للوصفة',
    category: 'Action Games',
    image: ASSETS.actionCookPlay,
    badge: 'Executive Planning',
    description:
      'Interactive sequencing task requiring pupils to order real-world steps ("Wash vegetables -> Chop -> Mix") before the timer expires.',
    highlights: ['Cause-and-effect order', 'Action verb comprehension', 'Clean icon pairing'],
  },
  {
    id: 'action-transport-play',
    title: 'Gameplay: Category Filter Sprint',
    arabicTitle: 'اضغط فقط على كلمات: وسائل نقل',
    category: 'Action Games',
    image: ASSETS.actionTransportPlay,
    badge: 'Rapid Categorization',
    description:
      'Dynamic floating-word challenge testing semantic classification as children selectively catch transport words while ignoring distractors.',
    highlights: ['Selective attention', 'Semantic vocabulary check', 'Dynamic word targets'],
  },
  {
    id: 'action-runner-menu',
    title: 'Action Menu: Word Runner',
    arabicTitle: 'كوكب الأكشن · عدّاء الكلمات',
    category: 'Action Games',
    image: ASSETS.actionRunnerMenu,
    badge: 'Kinesthetic Focus',
    description:
      'Endless-runner inspired literacy game where children sprint and collect target Arabic words along the path.',
    highlights: ['Movement-oriented play', 'Tracks kinesthetic interest', '3 progressive stages'],
  },
  {
    id: 'action-memory-play',
    title: 'Gameplay: Color Cipher Memory',
    arabicTitle: 'شاهد الشيفرة بتركيز (الذاكرة البصرية)',
    category: 'Action Games',
    image: ASSETS.actionMemoryPlay,
    badge: 'Working Memory',
    description:
      'Sequential visual memory trainer ("Watch the code carefully · Code length: 2") strengthening working memory and pattern recall.',
    highlights: ['Growing sequence length', 'Visual-spatial memory', 'Concentration training'],
  },
  {
    id: 'action-stealth-menu',
    title: 'Action Menu: Silent Stealth',
    arabicTitle: 'كوكب الأكشن · المتسلل الصامت',
    category: 'Action Games',
    image: ASSETS.actionStealthMenu,
    badge: '11% · Strategic Timing',
    description:
      'Stealth puzzle encouraging careful observation, patience, and strategic timing across three escalating levels.',
    highlights: ['Strategic patience', 'Spatial awareness', '1/9 stars logged in trial'],
  },
  {
    id: 'action-duel-menu',
    title: 'Action Menu: Champions Duel',
    arabicTitle: 'كوكب الأكشن · نزال الأبطال',
    category: 'Action Games',
    image: ASSETS.actionDuelMenu,
    badge: 'Mastery Showdown',
    description:
      'Capstone challenge inside Action Planet combining speed, vocabulary, and precision in an exciting head-to-head style duel.',
    highlights: ['Capstone mastery test', 'High motivation design', 'Feeds talent profile'],
  },

  // --- 4. SCIENCE & STEM (7 screens) ---
  {
    id: 'science-top',
    title: 'Science Planet: Core Disciplines',
    arabicTitle: 'كوكب العلوم · الفلك والجسم والطبيعة',
    category: 'Science & STEM',
    image: ASSETS.scienceTop,
    badge: '1 / 28 Completed',
    description:
      'Illustrated STEM hub tracking 28 scientific explorations across Astronomy & Space, Human Body, and Animals & Plants.',
    highlights: ['28 structured STEM lessons', 'Visual progress dots', 'Interactive robot mentor'],
  },
  {
    id: 'science-mid',
    title: 'Science Planet: Lab, Math & Robotics',
    arabicTitle: 'كوكب العلوم · المختبر والرياضيات والبرمجة',
    category: 'Science & STEM',
    image: ASSETS.scienceMid,
    badge: 'Future STEM Skills',
    description:
      'Middle tier of Science Planet unlocking Hands-On Lab Experiments, Mathematics, and Programming & Robotics.',
    highlights: ['Early coding & robotics', 'Guided math reasoning', 'Virtual lab experiments'],
  },
  {
    id: 'science-lower',
    title: 'Science Planet: History & Geography',
    arabicTitle: 'كوكب العلوم · التاريخ والثقافات والجغرافيا',
    category: 'Science & STEM',
    image: ASSETS.scienceLower,
    badge: 'Cultural Literacy',
    description:
      'Broadens general knowledge through interactive modules in World History, Civilizations, and Global Geography.',
    highlights: ['Cultural awareness', 'Global geography basics', 'Balanced STEM + humanities'],
  },
  {
    id: 'science-astronomy',
    title: 'Astronomy & Space Lessons',
    arabicTitle: 'ميدان الفلك والفضاء',
    category: 'Science & STEM',
    image: ASSETS.scienceAstronomy,
    badge: 'Solar System Unit',
    description:
      'Focused astronomy track covering Planets of the Solar System (completed), Sun/Moon/Stars, and Origins of Planet Names.',
    highlights: ['Solar System mastery', 'Audio-supported reading', '1/3 lessons completed'],
  },
  {
    id: 'science-lesson-solar',
    title: 'Interactive Lesson: Solar System',
    arabicTitle: 'درس كواكب المجموعة الشمسية (1 / 4)',
    category: 'Science & STEM',
    image: ASSETS.scienceLessonSolar,
    badge: 'Audio + Visual',
    description:
      'Bite-sized illustrated science card ("The Sun is a huge star giving us light and warmth...") with a dedicated Listen button for early readers.',
    highlights: ['One-tap audio narration', 'Clear high-contrast card', '4-step lesson pacing'],
  },
  {
    id: 'science-human-body',
    title: 'Human Body Exploration Track',
    arabicTitle: 'ميدان جسم الإنسان',
    category: 'Science & STEM',
    image: ASSETS.scienceHumanBody,
    badge: 'Anatomy & Health',
    description:
      'Interactive biology modules guiding children through Journey Inside the Cell, Digestion Journey, and Heart & Blood.',
    highlights: ['Age-appropriate anatomy', 'Health literacy', '3 visual science units'],
  },
  {
    id: 'science-geography',
    title: 'Geography Exploration Track',
    arabicTitle: 'ميدان الجغرافيا',
    category: 'Science & STEM',
    image: ASSETS.scienceGeography,
    badge: 'World & Arab Capitals',
    description:
      'Interactive geography lessons exploring the Seven Continents, Arab Capitals, and Oceans & Seas.',
    highlights: ['Regional & global maps', 'Arab capitals knowledge', 'Visual icon navigation'],
  },

  // --- 5. TALENT & PARENTS (8 screens) ---
  {
    id: 'talent-map-top',
    title: 'Talent Planet: Mystery Case Files',
    arabicTitle: 'كوكب المواهب · ملفات القضايا',
    category: 'Talent & Parents',
    image: ASSETS.talentMapTop,
    badge: '6 / 6 Cases Solved',
    description:
      'Playful detective map ("Every case file reveals a secret about your talent") completed 6/6 to gather rich behavioral signals.',
    highlights: ['6/6 detective quests', 'Zero test anxiety', 'Natural play observation'],
  },
  {
    id: 'talent-map-bottom',
    title: 'Talent Planet: Teamwork & Explorer Kit',
    arabicTitle: 'كوكب المواهب · مهمة الفريق وملف النتيجة',
    category: 'Talent & Parents',
    image: ASSETS.talentMapBottom,
    badge: 'Holistic Profiling',
    description:
      'Lower Talent Planet track spanning Ideas Lab, Detective Ear, Team Mission, Explorer Backpack, and the final My Result Folder.',
    highlights: ['Leadership & empathy cues', 'Auditory vs logical traits', 'Generates local report'],
  },
  {
    id: 'child-profile',
    title: 'Child Explorer Profile & Privacy',
    arabicTitle: 'ملفي الشخصي وسلسلة الأيام',
    category: 'Talent & Parents',
    image: ASSETS.appProfile1,
    badge: '988 Stars · 5,155 XP',
    description:
      'Child-facing profile reinforcing healthy habits ("Try listening to a short story and retelling it"), with masked parent email privacy.',
    highlights: ['Masked email protection', 'Positive habit prompts', 'Live Stars, XP & Streak'],
  },
  {
    id: 'on-device-talent-map',
    title: 'Parent Talent Inclination Report',
    arabicTitle: 'تقرير ميول طفلك المحلي',
    category: 'Talent & Parents',
    image: ASSETS.appTalentMap,
    badge: '100% On-Device',
    description:
      'Reveals top natural inclinations—Leadership & Empathy, Language & Stories, Movement & Sports—plus practical parenting advice and accuracy notes.',
    highlights: ['Zero cloud data upload', 'Actionable parenting tips', '83%–99% skill observations'],
  },
  {
    id: 'pin-parental-gate',
    title: 'PIN Parental Gate & Lockout',
    arabicTitle: 'منطقة ولي الأمر المحمية برمز سري',
    category: 'Talent & Parents',
    image: ASSETS.screenPinGate,
    badge: '3-Try Tamper Lockout',
    description:
      'Encrypted 4-digit PIN gate ("Enter the 4-digit secret code") isolating parental analytics and locking out after 3 failed attempts.',
    highlights: ['Encrypted SecureStore PIN', 'Automated 3-try lockout', 'Strict child sandbox'],
  },
  {
    id: 'parent-dash-arabic',
    title: 'Parent Dashboard: Arabic Mastery',
    arabicTitle: 'لوحة تقدم طفلك · بيت الحروف',
    category: 'Talent & Parents',
    image: ASSETS.appParentDash,
    badge: 'Local Device Sync',
    description:
      'Shows explicit local-only status ("Data from this device · No cloud sync"), 988 Stars, 5,155 XP, 4-day streak, and Letter House accuracy (83%–99%).',
    highlights: ['Transparent local storage', 'Per-skill accuracy bars', 'Zero external tracking'],
  },
  {
    id: 'parent-dash-action-science',
    title: 'Parent Dashboard: Action & Science',
    arabicTitle: 'لوحة تقدم طفلك · الأكشن والعلوم',
    category: 'Talent & Parents',
    image: ASSETS.appActionScience,
    badge: '26/90 Action · 1/84 Science',
    description:
      'Granular breakdown across all 10 Action Planet mini-games (Imposter 9/9, Green Light 9/9, Letter Sniper 7/9) and Science Planet domains.',
    highlights: ['Full 10-game star audit', 'STEM lesson completion', 'PIN-protected oversight'],
  },
];

// Exact 180-second (3:00) presentation timeline matching the SAIF 2026 script
export const SLIDES: SlideMeta[] = [
  {
    id: 1,
    actLabel: '01 · Opening',
    title: 'SADEEM · Igniting Young Minds Safely',
    durationSec: 10,
    bgImage: ASSETS.spaceAstronautStar,
    accentColor: 'amber',
  },
  {
    id: 2,
    actLabel: '02 · The Spark',
    title: 'Why SADEEM Was Born',
    durationSec: 35,
    bgImage: ASSETS.spaceBoyBook,
    accentColor: 'cyan',
  },
  {
    id: 3,
    actLabel: '03 · Live Solution',
    title: 'Inside the SADEEM Ecosystem',
    durationSec: 45,
    bgImage: ASSETS.spaceExplorers,
    accentColor: 'amber',
  },
  {
    id: 4,
    actLabel: '04 · Field Proof',
    title: 'Allaoua Yahia Classroom Validation',
    durationSec: 35,
    bgImage: ASSETS.spaceIndigoKid,
    accentColor: 'emerald',
  },
  {
    id: 5,
    actLabel: '05 · Business & Vision',
    title: 'Originality, Revenue & Vision 2030',
    durationSec: 35,
    bgImage: ASSETS.spaceAstronautStar,
    accentColor: 'cyan',
  },
  {
    id: 6,
    actLabel: '06 · Roadmap & Finale',
    title: '2026–2030 Global Trajectory',
    durationSec: 20,
    bgImage: ASSETS.spaceIndigoKid,
    accentColor: 'amber',
  },
];

export const STORY_BEATS = [
  {
    id: 'trap',
    timeRange: '00–09s',
    kicker: 'Scene 01 · The Digital Trap',
    headline: 'Hours lost in mindless games and hidden trackers.',
    detail:
      'Children enter rooms glued to shallow mobile apps that quietly harvest behavioral data, serve intrusive ads, and expose young minds to unverified content.',
    stat: 'Zero Privacy Guardrails',
    image: ASSETS.spaceIndigoKid,
  },
  {
    id: 'nahw',
    timeRange: '09–18s',
    kicker: 'Scene 02 · The Arabic Struggle',
    headline: 'Fear of Arabic grammar (Nahw) in rigid classrooms.',
    detail:
      'Traditional textbook drills leave pupils intimidated by Arabic syntax, turning curiosity into anxiety instead of mastery.',
    stat: 'Dry Rote Memorization',
    image: ASSETS.spaceBoyBook,
  },
  {
    id: 'guesswork',
    timeRange: '18–26s',
    kicker: 'Scene 03 · Parental Blindness',
    headline: 'Parents watching imitation without seeing true talent.',
    detail:
      'Families see their children mimic passing trends on screen, with zero visibility into their hidden leadership, linguistic, or kinesthetic gifts.',
    stat: 'No Early Talent Signal',
    image: ASSETS.spaceExplorers,
  },
  {
    id: 'turning',
    timeRange: '26–35s',
    kicker: 'Scene 04 · The Turning Point',
    headline: 'SADEEM turns screen risk into a cosmic sanctuary.',
    detail:
      'Out of this struggle, SADEEM was engineered: merging a child-safe AI Nahw tutor, local on-device talent discovery, and a zero-ad PIN fortress.',
    stat: '100% Child-Safe Sanctuary',
    image: ASSETS.spaceAstronautStar,
  },
];

export interface AppFeatureSpot {
  id: 'nahw' | 'galaxy' | 'talent' | 'gate';
  title: string;
  subtitle: string;
  description: string;
  screenImage: string;
  highlightBadge: string;
}

export const APP_FEATURES: AppFeatureSpot[] = [
  {
    id: 'nahw',
    title: 'Safe AI Nahw Tutor',
    subtitle: 'Filtered Arabic Grammar Parser',
    description:
      'Real-time Arabic syntax breakdown with a strict content-safety filter blocking unsafe or off-topic prompts before they ever reach the child.',
    screenImage: ASSETS.screenSafeAiNahw,
    highlightBadge: '92% First-Try Accuracy',
  },
  {
    id: 'galaxy',
    title: 'Cosmic Learning Galaxy',
    subtitle: 'Stars · XP · Daily Streaks',
    description:
      'Gamified Arabic, Stories, Action, and Science planets reward curiosity with 988+ Stars, 5,155 XP, and positive 4-day study streaks.',
    screenImage: ASSETS.galaxyArabic,
    highlightBadge: '5,155 XP Logged',
  },
  {
    id: 'talent',
    title: 'On-Device Talent Map',
    subtitle: '100% Local Behavioral Profiling',
    description:
      'Analyzes play choices locally on the phone to surface Leadership & Empathy, Language & Stories, and Movement inclinations without cloud exposure.',
    screenImage: ASSETS.appTalentMap,
    highlightBadge: 'Zero Cloud Exposure',
  },
  {
    id: 'gate',
    title: 'PIN Parental Gate',
    subtitle: '4-Digit Lock · 3-Try Lockout',
    description:
      'Encrypted 4-digit parental gate triggers an automated lockout and security alert after 3 wrong PIN attempts inside a 100% ad-free sandbox.',
    screenImage: ASSETS.screenPinGate,
    highlightBadge: '100% Ad-Free Sandbox',
  },
];

export const FIELD_METRICS = [
  {
    value: 92,
    suffix: '%',
    label: 'First-Try Nahw Accuracy',
    context: 'AI-guided Arabic grammar vs. traditional drills',
    accent: '#22D3EE',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Talent Discovery (5/5)',
    context: 'Distinct inclinations mapped locally on-device',
    accent: '#FBBF24',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Active Engagement',
    context: '5,155 XP · 988 Stars · 4-Day Streak logged',
    accent: '#34D399',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Verified Cyber Safety',
    context: 'Zero ads, zero leaks, 3-try PIN lockout verified',
    accent: '#818CF8',
  },
];

export const COMPARISON_ROWS = [
  {
    criterion: 'Safe AI Nahw Parser',
    existing: 'Not available',
    sadeem: 'Child-safe filtered AI tutor',
  },
  {
    criterion: 'Gamified Learning',
    existing: 'Passive videos & static quizzes',
    sadeem: 'Interactive cosmic planets & XP',
  },
  {
    criterion: 'On-Device Talent Map',
    existing: 'Not available (cloud tracking)',
    sadeem: 'Local behavioral interest profiling',
  },
  {
    criterion: 'Parental Dashboard',
    existing: 'Basic or no detailed reports',
    sadeem: 'Detailed progress & talent insights',
  },
  {
    criterion: 'Privacy & PIN Security',
    existing: 'Ads, trackers & weak locks',
    sadeem: 'Zero-cloud & 3-try PIN lockout',
  },
];

export const ROADMAP_STEPS = [
  {
    phase: 'Short-Term · 3–6 Months',
    year: '2026',
    title: 'Institutional School Pilots & MOUs',
    points: [
      'Sign partnership agreements with Ministries of Education, primary schools & tutoring centers.',
      'Deploy teacher analytics dashboards & advanced Nahw curriculum tiers.',
    ],
  },
  {
    phase: 'Mid-Term · 12 Months',
    year: '2027',
    title: 'AI Speech & Multilingual Expansion',
    points: [
      'Integrate AI Speech Recognition for live Arabic pronunciation feedback.',
      'Launch English & French learner interfaces for non-native Arabic students worldwide.',
    ],
  },
  {
    phase: 'Long-Term · Scale Phase',
    year: '2028–2030',
    title: 'Global Stores & 1M+ Safe Learners',
    points: [
      'Public rollout on Apple App Store & Google Play with global B2B academy licenses.',
      'Reach 1,000,000+ active learners inside a 100% ad-free, low-carbon edge ecosystem.',
    ],
  },
];

export const REFERENCES_LIST = [
  {
    code: 'COPPA',
    title: "Children's Online Privacy Protection Act (16 CFR Part 312)",
    relevance: 'Enforces verifiable parental consent, zero behavioral ad tracking, and minimal data collection for children under 13.',
  },
  {
    code: 'OWASP MASVS',
    title: 'OWASP Mobile Application Security Verification Standard',
    relevance: 'Guides encrypted local credential storage (Expo SecureStore), 3-try PIN lockout enforcement, and strict network isolation.',
  },
  {
    code: 'SDT & Gamification',
    title: 'Self-Determination Theory & Intrinsic EdTech Gamification',
    relevance: 'Structures XP, Stars, and Streaks around mastery autonomy and competence rather than manipulative loot loops.',
  },
];
