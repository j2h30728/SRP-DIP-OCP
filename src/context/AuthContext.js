/**
 * AuthContext
 *
 * signin(eamil,password):Promise<undefined>
 * signup(email,password):Promise<undefined>
 * logout():void
 */

import { createContext, useContext } from "react";

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children, authService }) {
  const signin = authService.signin.bind(authService);
  const signup = authService.signup.bind(authService);
  const logout = authService.logout.bind(authService);

  return (
    <AuthContext.Provider value={{ signin, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
