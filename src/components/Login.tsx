import React, { useState } from "react";

type AuthUser = {
  email: string;
  password: string;
};
function Login() {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({
      email: "akcs@example.com",
      password: "123456",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <h1>User is {user ? "LoggedIn" : "LoggedOut"}</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Login;
