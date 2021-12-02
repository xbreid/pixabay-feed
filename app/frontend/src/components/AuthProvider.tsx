import * as React from 'react';
import {useRecoilState} from "recoil";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, {AlertColor, AlertProps} from '@mui/material/Alert';
import { apiAuthProvider } from "../auth";
import { AuthContext } from '../hooks/authContext';
import {globalMessage, globalMessageOpen} from "../store/atoms";

// eslint-disable-next-line
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<UserDataTypes | null>(null);
  const [messages, setMessages] = useRecoilState(globalMessage);
  const [open, setOpen] = useRecoilState(globalMessageOpen);

  const signin = (values: LoginFormFields, callback: CallableFunction) =>
    apiAuthProvider.signin(values, (userData: UserDataTypes, succeeded: boolean) => {
      if (succeeded) {
        setUser(userData);
        callback();
      } else {
        setMessages({
          ...messages,
          severity: 'error',
          message: userData.error as string,
        });
        setOpen(true);
      }
      
      
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
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={messages.duration}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity={messages.severity as AlertColor}
          sx={{ width: '100%' }}
        >
          {messages.message}
        </Alert>
      </Snackbar>
    </AuthContext.Provider>
  );
}

export default AuthProvider;