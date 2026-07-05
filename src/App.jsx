import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage'
import SearchPage from './pages/SearchPage'
import Layout from './components/Layout'
import NotFoundPage from './pages/NotFoundPage'


function App() {
  const router = createBrowserRouter([
    {
      path: '/react-router-practice/',
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'about', element: <AboutPage /> },
        { path: 'login', element: <LoginPage /> },
        { path: 'search', element: <SearchPage /> },
        { path: '*', element: <NotFoundPage /> },
        // { path: '*', element: <Navigate to="/" /> },
      ]
    },
  ])

  return <RouterProvider router={ router } />
}

export default App
