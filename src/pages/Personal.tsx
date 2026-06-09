import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { SectionHeader } from '../components/SectionHeader';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { PersonalPlans } from '../components/PersonalPlans';
import { Faq } from '../components/Faq';

const whyPersonal = [
  {
    title: '正しいフォームで効果が変わる',
    body: '間違ったフォームでいくらトレーニングしても結果は出ません。プロが一回一回フォームを確認し、あなたの体に合った動きを教えます。',
  },
  {
    title: 'あなただけのメニュー',
    body: '「肩が痛い」「膝が弱い」「時間がない」そんな個人の事情に合わせたプログラムを組みます。市販のメニューは誰にでも合うものではありません。',
  },
  {
    title: '食事もトータルでサポート',
    body: 'トレーニングだけでは結果は半分。食事アドバイスも含めて、生活全体から変えていきます。',
  },
];

const trainerProfiles: {
  name: string;
  role: string;
  credentials: string;
  quote: string;
  recommendedFor?: string;
}[] = [
  {
    name: '上地　クリスチャン',
    role: 'IFBB 公認 · オーナー',
    credentials:
      '元ボディビルダー / パーソナルフィットネストレーナー / ウェイトトレーニング処方スペシャリスト / トレーナー歴20年以上',
    quote: '結果を出すには、正しい知識と継続が必要です。私が全力でサポートします。',
  },
  {
    name: '上地　ネイア',
    role: 'IFBB 公認',
    credentials: 'パーソナルフィットネストレーナー / トレーナー歴10年以上',
    quote: '女性の体のことを理解した指導で、無理なく理想の体へ。',
  },
  {
    name: 'イワザキ　ハファエル',
    role: 'IFBB 公認',
    credentials:
      'パーソナルフィットネストレーナー / ウェイトトレーニング処方スペシャリスト / マッスルゲート浜松 メンズフィジーク優勝 / トレーナー歴6年以上',
    quote: '競技で培った経験を、あなたの日常トレーニングに活かします。',
  },
  {
    name: '高橋　勇気',
    role: 'IFBB 公認',
    credentials:
      'パーソナルフィットネストレーナー / 有名パーソナル店で4年勤務 / 大会賞を多数受賞 / トレーナー歴6年以上',
    quote: '一緒に目標を決めて、一緒に達成しましょう。あなたを導きます。',
  },
  {
    name: 'イワザキ　レオナルド',
    role: 'IFBB 公認',
    credentials: 'パーソナルトレーナー / 大会入賞 / トレーニング歴9年',
    quote:
      '9年間、自分自身もトレーニングを続けてきたからこそ、初心者がつまずきやすいポイントを誰よりも理解しています。話をじっくり聞くことを大切にし、あなた自身もまだ気づいていない本当の悩みや目標まで引き出します。趣味は登山。一歩ずつ頂上を目指すように、あなたの体づくりにも長く寄り添います。',
    recommendedFor: '何から始めればいいか分からない方、まずはじっくり話を聞いてほしい方。',
  },
];

const steps = [
  {
    n: '01',
    title: 'ご予約',
    body: 'お問い合わせフォームまたはお電話でご連絡ください。担当トレーナーをご相談できます。',
  },
  {
    n: '02',
    title: '体組成測定・カウンセリング',
    body: '体の状態を数値で確認。目標と生活スタイルをヒアリングします。',
  },
  {
    n: '03',
    title: '個別プログラム作成',
    body: 'あなた専用のトレーニングと食事プランを作成します。',
  },
  {
    n: '04',
    title: 'トレーニング開始',
    body: '毎回トレーナーがマンツーマンで指導。フォームから食事まで全力サポート。',
  },
];

const recommendations = [
  '一人でジムに行っても何をすればいいかわからない',
  '運動を始めたいけど、続けられるか不安',
  'ダイエットを何度試しても結果が出なかった',
  '腰痛・膝痛があってトレーニングが怖い',
  '大会に向けて本格的に体を作りたい',
  '短期間で確実に結果を出したい',
];

