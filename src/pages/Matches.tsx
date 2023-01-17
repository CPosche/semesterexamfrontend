import { useEffect, useState } from "react";
import facade from "../utils/ApiFacade";
import { Match } from "../utils/interfaces";
import { getUserInfo } from "../utils/credentialsHelper";

const Matches = () => {
  const [matches, setMatches] = useState<Match[]>();

  const getMatches = async () => {
    setMatches(await facade.getMatches());
  };

  useEffect(() => {
    getMatches();
  }, []);

  return (
    <div>
      <table className="table-fixed">
        <thead>
          <tr>
            <th>Match</th>
            <th>players</th>
            <th>opponent</th>
            <th>judge</th>
            <th>type</th>
            <th>indoors</th>
            <th>location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {matches?.map((match) => (
            <tr key={match.id}>
              <td>{match.id}</td>
              <td>{match.players.map((player) => player).join(", ")}</td>
              <td>{match.opponent}</td>
              <td>{match.judge}</td>
              <td>{match.type}</td>
              <td>{match.inDoors ? "Yes" : "No"}</td>
              <td>
                {match.locationDTO.address}, {match.locationDTO.city}
                {", "}
                {match.locationDTO.condition}
              </td>
              <td>No actions</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Matches;
