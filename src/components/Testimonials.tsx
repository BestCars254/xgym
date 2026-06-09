import { useState } from 'react';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

const testimonials = [
  {
    name: 'H.C 様',
    quote: '一言で言うと「最高」です。毎回ジムに行くのが楽しみになります。',
    qa: [
      {
        q: 'なぜ X FITNESS GYM を選びましたか？',
        a: '設備が充実していることはもちろんですが、トレーナーの皆さんがとても親切でプロフェッショナルなところに惹かれました。自分の目標に合わせて、解剖学的な視点も含めて的確なアドバイスをくれるので、「ここなら信頼して体を任せられる！」と思い選びました。',
      },
      {
        q: '入会前はどんな悩みがありましたか？',
        a: '最初は「自分でも本当にやっていけるのかな…」という不安が一番大きかったです。また、日々の活動量に対する消費カロリーのバランスや、トレーニングの正しいフォームが分からず、自己流では限界を感じていました。体脂肪をコントロールしながら、しっかり筋肉をつけてメリハリのある体を作りたいけれど、1人で迷わずに続けていける自信がありませんでした。',
      },
      {
        q: 'トレーニングを始めて、体や生活にどんな変化がありましたか？',
        a: 'ベンチプレスやレッグカールなど、正しいフォームを教わったことで、狙った筋肉にしっかり効かせられるようになり、体の引き締まりを実感しています！また、日々の消費カロリーを意識するようになり、毎日の食事や休息のバランスなど、健康に対するライフスタイル全体の意識が大きく変わりました。',
      },
      {
        q: 'トレーナーの指導はいかがでしたか？',
        a: '一言で言うと「最高」です！ ただキツい運動をさせるのではなく、「なぜこのトレーニングが必要なのか」「どこの筋肉を動かしているのか」を論理的に、かつポジティブに教えてくれます。モチベーションの上げ方も上手なので、毎回ジムに行くのが楽しみになります。',
      },
      {
        q: 'これから入会を検討している方へメッセージをお願いします！',
        a: '「自分にできるかな…」と迷っているなら、絶対に一歩を踏み出してみることをおすすめします！ X FITNESS GYMのトレーナーは、一人ひとりの目標やライフスタイルに真剣に寄り添ってくれます。体が変わると、毎日の生活や自分への自信も驚くほど変わりますよ！',
      },
    ],
  },
  {
    name: 'J.T 様',
    quote: '一人では出せない力を、引き出してもらえます。',
    qa: [
      {
        q: 'なぜ X FITNESS GYM を選びましたか？',
        a: '知り合いからの紹介で知りました。そして、パーソナルトレーナーのもとで、いろいろな生徒さんが成長している姿を見て、とてもリスペクトできる場所だと感じました。自分も同じように成長したいと思い、X FITNESS GYMを選びました。',
      },
      {
        q: '入会前にどんな悩みがありましたか？',
        a: '膝の怪我から復帰したばかりで、一人ではトレーニングを続けられるか不安がありました。また、筋力を戻したい気持ちに加えて、減量や食事に関する正しい知識も身につけたいと思っていました。',
      },
      {
        q: 'トレーニングを始めて、体や生活にどんな変化がありましたか？',
        a: '少しずつ体が以前の状態に戻ってきて、体重も徐々に落ちてきています。食事の考え方や生活習慣も変わり、無理なく続けやすくなりました。',
      },
      {
        q: 'トレーナーの指導はいかがでしたか？',
        a: '説明がとても分かりやすく、自分に合った形で指導してくれます。また、トレーニング中の追い込みもすごく良く、一人では出せない力を引き出してもらえます。',
      },
      {
        q: 'これから入会を検討している方へ一言お願いします。',
        a: '生活を変えたい、体を変えたいと思っているなら、ぜひ一歩踏み出してほしいです。X FITNESS GYMには、しっかり寄り添ってくれる良いパーソナルトレーナーがいるので、自信を持って紹介できます。',
      },
    ],
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;
  const go = (n: number) => setIndex((n + count) % count);
  const person = testimonials[index];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 md:px-10">
        <SectionHeader
          eyebrow="お客様の声"
          title="実際に通われている方の、リアルな声。"
          subtitle="入会のきっかけや体の変化について、会員さまにお聞きしました。"
          align="center"
        />

        <Reveal delay={80}>
          <figure
            key={index}
            className="mt-14 animate-fade-up overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm"
          >
            <blockquote className="bg-brand-night px-7 py-8 md:px-10">
              <span aria-hidden className="font-display text-5xl leading-none text-brand-red">
                “
              </span>
              <p className="mt-1 font-serif text-xl font-bold leading-relaxed text-white md:text-2xl">
                {person.quote}
              </p>
              <figcaption className="mt-4 text-xs uppercase tracking-widest text-white/50">
                {person.name} ／ X FITNESS GYM 会員
              </figcaption>
            </blockquote>

            <div className="divide-y divide-neutral-100 px-7 md:px-10">
              {person.qa.map((t) => (
                <div key={t.q} className="py-6">
                  <p className="text-sm font-bold text-brand-red">Q. {t.q}</p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-700 md:text-[15px]">
                    {t.a}
                  </p>
                </div>
              ))}
            </div>
          </figure>
        </Reveal>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="前のお客様の声"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white text-lg text-brand-ink transition-colors hover:border-brand-red hover:text-brand-red"
          >
            ←
          </button>

          <div className="flex items-center gap-2.5">
            {testimonials.map((p, i) => (
              <button
                key={p.name}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`${i + 1}件目のお客様の声`}
                aria-current={i === index}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? 'w-7 bg-brand-red' : 'w-2.5 bg-neutral-300 hover:bg-neutral-400'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="次のお客様の声"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white text-lg text-brand-ink transition-colors hover:border-brand-red hover:text-brand-red"
          >
            →
          </button>
        </div>

        <p className="mt-4 text-center text-xs text-neutral-400">
          {index + 1} / {count} 件
        </p>
      </div>
    </section>
  );
}
