"use client";

/* ── Custom SVG Character Portraits ──────────────────────
   Each personality gets a unique stylized portrait.
   All light-skinned, each with their own color energy. ─── */

interface PortraitProps {
  size?: number;
  className?: string;
}

const skinTone = "#f5d0b0";
const skinShadow = "#e8b894";

export function ValenciaPortrait({ size = 200, className }: PortraitProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" className={className}>
      <defs>
        <radialGradient id="v-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c084fc" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="v-crown" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#eab308" />
        </linearGradient>
      </defs>
      {/* Glow aura */}
      <circle cx="100" cy="100" r="95" fill="url(#v-glow)" />
      {/* Hair */}
      <ellipse cx="100" cy="85" rx="48" ry="55" fill="#1a0a00" />
      <ellipse cx="100" cy="95" rx="52" ry="45" fill="#2a1205" />
      {/* Hair flowing down */}
      <path d="M52 95 Q48 130 55 165 Q58 145 60 125" fill="#2a1205" />
      <path d="M148 95 Q152 130 145 165 Q142 145 140 125" fill="#2a1205" />
      {/* Face */}
      <ellipse cx="100" cy="105" rx="38" ry="42" fill={skinTone} />
      <ellipse cx="100" cy="108" rx="36" ry="38" fill={skinShadow} opacity="0.3" />
      {/* Eyes */}
      <ellipse cx="85" cy="100" rx="6" ry="4" fill="#1a1a2e" />
      <ellipse cx="115" cy="100" rx="6" ry="4" fill="#1a1a2e" />
      <circle cx="83" cy="99" r="1.5" fill="white" opacity="0.8" />
      <circle cx="113" cy="99" r="1.5" fill="white" opacity="0.8" />
      {/* Eyebrows - confident */}
      <path d="M76 93 Q85 89 94 92" stroke="#2a1205" strokeWidth="2" fill="none" />
      <path d="M106 92 Q115 89 124 93" stroke="#2a1205" strokeWidth="2" fill="none" />
      {/* Nose */}
      <path d="M97 105 Q100 112 103 105" stroke={skinShadow} strokeWidth="1.5" fill="none" />
      {/* Lips - slight smile */}
      <path d="M88 118 Q100 126 112 118" stroke="#c47070" strokeWidth="2.5" fill="#d4848a" />
      {/* Crown */}
      <polygon points="72,72 78,55 86,68 93,48 100,65 107,48 114,68 122,55 128,72" fill="url(#v-crown)" />
      <circle cx="100" cy="56" r="4" fill="#7c3aed" />
      <circle cx="86" cy="62" r="2.5" fill="#ef4444" />
      <circle cx="114" cy="62" r="2.5" fill="#06b6d4" />
    </svg>
  );
}

export function SashaPortrait({ size = 200, className }: PortraitProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" className={className}>
      <defs>
        <radialGradient id="s-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="95" fill="url(#s-glow)" />
      {/* Hair - sleek pulled back */}
      <ellipse cx="100" cy="82" rx="46" ry="50" fill="#0a0a0a" />
      {/* Face */}
      <ellipse cx="100" cy="105" rx="36" ry="40" fill={skinTone} />
      {/* Eyes - sharp, no-nonsense */}
      <path d="M78 98 L92 96 L78 101 Z" fill="#1a1a2e" />
      <path d="M108 96 L122 98 L122 101 Z" fill="#1a1a2e" />
      <ellipse cx="85" cy="99" rx="5.5" ry="3.5" fill="#1a1a2e" />
      <ellipse cx="115" cy="99" rx="5.5" ry="3.5" fill="#1a1a2e" />
      <circle cx="84" cy="98" r="1.5" fill="white" opacity="0.7" />
      <circle cx="114" cy="98" r="1.5" fill="white" opacity="0.7" />
      {/* Eyebrows - sharp arched */}
      <path d="M74 90 Q85 84 95 90" stroke="#0a0a0a" strokeWidth="2.5" fill="none" />
      <path d="M105 90 Q115 84 126 90" stroke="#0a0a0a" strokeWidth="2.5" fill="none" />
      {/* Nose */}
      <path d="M97 104 Q100 111 103 104" stroke={skinShadow} strokeWidth="1.5" fill="none" />
      {/* Lips - unimpressed */}
      <path d="M88 118 Q100 120 112 118" stroke="#c47070" strokeWidth="2.5" fill="none" />
      {/* Fire earrings */}
      <circle cx="62" cy="108" r="4" fill="#ef4444" opacity="0.8" />
      <circle cx="138" cy="108" r="4" fill="#ef4444" opacity="0.8" />
      {/* Attitude lines */}
      <line x1="55" y1="70" x2="50" y2="60" stroke="#f59e0b" strokeWidth="1.5" opacity="0.5" />
      <line x1="145" y1="70" x2="150" y2="60" stroke="#f59e0b" strokeWidth="1.5" opacity="0.5" />
    </svg>
  );
}

