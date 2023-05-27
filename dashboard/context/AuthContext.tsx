import { createContext, ReactNode, useContext, useState } from 'react';
import { api } from "@/config/api";
import { useMutation } from "@tanstack/react-query";

export const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {

  const loginMutation = useMutation((email) =>
      api.post('auth/magic-link', {email}),
    {
      onSuccess: (data) => {
        console.log('data', data)
      },
      onError: (error) => {
        console.log('error', error);
      },
    }
  );

  return (
    <AuthContext.Provider value={{ loginMutation }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
