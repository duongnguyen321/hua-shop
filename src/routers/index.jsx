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
import ProductsType from "../pages/Products/Type";
import Authorized from "./Authorized";
import Profile from "../pages/Profile";
import Login from "../pages/Auth/Login";

export default function Routers() {
  const { home, products, orders, cart, checkout, profile, auth, error } =
    endpoint;

  return (
    <Routes>
      <Route path={home} element={<Home />} />
      <Route path={products.root}>
        <Route path={""} element={<Products />} />
        <Route path={"type/:slug"} element={<ProductsType />} />
        <Route path={":id"} element={<Product />} />
      </Route>
      <Route path={orders.root}>
        <Route
          path=""
          element={<Authorized Component={<Orders />} Redirect={<Login />} />}
        />
        <Route
          path={orders.create}
          element={
            <Authorized Component={<CreateOrder />} Redirect={<Login />} />
          }
        />
      </Route>
      <Route
        path={cart}
        element={<Authorized Component={<Cart />} Redirect={<Login />} />}
      />
      <Route
        path={checkout}
        element={<Authorized Component={<Checkout />} Redirect={<Login />} />}
      />
      <Route
        path={profile}
        element={<Authorized Component={<Profile />} Redirect={<Login />} />}
      />
      <Route path={auth.root}>
        <Route
          path={auth.login}
          element={<Authorized Component={<Profile />} Redirect={<Login />} />}
        />
        <Route
          path={auth.register}
          element={
            <Authorized Component={<Profile />} Redirect={<Register />} />
          }
        />
        <Route path={auth.admin.root}>
          <Route
            path=""
            element={<Authorized Component={<Admin />} Redirect={<Login />} />}
          />
          <Route
            path={auth.admin.create}
            element={
              <Authorized Component={<CreateAdmin />} Redirect={<Login />} />
            }
          />
        </Route>
      </Route>
      <Route path={error} element={<Error404 />} />
    </Routes>
  );
}
