import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  isAuthed: undefined,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isAuthed, setIsAuthed] = useState(undefined);

  useEffect(() => {
    const auth = async () => {
      const response = await fetch("/auth");
      const owner = await response.json();

      setIsAuthed(owner?.id);
    };

    auth();
  }, []);

  const login = async (username, password) => {
    const response = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const owner = await response.json();
    if (owner.id) {
      setIsAuthed(owner?.id);
    } else {
      alert(owner.error.login);
    }
  };

  const create_owner = async (username, password, city, zipcode) => {
    const response = await fetch("/owners", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, city, zipcode }),
    });

    const owner = await response.json();
    if (owner.id) {
      setIsAuthed(owner?.id);
    } else {
      alert(owner.errors.join(", "));
    }
  };

  const logout = async () => {
    await fetch("/logout", {
      method: "DELETE",
    });

    setIsAuthed(undefined);
  };

  return (
    <AuthContext.Provider value={{ isAuthed, login, logout, create_owner }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
