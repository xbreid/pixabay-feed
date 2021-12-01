import * as React from 'react';
import './styles/App.scss';
import {Route, Routes} from "react-router-dom";
import AuthProvider from "./components/AuthProvider";
import Layout from "./views/Layout";
import RequireAuth from "./components/RequireAuth";
import LoginPage from "./views/LoginPage";
import SignupPage from "./views/SignupPage";

function App(): JSX.Element {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/feed"
            element={
              <RequireAuth>
                <div>protected</div>
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
