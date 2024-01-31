import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  isAuthed: undefined,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isAuthed, setIsAuthed] = useState(undefined);

  const [hasDogs, setHasDogs] = useState(false);

  const checkPermissions = async () => {
    if (!isAuthed) {
      return;
    }

    const response = await fetch(`/owners/${isAuthed}`);
    const data = await response.json();
    setHasDogs(data.dogs.length > 0);
  };

  useEffect(() => {
    const auth = async () => {
      const response = await fetch("/auth");
      const owner = await response.json();

      setIsAuthed(owner?.id);
    };

    auth();
  }, []);

  useEffect(() => {
    checkPermissions();
  }, [isAuthed]);

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
    <AuthContext.Provider
      value={{
        isAuthed,
        login,
        logout,
        create_owner,
        hasDogs,
        checkPermissions,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
