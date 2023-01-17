export interface IMenuItem {
  name: string;
  link: string;
  icon: string;
}

export interface ILoginCredentials {
  username: string;
  password: string;
}

export interface IHeaders {
  "Content-type": string;
  Accept: string;
  "x-access-token"?: string;
}

export type Match = {
  id: number;
  players: string[];
  opponent: string;
  judge: string;
  type: string;
  inDoors: boolean;
  locationDTO: LocationDTO;
};

export type LocationDTO = {
  address: string;
  city: string;
  condition: string;
};

export type Opts = {
  method: string;
  headers: IHeaders;
  body?: string;
} & RequestInit;

export type AddPlayer = {
  username: string;
  name: string;
  phone: string;
  email: string;
  status: string;
};
