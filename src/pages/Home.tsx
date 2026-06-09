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
    body: '世界基準の資格を持つプロがマンツーマンで指導。オーナーのCristianは元ボディビルダーで、IFBB公式代表として浜松で唯一の指導を行います。',
  },
  {
    title: 'あなただけのプログラム',
    body: '「腕が上がるようになりたい」「膝が痛くてしゃがめない」そんな悩みからスタート。一人ひとりの体に合わせたメニューを組みます。',
  },
  {
    title: '怪我を防ぎ、体を守る知識',
    body: '競技レベルまで体を追い込み、怪我も経験してきたからこそ。無理に鍛えるのではなく、体を守りながら強くする方法でサポートします。',
  },
  {
    title: '30台以上の豊富なマシン',
    body: '完全個室ジムにはない台数。あなたの経験と骨格に合ったマシンを選べるから、効率よく成長できます。',
  },
  {
    title: '本格的なフリーウェイトエリア',
    body: 'ダンベル・バーベル・マシンが充実。軽い重量から競技レベルまで対応できる設備が揃っています。',
  },
  {
    title: '温かいコミュニティ',
    body: '大手ジムにはない、温かいコミュニティの中で続けられます。一人で続けるのが苦手な方も、自然と励まし合える環境です。',
  },
];

const facilityFacts = [
  { label: '営業時間', value: '月〜土 6:00〜23:00 ／ 日 8:00〜12:00' },
  { label: '駐車場', value: '無料駐車場あり' },
  { label: 'アクセス', value: '浜松市中央区天王町1800' },
];

const trainers = [
  {
    name: '上地　クリスチャン',
    role: 'IFBB 公認 · オーナー',
    helps: '初心者・シニアの体づくりから競技者まで対応',
    credentials:
      '元ボディビルダー。競技で体を追い込み、怪我も経験。だからこそ「体を守りながら強くする」指導が信条 / ウェイトトレーニング処方スペシャリスト / トレーナー歴20年以上',
  },
  {
    name: '上地　ネイア',
    role: 'IFBB 公認',
    helps: '女性の体づくり・ダイエットのサポートが得意',
    credentials: 'パーソナルフィットネストレーナー / トレーナー歴10年以上',
  },
  {
    name: 'イワザキ　ハファエル',
    role: 'IFBB 公認',
    helps: '筋力アップ・本格的なボディメイクを目指す方へ',
    credentials:
      'パーソナルフィットネストレーナー / ウェイトトレーニング処方スペシャリスト / マッスルゲート浜松 メンズフィジーク優勝 / トレーナー歴6年以上',
  },
  {
    name: '高橋　勇気',
    role: 'IFBB 公認',
    helps: '膝・腰の不安、姿勢改善のサポートが得意',
    credentials:
      'パーソナルフィットネストレーナー / 有名パーソナル店で4年勤務 / 大会賞を多数受賞 / トレーナー歴6年以上',
  },
];

const steps = [
  { n: '01', title: '無料体験を予約', body: 'お問い合わせフォームまたはお電話で、お気軽にご連絡ください。' },
  { n: '02', title: 'カウンセリング＆体組成測定', body: '目標・体の状態・生活スタイルをヒアリングし、体組成を測定します。' },
  { n: '03', title: 'お試しトレーニング', body: 'プロのトレーナーとマンツーマンで、実際のセッションを体験。' },
  { n: '04', title: 'あなた専用プラン開始', body: '測定と体験をもとに、あなただけのプランでスタートします。' },
];

