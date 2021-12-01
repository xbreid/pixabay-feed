import * as React from 'react';
import { apiAuthProvider } from "../auth";
import { AuthContext } from '../hooks/authContext';

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<UserDataTypes | null>(null);

  const signin = (values: LoginFormFields, callback: CallableFunction) =>
    apiAuthProvider.signin(values, (userData: UserDataTypes) => {
      setUser(userData);
      callback();
    });

  const signout = (callback: CallableFunction) =>
    apiAuthProvider.signout(() => {
      setUser(null);
      callback();
    });

  const signup = (values: CreateFormFields, callback: CallableFunction) =>
    apiAuthProvider.signup(values, (userData: UserDataTypes) => {
      setUser(userData);
      callback();
    });

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { user, signin, signout, signup };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;