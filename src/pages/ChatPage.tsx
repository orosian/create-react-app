import { useParams } from 'react-router-dom'

import { EmptyState } from '@/components/chrome/EmptyState'
import { chatNav } from '@/config/nav'

export function ChatPage() {
  const { threadId } = useParams()
  const thread = chatNav.find((item) => item.id === threadId)

  if (!thread) {
    return (
      <div className="flex h-full items-center justify-center p-6">
        <EmptyState
          title="No thread selected"
          description="Pick a thread from the list. The list and inspector stay in ChatShell."
        />
      </div>
    )
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex h-12 shrink-0 items-center border-b px-4 text-sm font-medium">
        {thread.label}
      </div>
      <div className="flex-1 p-4 text-sm text-muted-foreground">Main conversation.</div>
      <div className="border-t p-3 text-sm text-muted-foreground">Composer</div>
    </div>
  )
}
