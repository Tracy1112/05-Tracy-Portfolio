import {
  Certificates,
  Education,
  Experience,
  ResumeLayout,
  Skills,
  Work,
  Error,
  Contact,
  HomeLayout,
  Landing,
} from './pages'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'resume',
        element: <ResumeLayout />,
        children: [
          {
            index: true,
            element: <Experience />,
          },
          { path: 'education', element: <Education /> },
          { path: 'skills', element: <Skills /> },
          { path: 'certificates', element: <Certificates /> },
        ],
      },
      {
        path: 'work',
        element: <Work />,
      },

      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App
