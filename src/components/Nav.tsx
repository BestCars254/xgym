import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Logo } from './Logo';

const links = [
  { label: 'ホーム', to: '/' },
  { label: 'パーソナル', to: '/personal' },
  { label: 'トレーナー', hash: '#trainers' },
  { label: 'アクセス', hash: '#access' },
  { label: 'お問い合わせ', to: '/contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const jumpTo = (hash: string) => {
    setOpen(false);
    const target = hash.replace('#', '');
    const doScroll = () => {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    if (location.pathname !== '/' && location.pathname !== '/personal') {
      navigate('/');
      setTimeout(doScroll, 80);
    } else {
      doScroll();
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow ${
        scrolled ? 'shadow-nav' : 'shadow-none border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-5 md:px-10">
        <Link to="/" className="shrink-0" aria-label="X FITNESS GYM トップへ">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) =>
            l.to ? (
              <Link
                key={l.label}
                to={l.to}
                className={`text-sm font-medium transition-colors hover:text-brand-red ${
                  location.pathname === l.to ? 'text-brand-red' : 'text-brand-ink'
                }`}
              >
                {l.label}
              </Link>
            ) : (
              <button
                key={l.label}
                onClick={() => jumpTo(l.hash!)}
                className="text-sm font-medium text-brand-ink transition-colors hover:text-brand-red"
              >
                {l.label}
              </button>
            )
          )}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-redDark"
          >
            無料体験を予約
          </Link>
        </div>

        <button
          aria-label="メニュー"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-6 bg-brand-ink transition-transform ${
              open ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span className={`block h-0.5 w-6 bg-brand-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span
            className={`block h-0.5 w-6 bg-brand-ink transition-transform ${
              open ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden border-t border-neutral-100 bg-white transition-[max-height] duration-300 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {links.map((l) =>
            l.to ? (
              <Link
                key={l.label}
                to={l.to}
                className="rounded-lg px-3 py-3 text-base font-medium text-brand-ink hover:bg-brand-soft"
              >
                {l.label}
              </Link>
            ) : (
              <button
                key={l.label}
                onClick={() => jumpTo(l.hash!)}
                className="rounded-lg px-3 py-3 text-left text-base font-medium text-brand-ink hover:bg-brand-soft"
              >
                {l.label}
              </button>
            )
          )}
          <Link
            to="/contact"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-5 py-3 text-sm font-semibold text-white"
          >
            無料体験を予約
          </Link>
        </div>
      </div>
    </header>
  );
}
