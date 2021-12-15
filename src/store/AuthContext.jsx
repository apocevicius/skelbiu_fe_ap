import { createContext, useContext, useState } from 'react';
import { toast } from 'react-hot-toast';

export const AuthContext = createContext({
  authData: {},
  setAuthData() {},
  isLoggedIn: false,
  login() {},
  logout() {},
});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [authData, setAuthData] = useState({
    email: null,
    token: null,
  });
  const isLoggedIn = !!authData.token;

  const login = (token, email) => {
    setAuthData((s) => ({
      ...s,
      email: email,
      token: token,
    }));
    toast.success('Logged In');
    return true;
  };

  const logout = () => {
    setAuthData((s) => ({ ...s, email: null, token: null }));
    toast.success('Logged Out');
  };

  return (
    <AuthContext.Provider
      value={{ authData, isLoggedIn, setAuthData, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
