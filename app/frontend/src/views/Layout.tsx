import * as React from 'react';
import { Outlet } from "react-router-dom";
import Header from '../components/Header';

function Layout(): JSX.Element {
  return (
    <>
      <Header />
      <div className="App">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;