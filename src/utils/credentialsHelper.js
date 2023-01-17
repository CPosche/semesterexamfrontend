import facade from "../utils/ApiFacade";

function decodeJwt() {
  const token = facade.getToken();
  console.log("token", token);
  if (!token) return undefined;
  const jwtData = token.split(".")[1];
  const decodedJwtJsonData = window.atob(jwtData);
  const decodedJwtData = JSON.parse(decodedJwtJsonData);
  return decodedJwtData;
}

function getUsername(jwt) {
  return jwt && jwt.username;
}

function getUserRoles(jwt) {
  if (!jwt || !jwt.roles) return false;
  return jwt.roles.split(",");
}

function getPlayer(jwt) {
  if (!jwt || !jwt.player) return false;
  return jwt.player;
}

function getUserInfo() {
  const jwtData = decodeJwt();
  return {
    username: getUsername(jwtData),
    roles: getUserRoles(jwtData) || [],
    player: getPlayer(jwtData) || 0,
  };
}

export { getUserInfo };
