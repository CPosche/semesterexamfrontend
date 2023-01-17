import React from "react";
import { useState } from "react";
import facade from "../utils/ApiFacade";

interface Props {
  login: (username: string, password: string) => void;
}

const Login: React.FC<Props> = ({ login }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const performLogin = () => {
    login(username, password);
  };

  const handleLogin = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    evt.preventDefault();
    performLogin();
  };

  const handleRegister = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    evt.preventDefault();
    performRegister();
  };

  const performRegister = async () => {
    console.log("register");
    const res = facade.register(username, password);
    setUsername("");
    setPassword("");
    const resp = document.getElementById("response");
    if (resp) {
      resp.innerHTML = await res;
    }
  };

  return (
    <div className="flex justify-center text-white">
      <form className="flex flex-col w-3/4 text-center mt-4 gap-3">
        <label htmlFor="username">Username</label>
        <input
          className="p-1 rounded-lg text-black"
          type="text"
          value={username}
          onChange={(evt) => setUsername(evt.target.value)}
          placeholder="username"
          name="username"
          id="username"
        />
        <label htmlFor="password">Password</label>
        <input
          className="p-1 rounded-lg text-black"
          type="password"
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
          placeholder="password"
          name="password"
          id="password"
        />
        <div className="flex justify-center gap-3 mb-3">
          {register ? (
            <button
              type="submit"
              name="register"
              onClick={(e) => handleRegister(e)}
              className="px-2 py-1 rounded-lg bg-green-600 ring-2 ring-green-800"
            >
              Register
            </button>
          ) : (
            <button
              type="submit"
              name="login"
              onClick={(e) => handleLogin(e)}
              className="px-2 py-1 rounded-lg bg-green-600 ring-2 ring-green-800"
            >
              Login
            </button>
          )}
          <div>
            <input
              type="checkbox"
              onChange={(e) => setRegister(e.target.checked)}
            />
            <label htmlFor="register">Register</label>
          </div>
        </div>
      </form>
      <p className="text-white" id="response"></p>
    </div>
  );
};

export default Login;
