import { IMenuItem } from "../utils/interfaces";
import { NavLink } from "react-router-dom";

const MenuItem: React.FC<IMenuItem> = ({ name, link, icon }) => {
  return (
    <NavLink to={link} className="menuLink">
      <div className="h-100 px-4 flex flex-col py-2 text-center items-center gap-1">
        <img src={icon} width={70} />
        <p>{name}</p>
      </div>
    </NavLink>
  );
};

export default MenuItem;
