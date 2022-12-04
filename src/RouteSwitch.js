import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Cart from "./components/cart";
import ErrorPage from "./components/error";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} errorElement={<ErrorPage />}  />
        <Route path="/cart" element={<Cart />}  errorElement={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;