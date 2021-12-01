import * as React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AuthProvider from "./components/AuthProvider";
import Layout from "./views/Layout";
import RequireAuth from "./components/RequireAuth";
import LoginPage from "./views/LoginPage";
import SignupPage from "./views/SignupPage";
import HomePage from "./views/HomePage";
import FeedPage from "./views/FeedPage";

function App(): JSX.Element {
  const location = useLocation();
  return (
    <AuthProvider>
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route
              path="/feed"
              element={
                <RequireAuth>
                  <FeedPage />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </AuthProvider>
  );
}

export default App;
