import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/AppLayout'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { SignIn } from './pages/SignIn'

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/sign-in', element: <SignIn /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
])
