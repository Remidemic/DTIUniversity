import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import Home from './routes/Home';
import About from './routes/About';
import Calculator from './routes/Calculator';
import Root from './routes/Root';
import ErrorPage from './routes/ErrorPage';
import COLD from './COLD/COLD';

const router = createBrowserRouter([

  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage/>,
    children: [
      { path: '/DTIUniversity/', element: <Home /> },
      { path: '/DTIUniversity/about', element: <About /> },
      { path: '/DTIUniversity/calculator', element: <Calculator /> },
      { path: '/DTIUniversity/COLD', element: <COLD/> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
