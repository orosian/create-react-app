import { Outlet } from 'react-router-dom'

import { Sidebar } from '@/components/chrome/Sidebar'
import { Topbar } from '@/components/chrome/Topbar'

export function AppShell() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
