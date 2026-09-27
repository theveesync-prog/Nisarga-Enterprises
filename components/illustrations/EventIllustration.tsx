"use client";

type Variant =
  | "crowd"
  | "balloon"
  | "transit"
  | "broadcast"
  | "print"
  | "corporate"
  | "government"
  | "education"
  | "retail";

interface EventIllustrationProps {
  variant: Variant;
  className?: string;
}

/**
 * Original abstract illustrations (not photographs) rendered as inline SVG,
 * used in place of stock imagery since no licensed photo source is reachable
 * from this environment.
 */
export default function EventIllustration({ variant, className }: EventIllustrationProps) {
  const gradId = `grad-${variant}`;

  return (
    <svg
      viewBox="0 0 400 300"
      className={className}
      role="img"
      aria-label={`${variant} illustration`}
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#b52b2c" />
          <stop offset="100%" stopColor="#c8983f" />
        </linearGradient>
        <linearGradient id={`${gradId}-soft`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#b52b2c" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#c8983f" stopOpacity="0.18" />
        </linearGradient>
      </defs>

      <rect width="400" height="300" rx="28" fill={`url(#${gradId}-soft)`} />

      {variant === "crowd" && (
        <>
          <circle cx="200" cy="90" r="46" fill={`url(#${gradId})`} opacity="0.9" />
          {Array.from({ length: 24 }).map((_, i) => {
            const x = 30 + (i % 8) * 46;
            const y = 190 + Math.floor(i / 8) * 34;
            return <circle key={i} cx={x} cy={y} r="13" fill="#b52b2c" opacity={0.25 + (i % 3) * 0.15} />;
          })}
          <path d="M60 150 Q200 90 340 150" stroke="#c8983f" strokeWidth="3" fill="none" opacity="0.5" strokeDasharray="2 10" strokeLinecap="round" />
        </>
      )}

      {variant === "balloon" && (
        <>
          <ellipse cx="200" cy="110" rx="70" ry="85" fill={`url(#${gradId})`} opacity="0.85" />
          <path d="M170 190 L180 225 L220 225 L230 190" stroke="#1f2937" strokeWidth="2" fill="none" opacity="0.4" />
          <rect x="182" y="225" width="36" height="24" rx="4" fill="#1f2937" opacity="0.5" />
          <circle cx="90" cy="240" r="4" fill="#c8983f" opacity="0.6" />
          <circle cx="320" cy="80" r="6" fill="#b52b2c" opacity="0.5" />
          <circle cx="60" cy="100" r="5" fill="#b52b2c" opacity="0.4" />
        </>
      )}

      {variant === "transit" && (
        <>
          <rect x="50" y="130" width="300" height="70" rx="14" fill={`url(#${gradId})`} opacity="0.85" />
          {[95, 155, 215, 275, 320].map((x, i) => (
            <circle key={i} cx={x} cy={215} r="12" fill="#1f2937" opacity="0.5" />
          ))}
          <rect x="70" y="150" width="60" height="30" rx="4" fill="white" opacity="0.5" />
          <rect x="150" y="150" width="60" height="30" rx="4" fill="white" opacity="0.35" />
          <rect x="230" y="150" width="60" height="30" rx="4" fill="white" opacity="0.5" />
        </>
      )}

      {variant === "broadcast" && (
        <>
          <rect x="170" y="140" width="60" height="90" rx="8" fill={`url(#${gradId})`} opacity="0.85" />
          <line x1="200" y1="140" x2="200" y2="70" stroke="#b52b2c" strokeWidth="4" opacity="0.6" />
          <circle cx="200" cy="60" r="10" fill="#c8983f" opacity="0.8" />
          <path d="M170 90 Q200 60 230 90" stroke="#c8983f" strokeWidth="2" fill="none" opacity="0.5" />
          <path d="M150 105 Q200 55 250 105" stroke="#b52b2c" strokeWidth="2" fill="none" opacity="0.4" />
        </>
      )}

      {variant === "print" && (
        <>
          <rect x="110" y="70" width="180" height="160" rx="8" fill="white" opacity="0.85" />
          <rect x="130" y="95" width="140" height="14" rx="3" fill={`url(#${gradId})`} opacity="0.8" />
          {[130, 150, 170, 190].map((y, i) => (
            <rect key={i} x="130" y={y + 20} width={i % 2 === 0 ? 140 : 100} height="8" rx="3" fill="#b52b2c" opacity="0.3" />
          ))}
        </>
      )}

      {variant === "corporate" && (
        <>
          <rect x="130" y="60" width="50" height="170" rx="6" fill={`url(#${gradId})`} opacity="0.75" />
          <rect x="190" y="90" width="50" height="140" rx="6" fill={`url(#${gradId})`} opacity="0.9" />
          <rect x="250" y="110" width="50" height="120" rx="6" fill={`url(#${gradId})`} opacity="0.65" />
          {Array.from({ length: 6 }).map((_, i) => (
            <rect key={i} x={200} y={110 + i * 18} width="14" height="10" rx="2" fill="white" opacity="0.6" />
          ))}
        </>
      )}

      {variant === "government" && (
        <>
          <polygon points="200,60 280,110 120,110" fill={`url(#${gradId})`} opacity="0.85" />
          <rect x="120" y="110" width="160" height="110" rx="4" fill={`url(#${gradId})`} opacity="0.6" />
          {[140, 170, 200, 230, 260].map((x, i) => (
            <rect key={i} x={x - 6} y="120" width="12" height="90" fill="white" opacity="0.5" />
          ))}
        </>
      )}

      {variant === "education" && (
        <>
          <polygon points="200,90 300,130 200,170 100,130" fill={`url(#${gradId})`} opacity="0.85" />
          <line x1="300" y1="130" x2="300" y2="180" stroke="#b52b2c" strokeWidth="3" opacity="0.6" />
          <circle cx="300" cy="184" r="5" fill="#c8983f" opacity="0.8" />
          <path d="M150 150 L150 195 Q200 215 250 195 L250 150" fill={`url(#${gradId})`} opacity="0.5" />
        </>
      )}

      {variant === "retail" && (
        <>
          <path d="M140 120 L260 120 L250 220 Q200 235 150 220 Z" fill={`url(#${gradId})`} opacity="0.85" />
          <path d="M165 120 Q165 85 200 85 Q235 85 235 120" stroke="#b52b2c" strokeWidth="6" fill="none" opacity="0.6" />
          <circle cx="185" cy="150" r="5" fill="white" opacity="0.7" />
          <circle cx="215" cy="150" r="5" fill="white" opacity="0.7" />
        </>
      )}
    </svg>
  );
}
