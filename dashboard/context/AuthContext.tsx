"use client";

import { Context, createContext, ReactNode, useContext, useState } from "react";
import { destroyCookie, parseCookies } from "nookies";
import { useRouter } from "next/navigation";

export const AuthContext: Context<any> = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [products, setProducts] = useState<any>(null);
  const [userId, setUserId] = useState<any>(null);
  const router = useRouter();

  const logout = (): void => {
    destroyCookie(null, "auth_token");
    destroyCookie(null, "userId");
    router.push("/");
  };

  const isAuthenticated = () => {
    const token  = parseCookies()['auth_token'];

    return !!token;
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, isAuthenticated, logout, setProducts, products, setUserId, userId }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
