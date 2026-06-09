import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { SectionHeader } from '../components/SectionHeader';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { Testimonials } from '../components/Testimonials';
import gymInterior from '../assets/gym-interior.jpg';
import freeWeights from '../assets/free-weights.jpg';
import exterior from '../assets/exterior.jpg';
import machineArea from '../assets/machine-area.jpg';
import frontDesk from '../assets/front-desk.jpg';

const whyCards = [
  {
    title: 'IFBB 国際公認トレーナーが在籍',
    body: '世界基準の資格を持つプロが在籍。オーナーのCristianは元ボディビルダーで、IFBB公式代表として浜松で唯一の指導を行います。現在は浜松を健康にするために尽力しています。',
  },
  {
    title: 'あなただけのプログラム',
    body: '「腕が上がるようになりたい」「膝が痛くてしゃがめない」そんな悩みからスタート。一人ひとりの体に合わせたメニューを組みます。',
  },
  {
    title: '本格的なフリーウェイトエリア',
    body: 'ダンベル・バーベル・マシンが充実。軽い重量から競技レベルまで対応できる設備が揃っています。',
  },
  {
    title: '温かいコミュニティ',
    body: '大手ジムにはない、温かいコミュニティの中で続けられます。一人で続けるのが苦手な方も、自然と仲間と励まし合える環境です。',
  },
  {
    title: '朝6時から夜11時まで営業',
    body: '月〜土 6:00〜23:00、日曜 8:00〜12:00。早起きの方も、仕事帰りの方も通えます。',
  },
  {
    title: '無料駐車場あり',
    body: '車でのアクセスも安心。浜松市内の天王町エリアで、駐車スペースを完備しています。',
  },
];

const trainers = [
  {
    name: '上地　クリスチャン',
    role: 'IFBB 公認 · オーナー',
    credentials:
      '元ボディビルダー / パーソナルフィットネストレーナー / ウェイトトレーニング処方スペシャリスト / トレーナー歴20年以上',
  },
  {
    name: '上地　ネイア',
    role: 'IFBB 公認',
    credentials: 'パーソナルフィットネストレーナー / トレーナー歴10年以上',
  },
  {
    name: 'イワザキ　ハファエル',
    role: 'IFBB 公認',
    credentials:
      'パーソナルフィットネストレーナー / ウェイトトレーニング処方スペシャリスト / マッスルゲート浜松 メンズフィジーク優勝 / トレーナー歴6年以上',
  },
  {
    name: '高橋　勇気',
    role: 'IFBB 公認',
    credentials:
      'パーソナルフィットネストレーナー / 有名パーソナル店で4年勤務 / 大会賞を多数受賞 / トレーナー歴6年以上',
  },
];

