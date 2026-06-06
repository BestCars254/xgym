type Props = { compact?: boolean; onDark?: boolean };

export function Logo({ compact = false, onDark = false }: Props) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-red text-white shadow-sm">
        <span className="font-display text-3xl leading-none tracking-wider">X</span>
      </div>
      <div className="flex flex-col leading-tight">
        <span
          className={`font-display tracking-[0.18em] ${
            compact ? 'text-sm' : 'text-base md:text-lg'
          } ${onDark ? 'text-white' : 'text-brand-ink'}`}
        >
          FITNESS GYM
        </span>
        <span
          className={`text-[10px] md:text-[11px] uppercase tracking-[0.22em] ${
            onDark ? 'text-white/60' : 'text-neutral-500'
          }`}
        >
          Hamamatsu · IFBB Official
        </span>
      </div>
    </div>
  );
}
