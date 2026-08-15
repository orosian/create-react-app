import type { LucideIcon } from 'lucide-react'
import { LayoutDashboard } from 'lucide-react'

export const nav = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
] as const satisfies ReadonlyArray<{
  to: string
  label: string
  icon: LucideIcon
}>

export const marketingBrand = { to: '/welcome', label: 'Brand' } as const

export const marketingNav = [{ to: '/login', label: 'Sign in' }] as const

export const chatNav = [{ id: 'example', label: 'Example thread' }] as const

export type NavItem = (typeof nav)[number]
export type MarketingNavItem = (typeof marketingNav)[number]
export type ChatNavItem = (typeof chatNav)[number]