export default function Personal() {
  return (
    <>
      {/* HERO — premium dark feel */}
      <section className="relative overflow-hidden bg-brand-night text-white">
        <span
          aria-hidden
          className="pointer-events-none absolute -left-16 top-8 select-none font-display text-[280px] leading-none tracking-wider text-white/5 md:text-[420px]"
        >
          PT
        </span>
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1.1fr_1fr] md:gap-16 md:px-10 md:py-28">
          <div className="flex flex-col justify-center">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-red">
                マンツーマン指導 · IFBB公認トレーナー
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-serif text-[40px] font-bold leading-[1.2] md:text-[64px] md:leading-[1.1]">
                あなただけの
                <br />
                トレーニングを。
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-white/75 md:text-[17px]">
                一人では気づけない体の使い方、正しいフォーム、食事のバランス。IFBBトレーナーが完全個別でサポートします。結果にコミットしたい方へ。
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-redDark"
                >
                  無料体験を予約する <span aria-hidden>→</span>
                </Link>
                <a
                  href="#personal-pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-transparent px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  料金を見る
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/15 pt-8">
                {[
                  { big: 'IFBB', label: '国際公認資格' },
                  { big: '1:1', label: '完全個別指導' },
                  { big: '🍽️', label: '食事アドバイス込み' },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-3xl tracking-wide text-brand-red md:text-4xl">
                      {s.big}
                    </div>
                    <div className="mt-1 text-xs text-white/60 md:text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <ImagePlaceholder
              label="PERSONAL TRAINING"
              className="aspect-[4/5] w-full"
              rounded="rounded-3xl"
            />
          </Reveal>
        </div>
      </section>

      {/* WHY PERSONAL */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <SectionHeader
            eyebrow="なぜパーソナルトレーニング？"
            title="一人では限界がある。プロと一緒だから変われる。"
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {whyPersonal.map((c, i) => (
              <Reveal key={c.title} delay={i * 90}>
                <div className="flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-8 transition-shadow hover:shadow-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-red text-white font-display text-2xl">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="mt-6 font-serif text-xl font-bold leading-snug text-brand-ink">
                    {c.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-600">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PERSONAL PRICING */}
      <section id="personal-pricing" className="bg-brand-soft py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <SectionHeader
            eyebrow="パーソナル料金"
            title="プロの指導を、手の届く価格で。"
            subtitle="指導の回数で選べる、月額制のパーソナルプラン。まずは無料体験からどうぞ。"
            align="center"
          />

          <Reveal>
            <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-neutral-200 bg-white px-6 py-5 text-left">
              <p className="text-sm leading-relaxed text-neutral-700">
                パーソナルプランは、<span className="font-semibold text-brand-ink">トレーナーとのマンツーマン指導が中心</span>です。
                指導のない日もご自身で通い放題にしたい方は、<span className="font-semibold text-brand-ink">通い放題オプション（月 +¥3,000）</span>を追加できます。
                <span className="font-semibold text-brand-ink">週2回プラン（月8回）は、通い放題が無料</span>でついてきます。
                <br className="hidden sm:block" />
                自主トレだけをご希望の方は、
                <Link to="/" className="font-semibold text-brand-red underline underline-offset-4">
                  通常会員プラン
                </Link>
                をご覧ください。
              </p>
            </div>
          </Reveal>

          <PersonalPlans />

          <Reveal delay={320}>
            <div className="mt-12 flex justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-red px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-redDark"
              >
                無料体験を予約する <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRAINER PROFILES — detailed */}
      <section id="trainers" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <SectionHeader
            eyebrow="あなたを担当するトレーナー"
            title="経験と実績を持つプロが、本気でサポートします。"
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {trainerProfiles.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <article className="grid h-full grid-cols-[140px_1fr] gap-5 rounded-3xl border border-neutral-200 bg-white p-6 transition-all hover:shadow-xl md:grid-cols-[180px_1fr] md:gap-7 md:p-8">
                  <ImagePlaceholder
                    label={t.name}
                    className="aspect-[3/4] h-full w-full"
                    rounded="rounded-2xl"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
                      {t.role}
                    </span>
                    <h3 className="mt-2 font-serif text-xl font-bold text-brand-ink md:text-2xl">
                      {t.name}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-neutral-600">
                      {t.credentials}
                    </p>
                    <blockquote className="mt-5 border-l-2 border-brand-red pl-4 text-sm italic leading-relaxed text-brand-ink">
                      「{t.quote}」
                    </blockquote>
                    {t.recommendedFor && (
                      <p className="mt-4 rounded-lg bg-brand-soft px-3 py-2 text-xs leading-relaxed text-brand-ink">
                        <span className="font-bold text-brand-red">こんな方におすすめ：</span>
                        {t.recommendedFor}
                      </p>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-brand-soft py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <SectionHeader
            eyebrow="パーソナルの流れ"
            title="はじめての方も安心の4ステップ"
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className="flex h-full flex-col rounded-2xl bg-white p-7 ring-1 ring-neutral-100">
                  <span className="font-display text-4xl tracking-wider text-brand-red">
                    {s.n}
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-bold text-brand-ink">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RECOMMENDATIONS */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <SectionHeader
            eyebrow="こんな方におすすめ"
            title="あなたに当てはまりませんか？"
          />

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {recommendations.map((r, i) => (
              <Reveal key={r} delay={i * 60}>
                <div className="flex items-start gap-4 rounded-2xl bg-brand-soft p-5 md:p-6">
                  <span
                    aria-hidden
                    className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-red text-xs font-bold text-white"
                  >
                    ✓
                  </span>
                  <p className="text-sm leading-relaxed text-brand-ink md:text-base">{r}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Faq />

      {/* CTA BANNER */}
      <section className="relative overflow-hidden bg-brand-night py-20 text-white md:py-28">
        <span
          aria-hidden
          className="pointer-events-none absolute -left-10 top-1/2 -translate-y-1/2 select-none font-display text-[320px] leading-none tracking-wider text-white/5 md:text-[480px]"
        >
          X
        </span>
        <div className="relative mx-auto max-w-5xl px-5 text-center md:px-10">
          <Reveal>
            <h2 className="font-serif text-[28px] font-bold leading-tight md:text-[44px]">
              まず一度、体験してみませんか？
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-[17px]">
              初回体験は無料です。担当トレーナーがあなたの体と目標をお聞きして、最適なプランをご提案します。話を聞くだけでも大丈夫です。
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 flex flex-col items-center gap-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-red px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-redDark"
              >
                無料体験を予約する <span aria-hidden>→</span>
              </Link>
              <div className="flex flex-col items-center gap-1">
                <a
                  href="tel:08032833857"
                  className="font-display text-5xl tracking-wide text-white hover:text-brand-red md:text-6xl"
                >
                  080-3283-3857
                </a>
                <span className="text-xs uppercase tracking-widest text-white/50">
                  パーソナル担当直通
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
