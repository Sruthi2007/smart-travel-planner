/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";

// ✅ Create context HERE (do not import)
export const AuthContext = createContext();

function AuthProvider({ children }) {

  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");

    try {
      if (token) {
        return jwtDecode(token);
      }
    } catch {
      console.log("Invalid token");
      localStorage.removeItem("token");
    }

    return null;
  });

  const login = (token) => {
    localStorage.setItem("token", token);
    const decoded = jwtDecode(token);
    setUser(decoded);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;