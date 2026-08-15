export const phases = [
  'lobby',
  'night',
  'discuss',
  'vote',
  'reveal',
] as const

export type Phase = (typeof phases)[number]
