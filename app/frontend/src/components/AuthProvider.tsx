import * as React from 'react';
import { apiAuthProvider } from "../auth";
import { AuthContext } from '../hooks/authContext';

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<any>(null);

  const signin = (newUser: string, callback: VoidFunction) => apiAuthProvider.signin(() => {
    setUser(newUser);
    callback();
  });

  const signout = (callback: VoidFunction) => apiAuthProvider.signout(() => {
    setUser(null);
    callback();
  });

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { user, signin, signout };

  return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
  );
}

export default AuthProvider;