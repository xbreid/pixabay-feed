import * as React from 'react';
import { Outlet } from "react-router-dom";

function Layout(): JSX.Element {
  return (
    <div className="App">
      <header>header</header>
      <Outlet />
    </div>
  );
}

export default Layout;