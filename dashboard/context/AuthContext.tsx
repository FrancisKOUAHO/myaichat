import { createContext, ReactNode, useContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);

  const login = async (token: string) => {
    try {
      const response = await axios.get(`/api/login-with-token/${token}`);

      if (response.status === 200) {
        localStorage.setItem('token', response.data.user.login_token);
        setToken(response.data.user.login_token);
      }
    } catch (error: any) {
      console.log('error', error);
    }
  };

  const requestLoginLink = async (email: string) => {
    try {
      const response = await axios.post('/api/request-login-link', { email });
      if (response.status === 200) {
        console.log(response.data.message);
      }
    } catch (error: any) {
      console.log('error', error);
    }
  };

  return (
    <AuthContext.Provider value={{ login, requestLoginLink }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