export function RobinPortrait({ size = 200, className }: PortraitProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" className={className}>
      <defs>
        <radialGradient id="r-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="95" fill="url(#r-glow)" />
      {/* Hair - soft waves */}
      <ellipse cx="100" cy="85" rx="48" ry="52" fill="#3b2507" />
      <path d="M54 90 Q50 120 58 155" fill="#3b2507" />
      <path d="M146 90 Q150 120 142 155" fill="#3b2507" />
      <path d="M60 85 Q55 100 60 115 Q65 100 60 90" fill="#4a3010" />
      <path d="M140 85 Q145 100 140 115 Q135 100 140 90" fill="#4a3010" />
      {/* Face */}
      <ellipse cx="100" cy="105" rx="37" ry="41" fill={skinTone} />
      {/* Eyes - calm, warm */}
      <ellipse cx="85" cy="100" rx="5" ry="4" fill="#2d5a3d" />
      <ellipse cx="115" cy="100" rx="5" ry="4" fill="#2d5a3d" />
      <circle cx="84" cy="99" r="1.5" fill="white" opacity="0.8" />
      <circle cx="114" cy="99" r="1.5" fill="white" opacity="0.8" />
      {/* Eyebrows - soft */}
      <path d="M77 93 Q85 90 93 93" stroke="#3b2507" strokeWidth="1.8" fill="none" />
      <path d="M107 93 Q115 90 123 93" stroke="#3b2507" strokeWidth="1.8" fill="none" />
      {/* Nose */}
      <path d="M97 105 Q100 112 103 105" stroke={skinShadow} strokeWidth="1.5" fill="none" />
      {/* Lips - gentle smile */}
      <path d="M88 117 Q100 125 112 117" stroke="#c47070" strokeWidth="2" fill="#d4848a" opacity="0.8" />
      {/* Peace dove above */}
      <path d="M95 55 Q100 48 105 55 Q100 52 95 55" fill="white" opacity="0.5" />
      <path d="M105 55 Q112 50 115 53" stroke="white" strokeWidth="1" fill="none" opacity="0.5" />
    </svg>
  );
}

export function EnvyPortrait({ size = 200, className }: PortraitProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" className={className}>
      <defs>
        <radialGradient id="e-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="95" fill="url(#e-glow)" />
      {/* Hair - messy, relaxed */}
      <ellipse cx="100" cy="82" rx="50" ry="50" fill="#1a1a2e" />
      <circle cx="60" cy="75" r="12" fill="#1a1a2e" />
      <circle cx="140" cy="78" r="10" fill="#1a1a2e" />
      {/* Face */}
      <ellipse cx="100" cy="105" rx="36" ry="40" fill={skinTone} />
      {/* Eyes - half-lidded, chill */}
      <ellipse cx="85" cy="101" rx="5" ry="2.5" fill="#1a1a2e" />
      <ellipse cx="115" cy="101" rx="5" ry="2.5" fill="#1a1a2e" />
      <circle cx="84" cy="100.5" r="1" fill="white" opacity="0.6" />
      <circle cx="114" cy="100.5" r="1" fill="white" opacity="0.6" />
      {/* Eyebrows - relaxed */}
      <path d="M77 95 Q85 94 93 96" stroke="#1a1a2e" strokeWidth="1.5" fill="none" />
      <path d="M107 96 Q115 94 123 95" stroke="#1a1a2e" strokeWidth="1.5" fill="none" />
      {/* Nose */}
      <path d="M97 105 Q100 111 103 105" stroke={skinShadow} strokeWidth="1.5" fill="none" />
      {/* Lips - meh expression */}
      <path d="M90 118 Q100 119 110 118" stroke="#c47070" strokeWidth="2" fill="none" />
      {/* Sunglasses on head */}
      <path d="M68 78 Q100 72 132 78" stroke="#333" strokeWidth="2" fill="none" />
      <rect x="68" y="74" width="22" height="12" rx="4" fill="#333" opacity="0.6" />
      <rect x="110" y="74" width="22" height="12" rx="4" fill="#333" opacity="0.6" />
    </svg>
  );
}

