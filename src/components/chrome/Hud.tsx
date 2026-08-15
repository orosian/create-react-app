import { Badge } from '@/components/ui/badge'
import { phases } from '@/config/phases'

export function Hud({
  room = 'ROOM',
  phase = phases[0],
  timer,
}: {
  room?: string
  phase?: string
  timer?: string
}) {
  return (
    <header className="flex h-12 shrink-0 items-center justify-between border-b px-4">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">{room}</span>
        <Badge variant="secondary">{phase}</Badge>
      </div>
      {timer ? <span className="font-mono text-sm tabular-nums">{timer}</span> : null}
    </header>
  )
}
