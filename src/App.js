import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import Home from './routes/Home';
import About from './routes/About';
// import Calculator from './routes/Calculator';
import Root from './routes/Root';
import ErrorPage from './routes/ErrorPage';
import COLD from './components/Calculator/COLD';
// import LoanPaymentCalculator from './components/Calculator/LoanPaymentCalculator'
import CalcMain from './components/Calculator/CalcMain';

const router = createBrowserRouter([

  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage/>,
    children: [
      { path: '/DTIUniversity/', element: <Home /> },
      { path: '/DTIUniversity/about', element: <About /> },
      // { path: '/DTIUniversity/calculator', element: <Calculator /> },
      { path: '/DTIUniversity/COLD', element: <COLD/> },
      // { path: '/DTIUniversity/LoanPaymentCalculator', element: <LoanPaymentCalculator /> },
      { path: '/DTIUniversity/Calculator', element: <CalcMain /> },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
