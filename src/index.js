import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styling/index.css';
import reportWebVitals from './reportWebVitals';
import Root from './Routes/Root';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './Routes/error-page';
import Contact from './Routes/Contact';

const router = createBrowserRouter([{
  path: "/",
  element: <Root />,
  errorElement: <ErrorPage />,

},  
{
  path: "contact/:contactId",
  element: <Contact />
}]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
