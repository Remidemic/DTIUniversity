import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import Home from './routes/Home';
import About from './routes/About';
import Root from './routes/Root';
import ErrorPage from './routes/ErrorPage';
import CalcMain from './components/Calculator/CalcMain';
// import PDFViewer from './components/junk/PDFViewer';
// import { Document, Page } from 'react-pdf';
import Scrap from './components/junk/Scrap';


const router = createBrowserRouter([

  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage/>,
    children: [
      { path: '/DTIUniversity/', element: <Home /> },
      { path: '/DTIUniversity/about', element: <About /> },
      { path: '/DTIUniversity/calculator', element: <CalcMain /> },
      { path: '/DTIUniversity/Resume', element: <Scrap/> },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
