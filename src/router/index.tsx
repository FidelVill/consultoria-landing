import { createBrowserRouter } from 'react-router-dom'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import Service from '@/pages/Service'
import About from '@/pages/About'
import Benefits from '@/pages/Benefits'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/service',
    element: <Service />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/benefits',
    element: <Benefits />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])