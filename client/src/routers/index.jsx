import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Product from "../pages/Products/Detail";
import Orders from "../pages/Orders";
import CreateOrder from "../pages/Orders/Create";
import Register from "../pages/Auth/Register";
import Admin from "../pages/Auth/Admin";
import CreateAdmin from "../pages/Auth/Admin/Create";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Error404 from "../pages/Error";
import endpoint from "../config/endpoint";
import Authorized from "./Authorized";
export default function Routers() {
  const { home, products, orders, cart, checkout, profile, auth, error } =
    endpoint;

  return (
    <Routes>
      <Route path={home} element={<Home />} />
      <Route path={products}>
        <Route path="" element={<Products />} />
        <Route path=":id" element={<Product />} />
      </Route>
      <Route path={orders.root}>
        <Route path="" element={<Orders />} />
        <Route path={orders.create} element={<CreateOrder />} />
      </Route>
      <Route path={cart} element={<Cart />} />
      <Route path={checkout} element={<Checkout />} />
      <Route path={profile} element={<Authorized />} />
      <Route path={auth.root}>
        <Route path={auth.login} element={<Authorized />} />
        <Route path={auth.register} element={<Register />} />
        <Route path={auth.admin.root}>
          <Route path="" element={<Admin />} />
          <Route path={auth.admin.create} element={<CreateAdmin />} />
        </Route>
      </Route>
      <Route path={error} element={<Error404 />} />
    </Routes>
  );
}
