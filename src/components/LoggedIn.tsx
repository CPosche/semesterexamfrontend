import { getUserInfo } from "../utils/credentialsHelper";
import { useEffect, useState } from "react";
import schhicon from "../assets/images/schhicon.png";
import facade from "../utils/ApiFacade";
import RegisterModal from "./RegisterModal";

interface Props {
  logout: () => void;
}

const LoggedIn: React.FC<Props> = ({ logout }) => {
  const [addingPlayer, setAddingPlayer] = useState(false);

  useEffect(() => {
    console.log("Logged in as", getUserInfo().username);
  }, []);

  return (
    <div className="flex flex-col text-white items-center gap-2 pt-2 relative">
      <div className="flex">
        <p>Logged in as</p>
        <button
          className="absolute top-2 right-2 px-1 py-1 ring-2 ring-red-900 bg-red-700 rounded-lg"
          onClick={logout}
        >
          Logout
        </button>
        <div className="flex flex-col items-center absolute top-2 left-2">
          <img src={schhicon} width={20} />
          <button
            className="text-xs"
            onClick={() => facade.becomeAdmin(getUserInfo().username)}
          >
            become admin
          </button>
        </div>
      </div>
      <p className="text-orange-600">{getUserInfo().username}</p>
      <div className="flex flex-col items-center">
        <p className="text-sm">Role(s)</p>
        {getUserInfo().roles.map((role: string) => (
          <p className="text-sm">{role}</p>
        ))}
      </div>
      <div>
        {!getUserInfo().player ? (
          <button onClick={() => setAddingPlayer(true)}>add player</button>
        ) : (
          ""
        )}
      </div>
      <RegisterModal
        addingPlayer={addingPlayer}
        setAddingPlayer={setAddingPlayer}
      />
    </div>
  );
};

export default LoggedIn;
