import React, { useEffect } from "react";
import { useAuthStore } from "../store/auth.store";
import { renderIntoDocument } from "react-dom/test-utils";

export const LoginPage = () => {
  const authStatus = useAuthStore((state) => state.status);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    setTimeout(() => {
      logout();
    }, 1500);
  }, []);

  if (authStatus === "checking") {
    return <h3>Loading</h3>;
  }

  return (
    <>
      <h3>Login Page</h3>

      {authStatus === "authenticated" ? (
        <div className="">
          Autenticado como: {JSON.stringify(user, null, 2)}
        </div>
      ) : (
        <div className="">
          No Autenticado como: {JSON.stringify(user, null, 2)}
        </div>
      )}

      {authStatus === "authenticated" ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={() => login("lucianoBertero", 123)}>Login</button>
      )}
    </>
  );
};
