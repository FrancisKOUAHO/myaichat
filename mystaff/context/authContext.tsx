'use client'

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { CookieValueTypes, getCookie } from "cookies-next";
import { destroyCookie, parseCookies } from "nookies";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { useRouter } from "next/navigation";
import { api } from '@/config/api';

interface User {}

export const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const router: AppRouterInstance = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [products, setProducts] = useState<any>(null);
  const [userId, setUserId] = useState<any>(null);
  const [email, setEmail] = useState<string>("");
  const [cookieLoaded, setCookieLoaded] = useState(false);

  const isAuthenticated = (): boolean => {
    const token: CookieValueTypes = getCookie("access_token");
    return !!token;
  };

  const fetchUser = async () => {
    try {
      const response = await api.get<User>("me");
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user: ", error);
    }
  };

  const handleLogout = async () => {
    try {
      await api.post('logout');
      destroyCookie(undefined, 'access_token', {
        path: '/',
      });
      destroyCookie(undefined, 'userId', {
        path: '/',
      });
      router.push('/');
    } catch (err) {
      console.error('Error logging out:', err);
    }
  };

  const fetchData = async () => {
    if (cookieLoaded && isAuthenticated()) {
      await fetchUser();
    }
  };

  useEffect(() => {
    const loadCookie = async () => {
      const cookies = parseCookies();
      const token: CookieValueTypes = cookies["access_token"];
      setCookieLoaded(true);
    };

    loadCookie().then(r => r);
  }, []);

  useEffect(() => {
    const token: CookieValueTypes = getCookie("access_token");
    if (token) {
      api.defaults.headers.common = { Authorization: `Bearer ${token}` };
      fetchData().then(r => r);
    }
  }, [cookieLoaded]);

  return (
    <AuthContext.Provider
      value={{
    setUser,
      isAuthenticated,
      setProducts,
      setUserId,
      getUser: fetchUser,
      handleLogout,
      products,
      userId,
      user,
      email,
  }}
>
  {children}
  </AuthContext.Provider>
);
};

export default AuthContextProvider;
