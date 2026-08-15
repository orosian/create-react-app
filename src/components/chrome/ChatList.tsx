import { NavLink } from 'react-router-dom'

import { chatNav } from '@/config/nav'
import { cn } from '@/lib/utils'

export function ChatList() {
  return (
    <aside className="flex w-64 shrink-0 flex-col border-r">
      <div className="flex h-12 items-center px-3 text-sm font-medium">Threads</div>
      <nav className="flex flex-1 flex-col gap-0.5 overflow-auto p-2">
        {chatNav.map((item) => (
          <NavLink
            key={item.id}
            to={`/chat/${item.id}`}
            className={({ isActive }) =>
              cn(
                'rounded-lg px-2.5 py-1.5 text-sm',
                isActive ? 'bg-muted' : 'text-muted-foreground hover:bg-muted/70',
              )
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
