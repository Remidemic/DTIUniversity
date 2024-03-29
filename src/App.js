import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import Home from './routes/Home';
import About from './routes/About';
import Root from './routes/Root';
import ErrorPage from './routes/ErrorPage';
import CalcMain from './components/Calculator/CalcMain';
import EmailMain from './components/Results/Email_Template/EmailMain'; 


const router = createBrowserRouter([

  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage/>,
    children: [
      { path: '/DTIUniversity/', element: <Home /> },
      { path: '/DTIUniversity/about', element: <About /> },
      { path: '/DTIUniversity/calculator', element: <CalcMain /> },
      { path: '/DTIUniversity/email', element: <EmailMain /> }

    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
