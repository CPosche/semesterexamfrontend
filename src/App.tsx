import Login from "./components/Login";
import Menu from "./components/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Matches from "./pages/Matches";
import MyMatches from "./pages/MyMatches";
import Admin from "./pages/Admin";
import { useState } from "react";
import facade from "./utils/ApiFacade";
import LoggedIn from "./components/LoggedIn";
function App() {
  const [loggedIn, setLoggedIn] = useState(facade.loggedIn);

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
  };
  const login = (user: string, pass: string) => {
    facade.login(user, pass).then((res) => setLoggedIn(true));
  };

  return (
    <div className="App w-screen h-screen flex">
      <div className="flex w-1/5 flex-col h-full bg-gray-800">
        <div className="flex w-full justify-center h-28">
          <p className="flex my-auto text-3xl text-white">Match System</p>
        </div>
        <div className="min-h-20 bg-slate-900 shadow-top">
          {loggedIn ? <LoggedIn logout={logout} /> : <Login login={login} />}
        </div>
        <MyMatches loggedIn={loggedIn} />
      </div>
      <div className="flex w-4/5 flex-col h-full bg-gray-900">
        <Router>
          <div className="flex w-full h-28 bg-gray-600">
            <Menu loggedIn={loggedIn} />
          </div>
          <div className="flex flex-grow text-white p-3">
            <Routes>
              <Route
                path="/"
                element={<div>Welcome to the match system frontpage</div>}
              />
              <Route path="matches" element={<Matches />} />
              <Route path="admin" element={<Admin />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
