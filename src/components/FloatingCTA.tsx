import { Link, useLocation } from 'react-router-dom';

export const LINE_URL = 'https://lin.ee/Wvrb19o';

/**
 * 画面下に追従するCTA。LINE相談（緑）と無料体験予約（赤）の2段。
 * お問い合わせページ自体では非表示にする。
 */
export function FloatingCTA() {
  const { pathname } = useLocation();
  if (pathname === '/contact') return null;

  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-2.5 sm:bottom-6 sm:right-6">
      <a
        href={LINE_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="LINEで相談する"
        className="flex items-center gap-2 rounded-full bg-[#06C755] px-5 py-3 text-white shadow-lg shadow-[#06C755]/30 ring-1 ring-white/20 transition-all hover:brightness-110 hover:shadow-xl"
      >
        <span className="font-display text-lg leading-none">LINE</span>
        <span className="text-sm font-bold">で気軽に相談</span>
      </a>

      <Link
        to="/contact"
        aria-label="無料体験を予約する"
        className="group flex items-center gap-3 rounded-full bg-brand-red px-5 py-3.5 text-white shadow-lg shadow-brand-red/30 ring-1 ring-white/20 transition-all hover:bg-brand-redDark hover:shadow-xl sm:px-6"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
        </span>
        <span className="flex flex-col leading-tight">
          <span className="text-[11px] font-bold uppercase tracking-widest text-white/80">
            無料体験 受付中
          </span>
          <span className="text-sm font-bold">いますぐ予約する →</span>
        </span>
      </Link>
    </div>
  );
}
