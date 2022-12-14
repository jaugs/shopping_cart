import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  Route, BrowserRouter, Routes,
} from "react-router-dom";
// import ErrorPage from "./components/error";
import Cart from "./components/cart";
import App from "./App";

//import Home from './components/home';
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "cart",
//     element: <Cart  />,
//     errorElement: <ErrorPage />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<Cart />} />
      </Routes> 
    </BrowserRouter>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
