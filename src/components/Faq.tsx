import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

const faqs = [
  {
    q: '運動経験がなくても大丈夫ですか？',
    a: '運動経験ゼロの方も大歓迎です。一人ひとりの体力やレベルに合わせて、無理のないところからスタートしますのでご安心ください。',
  },
  {
    q: '体験のとき、無理な勧誘はありませんか？',
    a: '健康のために必要だと感じた場合はご提案することがありますが、無理な勧誘は一切いたしません。続けるかどうかは、ご自身のペースで決めていただけます。',
  },
  {
    q: '持ち物・服装は何が必要ですか？',
    a: '運動できる服装、運動靴（靴底がまっすぐなものがおすすめです）、タオルをお持ちください。',
  },
  {
    q: 'シャワーはありますか？',
    a: 'ございます。トレーニング後にご利用いただけます。',
  },
  {
    q: '予約は必要ですか？',
    a: 'パーソナル・新規の自主トレ会員は予約制です。まずは無料体験から、お気軽にお問い合わせください。',
  },
  {
    q: '予約の変更・キャンセルはできますか？',
    a: '無料体験の予約変更は可能です。パーソナルのキャンセルは24時間前までにご連絡ください。24時間を過ぎたキャンセル、および無断欠席は1回分の消化となります。',
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-brand-soft py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-10">
        <SectionHeader
          eyebrow="よくある質問"
          title="はじめての方の、よくある質問。"
          align="center"
        />

        <div className="mt-12 space-y-4">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 50}>
              <details className="group rounded-2xl border border-neutral-200 bg-white px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-bold text-brand-ink">
                  <span className="flex items-start gap-3">
                    <span className="font-display text-xl leading-none text-brand-red">Q</span>
                    {f.q}
                  </span>
                  <span className="mt-0.5 shrink-0 text-brand-red transition-transform group-open:rotate-45">
                    ＋
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-neutral-700">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
