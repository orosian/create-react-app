import { Link } from 'react-router-dom'

import { EmptyState } from '@/components/chrome/EmptyState'
import { PageContainer } from '@/components/chrome/PageContainer'
import { PageHeader } from '@/components/chrome/PageHeader'
import { Button } from '@/components/ui/button'

export function HomePage() {
  return (
    <PageContainer>
      <PageHeader
        title="Dashboard"
        description="Replace this page. Preview other shells below, then delete the unused ones."
      />
      <EmptyState
        title="No content yet"
        description="Build product pages here. Do not add a new Sidebar or Header."
        action={
          <div className="mt-2 flex flex-wrap justify-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link to="/login">AuthShell</Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link to="/welcome">MarketingShell</Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link to="/chat">ChatShell</Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link to="/room">StageShell</Link>
            </Button>
          </div>
        }
      />
    </PageContainer>
  )
}