export function JamesPortrait({ size = 200, className }: PortraitProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" className={className}>
      <defs>
        <radialGradient id="j-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#9ca3af" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#6b7280" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="95" fill="url(#j-glow)" />
      {/* Hair - clean cut */}
      <ellipse cx="100" cy="80" rx="44" ry="45" fill="#0a0a0a" />
      {/* Face - slightly wider jaw */}
      <ellipse cx="100" cy="105" rx="38" ry="42" fill={skinTone} />
      <path d="M65 110 Q100 155 135 110" fill={skinTone} />
      {/* Eyes - hard stare */}
      <ellipse cx="85" cy="100" rx="5.5" ry="3.5" fill="#1a1a2e" />
      <ellipse cx="115" cy="100" rx="5.5" ry="3.5" fill="#1a1a2e" />
      <circle cx="84" cy="99.5" r="1.2" fill="white" opacity="0.6" />
      <circle cx="114" cy="99.5" r="1.2" fill="white" opacity="0.6" />
      {/* Eyebrows - stern */}
      <path d="M74 92 Q85 88 94 93" stroke="#0a0a0a" strokeWidth="2.5" fill="none" />
      <path d="M106 93 Q115 88 126 92" stroke="#0a0a0a" strokeWidth="2.5" fill="none" />
      {/* Nose */}
      <path d="M96 104 Q100 113 104 104" stroke={skinShadow} strokeWidth="2" fill="none" />
      {/* Lips - straight, serious */}
      <path d="M88 120 L112 120" stroke="#b06060" strokeWidth="2.5" fill="none" />
      {/* Chain necklace */}
      <path d="M72 140 Q100 155 128 140" stroke="#d4d4d8" strokeWidth="2" fill="none" strokeDasharray="4 3" />
      {/* Cap brim */}
      <path d="M55 80 Q100 70 145 80 Q140 76 100 72 Q60 76 55 80" fill="#1a1a2e" />
    </svg>
  );
}

export function YasPortrait({ size = 200, className }: PortraitProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" className={className}>
      <defs>
        <radialGradient id="y-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="95" fill="url(#y-glow)" />
      {/* Hair - wild, fiery */}
      <ellipse cx="100" cy="80" rx="52" ry="52" fill="#8b1a1a" />
      <path d="M50 70 Q45 55 55 45 Q52 60 58 65" fill="#c23030" />
      <path d="M150 70 Q155 55 145 45 Q148 60 142 65" fill="#c23030" />
      <path d="M70 55 Q68 40 78 35 Q72 48 75 52" fill="#dc2626" />
      <path d="M130 55 Q132 40 122 35 Q128 48 125 52" fill="#dc2626" />
      <path d="M100 48 Q98 32 105 28 Q102 40 100 48" fill="#ef4444" />
      {/* Face */}
      <ellipse cx="100" cy="105" rx="36" ry="40" fill={skinTone} />
      {/* Eyes - intense, angry */}
      <ellipse cx="85" cy="100" rx="5.5" ry="4" fill="#8b1a1a" />
      <ellipse cx="115" cy="100" rx="5.5" ry="4" fill="#8b1a1a" />
      <circle cx="84" cy="99" r="1.5" fill="#ef4444" opacity="0.8" />
      <circle cx="114" cy="99" r="1.5" fill="#ef4444" opacity="0.8" />
      {/* Eyebrows - angry V shape */}
      <path d="M74 94 Q82 86 93 92" stroke="#5a0e0e" strokeWidth="3" fill="none" />
      <path d="M107 92 Q118 86 126 94" stroke="#5a0e0e" strokeWidth="3" fill="none" />
      {/* Nose */}
      <path d="M97 105 Q100 111 103 105" stroke={skinShadow} strokeWidth="1.5" fill="none" />
      {/* Lips - gritting */}
      <path d="M86 118 Q100 115 114 118" stroke="#b04040" strokeWidth="2.5" fill="none" />
      <path d="M90 120 L92 118" stroke="#b04040" strokeWidth="1" />
      <path d="M108 120 L110 118" stroke="#b04040" strokeWidth="1" />
      {/* Flames around */}
      <path d="M45 100 Q40 85 48 78 Q44 90 48 95" fill="#ef4444" opacity="0.4" />
      <path d="M155 100 Q160 85 152 78 Q156 90 152 95" fill="#ef4444" opacity="0.4" />
      <path d="M50 120 Q43 110 50 100 Q48 112 52 118" fill="#f59e0b" opacity="0.3" />
      <path d="M150 120 Q157 110 150 100 Q152 112 148 118" fill="#f59e0b" opacity="0.3" />
    </svg>
  );
}
