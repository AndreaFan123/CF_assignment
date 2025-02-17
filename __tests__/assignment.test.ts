import { describe, it, expect } from "vitest";
import { sortUserName, sortByType, User } from "../assignments/assignment_1";
import { getUniqueNumber } from "../assignments/assignment_3";

const testCustomers: User[] = [
  {
    firstName: "Allen",
    lastName: "Doe",
    customerID: "2323",
    note: "Good customer",
    profession: "student",
  },
  {
    firstName: "David",
    lastName: "King",
    customerID: "8029",
    note: "",
    profession: "engineer",
  },
  {
    firstName: "Luke",
    lastName: "",
    customerID: "0912",
    note: "",
    profession: "freelancer",
  },
];

// Assignment 1
// Test 1: Test sortUserName

describe("sortUserName", () => {
  it("should sort users by firstName + lastName + customerID", () => {
    const outcome = sortUserName(testCustomers);
    expect(outcome[0].firstName).toBe("Allen");
    expect(outcome[1].firstName).toBe("David");
    expect(outcome[2].firstName).toBe("Luke");
  });
});

// Test 2: Test sortByType

describe("sortByType", () => {
  it("should sort user by profession with specified order", () => {
    const outcome = sortByType(testCustomers);

    expect(outcome[0].profession).toBe("engineer");
    expect(outcome[1].profession).toBe("freelancer");
    expect(outcome[2].profession).toBe("student");
  });
});

// Assignment 3: Find unique value
describe("get unique value", () => {
  const values = [1, 1, 1, 2, 3, 3, 4, 5, 6, 7, 7, 9];
  const expectedUniqueValues = [1, 2, 3, 4, 5, 6, 7, 9];

  it("should output unique values", () => {
    const input = [2, 2, 3, 4, 7, 5, 3, 9];
    expect(getUniqueNumber(values)).toEqual(expectedUniqueValues);
  });
});
