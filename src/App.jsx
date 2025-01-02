import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import Home from './pages/Home/Home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import OrderDetails from './pages/orderPage'
import TravelInsurance from './components/TravelInsurance'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        }
      ]
    },{
      path:"/order",
      element:<OrderDetails/>
    },
    {
      path:"/TravelInsurance",
      element:<TravelInsurance/>
    }



  ])
  // Create a client
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