const personalPlans = [
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

const memberPlans = [
  { name: '通常会員', tag: '月ごと契約', price: '¥9,800', desc: '縛りなく自由に通えるスタンダード。' },
  { name: '1年契約プラン', tag: 'お得な年間契約', price: '¥7,000', desc: '本気で続けたい方に選ばれています。' },
  { name: '学生・若者応援プラン', tag: '20歳以下限定', price: '¥4,980', desc: '学生・20歳以下の方への特別プラン。' },
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
                  パーソナルの料金を見る
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
                マシンも、知識も、揃っているから
                <br className="hidden md:block" />
                できることがあります。
              </>
            }
            subtitle={
              <>
                パーソナルで大切なのは、マシンの数だけではありません。「誰が、どう導いてくれるか」。世界基準の資格を持つトレーナーが、あなたの体と目標に合わせて、マンツーマンで伴走します。
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

          <Reveal delay={120}>
            <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 sm:grid-cols-3">
              {facilityFacts.map((f) => (
                <div key={f.label} className="bg-white px-6 py-5">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
                    {f.label}
                  </span>
                  <p className="mt-1.5 text-sm text-brand-ink">{f.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <SectionHeader
            eyebrow="料金プラン"
            title="マンツーマンで、最短で。一人ひとりの体に。"
            subtitle="当ジムの主役は、IFBB公認トレーナーによるマンツーマン指導です。まずは無料体験から、あなたの体に合うかを確かめてください。"
            align="center"
          />

          <Reveal>
            <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-neutral-200 bg-brand-soft px-6 py-5 text-left">
              <p className="text-sm leading-relaxed text-neutral-700">
                パーソナルプランは、<span className="font-semibold text-brand-ink">トレーナーとのマンツーマン指導が中心</span>です。
                指導のない日もご自身で通い放題にしたい方は、<span className="font-semibold text-brand-ink">通い放題オプション（月 +¥3,000）</span>を追加できます。
                <span className="font-semibold text-brand-ink">週2回プラン（月8回）は、通い放題が無料</span>でついてきます。
                <br className="hidden sm:block" />
                自主トレだけをご希望の方は、ページ下部の<span className="font-semibold text-brand-ink">通常会員プラン</span>をご覧ください。
              </p>
            </div>
          </Reveal>

          {/* パーソナル（主役） */}
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
                      <p
                        className={`text-sm ${p.recommended ? 'text-white/70' : 'text-neutral-500'}`}
                      >
                        ＋オプション：
                        <span className={p.recommended ? 'font-semibold text-white' : 'font-semibold text-brand-ink'}>
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
            <div className="mx-auto mt-6 max-w-3xl rounded-2xl bg-brand-soft px-6 py-4 text-center">
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

          <Reveal delay={280}>
            <div className="mt-10 flex justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-red px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-redDark"
              >
                無料体験を予約する <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>

          {/* 通常会員（脇役） */}
          <div className="mt-20 border-t border-neutral-200 pt-14">
            <Reveal>
              <div className="text-center">
                <h3 className="font-serif text-xl font-bold text-brand-ink md:text-2xl">
                  まずは自分のペースで通いたい方へ
                </h3>
                <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-neutral-500">
                  通常会員（自主トレのみ）。トレーナーの指導はつきませんが、充実した設備を自由にご利用いただけます。
                </p>
              </div>
            </Reveal>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {memberPlans.map((m, i) => (
                <Reveal key={m.name} delay={i * 70}>
                  <div className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">
                      {m.tag}
                    </span>
                    <h4 className="mt-2 font-serif text-lg font-bold text-brand-ink">{m.name}</h4>
                    <div className="mt-3 flex items-baseline gap-1.5">
                      <span className="font-display text-3xl text-brand-ink">{m.price}</span>
                      <span className="text-xs text-neutral-500">/ 月</span>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-neutral-600">{m.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
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
            subtitle={
              <>
                私たちはボディビルで競技レベルまで体を追い込み、その過程で怪我も経験してきました。だからこそ、無理に鍛えるのではなく、体を守りながら強くする方法を熟知しています。世界基準の資格を持つトレーナーが、それぞれの専門性で、あなたの目標をサポートします。
              </>
            }
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
                    <p className="mt-3 rounded-lg bg-brand-soft px-3 py-2 text-xs font-semibold leading-relaxed text-brand-ink">
                      {t.helps}
                    </p>
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
            eyebrow="体験から入会までの流れ"
            title="はじめての方も、4ステップで。"
            subtitle="パーソナルが初めての方もご安心ください。何をするのか、順番にご案内します。"
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

      {/* TESTIMONIALS */}
      <Testimonials />

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
