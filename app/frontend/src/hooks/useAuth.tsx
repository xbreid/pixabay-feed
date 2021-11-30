import * as React from 'react';
import { AuthContext } from "./authContext";

function useAuth() {
  return React.useContext(AuthContext);
}

export default useAuth;
