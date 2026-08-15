import { Link, Outlet } from 'react-router-dom'

import { marketingBrand, marketingNav } from '@/config/nav'

export function MarketingShell() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-14 items-center justify-between border-b px-6">
        <Link to={marketingBrand.to} className="text-sm font-semibold">
          {marketingBrand.label}
        </Link>
        <nav className="flex gap-4 text-sm text-muted-foreground">
          {marketingNav.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t px-6 py-4 text-sm text-muted-foreground">
        Footer
      </footer>
    </div>
  )
}
