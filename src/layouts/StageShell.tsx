import { Outlet } from 'react-router-dom'

import { Hud } from '@/components/chrome/Hud'

export function StageShell() {
  return (
    <div className="relative flex h-screen flex-col">
      <Hud />
      <div className="flex min-h-0 flex-1">
        <main className="min-w-0 flex-1">
          <Outlet />
        </main>
        <aside className="hidden w-72 shrink-0 border-l lg:block">
          <div className="p-3 text-sm text-muted-foreground">Chat / log dock</div>
        </aside>
      </div>
    </div>
  )
}
