import { Reveal } from './Reveal';

export const personalPlans = [
  {
    eyebrow: 'はじめて・維持向け',
    name: '月2回プラン',
    price: '¥15,000',
    desc: '隔週ペースで、正しいフォームと体の状態を確認。運動習慣の維持や、本格コース卒業後のメンテナンスに最適です。',
    unlimited: '通い放題 +¥3,000/月',
    unlimitedFree: false,
    recommended: false,
  },
  {
    eyebrow: 'いちばん選ばれています',
    name: '月4回プラン',
    price: '¥28,000',
    desc: '週1回の指導で、無理なく着実に体を変える定番プラン。仕事帰りでも続けやすいペースです。',
    unlimited: '通い放題 +¥3,000/月',
    unlimitedFree: false,
    recommended: true,
  },
  {
    eyebrow: '本気で変えたい方へ',
    name: '月8回プラン',
    price: '¥52,000',
    desc: '週2回でしっかり追い込み、最短で結果を出したい方へ。トレーナーが進捗を細かく管理します。',
    unlimited: '通い放題が無料でついてきます',
    unlimitedFree: true,
    recommended: false,
  },
];

/**
 * パーソナル3プランのカード＋共通帯＋注記。
 * ホームとパーソナルページの両方で使い、料金表示を常に一致させる。
 */
export function PersonalPlans() {
  return (
    <>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {personalPlans.map((p, i) => (
          <Reveal key={p.name} delay={i * 80}>
            <div
              className={`relative flex h-full flex-col rounded-3xl p-8 ${
                p.recommended
                  ? 'bg-brand-night text-white shadow-xl ring-2 ring-brand-red'
                  : 'border border-neutral-200 bg-white'
              }`}
            >
              {p.recommended && (
                <span className="absolute right-6 top-6 rounded-full bg-brand-red px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
                  おすすめ
                </span>
              )}
              <span
                className={`text-xs font-bold uppercase tracking-widest ${
                  p.recommended ? 'text-white/60' : 'text-neutral-500'
                }`}
              >
                {p.eyebrow}
              </span>
              <h3
                className={`mt-2 font-serif text-2xl font-bold ${
                  p.recommended ? 'text-white' : 'text-brand-ink'
                }`}
              >
                {p.name}
              </h3>
              <div className="mt-5 flex items-baseline gap-2">
                <span
                  className={`font-display text-5xl ${p.recommended ? 'text-white' : 'text-brand-ink'}`}
                >
                  {p.price}
                </span>
                <span className={`text-sm ${p.recommended ? 'text-white/70' : 'text-neutral-500'}`}>
                  / 月
                </span>
              </div>
              <p
                className={`mt-4 flex-1 text-sm leading-relaxed ${
                  p.recommended ? 'text-white/75' : 'text-neutral-600'
                }`}
              >
                {p.desc}
              </p>
              <div
                className={`mt-5 border-t pt-4 ${
                  p.recommended ? 'border-white/15' : 'border-neutral-100'
                }`}
              >
                {p.unlimitedFree ? (
                  <p
                    className={`flex items-start gap-2 text-sm font-semibold ${
                      p.recommended ? 'text-white' : 'text-brand-red'
                    }`}
                  >
                    <span className="mt-0.5">★</span>
                    {p.unlimited}
                  </p>
                ) : (
                  <p className={`text-sm ${p.recommended ? 'text-white/70' : 'text-neutral-500'}`}>
                    ＋オプション：
                    <span
                      className={p.recommended ? 'font-semibold text-white' : 'font-semibold text-brand-ink'}
                    >
                      {p.unlimited}
                    </span>
                  </p>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={240}>
        <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-neutral-200 bg-white px-6 py-4 text-center shadow-sm">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
            全プラン共通で含むもの
          </span>
          <p className="mt-1.5 text-sm font-semibold text-brand-ink">
            初回カウンセリング＋体組成測定　／　基本の食事アドバイス
          </p>
        </div>
      </Reveal>

      <Reveal delay={280}>
        <p className="mx-auto mt-4 max-w-3xl text-center text-xs leading-relaxed text-neutral-500">
          表示は月額料金（税込）です。入会金 ¥22,000 が別途かかります（現在オープン記念につき無料）。
        </p>
      </Reveal>
    </>
  );
}
