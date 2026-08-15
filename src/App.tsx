import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ChatShell } from '@/layouts/ChatShell'
import { AppShell } from '@/layouts/AppShell'
import { AuthShell } from '@/layouts/AuthShell'
import { MarketingShell } from '@/layouts/MarketingShell'
import { StageShell } from '@/layouts/StageShell'
import { ChatPage } from '@/pages/ChatPage'
import { HomePage } from '@/pages/HomePage'
import { LandingPage } from '@/pages/LandingPage'
import { LoginPage } from '@/pages/LoginPage'
import { ExampleScene } from '@/scenes/ExampleScene'

const router = createBrowserRouter([
  {
    element: <AppShell />,
    children: [{ path: '/', element: <HomePage /> }],
  },
  {
    element: <AuthShell />,
    children: [{ path: '/login', element: <LoginPage /> }],
  },
  {
    element: <MarketingShell />,
    children: [{ path: '/welcome', element: <LandingPage /> }],
  },
  {
    path: '/chat',
    element: <ChatShell />,
    children: [
      { index: true, element: <ChatPage /> },
      { path: ':threadId', element: <ChatPage /> },
    ],
  },
  {
    element: <StageShell />,
    children: [{ path: '/room', element: <ExampleScene /> }],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