const steps = [
  { n: '01', title: '無料体験を予約', body: 'お問い合わせフォームまたはお電話で、お気軽にご連絡ください。' },
  { n: '02', title: 'カウンセリング', body: '目標・体の状態・生活スタイルをヒアリング。' },
  { n: '03', title: '体験トレーニング', body: 'プロのトレーナーと一緒に実際に動いてみます。' },
  { n: '04', title: 'ご入会・スタート', body: 'あなたに合ったプランで、今日から始めましょう。' },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.05fr_1fr] md:gap-16 md:px-10 md:py-24 lg:py-28">
          <div className="flex flex-col justify-center">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-red">
                IFBB 公認 · 浜松市天王町
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-serif text-[40px] font-bold leading-[1.2] text-brand-ink md:text-[64px] md:leading-[1.1]">
                自分の体に、
                <br />
                本気になる日。
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-neutral-600 md:text-[17px]">
                腕が上がりやすくなった。しゃがめるようになった。筋肉をつけることは、毎日の動きやすさにつながります。プロのトレーナーと一緒に、あなたに合ったトレーニングを始めましょう。
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
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-ink/20 bg-white px-7 py-3.5 text-sm font-semibold text-brand-ink transition-colors hover:border-brand-ink hover:bg-brand-soft"
                >
                  料金プランを見る
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-12 grid grid-cols-3 gap-6 border-t border-neutral-200 pt-8">
                {[
                  { big: '5+', label: '年の実績' },
                  { big: 'IFBB', label: '国際公認資格' },
                  { big: '6:00', label: '朝から営業' },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-3xl tracking-wide text-brand-red md:text-4xl">
                      {s.big}
                    </div>
                    <div className="mt-1 text-xs text-neutral-500 md:text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <img
              src={gymInterior}
              alt="X FITNESS GYM 店内"
              className="aspect-[4/5] w-full rounded-3xl object-cover"
            />
            <div className="absolute -bottom-4 -left-4 hidden h-24 w-24 rounded-2xl bg-brand-red md:block" />
          </Reveal>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="bg-brand-soft py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <SectionHeader
            eyebrow="なぜ X FITNESS GYM？"
            title={
              <>
                24時間のパーソナルジムには
                <br className="hidden md:block" />
                できないことがあります。
              </>
            }
            subtitle={
              <>
                完全個室のジムだと、マシンに制限があり、自分の経験と骨格に合ったトレーニングができなく、挫折する方が多い。しかし、X FITNESS GYMは30台以上のマシンがあるからこそ、きっとあなたに合ったマシンで効率よく成長できます。
              </>
            }
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((c, i) => (
              <Reveal key={c.title} delay={i * 60}>
                <div className="group h-full rounded-2xl bg-white p-8 shadow-sm ring-1 ring-neutral-100 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-red/10 font-bold text-brand-red">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="mt-5 text-lg font-bold leading-snug text-brand-ink">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <SectionHeader
            eyebrow="料金プラン"
            title="シンプルな料金で、本格的なトレーニングを。"
            subtitle="入会金・追加費用は別途ご確認ください。まずは無料体験からどうぞ。"
            align="center"
          />

          <Reveal>
            <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-neutral-200 bg-brand-soft px-6 py-5 text-left">
              <p className="text-sm leading-relaxed text-neutral-700">
                当ジムは、<span className="font-semibold text-brand-ink">ご自身でトレーニングされる通常のジム利用</span>と、
                <span className="font-semibold text-brand-ink">トレーナーがマンツーマンで指導するパーソナルトレーニング</span>の
                両方をご用意しています。
                <br className="hidden sm:block" />
                下記の料金は<span className="font-semibold text-brand-ink">ご自身でトレーニングされる通常会員向け</span>の料金です。
                パーソナルトレーニングをご希望の方は別料金となります（
                <Link to="/personal" className="font-semibold text-brand-red underline underline-offset-4">
                  パーソナルの詳細はこちら
                </Link>
                ）。
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Reveal>
              <div className="flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-8">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                  スタンダード
                </span>
                <h3 className="mt-3 font-serif text-2xl font-bold text-brand-ink">通常会員</h3>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-5xl text-brand-ink">¥9,800</span>
                  <span className="text-sm text-neutral-500">/ 月</span>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-neutral-600">
                  月ごとの契約。縛りなく自由に通えるスタンダードプランです。
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-brand-night p-8 text-white shadow-xl">
                <span className="absolute right-6 top-6 rounded-full bg-brand-red px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
                  おすすめ
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-white/60">
                  ベスト バリュー
                </span>
                <h3 className="mt-3 font-serif text-2xl font-bold">1年契約プラン</h3>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-5xl text-white">¥7,000</span>
                  <span className="text-sm text-white/70">/ 月</span>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-white/75">
                  年間契約でお得に。本気で続けたい方に選ばれているプランです。
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-8">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                  20歳以下限定
                </span>
                <h3 className="mt-3 font-serif text-2xl font-bold text-brand-ink">
                  学生・若者応援プラン
                </h3>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-5xl text-brand-ink">¥4,980</span>
                  <span className="text-sm text-neutral-500">/ 月</span>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-neutral-600">
                  若いうちから正しい体の使い方を。学生・20歳以下の方への特別プランです。
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={240}>
            <div className="mt-14 flex justify-center">
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

      {/* GALLERY */}
      <section className="bg-brand-soft py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <SectionHeader
            eyebrow="施設・設備"
            title="本格的な環境が揃っています。"
          />

          <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-4">
            <Reveal className="col-span-2 row-span-2 md:col-span-2">
              <img
                src={freeWeights}
                alt="フリーウェイトエリア"
                className="h-full w-full rounded-2xl object-cover"
              />
            </Reveal>
            <Reveal delay={80}>
              <img
                src={exterior}
                alt="店舗外観"
                className="h-full w-full rounded-2xl object-cover"
              />
            </Reveal>
            <Reveal delay={120} className="md:row-span-2">
              <img
                src={machineArea}
                alt="マシンエリア"
                className="h-full w-full rounded-2xl object-cover"
              />
            </Reveal>
            <Reveal delay={160}>
              <img
                src={frontDesk}
                alt="フロント"
                className="h-full w-full rounded-2xl object-cover"
              />
            </Reveal>
            <Reveal delay={200} className="col-span-2 md:col-span-2">
              <ImagePlaceholder label="有酸素エリア" className="h-full w-full" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* TRAINERS */}
      <section id="trainers" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <SectionHeader
            eyebrow="トレーナー紹介"
            title="全員がIFBB公認。プロが、あなたに寄り添います。"
            subtitle="世界基準の資格を持つトレーナーが在籍。それぞれの専門性を活かして、あなたの目標をサポートします。"
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trainers.map((t, i) => (
              <Reveal key={t.name} delay={i * 70}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all hover:-translate-y-1 hover:shadow-lg">
                  <ImagePlaceholder
                    label={t.name}
                    className="aspect-[4/5] w-full"
                    rounded="rounded-none"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
                      {t.role}
                    </span>
                    <h3 className="mt-2 font-serif text-xl font-bold text-brand-ink">{t.name}</h3>
                    <p className="mt-3 text-xs leading-relaxed text-neutral-600">
                      {t.credentials}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO START */}
      <section className="bg-brand-soft py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <SectionHeader
            eyebrow="ご入会の流れ"
            title="4ステップで始められます"
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

      {/* ACCESS */}
      <section id="access" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <SectionHeader
            eyebrow="アクセス・営業時間"
            title="浜松市でお待ちしています。"
          />

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <Reveal>
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                    住所
                  </span>
                  <p className="mt-2 text-base text-brand-ink">静岡県浜松市中央区天王町1800</p>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                    営業時間
                  </span>
                  <ul className="mt-2 space-y-1 text-sm text-brand-ink">
                    <li>月〜土 6:00〜23:00</li>
                    <li>日曜 8:00〜12:00</li>
                    <li className="font-semibold text-brand-red">
                      スタッフ対応 19:00〜21:00
                    </li>
                  </ul>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                    電話
                  </span>
                  <a
                    href="tel:0534439443"
                    className="mt-2 block font-display text-4xl tracking-wide text-brand-ink hover:text-brand-red md:text-5xl"
                  >
                    053-443-9443
                  </a>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                    メール
                  </span>
                  <p className="mt-2 text-sm text-brand-ink">
                    <a
                      href="mailto:xfitnessgymjp@gmail.com"
                      className="break-all hover:text-brand-red"
                    >
                      xfitnessgymjp@gmail.com
                    </a>
                    <br />
                    または{' '}
                    <a
                      href="mailto:iwazaki.xgym@gmail.com"
                      className="break-all hover:text-brand-red"
                    >
                      iwazaki.xgym@gmail.com
                    </a>
                  </p>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                    駐車場
                  </span>
                  <p className="mt-2 text-sm text-brand-ink">無料駐車場あり</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 md:aspect-auto md:h-full">
                <iframe
                  title="X FITNESS GYM 地図"
                  src="https://www.google.com/maps?q=%E9%9D%99%E5%B2%A1%E7%9C%8C%E6%B5%9C%E6%9D%BE%E5%B8%82%E5%A4%A9%E7%8E%8B%E7%94%BA1800&output=embed"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CTA BANNER */}
      <section className="relative overflow-hidden bg-brand-night py-20 text-white md:py-28">
        <span
          aria-hidden
          className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 select-none font-display text-[320px] leading-none tracking-wider text-white/5 md:text-[480px]"
        >
          X
        </span>
        <div className="relative mx-auto max-w-5xl px-5 text-center md:px-10">
          <Reveal>
            <h2 className="font-serif text-[28px] font-bold leading-tight md:text-[44px]">
              体験トレーニング、無料でご参加いただけます。
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-[17px]">
              カウンセリングからスタート。専用マシンであなたの体の状態と目標をお聞きして、最適なプランをご提案します。
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
                  href="tel:0534439443"
                  className="font-display text-5xl tracking-wide text-white hover:text-brand-red md:text-6xl"
                >
                  053-443-9443
                </a>
                <span className="text-xs uppercase tracking-widest text-white/50">
                  電話受付　月〜土 6:00〜23:00
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-10 text-sm text-white/60">
              パーソナルトレーニングもご用意しています →{' '}
              <Link to="/personal" className="font-semibold text-white underline underline-offset-4">
                詳しく見る
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
