import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage";
import ProductDetails from "./components/Products/ProductDetails";
import Checkout from "./components/Cart/Checkout";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import OrdersDetailsPage from "./pages/OrdersDetailsPage";

const App = () => {
  return (
    <div>
      {/* Add the basename prop here, matching your GitHub Pages repository name */}
      <BrowserRouter basename="/Ecommerce">
        <Toaster positon="top-right" />
        <Routes>
          {/* The parent route for UserLayout */}
          <Route path="/" element={<UserLayout />}>
            {/* Index route for the Home page, matches /Ecommerce/ */}
            <Route index element={<Home />} />
            {/* Other routes will be relative to /Ecommerce/ */}
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
            <Route path="collection/:collection" element={<CollectionPage />} />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="checkout" element={<Checkout />} />
            {/* Ensure paths here are relative if they are children of UserLayout,
                or absolute if they are meant to be outside the UserLayout's scope.
                Given your current structure, these should be relative. */}
            <Route path="order-confirmation" element={<OrderConfirmationPage />} />
            <Route path="orders/:id" element={<OrdersDetailsPage />} />
          </Route>
          {/* You might want a 404 Not Found route here if no other route matches */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;