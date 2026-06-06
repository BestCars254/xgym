import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type Props = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'left' | 'center';
  onDark?: boolean;
};

export function SectionHeader({ eyebrow, title, subtitle, align = 'left', onDark = false }: Props) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-3xl ${alignment}`}>
      <Reveal>
        <span
          className={`text-xs font-bold uppercase tracking-[0.25em] ${
            onDark ? 'text-brand-red' : 'text-brand-red'
          }`}
        >
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2
          className={`mt-4 font-serif text-[28px] font-bold leading-[1.3] md:text-[40px] md:leading-[1.25] ${
            onDark ? 'text-white' : 'text-brand-ink'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={160}>
          <p
            className={`mt-5 text-base leading-relaxed md:text-[17px] ${
              onDark ? 'text-white/70' : 'text-neutral-600'
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
