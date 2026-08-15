import { NavLink } from 'react-router-dom'

import { nav } from '@/config/nav'
import { cn } from '@/lib/utils'

export function Sidebar() {
  return (
    <aside className="flex w-56 shrink-0 flex-col border-r bg-sidebar text-sidebar-foreground">
      <div className="flex h-12 items-center px-4 text-sm font-semibold">App</div>
      <nav className="flex flex-col gap-0.5 p-2">
        {nav.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm',
                  isActive
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                    : 'hover:bg-sidebar-accent/70',
                )
              }
            >
              <Icon className="size-4" />
              {item.label}
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}
