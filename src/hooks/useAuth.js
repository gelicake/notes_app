import { useMemo, useState } from "react";
import { loginUser, registerUser } from "../api/user";

export default function useAuth() {
  const [user, setUser] = useState(() => {
    const userString = localStorage.getItem("user");
    if (userString) {
      return JSON.parse(userString);
    }
    return null;
  });

  const value = useMemo(
    () => ({
      user,
      signin: (email, password) => {
        loginUser(email, password)
          .then((newUser) => {
            setUser(newUser);
            localStorage.setItem("user", JSON.stringify(newUser));
          })
          .catch(() => {
            setUser(null);
            localStorage.removeItem("user");
          });
      },
      signout: () => {
        setUser(null);
        localStorage.removeItem("user");
      },
      signup: (email, password) => {
        registerUser(email, password)
          .then((newUser) => {
            setUser(newUser);
            localStorage.setItem("user", JSON.stringify(newUser));
          })
          .catch(() => {
            setUser(null);
            localStorage.removeItem("user");
          });
      },
    }),
    [user]
  );
  return value;
}
