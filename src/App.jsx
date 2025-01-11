import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import Home from './pages/Home/Home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Order from './pages/Order/Order'
import ForexRatedFAQ from './pages/ForexRatedFAQ/ForexRatedFAQ'
import OrderDetails from './pages/orderPage'
import TravelInsurance from './components/TravelInsurance'
import CalendarPopUp from './components/CalendarPopUp/CalendarPopUp'
import ForexRates from './pages/ForexRates/forexRates'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/order',
          element: <Order />
        },
        {
          path: '/forexRatesFaq',
          element: <ForexRatedFAQ />
        },
        {
          path: "/orderConfirmation",
          element: <OrderDetails />
        },
        {
          path: "/calendarPopUp",
          element: <CalendarPopUp />
        },
        {
          path:"/forexRates",
          element:<ForexRates/>
        }
      ]
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
