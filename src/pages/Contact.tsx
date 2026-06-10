import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { SectionHeader } from '../components/SectionHeader';
import { LINE_URL } from '../components/FloatingCTA';

// Web3Forms のアクセスキー（公開しても安全。送信先 iwazaki.xgym@gmail.com に紐づく）。
// 環境変数が設定されていればそちらを優先する。
const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? 'e2a99f1f-075e-4a7b-ad8c-9c1752a94ad0';

const plans = [
  '無料体験を予約したい',
  'パーソナル 月2回プラン（¥15,000/月）',
  'パーソナル 月4回プラン（¥28,000/月）',
  'パーソナル 月8回プラン（¥52,000/月）',
  '通い放題オプションについて知りたい',
  '通常会員・自主トレ（¥9,800/月〜）',
  'その他・相談したい',
];

const timeSlots = [
  '午前（6:00〜12:00）',
  '午後（12:00〜17:00）',
  '夕方〜夜（17:00〜23:00）',
  '日曜（8:00〜12:00）',
  '時間はおまかせ',
];

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  // 過去日は選べないように、今日以降に制限する。
  const today = new Date().toLocaleDateString('sv-SE');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append('access_key', WEB3FORMS_ACCESS_KEY);
    data.append('subject', '【X FITNESS GYM】Webサイトからの新しいお問い合わせ');
    data.append('from_name', 'X FITNESS GYM Website');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-2xl px-5 text-center md:px-10">
          <Reveal>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-red/10 text-3xl text-brand-red">
              ✓
            </div>
            <h1 className="mt-8 font-serif text-3xl font-bold text-brand-ink md:text-4xl">
              お問い合わせありがとうございます
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-neutral-600">
              内容を受け付けました。担当者より、ご希望の日時に合わせてご連絡いたします。
              お急ぎの場合はお電話（
              <a href="tel:08032833857" className="font-semibold text-brand-red">
                080-3283-3857
              </a>
              ）でもご予約いただけます。
            </p>
            <Link
              to="/"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand-red px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-redDark"
            >
              ホームに戻る
            </Link>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5 md:px-10">
        <SectionHeader
          eyebrow="お問い合わせ・無料体験予約"
          title="まずはお気軽にご連絡ください。"
          subtitle="下のフォームに必要事項をご記入ください。ご希望の日時に合わせて、担当者よりご連絡いたします。初回体験は無料です。"
          align="center"
        />

        <Reveal delay={40}>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-10 flex items-center justify-between gap-4 rounded-2xl bg-[#06C755] px-6 py-5 text-white shadow-sm transition-all hover:brightness-110"
          >
            <span className="flex flex-col">
              <span className="text-base font-bold">LINEで気軽に相談・予約する</span>
              <span className="mt-0.5 text-xs text-white/85">
                フォーム入力が面倒な方はこちら。友だち追加してメッセージを送るだけ。
              </span>
            </span>
            <span aria-hidden className="font-display text-2xl">
              →
            </span>
          </a>
        </Reveal>

        <div className="mt-8 flex items-center gap-4 text-xs text-neutral-400">
          <span className="h-px flex-1 bg-neutral-200" />
          またはフォームから
          <span className="h-px flex-1 bg-neutral-200" />
        </div>

        <Reveal delay={80}>
          <form
            onSubmit={handleSubmit}
            className="mt-8 grid gap-6 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm md:p-10"
          >
            {/* Honeypot anti-spam field */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid gap-6 md:grid-cols-2">
              <Field label="お名前" required>
                <input
                  type="text"
                  name="お名前"
                  required
                  autoComplete="name"
                  className={inputClass}
                  placeholder="山田 太郎"
                />
              </Field>
              <Field label="電話番号" required>
                <input
                  type="tel"
                  name="電話番号"
                  required
                  autoComplete="tel"
                  className={inputClass}
                  placeholder="090-1234-5678"
                />
              </Field>
            </div>

            <Field label="メールアドレス">
              <input
                type="email"
                name="メールアドレス"
                autoComplete="email"
                className={inputClass}
                placeholder="example@email.com"
              />
            </Field>

            <Field label="ご希望メニュー" required>
              <select name="ご希望メニュー" required defaultValue="" className={inputClass}>
                <option value="" disabled>
                  選択してください
                </option>
                {plans.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </Field>

            <div className="grid gap-6 md:grid-cols-2">
              <Field label="ご希望日" required>
                <input type="date" name="ご希望日" required min={today} className={inputClass} />
              </Field>
              <Field label="ご希望の時間帯" required>
                <select name="ご希望の時間帯" required defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    選択してください
                  </option>
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="メッセージ・ご質問（任意）">
              <textarea
                name="メッセージ"
                rows={4}
                className={`${inputClass} resize-y`}
                placeholder="トレーニング経験、体の気になるところ、ご質問などがあればご記入ください。"
              />
            </Field>

            {status === 'error' && (
              <p className="rounded-xl bg-brand-red/10 px-4 py-3 text-sm text-brand-red">
                送信に失敗しました。お手数ですが、もう一度お試しいただくか、お電話（080-3283-3857）でご連絡ください。
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-redDark disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' ? '送信中…' : '予約・お問い合わせを送信する'}
              {status !== 'sending' && <span aria-hidden>→</span>}
            </button>

            <p className="text-center text-xs leading-relaxed text-neutral-500">
              送信いただいた内容は、ご予約・お問い合わせ対応のためにのみ使用します。
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

const inputClass =
  'w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-brand-ink outline-none transition-colors focus:border-brand-red focus:ring-1 focus:ring-brand-red';

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-semibold text-brand-ink">
        {label}
        {required && <span className="ml-1 text-brand-red">*</span>}
      </span>
      {children}
    </label>
  );
}
