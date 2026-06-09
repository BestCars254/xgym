import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="border-t-4 border-brand-red bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-6 text-sm leading-relaxed text-neutral-600">
              Personal Trainer · Bodybuilder · Esthetic
            </p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              静岡県浜松市中央区天王町1800
            </p>
            <a
              href="tel:08032833857"
              className="mt-2 inline-block text-sm font-semibold text-brand-ink hover:text-brand-red"
            >
              TEL 080-3283-3857
            </a>
            <p className="mt-3 text-xs leading-relaxed text-neutral-500">
              営業：月〜土 6:00〜23:00 ／ 日 8:00〜12:00
              <br />
              パーソナル・新規の自主トレ会員は予約制です。
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-brand-ink">
              メニュー
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-neutral-600">
              <li>
                <Link to="/" className="hover:text-brand-red">
                  ホーム
                </Link>
              </li>
              <li>
                <Link to="/personal" className="hover:text-brand-red">
                  パーソナルトレーニング
                </Link>
              </li>
              <li>
                <Link to="/#trainers" className="hover:text-brand-red">
                  トレーナー
                </Link>
              </li>
              <li>
                <Link to="/#access" className="hover:text-brand-red">
                  アクセス
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-brand-ink">
              お問い合わせ
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-neutral-600">
              <li>
                <a href="mailto:iwazaki.xgym@gmail.com" className="break-all hover:text-brand-red">
                  iwazaki.xgym@gmail.com
                </a>
              </li>
              <li>
                <a href="mailto:xfitnessgymjp@gmail.com" className="break-all hover:text-brand-red">
                  xfitnessgymjp@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/xgymjapan/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand-red"
                >
                  Instagram（@xgymjapan）
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-red px-4 py-2 text-xs font-semibold text-white hover:bg-brand-redDark"
                >
                  無料体験を予約 →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-neutral-200 pt-6 text-xs text-neutral-500 md:flex-row">
          <span>© 2026 X FITNESS GYM · 静岡県浜松市</span>
          <span className="flex items-center gap-2">
            🏅 <span className="font-medium tracking-wide">IFBB Official Gym</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
