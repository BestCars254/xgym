type Props = {
  label: string;
  className?: string;
  rounded?: string;
};

export function ImagePlaceholder({ label, className = '', rounded = 'rounded-2xl' }: Props) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-neutral-100 ${rounded} ${className}`}
      role="img"
      aria-label={label}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, rgba(0,0,0,0.03) 0 14px, transparent 14px 28px)',
        }}
      />
      <div className="relative flex flex-col items-center gap-2 px-4 py-6 text-center">
        <div className="h-10 w-10 rounded-full border-2 border-dashed border-neutral-300" />
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
          {label}
        </span>
      </div>
    </div>
  );
}
