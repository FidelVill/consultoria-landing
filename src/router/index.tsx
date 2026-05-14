import { createBrowserRouter } from 'react-router-dom'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import Service from '@/pages/Service'

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
    path: '*',
    element: <NotFound />,
  },
])