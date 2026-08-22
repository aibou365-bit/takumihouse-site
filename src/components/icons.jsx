const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function License() {
  return (
    <svg {...base}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <circle cx="8" cy="11" r="2" />
      <path d="M5 16.2c0-1.7 1.3-3 3-3s3 1.3 3 3" />
      <path d="M14.5 10h5" />
      <path d="M14.5 13.5h5" />
      <path d="M14.5 17h3" />
    </svg>
  );
}

function NoExtraFee() {
  return (
    <svg {...base}>
      <path d="M20.6 11.4 12.4 3.2A2 2 0 0 0 11 2.6H4.6a2 2 0 0 0-2 2V11a2 2 0 0 0 .6 1.4l8.2 8.2a2 2 0 0 0 2.8 0l6.4-6.4a2 2 0 0 0 0-2.8z" />
      <circle cx="7.3" cy="7.3" r="1.2" />
      <path d="M3.5 20.5 20.5 3.5" />
    </svg>
  );
}

function VrHeadset() {
  return (
    <svg {...base}>
      <path d="M4 7.5C4 5.8 5.3 4.5 7 4.5h10c1.7 0 3 1.3 3 3" />
      <rect x="2" y="9" width="20" height="9" rx="2.5" />
      <circle cx="7.6" cy="13.5" r="2.1" />
      <circle cx="16.4" cy="13.5" r="2.1" />
    </svg>
  );
}

function ThreeExperts() {
  return (
    <svg {...base}>
      <circle cx="4.5" cy="12" r="2.5" />
      <circle cx="19" cy="4.8" r="2.2" />
      <circle cx="19" cy="12" r="2.2" />
      <circle cx="19" cy="19.2" r="2.2" />
      <path d="M6.8 10.9 16.9 5.8" />
      <path d="M7 12h9.8" />
      <path d="M6.8 13.1 16.9 18.2" />
    </svg>
  );
}

export const ICONS = {
  license: License,
  "no-extra-fee": NoExtraFee,
  vr: VrHeadset,
  "three-experts": ThreeExperts,
};
