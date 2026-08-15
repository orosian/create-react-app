import { Outlet } from 'react-router-dom'

import { ChatList } from '@/components/chrome/ChatList'
import { InspectorPanel } from '@/components/chrome/InspectorPanel'

export function ChatShell() {
  return (
    <div className="flex h-screen">
      <ChatList />
      <main className="min-w-0 flex-1">
        <Outlet />
      </main>
      <InspectorPanel />
    </div>
  )
}
