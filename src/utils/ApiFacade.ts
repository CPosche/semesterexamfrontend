import React from "react";
import { AddPlayer, ILoginCredentials, Opts } from "./interfaces";
const URL = "https://fluffatheduck.dk/tomcat/semesterexam";

function handleHttpErrors(res: Response) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

const ApiFacade = () => {
  const setToken = (token: string) => {
    localStorage.setItem("jwtToken", token);
  };
  const getToken = () => {
    const value = localStorage.getItem("jwtToken");
    if (value === null) return undefined;
    return value;
  };
  const loggedIn = () => {
    const loggedIn = getToken() != null;
    return loggedIn;
  };
  const logout = () => {
    localStorage.removeItem("jwtToken");
  };

  const makeOptions = <T>(method: string, addToken: boolean, body?: T) => {
    var opts: Opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    };
    if (addToken && loggedIn()) {
      opts.headers["x-access-token"] = getToken();
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  };

  const register = async (user: string, password: string) => {
    const options = makeOptions("POST", true, {
      username: user,
      password: password,
    });
    const data = await fetch(URL + "/api/user/create", options);
    return await data.json();
  };

  const becomeAdmin = async (username: string) => {
    const options = makeOptions("PUT", true, { username: username });
    const data = await fetch(URL + "/api/user/becomeadmin", options);
    return await data.json();
  };

  const getMatches = async () => {
    const options = makeOptions("GET", true);
    const data = await fetch(URL + "/api/matches/all", options);
    return await data.json();
  };

  const login = async (user: string, password: string) => {
    const options = makeOptions("POST", true, {
      username: user,
      password: password,
    });
    return fetch(URL + "/api/login", options)
      .then(handleHttpErrors)
      .then((res) => {
        setToken(res.token);
      });
  };

  const addPlayer = async (player: AddPlayer) => {
    const options = makeOptions("POST", true, player);
    const data = await fetch(URL + "/api/user/addPlayer", options);
    const res = await data.json();
    console.log(await res);
    return res;
  };

  return {
    addPlayer,
    register,
    getMatches,
    loggedIn,
    logout,
    setToken,
    getToken,
    login,
    becomeAdmin,
  };
};
const facade = ApiFacade();
export default facade;
