/**
 * There is an array, each item has such format:
 * {firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx', profession: ‘xxx’}
 * lastName, note can be empty, customerID can only be a set of digital numbers.
 * profession can only have ‘student’, ‘freelancer’, ‘productOwner’, ‘engineer’ or
 * ‘systemAnalytics’.

 * Q2. Please sort by ‘profession’ to follow the principle.
 * (‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ > ‘student’’)
 */

export interface User {
  firstName: string;
  lastName?: string;
  customerID: string;
  note?: string;
  profession:
    | "student"
    | "freelancer"
    | "productOwner"
    | "engineer"
    | "systemAnalytics";
}

const customers: User[] = [
  {
    firstName: "John",
    lastName: "Doe",
    customerID: "12345",
    note: "Regular customer",
    profession: "engineer",
  },
  {
    firstName: "Johnny",
    lastName: "",
    customerID: "54321",
    note: "",
    profession: "student",
  },
  {
    firstName: "Bob",
    lastName: "Doe",
    customerID: "39289",
    note: "",
    profession: "systemAnalytics",
  },
];

// Q1. Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’) to sort this array and print it out.
export function sortUserName(user: User[]): User[] {
  return [...user].sort((a, b) => {
    const outcomeA = a.firstName + (a.lastName || "") + a.customerID;
    const outcomeB = b.firstName + (b.lastName || "") + b.customerID;
    return outcomeA.localeCompare(outcomeB);
  });
}

console.log("Sort user by name and ID:", sortUserName(customers));

// Q2. Please sort by ‘profession’ to follow the principle.(‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ > ‘student’’)

export function sortByType(user: User[]) {
  const professionOrder = {
    systemAnalytics: 5,
    engineer: 4,
    productOwner: 3,
    freelancer: 2,
    student: 1,
  };

  return [...user].sort((a, b) => {
    return professionOrder[b.profession] - professionOrder[a.profession];
  });
}

console.log("Sort user by profession:", sortByType(customers));
