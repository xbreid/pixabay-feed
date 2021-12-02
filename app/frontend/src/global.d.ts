import * as React from "react";

declare global {
  interface AuthContextType {
    user: any;
    signin: (values: LoginFormFields, callback: CallableFunction) => void;
    signup: (values: CreateFormFields, callback: CallableFunction) => void;
    signout: (callback: CallableFunction) => void;
  }
  interface LoginFormFields {
    email: string;
    password: string;
  }

  interface CreateFormFields {
    email: string;
    password: string;
    password_confirmation: string;
  }

  interface UserDataTypes {
    email: string;
    username: string;
    token: string;
    exp: string;
    error?: string;
  }
}

export {}