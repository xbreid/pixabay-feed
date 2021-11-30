import { atom } from 'recoil';

const AuthContextState = atom<AuthContextType | null>({
  key: 'AuthContextState',
  default: null
});

const userState = atom<any>({
  key: 'userState',
  default: null
});

export {
  AuthContextState,
  userState
};