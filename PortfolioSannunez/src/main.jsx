import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutMe from './pages/AboutMe.jsx'
import Menu from './pages/Menu.jsx'
import Contact from './pages/Contact.jsx'
import MyProjects from './pages/MyProjects.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import PageNotFound from './pages/PageNotFound.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Menu /> },
      { path: 'MyProjects', element: <MyProjects />, 
        children:[
          { path: ':id', element: <ProjectPage /> },
      ]
      },
      { path: 'AboutMe', element: <AboutMe /> },
      { path: 'Contact', element: <Contact /> },
      { path: '*', element: <PageNotFound /> }
    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)