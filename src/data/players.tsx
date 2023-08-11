import { groupBy, keyBy } from "lodash";

export enum Status {
  Active = "active",
  Alternate = "alternate",
  Inactive = "inactive",
}

export const players = {
  // Active
  Alex: {
    id: 1,
    name: "Alex Ngo",
    status: Status.Active,
  },
  Michael: {
    id: 2,
    name: "Michael Ngo",
    status: Status.Active,
  },
  Daniel: {
    id: 3,
    name: "Daniel Garvin",
    status: Status.Active,
  },
  Robin: {
    id: 4,
    name: "Robin Batingan",
    status: Status.Active,
  },
  DeNoris: {
    id: 5,
    name: "DeNoris Jenkins",
    status: Status.Active,
  },
  Nguyen: {
    id: 6,
    name: "Nguyen Luan Nguyen",
    status: Status.Active,
  },
  Hexi: {
    id: 7,
    name: "Hexi Unknown",
    status: Status.Active,
  },
  Jesse: {
    id: 8,
    name: "Jesse Kowals-Rose",
    status: Status.Active,
  },

  // Alternates
  Logan: {
    id: 9,
    name: "Logan Parr",
    status: Status.Alternate,
  },
  Issac: {
    id: 10,
    name: "Issac Chung",
    status: Status.Alternate,
  },

  // Inactive
  Ram: {
    id: 11,
    name: "Ram Tiwari",
    status: Status.Inactive,
  },
  JJ: {
    id: 12,
    name: "JJ Guo",
    status: Status.Inactive,
  },
};

// export const playersGroupedByStatus = groupBy(
//   players,
//   (player) => player.status
// );

// export const playersById = keyBy(players, (player) => player.id);

export default players;
