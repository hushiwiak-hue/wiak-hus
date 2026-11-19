import { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { X, Copy, Check, Download, ExternalLink, QrCode, RotateCcw } from 'lucide-react';
import { FOUNDER_CONTACT } from '../data/presentationData';
import { soundEngine } from '../utils/sound';

interface WebsiteQrModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WebsiteQrModal({ isOpen, onClose }: WebsiteQrModalProps) {
  const [targetUrl, setTargetUrl] = useState<string>(FOUNDER_CONTACT.websiteUrl);
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    let active = true;
    const cleanUrl = targetUrl.trim() || FOUNDER_CONTACT.websiteUrl;
    QRCode.toDataURL(cleanUrl, {
      width: 640,
      margin: 2,
      errorCorrectionLevel: 'H',
      color: {
        dark: '#050814',
        light: '#FFFFFF',
      },
    })
      .then((url) => {
        if (active) setQrDataUrl(url);
      })
      .catch(() => {
        if (active) setQrDataUrl('');
      });
    return () => {
      active = false;
    };
  }, [isOpen, targetUrl]);

  if (!isOpen) return null;

  const activeUrl = targetUrl.trim() || FOUNDER_CONTACT.websiteUrl;

  const handleCopy = async () => {
    soundEngine.playClick();
    try {
      await navigator.clipboard.writeText(activeUrl);
      soundEngine.playSuccess();
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleDownloadQrPng = async () => {
    soundEngine.playClick();
    try {
      const qrRaw = await QRCode.toDataURL(activeUrl, {
        width: 720,
        margin: 2,
        errorCorrectionLevel: 'H',
        color: { dark: '#050814', light: '#FFFFFF' },
      });

      const canvas = document.createElement('canvas');
      canvas.width = 900;
      canvas.height = 1080;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Dark cosmic card frame
      ctx.fillStyle = '#070B19';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Gold border accent
      ctx.strokeStyle = '#FBBF24';
      ctx.lineWidth = 6;
      ctx.strokeRect(24, 24, canvas.width - 48, canvas.height - 48);

      // Header text
      ctx.fillStyle = '#FBBF24';
      ctx.font = 'bold 34px system-ui, -apple-system, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('SAIF 2026  ·  SADEEM', canvas.width / 2, 92);

      ctx.fillStyle = '#E2E8F0';
      ctx.font = '600 22px system-ui, -apple-system, sans-serif';
      ctx.fillText('Scan to Launch Interactive Presentation & Brochure', canvas.width / 2, 134);

      // White QR container
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(130, 175, 640, 640);

      const qrImg = new Image();
      qrImg.onload = () => {
        ctx.drawImage(qrImg, 150, 195, 600, 600);

        ctx.fillStyle = '#38BDF8';
        ctx.font = 'bold 20px monospace';
        ctx.fillText('ID: SAIF120170  |  Hasni Wiam', canvas.width / 2, 875);

        ctx.fillStyle = '#94A3B8';
        ctx.font = '17px monospace';
        const shortUrl = activeUrl.length > 68 ? `${activeUrl.slice(0, 65)}...` : activeUrl;
        ctx.fillText(shortUrl, canvas.width / 2, 918);

        ctx.fillStyle = '#FBBF24';
        ctx.font = '600 20px system-ui, -apple-system, sans-serif';
        ctx.fillText('Ziane Achour University of Djelfa, Algeria', canvas.width / 2, 975);

        const link = document.createElement('a');
        link.download = 'SADEEM_SAIF2026_Website_QR.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
        soundEngine.playSuccess();
      };
      qrImg.src = qrRaw;
    } catch {
      soundEngine.playAlert();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="SADEEM Website Link and QR Code"
    >
      <div className="relative flex w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-slate-700 bg-[#0A1022] shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-400/10 text-amber-300">
              <QrCode className="h-4 w-4" />
            </div>
            <div>
              <h2 className="font-display text-base font-bold text-white">
                SADEEM Interactive Pitch Link &amp; QR Code
              </h2>
              <p className="text-xs text-slate-400">
                Scan with any smartphone camera to open the live presentation
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              soundEngine.playClick();
              onClose();
            }}
            className="rounded-lg border border-slate-700 bg-slate-900 p-2 text-slate-300 hover:bg-slate-800 hover:text-white cursor-pointer"
            aria-label="Close QR Code modal"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* QR Stage */}
        <div className="flex flex-col items-center gap-5 p-6">
          <div className="rounded-2xl border-2 border-amber-400/50 bg-white p-4 shadow-xl">
            {qrDataUrl ? (
              <img
                src={qrDataUrl}
                alt="QR code for SADEEM live interactive website"
                className="h-56 w-56 object-contain"
              />
            ) : (
              <div className="flex h-56 w-56 items-center justify-center text-xs text-slate-500">
                Generating QR...
              </div>
            )}
          </div>

          {/* Direct URL Display & Edit */}
          <div className="w-full space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Live Public Share Link</span>
              {targetUrl !== FOUNDER_CONTACT.websiteUrl && (
                <button
                  type="button"
                  onClick={() => {
                    soundEngine.playClick();
                    setTargetUrl(FOUNDER_CONTACT.websiteUrl);
                  }}
                  className="inline-flex items-center gap-1 text-amber-300 hover:text-amber-200 cursor-pointer"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>Reset Default</span>
                </button>
              )}
            </div>
            <div className="flex items-center gap-2">
              <input
                type="url"
                value={targetUrl}
                onChange={(e) => setTargetUrl(e.target.value)}
                aria-label="Website URL encoded in QR code"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 font-mono-tabular text-xs text-cyan-300 focus:border-amber-400 focus:outline-none"
              />
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-medium text-white hover:bg-slate-800 whitespace-nowrap shrink-0 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="text-emerald-300">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex w-full flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-4">
            <a
              href={activeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-300 hover:text-cyan-200"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>Open Live URL</span>
            </a>

            <button
              type="button"
              onClick={handleDownloadQrPng}
              className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-amber-300 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download QR Card (PNG)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
