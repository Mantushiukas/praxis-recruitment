import { useId } from 'react';

const LINE_COUNT = 16;
const LINE_SPACING = 6;

const lineOffsets = Array.from({ length: LINE_COUNT }, (_, index) => index * LINE_SPACING);

/** Lines bunch together on the left and fan out towards the right, like flowing silk. */
const buildWavePath = (offset: number): string =>
  `M -100 ${-40 + offset * 0.6} ` +
  `C 200 ${60 + offset * 0.8}, 380 ${240 + offset * 1.2}, 700 ${300 + offset * 1.6} ` +
  `S 1150 ${400 + offset * 2.2}, 1540 ${240 + offset * 3}`;

/**
 * Decorative flowing purple lines for dark sections.
 * The parent section must have `relative isolate overflow-hidden`;
 * the lines sit behind the section content and are clipped by its edges.
 */
export const WaveBackground = () => {
  const gradientId = `wave-stroke-${useId().replace(/:/g, '')}`;
  const glowId = `wave-glow-${useId().replace(/:/g, '')}`;

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1440 700"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#9b7fd4" stopOpacity="0.15" />
          <stop offset="0.45" stopColor="#8d6bd0" stopOpacity="0.4" />
          <stop offset="1" stopColor="#7756B5" stopOpacity="0.6" />
        </linearGradient>
        <radialGradient id={glowId} cx="0.18" cy="0.12" r="0.55">
          <stop offset="0" stopColor="#7756B5" stopOpacity="0.22" />
          <stop offset="1" stopColor="#7756B5" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="1440" height="700" fill={`url(#${glowId})`} />

      {lineOffsets.map((offset) => (
        <path
          key={offset}
          d={buildWavePath(offset)}
          stroke={`url(#${gradientId})`}
          strokeWidth="1.25"
          strokeOpacity={0.9 - offset / 220}
        />
      ))}
    </svg>
  );
};
