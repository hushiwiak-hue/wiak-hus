import { jsPDF } from 'jspdf';
import QRCode from 'qrcode';
import {
  ALL_APP_SCREENS,
  ASSETS,
  COMPARISON_ROWS,
  FOUNDER_CONTACT,
  REFERENCES_LIST,
  ROADMAP_STEPS,
} from '../data/presentationData';

interface LoadedImage {
  dataUrl: string;
  format: 'PNG' | 'JPEG';
  width: number;
  height: number;
}

async function loadImageAsDataUrl(
  url: string,
  format: 'PNG' | 'JPEG' = 'JPEG',
  maxDim = 900
): Promise<LoadedImage | null> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      try {
        const rawW = img.naturalWidth || img.width;
        const rawH = img.naturalHeight || img.height;
        const scale = Math.min(1, maxDim / Math.max(rawW, rawH));
        const targetW = Math.max(1, Math.round(rawW * scale));
        const targetH = Math.max(1, Math.round(rawH * scale));

        const canvas = document.createElement('canvas');
        canvas.width = targetW;
        canvas.height = targetH;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(null);
          return;
        }
        if (format === 'JPEG') {
          ctx.fillStyle = '#0f172a';
          ctx.fillRect(0, 0, targetW, targetH);
        }
        ctx.drawImage(img, 0, 0, targetW, targetH);
        const dataUrl =
          format === 'JPEG'
            ? canvas.toDataURL('image/jpeg', 0.86)
            : canvas.toDataURL('image/png');
        resolve({ dataUrl, format, width: targetW, height: targetH });
      } catch {
        resolve(null);
      }
    };
    img.onerror = () => resolve(null);
    img.src = url;
  });
}

function fitDimensions(
  srcW: number,
  srcH: number,
  maxW: number,
  maxH: number
): { w: number; h: number } {
  const ratio = Math.min(maxW / srcW, maxH / srcH);
  return { w: srcW * ratio, h: srcH * ratio };
}

