import * as React from 'react';
import { Outlet } from "react-router-dom";
import Header from '../components/Header';

function Layout(): JSX.Element {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;