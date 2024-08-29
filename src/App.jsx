// rrd imports
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// layouts
import MainLayout from './layout/MainLayout'

// pages
import ErrorPage from "./pages/ErrorPage"
import Home from './pages/Home'
import Quiz from './pages/Quiz'

const App = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/quiz/:title',
          element: <Quiz />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={routes} />
  )
}

export default App