export async function generateSadeemBrochurePdf(): Promise<void> {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    compress: true,
  });

  const pageW = 210;
  const pageH = 297;
  const margin = 10;
  const contentW = pageW - margin * 2;

  // Preload banner, BMC, mascot, QR cards, and all app screenshots in parallel
  const [saifStrip, mascotImg, bmcImg, igQrImg, siteQrDataUrl, ...screenImgs] = await Promise.all([
    loadImageAsDataUrl(ASSETS.saifHeaderStrip, 'PNG', 1400),
    loadImageAsDataUrl(ASSETS.appProfile1, 'JPEG', 700),
    loadImageAsDataUrl(ASSETS.bmcFull, 'JPEG', 1400),
    loadImageAsDataUrl(ASSETS.instagramQr, 'JPEG', 600),
    QRCode.toDataURL(FOUNDER_CONTACT.websiteUrl, {
      width: 320,
      margin: 1,
      errorCorrectionLevel: 'M',
      color: { dark: '#050814', light: '#FFFFFF' },
    }).catch(() => null),
    ...ALL_APP_SCREENS.map((s) => loadImageAsDataUrl(s.image, 'JPEG', 700)),
  ]);

  const screensPerPage = 12; // 3 columns x 4 rows per A4 page
  const screenPageCount = Math.ceil(ALL_APP_SCREENS.length / screensPerPage);
  const totalPages = 2 + screenPageCount;

  const drawPageChrome = (pageNum: number) => {
    doc.setFillColor(10, 16, 34);
    doc.rect(0, 0, pageW, 13, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(251, 191, 36);
    doc.text(
      `SAIF 2026  ·  SADEEM EXECUTIVE DOSSIER (${ALL_APP_SCREENS.length} SCREENS)`,
      margin,
      8.5
    );

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.8);
    doc.setTextColor(203, 213, 225);
    doc.text('ID: SAIF120170  |  Hasni Wiam', pageW - margin, 8.5, { align: 'right' });

    doc.setDrawColor(226, 232, 240);
    doc.line(margin, pageH - 11, pageW - margin, pageH - 11);
    doc.setFontSize(7.5);
    doc.setTextColor(100, 116, 139);
    doc.text(
      `Hasni Wiam  ·  Ziane Achour University of Djelfa, Algeria  ·  ${FOUNDER_CONTACT.email}  ·  ${FOUNDER_CONTACT.phoneDisplay}`,
      margin,
      pageH - 6.5
    );
    doc.text(`Page ${pageNum} of ${totalPages}`, pageW - margin, pageH - 6.5, {
      align: 'right',
    });
  };

  // =========================================================================
  // PAGE 1: EXECUTIVE SUMMARY, FIELD VALIDATION, ARCHITECTURE & COMPARISON
  // =========================================================================
  drawPageChrome(1);

  let y = 17;

  if (saifStrip) {
    const dims = fitDimensions(saifStrip.width, saifStrip.height, contentW, 17);
    doc.addImage(saifStrip.dataUrl, saifStrip.format, margin, y, contentW, dims.h);
    y += dims.h + 4;
  }

  doc.setFillColor(15, 23, 42);
  doc.roundedRect(margin, y, contentW, 38, 3, 3, 'F');

  if (mascotImg) {
    const mDim = fitDimensions(mascotImg.width, mascotImg.height, 24, 30);
    doc.addImage(
      mascotImg.dataUrl,
      mascotImg.format,
      pageW - margin - mDim.w - 4,
      y + 4,
      mDim.w,
      mDim.h
    );
  }

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(17);
  doc.setTextColor(251, 191, 36);
  doc.text('SADEEM: Igniting Young Minds Safely', margin + 5, y + 10);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(226, 232, 240);
  const subtitleLines = doc.splitTextToSize(
    'A Cyber-Secure Interactive Educational Mobile App Transforming Children’s Screen Time through Multi-Domain Cosmic Learning, Safe AI Arabic Grammar (Nahw) Tutoring, On-Device Talent Discovery, and PIN-Protected Parental Controls.',
    contentW - 38
  );
  doc.text(subtitleLines, margin + 5, y + 17);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(56, 189, 248);
  doc.text(
    'React Native / Expo (iOS & Android)  ·  University Incubated (Djelfa)  ·  IP Filing in Progress',
    margin + 5,
    y + 33
  );

  y += 44;

  // 1. Classroom Field Validation
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text('1. Classroom Field Validation — Allaoua Yahia Primary School (N = 5 Pupils)', margin, y);
  y += 4;

  const kpis = [
    { val: '92%', label: 'First-Try Nahw Accuracy', sub: 'vs. high struggle in drills' },
    { val: '100% (5/5)', label: 'Local Talent Discovery', sub: 'Zero cloud data upload' },
    { val: '5,155 XP', label: '988 Stars · 4-Day Streak', sub: '100% active engagement' },
    { val: '100% Safe', label: 'Zero Ads & PIN Locked', sub: '3-try lockout verified' },
  ];

  const kpiW = (contentW - 9) / 4;
  kpis.forEach((k, idx) => {
    const kx = margin + idx * (kpiW + 3);
    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(203, 213, 225);
    doc.roundedRect(kx, y, kpiW, 22, 2, 2, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(15, 23, 42);
    doc.text(k.val, kx + 3, y + 8);

    doc.setFontSize(7.5);
    doc.setTextColor(3, 105, 161);
    doc.text(k.label, kx + 3, y + 14);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(100, 116, 139);
    doc.text(k.sub, kx + 3, y + 19);
  });

  y += 28;

  // 2. Three-Layer Technical Architecture
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text('2. Three-Layer Cyber-Secure Architecture', margin, y);
  y += 4;

  const layers = [
    {
      title: 'Frontend & Gamification',
      tools: 'React Native · Expo · Local Audio',
      desc: 'Cosmic planets with dynamic Stars, XP, and Daily Streaks paired with instant audio-visual corrective cues.',
    },
    {
      title: 'Safe AI & Talent Engine',
      tools: 'Content-Filtered AI + Local Analytics',
      desc: 'Strict Nahw safety filter blocks unsafe prompts; on-device engine maps inclinations without cloud exposure.',
    },
    {
      title: 'Cybersecurity & Storage',
      tools: 'AsyncStorage · Expo SecureStore',
      desc: 'Encrypted 4-digit PIN gate with automated 3-attempt lockout isolating child logs in a zero-ad sandbox.',
    },
  ];

  const layerW = (contentW - 6) / 3;
  layers.forEach((l, idx) => {
    const lx = margin + idx * (layerW + 3);
    doc.setFillColor(241, 245, 249);
    doc.setDrawColor(203, 213, 225);
    doc.roundedRect(lx, y, layerW, 30, 2, 2, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(l.title, lx + 3, y + 6);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.setTextColor(217, 119, 6);
    doc.text(l.tools, lx + 3, y + 11);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.2);
    doc.setTextColor(51, 65, 85);
    doc.text(doc.splitTextToSize(l.desc, layerW - 6), lx + 3, y + 16);
  });

  y += 36;

  // 3. Competitive Differentiation Matrix
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text('3. Competitive Differentiation Matrix', margin, y);
  y += 4;

  doc.setFillColor(15, 23, 42);
  doc.rect(margin, y, contentW, 7, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(255, 255, 255);
  doc.text('Feature / Criterion', margin + 3, y + 4.8);
  doc.text('Existing Kids Apps', margin + 55, y + 4.8);
  doc.text('SADEEM (MVP V2)', margin + 122, y + 4.8);
  y += 7;

  COMPARISON_ROWS.forEach((row, idx) => {
    doc.setFillColor(
      idx % 2 === 0 ? 255 : 248,
      idx % 2 === 0 ? 255 : 250,
      idx % 2 === 0 ? 255 : 252
    );
    doc.setDrawColor(226, 232, 240);
    doc.rect(margin, y, contentW, 8, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.8);
    doc.setTextColor(15, 23, 42);
    doc.text(row.criterion, margin + 3, y + 5.2);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(185, 28, 28);
    doc.text(row.existing, margin + 55, y + 5.2);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(4, 120, 87);
    doc.text(row.sadeem, margin + 122, y + 5.2);
    y += 8;
  });

  y += 6;

  // 4. Vision 2030 & Green Edge Sustainability
  doc.setFillColor(236, 253, 245);
  doc.setDrawColor(167, 243, 208);
  doc.roundedRect(margin, y, contentW, 24, 2, 2, 'FD');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(6, 95, 70);
  doc.text('4. Vision 2030 Alignment & Green Edge Sustainability', margin + 4, y + 6.5);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.8);
  doc.setTextColor(6, 78, 59);
  doc.text(
    doc.splitTextToSize(
      'SADEEM advances Human Capability Development and global Arabic empowerment (expanding to English and French interfaces with AI speech feedback). Running behavioral talent analytics locally on-device protects child privacy while cutting cloud server energy footprint as active users scale beyond 1M+.',
      contentW - 8
    ),
    margin + 4,
    y + 12
  );

  // =========================================================================
  // PAGES 2..(1 + screenPageCount): COMPLETE APP WALKTHROUGH (12 PER PAGE)
  // =========================================================================
  for (let p = 0; p < screenPageCount; p++) {
    const pageNum = 2 + p;
    const startIdx = p * screensPerPage;
    const endIdx = Math.min(ALL_APP_SCREENS.length, startIdx + screensPerPage);
    const slice = ALL_APP_SCREENS.slice(startIdx, endIdx);

    doc.addPage();
    drawPageChrome(pageNum);

    let sy = 19;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42);
    doc.text(
      `5. Complete Application Walkthrough — Screens ${startIdx + 1}–${endIdx} of ${ALL_APP_SCREENS.length}`,
      margin,
      sy
    );
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(100, 116, 139);
    doc.text(
      'High-resolution screenshots captured directly from SADEEM MVP V2 with verified functional breakdowns',
      margin,
      sy + 4.2
    );
    sy += 7.5;

    const gapX = 3;
    const gapY = 3;
    const cols = 3;
    const colW = (contentW - gapX * (cols - 1)) / cols; // ~61.3mm
    const cardH = 61;

    slice.forEach((screen, localIdx) => {
      const globalIdx = startIdx + localIdx;
      const col = localIdx % cols;
      const row = Math.floor(localIdx / cols);
      const cx = margin + col * (colW + gapX);
      const cy = sy + row * (cardH + gapY);

      doc.setFillColor(248, 250, 252);
      doc.setDrawColor(203, 213, 225);
      doc.roundedRect(cx, cy, colW, cardH, 2, 2, 'FD');

      // Phone thumbnail on left side of card
      const imgBoxW = 24;
      const imgBoxH = cardH - 4;
      const loaded = screenImgs[globalIdx];
      doc.setFillColor(15, 23, 42);
      doc.roundedRect(cx + 2, cy + 2, imgBoxW, imgBoxH, 1.2, 1.2, 'F');
      if (loaded) {
        const d = fitDimensions(loaded.width, loaded.height, imgBoxW - 1, imgBoxH - 1);
        const ix = cx + 2 + (imgBoxW - d.w) / 2;
        const iy = cy + 2 + (imgBoxH - d.h) / 2;
        doc.addImage(loaded.dataUrl, loaded.format, ix, iy, d.w, d.h);
      }

      // Text column on right side of card
      const tx = cx + imgBoxW + 4;
      const tw = colW - imgBoxW - 6;

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(5.8);
      doc.setTextColor(217, 119, 6);
      doc.text(
        doc.splitTextToSize(`${screen.category.toUpperCase()} · ${screen.badge}`, tw).slice(0, 1),
        tx,
        cy + 5.2
      );

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.4);
      doc.setTextColor(15, 23, 42);
      const titleLines = doc.splitTextToSize(`${globalIdx + 1}. ${screen.title}`, tw);
      doc.text(titleLines.slice(0, 2), tx, cy + 9.4);

      const descY = titleLines.length > 1 ? cy + 16.5 : cy + 13.8;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(6.1);
      doc.setTextColor(51, 65, 85);
      const descLines = doc.splitTextToSize(screen.description, tw);
      doc.text(descLines.slice(0, 7), tx, descY);

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(5.7);
      doc.setTextColor(3, 105, 161);
      const hlLines = doc.splitTextToSize(screen.highlights.join(' · '), tw);
      doc.text(hlLines.slice(0, 2), tx, cy + cardH - 6.5);
    });
  }

  // =========================================================================
  // FINAL PAGE: BUSINESS MODEL CANVAS, ROADMAP, REFERENCES & CONTACT
  // =========================================================================
  doc.addPage();
  drawPageChrome(totalPages);

  let py = 19;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(15, 23, 42);
  doc.text('6. Investment-Ready Business Model Canvas (70% B2B · 30% B2C)', margin, py);
  py += 4;

  if (bmcImg) {
    const bDim = fitDimensions(bmcImg.width, bmcImg.height, contentW, 110);
    doc.setDrawColor(203, 213, 225);
    doc.rect(margin, py, contentW, bDim.h, 'D');
    doc.addImage(
      bmcImg.dataUrl,
      bmcImg.format,
      margin + (contentW - bDim.w) / 2,
      py,
      bDim.w,
      bDim.h
    );
    py += bDim.h + 4;
  }

  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(203, 213, 225);
  doc.roundedRect(margin, py, contentW, 17, 2, 2, 'FD');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.2);
  doc.setTextColor(15, 23, 42);
  doc.text('Ethical Ad-Free SaaS Logic (Break-even projected in 12–18 months)', margin + 4, py + 5.5);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.4);
  doc.setTextColor(51, 65, 85);
  doc.text(
    doc.splitTextToSize(
      '• 70% B2B Subscriptions: Bulk per-student licenses for primary schools, tutoring centers & Arabic academies.  • 30% B2C Family Plans: Free core worlds + paid tier for full AI Nahw & talent reports, keeping kids 100% ad-free.',
      contentW - 8
    ),
    margin + 4,
    py + 10.5
  );
  py += 21;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text('7. Strategic Roadmap (2026–2030)', margin, py);
  py += 4;

  const rColW = (contentW - 6) / 3;
  ROADMAP_STEPS.forEach((step, idx) => {
    const rx = margin + idx * (rColW + 3);
    doc.setFillColor(241, 245, 249);
    doc.setDrawColor(203, 213, 225);
    doc.roundedRect(rx, py, rColW, 33, 2, 2, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(217, 119, 6);
    doc.text(`${step.year} · ${step.phase}`, rx + 3, py + 5.5);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(15, 23, 42);
    doc.text(doc.splitTextToSize(step.title, rColW - 6), rx + 3, py + 11);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(51, 65, 85);
    doc.text(doc.splitTextToSize(step.points.join(' '), rColW - 6), rx + 3, py + 19.5);
  });
  py += 38;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text('8. Scientific, Security & Legal References', margin, py);
  py += 4;

  REFERENCES_LIST.forEach((ref) => {
    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(margin, py, contentW, 11.5, 1.5, 1.5, 'FD');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.6);
    doc.setTextColor(3, 105, 161);
    doc.text(`${ref.code} — ${ref.title}`, margin + 3, py + 4.8);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(71, 85, 105);
    doc.text(ref.relevance, margin + 3, py + 9.2);
    py += 13;
  });

  py += 2;
  doc.setFillColor(15, 23, 42);
  doc.roundedRect(margin, py, contentW, 30, 2.5, 2.5, 'F');

  // Right-side dual QR boxes: Live Pitch QR + Instagram QR
  if (igQrImg) {
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(pageW - margin - 25, py + 2.5, 22, 25, 1.5, 1.5, 'F');
    doc.addImage(igQrImg.dataUrl, igQrImg.format, pageW - margin - 24, py + 3.5, 20, 20);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(5);
    doc.setTextColor(15, 23, 42);
    doc.text('INSTAGRAM', pageW - margin - 14, py + 26.2, { align: 'center' });
  }

  if (siteQrDataUrl) {
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(pageW - margin - 49, py + 2.5, 22, 25, 1.5, 1.5, 'F');
    doc.addImage(siteQrDataUrl, 'PNG', pageW - margin - 48, py + 3.5, 20, 20);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(5);
    doc.setTextColor(15, 23, 42);
    doc.text('LIVE SITE', pageW - margin - 38, py + 26.2, { align: 'center' });
  }

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(251, 191, 36);
  doc.text('Direct Founder & Investor Contact', margin + 5, py + 6.5);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.8);
  doc.setTextColor(255, 255, 255);
  doc.text(
    `Hasni Wiam  ·  Ziane Achour University of Djelfa, Algeria  ·  SAIF 2026 ID: ${FOUNDER_CONTACT.saifId}`,
    margin + 5,
    py + 11.8
  );
  doc.setTextColor(56, 189, 248);
  doc.text(
    `Email: ${FOUNDER_CONTACT.email}   |   WhatsApp & Call: ${FOUNDER_CONTACT.phoneDisplay}`,
    margin + 5,
    py + 17
  );
  doc.setTextColor(244, 114, 182);
  doc.text(
    `Instagram: ${FOUNDER_CONTACT.instagramHandle} (instagram.com/wiam_huxs)`,
    margin + 5,
    py + 22
  );
  doc.setTextColor(251, 191, 36);
  doc.setFontSize(6.4);
  doc.text(`Live App: ${FOUNDER_CONTACT.websiteUrl}`, margin + 5, py + 26.8);

  doc.save('SADEEM_SAIF2026_Investor_Brochure.pdf');
}
