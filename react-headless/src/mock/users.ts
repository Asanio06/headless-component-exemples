export type User = {
  id: number;
  firstname: string;
  lastname: string;
  age: number;
};

export const users: User[] = [
  {
    id: 0,
    firstname: "Lansana",
    lastname: "Diomande",
    age: 24,
  },
  {
    id: 2,
    firstname: "Alice",
    lastname: "Doe",
    age: 23,
  },
  {
    id: 3,
    firstname: "Bob",
    lastname: "Doe",
    age: 24,
  },
  {
    id: 4,
    firstname: "Eve",
    lastname: "Doe",
    age: 25,
  },
];
