import MenuItem from "./MenuItem";
import matchesicon from "../assets/images/matchesicon.png";
import mymatchesicon from "../assets/images/mymatchesicon.png";
import adminicon from "../assets/images/adminicon.png";
import homeicon from "../assets/images/homeicon.png";
import { getUserInfo } from "../utils/credentialsHelper";

interface Props {
  loggedIn: boolean;
}

const Menu: React.FC<Props> = ({ loggedIn }) => {
  return (
    <div className="flex divide-x">
      <MenuItem name="Home" link="/" icon={homeicon} />
      <MenuItem name="Matches" link="matches" icon={matchesicon} />
      {loggedIn && getUserInfo().roles.includes("admin") && (
        <MenuItem name="admin" link="admin" icon={adminicon} />
      )}
    </div>
  );
};

export default Menu;
