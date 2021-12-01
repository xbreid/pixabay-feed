import * as React from 'react';
import { Link } from "react-router-dom";

function HomePage(): JSX.Element {

  return (
    <div>
      <Link to="/feed">Feed</Link>
    </div>
  );
}

export default HomePage;