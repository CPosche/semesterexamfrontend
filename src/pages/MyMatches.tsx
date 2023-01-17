import { useEffect, useState } from "react";
import facade from "../utils/ApiFacade";
import { Match } from "../utils/interfaces";
import { getUserInfo } from "../utils/credentialsHelper";

interface Props {
  loggedIn: boolean;
}

const MyMatches: React.FC<Props> = ({ loggedIn }) => {
  return (
    <div className="flex flex-col items-center text-white pt-2">
      <p>My Matches</p>
      {loggedIn ? (
        !getUserInfo().player ? (
          <p>your not a player</p>
        ) : (
          ""
        )
      ) : (
        <p>Please login to see your matches</p>
      )}
    </div>
  );
};

export default MyMatches;
