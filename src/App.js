import React from "react";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Products from "./pages/Products";
import Customer from "./pages/Customers";
import AdminUsers from "./pages/AdminUsers";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import Category from "./pages/Category";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import AddCategory from "./pages/AddCategory";
import Brand from "./pages/Brand";
import Pages from "./pages/Pages";
import AddBrand from "./pages/AddBrand";
import OurStore from "./pages/OurStore"
import Account from "./pages/Account"; 
import Ourstaff from "./pages/Ourstaff";
import { AuthProvider } from "./auth/auth";
import { RequireAuth } from "./auth/RequireAuth";
import Coupons from "./pages/Coupons";
import Events from "./pages/Event";
import Blogs from "./pages/Blogs";
import SubBrand from "./pages/SubBrand";


const App = () => {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Routes>
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route
              path="/products"
              element={
                <RequireAuth>
                  <Products />
                </RequireAuth>
              }
            />
            <Route
              path="/add-product"
              element={
                <RequireAuth>
                  <AddProduct />
                </RequireAuth>
              }
            />

            <Route
              path="/customer"
              element={
                <RequireAuth>
                  <Customer />
                </RequireAuth>
              }
            />
            <Route
              path="/orders"
              element={
                <RequireAuth>
                  <Orders />
                </RequireAuth>
              }
            />
             <Route
              path="/pages"
              element={
                <RequireAuth>
                  <Pages />
                </RequireAuth>
              }
            />
            <Route
              path="/users"
              element={
                <RequireAuth>
                  <AdminUsers />
                </RequireAuth>
              }
            />
            <Route
              path="/category"
              element={
                <RequireAuth>
                  <Category />
                </RequireAuth>
              }
            />
            <Route
              path="/add-category"
              element={
                <RequireAuth>
                  <AddCategory />
                </RequireAuth>
              }
            />
            <Route
              path="/brand"
              element={
                <RequireAuth>
                  <Brand />
                </RequireAuth>
              }
            />
             <Route
              path="/sub-brand"
              element={
                <RequireAuth>
                  <SubBrand />
                </RequireAuth>
              }
            />
            <Route
              path="/add-brand"
              element={
                <RequireAuth>
                  <AddBrand />
                </RequireAuth>
              }
            />
            <Route
              path="/our-store"
              element={
                <RequireAuth>
                  <OurStore />
                </RequireAuth>
              }
            />
            <Route
              path="/staff"
              element={
                <RequireAuth>
                  <Ourstaff />
                </RequireAuth>
              }
            />
            <Route
              path="/settings"
              element={
                <RequireAuth>
                  <Account />
                </RequireAuth>
              }
            />
            <Route
              path="/coupons"
              element={
                <RequireAuth>
                  <Coupons />
                </RequireAuth>
              }
            />
             <Route
              path="/events"
              element={
                <RequireAuth>
                  <Events />
                </RequireAuth>
              }
            />
             <Route
              path="/blogs"
              element={
                <RequireAuth>
                  <Blogs />
                </RequireAuth>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
