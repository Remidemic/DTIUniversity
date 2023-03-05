import './App.css';
import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BSNavbar from './components/Header/BSNavbar';
import BSSchoolFacts from './components/Majors/BSSchoolFacts';
import BSMajorList from './components/Majors/BSMajorList'
import ResultsList from './components/Search/ResultsList';
import Search from './components/Search/Search';
import Calculator from './routes/Calculator';
import ErrorPage from './routes/ErrorPage';
function App() {

  const [results_, setResults_] = useState('')
  const [data_, setData_] = useState({})
  const setData_Handler = (data_) => {
    setData_(data_)
  }
  const setResults_Handler = (results_) => {
    setResults_(results_)
  }

  const router = createBrowserRouter([
    {
      path: '/',
      // element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        // { path: '/', element: <Home /> },
        { path: '/Calculator', element: <Calculator /> }
        // { path: '/products/:productId', element: <ProductDetail /> }
      ],
    },
  ]);


  return (
    <div className="App">
      <BSNavbar />
      <RouterProvider router={router} />;
      <Search
        onSetData_={setData_Handler}
        onSetResults_={setResults_Handler}
      />
      <ResultsList data={data_} />
      <p>{results_}</p>
      <BSSchoolFacts data={data_} />
      <BSMajorList data={data_} />
    </div>
  );
}
export default App;
