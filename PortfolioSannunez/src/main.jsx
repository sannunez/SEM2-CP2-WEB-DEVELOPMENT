import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutMe from './pages/AboutMe.jsx'
import Menu from './pages/Menu.jsx'
import Contact from './pages/Contact.jsx'
import MyProjects from './pages/MyProjects.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children: [
      {index: true, element: <Menu />},
      {path: '/MyProjects', element: <MyProjects />},
      {path: '/AboutMe', element: <AboutMe />},
      {path: '/Contact', element: <Contact />}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)