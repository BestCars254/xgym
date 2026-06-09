import { Link, useLocation } from 'react-router-dom';

/**
 * 画面下に追従する「無料体験受付中」のCTA。
 * お問い合わせページ自体では非表示にする。
 */
export function FloatingCTA() {
  const { pathname } = useLocation();
  if (pathname === '/contact') return null;

  return (
    <Link
      to="/contact"
      aria-label="無料体験を予約する"
      className="group fixed bottom-5 right-4 z-40 flex items-center gap-3 rounded-full bg-brand-red px-5 py-3.5 text-white shadow-lg shadow-brand-red/30 ring-1 ring-white/20 transition-all hover:bg-brand-redDark hover:shadow-xl sm:bottom-6 sm:right-6 sm:px-6"
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
  );
}
