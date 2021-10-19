export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
}

export const checkValidUser = (user) => {
  return user?.username && user?.firstName && user?.lastName && user?.password;
};

export const Users: User[] = [
  {
    id: 0,
    username: "marcel",
    firstName: "Marcel",
    lastName: "Oakley",
    password: "marcel",
  },
  {
    id: 1,
    username: "fatima",
    firstName: "Fatima",
    lastName: "Lim",
    password: "fatima",
  },
  {
    id: 2,
    username: "johnny",
    firstName: "Johnny",
    lastName: "Monaghan",
    password: "johnny",
  },
  {
    id: 3,
    username: "rogan",
    firstName: "Rogan",
    lastName: "Mckeown",
    password: "rogan",
  },
  {
    id: 4,
    username: "ananya",
    firstName: "Ananya",
    lastName: "Stokes",
    password: "ananya",
  },
  {
    id: 5,
    username: "abbie",
    firstName: "Abbie",
    lastName: "Levy",
    password: "abbie",
  },
  {
    id: 6,
    username: "mikael",
    firstName: "Mikael",
    lastName: "Leal",
    password: "mikael",
  },
  {
    id: 7,
    username: "kyra",
    firstName: "Kyra",
    lastName: "Clarke",
    password: "kyra",
  },
  {
    id: 8,
    username: "louis",
    firstName: "Louis",
    lastName: "Osborne",
    password: "louis",
  },
  {
    id: 9,
    username: "harvie",
    firstName: "Harvie",
    lastName: "Kirkpatrick",
    password: "harvie",
  },
];
