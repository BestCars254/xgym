type Props = { compact?: boolean; onDark?: boolean };

export function Logo({ compact = false }: Props) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}logo.png`}
      alt="X FITNESS GYM"
      className={`w-auto select-none ${compact ? 'h-9' : 'h-11 md:h-12'}`}
      draggable={false}
    />
  );
}
