import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { marketingNav } from '@/config/nav'

export function LandingPage() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-start gap-4 px-6 py-20">
      <h1 className="text-4xl font-semibold tracking-tight">Landing</h1>
      <p className="text-muted-foreground">
        Marketing content goes here. Shared header and footer stay in MarketingShell.
      </p>
      <Button asChild>
        <Link to={marketingNav[0].to}>Get started</Link>
      </Button>
    </section>
  )
}
