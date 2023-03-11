import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import Home from './routes/Home';
import About from './routes/About';
import Calculator from './routes/Calculator';

const router = createBrowserRouter([

  { path: '/DTIUniversity/', element: <Home/> },
  { path: '/DTIUniversity/about', element: <About/> },
  { path: '/DTIUniversity/calculator', element: <Calculator/>}
]);


function App() {
  return <RouterProvider router={router} />;
}
export default App;
